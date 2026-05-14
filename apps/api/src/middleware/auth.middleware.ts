import { Request, Response, NextFunction } from "express";
import { UnauthorizedError, ForbiddenError } from "../core/errors";

export type UserRole = "guest" | "user" | "admin";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    role: UserRole;
  };
}

/**
 * A factory for Role-Based Access Control (RBAC) middleware.
 * Usage: router.post("/", authMiddleware(["admin"]), controller.create);
 */
export const authMiddleware = (allowedRoles: UserRole[] = ["user"]) => {
  return (req: AuthRequest, _res: Response, next: NextFunction) => {
    // 1. Check for presence of credentials (e.g., Authorization header or cookie)
    // This is a placeholder for your actual JWT/Session verification logic
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return next(new UnauthorizedError("Authentication required"));
    }

    // 2. Mock verification (Replace with actual JWT verification)
    // For demo purposes, we assume 'admin-token' makes you an admin
    const mockUser = authHeader === "Bearer admin-token" 
      ? { id: "1", role: "admin" as UserRole } 
      : { id: "2", role: "user" as UserRole };

    // 3. Attach user to request
    req.user = mockUser;

    // 4. Role Authorization
    if (!allowedRoles.includes(req.user.role)) {
      return next(new ForbiddenError("You do not have permission to perform this action"));
    }

    next();
  };
};

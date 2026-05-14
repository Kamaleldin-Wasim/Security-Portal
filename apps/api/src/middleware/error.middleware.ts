import { Request, Response, NextFunction } from "express";
import { AppError } from "../core/errors";
import { config } from "../core/config";

export const errorMiddleware = (
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      ...(config.NODE_ENV === "development" && { stack: err.stack }),
    });
  }

  // Unhandled errors
  console.error("💥 Unhandled Error:", err);
  
  return res.status(500).json({
    status: "error",
    message: config.NODE_ENV === "production" ? "Internal Server Error" : err.message,
    ...(config.NODE_ENV === "development" && { stack: err.stack }),
  });
};

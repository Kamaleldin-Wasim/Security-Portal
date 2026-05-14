import { Router } from "express";
import { blogController } from "./blog.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

const router = Router();

/**
 * PUBLIC ROUTES (Read-Only)
 */

// List all posts
router.get("/", blogController.getPosts);

// List all categories
router.get("/categories", blogController.getCategories);

// Get single post by ID (for admin/preview) or Slug (public)
// Note: We'll extend the controller later to support slug-based lookups
router.get("/:id", blogController.getPost);


/**
 * PROTECTED ROUTES (Admin-Only)
 */

// Create a new blog post
router.post(
  "/", 
  authMiddleware(["admin"]), 
  blogController.createPost
);

// Update an existing blog post
router.put(
  "/:id", 
  authMiddleware(["admin"]), 
  blogController.updatePost
);

// Delete a blog post
router.delete(
  "/:id", 
  authMiddleware(["admin"]), 
  blogController.deletePost
);

export { router as blogRouter };

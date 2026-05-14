import { Request, Response, NextFunction } from "express";
import { blogService } from "./blog.service";
import { blogPostSchema } from "./blog.validation";
import { BadRequestError } from "../../core/errors";

export class BlogController {
  /**
   * GET /api/blog-posts
   * Supports cursor-based pagination
   */
  async getPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const cursor = typeof req.query.cursor === "string" ? req.query.cursor : undefined;
      const takeQuery = typeof req.query.take === "string" ? parseInt(req.query.take, 10) : 10;
      const take = isNaN(takeQuery) ? 10 : takeQuery;
      const category = typeof req.query.category === "string" ? req.query.category : undefined;
      
      const result = await blogService.getAllPosts(cursor, take, category);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }

  async getCategories(_req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await blogService.getCategories();
      res.json(categories);
    } catch (error) {
      next(error);
    }
  }

  /**
   * GET /api/blog-posts/:id
   * Supports lookup by ID or SEO Slug
   */
  async getPost(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      
      if (!id || typeof id !== "string") {
        throw new BadRequestError("Post identifier is required and must be a string");
      }

      // Detection logic: CUIDs are typically ~25 chars and alphanumeric. 
      // Slugs are usually shorter or hyphenated.
      // We check for length and absence of hyphens to guess if it's a CUID.
      const isLikelyId = id.length > 20 && id.indexOf("-") === -1;

      const post = isLikelyId
        ? await blogService.getPostById(id)
        : await blogService.getPostBySlug(id);
        
      res.json(post);
    } catch (error) {
      next(error);
    }
  }

  /**
   * POST /api/blog-posts
   * Admin Only (Protected by Middleware)
   */
  async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = blogPostSchema.safeParse(req.body);
      if (!payload.success) {
        throw new BadRequestError("Invalid blog post data: " + JSON.stringify(payload.error.format()));
      }
      const post = await blogService.createPost(payload.data);
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }

  /**
   * PUT /api/blog-posts/:id
   * Admin Only (Protected by Middleware)
   */
  async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id || typeof id !== "string") {
        throw new BadRequestError("Valid Post ID is required");
      }

      const payload = blogPostSchema.partial().safeParse(req.body);
      if (!payload.success) {
        throw new BadRequestError("Invalid blog post data");
      }
      const post = await blogService.updatePost(id, payload.data);
      res.json(post);
    } catch (error) {
      next(error);
    }
  }

  /**
   * DELETE /api/blog-posts/:id
   * Admin Only (Protected by Middleware)
   */
  async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      if (!id || typeof id !== "string") {
        throw new BadRequestError("Valid Post ID is required");
      }

      await blogService.deletePost(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}

export const blogController = new BlogController();

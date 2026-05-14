import { prisma } from "../../providers/db";
import { CreateBlogPostDto, UpdateBlogPostDto } from "./blog.validation";
import { NotFoundError } from "../../core/errors";

export class BlogService {
  /**
   * Performance Optimized: Cursor-based Pagination
   * Scaling: O(1) skip instead of O(N) offset
   */
  /**
   * Performance Optimized: Cursor-based Pagination with Taxonomy Filtering
   */
  async getAllPosts(cursor?: string, take: number = 10, categorySlug?: string) {
    const posts = await prisma.blogPost.findMany({
      take,
      ...(cursor && { skip: 1, cursor: { id: cursor } }),
      where: { 
        isPublished: true,
        ...(categorySlug && { category: { slug: categorySlug } }),
      },
      include: {
        category: true,
      },
      orderBy: { createdAt: "desc" },
    });

    return {
      data: posts,
      nextCursor: (posts.length > 0 && posts.length === take) 
        ? posts[posts.length - 1].id 
        : null,
    };
  }

  /**
   * Fetch all categories for filtering UI
   */
  async getCategories() {
    return prisma.category.findMany({
      orderBy: { nameEn: "asc" },
    });
  }

  /**
   * SEO Optimized: Lookup by unique slug
   * Indexed: Slug has @unique index in Prisma
   */
  async getPostBySlug(slug: string) {
    const post = await prisma.blogPost.findUnique({
      where: { slug },
    });
    if (!post) throw new NotFoundError("Blog post not found");
    return post;
  }

  async getPostById(id: string) {
    const post = await prisma.blogPost.findUnique({
      where: { id },
    });
    if (!post) throw new NotFoundError("Blog post not found");
    return post;
  }

  async createPost(data: CreateBlogPostDto) {
    return prisma.blogPost.create({
      data,
    });
  }

  async updatePost(id: string, data: UpdateBlogPostDto) {
    try {
      return await prisma.blogPost.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new NotFoundError("Blog post not found");
    }
  }

  async deletePost(id: string) {
    try {
      await prisma.blogPost.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundError("Blog post not found");
    }
  }
}

export const blogService = new BlogService();

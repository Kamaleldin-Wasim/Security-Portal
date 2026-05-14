import { z } from "zod";

export const blogPostSchema = z.object({
  titleAr: z.string().min(2, "Arabic title is required"),
  titleEn: z.string().min(2, "English title is required"),
  slug: z.string().min(2, "Slug is required"),
  excerptAr: z.string().min(10, "Arabic excerpt must be at least 10 characters"),
  excerptEn: z.string().min(10, "English excerpt must be at least 10 characters"),
  contentAr: z.string().min(20, "Arabic content must be at least 20 characters"),
  contentEn: z.string().min(20, "English content must be at least 20 characters"),
  isPublished: z.boolean().optional().default(false),
});

export type CreateBlogPostDto = z.infer<typeof blogPostSchema>;
export type UpdateBlogPostDto = Partial<CreateBlogPostDto>;

import { z } from "zod";

// --- Generic API Responses ---

export interface PaginatedResponse<T> {
  data: T[];
  nextCursor?: string | null;
  meta?: {
    total: number;
    page: number;
    lastPage: number;
    hasNextPage: boolean;
  };
}

// --- Feedback Module Contracts ---

export const messageSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional().nullable(),
  phone: z.string().min(7, "Invalid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")).nullable(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const quoteSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional().nullable(),
  phone: z.string().min(7, "Invalid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")).nullable(),
  serviceType: z.string().min(2, "Service type is required"),
  location: z.string().optional().nullable(),
  details: z.string().min(10, "Details must be at least 10 characters"),
});

export const jobApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  phone: z.string().min(7, "Invalid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")).nullable(),
  city: z.string().optional().nullable(),
  experience: z.string().min(10, "Experience description must be at least 10 characters"),
});

export type CreateMessageDto = z.infer<typeof messageSchema>;
export type CreateQuoteDto = z.infer<typeof quoteSchema>;
export type CreateJobApplicationDto = z.infer<typeof jobApplicationSchema>;

// --- Feedback Response Types ---

export interface FeedbackResponse {
  success: boolean;
  id: string;
}

// --- Blog Module Contracts ---

export const categorySchema = z.object({
  id: z.string(),
  nameAr: z.string(),
  nameEn: z.string(),
  slug: z.string(),
});

export type Category = z.infer<typeof categorySchema>;

export const blogPostSchema = z.object({
  id: z.string().optional(),
  titleAr: z.string().min(5, "Title (Arabic) is required"),
  titleEn: z.string().min(5, "Title (English) is required"),
  slug: z.string().min(3, "Slug is required"),
  excerptAr: z.string().min(10, "Excerpt (Arabic) is required"),
  excerptEn: z.string().min(10, "Excerpt (English) is required"),
  contentAr: z.string().min(20, "Content (Arabic) is required"),
  contentEn: z.string().min(20, "Content (English) is required"),
  isPublished: z.boolean().default(false),
  categoryId: z.string().optional().nullable(),
  category: categorySchema.optional().nullable(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;
export type CreateBlogPostDto = Omit<BlogPost, "id" | "createdAt" | "updatedAt">;
export type UpdateBlogPostDto = Partial<CreateBlogPostDto>;

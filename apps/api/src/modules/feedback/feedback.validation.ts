import { z } from "zod";

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

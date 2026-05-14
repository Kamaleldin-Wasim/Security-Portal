import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.string().transform(Number).default("4000"),
  DATABASE_URL: z.string().url(),
  FRONTEND_URL: z.string().url().default("http://localhost:3000"),
  
  // Email
  SMTP_HOST: z.string().default("smtp.gmail.com"),
  SMTP_PORT: z.string().transform(Number).default("587"),
  SMTP_SECURE: z.string().transform((v) => v === "true").default("false"),
  EMAIL_USER: z.string().email().optional(),
  EMAIL_PASS: z.string().optional(),
  ADMIN_EMAIL: z.string().email().optional(),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("❌ Invalid environment variables:", JSON.stringify(env.error.format(), null, 2));
  process.exit(1);
}

export const config = env.data;

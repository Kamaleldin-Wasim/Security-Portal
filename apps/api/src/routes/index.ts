import { Router } from "express";
import { feedbackRouter } from "../modules/feedback/feedback.routes";
import { blogRouter } from "../modules/blog/blog.routes";

const router = Router();

// Health check
router.get("/health", (_req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

// Feedback Module
router.use("/feedback", feedbackRouter);

// Blog Module
router.use("/blog-posts", blogRouter);

export { router as mainRouter };

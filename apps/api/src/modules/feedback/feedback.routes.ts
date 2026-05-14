import { Router } from "express";
import { feedbackController } from "./feedback.controller";
import { formRateLimit } from "../../middleware/rate-limit.middleware";

const router = Router();

/**
 * @route   POST /api/feedback/messages
 * @desc    Submit a contact message
 * @access  Public
 */
router.post("/messages", formRateLimit, feedbackController.postMessage);

/**
 * @route   POST /api/feedback/quotes
 * @desc    Submit a quote request
 * @access  Public
 */
router.post("/quotes", formRateLimit, feedbackController.postQuote);

/**
 * @route   POST /api/feedback/job-applications
 * @desc    Submit a job application
 * @access  Public
 */
router.post("/job-applications", formRateLimit, feedbackController.postJobApplication);

export { router as feedbackRouter };

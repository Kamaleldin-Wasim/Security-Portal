import { Request, Response, NextFunction } from "express";
import { feedbackService } from "./feedback.service";
import { 
  messageSchema, 
  quoteSchema, 
  jobApplicationSchema 
} from "./feedback.validation";
import { BadRequestError } from "../../core/errors";

export class FeedbackController {
  /**
   * Handles contact message submissions
   */
  async postMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = messageSchema.safeParse(req.body);
      
      if (!payload.success) {
        throw new BadRequestError("Invalid message data");
      }

      const result = await feedbackService.createMessage(payload.data);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Handles quote request submissions
   */
  async postQuote(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = quoteSchema.safeParse(req.body);

      if (!payload.success) {
        throw new BadRequestError("Invalid quote request data");
      }

      const result = await feedbackService.createQuote(payload.data);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  /**
   * Handles job application submissions
   */
  async postJobApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const payload = jobApplicationSchema.safeParse(req.body);

      if (!payload.success) {
        throw new BadRequestError("Invalid job application data");
      }

      const result = await feedbackService.createJobApplication(payload.data);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}

export const feedbackController = new FeedbackController();

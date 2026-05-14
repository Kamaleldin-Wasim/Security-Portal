import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "./core/config";
import { errorMiddleware } from "./middleware/error.middleware";
import { mainRouter } from "./routes/index"; 

const app = express();

// Security Middlewares
app.use(helmet());
app.use(
  cors({
    origin: config.FRONTEND_URL,
    credentials: true,
  })
);

// Logging
if (config.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base Route
app.get("/", (_req, res) => {
  res.json({
    service: "ShieldGuard Security API",
    status: "online",
    version: "2.0.0 (Modular)",
  });
});

// API Routes
app.use("/api", mainRouter);

// Global Error Handler
app.use(errorMiddleware);

export { app };

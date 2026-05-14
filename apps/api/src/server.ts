import { app } from "./app";
import { config } from "./core/config";

const port = config.PORT;

const server = app.listen(port, () => {
  console.log(`🚀 API listening on port ${port} in ${config.NODE_ENV} mode`);
});

// Handle unhandled rejections
process.on("unhandledRejection", (err: Error) => {
  console.error("💥 UNHANDLED REJECTION! Shutting down...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle SIGTERM
process.on("SIGTERM", () => {
  console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
  server.close(() => {
    console.log("💥 Process terminated!");
  });
});


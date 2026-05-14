import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Standard ES module workaround for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig: NextConfig = {
  devIndicators: false,
  // typedRoutes: false, // Optional: Enable for stricter route typing
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  outputFileTracingRoot: path.join(__dirname, "../../"),
};

export default nextConfig;

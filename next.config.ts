import type { NextConfig } from "next";

const pages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["127.0.0.1"],
  devIndicators: false,
  ...(pages
    ? {
        basePath: "/english",
      }
    : {}),
};

export default nextConfig;

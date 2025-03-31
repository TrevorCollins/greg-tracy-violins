import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"], // Specify the image formats you want to support
  },
  devIndicators: false,
  experimental: {
    // optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;

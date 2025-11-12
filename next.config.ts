import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "**.licdn.com",
      },
    ],
  },
  experimental: {
    typedEnv: true,
    // optimizeCss: true, // Causes an error
    // dynamicIO: true,
    // turbopackTreeShaking: true,
    serverMinification: true,
  },
};

export default nextConfig;

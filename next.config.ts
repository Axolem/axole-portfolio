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
    reactCompiler: true,
    typedEnv: true,
    optimizeCss: true,
    // dynamicIO: true,
    turbopackTreeShaking: true,
    serverMinification: true,
  },
};

export default nextConfig;

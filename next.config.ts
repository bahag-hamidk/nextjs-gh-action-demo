import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/nextjs-gh-action-demo',
  images: {
    unoptimized: true
  }
};

export default nextConfig;

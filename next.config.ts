import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages serves from a subdirectory with your repo name
  basePath: '/computation',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // No trailing slash for GitHub Pages
  trailingSlash: false,
  // Help with static export
  reactStrictMode: true,
};

export default nextConfig;

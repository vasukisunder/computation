import type { NextConfig } from "next";

// Determine if we're building for production GitHub Pages
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  devIndicators: false,
  // Only set basePath for GitHub Pages production, not for local development
  ...(isGitHubPages ? { basePath: '/computation' } : {}),
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

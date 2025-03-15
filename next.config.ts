import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages serves from a subdirectory with your repo name
  basePath: '/computation',
  images: {
    unoptimized: true, // Required for static export
  },
  // No trailing slash for GitHub Pages
  trailingSlash: false,
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Enable static export for GitHub Pages
  output: 'export',
  // Disable Next/Image optimization during export
  images: { unoptimized: true },
  // Ensure directories export with index.html
  trailingSlash: true,
};

export default nextConfig;

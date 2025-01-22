import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add basePath and assetPrefix for GitHub Pages deployment
  basePath: "/Nexus-Blog", // Matches your repository name
  assetPrefix: "/Nexus-Blog", // Ensures assets are correctly loaded from the subpath
};

export default nextConfig;

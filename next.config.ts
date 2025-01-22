import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Nexus-Blog", // Replace with your repository name
  assetPrefix: "/Nexus-Blog", // Replace with your repository name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

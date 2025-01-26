import type { NextConfig } from "next";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();
const nextConfig: NextConfig = {
  images:{
    remotePatterns: [
      { protocol: 'https', hostname: 'nexus-blog-hjlt.onrender.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'firebasestorage.googleapis.com' }
    ]
  }
};

export default nextConfig;

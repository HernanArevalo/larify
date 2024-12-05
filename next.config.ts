import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'i.scdn.co'
      },
      {
        hostname: 'res.cloudinary.com'
      },
    ]
  }
};

export default nextConfig;

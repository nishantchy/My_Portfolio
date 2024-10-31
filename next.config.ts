import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["aceternity.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
  },
};

export default nextConfig;

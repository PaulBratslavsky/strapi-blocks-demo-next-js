import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "deserving-harmony-9f5ca04daf.media.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      }
    ],
  },
};

export default nextConfig;


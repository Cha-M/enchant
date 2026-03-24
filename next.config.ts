import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/enchant",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;

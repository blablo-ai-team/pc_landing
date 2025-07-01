import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <- bắt buộc nếu dùng export
  },
};

export default nextConfig;
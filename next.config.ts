import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', Add commentMore actions
   images: {
    unoptimized: true, // <- bắt buộc nếu dùng export
  },
};

export default nextConfig;

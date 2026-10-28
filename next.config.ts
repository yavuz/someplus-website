import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;

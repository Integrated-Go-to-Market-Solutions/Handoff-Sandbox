import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hides the floating Next.js dev badge in the corner during local dev.
  // Production never renders it; this just keeps preview screenshots clean.
  devIndicators: false,
};

export default nextConfig;

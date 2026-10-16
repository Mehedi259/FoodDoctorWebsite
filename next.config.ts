import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Static export: `npm run build` writes plain HTML for every route and locale to /out
  output: "export",
  // Image optimisation needs a server, so static export serves images as-is
  images: { unoptimized: true },
};

export default withNextIntl(nextConfig);

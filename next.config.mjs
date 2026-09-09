/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/chathead-landing-next" : "",
  assetPrefix: isProd ? "/chathead-landing-next" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/chathead-landing-next" : "",
  },
};

export default nextConfig;
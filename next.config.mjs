const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: "", // Empty for root domain
  assetPrefix: "", // Empty for root domain
  images: { 
    unoptimized: true 
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
    NEXT_PUBLIC_API_URL: "https://api.example.com",
  },
};

export default nextConfig;
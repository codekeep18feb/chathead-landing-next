const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  assetPrefix: "",
  basePath: "",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
    NEXT_PUBLIC_API_URL: "https://api.example.com", // your actual API if neede
  },
};

export default nextConfig;

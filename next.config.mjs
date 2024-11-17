const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: "export",
    assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
    basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
    images: { unoptimized: true },
    env: {
        NEXT_PUBLIC_BASE_PATH: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
        NEXT_PUBLIC_API_URL: "https://api.example.com",
    },
};

export default nextConfig;

const isProd = process.env.NODE_ENV === "production";


console.log("building with process.env.NEXT_PUBLIC_BASE_PATH",process.env.NEXT_PUBLIC_BASE_PATH,process.env.NODE_ENV)
const nextConfig = {
    output: "export",
    assetPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
    basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
    images: { unoptimized: true },
    env: {
        NEXT_PUBLIC_BASE_PATH: "/chathead-landing-next",
        NEXT_PUBLIC_API_URL: "https://api.example.com",
    },
};

export default nextConfig;

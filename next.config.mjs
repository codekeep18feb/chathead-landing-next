const isProd = process.env.NODE_ENV === 'production';

console.log("canwe log some here?")
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/chathead-landing-next/' : '', // Only set for production
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.example.com',
  },
};

export default nextConfig;

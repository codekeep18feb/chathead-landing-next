const isProd = process.env.NODE_ENV === 'production';


console.log(`Building for environment: ${process.env.NODE_ENV}`);
console.log(`Asset prefix set to: ${isProd ? '/chathead-landing-next/' : ''}`);


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

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/chathead-landing-next/' : '',  // Only set for production
  basePath: isProd ? '/chathead-landing-next' : '', // Add basePath to handle the subdirectory
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.example.com',
  },
};

export default nextConfig;

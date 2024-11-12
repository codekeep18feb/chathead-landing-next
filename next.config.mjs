// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/chathead-landing-next/',  // Set directly for GitHub Pages
    images: { unoptimized: true },
    env: {
      NEXT_PUBLIC_API_URL: 'https://api.example.com', // Use production URL directly
    },
  };
  
  export default nextConfig;
  
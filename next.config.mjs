/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true,
  },
};

export default nextConfig;
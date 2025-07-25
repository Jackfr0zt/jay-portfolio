/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export', // enables static export
  images: {
    unoptimized: true,
  }, // ✅ add this comma
};

module.exports = nextConfig;
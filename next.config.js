/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,

  eslint:{
    ignoreDuringBuilds: true,
  },
  output: 'export',
  images: {
    unoptimized: true, // optional if you're using <Image>
},
};
module.exports = nextConfig



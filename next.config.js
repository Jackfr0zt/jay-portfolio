/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreBuildErrors: true,
  eslint:{
    ignoreDuringBuilds: true,
  },
 output: 'export', // enables static export
  images: {
    unoptimized: true, 
},
}
module.exports = nextConfig



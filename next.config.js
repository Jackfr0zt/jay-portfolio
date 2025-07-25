/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

typescript: {
    ignoreBuildErrors: true
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['mosaic.scdn.co', 'i.scdn.co']
  }
}

module.exports = nextConfig

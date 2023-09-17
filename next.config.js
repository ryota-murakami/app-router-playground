/** @type {import('next').NextConfig} */
const nextConfig = {
  // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
    serverActions: true,
  },
}
module.exports = nextConfig

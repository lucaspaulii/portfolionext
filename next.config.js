/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: "build",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

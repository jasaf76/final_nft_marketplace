/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader:'default',
    domains: ["carednewhope-marketplace2.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;

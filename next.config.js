/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized:true,
    domains: ["carednewhope-marketplace2.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;

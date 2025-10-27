/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'], // permite carregar imagens externas do GitHub
  },
};

module.exports = nextConfig;


const API_URL = process.env.NEXT_PUBLIC_API_URL;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/:path*`, // Proxy to Backend
      },
    ];
  },
  images: {
    domains: ["blogsapi.neetnavigator.com", "cdn.pixabay.com", "localhost"],
  },
};

module.exports = nextConfig;

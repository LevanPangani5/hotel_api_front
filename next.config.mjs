/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.hackernoon.com"],
    remotePatterns: [
      {
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;

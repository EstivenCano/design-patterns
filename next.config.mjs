import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["refactoring.guru"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default withContentlayer(nextConfig);

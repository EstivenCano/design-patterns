/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["refactoring.guru"],
  },
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);

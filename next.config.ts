import type { NextConfig } from "next";
import nextMDX from '@next/mdx';

const isProd = process.env.NODE_ENV === 'production';
const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/blog' : '',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
};

export default withMDX(nextConfig);

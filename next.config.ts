import type { NextConfig } from "next";
import nextMDX from '@next/mdx';

const isProd = process.env.NODE_ENV === 'production';
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const ownerName = process.env.GITHUB_REPOSITORY?.split('/')[0] || '';
const isUserRepo = repoName === `${ownerName}.github.io`;
const basePath = (isProd && !isUserRepo) ? `/${repoName}` : '';

console.log(`basePath is ${basePath} isUserRepo=${isUserRepo} isProd=${isProd}`);

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
});

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath,
  env: {
    BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
};

export default withMDX(nextConfig);

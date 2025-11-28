import { createMDX } from 'fumadocs-mdx/next';
import jiti from 'jiti';
const requireEnv = jiti(import.meta.url);

requireEnv('./env.ts');

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '**',
      },
    ],
  },
};

export default withMDX(config);

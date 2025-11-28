import { createMDX } from 'fumadocs-mdx/next';
import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./env.ts');

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);

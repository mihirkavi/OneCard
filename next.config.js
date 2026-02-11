const path = require('path');

const isGithubPages = process.env.GITHUB_PAGES === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isGithubPages ? {
    output: 'export',
    basePath: '/onecard',
    assetPrefix: '/onecard/',
    images: { unoptimized: true },
    trailingSlash: true,
  } : {
    reactStrictMode: true,
    experimental: {
      serverActions: {
        allowedOrigins: ['*'],
      },
    },
  }),
  webpack: (config) => {
    config.watchOptions = {
      ignored: ['**/apps/**', '**/node_modules/**'],
    };
    return config;
  },
  async headers() {
    if (isGithubPages) return [];
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    dirs: ['src'],
  },

  // Deploying Next.js as a Static Site on DigitalOcean
  output: 'export',
  distDir: '_static',
  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

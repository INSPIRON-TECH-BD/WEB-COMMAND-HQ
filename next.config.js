/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // 1. Allow Next.js to compile files from your Personal folder
  transpilePackages: ["@brand"],

  // 2. Create the tunnel to the new location
  webpack: (config) => {
    config.resolve.alias['@brand'] = path.join(__dirname, '../../01_CyberHasan/CORE_BRAND-SYSTEM');
    return config;
  },
  
  // 3. Optimization
  reactStrictMode: true,
};

module.exports = nextConfig;
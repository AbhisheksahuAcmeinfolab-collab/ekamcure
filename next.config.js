/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // static export ke liye zaroori
  },
  webpack: (config) => {
    config.externals.push({ animejs: "animejs" });
    return config;
  },
  output: "export", 
    turbopack: {}, // ⚡ add this line

};

module.exports = nextConfig;

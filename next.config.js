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

  turbopack: {},

  async redirects() {
    return [
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/ivf-section',
        destination: '/ivf-treatment-in-india',
        permanent: true,
      },
      {
        source: '/our-fee',
        destination: '/fees',
        permanent: true,
      },
      {
        source: '/treatments-in-india',
        destination: '/treatment',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;

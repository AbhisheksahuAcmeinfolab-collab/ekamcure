/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // static export ke liye zaroori
  },

  webpack: (config) => {
    config.externals.push({ animejs: "animejs" });
    return config;
  },

 

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
        destination: '/ivf-treatments-in-india',
        permanent: true,
      },
    
      {
        source: '/ivf-treatment-in-india',
        destination: '/ivf-treatments-in-india',
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
      {
 source: '/treatment',
      destination: '/treatments',
  permanent: true,
}
,
    ]
  },
};

module.exports = nextConfig;

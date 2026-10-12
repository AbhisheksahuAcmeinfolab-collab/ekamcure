/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // static export ke liye zaroori
  },

  webpack: (config) => {
    config.externals.push({ animejs: "animejs" });
    return config;
  },

  // output: "export",

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
      },
      {
        source: '/category/uncategorized',
        destination: '/',
        permanent: true,
      },
      {
        source: '/our-services',
        destination: '/services',
        permanent: true,
      },
      // Naye Redirects jo tumne bataye hain:
      {
        source: '/blog/hip-replacement-surgery-cost-in-india-for-international-patients',
        destination: '/treatments/hip-replacement-surgery-in-india',
        permanent: true,
      },
      {
        source: '/blog/hip-replacement-surgeons-in-india',
        destination: '/treatments/hip-replacement-surgery-in-india',
        permanent: true,
      },
      {
        source: '/blog-images/best-cancer-hospitals-in-india.jpg',
        destination: '/blog/best-cancer-hospitals-in-india',
        permanent: true,
      },
      {
        source: '/blog/hip-replacement-surgery-cost-in-india',
        destination: '/cost-of-treatment/hip-replacement-surgery-cost-india-international-patients',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;

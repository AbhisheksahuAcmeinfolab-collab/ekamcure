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
};

module.exports = nextConfig;


// /** @type {import('next-i18next').UserConfig} */
// const i18nextConfig = {
//   images: {
//     unoptimized: true, // static export ke liye zaroori
//   },
//   i18n: {
//     defaultLocale: "en",
//     locales: ["en", "hi"], // add your supported languages
//   },
//   reloadOnPrerender: process.env.NODE_ENV === "development",
// };

// module.exports = i18nextConfig;













// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images:{
//     unoptimized: true,
//    },
//   output: "export",
// };

// module.exports = nextConfig;



 
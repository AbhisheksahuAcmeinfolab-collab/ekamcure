
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["upload.wikimedia.org"], // ✅ allow external images
  },
};

export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//    eslint:{
//     ignoreDuringBuilds:true,
//    }, 
// };
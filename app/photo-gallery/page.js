"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import img from "../../assets/recent/Gallery 1.webp";
import pic15 from "../../assets/recent/Christopher muja.webp";
import pic16 from "../../assets/recent/Keshwan Prasad.webp";
import pic17 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic18 from "../../assets/recent/Sunilduth Putty.webp";
import pic19 from "../../assets/recent/Yogita Singh.webp";

const images = [pic15, pic16, pic17, pic18, pic19, pic15];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Gallery"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Gallery</h1>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
            Our <span className="text-blue-700">Photo Gallery</span>
          </h2>

          {/* ✅ Display images directly */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Image
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  width={400}
                  height={350}
                  className="w-full h-70 object-cover
                  transition-transform duration-500 ease-in-out
                  [&::before]:box-border [&::after]:box-border
                  hover:scale-110 hover:rotate-[5deg]"
                  // className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import img from "../../assets/recent/Gallery 1.webp";
// import { motion } from "framer-motion";
// import pic15 from "../../assets/newimage/hp1.webp";
// import pic16 from "../../assets/newimage/hp2.webp";
// import pic17 from "../../assets/newimage/hp3.webp";

// const images = [
//   pic15, pic16, pic17
// ];

// export default function Gallery() {
//   const [current, setCurrent] = useState(0);
//   return (
//     <>
//       {/* <GalleryPage/> */}
//       {/* Banner Section */}
//       <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
//         <Image
//           src={img}
//           alt="Gallery"
//           fill
//           className="object-cover brightness-80"
//         />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">Gallery</h1>
//         </div>
//       </div>

//       {/* desktop responsive */}
//       <section className="bg-white py-10 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
//             Our <span className="text-blue-700">Photo Gallery</span>
//           </h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {images.map((src, i) => (
//               <motion.div
//                 key={i}
//                 className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <a href={`/img/${src}`} data-lightbox="portfolio">
//                   <Image
//                     src={`/img/${src}`}
//                     alt={`Portfolio ${i + 1}`}
//                     width={400}
//                     height={300}
//                     className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>{" "}
//     </>
//   );
// }

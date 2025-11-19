"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import img from "../../assets/recent/Gallery 1.webp";
import pic23 from "../../assets/recent/Vidya Wati.webp";
import pic22 from "../../assets/recent/Shylotte Kativhu.webp";
import pic21 from "../../assets/recent/Deepak Dhookoo.webp";
import pic20 from "../../assets/recent/Bissun Prasad.webp";
import pic19 from "../../assets/recent/Christopher Muza3.webp";
// import pic18 from "../../assets/recent/Christopher Muza3.webp";
import pic17 from "../../assets/recent/Adbul Aziim Ramzan.webp";
import pic16 from "../../assets/recent/Satish Chandra.webp";
import pic15 from "../../assets/recent/Patient(9).webp";
import pic14 from "../../assets/recent/Shylotte Kativhu2.webp";
// import pic13 from "../../assets/recent/Patient(7).webp";
import pic12 from "../../assets/recent/Kamurayi Mambayo.webp";
import pic11 from "../../assets/recent/Christopher Muza2.webp";
import pic10 from "../../assets/recent/Brij Lata.webp";
import pic9 from "../../assets/recent/Narendra Chand.webp";
import pic8 from "../../assets/recent/Patient(2).webp";
import pic7 from "../../assets/recent/SunilDuth Putty2.webp";
import pic6 from "../../assets/recent/patient1.webp";
import pic5 from "../../assets/recent/Christopher Muza1.webp";
import pic4 from "../../assets/recent/Keshwan Prasad.webp";
import pic3 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic2 from "../../assets/recent/Sunilduth Putty.webp";
import pic1 from "../../assets/recent/Yogita Singh.webp";

const images = [
  pic23,
  pic22,
  pic21,
  pic20,
  pic19,
  pic17,
  pic16,
  pic15,
  pic14,
  pic12,
  pic11,
  pic10,
  pic9,
  pic8,
  pic7,
  pic6,
  pic5,
  pic4,
  pic3,
  pic2,
  pic1,
];
  
const videos = [
  "../../assets/Videos/video1.mp4",
  "../../assets/Videos/video2.mp4",
  "../../assets/Videos/video3.mp4",
  "../../assets/Videos/video4.mp4",
  "../../assets/Videos/video5.mp4",
  "../../assets/Videos/video6.mp4",
];


export default function Gallery() {
  const [active, setActive] = useState("mission");
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

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* ===== Toggle Switch ===== */}
          <div className="flex justify-center items-center space-x-3 mb-10">
            <span
              className={`font-medium ${
                active === "mission" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Our Photos
            </span>

            {/* Toggle Button */}
            <button
              onClick={() =>
                setActive(active === "mission" ? "vision" : "mission")
              }
              className={`relative w-20 h-10 flex items-center rounded-full transition-all duration-500 ${
                active === "mission" ? "bg-blue-600" : "bg-blue-600"
              }`}
            >
              <span
                className={`absolute w-9 h-9 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  active === "mission" ? "translate-x-1" : "translate-x-10"
                }`}
              ></span>
            </button>

            <span
              className={`font-medium ${
                active === "vision" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Our Videos
            </span>
          </div>

          {/* ===== Content Blocks ===== */}
          <div className="space-y-10">
            {/* Mission Section */}
            {active === "mission" && (
              <>
                {/* Block 1 */}
                <section className="bg-white py-10 px-4">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                      Photo Gallery
                    </h2>
                    {/* ✅ Display images directly */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6">
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
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Vision Section */}
            {active === "vision" && (
              <>
                {/* Block 1 */}
                <section className="bg-white py-10 px-4">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                      Video Gallery
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                      {videos.map((video, i) => (
                        <div
                          key={i}
                          className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
                        >
                          <video
                            src={video}
                            controls
                            className="absolute top-0 left-0 w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import img from "../../assets/recent/Gallery 1.webp";
// import pic23 from "../../assets/recent/Vidya Wati.webp";
// import pic22 from "../../assets/recent/Shylotte Kativhu.webp";
// import pic21 from "../../assets/recent/Deepak Dhookoo.webp";
// import pic20 from "../../assets/recent/Bissun Prasad.webp";
// import pic19 from "../../assets/recent/Christopher Muza3.webp";
// // import pic18 from "../../assets/recent/Christopher Muza3.webp";
// import pic17 from "../../assets/recent/Adbul Aziim Ramzan.webp";
// import pic16 from "../../assets/recent/Satish Chandra.webp";
// import pic15 from "../../assets/recent/Patient(9).webp";
// import pic14 from "../../assets/recent/Shylotte Kativhu2.webp";
// // import pic13 from "../../assets/recent/Patient(7).webp";
// import pic12 from "../../assets/recent/Kamurayi Mambayo.webp";
// import pic11 from "../../assets/recent/Christopher Muza2.webp";
// import pic10 from "../../assets/recent/Brij Lata.webp";
// import pic9 from "../../assets/recent/Narendra Chand.webp";
// import pic8 from "../../assets/recent/Patient(2).webp";
// import pic7 from "../../assets/recent/SunilDuth Putty2.webp";
// import pic6 from "../../assets/recent/patient1.webp";
// import pic5 from "../../assets/recent/Christopher Muza1.webp";
// import pic4 from "../../assets/recent/Keshwan Prasad.webp";
// import pic3 from "../../assets/recent/Abdullah AI Mamun.webp";
// import pic2 from "../../assets/recent/Sunilduth Putty.webp";
// import pic1 from "../../assets/recent/Yogita Singh.webp";

// const images = [pic23, pic22, pic21, pic20, pic19, pic17, pic16, pic15, pic14, pic12, pic11, pic10, pic9, pic8, pic7,
//   pic6, pic5, pic4, pic3, pic2, pic1];

// export default function Gallery() {
//   const [current, setCurrent] = useState(0);

//   return (
//     <>
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

//       {/* Gallery Section */}
//       <section className="bg-white py-10 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-center text-3xl font-semibold text-gray-800 mb-10">
//             Our <span className="text-blue-900">Photo Gallery</span>
//           </h2>

//           {/* ✅ Display images directly */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6">
//             {images.map((src, i) => (
//               <motion.div
//                 key={i}
//                 className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//               >
//                 <Image
//                   src={src}
//                   alt={`Portfolio ${i + 1}`}
//                   width={400}
//                   height={350}
//                   className="w-full h-70 object-cover
//                   transition-transform duration-500 ease-in-out
//                   [&::before]:box-border [&::after]:box-border
//                   hover:scale-110 hover:rotate-[5deg]"
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

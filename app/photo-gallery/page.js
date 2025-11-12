"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import img from "../../assets/recent/Gallery 1.webp";
// import pic18 from "../../assets/recent/Christopher muja.webp";
// import pic17 from "../../assets/recent/Keshwan Prasad.webp";
import pic16 from "../../assets/recent/Patient  (10).webp";
import pic15 from "../../assets/recent/Patient (9).webp";
import pic14 from "../../assets/recent/Patient (8).webp";
import pic13 from "../../assets/recent/Patient (7).webp";
import pic12 from "../../assets/recent/Patient (6).webp";
import pic11 from "../../assets/recent/Patient (5).webp";
import pic10 from "../../assets/recent/Patient (4).webp";
import pic9 from "../../assets/recent/Patient (3).webp";
import pic8 from "../../assets/recent/Patient  (2).webp";
import pic7 from "../../assets/recent/Patient (1).webp";
import pic6 from "../../assets/recent/patient1.webp";
import pic5 from "../../assets/recent/Christopher muja.webp";
import pic4 from "../../assets/recent/Keshwan Prasad.webp";
import pic3 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic2 from "../../assets/recent/Sunilduth Putty.webp";
import pic1 from "../../assets/recent/Yogita Singh.webp";

const images = [pic16, pic15, pic14, pic13, pic12, pic11, pic10, pic9, pic8, pic7, 
  pic6, pic5, pic4, pic3, pic2, pic1];

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
  );
}


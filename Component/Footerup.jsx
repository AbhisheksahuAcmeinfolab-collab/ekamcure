"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import pic24 from "../assets/hospitals/appasamy.webp";
import pic25 from "../assets/hospitals/asian hospital.webp";
import pic26 from "../assets/hospitals/godrej.webp";
import pic28 from "../assets/hospitals/mgm.webp";
import pic29 from "../assets/hospitals/kauvery.webp";
import pic30 from "../assets/hospitals/moolchand.webp";
import pic31 from "../assets/hospitals/primus.webp";
import pic32 from "../assets/hospitals/saroj.webp";
import pic33 from "../assets/hospitals/seven hills.webp";
import pic34 from "../assets/hospitals/max.webp";
import pic35 from "../assets/hospitals/yatharth.webp";
import pic36 from "../assets/hospitals/Sharda Hospital.png";
import pic37 from "../assets/hospitals/manipal.webp";
import pic38 from "../assets/hospitals/apollo.webp";
import pic39 from "../assets/hospitals/psri.webp";
import pic40 from "../assets/hospitals/fortis.webp";
import pic41 from "../assets/hospitals/The Sight Avenue.png";
import pic42 from "../assets/hospitals/Eye 7.png";
import pic43 from "../assets/hospitals/Zeeva Fertility.png";
import pic44 from "../assets/hospitals/metro.webp";

const hospitals = [
  { name: "Appasamy Hospitals", img: pic24 },
  { name: "Asian Hospital", img: pic25 },
  { name: "Godrej Memorial Hospital", img: pic26 },
  { name: "MGM Hospital", img: pic28 },
  { name: "Kauvery Hospital", img: pic29 },
  { name: "Moolchand Hospital", img: pic30 },
  { name: "Primus Hospital", img: pic31 },
  { name: "Saroj Hospital", img: pic32 },
  { name: "Seven Hills Hospital", img: pic33 },
  { name: "Max Hospital", img: pic34 },
  { name: "Yatharth Hospital", img: pic35 },
  { name: "Sharda Hospital", img: pic36 },
  { name: "Manipal Hospital", img: pic37 },
  { name: "Apollo Hospital", img: pic38 },
  { name: "PSRI Hospital", img: pic39 },
  { name: "Fortis Hospital", img: pic40 },
  { name: "The Sight Avenue", img: pic41 },
  { name: "Eye7 Eye Hospitals", img: pic42 },
  { name: "Zeeva Fertility", img: pic43 },
  { name: "Metro Hospital", img: pic44 },
];

export default function Footerup() {
  const repeatedHospitals = [...hospitals, ...hospitals];

  return (
    <section className="py-12 bg-gradient-to-b from-slate-50 via-white to-blue-50/20 overflow-hidden relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <span className="inline-block px-3.5 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-900 uppercase bg-blue-100/70 rounded-full">
            Healthcare Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Our Associated <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-600">Top Hospitals</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-900 to-indigo-500 mx-auto mt-3 rounded-full shadow-sm" />
        </div>
      </div>

      {/* Carousel Container with Fading Edge Masks */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left Side Blur Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        {/* Right Side Blur Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track - Duration 45 for faster smooth scroll */}
        <motion.div
          className="flex gap-6 sm:gap-8 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 45,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {repeatedHospitals.map((hosp, index) => (
            <div
              key={index}
              className="group flex flex-col items-center min-w-[150px] sm:min-w-[170px] md:min-w-[190px] cursor-pointer"
            >
              {/* Premium Full-Color Logo Card */}
              <div className="relative w-full h-[110px] sm:h-[125px] bg-white rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] group-hover:shadow-[0_12px_25px_-5px_rgba(30,58,138,0.15)] group-hover:border-blue-400/60 transition-all duration-300 flex items-center justify-center p-4 group-hover:-translate-y-1">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={hosp.img}
                    alt={hosp.name}
                    fill
                    className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </div>

              {/* Hospital Name */}
              <p className="mt-3 text-center text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-blue-900 transition-colors duration-200 line-clamp-1 px-1">
                {hosp.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

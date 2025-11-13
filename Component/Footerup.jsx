"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import pic24 from "../assets/newimage/Appasamy.webp";
import pic25 from "../assets/newimage/Asian hospital.webp";
import pic26 from "../assets/newimage/Godrej.webp";
// import pic27 from "../assets/newimage/Seven hills.webp";
import pic28 from "../assets/newimage/MGM.webp";
import pic29 from "../assets/newimage/Kauvery.webp";
import pic30 from "../assets/newimage/Moolchand.webp";
import pic31 from "../assets/newimage/primus.webp";
import pic32 from "../assets/newimage/Saroj.webp";
import pic33 from "../assets/newimage/Seven hills.webp";

const hospitals = [
  { name: "Gleaneagles Global Hospital", img: pic24 },
  { name: "Manipal Hospital", img: pic25 },
  { name: "Global Hospital", img: pic26 },
  // { name: "BLK Hospital", img: pic27 },
  { name: "Bombay Hospital", img: pic28 },
  { name: "Kauvery Hospital", img: pic29 },
  { name: "Moolchand", img: pic30 },
  { name: "Primus", img: pic31 },
  { name: "Saroj", img: pic32 },
  { name: "Seven Hills", img: pic33 },
];

export default function Footerup() {
  const repeatedHospitals = [...hospitals, ...hospitals];
  return (
    <>
      <section className="bg-white dark:bg-white">
        {/* Heading */}
        <div className="text-center py-8 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Top <span className="text-blue-900">Hospitals!</span>
          </h2>
        </div>

        {/* Underline */}
        <div className="w-20 h-1 bg-blue-900 mx-auto mb-10" />

        {/* Carousel */}
        <div className="overflow-hidden relative w-full mb-6 mt-4">
          <motion.div
            className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "linear",
            }}
          >
            {repeatedHospitals.map((hosp, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[110px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px]"
              >
                {/* Image Wrapper */}
                <div className="relative w-full rounded-[30px] my-[30px] bg-transparent p-5 bg-[linear-gradient(180deg,#FFFFFF_70%,#FFFFFF00_100%)] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.5)] h-[110px] flex items-center overflow-hidden shadow-md border border-gray-300 justify-center">
                  <Image
                    src={hosp.img}
                    alt={hosp.name}
                    fill
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}













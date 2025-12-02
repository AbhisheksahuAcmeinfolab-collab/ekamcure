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

const hospitals = [
  { name: "Gleaneagles Global Hospital", img: pic24 },
  { name: "Manipal Hospital", img: pic25 },
  { name: "Global Hospital", img: pic26 },
  { name: "Bombay Hospital", img: pic28 },
  { name: "Kauvery Hospital", img: pic29 },
  { name: "Moolchand Hospital", img: pic30 },
  { name: "Primus Hospital", img: pic31 },
  { name: "Saroj Hospital", img: pic32 },
  { name: "Seven Hills Hospital", img: pic33 },
];

export default function Footerup() {
  const repeatedHospitals = [...hospitals, ...hospitals];

  return (
    <section className="bg-white dark:bg-white">
      {/* Heading */}
      <div className="text-center py-8 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Top <span className="text-blue-900">Hospitals!</span>
        </h2>
      </div>

      {/* Underline */}
      <div className="w-20 h-1 bg-blue-900 mx-auto mb-10" />

      {/* Scrolling Carousel */}
      <div className="overflow-hidden relative w-full mb-6 mt-4">
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {repeatedHospitals.map((hosp, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[130px] sm:min-w-[150px] md:min-w-[170px]"
            >
              {/* Card wrapper - MUST be relative */}
              <div className="relative w-full h-[110px] bg-white border rounded-lg shadow-md flex items-center justify-center overflow-hidden">
                <Image
                  src={hosp.img}
                  alt={hosp.name}
                  fill
                  className="object-contain p-2"
                  unoptimized
                />
              </div>

              {/* Hospital Name BELOW Box */}
              <p className="mt-2 text-center text-sm font-semibold text-gray-800">
                {hosp.name}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import pic24 from "../assets/hospitals/appasamy.webp";
// import pic25 from "../assets/hospitals/asian hospital.webp";
// import pic26 from "../assets/hospitals/godrej.webp";
// // import pic27 from "../assets/hospitals/Seven hills.webp";
// import pic28 from "../assets/hospitals/mgm.webp";
// import pic29 from "../assets/hospitals/kauvery.webp";
// import pic30 from "../assets/hospitals/moolchand.webp";
// import pic31 from "../assets/hospitals/primus.webp";
// import pic32 from "../assets/hospitals/saroj.webp";
// import pic33 from "../assets/hospitals/seven hills.webp";

// const hospitals = [
//   { name: "Gleaneagles Global Hospital", img: pic24 },
//   { name: "Manipal Hospital", img: pic25 },
//   { name: "Global Hospital", img: pic26 },
//   // { name: "BLK Hospital", img: pic27 },
//   { name: "Bombay Hospital", img: pic28 },
//   { name: "Kauvery Hospital", img: pic29 },
//   { name: "Moolchand Hospital", img: pic30 },
//   { name: "Primus Hospital", img: pic31 },
//   { name: "Saroj Hospital", img: pic32 },
//   { name: "Seven Hills Hospital", img: pic33 },
// ];

// export default function Footerup() {
//   const repeatedHospitals = [...hospitals, ...hospitals];
//   return (
//     <>
//       <section className="bg-white dark:bg-white">
//         {/* Heading */}
//         <div className="text-center py-8 px-4">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
//             Top <span className="text-blue-900">Hospitals!</span>
//           </h2>
//         </div>

//         {/* Underline */}
//         <div className="w-20 h-1 bg-blue-900 mx-auto mb-10" />

//         {/* Carousel */}
//         <div className="overflow-hidden relative w-full mb-6 mt-4">
//           <div className="overflow-hidden relative w-full mb-6 mt-4">
//             <motion.div
//               className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
//               animate={{ x: ["0%", "-50%"] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 5,
//                 ease: "linear",
//               }}
//             >
//               {repeatedHospitals.map((hosp, index) => (
//                 <div
//                   key={index}
//                   className="flex flex-col items-center min-w-[110px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px]"
//                 >
//                   {/* CARD WRAPPER */}
//                   <div
//                     className="
//                       relative w-full h-[110px]
//                       flex items-center justify-center

//                       /* spacing */
//                       my-8 px-4 py-3

//                       /* background gradient */
//                       bg-gradient-to-b from-white/90 to-white/0

//                       /* border */
//                       border border-black rounded-lg

//                       /* shadows */
//                       shadow-md shadow-black/40

//                       /* overflow */
//                       overflow-hidden"
//                   >
//                     <Image
//                       src={hosp.img}
//                       alt={hosp.name}
//                       fill
//                       className="object-contain"
//                       loading="eager"
//                       unoptimized
//                     />
//                   </div>
//                   <div className="absolute bottom-0 w-full text-center text-[14px] font-medium text-gray-800 bg-white/80 py-1">
//                     {hosp.name}
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

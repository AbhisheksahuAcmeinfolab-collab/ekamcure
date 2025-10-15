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
      <section className="mb-12">
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
              duration: 15,
              ease: "linear",
            }}
          >
            {repeatedHospitals.map((hosp, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[110px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px]"
              >
                {/* Image Wrapper */}
                {/* <div className="rounded-[30px] my-[30px] relative w-full h-[110px] sm:w-30 sm:h-10 md:w-28 md:h-28 lg:w-full lg:h-32 overflow-hidden shadow-md border border-gray-300 bg-white flex items-center justify-center"> */}
                <div className="relative w-full rounded-[30px] my-[30px] bg-transparent p-5 bg-[linear-gradient(180deg,#FFFFFF_70%,#FFFFFF00_100%)] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.5)] h-[110px] flex items-center overflow-hidden shadow-md border border-gray-300 justify-center">
                  <Image
                    src={hosp.img}
                    alt={hosp.name}
                    fill
                    className="object-contain h-full w-full"
                  />
                </div>

                {/* Name */}
                {/* <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center whitespace-nowrap">
                  {hosp.name}
                </p> */}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

// "use client"
// import { motion } from "framer-motion";
// import Image from "next/image";
// import pic24 from "../assets/newimage/gleneagles.webp";
// import pic25 from "../assets/newimage/manipal.webp";
// import pic26 from "../assets/newimage/Global.webp";
// import pic27 from "../assets/newimage/BLK.webp";
// import pic28 from "../assets/newimage/bombay.webp";
// import pic29 from "../assets/newimage/Kauvery Hospital.webp";

// const hospitals = [
//   { name: "Gleaneagles Global Hospital", img: pic24 },
//   { name: "Manipal Hospital", img: pic25 },
//   { name: "Global Hospital", img: pic26 },
//   { name: "BLK Hospital", img: pic27 },
//   { name: "Bombay Hospital", img: pic28 },
//   { name: "Kauvery Hospital", img: pic29 },
// ];

// export default function Footerup() {
//   const repeatedHospitals = [...hospitals, ...hospitals];
//   return (
//     <>
//       <section>
//         <div className="text-center py-10 px-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Top Hospitals!
//           </h2>
//         </div>
//         <div className="w-20 h-1 bg-blue-700 mx-auto mt-2 mb-8 rounded-full" />
//         <div className="overflow-hidden relative w-full mb-6 mt-4">
//           <motion.div
//             className="flex gap-8 lg:gap-12 md:gap-8 sm:gap-4"
//             animate={{ x: ["0%", "-50%"] }} // slide halfway since content is doubled
//             transition={{
//               repeat: Infinity,
//               duration: 5,
//               ease: "linear",
//             }}
//           >
//             {repeatedHospitals.map((hosp, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center min-w-[140px] md:min-w-[180px]"
//               >
//                 <div className="relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-md">
//                   <Image
//                     src={hosp.img}
//                     alt={hosp.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <p className="mt-2 text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
//                   {hosp.name}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       <section className="w-full bg-cover bg-center py-16 px-4 md:px-8  bg-[url('../assets/image/footer-contact-bg.jpg')]">
//         <div className="max-w-xl mx-auto bg-opacity-90 rounded-lg shadow-lg p-6 text-center">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//             NEWS LETTER
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Enter your email address for getting updates.
//           </p>
//           <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <input
//               type="email"
//               placeholder="sample@gmail.com"
//               className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />
//             <button
//               type="submit"
//               className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

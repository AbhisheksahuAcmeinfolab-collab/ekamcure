"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import pic24 from "../assets/newimage/gleneagles.webp";
import pic25 from "../assets/newimage/manipal.webp";
import pic26 from "../assets/newimage/Global.webp";
import pic27 from "../assets/newimage/BLK.webp";
import pic28 from "../assets/newimage/bombay.webp";
import pic29 from "../assets/newimage/Kauvery Hospital.webp";

const hospitals = [
  { name: "Gleaneagles Global Hospital", img: pic24 },
  { name: "Manipal Hospital", img: pic25 },
  { name: "Global Hospital", img: pic26 },
  { name: "BLK Hospital", img: pic27 },
  { name: "Bombay Hospital", img: pic28 },
  { name: "Kauvery Hospital", img: pic29 },
];

export default function Footerup() {
  const repeated = [...hospitals, ...hospitals];

  return (
    <section className="bg-[#f7f7f7] py-8 font-[Poppins]">
      <h2 className="text-center text-2xl font-semibold text-[#212529] mb-6">
        Our Trusted Network of Top Hospitals
      </h2>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {repeated.map((hospital, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="w-64 sm:w-56 md:w-64 lg:w-72 xl:w-80 flex-shrink-0 mx-auto transition-transform duration-300"
            >
              <Image
                src={hospital.img}
                alt={hospital.name}
                className="w-full h-auto object-contain border border-[#dee2e6] rounded-lg shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
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

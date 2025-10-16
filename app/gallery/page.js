"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img from "../../assets/newimage/bg-banner.webp";
import pic15 from "../../assets/newimage/hp1.webp";
import pic16 from "../../assets/newimage/hp2.webp";
import pic17 from "../../assets/newimage/hp3.webp";

const patients = [
  {
    name: "Abhishek Sahu",
    country: "Guinee",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    doctor: "Dr. Lalit Bafna",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic15,
    type: "image",
  },
  {
    name: "Ibrahima Kalil",
    country: "Guinee",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    doctor: "Dr. Lalit Bafna",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic16,
    type: "image",
  },
  {
    name: "Sweety",
    country: "Guinee",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    doctor: "Dr. Lalit Bafna",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic17,
    type: "image",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % patients.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const currentPatient = patients[current];

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Patient <span className="text-blue-900">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Every patient journey tells a story of hope and healing.
          </p>
        </div>

        {/* Patient Cards Grid */}
        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {patients.map((patient, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-start md:items-center bg-white dark:bg-gray-900 border-2 border-blue-900 rounded-2xl shadow-md p-6 md:p-8"
            >
              {/* Text Box */}
              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {patient.name}
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm md:text-base">
                  <li>
                    <strong>Native Country:</strong> {patient.country}
                  </li>
                  <li>
                    <strong>Treatment:</strong> {patient.treatment}
                  </li>
                  <li>
                    <strong>Hospital:</strong> {patient.hospital}
                  </li>
                  <li>
                    <strong>Doctor Name:</strong> {patient.doctor}
                  </li>
                  <li>
                    <strong>Location:</strong> {patient.location}
                  </li>
                </ul>
              </div>

              {/* Image Box */}
              <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-[200px]">
                <Image
                  src={patient.media}
                  alt={patient.name}
                  className="object-cover w-full h-[200px] rounded-xl border border-blue-900 shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}



// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import img from "../../assets/newimage/bg-banner.webp";
// import pic15 from "../../assets/newimage/hp1.webp";
// import pic16 from "../../assets/newimage/hp2.webp";
// import pic17 from "../../assets/newimage/hp3.webp";

// const patients = [
//   {
//     name: "Abhishek Sahu",
//     country: "Guinee",
//     treatment: "ACL Reconstruction Surgery",
//     hospital: "SCI International Hospital",
//     doctor: "Dr. Lalit Bafna",
//     location: "Greater Kailash – 1, New Delhi, India",
//     media: pic15,
//     type: "image",
//   },
//   {
//     name: "Ibrahima Kalil",
//     country: "Guinee",
//     treatment: "ACL Reconstruction Surgery",
//     hospital: "SCI International Hospital",
//     doctor: "Dr. Lalit Bafna",
//     location: "Greater Kailash – 1, New Delhi, India",
//     media: pic16,
//     type: "image",
//   },
//   {
//     name: "Sweety",
//     country: "Guinee",
//     treatment: "ACL Reconstruction Surgery",
//     hospital: "SCI International Hospital",
//     doctor: "Dr. Lalit Bafna",
//     location: "Greater Kailash – 1, New Delhi, India",
//     media: pic17,
//     type: "image",
//   },
// ];

// export default function Gallery() {
//   const [current, setCurrent] = useState(0);
// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % patients.length);
// //     }, 5000);
// //     return () => clearInterval(timer);
// //   }, []);
// //   const currentPatient = patients[current];

//   return (
//     <>
//       {/* Banner Section */}
//       <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
//         <Image
//           src={img}
//           alt="Our Fee Banner"
//           fill
//           className="object-cover brightness-30"
//         />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">Gallery</h1>
//         </div>
//       </div>
//       <section className="bg-white dark:bg-gray-900 py-12 px-4 md:px-10">
//         {/* Heading */}
//         <div className="text-center mb-10">
//           <h2 className="text-2xl md:text-3xl font-semibold">
//             Patient <span className="text-blue-900">Success Stories</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
//             Every patient journey tells a story of hope and healing.
//           </p>
//         </div>

//         {/* Overlapping Boxes */}
//         <div className="relative max-w-xl mx-auto xl:w-[570px]">
//           <div className="bg-white dark:bg-gray-900 border-2 border-blue-900 rounded-2xl h-[270px] p-6 md:p-8 shadow-md w-full md:w-[70%] relative z-20">
//             <h3 className="text-xl md:text-2xl font-semibold mb-3">
//               {patients.name}
//             </h3>
//             <ul className="text-gray-700 space-y-1 text-sm md:text-base">
//               <li>
//                 <strong>Native Country:</strong> {patients.country}
//               </li>
//               <li>
//                 <strong>Treatment:</strong> {patients.treatment}
//               </li>
//               <li>
//                 <strong>Hospital:</strong> {patients.hospital}
//               </li>
//               <li>
//                 <strong>Doctor Name:</strong> {patients.doctor}
//               </li>
//               <li>
//                 <strong>Location:</strong> {patients.location}
//               </li>
//             </ul>
//           </div>

//           {/* Overlapping Image Box */}
//           <div
//             className="
//              md:absolute md:top-1/2 md:right-[-60px]
//              md:-translate-y-1/2
//              w-[230px] sm:w-[260px] md:w-[280px]
//              mt-6 md:mt-0
//              bg-white border-2 border-blue-900 rounded-xl
//              overflow-hidden shadow-lg z-20
//            "
//           >
//             <Image
//               src={patients.media}
//               alt={patients.name}
//               className="object-cover w-full h-auto scale-75"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

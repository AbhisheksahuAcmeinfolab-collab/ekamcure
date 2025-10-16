"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import img from "../../assets/newimage/bg-banner.webp";
// You can replace these image paths with your own service icons/images
import pic1 from "../../assets/newimage/Ayurveda Treatments.webp";
import pic2 from "../../assets/newimage/Ayurveda Treatments.webp";
import pic3 from "../../assets/newimage/Ayurveda Treatments.webp";
import pic4 from "../../assets/newimage/Ayurveda Treatments.webp";
import pic5 from "../../assets/newimage/Ayurveda Treatments.webp";
import pic6 from "../../assets/newimage/Ayurveda Treatments.webp";
import pic7 from "../../assets/newimage/Ayurveda Treatments.webp";
import pic8 from "../../assets/newimage/Ayurveda Treatments.webp";
export default function TreatmentServices() {
  // const services = [
  //   {
  //     title: "Patient Care 24/7",
  //     desc: "Our medical expert team is always with the patients, to deal with any emergency. We closely monitor every step of treatment during healing.",
  //     img: pic1,
  //   },
  //   {
  //     title: "Hospital Assistant",
  //     desc: "Our assistants play a key role in patient care, from admission to discharge. They ensure that every step of your treatment is smooth and on time.",
  //     img: pic2,
  //   },
  //   {
  //     title: "Accommodation",
  //     desc: "We provide accommodation services for our patients and attendants. Options range from budget-friendly to luxury stays, ensuring comfort for all.",
  //     img: pic3,
  //   },
  //   {
  //     title: "Transportation",
  //     desc: "We offer airport and railway station pick-up/drop facilities. From cabs to ambulances, our transport ensures safe travel for all patients.",
  //     img: pic4,
  //   },
  //   {
  //     title: "Transportation",
  //     desc: "We offer airport and railway station pick-up/drop facilities. From cabs to ambulances, our transport ensures safe travel for all patients.",
  //     img: pic4,
  //   },
  // ];

  const services = [
    {
      title: "24/7 Patient Care",
      desc: "Our medical expert team is always with the patients, to deal with any emergency. Our medical experts closely monitor every step of treatment during healing.",
      img: pic1,
      color: "#058C54", // Green
    },
    {
      title: "Hospital Assistant",
      desc: "Our hospital assistants play a role in patient care from admission to discharge, ensuring every step of your treatment is smooth and on time.",
      img: pic2,
      color: "#A8ADFF", // Light Purple
    },
    {
      title: "Accommodation",
      desc: "We also provide accommodation services for patients and attendants, ranging from budget-friendly to premium options.",
      img: pic3,
      color: "#009EB5", // Teal
    },
    {
      title: "Transportation",
      desc: "We provide pick-up and drop facilities from airports or railway stations, including free ambulance service for critical patients.",
      img: pic4,
      color: "#32DDD4", // Cyan
    },
    {
      title: "Ambulance",
      desc: "Our ambulance service ensures safe and timely transport with trained medical professionals for both emergency and non-emergency needs.",
      img: pic5,
      color: "#FF0000", // Red
    },
    {
      title: "Translator / Interpreter",
      desc: "We provide translators or interpreters to make doctor-patient communication easy and clear.",
      img: pic6,
      color: "#DB87F7", // Bright Purple
    },
    {
      title: "Visa Assistance",
      desc: "Our team assists you with the entire visa process and provides free Visa Invitation Letters.",
      img: pic7,
      color: "#68C8C1", // Light Teal/Cyan
    },
    {
      title: "Pick Up & Drop",
      desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
      img: pic8,
      color: "#25848F", // Dark Teal
    },
  ];

  // export default function ServicesTimeline() {
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Services at a <span className="text-blue-900">Glance</span>
          </h2>

          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>

            {/* 1 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-blue-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Patient Care 24/7
                  </h3>
                  <p className="text-gray-600">
                    Our medical expert team is always with the patients to deal
                    with any emergency. They monitor every step of treatment
                    closely.
                  </p>
                </div>
              </div>

              {/* Icon */}
              <div className="relative z-10 bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Stethoscope"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="md:w-1/2"></div>
            </div>

            {/* 2 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-pink-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Stethoscope"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-pink-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">
                    Hospital Assistant
                  </h3>
                  <p className="text-gray-600">
                    Our hospital assistants help in patient care, from admission
                    to discharge, ensuring everything runs smoothly.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-green-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Accommodation
                  </h3>
                  <p className="text-gray-600">
                    We offer comfortable accommodation options for international
                    patients, from budget to luxury stays.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Stethoscope"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 4 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Stethoscope"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-red-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">
                    Ambulance
                  </h3>
                  <p className="text-gray-600">
                    Our ambulance services ensure critical patients arrive
                    safely and on time, managed by trained professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-yellow-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                    Visa Assistance
                  </h3>
                  <p className="text-gray-600">
                    We assist with every step of visa preparation, including
                    providing a free “Visa Invitation Letter”.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Stethoscope"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 6 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Stethoscope"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-purple-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    Transportation
                  </h3>
                  <p className="text-gray-600">
                    We provide safe and reliable transport facilities for
                    patients and their families from airport to hospital.
                  </p>
                </div>
              </div>
            </div>

            {/* 7 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-teal-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">
                    Translator / Interpreter
                  </h3>
                  <p className="text-gray-600">
                    We provide translators to help patients discuss comfortably
                    and clearly with doctors and staff.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Stethoscope"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 8 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Stethoscope"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-indigo-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    Pick Up & Drop
                  </h3>
                  <p className="text-gray-600">
                    Our pickup and drop services ensure stress-free, smooth
                    transport for patients and families.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// "use client";
// import Image from "next/image";
// import { motion } from "framer-motion";

// import img from "../../assets/newimage/bg-banner.webp";
// // You can replace these image paths with your own service icons/images
// import pic1 from "../../assets/newimage/Ayurveda Treatments.webp";
// import pic2 from "../../assets/newimage/Ayurveda Treatments.webp";
// import pic3 from "../../assets/newimage/Ayurveda Treatments.webp";
// import pic4 from "../../assets/newimage/Ayurveda Treatments.webp";
// import pic5 from "../../assets/newimage/Ayurveda Treatments.webp";
// import pic6 from "../../assets/newimage/Ayurveda Treatments.webp";
// import pic7 from "../../assets/newimage/Ayurveda Treatments.webp";
// import pic8 from "../../assets/newimage/Ayurveda Treatments.webp";
// export default function TreatmentServices() {
//   // const services = [
//   //   {
//   //     title: "Patient Care 24/7",
//   //     desc: "Our medical expert team is always with the patients, to deal with any emergency. We closely monitor every step of treatment during healing.",
//   //     img: pic1,
//   //   },
//   //   {
//   //     title: "Hospital Assistant",
//   //     desc: "Our assistants play a key role in patient care, from admission to discharge. They ensure that every step of your treatment is smooth and on time.",
//   //     img: pic2,
//   //   },
//   //   {
//   //     title: "Accommodation",
//   //     desc: "We provide accommodation services for our patients and attendants. Options range from budget-friendly to luxury stays, ensuring comfort for all.",
//   //     img: pic3,
//   //   },
//   //   {
//   //     title: "Transportation",
//   //     desc: "We offer airport and railway station pick-up/drop facilities. From cabs to ambulances, our transport ensures safe travel for all patients.",
//   //     img: pic4,
//   //   },
//   //   {
//   //     title: "Transportation",
//   //     desc: "We offer airport and railway station pick-up/drop facilities. From cabs to ambulances, our transport ensures safe travel for all patients.",
//   //     img: pic4,
//   //   },
//   // ];

//   const services = [
//     {
//       title: "24/7 Patient Care",
//       desc: "Our medical expert team is always with the patients, to deal with any emergency. Our medical experts closely monitor every step of treatment during healing.",
//       img: pic1,
//       color: "#058C54", // Green
//     },
//     {
//       title: "Hospital Assistant",
//       desc: "Our hospital assistants play a role in patient care from admission to discharge, ensuring every step of your treatment is smooth and on time.",
//       img: pic2,
//       color: "#A8ADFF", // Light Purple
//     },
//     {
//       title: "Accommodation",
//       desc: "We also provide accommodation services for patients and attendants, ranging from budget-friendly to premium options.",
//       img: pic3,
//       color: "#009EB5", // Teal
//     },
//     {
//       title: "Transportation",
//       desc: "We provide pick-up and drop facilities from airports or railway stations, including free ambulance service for critical patients.",
//       img: pic4,
//       color: "#32DDD4", // Cyan
//     },
//     {
//       title: "Ambulance",
//       desc: "Our ambulance service ensures safe and timely transport with trained medical professionals for both emergency and non-emergency needs.",
//       img: pic5,
//       color: "#FF0000", // Red
//     },
//     {
//       title: "Translator / Interpreter",
//       desc: "We provide translators or interpreters to make doctor-patient communication easy and clear.",
//       img: pic6,
//       color: "#DB87F7", // Bright Purple
//     },
//     {
//       title: "Visa Assistance",
//       desc: "Our team assists you with the entire visa process and provides free Visa Invitation Letters.",
//       img: pic7,
//       color: "#68C8C1", // Light Teal/Cyan
//     },
//     {
//       title: "Pick Up & Drop",
//       desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
//       img: pic8,
//       color: "#25848F", // Dark Teal
//     },
//   ];

//   // export default function ServicesTimeline() {
//   return (
//     <>
//       <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
//         <Image
//           src={img}
//           alt="Our Fee Banner"
//           fill
//           className="object-cover brightness-30"
//         />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">
//             Our Treatment
//           </h1>
//         </div>
//       </div>

//       <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 md:px-12 lg:px-20 font-sans">
//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
//             Our Services at a <span className="text-blue-900">Treatment</span>
//           </h2>
//           <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive care designed for your comfort and well-being.
//           </p>
//         </div>

//         {/* Timeline Container */}
//         <div className="relative max-w-7xl mx-auto">
//           {/* Main Vertical Line */}
//           {/* Adjusted to be a slightly darker grey for better contrast */}
//           <div className="hidden md:block absolute left-1/2 top-0 h-full items-center w-[4px] bg-gray-300 transform -translate-x-1/2"></div>

//           <div className="flex flex-col space-y-28 md:space-y-40">
//             {" "}
//             {/* Increased vertical spacing */}
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className={`relative flex flex-col md:flex-row ${
//                   index % 2 === 0
//                     ? "md:text-right" // Even items: Text on left, icon on right
//                     : "md:text-left md:flex-row-reverse" // Odd items: Text on right, icon on left
//                 }`}
//               >
//                 {/* Text Content Card */}
//                 <div
//                   className={`relative w-full md:w-5/12 p-6 rounded-lg bg-gray-50 border-gray-100 min-h-[180px] flex flex-col justify-center
//             ${
//               index % 2 === 0
//                 ? "md:mr-20 lg:mr-32" // Margin to separate from icon on right
//                 : "md:ml-20 lg:ml-32" // Margin to separate from icon on left
//             } text-center md:text-left
//           `}
//                 >
//                   {/* Icon Box */}
//                   <motion.div
//                     whileHover={{ scale: 1.1, rotate: 6 }}
//                     className="relative w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20 my-8 md:my-0 cursor-pointer transition-transform duration-300 ease-in-out"
//                     style={{ backgroundColor: service.color }}
//                   >
//                     <Image
//                       src={service.img}
//                       alt={service.title}
//                       width={48} // Slightly larger icons
//                       height={48}
//                       className="object-contain filter brightness-125" // A little brighter icon for pop
//                     />
//                   </motion.div>
//                   <h3 className="text-xl md:text-2xl font-semibold text-blue-900 mb-3 leading-tight">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//                     {service.desc}
//                   </p>
//                 </div>
//                 <div
//                   className={`hidden md:block absolute w-[calc(10%-50px)] h-[4px] bg-gray-300 z-10
//             ${
//               index % 2 === 0 ? "right-[calc(50%+1px)]" : "left-[calc(50%+1px)]"
//             }`}
//                   style={{
//                     backgroundColor: service.color, // Match line color to circle color
//                   }}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

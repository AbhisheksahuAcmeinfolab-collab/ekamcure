"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import img from "../../assets/newimage/team-bg-bg.webp";
// You can replace these image paths with your own service icons/images
import pic1 from "../../assets/newimage/Neurology Treatment.webp";
import pic2 from "../../assets/newimage/Cosmetic Surgeries.webp";
import pic3 from "../../assets/newimage/Cancer Treatment.webp";
import pic4 from "../../assets/newimage/Dental Treatments.webp";
import pic5 from "../../assets/newimage/Heart & Cardiology Treatments.webp";
import pic6 from "../../assets/newimage/Kidney & Urology Treatments.webp";
import pic7 from "../../assets/newimage/Ophthalmology Surgery.webp";
import pic8 from "../../assets/newimage/Infertility Treatments.webp";
import pic9 from "../../assets/newimage/Transplant Programs.webp";
import pic10 from "../../assets/newimage/Ear, Nose, and Throat (ENT).webp";
import pic11 from "../../assets/newimage/Orthopedic Treatment.webp";
import pic12 from "../../assets/newimage/Gender Reassignment Surgery.webp";
import pic13 from "../../assets/newimage/Orthopaedic Procedures.webp";
import pic14 from "../../assets/newimage/Pediatric Cardiology.webp";
import pic15 from "../../assets/newimage/Gynecology Treatment.webp";
import pic16 from "../../assets/newimage/Obesity Treatment.webp";
import pic17 from "../../assets/newimage/Ear, Nose, and Throat (ENT).webp";
import pic18 from "../../assets/newimage/Orthopedic Treatment.webp";

export default function TreatmentServices() {
  // const services = [
  //   {
  //     title: "Neurology Treatment",
  //     desc: "Our medical expert team is always with the patients, to deal with any emergency. Our medical experts closely monitor every step of treatment during healing.",
  //     img: pic1,
  //     color: "#058C54", // Green
  //   },
  //   {
  //     title: "Hospital Assistant",
  //     desc: "Our hospital assistants play a role in patient care from admission to discharge, ensuring every step of your treatment is smooth and on time.",
  //     img: pic2,
  //     color: "#A8ADFF", // Light Purple
  //   },
  //   {
  //     title: "Accommodation",
  //     desc: "We also provide accommodation services for patients and attendants, ranging from budget-friendly to premium options.",
  //     img: pic3,
  //     color: "#009EB5", // Teal
  //   },
  //   {
  //     title: "Transportation",
  //     desc: "We provide pick-up and drop facilities from airports or railway stations, including free ambulance service for critical patients.",
  //     img: pic4,
  //     color: "#32DDD4", // Cyan
  //   },
  //   {
  //     title: "Ambulance",
  //     desc: "Our ambulance service ensures safe and timely transport with trained medical professionals for both emergency and non-emergency needs.",
  //     img: pic5,
  //     color: "#FF0000", // Red
  //   },
  //   {
  //     title: "Translator / Interpreter",
  //     desc: "We provide translators or interpreters to make doctor-patient communication easy and clear.",
  //     img: pic6,
  //     color: "#DB87F7", // Bright Purple
  //   },
  //   {
  //     title: "Visa Assistance",
  //     desc: "Our team assists you with the entire visa process and provides free Visa Invitation Letters.",
  //     img: pic7,
  //     color: "#68C8C1", // Light Teal/Cyan
  //   },
  //   {
  //     title: "Pick Up & Drop",
  //     desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
  //     img: pic8,
  //     color: "#25848F", // Dark Teal
  //   },
  //   {
  //     title: "Pick Up & Drop",
  //     desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
  //     img: pic9,
  //     color: "#25848F", // Dark Teal
  //   },
  //   {
  //     title: "Pick Up & Drop",
  //     desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
  //     img: pic10,
  //     color: "#25848F", // Dark Teal
  //   },
  //   {
  //     title: "Pick Up & Drop",
  //     desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
  //     img: pic11,
  //     color: "#25848F", // Dark Teal
  //   },
  //   {
  //     title: "Pick Up & Drop",
  //     desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
  //     img: pic12,
  //     color: "#25848F", // Dark Teal
  //   },
  //   {
  //     title: "Pick Up & Drop",
  //     desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
  //     img: pic13,
  //     color: "#25848F", // Dark Teal
  //   },
  //   {
  //     title: "Pick Up & Drop",
  //     desc: "We offer pickup and drop services to ensure you reach us comfortably without any hassle.",
  //     img: pic14,
  //     color: "#25848F", // Dark Teal
  //   },
  // ];

  // export default function ServicesTimeline() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Fee Banner"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our Treatments
          </h1>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Services at a <span className="text-blue-900">Glance</span>
          </h2>

          {/* content  */}
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
                    Neurology Treatment
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
                  alt="Neurology Treatment"
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
                  src={pic2.src}
                  alt="Cosmetic Surgeries"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-pink-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">
                    Cosmetic Surgeries
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
                    Cancer Treatment
                  </h3>
                  <p className="text-gray-600">
                    We offer comfortable accommodation options for international
                    patients, from budget to luxury stays.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic3.src}
                  alt="Cancer Treatment"
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
                  src={pic4.src}
                  alt="Dental Treatments"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-red-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">
                    Dental Treatments
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
                    Heart & Cardiology Treatments
                  </h3>
                  <p className="text-gray-600">
                    We assist with every step of visa preparation, including
                    providing a free “Visa Invitation Letter”.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic5.src}
                  alt="Heart & Cardiology Treatments"
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
                  src={pic6.src}
                  alt="Kidney & Urology Treatments"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-purple-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    Kidney & Urology Treatments
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
                    Ophthalmology Surgery
                  </h3>
                  <p className="text-gray-600">
                    We provide translators to help patients discuss comfortably
                    and clearly with doctors and staff.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic7.src}
                  alt="Ophthalmology Surgery"
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
                  src={pic8.src}
                  alt="Infertility Treatments"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-indigo-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    Infertility Treatments
                  </h3>
                  <p className="text-gray-600">
                    Our pickup and drop services ensure stress-free, smooth
                    transport for patients and families.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>

            {/* 9 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-blue-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Transplant Programs
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
                  src={pic9.src}
                  alt="Transplant Programs"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 10 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-pink-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic10.src}
                  alt="Ear, Nose, and Throat (ENT)"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-pink-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">
                    Ear, Nose, and Throat (ENT)
                  </h3>
                  <p className="text-gray-600">
                    Our hospital assistants help in patient care, from admission
                    to discharge, ensuring everything runs smoothly.
                  </p>
                </div>
              </div>
            </div>

            {/* 11 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-green-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Orthopedic Treatment
                  </h3>
                  <p className="text-gray-600">
                    We offer comfortable accommodation options for international
                    patients, from budget to luxury stays.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic11.src}
                  alt="Orthopedic Treatment"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 12 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic12.src}
                  alt="Gender Reassignment Surgery"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-red-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">
                    Gender Reassignment Surgery
                  </h3>
                  <p className="text-gray-600">
                    Our ambulance services ensure critical patients arrive
                    safely and on time, managed by trained professionals.
                  </p>
                </div>
              </div>
            </div>

            {/* 13 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-yellow-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                    Orthopaedic Procedures
                  </h3>
                  <p className="text-gray-600">
                    We assist with every step of visa preparation, including
                    providing a free “Visa Invitation Letter”.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic13.src}
                  alt="Neurology Treatment"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 14 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic14.src}
                  alt="Pediatric Cardiology"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-purple-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    Pediatric Cardiology
                  </h3>
                  <p className="text-gray-600">
                    We provide safe and reliable transport facilities for
                    patients and their families from airport to hospital.
                  </p>
                </div>
              </div>
            </div>

            {/* 15 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-teal-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">
                    Gynecology Treatment
                  </h3>
                  <p className="text-gray-600">
                    We provide translators to help patients discuss comfortably
                    and clearly with doctors and staff.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic15.src}
                  alt="Gynecology Treatment"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 16 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic16.src}
                  alt="Obesity Treatment"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-indigo-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    Obesity Treatment
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

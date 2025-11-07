"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUserMd, FaPassport, FaHandshake, FaHeadset } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import pic1 from "../assets/newimage/front1.webp";
import pic2 from "../assets/newimage/front2.webp";
import pic3 from "../assets/newimage/front3.webp";
import pic4 from "../assets/newimage/Neurology Treatment.webp";
import pic5 from "../assets/newimage/Cosmetic Surgeries.webp";
import pic6 from "../assets/newimage/Cancer Treatment.webp";
import pic7 from "../assets/newimage/Dental Treatments.webp";
import pic8 from "../assets/newimage/Heart & Cardiology Treatments.webp";
import pic9 from "../assets/newimage/Kidney & Urology Treatments.webp";
import pic10 from "../assets/newimage/Ophthalmology Surgery.webp";
import pic11 from "../assets/newimage/Infertility Treatments.webp";
import pic12 from "../assets/newimage/Transplant Programs.webp";
import pic13 from "../assets/newimage/Ear, Nose, and Throat (ENT).webp";
import pic14 from "../assets/newimage/Orthopedic Treatment.webp";

import pic15 from "../assets/recent/patient2.webp";
import pic16 from "../assets/recent/patient1.webp";
import pic17 from "../assets/recent/patient2.webp";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    img: pic1,
    subtitle: "",
    title: "",
    desc: "Bringing World-Class Healthcare Closer to You - Seamlessly, Securely, Successfully",
  },
  {
    img: pic2,
    subtitle: "",
    title: "",
    desc: "Experience the Best of Indian Healthcare – Personalized, Efficient, and Hassle-Free",
  },
  {
    img: pic3,
    subtitle: "",
    title: "",
    desc: "Your Path to Quality Care Abroad – Trusted Partners, Exceptional Care",
  },
];
const specialties = [
  {
    title: "Neurology Treatment",
    alt: "not found",
    icon: pic4,
    color: "bg-orange-500",
    className: "hover:bg-orange-500",
  },
  {
    title: "Cosmetic Surgeries",
    alt: "not found",
    icon: pic5,
    color: "bg-red-500 hover:bg-red-500",
  },
  {
    title: "Cancer Treatment",
    alt: "not found",
    icon: pic6,
    color: "bg-blue-500 hover:bg-blue-500",
  },
  {
    title: "Dental Treatments",
    alt: "not found",
    icon: pic7,
    color: "bg-green-500 hover:bg-green-500",
  },
  {
    title: "Heart & Cardiology Treatments",
    alt: "not found",
    icon: pic8,
    color: "bg-orange-500",
    className: "hover:bg-orange-500",
  },
  {
    title: "Kidney & Urology Treatments",
    alt: "not found",
    icon: pic9,
    color: "bg-red-500 hover:bg-red-500",
  },
  {
    title: "Ophthalmology Surgery",
    alt: "not found",
    icon: pic10,
    color: "bg-blue-500 hover:bg-blue-500",
  },
  {
    title: "Infertility Treatments",
    alt: "not found",
    icon: pic11,
    color: "bg-green-500 hover:bg-green-500",
  },
  {
    title: "Transplant Programs",
    alt: "not found",
    icon: pic12,
    color: "bg-orange-500",
    className: "hover:bg-orange-500",
  },
  {
    title: "Ear, Nose, and Throat (ENT)",
    alt: "not found",
    icon: pic13,
    color: "bg-red-500 hover:bg-red-500",
  },
];

const patients = [
  {
    name: "Abdullah AI Mamun",
    country: "Bangladesh",
    treatment: "Health Checkup",
    hospital: "Balaji Action Hospital",
    location: "Paschim vihar, New Delhi, India",
    media: pic15,
    type: "image",
  },
  {
    name: "Ibrahima Kalil",
    country: "Saudi Arab",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic16,
    type: "image",
  },
  {
    name: "Abdullah AI Mamun",
    country: "Guinee",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic17,
    type: "image",
  },
];

export default function Home() {
  const [heroCurrent, setHeroCurrent] = useState(0); // For hero slider
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % patients.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const currentPatient = patients[current];

  return (
    <main className="bg-white ">
      <section className="hero-section relative h-[75vh] sm:h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-white isolate">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0 bg-dark">
          <AnimatePresence mode="">
            <motion.div
              key={heroCurrent}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 motion-slide"
            >
              <Image
                src={slides[heroCurrent].img}
                alt={slides[heroCurrent].title}
                fill
                className="object-cover object-center"
                priority
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-700/50 to-blue-600/30 mix-blend-multiply"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-1 md:px-12 lg:px-20 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroCurrent + "-content"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.p
                className="uppercase xl:text-4xl lg:text-2xl md:text-2xl sm:text-5xl tracking-[0.4em] text-cyan-300 font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {slides[heroCurrent].subtitle}
              </motion.p>

              <motion.p
                className="mt-40 sm:mt-30 text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl font-bold text-gray-200 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {slides[heroCurrent].desc}
              </motion.p>

              <div className="mt-8 sm:mb-4 flex justify-center gap-4 flex-wrap">
                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-xl transition duration-300"
                >
                  <a href="/contact" rel="noopener noreferrer" target="_blank">
                    Get Quote!
                  </a>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white/10 hover:bg-white/20 border border-cyan-300 text-cyan-200 font-semibold px-8 py-3 rounded-full shadow-md transition duration-300"
                >
                  <a href="/contact" rel="noopener noreferrer" target="_blank">
                    Become Partner!
                  </a>
                </motion.button> */}
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-xl transition-transform hover:scale-105 duration-300">
                  <a href="/contact" rel="noopener noreferrer" target="_blank">
                    Get Quote!
                  </a>
                </button>
                <button className="bg-white/10 hover:bg-white/20 border border-cyan-300 text-cyan-200 font-semibold px-8 py-3 rounded-full shadow-md transition-transform hover:scale-105 duration-300">
                  <a href="/contact" rel="noopener noreferrer" target="_blank">
                    Become Partner!
                  </a>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero Indicators */}
        <div className="absolute bottom-8 flex gap-3 justify-center w-full z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === heroCurrent
                  ? "bg-cyan-400 scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About & Services Section */}
      <section className="w-full py-16 bg-gray-50 mb-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* About Us */}
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4 border-b-2 border-white inline-block pb-1">
                ABOUT US
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Ekam is a premier medical travel facilitator dedicated to
                connecting patients with top healthcare providers in India.
                Offering personalized services, Ekam streamlines the medical
                tourism process, ensuring patients receive quality care, expert
                consultations, and support throughout their journey. With a
                focus on patient safety and satisfaction, Ekam transforms
                healthcare experiences across borders.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-block py-2 rounded-md transition"
            >
              Read More
            </Link>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-900 border-b-2 border-blue-900 inline-block pb-1">
              SERVICES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <FaUserMd className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">
                    DOCTOR AND HOSPITAL SELECTION
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Identifying top medical professionals and facilities
                    tailored to your specific treatment needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaHandshake className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">
                    COST NEGOTIATION
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Collaborating with hospitals to negotiate the best possible
                    rates for your medical care.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPassport className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">
                    VISA ASSISTANCE
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Guiding you through the visa application process to ensure a
                    smooth travel experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaHeadset className="text-orange-500 text-3xl" />
                <div>
                  <h3 className="font-bold text-blue-900 text-lg">
                    ON-SITE SUPPORT
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Providing accompaniment to medical appointments, ensuring
                    you have assistance during your healthcare journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Small Slider Section */}
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-20 bg-white ">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold dark:text-black">
            Explore{" "}
            <span className="text-blue-900 font-bold">Top Treatments</span>
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            We handle treatments that range from life-saving surgeries to
            procedures that restore confidence. Some of the most sought-after
            treatments include
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 justify-items-center">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col sm:flex-row items-center overflow-hidden"
            >
              {/* Left Half - Icon */}
              <div className="w-full sm:w-1/2 flex items-center justify-center bg-[#D5E0F2] h-28 sm:h-full p-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Right Half - Title */}
              <div className="w-full sm:w-1/2 flex items-center justify-center px-3 py-3 sm:py-0">
                <p className="text-gray-900 text-center text-sm sm:text-base md:text-[1 px] leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/treatment"
            className="text-blue-600 font-medium flex items-center gap-2 hover:underline"
          >
            View All →
          </a>
        </div>
      </section>

      <section className="bg-white dark:text-black py-12 px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10 ">
          <h2 className="text-2xl md:text-3xl font-semibold dark:text-grey">
            Patient <span className="text-blue-900">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Every patient journey tells a story of hope and healing.
          </p>
        </div>

        {/* Overlapping Boxes */}
        <div className="relative max-w-xl mx-auto xl:w-[570px]">
          {/* DESKTOP VIEW */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPatient.name}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6 }}
              className="relative flex flex-col md:flex-row items-start md:items-center"
            >
              {/* DESKTOP VIEW */}
              {/* Text Box */}
              <div className="hidden md:flex w-full">
                <div className="bg-white border-2 border-blue-900 rounded-2xl h-[270px] p-6 md:p-8 shadow-md lg:w-5xl md:w-[80%] relative z-20">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 dark:text-black">
                    {currentPatient.name}
                  </h3>
                  <ul className="text-gray-700 space-y-1 text-sm md:text-base">
                    <li>
                      <strong>Native Country:</strong> {currentPatient.country}
                    </li>
                    <li>
                      <strong>Treatment:</strong> {currentPatient.treatment}
                    </li>
                    <li>
                      <strong>Hospital:</strong> {currentPatient.hospital}
                    </li>
                    <li>
                      <strong>Location:</strong> {currentPatient.location}
                    </li>
                  </ul>
                </div>

                {/* Overlapping Image Box */}
                <div
                  className="lg:right-[-200px]
                 md:absolute md:top-1/2 md:right-[-50px]
                 md:-translate-y-1/2
                 w-[230px] sm:w-[260px] md:w-[280px]
                 mt-6 md:mt-0
                 bg-white border-2 border-blue-900 rounded-xl
                 overflow-hidden shadow-lg z-20
                 "
                >
                  <Image
                    src={currentPatient.media}
                    alt={currentPatient.name}
                    className="object-cover w-full h-55 scale-75"
                  />
                </div>
              </div>

              {/* MOBILE VIEW */}
              <div className="relative flex md:hidden w-full justify-center -ml-8">
                {/* Text Box */}
                <div
                  className="
                   bg-white border-2 border-blue-900 rounded-2xl
                   p-6 shadow-md
                   w-[60%]
                   relative z-10
                 "
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-3">
                    {currentPatient.name}
                  </h3>
                  <ul className="text-gray-700 space-y-1 text-sm md:text-base">
                    <li>
                      <strong>Native Country:</strong> {currentPatient.country}
                    </li>
                    <li>
                      <strong>Treatment:</strong> {currentPatient.treatment}
                    </li>
                    <li>
                      <strong>Hospital:</strong> {currentPatient.hospital}
                    </li>
                    <li>
                      <strong>Location:</strong> {currentPatient.location}
                    </li>
                  </ul>
                </div>
                <div
                  className="absolute top-1/2 right-[-10px] -translate-y-1/2
                   w-[130px] sm:w-[100px]
                   bg-white border-2 border-blue-900 rounded-xl
                   overflow-hidden shadow-lg z-10
                 "
                >
                  <Image
                    src={currentPatient.media}
                    alt={currentPatient.name}
                    className="
                     object-cover w-full h-50
                     scale-75
                   "
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <a
            href="/testimonial"
            className="text-blue-600 font-medium flex items-center justify-center gap-2 hover:underline"
          >
            View All →
          </a>
        </div>
      </section>
    </main>
  );
}

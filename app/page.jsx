"use client";
import i18n from "@/i18n";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUserMd, FaPassport, FaHandshake, FaHeadset } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import pic1 from "../assets/newimage/front1.webp";
import pic2 from "../assets/newimage/front2.webp";
import pic3 from "../assets/newimage/front3.webp";

import pic4 from "../assets/newimage/Organ Transplant.webp";
import pic5 from "../assets/newimage/Oncology.webp";
import pic6 from "../assets/newimage/Nephrology & Urology.webp";
import pic7 from "../assets/newimage/Neuro _ Spine.webp";
import pic8 from "../assets/newimage/Orthopedic.webp";
import pic9 from "../assets/newimage/Obstetrics & Gynecology.webp";
import pic10 from "../assets/newimage/GI & Bariatric.webp";
import pic11 from "../assets/newimage/Cardiology.webp";
import pic12 from "../assets/newimage/Dental.webp";
import pic13 from "../assets/newimage/Cosmetology & Dermatology.webp";
import pic13i from "../assets/newimage/Ophthalmology.webp";

import pic14 from "../assets/newimage/hp1.webp";
import pic15 from "../assets/newimage/hp2.webp";
import pic16 from "../assets/newimage/hp3.webp";

import pic17 from "../assets/flags/india.webp";
import pic18 from "../assets/flags/guinea.webp";
import pic19 from "../assets/flags/egypt.webp";
import pic20 from "../assets/flags/comoros.webp";
import pic21 from "../assets/flags/chad.webp";
import pic22 from "../assets/flags/african.webp";
import pic23 from "../assets/flags/cape verde.webp";

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
    desc: "Experience the Best of Indian Healthcare – Personalized, Efficient, and Hassle-Free.",
  },
  {
    img: pic3,
    subtitle: "",
    title: "",
    desc: "Your Path to Quality Care Abroad – Trusted Partners, Exceptional Care.",
  },
];

const specialties = [
  {
    title: "Organ Transplant",
    alt: "not found",
    icon: pic4,
    color: "bg-orange-500",
    className: "hover:bg-orange-500",
  },
  {
    title: "Oncology",
    alt: "not found",
    icon: pic5,
    color: "bg-red-500 hover:bg-red-500",
  },
  {
    title: "Nephrology & Urology",
    alt: "not found",
    icon: pic6,
    color: "bg-blue-500 hover:bg-blue-500",
  },
  {
    title: "Neuro Spine",
    alt: "not found",
    icon: pic7,
    color: "bg-green-500 hover:bg-green-500",
  },
  {
    title: "Orthopedic",
    alt: "not found",
    icon: pic8,
    color: "bg-orange-500",
    className: "hover:bg-orange-500",
  },
  {
    title: "Obstetrics & Gynecology",
    alt: "not found",
    icon: pic9,
    color: "bg-red-500 hover:bg-red-500",
  },
  {
    title: "GI & Bariatric",
    alt: "not found",
    icon: pic10,
    color: "bg-blue-500 hover:bg-blue-500",
  },
  {
    title: "Cardiology",
    alt: "not found",
    icon: pic11,
    color: "bg-green-500 hover:bg-green-500",
  },
  {
    title: "Dental",
    alt: "not found",
    icon: pic12,
    color: "bg-orange-500",
    className: "hover:bg-orange-500",
  },
  {
    title: "Cosmetology & Dermatology",
    alt: "not found",
    icon: pic13,
    color: "bg-red-500 hover:bg-red-500",
  },
  {
    title: "Ophthalmology",
    alt: "not found",
    icon: pic13i,
    color: "bg-red-500 hover:bg-red-500",
  },
];

const testimonials = [
  {
    name: "John Doe",
    image1: pic14, // Replace with actual image path
    text: "Thanks to Ekam, my heart surgery in India was a seamless experience. The doctors were exceptional, and the support staff made me feel at home. Highly recommend their services!",
  },
  {
    name: "Layla Hassan",
    image1: pic15,
    text: "Ekam made my orthopedic treatment smooth and stress-free. The care was top-notch!",
  },
  {
    name: "Ayesha Rahman",
    image1: pic16,
    text: "Dental treatment with Ekam was painless and professional. I felt truly cared for.",
  },
];

const countries = [
  { name: "India", flag: pic17 },
  { name: "Equatorial Guinea", flag: pic18 },
  { name: "Egypt", flag: pic19 },
  { name: "Comoros", flag: pic20 },
  { name: "Chad", flag: pic21 },
  { name: "Africa", flag: pic22 },
  { name: "Cape Verde", flag: pic23 },
];

export default function Home() {
  const [heroCurrent, setHeroCurrent] = useState(0); // For hero slider
  const [smallCurrent, setSmallCurrent] = useState(0); // For small slider
  const [testimonialIndex, setTestimonialIndex] = useState(0); // For testimonials

  // Hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Testimonial slider
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const { name, image1, text } = testimonials[testimonialIndex];

  // Duplicate list to make seamless infinite scrolling
  const repeatedCountries = [...countries, ...countries];

  return (
    <main>
      <section className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroCurrent}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[heroCurrent].img}
                alt={slides[heroCurrent].title}
                fill
                className="object-cover object-center"
                priority
              />
              {/* Animated gradient overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-700/50 to-blue-600/30 mix-blend-multiply"
              />
              {/* Subtle animated light sweep */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-[30%] bg-white/10 blur-3xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 md:px-12 lg:px-20 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroCurrent + "-content"}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -60 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.p
                className="uppercase text-xs sm:text-sm md:text-base tracking-[0.4em] text-cyan-300 font-semibold"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {slides[heroCurrent].subtitle}
              </motion.p>

              <motion.h1
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-4 leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 text-transparent bg-clip-text drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {slides[heroCurrent].title}
              </motion.h1>

              <motion.p
                className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {slides[heroCurrent].desc}
              </motion.p>

              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-xl backdrop-blur-md transition duration-300"
                >
                  Get Free Quotes
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 border border-cyan-300 text-cyan-200 font-semibold px-8 py-3 rounded-full shadow-md backdrop-blur-lg transition duration-300"
                >
                  Learn More
                </motion.button>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === heroCurrent
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
              className="inline-block border border-white px-6 py-2 rounded-md hover:bg-white hover:text-blue-900 transition"
            >
              Read More →
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
      <section className="py-12 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
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
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6 justify-items-center"
        >
          {specialties.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md hover:border-red-200 transition-all duration-300 flex flex-col sm:flex-row items-center overflow-hidden"
            >
              {/* Left Half - Icon */}
              <div className="w-full sm:w-1/2 flex items-center justify-center bg-[#fff4f4] h-28 sm:h-full p-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Right Half - Title */}
              <div className="w-full sm:w-1/2 flex items-center justify-center px-3 py-3 sm:py-0">
                <p className="text-gray-900 font-semibold text-center text-sm sm:text-base md:text-[17px] leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      

      <div className="relative w-full max-w-3xl mx-auto py-10 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Happy Patients
        </h2>
        <div className="bg-white shadow-lg rounded-xl p-6 transition-all duration-500 ease-in-out">
          <img
            src={image1.src}
            alt={name}
            className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-blue-500"
          />
          <p className="text-gray-700 italic mb-4">"{text}"</p>
          <h4 className="text-lg font-semibold text-blue-600">{name}</h4>
        </div>
      </div>
    </main>
  );
}


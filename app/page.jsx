"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaUserMd, FaPassport, FaHandshake, FaHeadset } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import pic1 from "../assets/newimage/front1.png";
import pic2 from "../assets/newimage/front2.png";
import pic3 from "../assets/newimage/front3.png";
import pic4 from "../assets/image/front4.png";
import pic5 from "../assets/image/front5.png";
import pic6 from "../assets/image/A.png";
import pic7 from "../assets/image/B.png";
import pic8 from "../assets/image/C.png";
import pic9 from "../assets/image/D.png";
import pic10 from "../assets/image/E.png";
import pic11 from "../assets/image/F.png";
import pic12 from "../assets/image/G.png";
import pic13 from "../assets/image/H.png";
import pic14 from "../assets/image/P1.png";
import pic15 from "../assets/image/P2.png";
import pic16 from "../assets/image/P3.png";
import pic17 from "../assets/flags/india.png";
import pic18 from "../assets/flags/guinea.webp";
import pic19 from "../assets/flags/egypt.png";
import pic20 from "../assets/flags/comoros.jpg";
import pic21 from "../assets/flags/chad.png";
import pic22 from "../assets/flags/african.jpg";
import pic23 from "../assets/flags/cape verde.png";
import pic24 from "../assets/image/pic.jpg";
import pic25 from "../assets/image/pic1.jpg";
import pic26 from "../assets/image/pic2.jpg";

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

const slide = [
  {
    title: "Cancer Treatment",
    image: pic6,
    color: "bg-orange-500",
    className: "hover:bg-orange-500",
  },
  {
    title: "Cardiac Surgery",
    image: pic7,
    color: "bg-red-500 hover:bg-red-500",
  },
  {
    title: "Orthopedic Surgery",
    image: pic8,
    color: "bg-blue-500 hover:bg-blue-500",
  },
  {
    title: "Dental Treatments",
    image: pic9,
    color: "bg-green-500 hover:bg-green-500",
  },
  {
    title: "Cancer Treatment",
    image: pic10,
    color: "bg-orange-500",
    className: "hover:bg-orange-500",
  },
  {
    title: "Cardiac Surgery",
    image: pic11,
    color: "bg-red-500 hover:bg-red-500",
  },
  {
    title: "Orthopedic Surgery",
    image: pic12,
    color: "bg-blue-500 hover:bg-blue-500",
  },
  {
    title: "Dental Treatments",
    image: pic13,
    color: "bg-green-500 hover:bg-green-500",
  },
];

const testimonials = [
  {
    name: "Ayesha Rahman",
    image1: pic14, // Replace with actual image path
    text: "Thanks to Ekam, my heart surgery in India was a seamless experience. The doctors were exceptional, and the support staff made me feel at home. Highly recommend their services!",
  },
  {
    name: "John Doe",
    image1: pic16,
    text: "Ekam made my orthopedic treatment smooth and stress-free. The care was top-notch!",
  },
  {
    name: "Priya Singh",
    image1: pic15,
    text: "Dental treatment with Ekam was painless and professional. I felt truly cared for.",
  },
  {
    name: "John Doe",
    image1:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    text: "Ekam made my orthopedic treatment smooth and stress-free. The care was top-notch!",
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

const hospitals = [
  { name: "India", img: pic24 },
  { name: "Equatorial Guinea", img: pic25 },
  { name: "Egypt", img: pic26 },
  { name: "Comoros", img: pic4 },
  { name: "Egypt", img: pic5 },
  { name: "Comoros", img: pic25 },
];

// export const metadata = {
//   title: "Best Medical Travel Services in India | Ekam",
//   description:
//     "Ekam connects patients with top hospitals and doctors in India, ensuring safe and hassle-free medical travel.",
// };

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

  // Small slider (if you want autoplay, otherwise you already have motion scrolling)
  useEffect(() => {
    const timer = setInterval(() => {
      setSmallCurrent((prev) => (prev + 1) % slide.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Testimonial slider
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const { name, image1, text } = testimonials[testimonialIndex];

  // Duplicate list to make seamless infinite scrolling
  const repeatedCountries = [...countries, ...countries];

  const repeatedHospitals = [...hospitals, ...hospitals];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroCurrent}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[heroCurrent].img}
                alt={slides[heroCurrent].title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-blue-600/30" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroCurrent + "-content"}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.2, y: -50 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.p
                className="uppercase text-sm md:text-base tracking-[0.3em] text-cyan-300 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {slides[heroCurrent].subtitle}
              </motion.p>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mt-4 leading-tight drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {slides[heroCurrent].title}
              </motion.h1>

              <motion.p
                className="mt-4 text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {slides[heroCurrent].desc}
              </motion.p>

              <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
                >
                  Book Appointment
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-gray-100 text-cyan-600 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
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
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === heroCurrent ? "bg-cyan-400 scale-125" : "bg-white/50"
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
      <div className="relative w-full mt-3 mb-5 overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* Duplicate slides array for seamless looping */}
          {[...slide, ...slide].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 sm:w-64 md:w-80 lg:w-96 rounded-lg shadow-lg overflow-hidden"
            >
              <div
                className={`relative ${item.color} h-48 sm:h-40 md:h-48 lg:h-56`}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center font-semibold text-lg sm:text-base md:text-lg">
                {item.title}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="w-100 max-w-3xl mx-auto px-4 py-10 text-center">
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

      <section className="w-full bg-gray-50">
        {/* Contact Bar */}
        <div className="bg-blue-900 text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-12 py-4">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <span>📞 Call us :</span>
            <span className="text-blue-200">+91-999 020 5353</span>
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold mt-2 md:mt-0">
            <span>✉️ Mail us :</span>
            <span className="text-blue-200">info@ekamcure.com</span>
          </div>
        </div>

        {/* Countries Section */}
        <div className="text-center py-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Countries we proudly Serve!
          </h2>
        </div>
        <div className="w-20 h-1 bg-blue-700 mx-auto mt-2 mb-8 rounded-full" />
        <div className="overflow-hidden relative w-full mb-6 mt-4">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: ["0%", "-50%"] }} // slide halfway since content is doubled
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {repeatedCountries.map((country, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[140px] md:min-w-[180px]"
              >
                <div className="relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={country.flag}
                    alt={country.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
                  {country.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section>
        <div className="text-center py-10 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Top Hospitals!
          </h2>
        </div>
        <div className="w-20 h-1 bg-blue-700 mx-auto mt-2 mb-8 rounded-full" />
        <div className="overflow-hidden relative w-full mb-6 mt-4">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: ["0%", "-50%"] }} // slide halfway since content is doubled
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {repeatedHospitals.map((hosp, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[140px] md:min-w-[180px]"
              >
                <div className="relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={hosp.img}
                    alt={hosp.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 text-sm md:text-base font-medium text-gray-700 whitespace-nowrap">
                  {hosp.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-cover bg-center py-16 px-4 md:px-8  bg-[url('../assets/image/footer-contact-bg.jpg')]">
        <div className="max-w-xl mx-auto bg-opacity-90 rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            NEWS LETTER
          </h2>
          <p className="text-gray-600 mb-6">
            Enter your email address for getting updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="sample@gmail.com"
              className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

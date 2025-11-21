"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import img from "../../assets/recent/Testimonial.webp";

import pic1 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic2 from "../../assets/recent/Christopher Muza2.webp";
import pic3 from "../../assets/recent/Keshwan Prasad.webp";
import pic4 from "../../assets/recent/SunilDuth Putty2.webp";
import pic5 from "../../assets/recent/Yogita Singh.webp";
import pic6 from "../../assets/recent/Vidya Wati.webp";
import pic8 from "../../assets/recent/Patient(2).webp";
import pic9 from "../../assets/recent/Narendra Chand.webp";
import pic10 from "../../assets/recent/Brij Lata.webp";
import pic12 from "../../assets/recent/Kamurayi Mambayo.webp";
import pic15 from "../../assets/recent/Patient(9).webp";
import pic16 from "../../assets/recent/Satish Chandra.webp";
import pic17 from "../../assets/recent/Adbul Aziim Ramzan.webp";
import pic20 from "../../assets/recent/Bissun Prasad.webp";
import pic21 from "../../assets/recent/Deepak Dhookoo.webp";
import pic22 from "../../assets/recent/Shylotte Kativhu.webp";

const patients = [
  {
    name: "Abdullah AI Mamun",
    country: "Bangladesh",
    treatment: "Health Checkup",
    hospital: "Balaji Action Hospital",
    location: "Paschim Vihar, New Delhi, India",
    media: pic1,
    type: "image",
  },
  {
    name: "Christopher Muza",
    country: "Zimbabwe",
    treatment: "Urology",
    hospital: "Yatharth Hospital",
    location: "Noida",
    media: pic2,
    type: "image",
  },
  {
    name: "Keshwan Prasad",
    country: "Fiji",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic3,
    type: "image",
  },
  {
    name: "Sunilduth Putty",
    country: "Mauritius",
    treatment: "Cardiac Surgery",
    hospital: "Max Hospital",
    location: "Noida",
    media: pic4,
    type: "image",
  },
  {
    name: "Yogita Singh",
    country: "Fiji",
    treatment: "Ca Cervix",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic5,
    type: "image",
  },
  {
    name: "Vidya Wati",
    country: "Fiji",
    treatment: "Eye",
    hospital: "The Sight Avenue",
    location: "New Delhi",
    media: pic6,
    type: "image",
  },
  {
    name: "Christopher Muza",
    country: "Zimbabwe",
    treatment: "Urology",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic8,
    type: "image",
  },
  {
    name: "Narendra Chand",
    country: "Fiji",
    treatment: "Glucoma",
    hospital: "The Sight Avenue",
    location: "Delhi",
    media: pic9,
    type: "image",
  },
  {
    name: "Brij Lata",
    country: "Fiji",
    treatment: "ENT",
    hospital: "Max Hospital",
    location: "Noida",
    media: pic10,
    type: "image",
  },
  {
    name: "Kamurayi Mambayo",
    country: "Zimbabwe",
    treatment: "Hip Replacement",
    hospital: "Yatharth Hospital",
    location: "Noida",
    media: pic12,
    type: "image",
  },
  {
    name: "Keshwan Prasad",
    country: "Fiji",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic15,
    type: "image",
  },
  {
    name: "Satish Chandra",
    country: "Fiji",
    treatment: "Eye",
    hospital: "The Sight Avenue",
    location: "Delhi",
    media: pic16,
    type: "image",
  },
  {
    name: "Adbul Aziim Ramzan",
    country: "Mauritius",
    treatment: "Joint Surgery",
    hospital: "Max Hospital",
    location: "Noida",
    media: pic17,
    type: "image",
  },
  {
    name: "Bissun Prasad",
    country: "Fiji",
    treatment: "Sinus",
    hospital: "Yatharth Hospital",
    location: "Noida",
    media: pic20,
    type: "image",
  },
  {
    name: "Deepak Dhookoo",
    country: "Mauritius",
    treatment: "Spine",
    hospital: "Max Hospital",
    location: "Noida",
    media: pic21,
    type: "image",
  },
  {
    name: "Shylotte Kativhu",
    country: "Zimbabwe",
    treatment: "Heal Pain",
    hospital: "Yatharth hospital",
    location: "Noida",
    media: pic22,
    type: "image",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds
useEffect(() => {
  if (isPaused) return; // ⛔ STOP auto-slide when paused true

  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % Math.ceil(patients.length / 2));
  }, 3000);

  return () => clearInterval(timer);
}, [isPaused]);


  const slides = [];
  for (let i = 0; i < patients.length; i += 2) {
    slides.push(patients.slice(i, i + 2));
  }

  const handleSlideClick = () => {
    setIsPaused(!isPaused); // toggle pause/play
  };

  const variants = {
    animate: {
      x: isPaused ? 0 : "-100%",
      transition: {
        duration: 5,
        ease: "linear",
        repeat: isPaused ? 0 : Infinity,
      },
    },
  };

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="testimonial"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Testimonial
          </h1>
        </div>
      </div>

      <section className="bg-white dark:text-black py-12 px-4 md:px-10 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Patient <span className="text-blue-900">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Every patient journey tells a story of hope and healing.
          </p>
        </div>

        {/* Slider Container */}
        {/* desktop */}
        <div className="relative text-justify mx-auto hidden md:flex flex flex-col items-center gap-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-row-1 sm:grid-row-2 gap-10 cursor-pointer"
              variants={variants}
              onClick={handleSlideClick}
            >
              {slides[current].map((p, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-blue-900 rounded-2xl shadow-md relative flex flex-col
                md:flex-row md:w-[570px] mx-auto"
                >
                  <div
                    className="bg-white dark:text-black  border-blue-900 rounded-2xl h-[270px]
                    p-6 md:p-8 shadow-md lg:w-5xl md:w-[70%] relative z-20 font-karla text-[17px]"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">
                      {p.name}
                    </h3>
                    <ul className="text-gray-700 text-sm md:text-base space-y-1">
                      <li>
                        <strong>Native Country:</strong> {p.country}
                      </li>
                      <li>
                        <strong>Treatment:</strong> {p.treatment}
                      </li>
                      <li>
                        <strong>Hospital:</strong> {p.hospital}
                      </li>
                      <li>
                        <strong>Location:</strong> {p.location}
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`md:absolute md:top-1/2 md:-translate-y-1/2
                index % 2 === 0 ? lg:right-[-200px] md:right-[-50px]
                w-[230px] sm:w-[260px] md:w-[280px] mt-6 md:mt-0 bg-white border-2 border-blue-900
                rounded-xl overflow-hidden shadow-lg z-20`}
                  >
                    <div className="relative w-full h-50">
                      <Image
                        src={p.media}
                        alt={p.name}
                        fill
                        className="object-cover w-full h-auto scale-75"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === current ? "bg-blue-900 w-5" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <div className="relative flex md:hidden w-full flex-col mx-auto justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-row-1 sm:grid-row-2 gap-10"
              variants={variants}
              onClick={handleSlideClick}
            >
              {slides[current].map((p, index) => (
                <div
                  key={index}
                  className="relative flex md:hidden w-full justify-center -ml-12 w-[570px]"
                >
                  <div
                    className="bg-white dark:text-black border-2 border-blue-900 rounded-2xl
                p-6 shadow-md w-[60%] relative z-10"
                  >
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-900">
                      {p.name}
                    </h3>
                    <ul className="text-gray-700 text-sm md:text-base space-y-1">
                      <li>
                        <strong>Native Country:</strong> {p.country}
                      </li>
                      <li>
                        <strong>Treatment:</strong> {p.treatment}
                      </li>
                      <li>
                        <strong>Hospital:</strong> {p.hospital}
                      </li>
                      <li>
                        <strong>Location:</strong> {p.location}
                      </li>
                    </ul>
                  </div>
                  <div
                    className={`absolute top-1/2 right-[-14px] -translate-y-1/2
                w-[130px] sm:w-[100px] bg-white border-2 border-blue-900
                rounded-xl overflow-hidden shadow-lg z-10`}
                  >
                    <div className="relative w-full h-35">
                      <Image
                        src={p.media}
                        alt={p.name}
                        fill
                        className="object-cover w-full h-40 scale-75"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === current ? "bg-blue-900 w-5" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}



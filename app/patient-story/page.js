"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import img from "../../assets/recent/Testimonial.webp";

import pic1 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic2 from "../../assets/recent/Christopher muja.webp";
import pic3 from "../../assets/recent/Keshwan Prasad.webp";
import pic4 from "../../assets/recent/Sunilduth Putty.webp";
import pic5 from "../../assets/recent/Yogita Singh.webp";
import pic6 from "../../assets/recent/Patient(17).webp";
import pic7 from "../../assets/recent/Patient(1).webp";
import pic8 from "../../assets/recent/Patient(2).webp";
import pic9 from "../../assets/recent/Patient(3).webp";
import pic10 from "../../assets/recent/Patient(4).webp";
import pic11 from "../../assets/recent/Patient(5).webp";
import pic12 from "../../assets/recent/Patient(6).webp";
import pic13 from "../../assets/recent/Patient(7).webp";
import pic14 from "../../assets/recent/Patient(8).webp";
import pic15 from "../../assets/recent/Patient(9).webp";
import pic16 from "../../assets/recent/Patient(10).webp";
import pic17 from "../../assets/recent/Patient(11).webp";
import pic18 from "../../assets/recent/Patient(12).webp";
import pic19 from "../../assets/recent/Patient(13).webp";
import pic20 from "../../assets/recent/Patient(14).webp";
import pic21 from "../../assets/recent/Patient(15).webp";
import pic22 from "../../assets/recent/Patient(16).webp";

const patients = [
  {
    name: "Abdullah AI Mamun",
    country: "Bangladesh",
    treatment: "Health Checkup",
    hospital: "Balaji Action Hospital",
    location: "Paschim Vihar, New Delhi, India",
    media: pic1,
  },
  {
    name: "Christopher Muza",
    country: "Fiji",
    treatment: "Health Checkup",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic2,
  },
  {
    name: "Keshwan Prasad",
    country: "Fiji",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic3,
  },
  {
    name: "Sunilduth Putty",
    country: "Mauritius",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic4,
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
    name: "Yogita Singh",
    country: "Fiji",
    treatment: "Ca Cervix",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic6,
    type: "image",
  },
  {
    name: "Abdullah AI Mamun",
    country: "Bangladesh",
    treatment: "Health Checkup",
    hospital: "Balaji Action Hospital",
    location: "Paschim Vihar, New Delhi, India",
    media: pic7,
  },
  {
    name: "Christopher Muza",
    country: "Fiji",
    treatment: "Health Checkup",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic8,
  },
  {
    name: "Keshwan Prasad",
    country: "Fiji",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic9,
  },
  {
    name: "Sunilduth Putty",
    country: "Mauritius",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic10,
  },
  {
    name: "Yogita Singh",
    country: "Fiji",
    treatment: "Ca Cervix",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic11,
    type: "image",
  },
  {
    name: "Yogita Singh",
    country: "Fiji",
    treatment: "Ca Cervix",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic12,
    type: "image",
  },
  {
    name: "Abdullah AI Mamun",
    country: "Bangladesh",
    treatment: "Health Checkup",
    hospital: "Balaji Action Hospital",
    location: "Paschim Vihar, New Delhi, India",
    media: pic13,
  },
  {
    name: "Christopher Muza",
    country: "Fiji",
    treatment: "Health Checkup",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic14,
  },
  {
    name: "Keshwan Prasad",
    country: "Fiji",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic15,
  },
  {
    name: "Sunilduth Putty",
    country: "Mauritius",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic16,
  },
  {
    name: "Yogita Singh",
    country: "Fiji",
    treatment: "Ca Cervix",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic17,
    type: "image",
  },
  {
    name: "Yogita Singh",
    country: "Fiji",
    treatment: "Ca Cervix",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic18,
    type: "image",
  },
  {
    name: "Abdullah AI Mamun",
    country: "Bangladesh",
    treatment: "Health Checkup",
    hospital: "Balaji Action Hospital",
    location: "Paschim Vihar, New Delhi, India",
    media: pic19,
  },
  {
    name: "Christopher Muza",
    country: "Fiji",
    treatment: "Health Checkup",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic20,
  },
  {
    name: "Keshwan Prasad",
    country: "Fiji",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic21,
  },
  {
    name: "Sunilduth Putty",
    country: "Mauritius",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic22,
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.ceil(patients.length / 2));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [];
  for (let i = 0; i < patients.length; i += 2) {
    slides.push(patients.slice(i, i + 2));
  }

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
          <h1 className="text-3xl md:text-5xl font-bold text-white">Testimonial</h1>
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
              className="grid grid-row-1 sm:grid-row-2 gap-10"
            >
              {slides[current].map((p, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-blue-900 rounded-2xl shadow-md relative flex flex-col
                md:flex-row md:w-[570px] mx-auto"
                >
                  <div
                    className="bg-white dark:text-black  border-blue-900 rounded-2xl h-[270px]
                    p-6 md:p-8 shadow-md lg:w-5xl md:w-[70%] relative z-20"
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

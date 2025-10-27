"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img from "../../assets/newimage/team-bg-bg.webp";
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
          <h1 className="text-3xl md:text-5xl font-bold text-white">Gallery</h1>
        </div>
      </div>

      {/* desktop responsive */}
      <section className="bg-white py-12 px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Patient <span className="text-blue-900">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Every patient journey tells a story of hope and healing.
          </p>
        </div>

        {/* Patients List */}
        <div className="hidden md:flex relative flex flex-col mx-auto items-center gap-8">
          {patients.map((p, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row w-full md:w-[570px] mx-auto"
            >
              {/* Info Box */}
              <div className="bg-white border-2 border-blue-900 rounded-2xl h-[270px] p-6 md:p-8 shadow-md lg:w-5xl md:w-[70%] relative z-20">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {p.name}
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm md:text-base">
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
                    <strong>Doctor Name:</strong> {p.doctor}
                  </li>
                  <li>
                    <strong>Location:</strong> {p.location}
                  </li>
                </ul>
              </div>

              {/* Overlapping Image */}
              <div
                className={`md:absolute md:top-1/2 md:-translate-y-1/2
                  index % 2 === 0 ? lg:right-[-200px] md:right-[-50px]
              w-[230px] sm:w-[260px] md:w-[280px]
              mt-6 md:mt-0 bg-white border-2 border-blue-900 rounded-xl
              overflow-hidden shadow-lg z-20`}
              >
                <Image
                  src={p.media}
                  alt={p.name}
                  className="object-cover w-full h-auto scale-75"
                />
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Mobile Section */}
        <div className="flex flex-col md:hidden mx-auto items-center gap-8">
          {patients.map((p, index) => (
            <div
              key={index}
              className="flex flex-col w-full sm:w-[400px] mx-auto bg-white border-2 border-blue-900 rounded-2xl shadow-md overflow-hidden"
            >
              <Image
                src={p.media}
                alt={p.name}
                className="object-cover w-full h-[200px]"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{p.name}</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
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
                    <strong>Doctor:</strong> {p.doctor}
                  </li>
                  <li>
                    <strong>Location:</strong> {p.location}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

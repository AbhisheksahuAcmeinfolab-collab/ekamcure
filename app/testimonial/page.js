"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import img from "../../assets/recent/common banner.webp";
import pic1 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic2 from "../../assets/recent/Christopher muja.webp";
import pic3 from "../../assets/recent/Keshwan Prasad.webp";
import pic4 from "../../assets/recent/Sunilduth Putty.webp";
import pic5 from "../../assets/recent/Yogita Singh.webp";


const patients = [
  {
    name: "Abdullah AI Mamun",
    country: "Bangladesh",
    treatment: "Health Checkup",
    hospital: "Balaji Action Hospital",
    location: "Paschim vihar, New Delhi, India",
    media: pic1,
    type: "image",
  },
  {
    name: "Christopher muja",
    country: "Fiji",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic2,
    type: "image",
  },
  {
    name: "Keshwan Prasad",
    country: "Fiji",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic3,
    type: "image",
  },
  {
    name: "Sunilduth Putty",
    country: "Mauritius",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic4,
    type: "image",
  },
  {
    name: "Yogita Singh",
    country: "Fiji",
    treatment: "ACL Reconstruction Surgery",
    hospital: "SCI International Hospital",
    location: "Greater Kailash – 1, New Delhi, India",
    media: pic5,
    type: "image",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  return (
    <>
      {/* <GalleryPage/> */}
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Fee Banner"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Testimonial</h1>
        </div>
      </div>

      {/* desktop responsive */}
      <section className="bg-white dark:text-black py-12 px-4 md:px-10">
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
              <div className="bg-white dark:text-black border-2 border-blue-900 rounded-2xl h-[270px] p-6 md:p-8 shadow-md lg:w-5xl md:w-[70%] relative z-20">
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
                  className="object-cover w-full h-50 scale-75"
                />
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE VIEW */}
        <div className="relative flex flex-col mx-auto items-center gap-8">
          {patients.map((p, index) => (
            <div
              key={index}
              className="relative flex md:hidden w-full justify-center -ml-12"
            >
              {/* <div className="relative flex md:hidden w-full justify-center -ml-8"> */}
              {/* Text Box */}
              <div
                className="
                          bg-white border-2 border-blue-900 rounded-2xl
                          p-6 shadow-md
                          w-[60%]
                          relative z-10
                        "
              >
                <h3 className="text-xl dark:text-black md:text-2xl font-semibold mb-3">
                  {patients[current].name}
                </h3>
                <ul className="text-gray-700 space-y-1 text-sm md:text-base">
                  <li>
                    <strong>Native Country:</strong> {patients[current].country}
                  </li>
                  <li>
                    <strong>Treatment:</strong> {patients[current].treatment}
                  </li>
                  <li>
                    <strong>Hospital:</strong> {patients[current].hospital}
                  </li>
                  <li>
                    <strong>Location:</strong> {patients[current].location}
                  </li>
                </ul>
              </div>
              <div
                className="absolute top-1/2 right-[-14px] -translate-y-1/2
                w-[130px] sm:w-[100px]
                bg-white border-2 border-blue-900 rounded-xl
                overflow-hidden shadow-lg z-10"
              >
                <Image
                  src={p.media}
                  alt={p.name}
                  className="object-cover w-full h-40 scale-75"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Image imports
import img from "../../assets/recent/Gallery 1.webp";
import pic23 from "../../assets/recent/Vidya Wati.png";
import pic22 from "../../assets/recent/Shylotte Kativhu.png";
import pic21 from "../../assets/recent/Deepak Dhookoo.png";
import pic20 from "../../assets/recent/Bissun Prasad.png";
import pic19 from "../../assets/recent/Christopher Muza3.png";
import pic17 from "../../assets/recent/Adbul Aziim Ramzan.png";
import pic16 from "../../assets/recent/Satish Chandra.png";
import pic15 from "../../assets/recent/Kamurayi Mambayo2.png";
import pic14 from "../../assets/recent/Shylotte Kativhu2.png";
import pic12 from "../../assets/recent/Kamurayi Mambayo.png";
import pic11 from "../../assets/recent/Christopher Muza2.png";
import pic10 from "../../assets/recent/Brij Lata.png";
import pic9 from "../../assets/recent/Narendra Chand.png";
import pic7 from "../../assets/recent/SunilDuth Putty2.png";
import pic6 from "../../assets/recent/Junior Goredema.png";
import pic4 from "../../assets/recent/Keshwan Prasad.png";
import pic3 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic2 from "../../assets/recent/SunilDuth Putty3.png";
import pic1 from "../../assets/recent/Yogita Singh.png";
import g1 from "../../assets/gallery/g-1.jpeg";
import g2 from "../../assets/gallery/g-2.jpeg";
import g3 from "../../assets/gallery/g-3.jpeg";
import g4 from "../../assets/gallery/g-4.jpeg";
import g5 from "../../assets/gallery/g-5.jpeg";
import g6 from "../../assets/gallery/g-6.jpeg";
import g7 from "../../assets/gallery/g-7.jpeg";
import g8 from "../../assets/gallery/g-8.jpg";
import g9 from "../../assets/gallery/g-9.jpeg";
import g10 from "../../assets/gallery/g-10.jpeg";
import g11 from "../../assets/gallery/g-11.jpeg";
import g12 from "../../assets/gallery/g-12.jpeg";
import g13 from "../../assets/gallery/g-13.jpeg";

const images = [
  { src: g1, title: "Patient" },
  { src: g2, title: "Patient" },
  { src: g3, title: "Patient" },
  { src: g4, title: "Patient" },
  { src: g5, title: "Patient" },
  { src: g6, title: "Patient" },
  { src: g7, title: "Patient" },
  { src: g8, title: "Patient" },
  { src: g9, title: "Patient" },
  { src: g10, title: "Patient" },
  { src: g11, title: "Patient" },
  { src: g12, title: "Patient" },
  { src: g13, title: "Patient" },
  { src: pic23, title: "Vidya Wati" },
  { src: pic22, title: "Shylotte Kativhu" },
  { src: pic21, title: "Deepak Dhookoo" },
  { src: pic20, title: "Bissun Prasad" },
  { src: pic19, title: "Christopher Muza" },
  { src: pic17, title: "Adbul Aziim Ramzan" },
  { src: pic16, title: "Satish Chandra" },
  { src: pic15, title: "Kamurayi Mambayo" },
  { src: pic14, title: "Shylotte Kativhu" },
  { src: pic12, title: "Kamurayi Mambayo" },
  { src: pic11, title: "Christopher Muza" },
  { src: pic10, title: "Brij Lata" },
  { src: pic9, title: "Narendra Chand" },
  { src: pic7, title: "Sunilduth Putty" },
  { src: pic6, title: "Junior Goredema" },
  { src: pic4, title: "Keshwan Prasad" },
  { src: pic3, title: "Abdullah AI Mamun" },
  { src: pic2, title: "SunilDuth Putty" },
  { src: pic1, title: "Yogita Singh" },
];

const videos = [
  {
    src: "https://www.youtube.com/embed/FuX4pQNBNEY",
    title: "Mr. Kamurayi Mambayo",
    desc: "Hip Replacement Surgery",
  },
  {
    src: "https://www.youtube.com/embed/76eBbyVs1tk",
    title: "Shylotte’s Journey",
    desc: "Patient Recovery Story",
  },
  {
    src: "https://www.youtube.com/embed/kFUijCYIHAU",
    title: "Mr. Keshwan Prasad",
    desc: "Medical Treatment Success",
  },
  {
    src: "https://www.youtube.com/embed/u--DGk3BKYk",
    title: "Mr. Aziim Ramzan",
    desc: "International Patient Story",
  },
  {
    src: "https://www.youtube.com/embed/12FGoVnCtzs",
    title: "Dennis Goredema",
    desc: "Healing Journey in India",
  },
  {
    src: "https://www.youtube.com/embed/2UnjdXoTSNo",
    title: "Florence",
    desc: "Success Story",
  },
  {
    src: "https://www.youtube.com/embed/-byO8roa5vI",
    title: "Sunilduth Putty",
    desc: "Patient Testimonial",
  },
  {
    src: "https://www.youtube.com/embed/AjRSPGuUq50",
    title: "Kamal Prakash Nadi",
    desc: "Treatment Experience",
  },
  {
    src: "https://www.youtube.com/embed/22At_3bi8q8",
    title: "Marie Line",
    desc: "Patient Story",
  },
  {
    src: "https://www.youtube.com/embed/n0NJUBqqGtk",
    title: "Miss Priscilla Danso",
    desc: "Patient Testimonial",
  },
  {
    src: "https://www.youtube.com/embed/DPQEiGFSWok",
    title: "Noor Mohammad",
    desc: "International Care Story",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("mission");

  return (
    <main className="bg-[#F8FAFD] min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-[220px] md:h-[280px] bg-[#053161] flex items-center justify-center overflow-hidden">
        <Image
          src={img}
          alt="Gallery"
          fill
          priority
          className="object-cover opacity-40 mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
            Our Gallery
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-2 max-w-xl mx-auto font-light">
            Visual highlights and real recovery stories of international patients treated in India.
          </p>
        </div>
      </div>

      {/* Gallery Main Container */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* ===== TOGGLE BUTTON ===== */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <span
              onClick={() => setActive("mission")}
              className={`cursor-pointer font-semibold text-lg md:text-xl transition-colors ${
                active === "mission" ? "text-[#053161]" : "text-gray-400"
              }`}
            >
              Our Photos
            </span>

            <button
              onClick={() =>
                setActive(active === "mission" ? "vision" : "mission")
              }
              aria-label="Toggle Gallery Mode"
              className="relative w-16 h-8 bg-[#053161] rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  active === "mission" ? "translate-x-0" : "translate-x-8"
                }`}
              />
            </button>

            <span
              onClick={() => setActive("vision")}
              className={`cursor-pointer font-semibold text-lg md:text-xl transition-colors ${
                active === "vision" ? "text-[#053161]" : "text-gray-400"
              }`}
            >
              Our Videos
            </span>
          </div>

          {/* ===== PHOTOS SECTION ===== */}
          {active === "mission" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#053161]">
                  Photo Gallery
                </h2>
                <div className="w-16 h-1 bg-pink-500 mx-auto mt-2 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-[#E1E8F0] shadow-sm hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-[#053161] font-semibold text-center text-base line-clamp-1">
                        {item.title}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ===== VIDEOS SECTION ===== */}
          {active === "vision" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header Box */}
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
                <span className="inline-block px-3 py-1 bg-blue-50 text-[#1B4F9C] text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
                  Patient Experiences
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-[#053161] leading-tight mb-4">
                  Patient Success Stories From Around The World
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Hear directly from our international patients sharing their real healing journeys and experiences in India.
                </p>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {videos.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E1E8F0] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Responsive iFrame Wrapper */}
                    <div className="relative w-full aspect-video bg-black">
                      <iframe
                        src={item.src}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        className="absolute inset-0 w-full h-full border-0"
                      />
                    </div>

                    {/* Meta Detail Container */}
                    <div className="p-5 flex flex-col justify-between flex-grow bg-white">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#053161] mb-1 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#1B4F9C] font-semibold">
                        <span>Ekam Health Care</span>
                        <span className="flex items-center gap-1">
                          ▶ Watch Video
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </div>
      </section>
    </main>
  );
}

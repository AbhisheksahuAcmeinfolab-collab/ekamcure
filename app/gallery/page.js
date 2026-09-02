"use client";
import { useState } from "react";
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
  { src: g1, title: "International Patient Care" },
  { src: g2, title: "Successful Recovery Visit" },
  { src: g3, title: "Hospital Assistance" },
  { src: g4, title: "Patient Support Team" },
  { src: g5, title: "Consultation Guidance" },
  { src: g6, title: "Post-Surgery Care" },
  { src: g7, title: "Medical Escort Service" },
  { src: g8, title: "Patient Journey India" },
  { src: g9, title: "Specialist Consultation" },
  { src: g10, title: "Hospital Transfer" },
  { src: g11, title: "Medical Visa Support" },
  { src: g12, title: "Treatment Success" },
  { src: g13, title: "Ekam Health Care Team" },
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
    title: "Mr. Kamurayi Mambayo Testimonial",
    desc: "Successful Hip Replacement Surgery Journey in India",
    featured: true,
  },
  {
    src: "https://www.youtube.com/embed/76eBbyVs1tk",
    title: "From Treatment to Recovery: Shylotte's Story",
    desc: "Complete treatment and hospital recovery experience",
  },
  {
    src: "https://www.youtube.com/embed/kFUijCYIHAU",
    title: "Mr. Keshwan Prasad",
    desc: "Medical treatment and care story",
  },
  {
    src: "https://www.youtube.com/embed/u--DGk3BKYk",
    title: "Mr. Aziim Ramzan Testimonial",
    desc: "International Patient shares his recovery journey",
  },
  {
    src: "https://www.youtube.com/embed/12FGoVnCtzs",
    title: "Dennis Goredema",
    desc: "Successful treatment journey with Ekam Care",
  },
  {
    src: "https://www.youtube.com/embed/2UnjdXoTSNo",
    title: "Florence - Healing Journey",
    desc: "High quality medical care experience in India",
  },
  {
    src: "https://www.youtube.com/embed/-byO8roa5vI",
    title: "Sunilduth Putty",
    desc: "Patient feedback and overall service rating",
  },
  {
    src: "https://www.youtube.com/embed/AjRSPGuUq50",
    title: "Kamal Prakash Nadi",
    desc: "Treatment guidance & hospital coordination story",
  },
  {
    src: "https://www.youtube.com/embed/22At_3bi8q8",
    title: "Marie Line",
    desc: "Personalized medical trip experience in India",
  },
  {
    src: "https://www.youtube.com/embed/n0NJUBqqGtk",
    title: "Miss Priscilla Danso",
    desc: "Patient testimonial on specialized treatment",
  },
  {
    src: "https://www.youtube.com/embed/DPQEiGFSWok",
    title: "Noor Mohammad",
    desc: "Healing experience & care assistance",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("mission");
  const featuredVideo = videos.find((v) => v.featured) || videos[0];
  const regularVideos = videos.filter((v) => !v.featured);

  return (
    <main className="bg-[#F6F9FD] min-h-screen">
      {/* ===== HERO BANNER SECTION ===== */}
      <div className="relative w-full h-[240px] md:h-[320px] bg-gradient-to-r from-[#053161] via-[#1B4F9C] to-[#053161] flex items-center justify-center overflow-hidden">
        <Image
          src={img}
          alt="Gallery Banner"
          fill
          priority
          className="object-cover opacity-25 mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-3">
            Ekam Media Center
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Patient Stories & Gallery
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed font-light">
            Real experiences, recovery moments, and healing journeys of our global patients receiving treatment in India.
          </p>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* ===== TOGGLE FILTER ===== */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center bg-white p-1.5 rounded-full border border-[#E1E8F0] shadow-sm">
              <button
                onClick={() => setActive("mission")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  active === "mission"
                    ? "bg-[#053161] text-white shadow-md"
                    : "text-[#425466] hover:text-[#053161]"
                }`}
              >
                <span>📷</span> Photo Gallery
              </button>
              
              <button
                onClick={() => setActive("vision")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                  active === "vision"
                    ? "bg-[#053161] text-white shadow-md"
                    : "text-[#425466] hover:text-[#053161]"
                }`}
              >
                <span>🎥</span> Video Testimonials
              </button>
            </div>
          </div>

          {/* ===== PHOTOS SECTION ===== */}
          {active === "mission" && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col items-center mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#053161]">
                  Captured Moments
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Our international patients with doctors and hospital coordinators
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((item, i) => (
                  <motion.div
                    key={i}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E1E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4 bg-white border-t border-gray-50">
                      <p className="text-[#053161] font-semibold text-sm line-clamp-1 text-center">
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
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#053161]">
                  Video Testimonials
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Watch international patients share their journey and treatment outcome in India.
                </p>
              </div>

              {/* HERO FEATURED VIDEO CARD */}
              <div className="mb-12 bg-white rounded-3xl border border-[#E1E8F0] shadow-md p-5 md:p-8 grid lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden shadow-inner bg-black">
                  <iframe
                    src={featuredVideo.src}
                    title={featuredVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-3">
                    ★ Featured Story
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#053161] leading-tight mb-3">
                    {featuredVideo.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {featuredVideo.desc}
                  </p>
                  <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0] flex items-center gap-3">
                    <span className="text-2xl">🩺</span>
                    <span className="text-xs md:text-sm font-semibold text-[#053161]">
                      Facilitated by Ekam Health Services India
                    </span>
                  </div>
                </div>
              </div>

              {/* REGULAR VIDEO GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {regularVideos.map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl overflow-hidden border border-[#E1E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  >
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

                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-[#053161] mb-1 leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                        <span className="text-gray-400">Patient Journey</span>
                        <span className="text-[#1B4F9C] flex items-center gap-1">
                          ▶ Play Testimonial
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

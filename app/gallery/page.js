"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Image imports
import img from "../../assets/recent/Gallery 1.webp";
import pic23 from "../../assets/recent/Vidya Wati.png";
import pic21 from "../../assets/recent/Deepak Dhookoo.png";
import pic20 from "../../assets/recent/Bissun Prasad.png";
import pic19 from "../../assets/recent/Christopher Muza3.png";
import pic17 from "../../assets/recent/Adbul Aziim Ramzan.png";
import pic16 from "../../assets/recent/Satish Chandra.png";
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
import g11 from "../../assets/gallery/g-11.jpeg";

const images = [
  { src: g1, title: "Marie Line (Mauritius)" },
  { src: g2, title: "Zimbabwe Patient" },
  { src: g3, title: "Kamal Prakash" },
  { src: g4, title: "Fiji Patient" },
  { src: g5, title: "Eugenia Bepu" },
  { src: g6, title: "Mrs. Bhunu Letitia Tambudzai" },
  { src: g7, title: "Amit Kumar (Fiji)" },
  { src: g8, title: "Mr. Vedanand Prayag" },
  { src: g9, title: "Patient Dubey" },
  { src: g11, title: "Medical Visa Support" },
  { src: pic23, title: "Vidya Wati" },
  { src: pic21, title: "Deepak Dhookoo" },
  { src: pic20, title: "Bissun Prasad" },
  { src: pic19, title: "Christopher Muza" },
  { src: pic17, title: "Adbul Aziim Ramzan" },
  { src: pic16, title: "Satish Chandra" },
  { src: pic14, title: "Shylotte Kativhu" },
  { src: pic12, title: "Kamurayi Mambayo" },
  { src: pic10, title: "Brij Lata" },
  { src: pic9, title: "Narendra Chand" },
  { src: pic7, title: "Sunilduth Putty" },
  { src: pic6, title: "Junior Goredema" },
  { src: pic4, title: "Keshwan Prasad" },
  { src: pic3, title: "Abdullah AI Mamun" },
  { src: pic2, title: "SunilDuth Putty" },
  { src: pic1, title: "Yogita Singh" },
];

export default function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [selectedIndex]);

  // Keyboard navigation handler (Left, Right, Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  return (
    <main className="bg-[#F6F9FD] min-h-screen">
      {/* ===== HERO BANNER SECTION ===== */}
      <div className="relative w-full h-[240px] md:h-[320px] bg-gradient-to-r from-[#053161] via-[#1B4F9C] to-[#053161] flex items-center justify-center overflow-hidden">
        <Image
          src={img}
          alt="Photo Gallery Banner"
          fill
          priority
          className="object-cover opacity-25 mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-3">
            Ekam Photo Gallery
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Our Patient Moments & Gallery
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed font-light">
            Glimpses of recovery moments, doctor consultations, and medical support experiences of our global patients in India.
          </p>
        </div>
      </div>

      {/* ===== MAIN PHOTOS SECTION ===== */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center mb-10 text-center">
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
                onClick={() => setSelectedIndex(i)}
                className="group bg-white rounded-2xl overflow-hidden border border-[#E1E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
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
        </div>
      </section>

      {/* ===== LIGHTBOX / POPUP MODAL ===== */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-5 right-5 z-50 p-2.5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 border border-white/10 rounded-full transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 border border-white/10 rounded-full transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Image Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            >
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="relative w-full h-[70vh] md:h-[80vh]"
              >
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].title}
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Title & Counter */}
              <div className="mt-4 text-center">
                <p className="text-white text-base md:text-lg font-medium">
                  {images[selectedIndex].title}
                </p>
                <p className="text-white/60 text-xs mt-1">
                  {selectedIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

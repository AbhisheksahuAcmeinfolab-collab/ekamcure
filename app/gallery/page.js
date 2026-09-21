"use client";
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
import g12 from "../../assets/gallery/g-12.jpeg";
import g13 from "../../assets/gallery/g-13.jpeg";

const images = [
  { src: g1, title: "Marie Line (Mauritius)" },
  { src: g2, title: "Zimbabwe Patient" },
  { src: g3, title: "Kamal Prakash" },
  { src: g4, title: "Fiji Patient" },
  { src: g5, title: "Eugenia Bepu" },
  { src: g6, title: "Mrs. Bhunu Letitia Tambudzai" },
  { src: g7, title: "Amit Kumar , Fiji" },
  { src: g8, title: "Mr. Vedanand Prayag" },
  { src: g9, title: "Patient Dubey" },
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
        </div>
      </section>
    </main>
  );
}

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { FaUserMd, FaPassport, FaHandshake, FaHeadset, FaArrowRight, FaQuoteLeft, FaMapMarkerAlt, FaHospital, FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import pic1 from "../assets/newimage/front1.webp";
import pic2 from "../assets/newimage/front2.webp";
import pic3 from "../assets/newimage/front3.webp";
import pic4 from "../assets/newimage/IVF Treatment in India.png";
import pic5 from "../assets/newimage/Best Prostate Cancer Treatment in India.png";
import pic6 from "../assets/newimage/Breast Cancer Treatment in India.png";
import pic7 from "../assets/newimage/Glaucoma Surgery in India for International Patients.png";
import pic8 from "../assets/newimage/Heart Valve Surgery in India.png";
import pic9 from "../assets/newimage/Hip Replacement Surgery in India.png";
import pic10 from "../assets/newimage/Kidney Transplant in India for International Patients.png";
import pic11 from "../assets/newimage/Knee Replacement Surgery in India.png";
import pic12 from "../assets/newimage/Best Spine Surgery in India.png";
import pic13 from "../assets/newimage/Superficial Parotidectomy Surgery in India.png";

import pic15 from "../assets/recent/Abdullah AI Mamun.webp";
import pic16 from "../assets/recent/Christopher Muza3.png";
import pic17 from "../assets/recent/Keshwan Prasad.png";
import pic18 from "../assets/recent/SunilDuth Putty2.png";
import pic19 from "../assets/recent/Yogita Singh.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const metadata = {
  title: "Trusted Medical Tourism & Healthcare Company in India- Ekam",
  description:
    "Ekam connects international patients with top hospitals and doctors in India, offering safe, affordable, and quality healthcare services.",
  keywords: "medical tourism in India, healthcare services India, EkamCure",

  openGraph: {
    title: "EkamCure – Trusted Medical Tourism & Healthcare in India",
    description:
      "EkamCure connects international patients with top hospitals and doctors in India, offering safe, affordable, and quality healthcare services.",
    images: ["/og-home.jpg"],
  },
};

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
    desc: "Experience the Best of Indian Healthcare – Personalized, Efficient, and Hassle-Free",
  },
  {
    img: pic3,
    subtitle: "",
    title: "",
    desc: "Your Path to Quality Care Abroad – Trusted Partners, Exceptional Care",
  },
];

const specialties = [
  {
    title: "IVF Treatment in India",
    alt: "not found",
    icon: pic4,
    link: "/ivf-treatments-in-india",
  },
  {
    title: "Best Prostate Cancer Treatment in India",
    alt: "not found",
    icon: pic5,
    link: "/treatments/best-prostate-cancer-treatment-india",
  },
  {
    title: "Breast Cancer Treatment in India",
    alt: "not found",
    icon: pic6,
    link: "/treatments/breast-cancer-treatment-in-india",
  },
  {
    title: "Glaucoma Surgery in India for International Patients",
    alt: "not found",
    icon: pic7,
    link: "/treatments/glaucoma-surgery-in-india-for-international-patients",
  },
  {
    title: "Heart Valve Surgery in India",
    alt: "not found",
    icon: pic8,
    link: "/treatments/heart-valve-surgery-india",
  },
  {
    title: "Hip Replacement Surgery in India",
    alt: "not found",
    icon: pic9,
    link: "/treatments/hip-replacement-surgery-in-india",
  },
  {
    title: "Kidney Transplant in India for International Patients",
    alt: "not found",
    icon: pic10,
    link: "/treatments/kidney-transplant-in-india",
  },
  {
    title: "Knee Replacement Surgery in India",
    alt: "not found",
    icon: pic11,
    link: "/treatments/knee-replacement-surgery-in-india",
  },
  {
    title: "Best Spine Surgery in India",
    alt: "not found",
    icon: pic12,
    link: "/treatments/best-spine-surgery-in-india",
  },
  {
    title: "Superficial Parotidectomy Surgery in India",
    alt: "not found",
    icon: pic13,
    link: "/treatments/superficial-parotidectomy-surgery-india",
  },
];

const patients = [
  {
    name: "Abdullah AI Mamun",
    country: "Bangladesh",
    treatment: "Health Checkup",
    hospital: "Balaji Action Hospital",
    location: "Paschim vihar, New Delhi, India",
    media: pic15,
    type: "image",
  },
  {
    name: "Christopher Muza",
    country: "Zimbabwe",
    treatment: "Urology",
    hospital: "Yatharth Hospital",
    location: "Noida",
    media: pic16,
    type: "image",
  },
  {
    name: "Keshwan Prasad",
    country: "Fiji",
    treatment: "Cardiac Surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic17,
    type: "image",
  },
  {
    name: "Sunilduth Putty",
    country: "Mauritius",
    treatment: "Cardiac surgery",
    hospital: "Max Super Speciality Hospital",
    location: "Noida Sec-128, India",
    media: pic18,
    type: "image",
  },
  {
    name: "Yogita Singh",
    country: "Fiji",
    treatment: "Ca Cervix",
    hospital: "Yatharth Hospital",
    location: "Greater Noida, India",
    media: pic19,
    type: "image",
  },
];

export default function Home() {
  const [heroCurrent, setHeroCurrent] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % patients.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentPatient = patients[current];
  
  const handlePrevPatient = () => {
    setCurrent((prev) => (prev === 0 ? patients.length - 1 : prev - 1));
  };

  const handleNextPatient = () => {
    setCurrent((prev) => (prev + 1) % patients.length);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Is breast cancer treatable if detected early?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early detection allows timely medical intervention and structured treatment planning. Doctors can often offer multiple treatment options when the disease is identified at an early stage."
      }
    }]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="bg-white">
        {/* HERO SECTION */}
        <section className="hero-section relative h-[75vh] sm:h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden bg-white isolate">
          <div className="absolute inset-0 bg-black">
            <AnimatePresence mode="sync">
              <motion.div
                key={heroCurrent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[heroCurrent].img}
                  alt={slides[heroCurrent].title || "Ekam Banner"}
                  fill
                  className="object-cover object-center"
                  priority
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-700/50 to-blue-600/30 mix-blend-multiply"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10 text-center px-4 md:px-12 lg:px-20 max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={heroCurrent + "-content"}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {slides[heroCurrent].subtitle && (
                  <motion.p
                    className="uppercase xl:text-4xl lg:text-2xl md:text-2xl sm:text-5xl tracking-[0.4em] text-cyan-300 font-semibold mb-4"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {slides[heroCurrent].subtitle}
                  </motion.p>
                )}
          
                <motion.p
                  className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-4xl font-bold text-gray-200 max-w-3xl mx-auto leading-snug"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                >
                  {slides[heroCurrent].desc}
                </motion.p>
          
                <motion.div 
                  className="mt-8 sm:mb-4 flex justify-center gap-4 flex-wrap items-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <a 
                    href="/contact" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-3 rounded-full shadow-xl transition-transform hover:scale-105 duration-300 inline-block"
                  >
                    Get a free Quote
                  </a>
                  <a
                    href="https://wa.me/919990205353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105 duration-300 flex items-center gap-2"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

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

        {/* INTRO CONTENT SECTION */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#053161] mb-4 md:mb-6 leading-snug">
              Medical Treatment in India with Complete Support for International Patients
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed font-medium">
              Get access to experienced doctors, leading hospitals, personalised treatment plans, transparent cost estimates, and end-to-end support for your healthcare journey in India.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed max-w-3xl mx-auto">
              From your first consultation to hospital coordination, travel assistance and follow-up care, EkamCure helps international patients navigate treatment in India with confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="/treatments"
                className="bg-gradient-to-r from-blue-900 to-blue-700 text-white font-bold px-7 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                Find Your Treatment
              </Link>
              <a
                href="tel:+919990205353"
                className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-7 py-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                Talk to a Care Coordinator
              </a>
            </div>

            <div className="pt-6 border-t border-gray-200 flex flex-wrap justify-center items-center gap-3 md:gap-5 text-xs md:text-sm font-semibold text-[#053161]">
              <span className="hover:text-pink-600 transition">International Patient Support</span>
              <span className="text-gray-300">•</span>
              <span className="hover:text-pink-600 transition">Doctor Consultations</span>
              <span className="text-gray-300">•</span>
              <span className="hover:text-pink-600 transition">Hospital Coordination</span>
              <span className="text-gray-300">•</span>
              <span className="hover:text-pink-600 transition">Treatment Planning</span>
            </div>
          </div>
        </section>

        {/* ABOUT US & SERVICES SECTION - GAP FIXED */}
        <section className="w-full py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* About Us Card - Matched Height & Filled Gap */}
              <div className="lg:col-span-5 bg-gradient-to-br from-[#053161] via-[#084282] to-[#1B4F9C] text-white p-7 md:p-9 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between border border-blue-800 h-full">
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold tracking-wider uppercase mb-3 border border-white/10">
                    WHO WE ARE
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">
                    ABOUT US
                  </h2>
                  
                  <p className="text-blue-100/90 text-sm md:text-base leading-relaxed font-light mb-4">
                    Ekam Health Services is a premier medical travel facilitator dedicated to connecting international patients with world-class healthcare providers and top accredited hospitals in India.
                  </p>
              
                  <p className="text-blue-100/90 text-sm md:text-base leading-relaxed font-light">
                    We streamline your complete medical journey by offering personalized care plans, expert doctor consultations, transparent cost estimates, visa assistance, and 24/7 on-ground support to ensure a safe and seamless recovery.
                  </p>
                </div>
              
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-white text-sm font-semibold bg-white/10 hover:bg-white/20 px-6 py-2.5 rounded-full transition w-fit border border-white/20 shadow-sm mt-6"
                >
                  Read More <FaArrowRight className="text-xs" />
                </Link>
              </div>

            {/* Services Grid */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="mb-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold tracking-wider uppercase mb-2">
                  WHAT WE OFFER
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#053161] tracking-tight">
                  OUR SERVICES
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
                {[
                  {
                    icon: <FaUserMd className="text-orange-500 text-xl" />,
                    title: "DOCTOR & HOSPITAL SELECTION",
                    desc: "Identifying top medical professionals and facilities tailored to your specific treatment needs."
                  },
                  {
                    icon: <FaHandshake className="text-orange-500 text-xl" />,
                    title: "COST NEGOTIATION",
                    desc: "Collaborating with hospitals to negotiate the best possible rates for your medical care."
                  },
                  {
                    icon: <FaPassport className="text-orange-500 text-xl" />,
                    title: "VISA ASSISTANCE",
                    desc: "Guiding you through the visa application process to ensure a smooth travel experience."
                  },
                  {
                    icon: <FaHeadset className="text-orange-500 text-xl" />,
                    title: "ON-SITE SUPPORT",
                    desc: "Providing accompaniment to medical appointments, ensuring assistance during your journey."
                  }
                ].map((service, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-3 shadow-inner">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#053161] text-sm md:text-base mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* EXPLORE TOP TREATMENTS SECTION */}
        <section className="py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-white">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase mb-2">
              SPECIALIZED CARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#053161] tracking-tight">
              Explore Top Treatments
            </h2>
            <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed">
              We handle treatments that range from life-saving surgeries to procedures that restore confidence. Some of the most sought-after treatments include:
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {specialties.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#F0F5FD] flex items-center justify-center mb-4 p-2.5 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-gray-800 font-bold text-xs sm:text-sm leading-snug group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                <span className="mt-3 text-xs font-semibold text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore →
                </span>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="/treatments"
              className="inline-flex items-center gap-2 bg-[#053161] hover:bg-blue-800 text-white font-bold px-7 py-3 rounded-full shadow-md transition-all hover:scale-105 text-sm md:text-base"
            >
              View All Treatments →
            </a>
          </div>
        </section>

        {/* PATIENT SUCCESS STORIES SECTION */}
        <section className="bg-gradient-to-br from-blue-950 via-[#053161] to-blue-900 text-white py-16 md:py-20 px-4 md:px-10 relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            
            <div className="text-center mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-white/10">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Patient <span className="text-cyan-400">Success Stories</span>
              </h2>
              <p className="text-blue-100/80 max-w-xl mx-auto mt-2 text-sm md:text-base font-light">
                Every patient journey tells a story of hope, healing, and world-class healthcare in India.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPatient.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 p-6 md:p-10 shadow-2xl grid md:grid-cols-12 gap-8 items-center"
                >
                  <div className="md:col-span-5 flex justify-center">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-xl">
                      <Image
                        src={currentPatient.media}
                        alt={currentPatient.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-center">
                    <FaQuoteLeft className="text-3xl text-cyan-400/60 mb-3" />
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentPatient.name}
                    </h3>

                    <div className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium w-fit mb-4 border border-cyan-400/30">
                      <span>{currentPatient.treatment}</span>
                    </div>

                    <div className="space-y-2 text-sm text-blue-100/90 font-light mb-6">
                      <p className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-pink-400 flex-shrink-0" />
                        <span><strong>Native Country:</strong> {currentPatient.country}</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <FaHospital className="text-cyan-400 flex-shrink-0" />
                        <span><strong>Hospital:</strong> {currentPatient.hospital} ({currentPatient.location})</span>
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex gap-2">
                        {patients.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              idx === current ? "bg-cyan-400 w-6" : "bg-white/30"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={handlePrevPatient}
                          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition border border-white/10"
                        >
                          <FaChevronLeft className="text-xs" />
                        </button>
                        <button
                          onClick={handleNextPatient}
                          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition border border-white/10"
                        >
                          <FaChevronRight className="text-xs" />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* View All Stories Button Styled Properly */}
            <div className="text-center mt-10">
              <Link
                href="/patient-story"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base border border-cyan-300/30"
              >
                View All Patient Stories →
              </Link>
            </div>

          </div>
        </section>
      </main>
    </>
  );
}

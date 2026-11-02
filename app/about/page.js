"use client";
import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import img from "../../assets/recent/Common.webp";
import Img1 from "../../assets/newimage/vision.webp";
import Img2 from "../../assets/newimage/vission2.webp";
import Img3 from "../../assets/newimage/Udai Sir.webp";
import Img4 from "../../assets/newimage/sanu Das.webp";
import Img5 from "../../assets/newimage/Pratap Sir.webp";
import Img6 from "../../assets/newimage/Vijay kumar.webp";

export default function AboutUs() {
  const [active, setActive] = useState("mission");

  const teamMembers = [
    {
      name: "Udai Singh",
      title: "Founder, Ekam Health Services",
      image: Img3,
      description:
        "Udai Singh is a dedicated marketing expert and entrepreneur with over 15 years of experience, holding an MBA in Marketing. As the founder of Ekam Health Services and other ventures, Udai is committed to fostering well-being and enhancing access to healthcare solutions. His professional journey is driven by a passion for helping people and positively impacting lives. With deep expertise in digital strategy and brand growth, Udai combines visionary leadership with a compassionate approach to business, making a meaningful difference in every project he undertakes.",
      socials: {
        facebook: "https://www.facebook.com/udaisingh1",
        instagram: "https://www.instagram.com/udaisingh1/",
      },
    },
    {
      name: "Pratap Sankar Gautam",
      title: "Consultant & Patient Coordinator, Ekam Health Services",
      image: Img5,
      description:
        "With over 12 years of diverse industry experience, Pratap Shankar Gautam brings a patient-centric approach to his role as a Consultant and Patient Coordinator at Ekam Health Services. Known for his compassionate, reliable, and trustworthy nature, Pratap is dedicated to guiding patients through each step of their healthcare journey with care and professionalism. His commitment to helping people access quality medical care makes him a valued and trusted partner for international patients seeking seamless and personalized healthcare solutions.",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Sanu Das",
      title: "Patient Coordinator, Ekam Health Services",
      image: Img4,
      description:
        "With 3 years of diverse industry experience, Sanu Das excels as a Patient Coordinator at Ekam Health Services. Guided by a strong, patient-centric approach, he is committed to providing compassionate and personalized support for individuals navigating their healthcare journey. His focus on patient well-being and his dedication to seamless care coordination make him a trusted and invaluable resource for patients seeking quality medical care.",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Vijay Kumar",
      title: "Patient Coordinator, Ekam Health Services",
      image: Img6,
      description:
        "With years of cross-industry experience, Vijay Kumar leads with dedication as a Patient Coordinator at Ekam Health Services. Known for his unwavering honesty, reliability, and deep compassion, he embodies a patient-centric approach, ensuring every individual receives attentive and personalized care. A dedicated professional, he brings integrity and warmth to each interaction, making him a trusted guide for patients navigating their healthcare journey.",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* Banner Section - Premium Overlay */}
      <div className="relative w-full h-[260px] md:h-[300px] flex items-center justify-center bg-[#021428] isolate">
        <Image
          src={img}
          alt="About Us Banner"
          fill
          className="object-cover object-center opacity-40 scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-[#053161]/80 to-indigo-950/90" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider uppercase border border-cyan-400/30">
            Ekam Health Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Intro Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: YouTube Video Embed with Glow */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[540px] aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(5,49,97,0.25)] border border-gray-100 relative group">
              <iframe 
                className="w-full h-full rounded-3xl transition-transform duration-500 group-hover:scale-105"
                src="https://www.youtube.com/embed/24yTN_Du0lY?si=7ChFSRItTSPmuUhr" 
                title="Ekam Health Services Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 text-gray-700">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Global Healthcare Facilitator
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#053161] mt-3 tracking-tight">
                Connecting International Patients with Top-Tier Care in India
              </h2>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              Ekam excels in the medical travel industry, connecting global patients with top-tier healthcare facilities across India. Focused on providing a seamless healthcare journey, the company manages every aspect, from initial consultation to post-treatment follow-up, to ensure a comprehensive and stress-free experience for each patient.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-gray-600">
              With a commitment to accessibility and high standards, Ekam transforms medical tourism into a structured, patient-focused service. Through our network and support, patients benefit from transparent, efficient medical care solutions worldwide.
            </p>

            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#053161] to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 text-sm md:text-base"
              >
                <span>Book an Appointment</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Toggle Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          {/* Toggle Switch */}
          <div className="flex justify-center items-center space-x-4 mb-12">
            <span className={`font-bold text-lg md:text-xl transition-colors ${active === "mission" ? "text-[#053161]" : "text-gray-400"}`}>
              Our Mission
            </span>

            <button
              onClick={() => setActive(active === "mission" ? "vision" : "mission")}
              className="relative w-16 h-8 flex items-center bg-[#053161] rounded-full p-1 shadow-inner cursor-pointer transition-all duration-300"
            >
              <span
                className={`w-6 h-6 bg-cyan-400 rounded-full shadow-md transform transition-transform duration-300 ${
                  active === "mission" ? "translate-x-0" : "translate-x-8"
                }`}
              />
            </button>

            <span className={`font-bold text-lg md:text-xl transition-colors ${active === "vision" ? "text-[#053161]" : "text-gray-400"}`}>
              Our Vision
            </span>
          </div>

          {/* Content Block */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            {active === "mission" ? (
              <div className="flex flex-col md:flex-row items-center gap-8 text-left">
                <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-md">
                  <Image src={Img2} alt="Mission" fill className="object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#053161]">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Ekam Health Services aims to revolutionize the medical tourism industry by delivering comprehensive, personalized healthcare solutions that bridge international patients with India&apos;s top medical providers. We strive to make world-class healthcare accessible and stress-free for individuals around the globe.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-center gap-8 text-left">
                <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-md">
                  <Image src={Img1} alt="Vision" fill className="object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#053161]">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    To be the global leader in medical travel facilitation, transforming the way people access quality healthcare across borders. Ekam Health Services envisions a world where medical treatment is easily attainable, compassionate, and transparent for everyone.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase mb-2">
              Leadership & Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#053161] tracking-tight">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gradient-to-br from-gray-50 to-white p-7 md:p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-36 h-36 md:w-44 md:h-44 flex-shrink-0 relative rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col text-center md:text-left flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-[#053161]">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-cyan-700 mb-3">
                    {member.title}
                  </p>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-5">
                    {member.description}
                  </p>

                  <div className="flex justify-center md:justify-start space-x-3">
                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white flex items-center justify-center transition shadow-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebook size={16} />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="w-9 h-9 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-700 hover:text-white flex items-center justify-center transition shadow-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={16} />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        className="w-9 h-9 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition shadow-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

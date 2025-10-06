"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import img from "../assets/newimage/white Logo.png";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import pic1 from "../assets/image/F1.png";
import pic2 from "../assets/image/F2.png";
import pic3 from "../assets/image/F3.png";
import pic4 from "../assets/image/F4.png";

export default function Footer() {
  const infoItems = [
    {
      icon: MdLocationOn,
      label: "Office Address",
      text: "Delhi, India",
    },
    {
      icon: MdEmail,
      label: "Send Email",
      text: "info@ekamcure.com",
    },
    {
      icon: MdPhone,
      label: "Call Emergency",
      text: "(+91) 9990205353",
    },
  ];

  const lines = [
    "Ekam cure is a healthcare facilitator seeking to make health and wellness easier for people of international residents, their families, and their friends.",
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-2 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Column 1 */}
        <div>
          <Image
            src={img}
            alt="Health India Logo"
            width={170}
            height={50}
            className="rounded-md mb-2 py-2 "
          />

          <div className="flex flex-col space-y-2 p-4">
            {lines.map((line, index) => (
              <motion.p
                key={index}
                className="text-sm leading-relaxed bg-transparent p-1 rounded cursor-pointer"
                // {...hoverEffect}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm shadow-md transition-transform"
          >
            GET CONSULTATION →
          </motion.button>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
              (Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full border border-gray-500 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white transition"
                >
                  <Icon size={18} />
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            OUR SERVICES
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "IVF",
              "Terms and Conditions",
              "Privacy Policy",
              "Disclaimer",
              "Refund Policy",
              "Help & FAQS",
              "Contact Us",
            ].map((service, i) => (
              <motion.li
                key={i}
                whileTap={{ scale: 0.95 }}
                whileHover={{ x: 6, color: "#22d3ee" }}
                className="cursor-pointer transition-all"
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About Us", "Our Services", "Contact Us"].map(
              (link, i) => (
                <motion.li
                  key={i}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ x: 6, color: "#22d3ee" }}
                  className="cursor-pointer transition-all"
                >
                  {link}
                </motion.li>
              )
            )}
          </ul>
        </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r shadow-lg bg-cover bg-center bg-[url('../assets/image/footer-contact-bg.jpg')]">
            {/* content here */}

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {infoItems.map(({ icon: Icon, label, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 text-black transition transform hover:scale-105 hover:bg-white/10 rounded-3xl md:rounded-none cursor-pointer"
                >
                  {/* Icon inside circle */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 group-hover:bg-white/30 transition">
                    <Icon className="w-6 h-6 text-aqua" />
                  </div>

                  {/* Text Content */}
                  <div>
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="text-lg font-bold">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-black text-white py-2 mt-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
            {/* Left side */}
            <div className="flex items-center gap-2 text-white-600">
              <a href="#" className="hover:text-cyan-400">
                Terms & Conditions
              </a>
              <span className="text-white-400">|</span>
              <a href="#" className="hover:text-cyan-400">
                Privacy Policy
              </a>
            </div>

            {/* Right side */}
            <div className="text-white mt-2 md:mt-0 hover:text-cyan-400">
              Designed by{" "}
              <span className="text-white-600 font-semibold">AcmeInfolabs</span>
            </div>
          </div>
        </div>
      
    </footer>
  );
}

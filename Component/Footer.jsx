"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import img from "../assets/newimage/white Logo.webp";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  const socials = [
    { icon: FaFacebookF, link: "https://www.facebook.com/EkamCure/" },
    { icon: FaTwitter, link: "https://x.com/EkamCare" },
    { icon: FaInstagram, link: "https://www.instagram.com/ekamcure/" },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/ekam-cure/posts/?feedView=all",
    },
    { icon: FaYoutube, link: "https://www.youtube.com/@EkamCure" },
  ];

  const infoItems = [
    {
      icon: MdLocationOn,
      label: "Office Address",
      text: "Delhi, India",
      href: "https://maps.google.com?q=Delhi,India",
    },
    {
      icon: MdEmail,
      label: "Send Email",
      text: "info@ekamcure.com",
      href: "mailto:info@ekamcure.com",
    },
    {
      icon: MdPhone,
      label: "Call Emergency",
      text: "(+91) 9990205353",
      href: "tel:+919990205353", // WhatsApp link or tel:+919990205353
    },
  ];

  const services = [
    { name: "IVF", href: "/ivf-treatment-in-india" },
    { name: "Terms and Conditions", href: "/terms-and-condition" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Help & FAQS", href: "/help-faqs" },
    { name: "Our Fees", href: "/fees" },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Treatment", href: "/treatment" },
    { name: "Our Testimonial", href: "/testimonial" },
    { name: "Photo Gallery", href: "/photo-gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      <footer className="bg-gradient-to-r from-blue-950 to-blue-900 text-gray-300 dark:bg-white">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-2 py-14 text-align grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <Image
              src={img}
              alt="Health India Logo"
              width={170}
              height={50}
              className="rounded-md mb-2 py-2 "
            />

            <p>
              Ekam cure is a healthcare facilitator seeking to make health and
              wellness easier for people of international residents, their
              families, and their friends.
            </p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 mt-2 rounded-full flex items-center gap-2 text-sm shadow-md transition-transform"
            >
              <Link href="/contact" className="flex items-center gap-2">
                GET QUOTE →
              </Link>
            </motion.button>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {socials.map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full border border-gray-500 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white transition"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 border-b-2 border-cyan-500 inline-block">
              OUR SERVICES
            </h3>

            <ul className="space-y-2 text-sm">
              {services.map((service, i) => (
                <motion.li
                  key={i}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ x: 6, color: "#22d3ee" }}
                  className="cursor-pointer transition-all"
                >
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {service.name}
                  </Link>
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
              {links.map((link, i) => (
                <motion.li
                  key={i}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ x: 6, color: "#22d3ee" }}
                  className="cursor-pointer transition-all"
                >
                  <Link
                    href={link.href}
                    className="hover:text-teal-400 duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-r shadow-lg bg-cover bg-center bg-[url('../assets/image/footer-contact-bg.jpg')]">
            {/* content here */}

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
              {infoItems.map(({ icon: Icon, label, text, href }, i) => (
                // <div
                <a
                  key={i}
                  href={href || "#"}
                  target={href?.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
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
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white py-2 mt-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
            {/* Left side */}
            <div className="flex items-center gap-2 text-white-600">
              <Link href="/terms-and-condition" className="hover:text-cyan-400">
                Terms & Conditions
              </Link>
              <span className="text-white-400">|</span>
              <Link href="/privacy-policy" className="hover:text-cyan-400">
                Privacy Policy
              </Link>
            </div>

            {/* Right side */}
            <div className="text-white mt-2 md:mt-0 ">
              Designed by{" "}
              <Link
                href="https://www.acmeinfolabs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white-600 font-semibold hover:text-cyan-400">
                  AcmeInfolabs
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex md:hidden mt-20"></div>
    </>
  );
}

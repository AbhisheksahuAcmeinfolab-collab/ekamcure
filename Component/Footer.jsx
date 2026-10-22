"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaChevronRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import img from "../assets/newimage/white Logo.webp";

export default function Footer() {
  const socials = [
    { icon: FaFacebookF, link: "https://www.facebook.com/EkamCure/" },
    { icon: FaXTwitter, link: "https://x.com/ekamcure" },
    { icon: FaInstagram, link: "https://www.instagram.com/ekamcure/" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/ekam-cure/" },
    { icon: FaYoutube, link: "https://www.youtube.com/@EkamCure" },
  ];

  const infoItems = [
    {
      icon: MdLocationOn,
      label: "Office Address",
      text: "LOGIX TECHNOVA, Block B, Sector 132, Noida, UP 201304",
      href: "https://maps.app.goo.gl/W74MRe62Jmurf4P66",
    },
    {
      icon: MdEmail,
      label: "Send Email",
      text: "info@ekamcure.com",
      href: "mailto:info@ekamcure.com",
    },
    {
      icon: MdPhone,
      label: "24/7 Helpline",
      text: "(+91) 9990205353",
      href: "tel:+919990205353",
    },
  ];

  const services = [
    { name: "IVF Treatment", href: "/ivf-treatment-in-india" },
    { name: "Terms & Conditions", href: "/terms-and-condition" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Our Fees", href: "/fees" },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Treatments", href: "/treatments" },
    { name: "Top Hospitals", href: "/top-hospitals" },
    { name: "Patient's Story", href: "/patient-story" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-b from-[#031d3b] via-[#053161] to-[#021428] text-gray-300 overflow-hidden pb-20 md:pb-0 font-sans">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Contact Bar Card */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {infoItems.map(({ icon: Icon, label, text, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 group transition-all duration-300 p-3 rounded-2xl hover:bg-white/10 ${
                    i !== 0 ? "md:pl-8" : ""
                  }`}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs uppercase tracking-wider text-cyan-300 font-medium">
                      {label}
                    </p>
                    <p className="text-sm md:text-base font-bold text-white group-hover:text-cyan-200 transition-colors truncate">
                      {text}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Col 1: Logo & About */}
            <div className="lg:col-span-5 space-y-6">
              <Link href="/" className="inline-block">
                <Image
                  src={img}
                  alt="Ekam Cure Logo"
                  width={180}
                  height={55}
                  className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  priority
                  unoptimized
                />
              </Link>

              <p className="text-sm text-gray-300 leading-relaxed max-w-md">
                Ekam Cure is a trusted healthcare facilitator connecting international patients with world-class hospitals, renowned specialists, and personalized care across India.
              </p>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <span>GET FREE QUOTE</span>
                  <FaChevronRight className="text-xs" />
                </Link>
              </motion.div>

              {/* Social Icons */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                  Connect With Us
                </p>
                <div className="flex items-center gap-3">
                  {socials.map(({ icon: Icon, link }, i) => (
                    <motion.a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all duration-300 shadow-sm"
                    >
                      <Icon size={16} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="lg:col-span-3">
              <div className="mb-5">
                <h3 className="text-white text-base font-bold tracking-wider uppercase">
                  OUR SERVICES
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2" />
              </div>

              <ul className="space-y-2.5 text-sm">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      href={service.href}
                      className="group flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <FaChevronRight className="text-[10px] text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span>{service.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Quick Links */}
            <div className="lg:col-span-4">
              <div className="mb-5">
                <h3 className="text-white text-base font-bold tracking-wider uppercase">
                  QUICK LINKS
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2" />
              </div>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-300 hover:text-cyan-300 transition-colors duration-200"
                    >
                      <FaChevronRight className="text-[10px] text-cyan-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-white/10 bg-[#010e1c]/80 backdrop-blur-md py-4 text-xs text-gray-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <Link href="/terms-and-condition" className="hover:text-cyan-300 transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/privacy-policy" className="hover:text-cyan-300 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/disclaimer" className="hover:text-cyan-300 transition-colors">
                Disclaimer
              </Link>
            </div>

            <p className="text-center sm:text-right">
              © {new Date().getFullYear()} Ekam Cure. All rights reserved. Designed by{" "}
              <a
                href="https://www.acmeinfolabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 font-semibold hover:underline"
              >
                AcmeInfolabs
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919990205353"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Contact on WhatsApp"
      >
        <svg
          className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform duration-300"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </>
  );
}

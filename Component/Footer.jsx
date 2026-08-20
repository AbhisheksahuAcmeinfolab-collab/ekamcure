"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import img from "../assets/newimage/white Logo.webp";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

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
      text: "LOGIX TECHNOVA, Block B, Sector 132, Noida, Uttar Pradesh 201304",
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
    // { name: "Help & FAQS", href: "/help-faqs" },
    { name: "Our Fees", href: "/fees" },
  ];

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Our Treatments", href: "/treatments" },
    { name: "Top Hospitals", href: "/top-hospitals" },
    // { name: "Top Doctors", href: "/top-doctors" },
    { name: "Patient's Story", href: "/patient-story" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  return (
    <>
      <footer className="footer-s bg-gradient-to-r from-blue-950 to-blue-900 text-gray-300 dark:bg-white">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-2 py-14 text-align grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div>
            <Link href="/">
  <Image
    src={img}
    alt="Health India Logo"
    width={170}
    height={50}
    className="rounded-md mb-2 py-2 cursor-pointer"
    loading="eager"
    unoptimized
  />
</Link>

            <p>
              Ekamcure is a healthcare facilitator seeking to make health and
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
            <div className="text-white mt-2 md:mt-0">
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
      {/* WhatsApp Floating Button */}
    <a
      href="https://wa.me/919990205353"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Contact on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </a>

      <div className="flex md:hidden mt-20"></div>
    </>
  );
}

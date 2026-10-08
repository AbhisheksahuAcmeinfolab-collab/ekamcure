"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FileText, ChevronDown } from "lucide-react";
import img from "../assets/newimage/Ekam-logo-300x133.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      submenu: [
        {
          name: "Medical Visa for Treatment in India",
          href: "/services/medical-visa-for-treatment-in-india",
        },
      ],
    },
    {
      name: "Treatments",
      href: "/treatments",
      submenu: [
        {
          name: "Cost of Treatment",
          href: "/cost-of-treatment",
        },
      ],
    },
    {
      name: "Top Hospitals",
      href: "/top-hospitals",
      submenu: [
        {
          name: "Top 10 Hospitals in India 2026",
          href: "/top-hospitals/top-10-hospitals-india-for-international-patients",
        },
      ],
    },
    {
      name: "Gallery",
      href: "/gallery",
      submenu: [
        { name: "Video Gallery", href: "/video-gallery" },
        { name: "Photo Gallery", href: "/gallery" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMobileSubmenu = (name) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  return (
    <nav className="menu-bar bg-white shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* ---------- Desktop View ---------- */}
          <div className="hidden xl:flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 ml-2 lg:ml-4">
              <Image
                src={img}
                alt="Ekam Logo"
                width={130}
                height={55}
                className="object-contain"
                priority
              />
            </Link>

            {/* Navigation Links - Font size increased to text-[15px] */}
            <div className="flex items-center space-x-4 lg:space-x-6 ml-8 lg:ml-12">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const hasSubmenu = item.submenu && item.submenu.length > 0;

                return (
                  <div key={item.name} className="relative group py-6">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 font-semibold transition duration-200 text-[15px] ${
                        isActive ? "text-[#053161]" : "text-gray-800 hover:text-[#053161]"
                      }`}
                    >
                      {item.name}
                      {hasSubmenu && (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Desktop Hover Submenu */}
                    {hasSubmenu && (
                      <div className="absolute left-0 top-full hidden group-hover:block w-60 bg-white border border-gray-100 shadow-xl rounded-xl py-2 z-50 animate-fadeIn">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#053161] font-medium transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* GTranslate Desktop */}
              <div className="hidden lg:block ml-2">
                <div className="gtranslate_wrapper gtranslate_desktop"></div>
              </div>
            </div>

            {/* Desktop Right Action Buttons */}
            <div className="flex items-center gap-3.5 flex-shrink-0">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919990205353"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs transition shadow-sm"
              >
                <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>

              {/* Get Quote Button */}
              <a
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0d6efd] hover:bg-blue-700 text-white font-semibold text-xs shadow-md transition"
              >
                <FileText className="w-4 h-4 text-white flex-shrink-0" />
                <span>Get a Free Quote</span>
              </a>
            </div>
          </div>

          {/* ---------- Mobile Header Bar ---------- */}
          <div className="flex xl:hidden justify-between items-center w-full py-2">
            <div className="w-8">
              <div className="gtranslate_wrapper gtranslate_mobile"></div>
            </div>

            {/* Center Logo */}
            <Link href="/" className="flex justify-center">
              <Image
                src={img}
                alt="Ekam Logo"
                width={110}
                height={45}
                className="object-contain"
                priority
              />
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 hover:text-[#053161] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Slide Drawer Backdrop ---------- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-50 xl:hidden transition-opacity"
        />
      )}

      {/* ---------- Mobile Side Drawer Menu ---------- */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <Image src={img} alt="Ekam Logo" width={100} height={40} className="object-contain" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-600 hover:text-red-500 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          {navItems.map((item) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isSubOpen = activeMobileSubmenu === item.name;

            return (
              <div key={item.name} className="border-b border-gray-100 last:border-none">
                <div className="flex items-center justify-between py-3">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-semibold text-gray-800 hover:text-[#053161] text-base"
                  >
                    {item.name}
                  </Link>
                  {hasSubmenu && (
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="p-1 text-gray-500 hover:text-[#053161]"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${isSubOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu Items */}
                {hasSubmenu && isSubOpen && (
                  <div className="pl-4 pb-3 space-y-2 bg-gray-50 rounded-lg p-2 mb-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-gray-600 hover:text-[#053161] font-medium py-1"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Bottom CTA Buttons */}
        <div className="p-5 border-t bg-gray-50 flex flex-col gap-2.5">
          <a
            href="https://wa.me/919990205353"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-center bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold rounded-xl shadow-md transition text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>Chat on WhatsApp</span>
          </a>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-center bg-[#0d6efd] hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition text-sm flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            <span>Get a Free Quote</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

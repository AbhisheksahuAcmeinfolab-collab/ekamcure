"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
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
    { name: "Video Gallery", href: "/patient-story" },
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMobileSubmenu = (name) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  return (
    <nav className="menu-bar bg-white shadow-md sticky top-0 z-50 py-2 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* ---------- Desktop View ---------- */}
          <div className="hidden xl:flex justify-between w-full items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <Image
                src={img}
                alt="Ekam Logo"
                width={120}
                height={50}
                className="rounded-md"
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-7">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const hasSubmenu = item.submenu && item.submenu.length > 0;

                return (
                  <div key={item.name} className="relative group py-5">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 font-semibold transition duration-200 text-sm ${
                        isActive ? "text-[#053161]" : "text-gray-800 hover:text-[#053161]"
                      }`}
                    >
                      {item.name}
                      {hasSubmenu && (
                        <svg
                          className="w-4 h-4 transition-transform group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>

                    {/* Desktop Hover Submenu */}
                    {hasSubmenu && (
                      <div className="absolute left-0 top-full hidden group-hover:block w-72 bg-white border border-gray-100 shadow-xl rounded-xl py-2 z-50 animate-fadeIn">
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
              <div className="hidden md:block">
                <div className="gtranslate_wrapper gtranslate_desktop"></div>
              </div>
            </div>
          </div>

          {/* ---------- Mobile Header Bar ---------- */}
          <div className="flex xl:hidden justify-between items-center w-full">
            <div className="w-8">
              <div className="gtranslate_wrapper gtranslate_mobile"></div>
            </div>

            {/* Center Logo */}
            <Link href="/" className="flex justify-center">
              <Image
                src={img}
                alt="Ekam Logo"
                width={105}
                height={42}
                className="rounded-md"
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
          <Image src={img} alt="Ekam Logo" width={90} height={36} />
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
                      <svg
                        className={`w-5 h-5 transition-transform ${isSubOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
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

        {/* Mobile Bottom CTA */}
        <div className="p-5 border-t bg-gray-50">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-3 text-center bg-[#053161] hover:bg-[#1B4F9C] text-white font-bold rounded-xl shadow-md transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}

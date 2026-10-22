"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, MessageSquare, Handshake, FileText } from "lucide-react";
import imgLogo from "../assets/newimage/Ekam-logo-300x133.webp";

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
    { name: "Photo Gallery", href: "/gallery" },
    { name: "Video Gallery", href: "/video-gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMobileSubmenu = (name) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-[999] w-full shadow-sm bg-white">
      {/* ---------- 1. Top Bar (Desktop View Only) ---------- */}
      <div className="hidden xl:block bg-[#053161] text-white py-2 border-b border-blue-900/50">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-6">
            <a href="tel:+919990205353" className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Helpline: (+91) 9990205353</span>
            </a>
            <span className="text-blue-400">|</span>
            <span className="text-gray-200">24x7 Medical Assistance for International Patients</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/919990205353"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3 py-1 rounded-full transition-all duration-200 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded-full transition-all duration-200 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get a Free Quote</span>
            </Link>

            <Link
              href="/become-a-partner"
              className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-3 py-1 rounded-full transition-all duration-200 shadow-sm"
            >
              <Handshake className="w-3.5 h-3.5" />
              <span>Become a Partner!</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- 2. Main Navigation Bar ---------- */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 relative z-40">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12 w-full">
          <div className="flex items-center justify-between h-16 md:h-20 gap-6">
            
            {/* Desktop View Logo & Links */}
            <div className="hidden xl:flex items-center justify-between w-full">
              <div className="flex items-center flex-shrink-0">
                <Link href="/" className="flex items-center py-2">
                  <Image
                    src={imgLogo}
                    alt="Ekam Logo"
                    width={150}
                    height={65}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </Link>
              </div>

              <div className="flex items-center space-x-5 xl:space-x-7">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const hasSubmenu = item.submenu && item.submenu.length > 0;

                  return (
                    <div key={item.name} className="relative group py-4">
                      <Link
                        href={item.href}
                        className={`flex items-center gap-1 font-semibold transition-all duration-200 text-base ${
                          isActive
                            ? "text-[#053161] font-bold"
                            : "text-gray-800 hover:text-[#053161]"
                        }`}
                      >
                        {item.name}
                        {hasSubmenu && (
                          <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-gray-500" />
                        )}
                      </Link>

                      {hasSubmenu && (
                        <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white border border-gray-100 shadow-2xl rounded-2xl py-3 z-50">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#053161] font-semibold transition-colors"
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
            </div>

            {/* Mobile View Header Bar */}
            <div className="flex xl:hidden justify-between items-center w-full py-2">
              <Link href="/" className="flex justify-start">
                <Image
                  src={imgLogo}
                  alt="Ekam Logo"
                  width={130}
                  height={55}
                  className="object-contain"
                  priority
                />
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-gray-800 hover:text-[#053161] focus:outline-none rounded-xl hover:bg-gray-100"
                aria-label="Open Menu"
              >
                <Menu className="w-8 h-8" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* ---------- 3. Mobile Overlay & Drawer Menu ---------- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/70 z-[999998] xl:hidden transition-opacity"
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 w-[85%] max-w-[320px] bg-white z-[999999] shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col h-full ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
          <Image
            src={imgLogo}
            alt="Ekam Logo"
            width={120}
            height={50}
            className="object-contain"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-600 hover:text-red-500 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1 bg-white">
          {navItems.map((item) => {
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isSubOpen = activeMobileSubmenu === item.name;

            return (
              <div key={item.name} className="border-b border-gray-100 last:border-none">
                <div className="flex items-center justify-between py-3.5">
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-bold text-gray-800 hover:text-[#053161] text-base"
                  >
                    {item.name}
                  </Link>
                  {hasSubmenu && (
                    <button
                      onClick={() => toggleMobileSubmenu(item.name)}
                      className="p-1 text-gray-500 hover:text-[#053161]"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {hasSubmenu && isSubOpen && (
                  <div className="pl-3 pb-3 space-y-2 bg-slate-50 rounded-xl p-3 mb-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-gray-700 hover:text-[#053161] font-semibold py-1.5"
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
      </div>
    </header>
  );
}

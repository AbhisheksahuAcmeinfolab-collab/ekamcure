"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

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
    <nav className="menu-bar bg-white shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-14">
          
          {/* ---------- Desktop View (Menu Start Left, No Logo) ---------- */}
          <div className="hidden xl:flex items-center justify-between w-full">
            {/* Navigation Links Starting From Far Left */}
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const hasSubmenu = item.submenu && item.submenu.length > 0;

                return (
                  <div key={item.name} className="relative group py-4">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 font-bold transition duration-200 text-[15px] ${
                        isActive ? "text-[#053161]" : "text-gray-800 hover:text-[#053161]"
                      }`}
                    >
                      {item.name}
                      {hasSubmenu && (
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-gray-600" />
                      )}
                    </Link>

                    {/* Submenu Dropdown */}
                    {hasSubmenu && (
                      <div className="absolute left-0 top-full hidden group-hover:block w-64 bg-white border border-gray-100 shadow-xl rounded-xl py-2 z-50 animate-fadeIn">
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
            </div>

            {/* GTranslate Desktop */}
            <div className="hidden lg:block">
              <div className="gtranslate_wrapper gtranslate_desktop"></div>
            </div>
          </div>

          {/* ---------- Mobile View Bar ---------- */}
          <div className="flex xl:hidden justify-between items-center w-full py-2">
            <div className="w-8">
              <div className="gtranslate_wrapper gtranslate_mobile"></div>
            </div>

            <span className="font-bold text-[#053161]">Menu</span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800 hover:text-[#053161] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* ---------- Mobile Side Drawer ---------- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-50 xl:hidden transition-opacity"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <span className="font-bold text-[#053161]">Navigation</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-600 hover:text-red-500 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

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
      </div>
    </nav>
  );
}

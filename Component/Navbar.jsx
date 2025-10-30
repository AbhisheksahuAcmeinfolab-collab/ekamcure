"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import img from "../assets/newimage/Ekam-logo-300x133.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Treatment", href: "/treatment" },
    { name: "Testimonal", href: "/testimonal" },
    { name: "Photo Gallery", href: "/photogallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:text-[#0A1F44] shadow-md sticky top-0 z-50 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* ---------- Desktop View ---------- */}
          <div className="hidden xl:flex justify-between w-full items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 px-4 sm:px-8">
              <Image
                src={img}
                alt="Ekam Logo"
                width={120}
                height={50}
                className="rounded-md"
              />
            </Link>

            {/* Menu */}
            <div className="flex items-center space-x-10">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative font-semibold transition duration-200 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-900 dark:text-gray-100 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600" />
                    )}
                  </Link>
                );
              })}

              {/* GTranslate */}
              <div className="hidden md:block">
                {/* Desktop: bottom-left fixed */}
                <div className="gtranslate_wrapper gtranslate_desktop"></div>
              </div>
            </div>
          </div>

          {/* ---------- Mobile View ---------- */}
          <div className="flex xl:hidden justify-between items-center w-full px-4">
            <div className="block md:hidden w-5">
              {/* Mobile: inline */}
              <div className="gtranslate_wrapper gtranslate_mobile"></div>
            </div>
            {/* Center: Logo */}
            <Link href="/" className="flex justify-center -ml-8">
              <Image
                src={img}
                alt="Ekam Logo"
                width={100}
                height={40}
                className="rounded-md"
              />
            </Link>

            {/* Right: Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-gray-100 hover:text-blue-600 transition duration-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile Dropdown Menu ---------- */}
      {isOpen && (
        <div className="xl:hidden px-4 pb-4 space-y-2 bg-white dark:bg-gray-900 transition-colors duration-300">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block font-semibold transition duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-900 dark:text-gray-100 hover:text-blue-600"
                }`}
              >
                <span className="relative inline-block">
                  {item.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-blue-600" />
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}


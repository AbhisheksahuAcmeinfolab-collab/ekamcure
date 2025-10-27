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
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white dark:bg-transparent shadow-md sticky top-0 z-50 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
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

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-10">
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

            {/* Single shared GTranslate Widget */}
            <div className="gtranslate_wrapper ml-4"></div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex xl:hidden items-center space-x-3 pr-4 md:pr-8">
            {/* Same GTranslate widget (not duplicate) */}
            <div className="gtranslate_wrapper mr-2"></div>

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

      {/* Mobile Menu */}
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

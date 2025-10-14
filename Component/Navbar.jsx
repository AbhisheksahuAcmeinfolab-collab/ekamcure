"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import { i18nextConfig } from "../next-i18next.config";
import img from "../assets/newimage/Logo.webp";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();

  const navItems = [
    { name: t("Home"), href: "/" },
    { name: t("About"), href: "/about" },
    { name: t("Services"), href: "/services" },
    { name: t("Treatment"), href: "/treatment" },
    { name: t("Gallery"), href: "/fees" },
    { name: t("Contact Us"), href: "/contact" },
  ];

  const changeLanguage = (lng) => {
    const pathWithoutLocale = pathname.split("/").slice(2).join("/") || "";
    router.push(`/${lng}/${pathWithoutLocale}`);
    setLangOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 px-4 sm:px-8">
            <Image
              src={img}
              alt="Health India Logo"
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

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 transition duration-200"
              >
                {router.locale?.toUpperCase() || "EN"}
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg z-50">
                  {i18nextConfig.i18n.locales.map((lng) => (
                    <button
                      key={lng}
                      onClick={() => changeLanguage(lng)}
                      className="block w-full text-left px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex xl:hidden items-center space-x-2 pr-4 md:pr-8">
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

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { useTranslation } from "next-i18next";
// import { i18nextConfig } from "../next-i18next.config";

// import img from "../assets/newimage/Logo.webp";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [langOpen, setLangOpen] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();
//   const { t } = useTranslation();

//   const navItems = [
//     { name: t("Home"), href: "/" },
//     { name: t("About"), href: "/about" },
//     { name: t("Services"), href: "/services" },
//     { name: t("Treatment"), href: "/treatment" },
//     { name: t("Gallery"), href: "/fees" },
//     { name: t("Contact Us"), href: "/contact" },
//   ];

//   const changeLanguage = (lng) => {
//     const pathWithoutLocale = pathname.split("/").slice(2).join("/") || "";
//     router.push(`/${lng}/${pathWithoutLocale}`);
//     setLangOpen(false);
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50 py-3">
//       <div className="max-w-7xl mx-auto sm:px-6 lg:px-12">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-4 px-4 sm:px-8">
//             <Image
//               src={img}
//               alt="Health India Logo"
//               width={120}
//               height={50}
//               className="rounded-md"
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden xl:flex items-center space-x-10">
//             {navItems.map((item) => {
//               const isActive = pathname === item.href;
//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`relative font-bold transition duration-200 ${
//                     isActive
//                       ? "text-blue-600"
//                       : "text-black-1000 hover:text-blue-600"
//                   }`}
//                 >
//                   {item.name}
//                   {isActive && (
//                     <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-600" />
//                   )}
//                 </Link>
//               );
//             })}

//             {/* Language Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setLangOpen(!langOpen)}
//                 className="font-bold text-black-1000 hover:text-blue-600 transition duration-200"
//               >
//                 {router.locale?.toUpperCase() || "EN"}
//               </button>
//               {langOpen && (
//                 <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-50">
//                   {i18nextConfig.i18n.locales.map((lng) => (
//                     <button
//                       key={lng}
//                       onClick={() => changeLanguage(lng)}
//                       className="block w-full text-left px-4 py-2 hover:bg-blue-100"
//                     >
//                       {lng.toUpperCase()}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="flex xl:hidden items-center space-x-2">
//             {/* Language Dropdown in mobile */}
//             <div className="relative">
//               <button
//                 onClick={() => setLangOpen(!langOpen)}
//                 className="font-bold text-black-1000 hover:text-blue-600 transition duration-200"
//               >
//                 {router.locale?.toUpperCase() || ""}
//               </button>
//               {langOpen && (
//                 <div className="absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-lg z-50">
//                   {i18nextConfig.i18n.locales.map((lng) => (
//                     <button
//                       key={lng}
//                       onClick={() => changeLanguage(lng)}
//                       className="block w-full text-left px-4 py-2 hover:bg-blue-100"
//                     >
//                       {lng.toUpperCase()}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className="flex items-center justify-end pr-4 md:pr-8">
//               <span className="mr-2">EN</span>
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-black-1000 hover:text-blue-600 transition duration-200 focus:outline-none"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   {isOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="xl:hidden px-4 pb-4 space-y-2">
//           {navItems.map((item) => {
//             const isActive = pathname === item.href;
//             return (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 onClick={() => setIsOpen(false)}
//                 className={`block font-bold transition duration-200 ${
//                   isActive
//                     ? "text-blue-600"
//                     : "text-black-1000 hover:text-blue-600"
//                 }`}
//               >
//                 <span className="relative inline-block">
//                   {item.name}
//                   {isActive && (
//                     <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-blue-600" />
//                   )}
//                 </span>
//               </Link>
//             );
//           })}
//         </div>
//       )}
//     </nav>
//   );
// }

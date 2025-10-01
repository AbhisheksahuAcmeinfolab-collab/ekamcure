// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// const languages = [
//   { code: "en", name: "English", flag: "/flags/us.png" },
//   { code: "hi", name: "Hindi", flag: "/flags/in.png" },
//   { code: "fr", name: "French", flag: "/flags/fr.png" },
//   { code: "de", name: "German", flag: "/flags/de.png" },
//   { code: "ar", name: "Arabic", flag: "/flags/sa.png" },
//   // Add more flags here
// ];

// export default function LanguageChanger() {
//   const [open, setOpen] = useState(false);
//   const [selected, setSelected] = useState(languages[0]); // default English
//   const ref = useRef();

//   useEffect(() => {
//     // Load Google Translate script
//     const script = document.createElement("script");
//     script.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     document.body.appendChild(script);

//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: "en",
//           includedLanguages: languages.map((l) => l.code).join(","),
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
//         },
//         "google_translate_element"
//       );
//     };

//     // Close dropdown when clicking outside
//     const handleClickOutside = (e) => {
//       if (ref.current && !ref.current.contains(e.target)) setOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const changeLanguage = (lang) => {
//     const combo = document.querySelector(".goog-te-combo");
//     if (combo) {
//       combo.value = lang.code;
//       combo.dispatchEvent(new Event("change"));
//       setSelected(lang);
//       setOpen(false);
//     }
//   };

//   return (
//     <div className="relative" ref={ref}>
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-200 transition"
//       >
//         <Image src={selected.flag} width={20} height={14} alt={selected.name} />
//         <span className="hidden md:inline text-gray-700 font-medium">{selected.name}</span>
//         <svg
//           className="w-4 h-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {open && (
//         <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
//           {languages.map((lang) => (
//             <button
//               key={lang.code}
//               onClick={() => changeLanguage(lang)}
//               className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
//             >
//               <Image src={lang.flag} width={20} height={14} alt={lang.name} />
//               <span>{lang.name}</span>
//             </button>
//           ))}
//         </div>
//       )}

//       <div id="google_translate_element" className="hidden"></div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";

export default function LanguageChanger({ id = "google_translate_element" }) {
  useEffect(() => {
    // Load script only once
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);
    }

    // Initialize Google Translate widget
    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,gu,ta,bn,pa,fr,de,ar",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          id
        );
      }
    };
  }, [id]);

  return (
    <div
      id={id}
      className="text-gray-700 font-medium rounded-lg overflow-hidden"
    ></div>
  );
}

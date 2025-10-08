// ✅ Correct i18n.js setup
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: { welcome: "Welcome" } },
      fr: { translation: { bienvenue: "Bienvenue" } },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;









// 'use client'
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { use } from "react";

// i18n
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translation: {
//           welcome: "Welcome to our website!",
//           description: "This is a multi-language Next.js website.",
//         },
//       },
//       hi: {
//         translation: {
//           welcome: "हमारी वेबसाइट पर स्वागत है!",
//           description: "यह एक मल्टी-लैंग्वेज Next.js वेबसाइट है।",
//         },
//       },
//     },
//     fallbackLng: "en",
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

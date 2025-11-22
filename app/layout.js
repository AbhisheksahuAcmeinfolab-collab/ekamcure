
// "use client"
import TopHeader from "@/Component/TopHeader";
import Navbar from "@/Component/Navbar";
import "./globals.css";
import Footer from "@/Component/Footer";
import Footerup from "@/Component/Footerup";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Ekam Health – Trusted Medical Travel Partner",
    template: "%s | Ekam Health",
  },
  description:
    "Ekam Health helps patients worldwide find top hospitals in India for affordable, trusted healthcare.",
  keywords: [
    "medical travel India",
    "medical tourism",
    "Ekam Health",
    "best hospitals India",
  ],
  openGraph: {
    title: "Ekam Health – Trusted Medical Travel Partner",
    description:
      "Connecting global patients with India’s leading hospitals and doctors.",
    url: "https://www.ekamhealth.com",
    siteName: "Ekam Health",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ekam Health Medical Travel",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>

      <body>
        <Script
          id="gtranslate-settings"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      if (window.innerWidth < 768) {
        // Mobile view (inline)
        window.gtranslateSettings = {
          default_language: "en",
          languages: ["hi", "en", "fr", "it", "es", "af", "ko", "de", "hy"],
          wrapper_selector: ".gtranslate_mobile",
          switcher_horizontal_position: "inline",
          float_switcher_open_direction: "bottom",
          flag_style: "2d",
          alt_flags: { en: "usa", pt: "brazil", es: "mexico", fr: "quebec" }
        };
      } else {
        // Desktop view (bottom-left fixed)
        window.gtranslateSettings = {
          default_language: "en",
          languages: ["hi", "en", "fr", "it", "es", "af", "ko", "de", "hy"],
          wrapper_selector: ".gtranslate_desktop",
          switcher_horizontal_position: "left",
          switcher_vertical_position: "bottom",
          flag_style: "2d",
          alt_flags: { en: "usa", pt: "brazil", es: "mexico", fr: "quebec" }
        };
      }
    `,
          }}
        />


        <Script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          strategy="afterInteractive"
          defer
        />

        {/* <Script
          id="gtranslate-settings"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.gtranslateSettings = {"default_language":"en",
            "native_language_names": true,
        "detect_browser_language": true,"languages"
        :["en","hi","fr","it","es","af","ko","de","hy"],"globe_color":"#66aaff","wrapper_selector"
        :".gtranslate_wrapper","flag_size":20,"alt_flags":{"en":"usa","pt":"brazil","es"
        :"mexico","fr":"quebec"}, "globe_size":30};`,
          }}
        />
        <Script
          src="https://cdn.gtranslate.net/widgets/latest/globe.js"
          strategy="afterInteractive"
          defer
        ></Script> */}
        <TopHeader />
        <Navbar />
        {children}
        <Footerup />
        <Footer />
      </body>
    </html>
  );
}





















// // "use client"
// import TopHeader from "@/Component/TopHeader";
// import Navbar from "@/Component/Navbar";
// import "./globals.css";
// import Footer from "@/Component/Footer";
// import Footerup from "@/Component/Footerup";
// import Script from "next/script";

// export const metadata = {
//   title: {
//     default: "Ekam Health – Trusted Medical Travel Partner",
//     template: "%s | Ekam Health",
//   },
//   description:
//     "Ekam Health helps patients worldwide find top hospitals in India for affordable, trusted healthcare.",
//   keywords: [
//     "medical travel India",
//     "medical tourism",
//     "Ekam Health",
//     "best hospitals India",
//   ],
//   openGraph: {
//     title: "Ekam Health – Trusted Medical Travel Partner",
//     description:
//       "Connecting global patients with India’s leading hospitals and doctors.",
//     url: "https://www.ekamhealth.com",
//     siteName: "Ekam Health",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Ekam Health Medical Travel",
//       },
//     ],
//     type: "website",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <Script
//           id="gtranslate-settings"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//       if (window.innerWidth < 768) {
//         // Mobile view (inline)
//         window.gtranslateSettings = {
//           default_language: "hi",
//           languages: ["hi", "en", "fr", "it", "es", "af", "ko", "de", "hy"],
//           wrapper_selector: ".gtranslate_mobile",
//           switcher_horizontal_position: "inline",
//           float_switcher_open_direction: "bottom",
//           flag_style: "2d",
//           alt_flags: { en: "usa", pt: "brazil", es: "mexico", fr: "quebec" }
//         };
//       } else {
//         // Desktop view (bottom-left fixed)
//         window.gtranslateSettings = {
//           default_language: "hi",
//           languages: ["hi", "en", "fr", "it", "es", "af", "ko", "de", "hy"],
//           wrapper_selector: ".gtranslate_desktop",
//           switcher_horizontal_position: "left",
//           switcher_vertical_position: "bottom",
//           flag_style: "2d",
//           alt_flags: { en: "usa", pt: "brazil", es: "mexico", fr: "quebec" }
//         };
//       }
//     `,
//           }}
//         />


//         <Script
//           src="https://cdn.gtranslate.net/widgets/latest/float.js"
//           strategy="afterInteractive"
//           defer
//         />

//         {/* <Script
//           id="gtranslate-settings"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `window.gtranslateSettings = {"default_language":"en",
//             "native_language_names": true,
//         "detect_browser_language": true,"languages"
//         :["en","hi","fr","it","es","af","ko","de","hy"],"globe_color":"#66aaff","wrapper_selector"
//         :".gtranslate_wrapper","flag_size":20,"alt_flags":{"en":"usa","pt":"brazil","es"
//         :"mexico","fr":"quebec"}, "globe_size":30};`,
//           }}
//         />
//         <Script
//           src="https://cdn.gtranslate.net/widgets/latest/globe.js"
//           strategy="afterInteractive"
//           defer
//         ></Script> */}
//         <TopHeader />
//         <Navbar />
//         {children}
//         <Footerup />
//         <Footer />
//       </body>
//     </html>
//   );
// }



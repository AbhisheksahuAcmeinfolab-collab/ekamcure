// "use client"; // <- add this at the top

import TopHeader from "@/Component/TopHeader";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import Footerup from "@/Component/Footerup";
import "./globals.css";
import Script from "next/script";
import Canonical from "../Component/Canonical";

export const defaultMetadata = {
  
  author: "Ekam Cure",
  publisher: "Ekam Cure",
  robots: "index, follow",
  openGraph: {
    title: "EkamCure – Trusted Medical Tourism & Healthcare in India",
  description:
    "EkamCure connects international patients with top hospitals and doctors in India, offering safe, affordable, and quality healthcare services.",
    images: ["/og-home.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="en">
      <head>
        {/* Basic Metadata */}
        
        <meta name="author" content={defaultMetadata.author} />
        <meta name="publisher" content={defaultMetadata.publisher} />
        <meta name="robots" content={defaultMetadata.robots} />

        {/* Open Graph */}
        <meta property="og:title" content={defaultMetadata.openGraph.title} />
        <meta property="og:description" content={defaultMetadata.openGraph.description} />
        <meta property="og:image" content={defaultMetadata.openGraph.images[0]} />
        <meta property="og:type" content={defaultMetadata.openGraph.type} />

{/* Canonical */}
        <Canonical />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZBQZV94');
          `}
        </Script>
      </head>

      <body suppressHydrationWarning={true}>
        {/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZBQZV94"
height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>
{/* <!-- End Google Tag Manager (noscript) --> */}

        {/* GTranslate Scripts */}
        <Script
          id="gtranslate-settings"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.innerWidth < 768) {
                window.gtranslateSettings = {
                  default_language: "en",
                  languages: ["hi","en","fr","it","es","af","ko","de","hy"],
                  wrapper_selector: ".gtranslate_mobile",
                  switcher_horizontal_position: "inline",
                  float_switcher_open_direction: "bottom",
                  flag_style: "2d",
                  alt_flags: { en: "usa", pt: "brazil", es: "mexico", fr: "quebec" }
                };
              } else {
                window.gtranslateSettings = {
                  default_language: "en",
                  languages: ["hi","en","fr","it","es","af","ko","de","hy"],
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
        <Script src="https://cdn.gtranslate.net/widgets/latest/float.js" strategy="afterInteractive" defer />

        {/* Layout Components */}
        <TopHeader />
        <Navbar />
        {children}
        <Footerup />
        <Footer />
      </body>
    </html>
  );
}

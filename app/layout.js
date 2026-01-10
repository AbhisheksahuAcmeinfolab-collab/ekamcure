"use client"; // <- add this at the top

import TopHeader from "@/Component/TopHeader";
import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";
import Footerup from "@/Component/Footerup";
import "./globals.css";
import Script from "next/script";
import { usePathname } from "next/navigation";

export const defaultMetadata = {
  title: "Ekam Cure - Trusted Medical Travel & Healthcare",
  description:
    "Explore patient success stories and top treatments with Ekam Cure.",
  keywords: "Medical Tourism, Ekam Cure, Healthcare, Treatments, Patient Success",
  author: "Ekam Cure",
  publisher: "Ekam Cure",
  robots: "index, follow",
  openGraph: {
    title: "Ekam Cure - Trusted Healthcare",
    description: "Connecting patients with top hospitals and doctors in India.",
    images: ["/og-home.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const pathname = usePathname(); // ✅ now works in client component
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.ekamcure.com";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return (
    <html lang="en">
      <head>
        {/* Basic Metadata */}
        <title>{defaultMetadata.title}</title>
        <meta name="description" content={defaultMetadata.description} />
        <meta name="keywords" content={defaultMetadata.keywords} />
        <meta name="author" content={defaultMetadata.author} />
        <meta name="publisher" content={defaultMetadata.publisher} />
        <meta name="robots" content={defaultMetadata.robots} />

        {/* Open Graph */}
        <meta property="og:title" content={defaultMetadata.openGraph.title} />
        <meta property="og:description" content={defaultMetadata.openGraph.description} />
        <meta property="og:image" content={defaultMetadata.openGraph.images[0]} />
        <meta property="og:type" content={defaultMetadata.openGraph.type} />

        {/* Canonical */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body suppressHydrationWarning={true}>
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

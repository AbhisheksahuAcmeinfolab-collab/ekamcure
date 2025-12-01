import TopHeader from "@/Component/TopHeader";
import Navbar from "@/Component/Navbar";
import "./globals.css";
import Footer from "@/Component/Footer";
import Footerup from "@/Component/Footerup";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Script
          id="gtranslate-settings"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (window.innerWidth < 768) {
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

        <TopHeader />
        <Navbar />
        {children}
        <Footerup />
        <Footer />
      </body>
    </html>
  );
}


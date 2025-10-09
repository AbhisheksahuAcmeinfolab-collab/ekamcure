// "use client"
import TopHeader from "@/Component/TopHeader";
import Navbar from "@/Component/Navbar";
import "./globals.css";
import Footer from "@/Component/Footer";
import Footerup from '@/Component/Footerup';

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
    <html lang="en">
      <body>
        <TopHeader />
        <Navbar />
        {children}
        <Footerup/>
        <Footer />
      </body>
    </html>
  );
}
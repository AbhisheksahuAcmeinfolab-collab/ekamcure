// app/page.jsx

import HomeClient from "./HomeClient"; // Client Component

export const metadata = {
  title: "EkamCure – Trusted Medical Tourism & Healthcare in India",
  description:
    "EkamCure connects international patients with top hospitals and doctors in India, offering safe, affordable, and quality healthcare services.",
    keywords :"medical tourism in India, healthcare services India, EkamCure",
  openGraph: {
   title: "EkamCure – Trusted Medical Tourism & Healthcare in India",
  description:
    "EkamCure connects international patients with top hospitals and doctors in India, offering safe, affordable, and quality healthcare services.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "https://www.ekamcure.com/", 
  },
};

// ✅ Default export must be a React component
export default function Page() {
  return <HomeClient />;
}

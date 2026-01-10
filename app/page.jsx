// app/page.jsx

import HomeClient from "./HomeClient"; // Client Component

export const metadata = {
  title: "Home | Ekam Cure",
  description:
    "Explore patient success stories, treatments, and world-class healthcare services with Ekam Cure.",
  openGraph: {
    title: "Home | Ekam Cure",
    description:
      "Trusted healthcare platform connecting patients with top hospitals and doctors in India.",
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

import Image from "next/image";
import Img1 from "../../assets/hero.png";
import Img2 from "../../assets/image/female.jpg";
import Accordion from "./Accordion"; // Client component

// ✅ Metadata works only in server components
export const metadata = {
  title: "Best Medical Travel Services in India | Ekam",
  description:
    "Ekam connects patients with top hospitals and doctors in India, ensuring safe and hassle-free medical travel.",
};

export default function AboutUs() {
  const services = [
    "Cost projections for the planned treatments and surgeries",
    "All medical appointments are scheduled",
    "Organizing the admissions procedure",
    "Processing of second opinions obtained from doctors",
    "Assistance with visa and travel preparations",
    "Reservations at hotels or serviced residences for a comfortable stay in India",
    "Planning for dietary restrictions",
    "Language translators",
    "Updating the patient’s relatives about their condition",
    "Religious settings",
    "Telemedicine is used for remote consultation",
    "Visiting the local attractions",
  ];

  const items = [
    { title: "Comprehensive Treatment Plan", content: "We provide you with detailed medical facts, cost estimate, doctor & hospital info." },
    { title: "Medical Visa Support", content: "Guidance and assistance in obtaining the required medical visa quickly and efficiently." },
    { title: "Airport Pickup And Drop-Off", content: "Safe and convenient transport arrangements from airport to hospital and back." },
    { title: "Individual Attention And Care", content: "Personalized care tailored to your medical and personal needs during your stay." },
    { title: "Kindness-Based Recovery", content: "A compassionate healing environment that promotes mental and physical well-being." },
    { title: "Hospitality", content: "Comfortable accommodation options and hospitality services for patients and families." },
    { title: "Communication Support", content: "Assistance in connecting with doctors, hospitals, and loved ones at all times." },
    { title: "Translation Of Languages", content: "Language translators available to ensure smooth communication during your treatment." },
  ];

  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6 md:px-12 lg:px-20 py-16 gap-10">
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg text-blue-600 font-semibold tracking-wide uppercase">About Us</h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-snug mt-2">
            "UNLOCKING THE SECRETS <br className="hidden md:block" />
            <span className="text-green-600">TO HOLISTIC HEALTH"</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            We are dedicated to providing world-class healthcare with compassion, innovation, and trust.
            Our mission is to guide individuals toward a healthier, holistic lifestyle through expertise and care.
          </p>
        </div>
        <div className="flex-1 relative flex justify-center md:justify-end">
          <div className="relative w-72 md:w-96 lg:w-[420px]">
            <Image src={Img1} alt="Doctor" className="rounded-lg object-contain drop-shadow-xl" priority />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <div className="relative w-[320px] md:w-[420px] lg:w-[480px]">
            <Image src={Img2} alt="Healthcare" width={480} height={480} className="rounded-2xl shadow-lg object-cover" priority />
          </div>
        </div>
        <div>
          <h2 className="mt-6 text-2xl font-bold text-blue-800">Our Services:</h2>
          <ul className="mt-6 grid gap-3 text-gray-700">
            {services.map((service, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 text-blue-600">▶</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Accordion Section */}
      <div className="max-w-5xl mx-auto py-6 mb-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Why Us</h2>
        <Accordion items={items} />
      </div>
    </section>
  );
}

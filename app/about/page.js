// "use client";
// import { useState } from "react";
// import Image from "next/image";

// export default function MissionVisionSection() {
//   const [active, setActive] = useState("mission");

//   const missionImages = [
//     "/images/mission1.jpg",
//     "/images/mission2.jpg",
//     "/images/mission3.jpg",
//   ];

//   const visionImages = [
//     "/images/vision1.jpg",
//     "/images/vision2.jpg",
//     "/images/vision3.jpg",
//   ];

//   const images = active === "mission" ? missionImages : visionImages;

//   return (
//     <section className="py-14 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         {/* Toggle Switch */}
//         <div className="flex justify-center items-center space-x-3 mb-10">
//           <span
//             className={`font-medium ${
//               active === "mission" ? "text-gray-900" : "text-gray-500"
//             }`}
//           >
//             Our Mission
//           </span>

//           {/* Toggle button */}
//           <button
//             onClick={() =>
//               setActive(active === "mission" ? "vision" : "mission")
//             }
//             className={`relative w-12 h-6 flex items-center rounded-full transition-all duration-300 ${
//               active === "mission" ? "bg-blue-600" : "bg-gray-400"
//             }`}
//           >
//             <span
//               className={`absolute w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
//                 active === "mission" ? "translate-x-1" : "translate-x-6"
//               }`}
//             ></span>
//           </button>

//           <span
//             className={`font-medium ${
//               active === "vision" ? "text-gray-900" : "text-gray-500"
//             }`}
//           >
//             Our Vision
//           </span>
//         </div>

//         {/* Image grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
//           {images.map((img, i) => (
//             <div
//               key={i}
//               className="relative aspect-video rounded-xl overflow-hidden shadow-md"
//             >
//               <Image
//                 src={img}
//                 alt={`Image ${i + 1}`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import img from "../../assets/recent/common banner.webp";
import Img1 from "../../assets/newimage/vision.webp";
import Img2 from "../../assets/newimage/vission2.webp";
import Img3 from "../../assets/newimage/Udai Sir.webp"; // replace with correct image paths
import Img4 from "../../assets/newimage/sanu Das.webp";
import Img5 from "../../assets/newimage/Pratap Sir.webp";
import Img6 from "../../assets/newimage/Vijay kumar.webp";

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
    {
      title: "Comprehensive Treatment Plan",
      content:
        "We provide you with detailed medical facts, cost estimate, doctor & hospital info.",
    },
    {
      title: "Medical Visa Support",
      content:
        "Guidance and assistance in obtaining the required medical visa quickly and efficiently.",
    },
    {
      title: "Airport Pickup And Drop-Off",
      content:
        "Safe and convenient transport arrangements from airport to hospital and back.",
    },
    {
      title: "Individual Attention And Care",
      content:
        "Personalized care tailored to your medical and personal needs during your stay.",
    },
    {
      title: "Kindness-Based Recovery",
      content:
        "A compassionate healing environment that promotes mental and physical well-being.",
    },
    {
      title: "Hospitality",
      content:
        "Comfortable accommodation options and hospitality services for patients and families.",
    },
    {
      title: "Communication Support",
      content:
        "Assistance in connecting with doctors, hospitals, and loved ones at all times.",
    },
    {
      title: "Translation Of Languages",
      content:
        "Language translators available to ensure smooth communication during your treatment.",
    },
  ];

  const teamMembers = [
    {
      name: "Udai Singh",
      title: "Founder, Ekam Health Services",
      image: Img3,
      description:
        "Udai Singh is a dedicated marketing expert and entrepreneur with over 15 years of experience, holding an MBA in Marketing. As the founder of Ekam Health Services and other ventures, Udai is committed to fostering well-being and enhancing access to healthcare solutions. His professional journey is driven by a passion for helping people and positively impacting lives. With deep expertise in digital strategy and brand growth, Udai combines visionary leadership with a compassionate approach to business, making a meaningful difference in every project he undertakes.",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Pratap Sankar Gautam",
      title: "Consultant & Patient Coordinator, Ekam Health Services",
      image: Img5,
      description:
        "With over 12 years of diverse industry experience, Pratap Shankar Gautam brings a patient-centric approach to his role as a Consultant and Patient Coordinator at Ekam Health Services. Known for his compassionate, reliable, and trustworthy nature, Pratap is dedicated to guiding patients through each step of their healthcare journey with care and professionalism. His commitment to helping people access quality medical care makes him a valued and trusted partner for international patients seeking seamless and personalized healthcare solutions.",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Sanu Das",
      title: "Patient Coordinator, Ekam Health Services",
      image: Img4,
      description:
        "With 3 years of diverse industry experience, Sanu Das excels as a Patient Coordinator at Ekam Health Services. Guided by a strong, patient-centric approach, he is committed to providing compassionate and personalized support for individuals navigating their healthcare journey. Rohit’s focus on patient well-being and his dedication to seamless care coordination make him a trusted and invaluable resource for patients seeking quality medical care.",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
    {
      name: "Vijay Kumar",
      title: "Patient Coordinator, Ekam Health Services",
      image: Img6,
      description:
        "With 2.5 years of experience across multiple industries, Rahul Kanodia leads as the Chief Consultant and Patient Coordinator at Ekam Health Services. Known for his unwavering honesty, reliability, and deep compassion, Rahul embodies a patient-centric approach, ensuring every individual receives attentive and personalized care. A dedicated devotee of ISKCON, he brings integrity and warmth to each interaction, making him a trusted guide for patients navigating their healthcare journey. Rahul’s commitment to helping others and his reputation as an exceptional human being make him an invaluable asset to Ekam Health Services Linkedin.",
      socials: {
        linkedin: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Fee Banner"
          fill
          className="object-cover brightness-80 w-full h-full"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our About
          </h1>
        </div>
      </div>

      {/* // Outer container with padding */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50 ">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div aria-hidden="true" className="relative h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-left-top transform scale-x-[-1] custom-bg-globe opacity-10 md:opacity-10">
              {/* The actual styling for the background image is in the CSS config below */}
            </div>
          </div>
        </div>
        {/* Content Container (to center and limit width) */}
        <div className="relative mx-auto max-w-7xl z-10">
          {/* Main Content Area */}
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            {/* Left Side: 'About Us' Subtitle and Underline */}
            <div className="lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-2xl font-semibold text-gray-900 border-b-4 border-blue-600 inline-block pb-1 bg-[url('../assets/image/footer-contact-bg.jpg')">
                About Us
              </h2>
            </div>

            {/* Right Side: Text Content */}
            <div className=" space-y-8 text-gray-700 leading-relaxed text-base sm:text-lg">
              {/* First Paragraph */}
              <p>
                Ekam excels in the medical travel industry, connecting
                global patients with top-tier healthcare facilities across
                India. Focused on providing a seamless healthcare journey, the
                company manages every aspect, from initial consultation to
                post-treatment follow-up, to ensure a comprehensive and
                stress-free experience for each patient. By handling essential
                logistics, including medical consultations and hospital
                appointments, Ekam prioritizes patient safety and convenience,
                tailoring their services to meet the individual needs of each
                client.
              </p>

              {/* Second Paragraph */}
              <p>
                With a commitment to accessibility and high standards, Ekam
                transforms medical tourism into a structured, patient-focused
                service. The company&apos;s expertise in cross-border medical
                care helps patients navigate complex healthcare systems,
                empowering them to receive quality treatment without the usual
                complications of international travel. Through Ekam&apos;s
                network and support, patients benefit from transparent,
                efficient medical care solutions, making quality healthcare
                achievable for individuals worldwide.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Vision */}
              <div className="flex flex-col items-center text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 relative after:block after:w-12 after:h-1 after:bg-blue-600 after:mt-2">
                  VISION
                </h2>
                <div className="w-full mb-6">
                  <Image
                    src={Img1}
                    alt="Vision"
                    className="rounded-lg object-cover w-full h-64 md:h-80"
                  />
                </div>
                <p className="text-gray-700 text-base md:text-lg">
                  To be the global leader in medical travel facilitation,
                  transforming the way people access quality healthcare across
                  borders. Ekam Health Services envisions a world where medical
                  treatment is easily attainable, irrespective of geographic
                  boundaries, and where every patient enjoys a tailored,
                  compassionate, and transparent healthcare journey. Through our
                  dedication to innovation, quality, and patient-centric care,
                  we seek to redefine medical tourism and empower individuals
                  worldwide to pursue optimal health outcomes with confidence
                  and ease.
                </p>
              </div>

              {/* Mission */}
              <div className="flex flex-col items-center text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4 relative after:block after:w-12 after:h-1 after:bg-blue-600 after:mt-2">
                  MISSION
                </h2>
                <div className="w-full mb-6">
                  <Image
                    src={Img2}
                    alt="Mission"
                    className="rounded-lg object-cover w-full h-64 md:h-80"
                  />
                </div>
                <p className="text-gray-700 text-base md:text-lg">
                  Ekam Health Services aims to revolutionize the medical tourism
                  industry by delivering comprehensive, personalized healthcare
                  solutions that bridge international patients with India’s top
                  medical providers. Our mission is to ensure that each patient
                  receives exceptional care through seamless coordination of
                  medical consultations, hospital appointments, and travel
                  arrangements. By upholding the highest standards of safety,
                  integrity, and patient satisfaction, we strive to make
                  world-class healthcare accessible stress-free for individuals
                  around the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 relative after:block after:w-16 after:h-1 after:bg-blue-600 after:mx-auto after:mt-3">
              Our Team
            </h2>

            <div className="flex flex-col gap-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-40 h-40 flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-gray-700 mb-3">
                      {member.title}
                    </p>
                    <p className="text-gray-600 text-sm md:text-base mb-4">
                      {member.description}
                    </p>

                    <div className="flex justify-center md:justify-start space-x-4">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          className="text-blue-700 hover:text-blue-900 transition"
                          target="_blank"
                        >
                          <FaLinkedin size={28} />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          className="text-pink-600 hover:text-pink-800 transition"
                          target="_blank"
                        >
                          <FaInstagram size={28} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

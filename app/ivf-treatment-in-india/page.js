"use client";
import DOMPurify from "isomorphic-dompurify";
// 🚨 IMPORTANT: You must import the Next.js Image component
import Image from "next/image";
import Link from "next/link";

// 1. ✅ DEFINE DOCTOR IMAGE VARIABLES HERE (for use in the profile section)
import DoctorImage from "../../assets/doctors/Dr. Shobha Gupta.webp";

const doctorName = "Dr. Shobha Gupta";
const specialization = "IVF Specialist";
const experience =
  "Over 16+ years of experience in the field of reproductive medicine infertility specialist in Delhi";
const profileTextPart1 =
  "Dr Shobha Gupta is one of the **IVF specialist doctor in Delhi** who has got the reputation of contributing best of the services in the field of IVF specialist doctor in Delhi and infertility treatment in Delhi. No doubt she is among the most sought infertility doctor in Delhi and belongs to an eminent group of IVF specialist in India who are widely known for their clinical work and performance in the area of IVF treatment procedure as a stand and deliver IVF doctor in India and IVF doctor in Delhi that fulfills the dreams of many childless couples who are striving hard to conceive through infertility doctor in Delhi. Therefore she is an adorable IVF doctor in Delhi among the patients.";
const profileTextPart2 =
  "Dr Shobha Gupta is considered a prestigious IVF specialist doctor in Delhi and leading infertility doctor in Delhi. She has concluded her **MBBS from the well-known Lady Hardinge Medical College** and **PG from equally notable Maulana Azad Medical College (MAMC), New Delhi (India)**. Dr Shobha Gupta, an IVF Doctor in Delhi, is the Director of **Mother's Lap IVF centre**, her own self governing test tube baby centre in Delhi. IVF Specialist in India Providing Excellence in Treatment";
const profileTextPart3 =
  "She is a qualified and impeccable IVF specialist in Delhi who has gain massive popularity for rendering her service to this profession and as an IVF doctor in India for more than 20 years which is quite a remarkable achievement for any IVF specialist in India. Being an IVF doctor in Delhi she has dedicated herself to the impassionate pursuit in the sphere of infertility or childlessness and has received infertility training from the exalted **Justus Liebig University in Germany**. Her team comprises of the best IVF doctor in Delhi and IVF specialist in India.";

// 2. ✅ MOVE FEATURE BOX COMPONENT OUTSIDE
function FeatureBox({ title, description, iconSvg }) {
  const safeSvg = DOMPurify.sanitize(iconSvg);
  const safeTitle = DOMPurify.sanitize(title);
  const safeDescription = DOMPurify.sanitize(description);

  return (
    <div className="icon-box-component p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-gray-200 bg-white">
      <div className="elementor-icon-box-icon mb-4">
        <span
          className="elementor-icon inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full p-3"
          dangerouslySetInnerHTML={{ __html: safeSvg }}
        ></span>
      </div>
      <div className="elementor-icon-box-content mt-2">
        <h3 className="elementor-icon-box-title text-xl font-semibold text-gray-800 mb-2">
          <span>{safeTitle}</span>
        </h3>
        <p
          className="elementor-icon-box-description text-base text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: safeDescription }}
        />
      </div>
    </div>
  );
}

// 3. ✅ DEFINE FEATURES DATA OUTSIDE (where it was already, good!)
const featuresData = [
  {
    title: "Clinical Excellence",
    description: "Science and evidence-based fertility care...",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hospital"> <line x1="12" y1="18" x2="12" y2="10"></line> <line x1="8" y1="14" x2="16" y2="14"></line> <rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect> </svg>`,
  },
  // ... all other featureData items ...
  {
    title: "Personalized Treatments",
    description:
      "Treatments that are tailored to suit your specific needs and ensure the best outcomes.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check"> <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> <circle cx="8.5" cy="7" r="4"></circle> <polyline points="17 11 19 13 23 9"></polyline> </svg>`,
  },
  {
    title: "Comprehensive Care",
    description:
      "Patient-centric nutritional, psychological, and holistic support in every step of the fertility journey.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path> </svg>`,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. Clear pricing on every test, scan, and procedure.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"> <path d="M20.59 13.41l-7.15 7.15a.5.5 0 0 1-.71 0L2.24 10.71a.5.5 0 0 1 0-.71L9.95 2.24a.5.5 0 0 1 .71 0l7.15 7.15a.5.5 0 0 1 0 .71l-7.15 7.15a.5.5 0 0 1-.71 0z"></path> <circle cx="7" cy="7" r="2"></circle> </svg>`,
  },
  {
    title: "Trusted Experts",
    description:
      "Ekam cure delivers personalized, affordable, and safe medical tourism services with complete support and clear communication.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"> <circle cx="12" cy="8" r="7"></circle> <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.89"></polyline> </svg>`,
  },
  {
    title: "High Success Rates",
    description:
      "Ekam cure is proud to deliver consistently high success rates through expert care, advanced techniques, and personalized solutions.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"> <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline> <polyline points="17 6 23 6 23 12"></polyline> </svg>`,
  },
];

// 4. ✅ MAIN EXPORT COMPONENT (now clean)
export default function ChooseEkam() {
  return (
    <>
      {/* --- FEATURES SECTION --- */}
      <section className="w-full py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 leading-snug">
            Why Choose Ekam For IVF Treatments?
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-10" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              description={feature.description}
              iconSvg={feature.iconSvg}
            />
          ))}
        </div>
      </section>

      <hr className="my-8 border-gray-200" />

      {/* --- SPECIALIST PROFILE SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block border-b-4 border-blue-700 pb-2">
            Our Specialist
          </h2>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="md:grid md:grid-cols-12">
            {/* Left Column (Image & Details) */}
            <div className="md:col-span-4 p-8 bg-blue-100/50 flex flex-col items-center text-center">
              {/* Image Container */}
              <div className="w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                {/* Ensure Next.js Image component is imported and used correctly */}
                <Image
                  src={DoctorImage}
                  alt={doctorName}
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* Name and Specialization - NOW VARIABLES ARE IN SCOPE */}
              <h3 className="text-2xl font-bold text-blue-900 mb-1">
                {doctorName}
              </h3>
              <p className="text-lg font-semibold text-orange-600 mb-4">
                {specialization}
              </p>

              {/* Experience */}
              <p className="text-gray-700 text-sm mb-6 max-w-xs">
                {experience}
              </p>

              {/* Book Appointment Button */}
              <Link
                href="/contact"
                className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-800 flex items-center shadow-lg"
              > 
                Book an Appointment
                <span className="ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Right Column (Description) */}
            <div className="md:col-span-8 p-8 md:p-10">
              <div className="space-y-6 text-gray-700 leading-relaxed text-base">
                {/* Profile Text Blocks - NOW VARIABLES ARE IN SCOPE */}
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: profileTextPart1.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: profileTextPart2.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: profileTextPart3.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// "use client";

// import { useState } from "react";

// export default function ServicesPage() {
//   const [activeTab, setActiveTab] = useState("infertilityTreatments");

//   return (
//     <section className="py-10">
//       {/* Title */}
//       <h2 className="text-center text-3xl font-bold text-[#082859] mb-6">
//         Our Services
//       </h2>

//       {/* Tabs */}
//       <div className="flex flex-wrap justify-center gap-4 mb-10">
//         {[
//           ["infertilityTreatments", "Infertility Treatments"],
//           ["infertilityTesting", "Infertility Testing"],
//           ["advancedTreatments", "Advanced Treatments"],
//           ["fertilityPreservations", "Fertility Preservations"],
//           ["donorProgram", "Donor Program"],
//         ].map(([key, label]) => (
//           <button
//             key={key}
//             onClick={() => setActiveTab(key)}
//             className={`px-6 py-2 rounded-full font-semibold transition-all
//             ${
//               activeTab === key
//                 ? "bg-[#0A0A52] text-white"
//                 : "text-[#082859] bg-white border border-[#0A0A52]"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* CONTENT BOX */}
//       <div className="bg-[#A7C8F9] w-full py-10">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
//           {/* ------------------------------ */}
//           {/* TAB 1: Infertility Treatments */}
//           {/* ------------------------------ */}
//           {activeTab === "infertilityTreatments" && (
//             <>
//               <Card
//                 title="IVF – Invitro Fertilization"
//                 desc="IVF, where the best egg and sperm are fertilized with advanced techniques..."
//               />
//               <Card
//                 title="ICSI – Intra Cytoplasmic Sperm Injection"
//                 desc="Healthy sperm is injected directly into an egg to create a healthy embryo."
//               />
//               <Card
//                 title="OITI – Ovulation Induction with Timed Intercourse"
//                 desc="Medications trigger ovulation and increase chances of pregnancy."
//               />
//               <Card
//                 title="IUI – Intrauterine Insemination"
//                 desc="Processed sperm is placed into the uterus during ovulation."
//               />
//             </>
//           )}

//           {/* ------------------------------ */}
//           {/* TAB 2: Infertility Testing */}
//           {/* ------------------------------ */}
//           {activeTab === "infertilityTesting" && (
//             <>
//               <Card
//                 title="Semen Analysis"
//                 desc="Evaluation of sperm count, motility, and morphology."
//               />
//               <Card
//                 title="Hormone Blood Tests"
//                 desc="FSH, LH, AMH tests to evaluate fertility health."
//               />
//               <Card
//                 title="Ultrasound Scan"
//                 desc="Checking ovaries, follicles, and uterus health."
//               />
//             </>
//           )}

//           {/* ------------------------------ */}
//           {/* TAB 3: Advanced Treatments */}
//           {/* ------------------------------ */}
//           {activeTab === "advancedTreatments" && (
//             <>
//               <Card
//                 title="IMSI"
//                 desc="Selection of best sperm using high-magnification technology."
//               />
//               <Card
//                 title="PICSI"
//                 desc="Physiological ICSI for selecting mature sperm."
//               />
//               <Card
//                 title="PGD / PGS Testing"
//                 desc="Genetic screening of embryos to prevent disorders."
//               />
//             </>
//           )}

//           {/* ------------------------------ */}
//           {/* TAB 4: Fertility Preservations */}
//           {/* ------------------------------ */}
//           {activeTab === "fertilityPreservations" && (
//             <>
//               <Card
//                 title="Egg Freezing"
//                 desc="Cryopreservation of eggs for future family planning."
//               />
//               <Card
//                 title="Sperm Freezing"
//                 desc="Safe long-term storage of sperm."
//               />
//               <Card
//                 title="Embryo Freezing"
//                 desc="Preservation of embryos for future IVF cycles."
//               />
//             </>
//           )}

//           {/* ------------------------------ */}
//           {/* TAB 5: Donor Program */}
//           {/* ------------------------------ */}
//           {activeTab === "donorProgram" && (
//             <>
//               <Card
//                 title="Egg Donor Program"
//                 desc="Healthy egg donors help couples conceive."
//               />
//               <Card
//                 title="Sperm Donor Program"
//                 desc="Screened sperm donors for safe conception."
//               />
//               <Card
//                 title="Embryo Donation"
//                 desc="Matched donor embryos for infertile couples."
//               />
//             </>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// /* CARD COMPONENT */
// function Card({ title, desc }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md p-4 flex gap-4">
//       <img
//         src="/api/placeholder/120/120"
//         alt=""
//         className="rounded-md w-28 h-28 object-cover"
//       />
//       <div>
//         <h3 className="text-xl font-bold text-[#082859] mb-1">{title}</h3>
//         <p className="text-gray-700 text-[15px] leading-relaxed">{desc}</p>
//       </div>
//     </div>
//   );
// }

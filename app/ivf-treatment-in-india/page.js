"use client";
import DOMPurify from "isomorphic-dompurify";
const featuresData = [
  {
    title: "100% Transparent Pricing",
    description: "No hidden charges <br> Full cost disclosure at the start",
    iconSvg: `<svg aria-hidden="true" class="e-font-icon-svg e-ekam e-ekam-rupee-sign" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M497.942 225.86l-5.6-32.398c-1.398-8.127-8.156-14.195-16.326-14.195h-10.42v-44.57c0-26.51-21.49-48-48-48h-112c-26.51 0-48 21.49-48 48v44.57h-36.25c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h36.25v232c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24v-232h112c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-112v-4.57c0-4.418 3.582-8 8-8h96c4.418 0 8 3.582 8 8v12.57h35.094l5.485-31.782c-1.29-1.92-2.03-4.14-2.03-6.438zm-193.942 124.14v-200c0-4.418-3.582-8-8-8h-96c-4.418 0-8 3.582-8 8v200c0 4.418 3.582 8 8 8h96c4.418 0 8-3.582 8-8zM19.102 320h42.138c-1.748 10.457-3.267 21.146-4.462 32.148l-2.458 22.464c-2.422 22.158 14.898 42.923 37.056 45.345 22.158 2.422 42.923-14.898 45.345-37.056l4.032-36.877c.433-3.958 1.488-7.794 3.125-11.411 1.77-3.92 4.102-7.466 7.022-10.486 2.92-3.02 6.466-5.352 10.486-7.022 3.617-1.637 7.453-2.692 11.411-3.125l36.877-4.032c22.158-2.422 42.923 14.898 45.345 37.056 2.422 22.158-14.898 42.923-37.056 45.345l-42.484 4.646c-13.633 1.49-27.466 2.228-41.258 2.228h-64.84c-26.51 0-48 21.49-48 48v32c0 26.51 21.49 48 48 48h228c26.51 0 48-21.49 48-48v-32c0-26.51-21.49-48-48-48h-11.23c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h11.23c4.418 0 8 3.582 8 8v16c0 4.418-3.582 8-8 8h-228c-4.418 0-8-3.582-8-8v-16c0-4.418 3.582-8 8-8h106.66c10.51 0 20.73-1.637 30.56-4.887 23.33-7.85 36.46-32.91 28.61-56.24-7.85-23.33-32.91-36.46-56.24-28.61-4.73 1.59-9.52 2.38-14.32 2.38h-41.67c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h18.27l5.6-32.398c-1.398-8.127-8.156-14.195-16.326-14.195H39.102c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16z"></path></svg>`,
  },
  {
    title: "100+ Senior Doctors",
    description: "Expert IVF specialists <br> Years of experience",
    iconSvg: `<svg aria-hidden="true" class="e-font-icon-svg e-ekam e-ekam-user-md" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M448 318.913c0 115.1-137.986 193.087-224 193.087C137.986 512 0 434.013 0 318.913 0 203.813 137.986 125.926 224 125.926c86.014 0 224 77.887 224 193.087zM224 0c-13.255 0-24 10.745-24 24v8.283c-53.722 10.156-96 57.653-96 114.717 0 63.635 44.524 115.222 104 125.435V456c0 13.255 10.745 24 24 24s24-10.745 24-24V272.435C279.476 262.222 324 210.635 324 147c0-57.064-42.278-104.561-96-114.717V24c0-13.255-10.745-24-24-24z"></path></svg>`,
  },
  {
    title: "Dedicated Care Coordinator",
    description: "24/7 support <br> One-point of contact",
    iconSvg: `<svg aria-hidden="true" class="e-font-icon-svg e-ekam e-ekam-hands-helping" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M424 256c0-13.255-10.745-24-24-24h-120v-40c0-13.255-10.745-24-24-24s-24 10.745-24 24v40H112c-13.255 0-24 10.745-24 24s10.745 24 24 24h112v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h120c13.255 0 24-10.745 24-24zM552 256c0-13.255-10.745-24-24-24h-24c-13.255 0-24 10.745-24 24s10.745 24 24 24h24c13.255 0 24-10.745 24-24zM48 256c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24s10.745 24 24 24h24c13.255 0 24-10.745 24-24zM320 0c0-13.255-10.745-24-24-24h-64c-13.255 0-24 10.745-24 24s10.745 24 24 24h64c13.255 0 24-10.745 24-24zM576 256c0 132.55-107.45 240-240 240s-240-107.45-240-240 107.45-240 240-240 240 107.45 240 240zM368 256c0 70.692-57.308 128-128 128s-128-57.308-128-128 57.308-128 128-128 128 57.308 128 128z"></path></svg>`,
  },
  {
    title: "Free First Consultation",
    description: "Get started for free <br> Expert advice",
    iconSvg: `<svg aria-hidden="true" class="e-font-icon-svg e-ekam e-ekam-hands-helping" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M424 256c0-13.255-10.745-24-24-24h-120v-40c0-13.255-10.745-24-24-24s-24 10.745-24 24v40H112c-13.255 0-24 10.745-24 24s10.745 24 24 24h112v40c0 13.255 10.745 24 24 24s24-10.745 24-24v-40h120c13.255 0 24-10.745 24-24zM552 256c0-13.255-10.745-24-24-24h-24c-13.255 0-24 10.745-24 24s10.745 24 24 24h24c13.255 0 24-10.745 24-24zM48 256c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24s10.745 24 24 24h24c13.255 0 24-10.745 24-24zM320 0c0-13.255-10.745-24-24-24h-64c-13.255 0-24 10.745-24 24s10.745 24 24 24h64c13.255 0 24-10.745 24-24zM576 256c0 132.55-107.45 240-240 240s-240-107.45-240-240 107.45-240 240-240 240 107.45 240 240zM368 256c0 70.692-57.308 128-128 128s-128-57.308-128-128 57.308-128 128-128 128 57.308 128 128z"></path></svg>`,
  },
];

// Styles for demonstration—you would replace these with your actual CSS/Tailwind classes
const styles = {
  container: {
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    flex: "1 1 200px",
    textAlign: "center",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default function ChooseEkam() {
function FeatureBox({ title, description, iconSvg }) {
    const safeSvg = DOMPurify.sanitize(iconSvg); 
    const safeTitle = DOMPurify.sanitize(title); 
    const safeDescription = DOMPurify.sanitize(description);
    return (
        <div style={styles.container} className="icon-box-component">
            <div className="elementor-icon-box-icon">
                <span
                    className="elementor-icon"
                    dangerouslySetInnerHTML={{ __html: safeSvg }} 
                />
            </div>
            <div className="elementor-icon-box-content">
                <h3 style={styles.title} className="elementor-icon-box-title">
                    {/* Use the sanitized title (though it should be safe text anyway) */}
                    <span>{safeTitle}</span> 
                </h3>
                <p
                    style={styles.description}
                    className="elementor-icon-box-description"
                    // Use the sanitized description
                    dangerouslySetInnerHTML={{ __html: safeDescription }}
                />
            </div>
        </div>
    );
}

  return (
    <>
      <section className="w-full py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-snug">
            Choose Ekam For IVF Treatments
          </h2>
          <div className="w-50 h-1 bg-blue-900 mx-auto mb-10" />
        </div>

        {/* 💥 CORRECTED: Use a flex container to hold the feature boxes */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center">
          {featuresData.map((feature, index) => (
            // 🎯 Now, we use the FeatureBox component and pass the data (props)
            <FeatureBox
              key={index} // Unique key is required for mapped lists
              title={feature.title}
              description={feature.description}
              iconSvg={feature.iconSvg}
            />
          ))}
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

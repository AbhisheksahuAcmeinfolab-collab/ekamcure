import Script from "next/script";
import React from "react";
import Link from "next/link";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Best Prostate Cancer Doctors in India | Top Uro-Oncologists & Surgeons",
  description:
    "Find the best prostate cancer doctors in India with expertise in robotic surgery, uro-oncology, and advanced cancer treatment. Consult experienced specialists at leading hospitals for personalized prostate cancer care.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ekamcure.com/" },
    { "@type": "ListItem", "position": 2, "name": "Doctors", "item": "https://www.ekamcure.com/doctors" },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Prostate Cancer Doctors in India",
      "item": "https://www.ekamcure.com/doctors/best-prostate-cancer-doctors-in-india"
    }
  ]
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "about": {
    "@type": "MedicalCondition",
    "name": "Prostate Cancer"
  },
  "audience": {
    "@type": "Patient"
  },
  "specialty": "Uro-Oncology",
  "lastReviewed": "2024-05-20"
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Prostate Cancer Specialist Referral",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ekam Cure",
    "image": "https://www.ekamcure.com/_next/static/media/Ekam-logo-300x133.bd70579a.webp",
    "telephone": "+919990205353",
    "address": { "@type": "PostalAddress", "addressLocality": "Delhi", "addressCountry": "IN" }
  },
  "description": "Helping international patients connect with leading uro-oncologists and robotic surgeons for prostate cancer treatment in India."
};

/* ---------- shared design tokens (see palette note in comments) ----------
  Ink Navy   #053161  — primary dark / headings on light
  Deep Teal  #1B4F9C  — secondary, dividers, connectors
  Seafoam    #F5F8FC  — page background
  Amber Seal #1B4F9C  — credential / quality accent
  Alert Brick#C4432B  — caution / red-flag accent
  Display: 'Fraunces', body: 'Inter', utility/mono: 'IBM Plex Mono'
------------------------------------------------------------------------- */

const specialistTypes = [
  {
    role: "Uro-Oncologists",
    detail:
      "Focus on cancers of the male reproductive system and urinary tract. Often responsible for surgical management and long-term monitoring of prostate cancer patients."
  },
  {
    role: "Robotic Surgeons",
    detail:
      "Perform minimally invasive prostate cancer procedures using advanced robotic-assisted surgical systems, trained in precision techniques that can help preserve surrounding nerves and tissues whenever clinically appropriate."
  },
  {
    role: "Medical Oncologists",
    detail:
      "Oversee systemic cancer therapies and help manage advanced, recurrent, or metastatic prostate cancer cases."
  },
  {
    role: "Radiation Oncologists",
    detail:
      "Plan and deliver targeted radiation treatment while minimizing exposure to nearby healthy tissues."
  },
  {
    role: "Multidisciplinary Cancer Teams",
    detail:
      "Many leading cancer centers in India use tumor boards where multiple specialists review each case together before finalizing treatment recommendations."
  }
];

const qualities = [
  {
    title: "Extensive Clinical Experience",
    detail: "Doctors who regularly treat prostate cancer patients often develop greater expertise in handling both routine and complex cases."
  },
  {
    title: "Specialization in Uro-Oncology",
    detail: "Choosing a specialist who focuses specifically on urological cancers can be beneficial for patients seeking advanced treatment options."
  },
  {
    title: "Robotic Surgery Expertise",
    detail: "Patients considering robotic-assisted procedures should evaluate the surgeon's experience with robotic prostate cancer surgery and the number of similar procedures performed annually."
  },
  {
    title: "International Training and Certifications",
    detail: "Many leading Indian specialists have received advanced training from internationally recognized institutions and actively participate in global oncology programs."
  },
  {
    title: "Research and Academic Contributions",
    detail: "Doctors involved in cancer research, medical publications, and international conferences often remain updated on the latest developments in prostate cancer management."
  },
  {
    title: "Multidisciplinary Collaboration",
    detail: "The best outcomes are often achieved when specialists work closely with radiologists, pathologists, medical oncologists, and radiation oncologists."
  }
];

const questionsToAsk = [
  "How many prostate cancer cases do you manage annually?",
  "Do you specialize in uro-oncology?",
  "Is robotic surgery available when appropriate?",
  "How is treatment planning personalized for each patient?",
  "What support services are available after treatment?",
  "How are complex or advanced-stage cases managed?"
];

const travelConsiderations = [
  {
    title: "Hospital Infrastructure",
    intro: "The treating doctor's hospital should offer:",
    items: [
      "Advanced oncology facilities",
      "Modern imaging technology",
      "Dedicated cancer care units",
      "Intensive care support",
      "International patient services"
    ]
  },
  {
    title: "Communication and Coordination",
    intro: "Dedicated coordinators can help international patients with:",
    items: [
      "Medical record reviews",
      "Virtual consultations",
      "Treatment scheduling",
      "Travel planning",
      "Follow-up arrangements"
    ]
  },
  {
    title: "Access to Comprehensive Care",
    intro: null,
    items: [
      "Patients often benefit when all required services are available under one roof, including diagnostics, surgery, oncology, rehabilitation, and follow-up care."
    ],
    isParagraph: true
  }
];

const globalComparisonPoints = [
  "Manage high patient volumes",
  "Perform complex cancer surgeries regularly",
  "Utilize modern robotic technology",
  "Follow internationally accepted treatment protocols",
  "Participate in global medical conferences and research initiatives"
];

const redFlags = [
  "Treatment recommendations are provided without reviewing reports.",
  "Multiple treatment options are not discussed.",
  "Questions are not addressed clearly.",
  "There is no multidisciplinary involvement for complex cases.",
  "Follow-up planning is not explained."
];

const ekamSupport = [
  "Doctor selection guidance",
  "Hospital recommendations",
  "Treatment planning",
  "Medical visa assistance",
  "Travel coordination",
  "Follow-up support"
];

export default function BestProstateCancerDoctorsIndia() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />

      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-medical-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }} />
      <Script id="schema-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div style={{ fontFamily: "'Inter', sans-serif", background: "#F5F8FC" }} className="min-h-screen text-[#1F2933]">

        {/* ============ HERO ============ */}
        <header className="relative overflow-hidden" style={{ background: "linear-gradient(120deg, #053161 0%, #6796cc 100%)" }}>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 39px, #ffffff 39px, #ffffff 40px)"
            }}
          />
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative">
            <p
              className="text-[#1B4F9C] text-xs md:text-sm tracking-[0.25em] uppercase mb-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Specialist Directory · Uro-Oncology
            </p>
            <h1
              className="text-white text-4xl md:text-6xl leading-[1.05] mb-8 max-w-3xl"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}
            >
              Best Prostate Cancer Doctors in India
            </h1>
            <p className="text-[#C9D9EC] text-lg leading-relaxed max-w-2xl">
              Finding the right specialist is one of the most important decisions in the prostate cancer treatment journey. The experience, expertise, and multidisciplinary approach of the treating physician can significantly influence treatment planning, surgical precision, and long-term patient outcomes.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-10 pt-8 border-t border-white/15">
              {["Uro-Oncologists", "Robotic Surgeons", "Medical Oncologists", "Radiation Oncologists", "Tumor Boards"].map((tag, i) => (
                <span key={i} className="text-[#9DBEE0] text-sm" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ============ PAGE BODY ============ */}
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-10 gap-10">

          <div className="lg:col-span-7">

            {/* INTRO / WHY IT MATTERS */}
            <section className="mb-20">
              <blockquote
                className="text-2xl md:text-3xl leading-snug mb-8 pl-6 border-l-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: "italic", fontWeight: 500, borderColor: "#1B4F9C", color: "#053161" }}
              >
                India is home to many internationally recognized uro-oncologists, robotic surgeons, surgical oncologists, and cancer specialists managing both localized and advanced prostate cancer cases.
              </blockquote>

              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161" }}>
                Why choosing the right doctor matters
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-6">
                Prostate cancer management often requires a personalized treatment strategy rather than a one-size-fits-all approach. Every patient&apos;s age, cancer stage, overall health, and treatment goals are different. An experienced prostate cancer specialist helps in:
              </p>

              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-[#E1E8F0]">
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "Developing an individualized treatment plan",
                    "Evaluating multiple treatment approaches",
                    "Coordinating multidisciplinary cancer care",
                    "Managing complex or recurrent cases",
                    "Reducing treatment-related complications",
                    "Improving quality of life after treatment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[#1F2933]">
                      <span
                        className="mt-1 w-4 h-4 flex-shrink-0 border-2 rounded-sm"
                        style={{ borderColor: "#1B4F9C" }}
                      />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#3E4C59] leading-relaxed mt-6">
                The right doctor not only focuses on cancer control but also considers urinary, sexual, and overall functional outcomes.
              </p>
            </section>

            {/* SIGNATURE SECTION — THE TUMOR BOARD DIAGRAM */}
            <section className="mb-24" id="specialist-types">
              <p className="text-[#1B4F9C] text-xs tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Who reviews your case
              </p>
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161" }}>
                Types of specialists involved in prostate cancer care
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-14 max-w-2xl">
                Patients may interact with several specialists throughout their treatment journey. Many leading cancer centers in India bring these specialists together on a tumor board to review each case before finalizing recommendations.
              </p>

              {/* hub */}
              <div className="flex flex-col items-center">
                <div
                  className="px-6 py-3 rounded-full text-white text-sm text-center"
                  style={{ fontFamily: "'Montserrat', sans-serif", background: "#053161" }}
                >
                  YOUR CASE
                </div>
                <div className="w-px h-10" style={{ background: "#1B4F9C66" }} />
              </div>

              {/* connector row + cards */}
              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-8 border-t-2 border-dashed" style={{ borderColor: "#1B4F9C66" }}>
                {specialistTypes.map((s, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-lg p-5 shadow-sm border border-[#E1E8F0]"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8"
                      style={{ background: "#1B4F9C66" }}
                    />
                    <h3 className="text-base font-semibold mb-2" style={{ color: "#1B4F9C" }}>
                      {s.role}
                    </h3>
                    <p className="text-sm text-[#3E4C59] leading-relaxed">{s.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* QUALITIES / CREDENTIAL SCORECARD */}
            <section className="mb-20" id="qualities">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161" }}>
                Qualities to look for in the best prostate cancer doctors in India
              </h2>
              <div className="grid sm:grid-cols-2 gap-5 mt-8">
                {qualities.map((q, i) => (
                  <div key={i} className="bg-white rounded-lg p-6 border border-[#E1E8F0] shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="9" r="6" stroke="#1B4F9C" strokeWidth="2" />
                        <path d="M8 14.5L6 21l6-3 6 3-2-6.5" stroke="#1B4F9C" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                      <h3 className="font-semibold" style={{ color: "#053161" }}>{q.title}</h3>
                    </div>
                    <p className="text-sm text-[#3E4C59] leading-relaxed">{q.detail}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* QUESTIONS TO ASK — CLIPBOARD CHECKLIST */}
            <section className="mb-20" id="questions">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161" }}>
                Questions to ask before choosing a prostate cancer specialist
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-6">
                Selecting a doctor should involve more than reviewing credentials. Patients may consider asking:
              </p>
              <div className="bg-white rounded-lg border border-[#E1E8F0] shadow-sm divide-y divide-[#E1E8F0]">
                {questionsToAsk.map((q, i) => (
                  <div key={i} className="flex items-start gap-4 p-5">
                    <span
                      className="mt-0.5 w-5 h-5 flex-shrink-0 rounded-sm border-2"
                      style={{ borderColor: "#053161" }}
                    />
                    <span className="text-[#1F2933]">{q}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#3E4C59] leading-relaxed mt-6">
                These discussions help patients better understand the doctor&apos;s expertise and treatment philosophy.
              </p>
            </section>

            {/* INTERNATIONAL PATIENTS — BOARDING PASS CARDS */}
            <section className="mb-20" id="international">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161" }}>
                International patients: what to consider
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-8">
                Patients traveling to India for prostate cancer treatment should evaluate additional factors beyond clinical expertise.
              </p>

              <div className="space-y-5">
                {travelConsiderations.map((t, i) => (
                  <div
                    key={i}
                    className="relative bg-white rounded-lg border border-dashed p-6 md:p-7"
                    style={{ borderColor: "#1B4F9C99" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg" style={{ color: "#1B4F9C" }}>{t.title}</h3>
                      <span
                        className="text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-full"
                        style={{ fontFamily: "'Montserrat', sans-serif", background: "#F5F8FC", color: "#053161" }}
                      >
                        0{i + 1}
                      </span>
                    </div>
                    {t.isParagraph ? (
                      <p className="text-sm text-[#3E4C59] leading-relaxed">{t.items[0]}</p>
                    ) : (
                      <>
                        {t.intro && <p className="text-sm text-[#3E4C59] mb-3">{t.intro}</p>}
                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                          {t.items.map((item, j) => (
                            <li key={j} className="text-sm text-[#1F2933] flex items-start gap-2">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#1B4F9C" }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* GLOBAL COMPARISON — CONTRAST NAVY BAND */}
            <section className="mb-20 rounded-xl p-8 md:p-10" style={{ background: "#053161" }} id="global">
              <h2 className="text-2xl md:text-3xl mb-4 text-white" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                How Indian prostate cancer specialists compare globally
              </h2>
              <p className="text-[#C9D9EC] leading-relaxed mb-6">
                India&apos;s leading prostate cancer doctors are recognized for combining advanced clinical expertise with cost-effective treatment options. Many specialists:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-6">
                {globalComparisonPoints.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#1B4F9C" }} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#C9D9EC] leading-relaxed">
                This combination attracts patients from Africa, the Middle East, Southeast Asia, Europe, and other regions seeking quality cancer care.
              </p>
            </section>

            {/* RED FLAGS — ALERT ACCENT */}
            <section className="mb-20" id="red-flags">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161" }}>
                Red flags to avoid when choosing a doctor
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-6">
                Patients should carefully evaluate providers and avoid decisions based solely on marketing claims. Consider caution when:
              </p>
              <div className="rounded-lg p-6 md:p-8 border-l-4" style={{ background: "#FBEEEB", borderColor: "#C4432B" }}>
                <ul className="space-y-3">
                  {redFlags.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-1 flex-shrink-0" aria-hidden="true">
                        <path d="M12 3L2 20h20L12 3z" stroke="#C4432B" strokeWidth="2" strokeLinejoin="round" />
                        <line x1="12" y1="9" x2="12" y2="14" stroke="#C4432B" strokeWidth="2" />
                        <circle cx="12" cy="17" r="1" fill="#C4432B" />
                      </svg>
                      <span className="text-[#7A2E1F] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#3E4C59] leading-relaxed mt-6">
                A transparent and patient-centered approach is often a strong indicator of quality care.
              </p>
            </section>

            {/* HOW EKAM HELPS — TEAL CARD */}
            <section className="mb-20" id="how-ekam-helps">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161" }}>
                How Ekam helps patients connect with leading prostate cancer specialists
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-6">
                Navigating healthcare options in another country can be challenging. Ekam helps patients identify experienced prostate cancer specialists and leading hospitals based on their medical condition, treatment goals, and budget preferences. Patients receive support with:
              </p>
              <div className="rounded-lg p-6 md:p-8" style={{ background: "#EAF1FA" }}>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {ekamSupport.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 flex-shrink-0 border-2 rounded-sm" style={{ borderColor: "#1B4F9C" }} />
                      <span className="text-[#1F2933] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#3E4C59] leading-relaxed mt-6">
                This helps simplify the treatment journey while ensuring access to experienced prostate cancer experts in India.
              </p>
            </section>

            {/* CONCLUSION */}
            <section className="mb-6" id="conclusion">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161" }}>
                Conclusion
              </h2>
              <blockquote
                className="text-xl md:text-2xl leading-snug pl-6 border-l-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontStyle: "italic", color: "#053161", borderColor: "#1B4F9C" }}
              >
                Choosing one of the best prostate cancer doctors in India involves evaluating expertise, specialization, surgical experience, hospital infrastructure, and multidisciplinary support.
              </blockquote>
              <p className="text-[#3E4C59] leading-relaxed mt-6">
                Patients who invest time in selecting the right specialist often benefit from personalized care, informed treatment decisions, and a more structured cancer management journey. With a large network of experienced uro-oncologists and advanced cancer centers, India continues to be a trusted destination for patients seeking expert prostate cancer care.
              </p>
            </section>

                  {/* MORE RELATED LINKS */}
          <section className="mt-16 mb-10">
            <div className="bg-white rounded-2xl shadow-lg border border-[#E1E8F0] p-8">
          
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-10 rounded-full bg-gradient-to-b from-[#1B4F9C] to-pink-500"></div>
          
                <h2
                  className="text-2xl md:text-3xl font-semibold"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#053161",
                  }}
                >
                  More Related Links
                </h2>
              </div>
          
              <div className="grid md:grid-cols-2 gap-5">

                <Link
                  href="/treatments/best-prostate-cancer-treatment-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Best Prostate Cancer Treatment in India
                  </span>
                </Link>
                    
                <Link
                  href="/cost-of-treatment/prostate-cancer-treatment-cost-in-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Prostate Cancer Treatment Cost in India
                  </span>
                </Link>
          
                <Link
                  href="/blog/top-10-cancer-hospitals-in-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Top 10 Cancer Hospitals in India
                  </span>
                </Link>
          
                <Link
                  href="/blog/best-cancer-hospitals-in-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Best Cancer Hospitals in India
                  </span>
                </Link>
          
                <Link
                  href="/blog/radiation-therapy-for-prostate-cancer-in-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Radiation Therapy for Prostate Cancer in India
                  </span>
                </Link>
          
                <Link
                  href="/blog/prostate-cancer-survival-rate-in-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Prostate Cancer Survival Rate in India
                  </span>
                </Link>
          
                <Link
                  href="/blog/why-choose-india-for-prostate-cancer-treatment"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Why Choose India for Prostate Cancer Treatment?
                  </span>
                </Link>
          
                <Link
                  href="/blog/hormone-therapy-for-prostate-cancer-in-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Hormone Therapy for Prostate Cancer
                  </span>
                </Link>
          
                <Link
                  href="/blog/metastatic-prostate-cancer-treatment-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Metastatic Prostate Cancer Treatment in India
                  </span>
                </Link>
          
                <Link
                  href="/blog/medical-visa-cancer-treatment-india"
                  className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300 md:col-span-2"
                >
                  <span className="font-medium text-[#053161] group-hover:text-white transition">
                    → Medical Visa for Cancer Treatment in India
                  </span>
                </Link>
          
              </div>
            </div>
          </section>

          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-3">
            <div className="sticky top-10 flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-sm border-t-4 overflow-hidden" style={{ borderColor: "#1B4F9C" }}>
                <ContactForm />
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Sidebar />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

import Script from "next/script";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Prostate Cancer Treatment Cost in India | Surgery Cost & Price Guide",
  description:
    "Learn about prostate cancer treatment cost in India, including surgery, robotic prostatectomy, radiation therapy, and hormone treatment costs. Get affordable treatment at top hospitals with experienced specialists.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.ekamcure.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Treatments",
      "item": "https://www.ekamcure.com/treatments"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Prostate Cancer Treatment Cost in India",
      "item": "https://www.ekamcure.com/treatments/prostate-cancer-treatment-cost-india"
    }
  ]
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "mainEntity": {
    "@type": "MedicalProcedure",
    "name": "Prostate Cancer Treatment Cost in India",
    "alternateName": "Prostatectomy / Robotic Prostate Surgery Cost",
    "description":
      "Detailed cost guide for prostate cancer treatment in India, covering diagnostics, surgery, robotic prostatectomy, radiation therapy, hormone therapy, and hidden costs for international patients.",
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Prostate Gland",
    "indication": [
      { "@type": "MedicalIndication", "name": "Localized Prostate Cancer" },
      { "@type": "MedicalIndication", "name": "Locally Advanced Prostate Cancer" },
      { "@type": "MedicalIndication", "name": "Metastatic Prostate Cancer" }
    ],
    "outcome": "Cost-effective treatment planning alongside elimination or control of prostate cancer",
    "preparation": "PSA blood test, MRI scan, PET CT scan, prostate biopsy, and histopathology examination.",
    "howItWorks":
      "Treatment cost is determined by the individualized treatment strategy designed by the oncology team based on stage, treatment method, hospital charges, and length of stay.",
    "followup": "Post-operative medications, follow-up consultations, and additional diagnostic testing as required."
  },
  "audience": {
    "@type": "Patient",
    "healthCondition": {
      "@type": "MedicalCondition",
      "name": "Prostate Cancer"
    }
  },
  "lastReviewed": "2024-05-20"
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Medical Facilitation for Prostate Cancer Treatment",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ekam Cure",
    "image": "https://www.ekamcure.com/_next/static/media/Ekam-logo-300x133.bd70579a.webp",
    "telephone": "+919990205353",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressCountry": "IN"
    }
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "description": "Affordable prostate cancer treatment cost packages in India including surgery, radiation, and hormone therapy."
  }
};

export default function ProstateCancerTreatmentCostIndia() {
  return (
    <>
      {/* ── Schema.org JSON-LD Scripts ── */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-medical-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageSchema) }}
      />
      <Script
        id="schema-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">

        {/* HERO SECTION */}
        <div className="relative bg-gradient-to-r from-[#053161] to-[#6796cc] text-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Prostate Cancer Treatment Cost in India
            </h1>
          </div>
        </div>

        {/* PAGE LAYOUT */}
        <div className="w-full px-4 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 order-2 lg:order-2">

              {/* TABLE OF CONTENTS */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-pink-500 mb-10">
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">In this page</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <a href="#how-much" className="toc-link">› How Much Does Treatment Cost</a>
                  <a href="#cost-breakdown" className="toc-link">› Cost Breakdown of Treatment</a>
                  <a href="#cost-factors" className="toc-link">› Factors That Affect Cost</a>
                  <a href="#robotic-cost" className="toc-link">› Robotic Surgery Cost in India</a>
                  <a href="#country-comparison" className="toc-link">› Cost Comparison by Country</a>
                  <a href="#hidden-costs" className="toc-link">› Hidden Costs to Consider</a>
                  <a href="#insurance" className="toc-link">› Insurance & International Coverage</a>
                  <a href="#reduce-cost" className="toc-link">› Tips to Reduce Treatment Costs</a>
                  <a href="#questions" className="toc-link">› Questions to Ask Before Treatment</a>
                  <a href="#conclusion" className="toc-link">› Conclusion</a>
                </div>
              </div>

              {/* INTRO PARAGRAPH */}
              <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prostate cancer treatment costs can vary significantly depending on the stage of the disease, treatment approach, hospital category, and the patient's overall health condition. For international patients, understanding the complete treatment expenses before traveling is an important part of medical planning.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  India has become a preferred destination for <a href="https://www.ekamcure.com/treatments/best-prostate-cancer-treatment-india"> <strong>prostate cancer treatment</strong></a> because it offers access to advanced surgical technologies, experienced uro-oncologists, and internationally accredited hospitals at comparatively affordable costs.
                </p>
              </div>

              {/* HOW MUCH DOES IT COST */}
              <section className="mb-16" id="how-much">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  How Much Does Indian Prostate Cancer Treatment Cost?
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    The overall cost of prostate cancer treatment in India may range from approximately USD 4,000 to USD 20,000 or more depending on the treatment plan recommended by the oncology team.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-6">Estimated Cost Range</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                          <th className="px-6 py-4 font-semibold rounded-tl-lg">Treatment Type</th>
                          <th className="px-6 py-4 font-semibold rounded-tr-lg">Estimated Cost (USD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          ["Initial Consultation & Evaluation", "$100 – $500"],
                          ["Prostate Biopsy", "$500 – $2,000"],
                          ["Radiation Therapy", "$3,000 – $8,000"],
                          ["Hormone Therapy", "$1,000 – $5,000"],
                          ["Radical Prostatectomy", "$4,000 – $10,000"],
                          ["Robotic Prostate Cancer Surgery", "$8,000 – $20,000"],
                          ["Advanced Cancer Management", "$10,000 – $25,000+"]
                        ].map(([type, cost], i, arr) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-pink-50" : "bg-white"}>
                            <td
                              className={`px-6 py-4 font-semibold text-pink-700 border-b border-pink-100 ${
                                i === arr.length - 1 ? "rounded-bl-lg" : ""
                              }`}
                            >
                              {type}
                            </td>
                            <td
                              className={`px-6 py-4 text-gray-700 border-b border-pink-100 ${
                                i === arr.length - 1 ? "rounded-br-lg" : ""
                              }`}
                            >
                              {cost}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mt-6">
                    The final cost depends on the individualized treatment strategy designed by the medical team.
                  </p>
                </div>
              </section>

              {/* COST BREAKDOWN */}
              <section className="mb-16" id="cost-breakdown">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Cost Breakdown of Prostate Cancer Treatment
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Many patients focus only on surgical expenses, but several components contribute to the overall treatment budget.
                  </p>
                </div>

                <div className="space-y-6">

                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Diagnostic Investigations</h3>
                    <p className="text-gray-700 mb-4">Before treatment begins, patients may require:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {[
                        "PSA Blood Test",
                        "MRI Scan",
                        "PET CT Scan",
                        "Prostate Biopsy",
                        "Histopathology Examination"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700">
                      Advanced diagnostic testing may increase the total treatment expenditure but helps doctors create a more precise treatment plan.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Charges</h3>
                    <p className="text-gray-700 mb-4">Hospital-related costs may include:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {[
                        "Admission fees",
                        "Operation theatre charges",
                        "Nursing care",
                        "ICU support (if required)",
                        "Room category selection"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700">
                      Private suites and premium room categories generally increase overall expenses.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Surgeon and Specialist Fees</h3>
                    <p className="text-gray-700 mb-4">Treatment costs also depend on:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {[
                        "Uro-oncologist experience",
                        "Surgical expertise",
                        "Robotic surgery specialization",
                        "Multidisciplinary cancer team involvement"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700">
                      Experienced specialists often command higher professional fees.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Medication Costs</h3>
                    <p className="text-gray-700 mb-4">Patients may require:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {[
                        "Pain management medicines",
                        "Antibiotics",
                        "Hormonal medications",
                        "Post-operative recovery drugs"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700">
                      The duration and type of medication influence the total treatment budget.
                    </p>
                  </div>

                </div>
              </section>

              {/* FACTORS AFFECTING COST */}
              <section className="mb-16" id="cost-factors">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Factors That Affect Prostate Cancer Treatment Cost in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Cancer Stage</h3>
                  <p className="text-gray-700">
                    Patients diagnosed in early stages usually require less extensive treatment compared to advanced or metastatic prostate cancer.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Treatment Method</h3>
                  <p className="text-gray-700 mb-4">Different treatment options have different cost structures.</p>
                  <p className="text-gray-700 mb-4">For example:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Active surveillance generally costs less.",
                      "Radiation therapy requires multiple treatment sessions.",
                      "Robotic surgery involves advanced technology and specialized equipment."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Length of Hospital Stay</h3>
                  <p className="text-gray-700">
                    A longer hospitalization period may increase room charges, nursing costs, and supportive care expenses.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Medical Complications</h3>
                  <p className="text-gray-700">
                    Additional investigations, ICU care, or management of treatment-related complications may impact the overall budget.
                  </p>
                </div>
              </section>

              {/* ROBOTIC SURGERY COST */}
              <section className="mb-16" id="robotic-cost">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Robotic Prostate Cancer Surgery Cost in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Robotic-assisted prostate surgery has become increasingly popular due to its precision and minimally invasive approach.
                  </p>
                  <p className="text-gray-700 mb-4">
                    The cost of robotic prostate cancer surgery is generally higher than conventional surgery because it involves:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {[
                      "Advanced robotic systems",
                      "Specialized surgical expertise",
                      "Enhanced surgical planning",
                      "High-end operating room infrastructure"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">
                    However, many patients choose robotic surgery because of shorter hospital stays, reduced blood loss, and faster recovery.
                  </p>
                </div>
              </section>

              {/* COUNTRY COMPARISON */}
              <section className="mb-16" id="country-comparison">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Prostate Cancer Treatment Cost Comparison by Country
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                          <th className="px-6 py-4 font-semibold rounded-tl-lg">Country</th>
                          <th className="px-6 py-4 font-semibold rounded-tr-lg">Approximate Cost (USD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-pink-700 border-b border-pink-100">India</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$4,000 – $20,000</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">USA</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$30,000 – $100,000+</td>
                        </tr>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-pink-100">UK</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$20,000 – $50,000</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 rounded-bl-lg">Australia</td>
                          <td className="px-6 py-4 text-gray-700 rounded-br-lg">$20,000 – $50,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mt-6">
                    This significant cost difference is one of the primary reasons why international patients choose India for prostate cancer treatment.
                  </p>
                </div>
              </section>

              {/* HIDDEN COSTS */}
              <section className="mb-16" id="hidden-costs">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Hidden Costs Patients Should Consider
                </h2>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 mb-4">When planning treatment abroad, patients should also budget for:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {[
                      "Medical visa expenses",
                      "International flights",
                      "Local transportation",
                      "Accommodation for attendants",
                      "Follow-up consultations",
                      "Additional diagnostic testing"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">
                    A complete treatment estimate helps avoid unexpected expenses.
                  </p>
                </div>
              </section>

              {/* INSURANCE */}
              <section className="mb-16" id="insurance">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Insurance and International Patient Coverage
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 mb-4">
                    Some international insurance providers may partially cover cancer treatment expenses in India.
                  </p>
                  <p className="text-gray-700 mb-4">Patients should verify:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {[
                      "Network hospital eligibility",
                      "Pre-authorization requirements",
                      "Coverage limitations",
                      "Reimbursement procedures"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">
                    Discussing these details with both the insurer and hospital before treatment can help streamline the process.
                  </p>
                </div>
              </section>

              {/* TIPS TO REDUCE COST */}
              <section className="mb-16" id="reduce-cost">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Tips to Reduce Prostate Cancer Treatment Costs
                </h2>

                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 mb-4">Patients can manage expenses more effectively by:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Seeking treatment at specialized cancer centers",
                      "Requesting detailed cost estimates in advance",
                      "Comparing treatment packages",
                      "Choosing hospitals that offer international patient assistance",
                      "Planning accommodation and travel early"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* QUESTIONS TO ASK */}
              <section className="mb-16" id="questions">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Questions to Ask Before Starting Treatment
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 mb-4">Before finalizing treatment, patients should ask:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {[
                      "What is included in the treatment package?",
                      "Are diagnostic tests included?",
                      "Does the estimate cover surgeon fees?",
                      "Are post-operative medications included?",
                      "What additional costs may arise during treatment?"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">
                    These questions help patients make informed financial decisions.
                  </p>
                </div>
              </section>

              {/* CONCLUSION */}
              <section className="mb-16" id="conclusion">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Conclusion
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Understanding the prostate cancer treatment cost in India is essential for effective treatment planning. The total expense depends on multiple factors, including cancer stage, treatment method, hospital selection, and recovery requirements. With advanced medical technology, experienced specialists, and comparatively affordable healthcare services, India continues to be a preferred destination for patients seeking quality prostate cancer treatment while managing healthcare costs efficiently.
                  </p>
                </div>
              </section>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-3 order-1">
              <div className="sticky top-25 flex flex-col gap-2 bg-gray-100 rounded-xl shadow">
                <ContactForm />
                <Sidebar />
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}

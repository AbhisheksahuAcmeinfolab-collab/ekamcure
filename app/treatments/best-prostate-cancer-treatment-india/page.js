import Script from "next/script";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Best Prostate Cancer Treatment in India | Top Hospitals, Doctors & Cost",
  description:
    "Explore the best prostate cancer treatment in India with top hospitals, expert doctors, advanced robotic surgery, and affordable cost. Learn symptoms, stages, treatment options & book consultation.",
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
      "name": "Prostate Cancer Treatment in India",
      "item": "https://www.ekamcure.com/treatments/prostate-cancer-treatment-india"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it safe to have surgery in India? What if something goes wrong?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it’s safe. Max Healthcare is JCI-accredited (same standard as US hospitals). Infection rates are actually lower than US hospitals because protocols are strict and compliance is monitored. If complications arise, they’re handled immediately by the same surgeon with direct access via WhatsApp."
      }
    },
    {
      "@type": "Question",
      "name": "Can I bring my wife/family member with me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We arrange accommodation for family members. Many patients say their spouse staying with them during recovery made a huge difference in their emotional wellbeing and rehabilitation."
      }
    },
    {
      "@type": "Question",
      "name": "How long is recovery before I can work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Depends on the treatment: Robotic surgery takes 4-6 weeks before desk work and 8 weeks before heavy lifting. Radiation (EBRT) requires no recovery time with 15-20 outpatient visits over 8 weeks. Brachytherapy takes 1-2 weeks before normal activity."
      }
    },
    {
      "@type": "Question",
      "name": "What about follow-up care after I return home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We coordinate with local oncologists in Zimbabwe, Botswana, Fiji, or Mauritius. Standard post-treatment protocol includes PSA tests every 3 months for Year 1, every 6 months for Years 2-3, annual imaging, and direct video consultation with your treating surgeon at no extra charge."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the success rate for prostate cancer treatment in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early-stage (Stage 1-2) surgery has 95%+ 5-year cancer-free survival. Localized disease radiation has 90%+ 10-year disease control. Advanced disease with combined therapy achieves 70-80% 5-year survival, matching or exceeding Western centers."
      }
    }
  ]
};

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "mainEntity": {
    "@type": "MedicalProcedure",
    "name": "Prostate Cancer Treatment",
    "alternateName": "Prostatectomy / Robotic Prostate Surgery",
    "description": "Comprehensive treatment for prostate cancer including active surveillance, radiation therapy, robotic prostatectomy, hormone therapy, and chemotherapy for international patients in India.",
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Prostate Gland",
    "indication": [
      { "@type": "MedicalIndication", "name": "Localized Prostate Cancer" },
      { "@type": "MedicalIndication", "name": "Locally Advanced Prostate Cancer" },
      { "@type": "MedicalIndication", "name": "Metastatic Prostate Cancer" }
    ],
    "outcome": "Elimination or control of prostate cancer with preservation of quality of life",
    "preparation": "PSA blood test, Digital Rectal Examination, MRI/Ultrasound imaging, and biopsy review.",
    "howItWorks": "Treatment is customized based on cancer stage, Gleason score, and patient preferences, ranging from active surveillance to robotic surgery and radiation.",
    "followup": "Regular PSA monitoring, imaging studies, and ongoing telemedicine follow-up visits with treating surgeons."
  },
  "audience": {
    "@type": "Patient",
    "healthCondition": {
      "@type": "MedicalCondition",
      "name": "Prostate Cancer"
    }
  },
  "lastReviewed": "2026-04-15"
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
    "description": "Affordable prostate cancer treatment packages in India including robotic surgery, radiation, and international patient support."
  }
};

export default function ProstateCancerTreatmentIndia() {
  return (
    <>
      {/* ── Schema.org JSON-LD Scripts ── */}
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              Best Prostate Cancer Treatment in India
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
                  <a href="#understanding" className="toc-link">› Understanding Prostate Cancer</a>
                  <a href="#detection" className="toc-link">› Early Detection & Diagnosis</a>
                  <a href="#treatment-options" className="toc-link">› Treatment Options in India</a>
                  <a href="#robotic" className="toc-link">› Robotic Surgery Expertise</a>
                  <a href="#cost" className="toc-link">› Cost Comparison: India vs Region</a>
                  <a href="#outcomes" className="toc-link">› World-Class Outcomes</a>
                  <a href="#specialists" className="toc-link">› Top Specialists & Surgeons</a>
                  <a href="#ekam-advantage" className="toc-link">› The Ekam Health Advantage</a>
                  <a href="#timeline" className="toc-link">› Real Patient Journey</a>
                  <a href="#faq" className="toc-link">› Frequently Asked Questions</a>
                  <a href="#consultation" className="toc-link">› Schedule Free Consultation</a>
                  <a href="#conclusion" className="toc-link">› Conclusion</a>
                </div>
              </div>

              {/* INTRO PARAGRAPH */}
              <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you’ve been diagnosed with prostate cancer and you’re from Zimbabwe, Botswana, Fiji, or anywhere across Africa and the Pacific, you’re probably weighing your options right now. The anxiety is real — you want the best doctors, the most advanced technology, and a treatment plan you can trust. You also need it to be affordable, accessible, and without the long waiting lists.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Here’s what many international patients don’t know: India has become the world’s most trusted destination for prostate cancer treatment. Not because it’s cheap (though it is), but because the outcomes are exceptional. At{" "}
                  <Link 
                    href="https://www.ekamcure.com/" 
                    className="text-pink-600 hover:underline font-semibold"
                  >
                    Ekam Health Services
                  </Link>
                  , we’ve helped over 200 prostate cancer patients from your region successfully complete treatment and return home cancer-free.
                </p>
              </div>

              {/* UNDERSTANDING PROSTATE CANCER */}
              <section className="mb-16" id="understanding">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  What Is Prostate Cancer?
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The prostate is a walnut-sized gland in men that produces seminal fluid. Prostate cancer develops when malignant cells grow in this gland. In early stages, it often has no symptoms. That’s why screening is critical — especially if you’re over 50 or have a family history.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Early Detection Changes Everything</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Patients who catch prostate cancer in Stage 1 or 2 have survival rates above 95%. Patients diagnosed in Stage 3 or 4 still have excellent options in India, but early detection absolutely changes the trajectory of treatment.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Many international patients tell us they were diagnosed late in their home countries because screening programs are limited, PSA tests aren’t routine, urologists trained in prostate cancer management are scarce, and cost barriers prevent follow-up care. In India, prostate cancer diagnosis and staging happen within 2-3 weeks. You’re not waiting months. This speed matters.
                  </p>
                </div>
              </section>

              {/* DETECTION */}
              <section className="mb-16" id="detection">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Early Detection & Screening
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Routine screenings including PSA blood tests and Digital Rectal Examinations (DRE) are crucial for detecting prostate abnormalities early before symptoms appear. Consulting a specialist early ensures access to minimally invasive and highly successful treatment options.
                  </p>
                </div>
              </section>

              {/* TREATMENT OPTIONS */}
              <section className="mb-16" id="treatment-options">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Prostate Cancer Treatment Options in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India’s top cancer centers offer all five major treatment approaches. Your urologist will recommend based on your age, overall health, cancer stage (1-4), Gleason score, risk of spread, and your quality-of-life priorities.
                  </p>
                </div>

                <div className="space-y-6">

                  {/* 1. ACTIVE SURVEILLANCE */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      1. Active Surveillance (Watchful Waiting)
                    </h3>
                    <p className="text-sm font-semibold text-pink-600 mb-3">Best for: Low-risk, early-stage cancers in older men</p>
                    <p className="text-gray-700 mb-3">
                      If your cancer is slow-growing (Gleason score 6 or lower), your doctor may recommend monitoring rather than immediate treatment. You’ll have PSA tests and digital rectal exams every 3-6 months.
                    </p>
                    <div className="mb-3 text-gray-700 font-medium">Advantages:</div>
                    <ul className="space-y-1 text-gray-700 mb-3">
                      <li className="flex items-start gap-2"><span>✓ No surgery, no side effects</span></li>
                      <li className="flex items-start gap-2"><span>✓ Avoids unnecessary treatment in 30% of cases</span></li>
                      <li className="flex items-start gap-2"><span>✓ Peace of mind knowing your cancer is being tracked</span></li>
                    </ul>
                    <p className="text-gray-700 text-sm italic">
                      Timeline in India: 2-3 PSA tests + imaging over 6 months = ₹80,000-120,000 ($960-1,440 USD)
                    </p>
                  </div>

                  {/* 2. RADIATION THERAPY */}
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      2. Radiation Therapy
                    </h3>
                    <p className="text-sm font-semibold text-pink-600 mb-3">Best for: Localized cancers (Stage 1-2)</p>
                    <p className="text-gray-700 mb-3">
                      India’s top centers have state-of-the-art radiation equipment across two main types:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 mb-3 space-y-1">
                      <li><strong>External Beam Radiation Therapy (EBRT):</strong> Targeted radiation directed at the prostate for 8-9 weeks (15-20 painless outpatient sessions).</li>
                      <li><strong>Brachytherapy (Internal Radiation):</strong> Radioactive seeds implanted directly in the prostate in a single-day procedure with faster recovery.</li>
                    </ul>
                    <div className="mb-2 text-gray-700 font-medium">Advantages:</div>
                    <ul className="space-y-1 text-gray-700 mb-3">
                      <li className="flex items-start gap-2"><span>✓ Preserves erectile function (70-80% of patients maintain potency)</span></li>
                      <li className="flex items-start gap-2"><span>✓ No invasive surgery</span></li>
                      <li className="flex items-start gap-2"><span>✓ Excellent long-term outcomes (90%+ cancer control at 5 years)</span></li>
                    </ul>
                    <p className="text-gray-700 text-sm mb-3">
                      Cost in India: ₹450,000-650,000 ($5,400-7,800 USD) for full course.
                    </p>
                    <div className="bg-blue-50/70 p-4 rounded-lg border-l-4 border-blue-500 text-gray-700 text-sm italic">
                      “I was concerned about losing sexual function... The brachytherapy was performed in one day at Max Healthcare. Recovery was smooth — I felt back to normal within a week. Five years later, my PSA remains undetectable with zero complications.” — Patient from Botswana
                    </div>
                  </div>

                  {/* 3. PROSTATE SURGERY */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      3. Prostate Surgery (Radical Prostatectomy)
                    </h3>
                    <p className="text-sm font-semibold text-pink-600 mb-3">Best for: Aggressive cancers (high Gleason score) in men under 70</p>
                    <p className="text-gray-700 mb-3">
                      Surgery completely removes the prostate gland, seminal vesicles, and surrounding lymph nodes through robotic-assisted laparoscopic surgery (Da Vinci), open radical prostatectomy, or laparoscopic surgery.
                    </p>
                    <div className="mb-2 text-gray-700 font-medium">Advantages:</div>
                    <ul className="space-y-1 text-gray-700 mb-3">
                      <li className="flex items-start gap-2"><span>✓ Definitive cancer removal</span></li>
                      <li className="flex items-start gap-2"><span>✓ Excellent for aggressive cancers</span></li>
                    </ul>
                    <p className="text-gray-700 text-sm mb-3">
                      Cost in India: ₹800,000-1,200,000 ($9,600-14,400 USD).
                    </p>
                    <div className="bg-white/80 p-4 rounded-lg border-l-4 border-pink-500 text-gray-700 text-sm italic">
                      “The robotic surgery took 2.5 hours at Max Healthcare. I was discharged the next morning. Two weeks later I was back at full work capacity... Best of all — no incontinence, no erectile issues, and the cost was 60% less than South Africa.” — Patient from Zimbabwe
                    </div>
                  </div>

                  {/* 4. HORMONE THERAPY */}
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      4. Hormone Therapy (Androgen Deprivation Therapy)
                    </h3>
                    <p className="text-sm font-semibold text-pink-600 mb-3">Best for: Advanced cancers or high-risk cases pre-surgery/radiation</p>
                    <p className="text-gray-700 mb-3">
                      Prostate cancer cells feed on testosterone. Hormone therapy (using LHRH agonists or antiandrogens) blocks production over 3-6 months or ongoing for advanced disease to dramatically shrink tumors.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Cost in India: ₹30,000-50,000/month ($360-600 USD).
                    </p>
                  </div>

                  {/* 5. CHEMOTHERAPY */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      5. Chemotherapy
                    </h3>
                    <p className="text-sm font-semibold text-pink-600 mb-3">Best for: Metastatic (Stage 4) prostate cancer</p>
                    <p className="text-gray-700 mb-3">
                      Targeting distant cancer cells using regimens like Docetaxel or Cabazitaxel every 3 weeks for 6-8 cycles to extend life and manage bone metastases.
                    </p>
                    <p className="text-gray-700 text-sm">
                      Cost in India: ₹500,000-1,200,000 for full course ($6,000-14,400 USD).
                    </p>
                  </div>

                </div>
              </section>

              {/* ROBOTIC SURGERY */}
              <section className="mb-16" id="robotic">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Advanced & Robotic Prostate Cancer Surgery in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Robotic-Assisted Laparoscopic Surgery (Da Vinci Xi)</h3>
                  <p className="text-gray-700 mb-4">
                    Robotic prostatectomy uses state-of-the-art robotic-assisted consoles with 10x magnification, giving surgeons unmatched precision for nerve preservation and potency maintenance.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Reduced pain and minimal blood loss",
                      "Shorter 1-night hospital stay",
                      "Quicker recovery time (4-6 weeks)",
                      "Lower risk of complications and incontinence"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* COST COMPARISON */}
              <section className="mb-16" id="cost">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Prostate Cancer Treatment Cost Comparison: India vs. Your Region
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Compare the cost of{" "}
                  <Link 
                    href="https://www.ekamcure.com/cost-of-treatment/prostate-cancer-treatment-cost-in-india" 
                    className="text-pink-600 hover:underline font-semibold"
                  >
                    prostate cancer treatment in India
                  </Link>
                  {" "}with treatment expenses in other countries and understand the factors that can affect the overall cost, including the treatment approach, cancer stage, hospital, and required procedures.
                </p>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-4">Robotic Prostatectomy Cost</h3>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                          <th className="px-6 py-4 font-semibold rounded-tl-lg">Region</th>
                          <th className="px-6 py-4 font-semibold">Cost (USD)</th>
                          <th className="px-6 py-4 font-semibold rounded-tr-lg">Includes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-pink-700 border-b border-pink-100">India</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$9,600 – $14,400</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">Surgery, anesthesia, 3-day hospital stay, post-op imaging, pathology</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">South Africa</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$11,000 – $16,500</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">Surgical fee only; hospital/imaging/pathology billed separately</td>
                        </tr>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-pink-100">USA</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$35,000 – $50,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">Surgery, hospital, anesthesia, minimal post-op care</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-pink-700 rounded-bl-lg">Ekam Health Advantage</td>
                          <td className="px-6 py-4 text-gray-700">Save $2,000–$5,000 after flights + accommodation</td>
                          <td className="px-6 py-4 text-gray-700 rounded-br-lg">Complete coordinated care, translator, family accommodation included</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-xl font-bold text-pink-600 mb-4">Radiation Therapy (EBRT Full Course)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                          <th className="px-6 py-4 font-semibold rounded-tl-lg">Region</th>
                          <th className="px-6 py-4 font-semibold">Cost (USD)</th>
                          <th className="px-6 py-4 font-semibold rounded-tr-lg">Includes</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-pink-700 border-b border-pink-100">India</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$5,400 – $7,800</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">Full 8-week course, all imaging, 3D planning</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">South Africa</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$6,500 – $9,800</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">Radiation only; imaging separate</td>
                        </tr>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">USA</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$25,000 – $35,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">Radiation + planning + follow-up</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-pink-700 rounded-bl-lg">Ekam Health Advantage</td>
                          <td className="px-6 py-4 text-gray-700">Save $12,000–$22,000 net</td>
                          <td className="px-6 py-4 text-gray-700 rounded-br-lg">Accommodation + coordination included</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* WORLD-CLASS OUTCOMES */}
              <section className="mb-16" id="outcomes">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Why India’s Prostate Cancer Outcomes Are World-Class
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">1. Massive Surgical Volume</h3>
                  <p className="text-gray-700 mb-4">
                    India performs 250,000+ cancer surgeries annually, with Max Healthcare alone executing 3,000+ cancer surgeries per year. High procedural volume means your surgeon has performed your exact procedure 500+ times, ensuring muscle memory and expert outcomes.
                  </p>

                  <h3 className="text-xl font-bold text-pink-600 mb-3">2. Cutting-Edge Technology</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-3"><span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span><span>Da Vinci Xi robotic systems at major centers</span></li>
                    <li className="flex items-start gap-3"><span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span><span>High-field 3.0T MRI for precise staging</span></li>
                    <li className="flex items-start gap-3"><span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span><span>Genomic testing & real-time frozen section analysis</span></li>
                    <li className="flex items-start gap-3"><span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span><span>Intraoperative neuromonitoring to preserve nerve function</span></li>
                  </ul>
                </div>
              </section>

              {/* SPECIALISTS */}
              <section className="mb-16" id="specialists">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Specialized Prostate & Uro-Oncology Surgeons
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      name: "Dr. Prof. Rajesh Ahlawat",
                      role: "Group Chairman - Urology & Chairman - Centre of Excellence of Prostate & Urological Cancers and Male Health, Max Healthcare",
                      desc: "MCh (Urology) from AIIMS Delhi, MS, MNAMS. 41+ years in urology and uro-oncology with 5,000+ urological cancer surgeries performed.",
                      img: "/doctor/dr-vipin.png"
                    },
                    {
                      name: "Dr. Pankaj Wadhwa",
                      role: "Senior Director - Uro-Oncology, Robotic Surgery & Endourology, Max Healthcare",
                      desc: "MBBS (Delhi University), MS, M.Ch (Urology) from PGI Chandigarh, FSSR (Robotic Surgery) from Roswell Park Cancer Institute, Buffalo NY. 30+ years experience with 4,000+ robotic prostatectomies.",
                      img: "/doctor/dr-devendra.png"
                    }
                  ].map((doc, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <img
                          src={doc.img}
                          alt={`${doc.name} - ${doc.role}`}
                          className="w-40 h-40 rounded-xl object-cover shadow-md"
                        />
                        <div>
                          <h3 className="text-2xl font-bold text-pink-600 mb-1">{doc.name}</h3>
                          <p className="text-gray-500 font-medium mb-3">{doc.role}</p>
                          <p className="text-gray-700">{doc.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* EKAM HEALTH ADVANTAGE */}
              <section className="mb-16" id="ekam-advantage">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  The Ekam Health Services Advantage
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-pink-600 mb-2">Before You Arrive</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Free WhatsApp or video consultation with Dr. Prof. Rajesh Ahlawat or Dr. Pankaj Wadhwa</li>
                      <li>Review of pathology reports and imaging before arrival</li>
                      <li>Pre-treatment blood work, cardiac clearance, and confirmed treatment dates 4 weeks in advance</li>
                      <li>Complete flight bookings, New Delhi hotel arrangements, airport pickup, and family accommodation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-pink-600 mb-2">During Treatment</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Dedicated coordinator staying with you throughout treatment</li>
                      <li>Professional translators available for Shona, Setswana, Fijian, and English</li>
                      <li>Daily WhatsApp updates sent to family members back home</li>
                      <li>Complete pharmacy, test scheduling, and discharge planning coordination</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-pink-600 mb-2">After Treatment</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      <li>Complete medical records, discharge summary, pathology slides, and surgical reports</li>
                      <li>Ongoing specialist access via video consultations at no extra charge</li>
                      <li>Seamless connection with local oncologists in your home country for ongoing care</li>
                      <li>24/7 WhatsApp emergency support post-treatment</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* REAL PATIENT TIMELINE */}
              <section className="mb-16" id="timeline">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Real Patient Timeline: A Botswana Patient’s Journey
                </h2>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 space-y-4">
                  <p className="text-gray-700"><strong>Week 1:</strong> WhatsApp consultation with Dr. Prof. Rajesh Ahlawat, medical record review, and imaging analysis.</p>
                  <p className="text-gray-700"><strong>Week 2:</strong> Arrive in New Delhi, complete pre-treatment blood work and cardiac clearance.</p>
                  <p className="text-gray-700"><strong>Week 3:</strong> Brachytherapy or robotic surgery performed at Max Healthcare with 1-night hospital stay.</p>
                  <p className="text-gray-700"><strong>Week 4:</strong> Return home with complete discharge package and follow-up plan.</p>
                  <p className="text-gray-700"><strong>Month 2-6:</strong> Regular PSA monitoring and telemedicine check-ins with your surgeon.</p>
                  <p className="text-gray-700"><strong>Year 1+:</strong> Ongoing surveillance with undetectable PSA and zero complications.</p>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-16" id="faq">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Common Questions About Prostate Cancer Treatment in India
                </h2>

                <div className="space-y-6 mt-6">
                  {[
                    {
                      q: "Is it safe to have surgery in India? What if something goes wrong?",
                      a: "Yes, it’s safe. Max Healthcare is JCI-accredited (same standard as US hospitals). Infection rates are actually lower than US hospitals because protocols are strict and compliance is monitored. If complications arise, they’re handled immediately by the same surgeon with direct access via WhatsApp."
                    },
                    {
                      q: "Can I bring my wife/family member with me?",
                      a: "Absolutely. We arrange accommodation for family members. Many patients say their spouse staying with them during recovery made a huge difference in their emotional wellbeing and rehabilitation."
                    },
                    {
                      q: "How long is recovery before I can work?",
                      a: "Depends on the treatment: Robotic surgery takes 4-6 weeks before desk work and 8 weeks before heavy lifting. Radiation (EBRT) requires no recovery time with 15-20 outpatient visits over 8 weeks. Brachytherapy takes 1-2 weeks before normal activity."
                    },
                    {
                      q: "What about follow-up care after I return home?",
                      a: "We coordinate with local oncologists in Zimbabwe, Botswana, Fiji, or Mauritius. Standard post-treatment protocol includes PSA tests every 3 months for Year 1, every 6 months for Years 2-3, annual imaging, and direct video consultation with your treating surgeon at no extra charge."
                    },
                    {
                      q: "What’s the success rate for prostate cancer treatment in India?",
                      a: "Early-stage (Stage 1-2) surgery has 95%+ 5-year cancer-free survival. Localized disease radiation has 90%+ 10-year disease control. Advanced disease with combined therapy achieves 70-80% 5-year survival, matching or exceeding Western centers."
                    }
                  ].map((faq, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-lg p-8">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.q}</h3>
                      <p className="text-gray-700">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* CONSULTATION */}
              <section className="mb-16" id="consultation">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Next Steps: Schedule Your Free Consultation
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 space-y-4">
                  <p className="text-gray-700 font-semibold">You don’t have to figure this out alone. Here’s what happens:</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li><strong>Send your medical info:</strong> Pathology report + PSA number via WhatsApp</li>
                    <li><strong>Book your consultation:</strong> Free 20-minute video call with Dr. Prof. Rajesh Ahlawat or Dr. Pankaj Wadhwa</li>
                    <li><strong>Get personalized plan:</strong> Treatment recommendation + detailed cost estimate + timeline</li>
                    <li><strong>Decide at your pace:</strong> No pressure, no obligation, full transparency</li>
                  </ul>
                  <div className="bg-pink-50 p-6 rounded-xl border border-pink-200 mt-4 text-gray-700">
                    <p className="font-bold text-pink-700 mb-2">Contact Ekam Health Services:</p>
                    
                    <p>
                      📱 WhatsApp:{" "}
                      <a 
                        href="https://wa.me/919990205353" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:underline font-semibold"
                      >
                        +91-9990205353
                      </a>
                    </p>
                  
                    <p>
                      ✉️ Email:{" "}
                      <a 
                        href="mailto:info@ekamcure.com"
                        className="text-pink-600 hover:underline font-semibold"
                      >
                        info@ekamcure.com
                      </a>
                    </p>
                  
                    <p>🕒 Hours: Monday-Friday 9 AM - 6 PM IST (response within 2 hours)</p>
                    <p>🌐 Languages: English, Shona, Setswana, Fijian</p>
                  </div>
                </div>
              </section>

              {/* CONCLUSION */}
              <section className="mb-16" id="conclusion">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Conclusion
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    India has become the world’s most trusted destination for prostate cancer treatment, offering world-class expertise, advanced robotic surgery, and comprehensive international patient support at a fraction of Western costs. Take your first step today by reaching out to our specialists.
                  </p>
                </div>

                {/* MORE RELATED LINKS */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-2xl font-bold text-[#053161] mb-6 border-l-4 border-pink-500 pl-4">
                    More Related Links
                  </h3>
                
                  <div className="grid md:grid-cols-2 gap-4">
                    <Link
                      href="/cost-of-treatment/prostate-cancer-treatment-cost-in-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Prostate Cancer Treatment Cost in India
                      </span>
                    </Link>
                
                    <Link
                      href="/doctors/best-prostate-cancer-doctors-in-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Best Prostate Cancer Doctors in India
                      </span>
                    </Link>
                
                    <Link
                      href="/blog/top-10-cancer-hospitals-in-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Top 10 Cancer Hospitals in India
                      </span>
                    </Link>
                
                    <Link
                      href="/blog/best-cancer-hospitals-in-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Best Cancer Hospitals in India
                      </span>
                    </Link>
                
                    <Link
                      href="/blog/radiation-therapy-for-prostate-cancer-in-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Radiation Therapy for Prostate Cancer in India
                      </span>
                    </Link>
                
                    <Link
                      href="/blog/prostate-cancer-survival-rate-in-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Prostate Cancer Survival Rate in India
                      </span>
                    </Link>
                
                    <Link
                      href="/blog/why-choose-india-for-prostate-cancer-treatment"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Why Choose India for Prostate Cancer Treatment?
                      </span>
                    </Link>
                
                    <Link
                      href="/blog/hormone-therapy-for-prostate-cancer-in-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Hormone Therapy for Prostate Cancer
                      </span>
                    </Link>
                
                    <Link
                      href="/blog/metastatic-prostate-cancer-treatment-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Metastatic Prostate Cancer Treatment in India
                      </span>
                    </Link>
                
                    <Link
                      href="/blog/medical-visa-cancer-treatment-india"
                      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition p-4 border border-gray-200 hover:border-pink-500"
                    >
                      <span className="font-semibold text-gray-800">
                        Medical Visa for Cancer Treatment in India
                      </span>
                    </Link>
                  </div>
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

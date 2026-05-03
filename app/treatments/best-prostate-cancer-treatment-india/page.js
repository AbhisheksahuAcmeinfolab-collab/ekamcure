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
      "name": "How to detect prostate cancer early?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early detection of prostate cancer is possible through regular screening and awareness of symptoms. The most common method is the PSA blood test, which measures prostate-specific antigen levels. Along with this, doctors may recommend a digital rectal examination and imaging tests. If any abnormalities are found, a biopsy may be performed to confirm the presence of cancer."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost of prostate cancer treatment in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The cost of prostate cancer treatment in India varies depending on multiple factors such as the stage of cancer, type of treatment required, hospital choice, and doctor's expertise. India is known for offering affordable treatment compared to many other countries while maintaining high-quality care standards."
      }
    },
    {
      "@type": "Question",
      "name": "Which is the best hospital for prostate cancer treatment in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India has several reputed hospitals specializing in cancer care and prostate cancer treatment. Top hospitals are generally equipped with advanced technologies such as robotic surgery systems, modern radiation therapy units, and multidisciplinary oncology teams that provide comprehensive care."
      }
    },
    {
      "@type": "Question",
      "name": "What is the success rate of prostate cancer treatment in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The success rate of prostate cancer treatment in India largely depends on the stage at which the disease is diagnosed. Early-stage prostate cancer has a significantly higher success rate. With advanced treatment methods such as robotic surgery, precision radiation therapy, and targeted treatments, many patients achieve positive outcomes."
      }
    },
    {
      "@type": "Question",
      "name": "Who is the best oncologist for prostate cancer in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "India has many highly experienced oncologists and urologists specializing in prostate cancer treatment. It is always recommended to consult a qualified specialist who is experienced in both surgical and non-surgical treatment options."
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
    "description": "Comprehensive treatment for prostate cancer including surgery, radiation therapy, hormone therapy, chemotherapy, immunotherapy, and robotic prostatectomy in India.",
    "procedureType": "SurgicalProcedure",
    "bodyLocation": "Prostate Gland",
    "indication": [
      { "@type": "MedicalIndication", "name": "Localized Prostate Cancer" },
      { "@type": "MedicalIndication", "name": "Locally Advanced Prostate Cancer" },
      { "@type": "MedicalIndication", "name": "Metastatic Prostate Cancer" }
    ],
    "outcome": "Elimination or control of prostate cancer with preservation of quality of life",
    "preparation": "PSA blood test, Digital Rectal Examination, MRI/Ultrasound imaging, and biopsy.",
    "howItWorks": "Treatment is chosen based on cancer stage and may include robotic prostatectomy, radiation therapy, hormone therapy, or a combination of modalities.",
    "followup": "Regular PSA monitoring, imaging studies, and oncology follow-up visits to assess treatment response and detect recurrence."
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
    "description": "Affordable prostate cancer treatment packages in India including surgery, radiation, and hormone therapy."
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
                  <a href="#detection" className="toc-link">› How to Detect Prostate Cancer Early</a>
                  <a href="#stages" className="toc-link">› Stages of Prostate Cancer</a>
                  <a href="#treatment-options" className="toc-link">› Best Treatment Options in India</a>
                  <a href="#robotic" className="toc-link">› Advanced & Robotic Surgery</a>
                  <a href="#best-hospital" className="toc-link">› Choosing the Best Hospital</a>
                  <a href="#specialists" className="toc-link">› Top Prostate Cancer Specialists</a>
                  <a href="#doctors" className="toc-link">› Prostate Cancer Specialist in India</a>
                  <a href="#cost" className="toc-link">› Cost of Treatment in India</a>
                  <a href="#survival" className="toc-link">› Survival Rate & Success</a>
                  <a href="#international" className="toc-link">› Why International Patients Choose India</a>
                  <a href="#technology" className="toc-link">› Latest Technology</a>
                  <a href="#faq" className="toc-link">› Frequently Asked Questions</a>
                  <a href="#consultation" className="toc-link">› Get Expert Consultation</a>
                  <a href="#conclusion" className="toc-link">› Conclusion</a>
                </div>
              </div>

              {/* INTRO PARAGRAPH */}
              <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Prostate cancer is one of the most commonly diagnosed cancers among men, especially as they age. With advancements in medical science and increasing awareness, early detection and timely treatment have significantly improved patient outcomes. India has emerged as a trusted destination for prostate cancer treatment, offering advanced technologies, experienced specialists, and cost-effective care.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This comprehensive guide will help you understand prostate cancer, its symptoms, detection methods, and why India is considered a leading choice for treatment.
                </p>
              </div>

              {/* UNDERSTANDING PROSTATE CANCER */}
              <section className="mb-16" id="understanding">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Understanding Prostate Cancer
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">What is Prostate Cancer?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Prostate cancer develops in the prostate gland, a small organ located below the bladder in men. This gland plays a key role in producing seminal fluid. In many cases, prostate cancer grows slowly and may remain confined to the gland. However, certain types can be aggressive and spread quickly if not treated on time.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Understanding the nature of this disease is the first step toward effective treatment. With proper diagnosis and medical guidance, many patients manage the condition successfully and maintain a good quality of life.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Common Symptoms of Prostate Cancer</h3>
                  <p className="text-gray-700 mb-4">In its early stages, prostate cancer may not show noticeable symptoms. As the condition progresses, patients may experience changes that should not be ignored. Common symptoms include:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {[
                      "Difficulty in urination",
                      "Weak or interrupted urine flow",
                      "Frequent urge to urinate, especially at night",
                      "Blood in urine or semen",
                      "Discomfort in the pelvic area"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">These symptoms may also be related to non-cancerous conditions, but it is always advisable to consult a specialist for accurate diagnosis.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Early Signs of Prostate Cancer in Men</h3>
                  <p className="text-gray-700 mb-4">Recognizing early signs can play a crucial role in successful treatment. Many men tend to ignore mild urinary issues or assume them to be age-related changes. Early indicators may include:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {[
                      "Slight difficulty while starting urination",
                      "Reduced control over bladder function",
                      "Mild discomfort or pressure in the lower abdomen"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">Seeking medical attention at this stage allows doctors to identify the disease early and recommend appropriate treatment options. Early-stage prostate cancer often has better treatment outcomes.</p>
                </div>
              </section>

              {/* DETECTION */}
              <section className="mb-16" id="detection">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  How to Detect Prostate Cancer Early
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Importance of PSA Test for Prostate Cancer</h3>
                  <p className="text-gray-700 mb-4">
                    The Prostate-Specific Antigen (PSA) test is one of the most widely used screening methods for detecting prostate cancer. It measures the level of PSA in the blood, which may rise due to prostate abnormalities.
                  </p>
                  <p className="text-gray-700">
                    A higher PSA level does not always indicate cancer, but it signals the need for further evaluation. Regular PSA screening is especially recommended for men above a certain age or those with a family history of prostate cancer.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Screening Methods and Diagnosis Process</h3>
                  <p className="text-gray-700 mb-4">Early detection of prostate cancer involves a combination of tests and medical evaluations. Doctors typically follow a structured diagnostic approach to confirm the presence of cancer.</p>
                  <p  className="text-gray-700 mb-4">Common diagnostic methods include:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Digital Rectal Examination (DRE)",
                      "PSA blood test",
                      "Imaging tests such as MRI or ultrasound",
                      "Biopsy to confirm cancer cells"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">Each step helps doctors understand the condition better and determine the stage and severity of the disease.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">When to Consult a Prostate Cancer Specialist in India</h3>
                  <p className="text-gray-700 mb-4">It is important to consult a specialist if you experience persistent urinary symptoms or have risk factors such as age or family history.</p>
                    <p className="text-gray-700 mb-4">You should consider seeking expert advice if:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {[
                      "Symptoms continue for more than a few weeks",
                      "PSA levels are higher than normal",
                      "You have a family history of prostate cancer",
                      "You want a preventive health check-up"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">Specialists in India are known for their expertise in diagnosing and treating prostate cancer using modern techniques and patient-focused care.</p>
                </div>
              </section>

              {/* STAGES */}
              <section className="mb-16" id="stages">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Stages of Prostate Cancer and Treatment Options
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Overview of Prostate Cancer Stages</h3>
                  <p className="text-gray-700 mb-4">Prostate cancer is categorized into different stages based on how far the cancer has spread. Staging helps doctors decide the most effective treatment approach.</p>
                  <p className="text-gray-700 mb-4">The stages generally range from:</p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    {[
                      "Early-stage (confined to the prostate)",
                      "Locally advanced (spread to nearby tissues)",
                      "Advanced stage (spread to other parts of the body)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700">Understanding the stage of cancer is essential for planning treatment and predicting outcomes.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Stage-wise Treatment Planning</h3>
                  <p className="text-gray-700 mb-4">Treatment for prostate cancer is highly personalized and depends on the stage, overall health, and patient preferences.</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Early-stage cancer may be managed with active surveillance or surgery",
                      "Intermediate stages may require radiation therapy or a combination of treatments",
                      "Advanced stages often involve hormone therapy, chemotherapy, or targeted treatments"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <br></br>
                   <p className="text-gray-700 mb-4">Doctors carefully evaluate each case to provide the most suitable treatment plan.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Factors Affecting Treatment Choice</h3>
                  <p className="text-gray-700 mb-4">Several factors influence the choice of prostate cancer treatment. These include:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Age and general health of the patient",
                      "Stage and aggressiveness of cancer",
                      "Presence of other medical conditions",
                      "Patient's preferences and lifestyle"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">A well-informed decision made in consultation with a specialist can significantly improve treatment effectiveness and recovery.</p>
                </div>
              </section>

              {/* TREATMENT OPTIONS */}
              <section className="mb-16" id="treatment-options">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Best Prostate Cancer Treatment Options in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    India offers a wide range of advanced and effective prostate cancer treatment options tailored to different stages and patient needs. With access to modern medical infrastructure and experienced specialists, patients receive comprehensive care that focuses on both treatment and long-term recovery.
                  </p>
                </div>

                <div className="space-y-6">

  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
    <h3 className="text-xl font-bold text-gray-800 mb-3">
      Prostate Cancer Surgery in India (Prostatectomy)
    </h3>

    <p className="text-gray-700 mb-3">
      Surgery is one of the most common and effective treatments for localized prostate cancer. The procedure, known as prostatectomy, involves removing the prostate gland and, in some cases, nearby tissues.
    </p>

    <p className="text-gray-700 mb-3">
      In India, this surgery is performed using both traditional and minimally invasive techniques. The goal is to eliminate cancer while preserving surrounding structures as much as possible. Surgeons carefully plan each procedure to reduce complications and support faster recovery.

    </p>

    <p className="text-gray-700">
     Patients are typically advised surgery when cancer is confined to the prostate and has not spread to other parts of the body. With proper post-operative care, many individuals return to their normal routine within a few weeks.

    </p>
  </div>

  <div className="bg-white rounded-xl shadow-lg p-8">
    <h3 className="text-xl font-bold text-gray-800 mb-3">
      Radiation Therapy for Prostate Cancer in India
    </h3>

    <p className="text-gray-700 mb-3">
     Radiation therapy uses high-energy rays to destroy cancer cells. It is often recommended for patients who are not suitable candidates for surgery or as an additional treatment after surgery.

    </p>
    <p className="text-gray-700 mb-3">There are two main types of radiation therapy:</p>

    <ul className="list-disc pl-5 text-gray-700 mb-3">
      <li>External beam radiation therapy</li>
      <li>Internal radiation therapy (brachytherapy)</li>
    </ul>

    <p className="text-gray-700">
      Modern radiation techniques available in India focus on precision, targeting cancer cells while minimizing damage to healthy tissues. This approach helps reduce side effects and improves treatment outcomes.

    </p>
    <p className="text-gray-700">
      Radiation therapy may also be combined with other treatments depending on the stage of cancer.


    </p>
  </div>


  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
    <h3 className="text-xl font-bold text-gray-800 mb-3">
     Hormone Therapy and Chemotherapy Options

    </h3>

    <p className="text-gray-700 mb-3">
      Hormone therapy, also known as androgen deprivation therapy, works by reducing the levels of male hormones that promote cancer growth. It is commonly used in advanced or recurrent prostate cancer cases.

    </p>

    <p className="text-gray-700 mb-3">
      Chemotherapy, on the other hand, uses medications to kill rapidly dividing cancer cells. It is usually recommended when cancer has spread beyond the prostate or does not respond to hormone therapy.


    </p>

    <p className="text-gray-700">
    Doctors in India carefully monitor patients undergoing these treatments to manage side effects and ensure optimal results. Personalized care plans help patients tolerate treatment better and maintain quality of life.


    </p>
  </div>
<div className="bg-white rounded-xl shadow-lg p-8">
    <h3 className="text-xl font-bold text-gray-800 mb-3">
     Immunotherapy and Advanced Prostate Cancer Treatment

    </h3>

    <p className="text-gray-700 mb-3">
     Immunotherapy is an emerging treatment option that helps the body’s immune system recognize and fight cancer cells. It is considered in specific cases where other treatments may not be fully effective.


    </p>
    <p className="text-gray-700 mb-3">In addition to immunotherapy, advanced treatment approaches include targeted therapies and combination treatments designed to control cancer progression. These methods are continuously evolving and offer hope for patients with complex cases.
</p>

   

    <p className="text-gray-700">
     India’s healthcare system is increasingly adopting these advanced therapies, making cutting-edge treatment accessible to a wider range of patients.


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
                  <h3 className="text-xl font-bold text-pink-600 mb-3">What is Robotic Prostatectomy?</h3>
                  <p className="text-gray-700">
                    Robotic prostatectomy is a minimally invasive surgical technique that uses robotic-assisted technology to perform precise movements during surgery. The surgeon controls the robotic system, ensuring high accuracy and better visualization.
                  </p>
                   <p className="text-gray-700">
                    This method allows for smaller incisions compared to traditional surgery, resulting in less blood loss and quicker healing. It is widely used in leading hospitals across India.

                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Benefits of Robotic Prostate Surgery</h3>
                  <p className="text-gray-700 mb-4">Robotic surgery offers several advantages that make it a preferred choice for many patients:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Reduced pain and discomfort after surgery",
                      "Shorter hospital stay",
                      "Faster recovery time",
                      "Lower risk of complications",
                      "Improved precision during surgery"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">These benefits contribute to better overall patient experience and outcomes. However, the suitability of robotic surgery depends on individual medical conditions and should be discussed with a specialist.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Availability of Latest Technology in India</h3>
                  <p className="text-gray-700">
                    India is equipped with modern medical technologies that support advanced cancer treatment. Many hospitals are equipped with robotic surgical systems, high-precision radiation machines, and advanced diagnostic tools.</p>
                   <p className="text-gray-700">  This availability ensures that patients receive treatment that meets global standards. Continuous investment in healthcare infrastructure has positioned India as a leading destination for cancer care.
                  </p>
                </div>
              </section>

              {/* BEST HOSPITAL */}
              <section className="mb-16" id="best-hospital">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Choosing the Best Prostate Cancer Hospital in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Key Factors to Consider (Infrastructure, Technology, Care)</h3>
                  <p className="text-gray-700 mb-4">Selecting the right hospital is a critical step in the treatment journey. Patients should evaluate multiple factors before making a decision.</p>
                   <p className="text-gray-700 mb-4">Important considerations include:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Availability of advanced diagnostic and treatment technology",
                      "Experience of oncology and surgical teams",
                      "Quality of intensive care and recovery facilities",
                      "Patient safety standards and infection control measures"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">A well-equipped hospital with a multidisciplinary team can provide comprehensive and coordinated care.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Top Facilities for Prostate Cancer Treatment in India</h3>
                  <p className="text-gray-700">
                   India has several hospitals known for their expertise in cancer treatment. These facilities offer a combination of experienced specialists, modern equipment, and patient-focused services.</p>
                   <p className="text-gray-700">
                  Many hospitals provide dedicated oncology departments with specialized units for prostate cancer treatment. Patients benefit from integrated care, including diagnosis, treatment, and follow-up support.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Why India is a Preferred Destination for Treatment</h3>
                  <p className="text-gray-700 mb-4">India has become a preferred choice for prostate cancer treatment due to several key advantages.</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Access to highly qualified specialists",
                      "Advanced treatment options and technologies",
                      "Cost-effective healthcare services",
                      "Short waiting times for procedures"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <br></br>
                   <p className="text-gray-700 mb-4">Patients from around the world choose India for its balance of quality care and affordability. The healthcare system focuses on delivering personalized treatment while maintaining high standards.</p>
                </div>
              </section>

              {/* SPECIALISTS */}
              <section className="mb-16" id="specialists">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Top Prostate Cancer Specialists in India
                </h2>
                <p className="text-gray-700 mb-4">Choosing the right specialist plays a crucial role in the success of prostate cancer treatment. India is home to many experienced oncologists, urologists, and cancer surgeons who specialize in treating prostate cancer using advanced techniques and personalized care approaches.</p>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Qualifications and Expertise to Look For</h3>
                  <p className="text-gray-700 mb-4">When selecting a prostate cancer specialist in India, it is important to consider their qualifications, training, and clinical experience. Key factors include:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Specialization in urology or oncology",
                      "Experience in performing prostate cancer surgeries",
                      "Knowledge of advanced treatment methods such as robotic surgery",
                      "Participation in multidisciplinary cancer care teams"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mb-4">Highly qualified specialists are trained to evaluate each case thoroughly and recommend the most effective treatment plan based on individual patient needs.</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Experience in Advanced Prostate Cancer Treatment</h3>
                  <p className="text-gray-700">
                    Experience is a critical factor in ensuring successful outcomes. Specialists who regularly treat prostate cancer patients are better equipped to handle complex cases and complications. 
                  </p>
                  <p className="text-gray-700">
                    Doctors with experience in advanced treatments such as robotic prostatectomy, targeted therapy, and combination treatments can provide more accurate and effective care. Their expertise also helps in minimizing risks and improving recovery time.

                  </p>
                  <p className="text-gray-700">
                   Patients are encouraged to review the doctor’s experience, approach to treatment, and patient feedback before making a decision.

                  </p>

                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Role of Multidisciplinary Cancer Care Teams</h3>
                  <p className="text-gray-700 mb-4">Modern cancer treatment often involves a team of specialists working together. This multidisciplinary approach ensures that patients receive comprehensive care from diagnosis to recovery. A typical cancer care team may include: </p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Urologists",
                      "Medical oncologists",
                      "Radiation oncologists",
                      "Radiologists and pathologists"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">This collaborative approach allows doctors to discuss each case in detail and develop a well-rounded treatment plan. It also ensures that all aspects of the patient’s health are considered during treatment.
</p>
                </div>
              </section>

              {/* DOCTORS */}
              <section className="mb-16" id="doctors">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 pb-4 border-b-4 border-pink-500 inline-block">
                  Prostate Cancer Specialist in India
                </h2>

                
                <div className="space-y-6">
                  {[
                    {
                      name: "Dr. Vipin Sisodia",
                      role: "Dr. Vipin Sisodia – Senior Consultant & Robotic Surgeon (Urology)",
                      desc: "Vipin Sisodia is a highly experienced and acclaimed Urologist with over 13 years of clinical expertise in Urology, Renal Sciences, and advanced Robotic Surgery. He is widely recognized for his precision in minimally invasive procedures and his patient-centric approach in treating complex urological conditions, including kidney diseases, prostate disorders, and urological cancers.",
                       img: "/doctor/dr-devendra.png"
                    
                    },
                    {
                      name: "Dr. Devendra K. Babbar",
                      role: "Senior Consultant Urologist & Robotic Surgeon in India",
                      desc: "Dr. Devendra K. Babbar is a highly experienced Senior Consultant in Urology, Renal Sciences & Robotic Surgery, with over 15+ years of expertise in advanced urological care. He specializes in robotic urology, kidney transplant, and minimally invasive surgeries, offering cutting-edge treatment solutions to patients across India.",
                       img: "/doctor/dr-vipin.png"
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
                          <p className="text-gray-500 font-medium mb-4">{doc.role}</p>
                          <p className="text-gray-700 mb-3">{doc.desc}</p>
                         
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* COST */}
              <section className="mb-16" id="cost">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Cost of Prostate Cancer Treatment in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The cost of prostate cancer treatment in India is one of the key reasons why patients from around the world choose the country for medical care. Despite offering advanced technologies and expert care, treatment remains more affordable compared to many other countries.
                  </p>

                  <h3 className="text-xl font-bold text-pink-600 mb-3">Average Cost of Treatment in India</h3>
                  <p className="text-gray-700 mb-4">
                    The overall cost of prostate cancer treatment depends on several factors, including the type of treatment, hospital facilities, and duration of care.</p>
                     <p className="text-gray-700 mb-4">
                    Different treatments such as surgery, radiation therapy, or hormone therapy have varying costs. In general, India offers cost-effective treatment options without compromising on quality.</p>
                     <p className="text-gray-700 mb-4">
                 Patients are often provided with customized treatment plans, which include a detailed breakdown of expected expenses.</p>

                  <h3 className="text-xl font-bold text-pink-600 mb-3">Prostate Cancer Treatment Cost in Delhi</h3>
                  <p className="text-gray-700 mb-4">Delhi is one of the leading medical hubs in India, known for its advanced healthcare infrastructure and experienced specialists.</p>
                    <p className="text-gray-700 mb-4">The cost of prostate cancer treatment in Delhi may vary based on:
</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Choice of hospital",
                      "Type of procedure (robotic surgery, radiation, etc.)",
                      "Length of hospital stay",
                      "Additional diagnostic tests"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                    <p className="text-gray-700 mb-4">Despite these variables, treatment in Delhi remains accessible and comparatively affordable, making it a popular choice for both domestic and international patients.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-6">Cost Comparison: India vs Other Countries</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                          <th className="px-6 py-4 font-semibold rounded-tl-lg">Country</th>
                          <th className="px-6 py-4 font-semibold">Robotic Surgery (USD)</th>
                          <th className="px-6 py-4 font-semibold rounded-tr-lg">Radiation Therapy (USD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-pink-700 border-b border-pink-100">India</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$5,000 – $8,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$3,000 – $6,000</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">United Kingdom</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$25,000 – $40,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$20,000 – $35,000</td>
                        </tr>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 rounded-bl-lg">United States</td>
                          <td className="px-6 py-4 text-gray-700">$35,000 – $60,000</td>
                          <td className="px-6 py-4 text-gray-700 rounded-br-lg">$30,000 – $50,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-gray-700 mt-6">
                    The significantly lower treatment cost in India is often attributed to differences in healthcare operational expenses, hospital management systems, and currency value, while hospitals still maintain internationally recognized treatment protocols.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Factors Affecting Overall Treatment Cost</h3>
                  <p className="text-gray-700 mb-4">SSeveral elements influence the total cost of prostate cancer treatment. Understanding these factors helps patients plan their medical journey more effectively.</p>
                   <p className="text-gray-700 mb-4">Common factors include:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Stage of cancer at diagnosis",
                      "Type of treatment required",
                      "Technology used (robotic vs traditional surgery)",
                      "Doctor's expertise and hospital reputation",
                      "Post-treatment care and follow-up visits"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4">Patients should always discuss the complete cost structure with the hospital to avoid unexpected expenses.</p>
                </div>
              </section>

              {/* SURVIVAL RATE */}
              <section className="mb-16" id="survival">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Survival Rate and Success of Prostate Cancer Treatment
                </h2>
                <p className="text-gray-700">
                   Advancements in medical technology and early detection have significantly improved the success rate of prostate cancer treatment. With timely diagnosis and appropriate care, many patients achieve positive outcomes.

                  </p>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Survival Rate of Prostate Cancer</h3>
                  <p className="text-gray-700">
                    The survival rate of prostate cancer largely depends on the stage at which it is diagnosed. Early-stage prostate cancer generally has a higher chance of successful treatment.
                  </p>
                  <p className="text-gray-700">
                    When detected early, the disease can often be managed effectively with minimal complications. Even in advanced stages, modern treatment options help control the disease and improve quality of life.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Factors That Improve Treatment Outcomes</h3>
                  <p className="text-gray-700 mb-4">Several factors contribute to better treatment results. Patients who follow medical advice and receive timely care tend to experience improved outcomes.</p>
                  <p className="text-gray-700 mb-4">Important factors include:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Early diagnosis and regular screening",
                      "Access to advanced treatment methods",
                      "Overall health and lifestyle of the patient",
                      "Adherence to treatment and follow-up care"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                   <p className="text-gray-700 mb-4">A proactive approach toward health plays a significant role in managing prostate cancer effectively.</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Importance of Early Detection</h3>
                  <p className="text-gray-700">
                    Early detection is one of the most critical aspects of successful prostate cancer treatment. Regular screenings and awareness of symptoms can help identify the disease at an initial stage.
                  </p>
                  <p className="text-gray-700">Men, especially those above a certain age or with a family history of prostate cancer, should consider routine check-ups. Early diagnosis allows doctors to use less aggressive treatments while achieving better results.</p>
                </div>
              </section>

              {/* INTERNATIONAL PATIENTS */}
              <section className="mb-16" id="international">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Why International Patients Choose India for Prostate Cancer Treatment
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    India has become one of the most preferred global destinations for prostate cancer treatment. Patients from across Africa, the Middle East, Southeast Asia, and Europe travel to India due to its combination of advanced medical expertise, modern infrastructure, and affordable healthcare services.
                  </p>
                </div>

                <div class="space-y-6">

 
  <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
    <h3 class="text-xl font-bold text-gray-800 mb-3">
      Affordable Treatment with Advanced Technology
    </h3>
    <p class="text-gray-700">
      One of the biggest reasons international patients choose India is the significant cost advantage without compromising on quality. Advanced procedures such as robotic surgery, radiation therapy, and targeted treatments are available at a fraction of the cost compared to many Western countries. </p>
      <p class="text-gray-700">Despite lower costs, Indian hospitals maintain global standards of care. Many facilities are accredited by international healthcare organizations and follow strict clinical protocols to ensure patient safety and treatment effectiveness.
    </p>
  </div>

  
  <div class="bg-white rounded-xl shadow-lg p-8">
    <h3 class="text-xl font-bold text-gray-800 mb-3">
      Availability of Experienced Oncologists
    </h3>
    <p class="text-gray-700">
      India is home to highly qualified oncologists and urologists with extensive experience in treating prostate cancer. Many specialists have trained or worked internationally, bringing global expertise to Indian healthcare systems.
    </p>
    <p class="text-gray-700">These experts are skilled in handling both early-stage and advanced prostate cancer cases using modern treatment methods. Their patient-centered approach ensures that each treatment plan is tailored according to the individual’s condition, age, and overall health.
</p>
  </div>

  <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
    <h3 class="text-xl font-bold text-gray-800 mb-3">
      Support Services for International Patients
    </h3>
    <p class="text-gray-700 mb-4">
    Hospitals in India offer dedicated support systems for international patients to ensure a smooth medical journey. These services are designed to reduce stress and improve overall treatment experience.
  </p>

  <p class="text-gray-800 font-semibold mb-2">
    Common support services include:
  </p>

  <ul class="list-disc pl-6 text-gray-700 space-y-2 mb-4">
    <li>Assistance with visa and travel arrangements</li>
    <li>Dedicated international patient coordinators</li>
    <li>Language interpretation services</li>
    <li>Personalized treatment planning and cost estimation</li>
    <li>Post-treatment follow-up guidance</li>
  </ul>

  <p class="text-gray-700">
    This structured support system helps international patients focus on recovery while medical teams handle logistics and care coordination.
  </p>
  </div>

</div>
              </section>

              {/* TECHNOLOGY */}
              <section className="mb-16" id="technology">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Latest Technology for Prostate Cancer Treatment in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    India has rapidly adopted advanced medical technologies that enhance the accuracy, safety, and effectiveness of prostate cancer treatment. Leading hospitals continuously upgrade their systems to match global standards in oncology care.
                  </p>
                </div>

                <div className="space-y-6">

                  {/* Robotic Surgery Systems */}
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Robotic Surgery Systems</h3>
                    <p className="text-gray-700 mb-4">
                      Robotic-assisted surgery is one of the most advanced techniques used for prostate cancer treatment in India. It allows surgeons to perform highly precise operations with better control and visualization.
                    </p>
                    <p className="text-gray-700 mb-3">This technology helps in:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {[
                        "Reducing surgical complications",
                        "Minimizing blood loss",
                        "Enhancing precision in tumor removal",
                        "Supporting faster patient recovery"
                      ].map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700">
                      Robotic systems are widely used in top-tier hospitals for prostatectomy procedures, offering patients improved outcomes and shorter hospital stays.
                    </p>
                  </div>

                  {/* Precision Radiation Techniques */}
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Precision Radiation Techniques</h3>
                    <p className="text-gray-700 mb-4">
                      Modern radiation therapy in India uses highly targeted techniques to treat cancer cells while preserving surrounding healthy tissues. This improves treatment effectiveness and reduces side effects.
                    </p>
                    <p className="text-gray-700 mb-3">Advanced radiation methods include:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {[
                        "Image-guided radiation therapy (IGRT)",
                        "Intensity-modulated radiation therapy (IMRT)",
                        "Stereotactic body radiation therapy (SBRT)"
                      ].map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700">
                      These technologies allow doctors to deliver controlled radiation doses with high precision, improving success rates and patient comfort.
                    </p>
                  </div>

                  {/* Emerging Treatments */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Emerging Treatments and Innovations</h3>
                    <p className="text-gray-700 mb-4">
                      The field of prostate cancer treatment is continuously evolving. India is actively adopting new and innovative approaches that enhance treatment outcomes.
                    </p>
                    <p className="text-gray-700 mb-3">Some emerging treatments include:</p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      {[
                        "Targeted therapy focusing on specific cancer cells",
                        "Immunotherapy to boost the body's natural defense system",
                        "Combination therapies for advanced cases"
                      ].map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-700">
                      Research and clinical advancements are helping doctors develop more personalized and effective treatment strategies for patients at different stages of prostate cancer.
                    </p>
                  </div>

                </div>
              </section>

              {/* FAQ */}
              <section className="mb-16" id="faq">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Frequently Asked Questions (FAQs)
                </h2>

                <p className="text-gray-700 mb-6">
                  Understanding prostate cancer and its treatment often raises several important questions for patients and families. Below are some commonly asked questions that can help you make informed decisions about care and treatment options.
                </p>

                <div class="space-y-6 mt-6">

  <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
    <h3 class="text-xl font-bold text-gray-800 mb-3">
      How to detect prostate cancer early?
    </h3>
   <p class="text-gray-700 mb-4">
  Early detection of prostate cancer is possible through regular screening and awareness of symptoms. The most common method is the PSA blood test, which measures prostate-specific antigen levels. Along with this, doctors may recommend a digital rectal examination and imaging tests.
</p>

<p class="text-gray-700">
  If any abnormalities are found, a biopsy may be performed to confirm the presence of cancer. Early detection significantly increases the chances of successful treatment and better outcomes.
</p>
  </div>

  <div class="bg-white rounded-xl shadow-lg p-8">
    <h3 class="text-xl font-bold text-gray-800 mb-3">
      What is the cost of prostate cancer treatment in India?
    </h3>
    <p class="text-gray-700 mb-4">
    The cost of prostate cancer treatment in India varies depending on multiple factors such as the stage of cancer, type of treatment required, hospital choice, and doctor’s expertise.

    </p>
    
<p class="text-gray-700">
  Treatment options like surgery, radiation therapy, and hormone therapy have different cost structures. India is known for offering affordable treatment compared to many other countries while maintaining high-quality care standards.

</p>
  </div>

  <div class="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
    <h3 class="text-xl font-bold text-gray-800 mb-3">
      Which is the best hospital for prostate cancer treatment in India?
    </h3>
    <p class="text-gray-700 mb-4">
    India has several reputed hospitals specializing in cancer care and prostate cancer treatment. The best hospital often depends on the patient’s condition, location, and treatment needs.
</p>
    
<p class="text-gray-700">
 Top hospitals are generally equipped with advanced technologies such as robotic surgery systems, modern radiation therapy units, and multidisciplinary oncology teams that provide comprehensive care.


</p>
  </div>

  <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
    <h3 class="text-xl font-bold text-gray-800 mb-3">
      What is the success rate of prostate cancer treatment in India?
    </h3>
     <p class="text-gray-700 mb-4">
   The success rate of prostate cancer treatment in India largely depends on the stage at which the disease is diagnosed. Early-stage prostate cancer has a significantly higher success rate compared to advanced stages.

</p>
    
<p class="text-gray-700">
 With advanced treatment methods such as robotic surgery, precision radiation therapy, and targeted treatments, many patients achieve positive outcomes and improved quality of life.


</p>
  </div>

  <div class="bg-white rounded-xl shadow-lg p-8">
    <h3 class="text-xl font-bold text-gray-800 mb-3">
      Who is the best oncologist for prostate cancer in India?
    </h3>
     <p class="text-gray-700 mb-4">
    India has many highly experienced oncologists and urologists specializing in prostate cancer treatment. The “best” doctor depends on factors such as experience, specialization in prostate cancer, use of advanced techniques, and patient feedback.

</p>
    
<p class="text-gray-700">
 It is always recommended to consult a qualified specialist who is experienced in both surgical and non-surgical treatment options.


</p>
  </div>

</div>
              </section>

              {/* CONSULTATION */}
              <section className="mb-16" id="consultation">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Get Expert Consultation for Prostate Cancer Treatment in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you or your loved one is experiencing symptoms or has been diagnosed with prostate cancer, seeking timely medical consultation is essential. Early intervention can make a significant difference in treatment success and long-term health outcomes.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    India offers access to experienced cancer specialists who provide personalized treatment plans based on each patient's condition. From diagnosis to recovery, patients receive comprehensive support at every stage of the treatment journey.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">When to Seek Medical Help</h3>
                  <p className="text-gray-700 mb-4">
                    You should consider consulting a specialist if you notice persistent urinary issues, elevated PSA levels, or any other symptoms associated with prostate health. Individuals with a family history of prostate cancer should also consider regular screenings for early detection. </p> 
                    <p className="text-gray-700"> Timely consultation helps in identifying the disease early and allows doctors to recommend less aggressive and more effective treatment options.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">How to Book an Appointment with Specialists</h3>
                  <p className="text-gray-700 mb-4">Booking an appointment with a prostate cancer specialist in India is a straightforward process. Most hospitals and healthcare providers offer both in-person and online consultation options. Patients can:</p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Contact hospital oncology departments directly",
                      "Use online appointment booking systems",
                      "Seek guidance from international patient coordinators"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="bg-pink-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                   <p className="text-gray-700 mt-4"> Early consultation ensures faster diagnosis and timely treatment planning.

                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-3">Personalized Treatment Planning</h3>
                  <p className="text-gray-700">
                    Every prostate cancer case is unique, and treatment plans are designed accordingly. Specialists evaluate multiple factors such as cancer stage, patient age, overall health, and medical history before recommending treatment.
                  </p>
                  <p className="text-gray-700 mt-4"> A personalized approach ensures better results, fewer complications, and improved recovery outcomes. Patients are also closely monitored during and after treatment to ensure long-term health stability.


                  </p>
                </div>
              </section>

              {/* CONCLUSION */}
              <section className="mb-16" id="conclusion">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Conclusion
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Prostate cancer is a serious condition, but with early detection, advanced medical technology, and expert care, it can be effectively managed. India has emerged as a leading destination for prostate cancer treatment, offering world-class healthcare services at affordable costs.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From robotic surgery and radiation therapy to hormone and immunotherapy options, patients have access to a wide range of advanced treatments. Combined with experienced specialists and modern hospitals, India provides a strong healthcare ecosystem for cancer care.
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
import Script from "next/script";
import React from "react";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Prostate Cancer Survival Rate in India | Outcomes & Prognosis Guide",
  description:
    "Learn about prostate cancer survival rates in India, including stage-wise outcomes, prognosis factors, early detection benefits, and treatment advances improving long-term survival.",
};



const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ekamcure.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.ekamcure.com/blog" },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Prostate Cancer Survival Rate in India",
      "item": "https://www.ekamcure.com/blog/prostate-cancer-survival-rate-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Prostate Cancer Survival Rate in India",
  "description":
    "Learn about prostate cancer survival rates in India, including stage-wise outcomes, prognosis factors, early detection benefits, and treatment advances improving long-term survival.",
  "publisher": {
    "@type": "Organization",
    "name": "Ekam Cure",
    "logo": { "@type": "ImageObject", "url": "https://www.ekamcure.com/_next/static/media/Ekam-logo-300x133.bd70579a.webp" }
  }
};

/* ---------------------------------------------------------------------
   Article content — every paragraph / list from the source text.
   A "block" is either a plain string (paragraph) or an object:
     { list: { lead?, items: [...], trailing? } }
--------------------------------------------------------------------- */

const sections = [
  {
    id: "intro",
    title: "Introduction",
    blocks: [
      "A prostate cancer diagnosis often raises one important question for patients and their families: \"What are the chances of survival?\" While survival rates cannot predict individual outcomes, they provide valuable insights into how patients with similar disease characteristics have responded to treatment over time.",
      "The good news is that prostate cancer is one of the most treatable cancers when detected and managed appropriately. Advances in early detection, precision medicine, robotic surgery, radiation oncology, and personalized cancer care have significantly improved survival outcomes worldwide, including in India.",
      "Today, many patients diagnosed with prostate cancer go on to live long and productive lives. Understanding survival rates, prognostic factors, and long-term outcome expectations can help patients make informed decisions about their treatment journey."
    ]
  },
  {
    id: "understanding-survival-rates",
    title: "Understanding Prostate Cancer Survival Rates",
    blocks: [
      "A survival rate is a statistical measure that estimates the percentage of patients who remain alive for a specified period after diagnosis.",
      { list: { lead: "These statistics are generally reported as:", items: ["5-year survival rate", "10-year survival rate", "Cancer-specific survival rate", "Disease-free survival rate", "Progression-free survival rate"] } },
      "It is important to understand that survival rates are based on large groups of patients and do not determine an individual patient's outcome.",
      "Many factors influence prognosis, including cancer stage, tumor characteristics, treatment response, age, and overall health."
    ]
  },
  {
    id: "why-improved",
    title: "Why Survival Rates Have Improved Over Time",
    blocks: ["Prostate cancer survival outcomes have improved substantially over the past two decades.", "Several developments have contributed to this progress:"],
    subs: [
      { h3: "Earlier Detection", blocks: ["Routine PSA testing and improved imaging technologies help identify many cancers before symptoms develop."] },
      { h3: "Better Risk Stratification", blocks: ["Modern diagnostic tools allow doctors to classify patients more accurately into low-risk, intermediate-risk, and high-risk categories."] },
      { h3: "Advanced Treatment Technologies", blocks: ["The availability of robotic surgery, precision radiation therapy, targeted therapies, and multidisciplinary cancer care has improved long-term disease control."] },
      { h3: "Personalized Treatment Planning", blocks: ["Treatment recommendations are increasingly tailored to the biological behavior of each patient's cancer rather than relying solely on generalized protocols."] }
    ]
  },
  {
    id: "survival-by-stage",
    title: "Survival Rates by Stage of Prostate Cancer",
    blocks: ["The stage of cancer at diagnosis remains one of the strongest predictors of survival."],
    subs: [
      {
        h3: "Localized Prostate Cancer",
        blocks: [
          "Localized prostate cancer remains confined to the prostate gland.",
          "Patients diagnosed at this stage generally experience the most favorable outcomes.",
          "Many individuals with localized disease achieve long-term cancer control and may remain cancer-free for years following treatment."
        ]
      },
      {
        h3: "Locally Advanced Prostate Cancer",
        blocks: [
          "Locally advanced disease extends beyond the prostate but remains within nearby tissues.",
          "Although these cancers require more intensive treatment strategies, modern treatment approaches continue to achieve encouraging long-term outcomes."
        ]
      },
      {
        h3: "Advanced and Metastatic Prostate Cancer",
        blocks: [
          "Advanced prostate cancer has spread beyond the prostate region to distant organs or bones.",
          "While treatment becomes more complex at this stage, ongoing advances in systemic therapies, hormonal treatments, and precision oncology continue to improve survival prospects.",
          "Many patients with advanced disease now live significantly longer than was possible in previous decades."
        ]
      }
    ]
  },
  {
    id: "factors-influence",
    title: "Factors That Influence Survival Rate in Prostate Cancer",
    blocks: ["Survival outcomes vary considerably among patients."],
    subs: [
      { h3: "Gleason Score", blocks: ["The Gleason score reflects how aggressive cancer cells appear under a microscope.", "Lower scores generally indicate slower-growing cancers, while higher scores suggest a greater likelihood of aggressive behavior."] },
      { h3: "PSA Levels", blocks: ["PSA levels provide important information regarding disease burden and treatment response.", "Doctors often monitor PSA trends over time to evaluate disease progression and long-term outcomes."] },
      { h3: "Tumor Stage", blocks: ["The extent of cancer spread remains one of the most important prognostic indicators.", "Patients diagnosed before cancer spreads beyond the prostate generally experience more favorable outcomes."] },
      { h3: "Age at Diagnosis", blocks: ["Younger patients may have different treatment considerations compared to older individuals.", "However, chronological age alone does not determine prognosis."] },
      { h3: "Overall Health", blocks: ["Patients with fewer medical complications often tolerate treatment more effectively and may experience better long-term outcomes."] }
    ]
  },
  {
    id: "early-detection-role",
    title: "The Role of Early Detection in Survival",
    blocks: [
      "One of the strongest factors associated with improved survival is early diagnosis.",
      "When prostate cancer is identified before it spreads beyond the gland, treatment options are often more effective and disease control rates are generally higher.",
      "Regular health evaluations and timely assessment of prostate-related concerns can contribute to earlier diagnosis and better long-term outcomes."
    ]
  },
  {
    id: "treatment-response-impact",
    title: "How Treatment Response Impacts Survival",
    blocks: [
      "Survival outcomes are closely linked to how well cancer responds to treatment.",
      { list: { lead: "Doctors evaluate treatment response through:", items: ["PSA monitoring", "Imaging studies", "Clinical examinations", "Long-term surveillance programs"] } },
      "A favorable response to treatment often correlates with improved long-term disease control."
    ]
  },
  {
    id: "disease-free-survival",
    title: "Disease-Free Survival",
    blocks: [
      "Disease-free survival refers to the period during which a patient remains free from detectable cancer following treatment.",
      "Many patients successfully achieve extended periods of disease-free survival, particularly when treatment is initiated at earlier stages.",
      "Regular follow-up care helps identify any signs of recurrence and supports timely intervention when necessary."
    ]
  },
  {
    id: "cancer-specific-survival",
    title: "Cancer-Specific Survival",
    blocks: [
      "Cancer-specific survival measures the percentage of patients who do not die from prostate cancer during a specified period.",
      "This metric is particularly useful because many prostate cancer patients are older and may have other health conditions unrelated to cancer.",
      "Understanding cancer-specific survival helps patients better assess the effectiveness of modern treatment approaches."
    ]
  },
  {
    id: "long-term-survivorship",
    title: "Long-Term Survivorship After Prostate Cancer",
    blocks: [
      "The number of prostate cancer survivors continues to grow globally.",
      "Survivorship care focuses on helping patients maintain long-term health after treatment.",
      { list: { lead: "Important aspects of survivorship include:", items: ["Ongoing PSA monitoring", "Management of treatment-related effects", "Physical wellness", "Emotional health", "Nutritional support", "Regular medical follow-up"] } },
      "Many survivors continue normal professional, social, and family activities following treatment."
    ]
  },
  {
    id: "quality-of-life",
    title: "Quality of Life and Survival",
    blocks: [
      "Survival is not measured solely by lifespan.",
      "Quality of life remains a critical component of successful prostate cancer care.",
      { list: { lead: "Modern treatment strategies increasingly emphasize:", items: ["Functional preservation", "Urinary health", "Sexual health", "Emotional well-being", "Physical independence"] } },
      "Balancing cancer control with quality-of-life outcomes has become a major priority in contemporary prostate cancer management."
    ]
  },
  {
    id: "recurrence-monitoring",
    title: "Recurrence and Long-Term Monitoring",
    blocks: [
      "Continuous monitoring is still necessary even after a successful course of treatment.",
      { list: { lead: "Long-term surveillance programs help:", items: ["Detect recurrence early", "Evaluate treatment effectiveness", "Monitor PSA levels", "Address new health concerns"] } },
      "Regular follow-up appointments allow doctors to identify changes before symptoms develop."
    ]
  },
  {
    id: "advances-improve-survival",
    title: "Advances That Continue to Improve Survival",
    blocks: [
      "Research in prostate cancer continues to evolve rapidly.",
      { list: { lead: "Recent advancements include:", items: ["Precision oncology", "Molecular profiling", "Advanced imaging techniques", "Artificial intelligence-assisted diagnostics", "Targeted therapies", "Novel hormonal treatments", "Improved radiation delivery systems"] } },
      "These innovations continue to expand treatment possibilities and improve patient outcomes."
    ]
  },
  {
    id: "international-patients",
    title: "What International Patients Should Know",
    blocks: [
      { list: { lead: "Many international patients travel to India for prostate cancer treatment because of access to:", items: ["Experienced oncology teams", "Modern cancer centers", "Advanced treatment technologies", "Multidisciplinary care models"] } },
      "The combination of specialized expertise and comprehensive cancer programs contributes to favorable treatment outcomes across a wide range of prostate cancer cases."
    ]
  },
  {
    id: "how-ekam-supports",
    title: "How Ekam Supports Patients",
    blocks: [
      "Understanding survival expectations can be challenging, particularly for patients seeking treatment abroad.",
      "Ekam helps patients connect with experienced specialists and leading cancer centers while providing support throughout the treatment journey.",
      { list: { lead: "Patients receive assistance with:", items: ["Medical record review", "Specialist recommendations", "Hospital selection", "Treatment planning", "Travel coordination", "Follow-up support"] } },
      "This guidance helps patients make informed decisions regarding their cancer care."
    ]
  },
  {
    id: "conclusion",
    title: "Conclusion",
    blocks: [
      "The prostate cancer survival rate in India continues to improve due to advancements in early detection, personalized treatment planning, modern technologies, and multidisciplinary cancer care. While survival outcomes vary based on individual factors such as cancer stage, tumor characteristics, and overall health, many patients achieve long-term disease control and maintain a high quality of life following treatment. With continued progress in oncology and increasing access to advanced medical care, the outlook for prostate cancer patients remains increasingly encouraging."
    ]
  }
];

/* ---------------------------------------------------------------------
   Shared rendering helpers (same pattern used across the site)
--------------------------------------------------------------------- */

function Tag({ children }) {
  return (
    <span
      className="inline-block text-xs md:text-[13px] px-3 py-1.5 rounded-full border"
      style={{ borderColor: "#C9D9EC", background: "var(--color-bg)", color: "var(--color-navy)" }}
    >
      {children}
    </span>
  );
}

function renderBlock(block, key) {
  if (typeof block === "string") {
    return (
      <p key={key} className="text-[#3E4C59] leading-relaxed mb-3 last:mb-0">
        {block}
      </p>
    );
  }

  if (block.list) {
    return (
      <div key={key} className="mb-3">
        {block.list.lead && <p className="text-[#3E4C59] leading-relaxed mb-3">{block.list.lead}</p>}
        <div className="flex flex-wrap gap-2 mb-3">
          {block.list.items.map((item, i) => (
            <Tag key={i}>{item}</Tag>
          ))}
        </div>
        {block.list.trailing && <p className="text-[#3E4C59] leading-relaxed">{block.list.trailing}</p>}
      </div>
    );
  }

  return null;
}

function Section({ s }) {
  return (
    <section id={s.id} className="mb-10 scroll-mt-24">
      <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
        {s.title}
      </h2>

      <div className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-7">
        {s.blocks.map((b, i) => renderBlock(b, i))}
      </div>

      {s.subs && (
        <div className="mt-4 space-y-4">
          {s.subs.map((sub, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-7">
              <h3 className="text-base md:text-lg font-bold mb-3" style={{ color: "var(--color-mid-blue)" }}>
                {sub.h3}
              </h3>
              {sub.blocks.map((b, j) => renderBlock(b, j))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* ---------------------------------------------------------------------
   Page
--------------------------------------------------------------------- */

export default function ProstateCancerSurvivalRateIndia() {
  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "var(--color-bg)" }} className="min-h-screen text-[#1F2933]">

        {/* HERO */}
        <header
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(120deg, var(--color-navy) 0%, var(--color-blue) 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 39px, #ffffff 39px, #ffffff 40px)" }}
          />
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
            <h1 className="text-white text-4xl md:text-6xl leading-[1.05] mb-6 max-w-3xl font-bold">
              Prostate Cancer Survival Rate in India
            </h1>
            <p className="text-[#DCE8F7] text-lg leading-relaxed max-w-2xl">
              Learn about prostate cancer survival rates in India, including stage-wise outcomes, prognosis factors, early detection benefits, and treatment advances improving long-term survival.
            </p>
          </div>
        </header>

        {/* PAGE BODY */}
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-10 gap-10">

          <div className="lg:col-span-7">

            {/* TOC */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-8 mb-10">
              <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-navy)" }}>In this page</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="text-sm py-1 hover:underline"
                    style={{ color: "var(--color-mid-blue)" }}
                  >
                    › {s.title}
                  </a>
                ))}
              </div>
            </div>

            {sections.map((s) => (
              <Section key={s.id} s={s} />
            ))}

          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-3">
            <div className="sticky top-10 flex flex-col gap-4">
              <div className="bg-white rounded-lg shadow-sm border-t-4 overflow-hidden" style={{ borderColor: "var(--color-mid-blue)" }}>
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

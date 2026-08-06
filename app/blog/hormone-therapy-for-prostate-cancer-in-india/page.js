import Script from "next/script";
import React from "react";
import Link from "next/link";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Hormone Therapy for Prostate Cancer in India | ADT Treatment Guide",
  description:
    "Explore hormone therapy (ADT) for prostate cancer in India, including how it works, treatment benefits, eligibility, side effects, and advanced oncology care at leading hospitals.",
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
      "name": "Hormone Therapy for Prostate Cancer",
      "item": "https://www.ekamcure.com/blog/hormone-therapy-for-prostate-cancer-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Hormone Therapy for Prostate Cancer",
  "description":
    "Explore hormone therapy (ADT) for prostate cancer in India, including how it works, treatment benefits, eligibility, side effects, and advanced oncology care at leading hospitals.",
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
    "Hormone therapy is one of the most important treatment approaches used in the management of prostate cancer. Unlike surgery or radiation therapy, hormone therapy does not directly remove or destroy tumors. Instead, it works by reducing the effect of male hormones that help prostate cancer cells grow and multiply.",

    "Prostate cancer is often dependent on androgens, particularly testosterone, for its growth and survival. By lowering testosterone levels or blocking its action, hormone therapy can slow disease progression, shrink tumors, and improve disease control in many patients.",

    <>
      Hormone therapy has become an integral component of modern{" "}
      <Link
        href="/treatments/best-prostate-cancer-treatment-india"
        className="text-[#053161] font-semibold hover:text-pink-600 underline transition-colors"
      >
        prostate cancer
      </Link>{" "}
      management and is commonly used in combination with other treatment
      strategies depending on the stage and characteristics of the disease.
    </>,
  ]
},
  {
    id: "understanding-testosterone",
    title: "Understanding the Relationship Between Testosterone and Prostate Cancer",
    blocks: [
      "Testosterone is a naturally occurring male hormone produced primarily by the testicles.",
      { list: { lead: "Under normal conditions, testosterone plays an important role in:", items: ["Muscle development", "Bone strength", "Sexual function", "Energy levels", "Male reproductive health"] } },
      "However, many prostate cancer cells rely on testosterone as a source of growth stimulation.",
      "When testosterone levels are reduced or its activity is blocked, cancer growth often slows significantly.",
      "This biological relationship forms the foundation of hormone therapy for prostate cancer."
    ]
  },
  {
    id: "what-is-hormone-therapy",
    title: "What Is Hormone Therapy?",
    blocks: [
      "Hormone therapy, also known as Androgen Deprivation Therapy (ADT), is a treatment designed to reduce the influence of male hormones on prostate cancer cells.",
      { list: { lead: "The goal is not necessarily to cure cancer but to:", items: ["Control tumor growth", "Slow disease progression", "Reduce recurrence risk", "Improve treatment effectiveness", "Manage advanced disease"] } },
      "Hormone therapy can remain effective for many years in appropriately selected patients."
    ]
  },
  {
    id: "when-recommended",
    title: "When Is Hormone Therapy Recommended?",
    blocks: ["Hormone therapy may be considered in several clinical situations."],
    subs: [
      { h3: "High-Risk Prostate Cancer", blocks: ["Patients with aggressive disease often receive hormone therapy as part of a broader treatment strategy."] },
      { h3: "Locally Advanced Disease", blocks: ["When cancer extends beyond the prostate gland, hormone therapy may help improve disease control."] },
      { h3: "Recurrent Prostate Cancer", blocks: ["Hormone therapy may be recommended when cancer returns after previous treatment."] },
      { h3: "Metastatic Prostate Cancer", blocks: ["For patients whose cancer has spread to distant organs or bones, hormone therapy often serves as a key treatment component."] },
      { h3: "Biochemical Recurrence", blocks: ["Rising PSA levels following initial treatment may lead doctors to consider hormone therapy in selected cases."] }
    ]
  },
  {
    id: "goals",
    title: "Goals of Hormone Therapy",
    blocks: [
      "The objectives of hormone therapy vary depending on the patient's condition.",
      { list: { lead: "Common goals include:", items: ["Slowing cancer growth", "Delaying disease progression", "Improving treatment outcomes", "Reducing symptoms", "Enhancing quality of life", "Extending survival"] } },
      "Treatment goals are individualized according to the stage and biological behavior of the cancer."
    ]
  },
  {
    id: "types-of-hormone-therapy",
    title: "Types of Hormone Therapy for Prostate Cancer",
    blocks: ["Several approaches are available for suppressing androgen activity."],
    subs: [
      {
        h3: "LHRH Agonists",
        blocks: [
          "These medications reduce testosterone production over time by acting on hormone-regulating pathways.",
          "Commonly used agents include long-acting injections administered at regular intervals.",
          "These treatments have become one of the most widely used forms of hormone therapy worldwide."
        ]
      },
      {
        h3: "LHRH Antagonists",
        blocks: [
          "Unlike agonists, these medications rapidly suppress testosterone production without causing an initial hormone surge.",
          "This approach may be preferred in certain clinical situations where immediate testosterone reduction is desirable."
        ]
      },
      {
        h3: "Anti-Androgen Therapy",
        blocks: [
          "Anti-androgens work differently from testosterone-lowering treatments.",
          "Instead of reducing hormone production, they block testosterone from attaching to cancer cells.",
          "This prevents cancer cells from receiving growth signals.",
          { list: { lead: "Anti-androgens may be used:", items: ["Alone in selected cases", "Alongside other hormone therapies", "As part of combination treatment strategies"] } }
        ]
      },
      {
        h3: "Combined Androgen Blockade",
        blocks: [
          "Some patients receive multiple hormone therapy approaches simultaneously.",
          "This strategy aims to maximize suppression of androgen activity.",
          { list: { lead: "Treatment decisions depend on:", items: ["Cancer stage", "Disease burden", "Previous treatment history", "Overall treatment goals"] } }
        ]
      },
      {
        h3: "Surgical Hormonal Suppression",
        blocks: [
          "Although less common today, surgical removal of the testicles remains a highly effective method of permanently reducing testosterone production.",
          "The procedure provides immediate hormonal suppression and may be considered in selected circumstances."
        ]
      }
    ]
  },
  {
    id: "therapy-before",
    title: "Hormone Therapy Before Other Treatments",
    blocks: [
      "In some situations, hormone therapy may be initiated before additional treatments begin.",
      { list: { lead: "This approach may help:", items: ["Reduce tumor activity", "Improve treatment planning", "Lower disease burden", "Enhance the effectiveness of subsequent therapies"] } },
      "The timing and duration depend on the patient's treatment pathway."
    ]
  },
  {
    id: "therapy-during",
    title: "Hormone Therapy During Treatment",
    blocks: [
      "Hormone therapy is frequently administered alongside other treatment modalities.",
      "The rationale is to increase overall treatment effectiveness and improve long-term disease control.",
      "Treatment schedules are carefully coordinated by oncology teams to ensure optimal timing."
    ]
  },
  {
    id: "therapy-after",
    title: "Hormone Therapy After Primary Treatment",
    blocks: [
      "Certain patients continue hormone therapy after completing their primary treatment.",
      "This extended treatment period may help reduce recurrence risk and support long-term disease management.",
      "The duration varies considerably depending on the patient's risk profile and response to therapy."
    ]
  },
  {
    id: "monitoring-response",
    title: "Monitoring Treatment Response",
    blocks: [
      "Hormone therapy requires ongoing evaluation.",
      { list: { lead: "Doctors regularly assess:", items: ["PSA levels", "Testosterone levels", "Clinical symptoms", "Imaging findings", "Disease progression indicators"] } },
      "Regular monitoring helps determine whether treatment is achieving its intended objectives."
    ]
  },
  {
    id: "crpc",
    title: "Understanding Castration-Resistant Prostate Cancer",
    blocks: [
      "Over time, some prostate cancers adapt to low-testosterone environments.",
      "When cancer continues to grow despite effective hormone suppression, it may be classified as castration-resistant prostate cancer (CRPC).",
      "This does not mean treatment has failed entirely.",
      "Instead, it indicates that the disease has developed alternative growth mechanisms.",
      "Additional treatment strategies may then be considered."
    ]
  },
  {
    id: "benefits",
    title: "Benefits of Hormone Therapy",
    blocks: ["Hormone therapy offers several important advantages."],
    subs: [
      { h3: "Non-Surgical Approach", blocks: ["Many patients can receive treatment without undergoing major surgery."] },
      { h3: "Disease Control", blocks: ["Hormone therapy can significantly slow cancer progression."] },
      { h3: "Symptom Management", blocks: ["Patients with advanced disease may experience relief from cancer-related symptoms."] },
      { h3: "Flexibility", blocks: ["Multiple treatment approaches can be tailored to individual patient needs."] },
      { h3: "Compatibility with Other Treatments", blocks: ["Hormone therapy can be integrated into comprehensive treatment plans."] }
    ]
  },
  {
    id: "side-effects",
    title: "Potential Side Effects of Hormone Therapy",
    blocks: [
      "Because testosterone influences many bodily functions, hormone therapy can produce various side effects.",
      { list: { lead: "Common effects may include:", items: ["Hot flashes", "Fatigue", "Reduced libido", "Erectile dysfunction", "Mood changes", "Weight gain", "Muscle loss", "Reduced energy levels"] } },
      "Not all patients experience the same side effects, and severity varies considerably."
    ]
  },
  {
    id: "long-term-health",
    title: "Long-Term Health Considerations",
    blocks: ["Patients receiving long-term hormone therapy require ongoing monitoring for potential health effects.", "Areas of focus may include:"],
    subs: [
      { h3: "Bone Health", blocks: ["Reduced testosterone can affect bone density over time."] },
      { h3: "Cardiovascular Health", blocks: ["Doctors may monitor cardiovascular risk factors during treatment."] },
      { h3: "Metabolic Changes", blocks: ["Blood sugar levels, cholesterol levels, and body composition may change during therapy."] },
      { h3: "Physical Function", blocks: ["Exercise and lifestyle interventions may help support overall health."] }
    ]
  },
  {
    id: "lifestyle-strategies",
    title: "Lifestyle Strategies During Hormone Therapy",
    blocks: [
      "Many patients benefit from proactive lifestyle management.",
      { list: { lead: "Important recommendations often include:", items: ["Regular physical activity", "Strength training exercises", "Balanced nutrition", "Adequate sleep", "Stress management", "Routine medical follow-up"] } },
      "Healthy lifestyle habits may help reduce treatment-related side effects and improve overall well-being."
    ]
  },
  {
    id: "living-with-therapy",
    title: "Living with Hormone Therapy",
    blocks: [
      "Many patients remain on hormone therapy for extended periods while maintaining active and productive lives.",
      "The treatment experience varies from person to person.",
      { list: { lead: "Successful long-term management often depends on:", items: ["Consistent monitoring", "Open communication with healthcare providers", "Early management of side effects", "Ongoing support from family and caregivers"] } },
      "Patient education plays an important role in helping individuals adapt to treatment and maintain quality of life."
    ]
  },
  {
    id: "future-developments",
    title: "Future Developments in Hormone Therapy",
    blocks: [
      "Research continues to advance the field of prostate cancer treatment.",
      { list: { lead: "Emerging developments include:", items: ["Next-generation hormonal agents", "Precision medicine approaches", "Biomarker-guided treatment selection", "Combination treatment strategies", "Personalized therapy sequencing"] } },
      "These innovations continue to improve treatment possibilities for prostate cancer patients worldwide."
    ]
  },
  {
    id: "how-ekam-helps",
    title: "How Ekam Helps Patients Access Hormone Therapy in India",
    blocks: [
      "Ekam helps patients connect with experienced prostate cancer specialists and leading oncology centers across India.",
      { list: { lead: "Support services may include:", items: ["Medical case review", "Specialist recommendations", "Treatment planning assistance", "Hospital selection guidance", "International patient support", "Follow-up coordination"] } },
      "This helps patients make informed decisions regarding hormone therapy and overall prostate cancer management."
    ]
  },
  {
    id: "conclusion",
    title: "Conclusion",
    blocks: [
      "Hormone therapy remains a cornerstone of prostate cancer treatment and plays an important role in managing localized, recurrent, advanced, and metastatic disease. By reducing or blocking the effects of testosterone, hormone therapy can slow cancer growth, improve disease control, and enhance long-term outcomes for many patients. With ongoing advancements in hormonal treatments and personalized cancer care, hormone therapy continues to be an essential component of modern prostate cancer management."
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

  if (React.isValidElement(block)) {
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

export default function HormoneTherapyProstateCancerIndia() {
  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div style={{ fontFamily: "Arial, Helvetica, sans-serif", background: "var(--color-bg)" }} className="min-h-screen text-[#1F2933]">

        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(120deg, var(--color-navy) 0%, var(--color-blue) 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 39px, #ffffff 39px, #ffffff 40px)" }}
          />
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
            <h1 className="text-white text-4xl md:text-6xl leading-[1.05] mb-6 max-w-3xl font-bold">
              Hormone Therapy for Prostate Cancer
            </h1>
            <p className="text-[#DCE8F7] text-lg leading-relaxed max-w-2xl">
              Explore hormone therapy (ADT) for prostate cancer in India, including how it works, treatment benefits, eligibility, side effects, and advanced oncology care at leading hospitals.
            </p>
          </div>
        </section>

        {/* PAGE BODY */}
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-10 gap-10">

          <div className="lg:col-span-7">

            {/* TOC */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-8 mb-10">
              <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-navy)" }}>In this page</h2>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 max-h-[420px] overflow-y-auto pr-2">
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
                      href="/doctors/best-prostate-cancer-doctors-in-india"
                      className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                    >
                      <span className="font-medium text-[#053161] group-hover:text-white transition">
                        → Best Prostate Cancer Doctors in India
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
                      href="/blog/metastatic-prostate-cancer-treatment-india"
                      className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                    >
                      <span className="font-medium text-[#053161] group-hover:text-white transition">
                        → Metastatic Prostate Cancer Treatment in India
                      </span>
                    </Link>
              
                    <Link
                      href="/blog/medical-visa-cancer-treatment-india"
                      className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
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

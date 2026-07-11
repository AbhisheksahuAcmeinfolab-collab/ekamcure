import Script from "next/script";
import React from "react";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Why Choose India for Prostate Cancer Treatment? | Ekam Cure",
  description:
    "Discover why international patients choose India for prostate cancer treatment — experienced specialists, robotic surgery, advanced radiation oncology, and personalized, patient-focused care.",
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
      "name": "Why Choose India for Prostate Cancer Treatment?",
      "item": "https://www.ekamcure.com/blog/why-choose-india-for-prostate-cancer-treatment"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Why Choose India for Prostate Cancer Treatment?",
  "description":
    "Discover why international patients choose India for prostate cancer treatment — experienced specialists, robotic surgery, advanced radiation oncology, and personalized, patient-focused care.",
  "publisher": {
    "@type": "Organization",
    "name": "Ekam Cure",
    "logo": { "@type": "ImageObject", "url": "https://www.ekamcure.com/_next/static/media/Ekam-logo-300x133.bd70579a.webp" }
  }
};


const sections = [
  {
    id: "intro",
    title: "Introduction",
    blocks: [
      "Prostate cancer patients today have access to treatment options in many countries around the world. However, an increasing number of international patients are choosing India for their cancer care due to the combination of advanced medical expertise, modern healthcare infrastructure, internationally trained specialists, and patient-focused services.",
      "India has established itself as one of the leading destinations for medical tourism, particularly in the field of oncology. Patients from Africa, the Middle East, Central Asia, Southeast Asia, and other regions travel to India seeking high-quality prostate cancer treatment delivered through globally recognized healthcare institutions.",
      "For many patients, the decision extends beyond medical treatment alone. Factors such as accessibility, treatment timelines, multidisciplinary care, and personalized patient support also play an important role when selecting a destination for cancer treatment."
    ]
  },
  {
    id: "specialists",
    title: "Access to Experienced Prostate Cancer Specialists",
    blocks: [
      "One of India's greatest strengths is its large network of highly qualified cancer specialists.",
      { list: { lead: "Leading hospitals across the country are staffed by experienced:", items: ["Uro-oncologists", "Surgical oncologists", "Radiation oncologists", "Medical oncologists", "Robotic surgeons"] } },
      "Many specialists have received advanced training from internationally recognized institutions and regularly participate in global cancer conferences, research programs, and academic collaborations.",
      "The availability of experienced multidisciplinary teams ensures that patients receive comprehensive evaluation and treatment recommendations tailored to their individual needs."
    ]
  },
  {
    id: "infrastructure",
    title: "Advanced Healthcare Infrastructure",
    blocks: [
      "India's leading cancer hospitals have invested heavily in modern medical infrastructure.",
      { list: { lead: "Many facilities feature:", items: ["Dedicated cancer centers", "Comprehensive oncology departments", "Specialized surgical suites", "Advanced imaging facilities", "Precision radiation oncology units", "Robotic surgical platforms"] } },
      "This infrastructure allows hospitals to manage a wide range of prostate cancer cases, from early-stage disease to complex and advanced conditions.",
      "Patients benefit from access to modern technologies within integrated healthcare environments designed specifically for cancer care."
    ]
  },
  {
    id: "robotic-surgery",
    title: "Availability of Robotic Surgery Programs",
    blocks: [
      "India has become one of the leading destinations for robotic-assisted prostate cancer surgery.",
      "Many major hospitals are equipped with advanced robotic surgical systems that support minimally invasive procedures.",
      { list: { lead: "Robotic surgery programs offer patients access to:", items: ["Precision-guided surgical techniques", "Enhanced visualization", "Improved surgical dexterity", "Smaller incisions", "Faster recovery pathways"] } },
      "The growing adoption of robotic technology has significantly strengthened India's position as a preferred destination for prostate cancer treatment."
    ]
  },
  {
    id: "multidisciplinary-care",
    title: "Multidisciplinary Cancer Care",
    blocks: [
      "Modern cancer treatment requires collaboration among multiple specialists.",
      "Leading hospitals in India follow a multidisciplinary approach where experts from different specialties work together to develop personalized treatment strategies.",
      { list: { lead: "This collaborative model may involve:", items: ["Tumor board discussions", "Joint treatment planning", "Integrated follow-up programs", "Coordinated patient management"] } },
      "Such collaboration helps ensure that patients receive balanced recommendations based on their specific clinical circumstances."
    ]
  },
  {
    id: "radiation-tech",
    title: "Access to Modern Radiation Oncology Technologies",
    blocks: [
      "India's cancer centers have rapidly expanded their radiation oncology capabilities.",
      { list: { lead: "Many hospitals now offer:", items: ["Image-guided radiation therapy", "Intensity-modulated radiation therapy", "Volumetric arc therapy", "Stereotactic radiation therapy", "Advanced treatment planning systems"] } },
      "These technologies support highly precise treatment delivery and allow radiation oncologists to personalize therapy according to each patient's needs."
    ]
  },
  {
    id: "waiting-times",
    title: "Shorter Waiting Times",
    blocks: [
      "In many countries, cancer patients may experience delays before consultations, diagnostic evaluations, or treatment initiation.",
      "India is often able to provide faster access to specialists and treatment services.",
      "For international patients, this can be particularly valuable because timely intervention is an important aspect of cancer management.",
      "Many hospitals offer streamlined scheduling processes that help reduce unnecessary delays."
    ]
  },
  {
    id: "international-services",
    title: "International Patient-Friendly Services",
    blocks: [
      "India's leading hospitals have extensive experience managing international patients.",
      { list: { lead: "Dedicated international patient departments often assist with:", items: ["Medical report reviews", "Virtual consultations", "Treatment scheduling", "Medical visa support", "Airport transfers", "Accommodation arrangements", "Language interpretation services"] } },
      "These support systems help create a smoother experience for patients traveling from overseas."
    ]
  },
  {
    id: "personalized-planning",
    title: "Personalized Treatment Planning",
    blocks: [
      "Every prostate cancer case is unique.",
      "India's top cancer centers emphasize individualized treatment planning rather than relying on standardized treatment pathways.",
      { list: { lead: "Specialists consider factors such as:", items: ["Disease characteristics", "Patient age", "General health status", "Previous treatments", "Personal preferences", "Long-term goals"] } },
      "This patient-centered approach supports informed decision-making and personalized care."
    ]
  },
  {
    id: "support-services",
    title: "Access to Comprehensive Support Services",
    blocks: [
      "Cancer treatment extends beyond medical procedures.",
      { list: { lead: "Many hospitals provide supportive care services that may include:", items: ["Nutrition counseling", "Rehabilitation programs", "Psychological support", "Pain management", "Survivorship planning", "Follow-up coordination"] } },
      "These services contribute to a more holistic treatment experience and help patients navigate the challenges associated with cancer care."
    ]
  },
  {
    id: "medical-tourism-reputation",
    title: "Strong Reputation in Medical Tourism",
    blocks: [
      "India has developed a strong reputation among international patients seeking specialized healthcare.",
      { list: { lead: "The country's medical tourism ecosystem includes:", items: ["Globally recognized hospitals", "Experienced healthcare professionals", "Dedicated international patient coordinators", "Well-established travel support services"] } },
      "As a result, many patients feel confident traveling to India for complex cancer treatments."
    ]
  },
  {
    id: "english-speaking",
    title: "English-Speaking Healthcare Environment",
    blocks: [
      "Communication is an important consideration for international patients.",
      "English is widely used throughout India's healthcare system, making it easier for many international patients to communicate with doctors, nurses, and support staff.",
      { list: { lead: "This facilitates:", items: ["Treatment discussions", "Medical documentation review", "Follow-up planning", "Shared decision-making"] } },
      "Effective communication contributes to a more comfortable patient experience."
    ]
  },
  {
    id: "continuity-of-care",
    title: "Continuity of Care and Long-Term Follow-Up",
    blocks: [
      "The treatment journey does not end after a procedure or therapy session.",
      "Leading hospitals in India increasingly provide structured follow-up programs that support long-term monitoring and ongoing patient care.",
      "Many institutions also offer virtual follow-up consultations, enabling international patients to remain connected with their treatment teams after returning home.",
      "This continuity helps ensure that patients continue receiving appropriate guidance throughout their recovery and survivorship journey."
    ]
  },
  {
    id: "innovation-research",
    title: "Growing Focus on Innovation and Research",
    blocks: [
      "India's oncology landscape continues to evolve through research, innovation, and adoption of emerging technologies.",
      { list: { lead: "Many leading hospitals participate in:", items: ["Clinical research programs", "International collaborations", "Academic oncology initiatives", "Technology-driven cancer care projects"] } },
      "These efforts contribute to ongoing improvements in patient care and treatment delivery."
    ]
  },
  {
    id: "why-trust-india",
    title: "Why International Patients Trust India for Prostate Cancer Treatment",
    blocks: [
      { list: { lead: "Patients often choose India because it offers a unique combination of:", items: ["Experienced specialists", "Modern hospitals", "Advanced technologies", "Multidisciplinary care", "Efficient treatment pathways", "International patient support", "Personalized treatment planning"] } },
      "These factors have helped position India as a trusted destination for prostate cancer treatment among patients from around the world."
    ]
  },
  {
    id: "how-ekam-helps",
    title: "How Ekam Helps International Patients",
    blocks: [
      "Navigating healthcare options in another country can be challenging.",
      "Ekam helps simplify the process by connecting patients with leading prostate cancer specialists and hospitals across India.",
      { list: { lead: "Patients can receive assistance with:", items: ["Medical case evaluation", "Specialist recommendations", "Hospital selection", "Treatment coordination", "Travel planning", "Medical visa guidance", "Follow-up support"] } },
      "This personalized approach helps patients make informed decisions and access appropriate cancer care with greater confidence."
    ]
  },
  {
    id: "conclusion",
    title: "Conclusion",
    blocks: [
      "India has become a preferred destination for prostate cancer treatment because of its experienced specialists, advanced medical infrastructure, multidisciplinary care model, and comprehensive international patient services. From modern robotic surgery programs to precision radiation oncology and personalized treatment planning, patients can access world-class cancer care within a healthcare system that is increasingly recognized on the global stage. For international patients seeking expert prostate cancer treatment, India continues to offer a compelling combination of expertise, innovation, accessibility, and patient-centered care."
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

export default function WhyChooseIndiaProstateCancerTreatment() {
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
              Why Choose India for Prostate Cancer Treatment?
            </h1>
            <p className="text-[#DCE8F7] text-lg leading-relaxed max-w-2xl">
              Experienced specialists, robotic surgery, advanced radiation oncology, and personalized, patient-focused care — explore why international patients choose India for prostate cancer treatment.
            </p>
          </div>
        </section>

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

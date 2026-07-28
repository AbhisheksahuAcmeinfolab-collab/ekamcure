import Script from "next/script";
import React from "react";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Best Cancer Hospitals in India | Top Oncology Hospitals & Cancer Care",
  description:
    "Explore the best cancer hospitals in India offering advanced oncology care, experienced cancer specialists, modern technology, and comprehensive treatment for international and domestic patients.",
};

/* ---------------------------------------------------------------------
   Brand tokens — read from CSS custom properties. Add to global.css:

     :root {
       --color-navy: #053161;
       --color-blue: #6796cc;
       --color-mid-blue: #1B4F9C;
       --color-bg: #F5F8FC;
     }

   Font: Arial, Helvetica, sans-serif (site default)
--------------------------------------------------------------------- */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.ekamcure.com/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.ekamcure.com/blog" },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Best Cancer Hospitals in India",
      "item": "https://www.ekamcure.com/blog/best-cancer-hospitals-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Best Cancer Hospitals in India",
  "description":
    "Explore the best cancer hospitals in India offering advanced oncology care, experienced cancer specialists, modern technology, and comprehensive treatment for international and domestic patients.",
  "publisher": {
    "@type": "Organization",
    "name": "Ekam Cure",
    "logo": { "@type": "ImageObject", "url": "https://www.ekamcure.com/_next/static/media/Ekam-logo-300x133.bd70579a.webp" }
  }
};

/* ---------------------------------------------------------------------
   Content — verbatim from the source, organized for the section templates
--------------------------------------------------------------------- */

const introParagraphs = [
  "India has become one of the world's most trusted destinations for advanced cancer treatment, welcoming thousands of international patients every year. Patients from Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Ghana, Sudan, South Sudan, Zambia, Zimbabwe, Rwanda, DR Congo, Sierra Leone, Liberia, Malawi, the Maldives, Fiji, Papua New Guinea, and the Solomon Islands increasingly choose India for its experienced oncologists, comprehensive cancer centers, advanced medical technology, and internationally accepted treatment protocols.",
  "One of the most crucial choices a patient and their family will make is selecting the best cancer hospital. Beyond medical expertise, factors such as multidisciplinary cancer care, disease-specific specialists, advanced diagnostic and treatment technologies, hospital accreditation, and dedicated international patient services play a crucial role in ensuring the best possible treatment experience. By carefully evaluating these aspects, international patients can select a hospital that matches their medical needs while receiving personalized care throughout their treatment journey in India."
];

const whyMattersParagraphs = [
  "Cancer treatment often requires collaboration between multiple specialists, including surgical oncologists, medical oncologists, radiation oncologists, radiologists, pathologists, rehabilitation experts, and supportive care teams.",
  "A well-equipped cancer hospital offers a coordinated approach where specialists work together to develop individualized treatment plans. This multidisciplinary model helps ensure that patients receive comprehensive care tailored to their specific medical needs.",
  "In addition to clinical expertise, leading cancer hospitals provide advanced diagnostic facilities, modern surgical infrastructure, specialized cancer units, and dedicated support services for both domestic and international patients."
];

const characteristics = [
  {
    id: "comprehensive-care",
    title: "Comprehensive Cancer Care Under One Roof",
    paragraphs: [
      "Top cancer hospitals provide access to a wide range of oncology services within a single facility. This integrated approach simplifies treatment planning and reduces the need for patients to visit multiple centers for consultations, diagnostics, surgery, or follow-up care.",
      "Comprehensive cancer centers typically include specialized departments for medical oncology, surgical oncology, radiation oncology, nuclear medicine, pathology, radiology, and rehabilitation services."
    ]
  },
  {
    id: "tumor-boards",
    title: "Multidisciplinary Tumor Boards",
    paragraphs: [
      "One of the defining features of leading cancer hospitals is the presence of multidisciplinary tumor boards. These expert panels review complex cancer cases collectively and recommend personalized treatment strategies based on international clinical guidelines.",
      "The involvement of multiple specialists helps improve decision-making and ensures that patients benefit from a balanced and evidence-based approach."
    ]
  },
  {
    id: "advanced-technology",
    title: "Advanced Medical Technology",
    paragraphs: [
      "Modern cancer hospitals invest heavily in advanced technologies that support accurate diagnosis, precision treatment, and improved patient outcomes.",
      "Leading hospitals in India often feature:"
    ],
    items: ["Robotic surgical systems", "Advanced radiation therapy platforms", "PET-CT imaging", "High-resolution MRI and CT scanners", "Molecular diagnostics", "Precision oncology programs"],
    trailing: ["Access to such technologies enables hospitals to manage a broad spectrum of cancer cases effectively."]
  },
  {
    id: "specialized-departments",
    title: "Specialized Cancer Departments",
    paragraphs: ["The best hospitals typically have dedicated teams for various cancer types, including:"],
    items: ["Breast Cancer", "Lung Cancer", "Prostate Cancer", "Liver Cancer", "Blood Cancer", "Head and Neck Cancer", "Gastrointestinal Cancers", "Gynecological Cancers", "Bone and Soft Tissue Tumors", "Pediatric Cancers"],
    trailing: ["Specialized departments allow doctors to develop deeper expertise in managing specific cancer conditions."]
  },
  {
    id: "international-patient-services",
    title: "International Patient Services",
    paragraphs: [
      "India's leading cancer hospitals are experienced in treating international patients and often provide dedicated support programs designed to simplify the treatment journey.",
      "These services may include:"
    ],
    items: ["Online medical opinion reviews", "Virtual consultations", "Treatment planning assistance", "Medical visa support", "Airport transfers", "Accommodation guidance", "Language interpretation services", "Dedicated patient coordinators"],
    trailing: ["Such support helps international patients focus on their recovery while minimizing logistical challenges."]
  },
  {
    id: "accreditation",
    title: "Accreditation and Quality Standards",
    paragraphs: [
      "When evaluating cancer hospitals, accreditation is an important consideration.",
      "Many top hospitals in India maintain internationally recognized quality standards and follow rigorous clinical protocols to ensure patient safety and treatment excellence.",
      "Accredited hospitals generally demonstrate strong performance in areas such as:"
    ],
    items: ["Patient safety", "Clinical governance", "Infection control", "Quality assurance", "Medical record management", "Continuous staff training"],
    trailing: ["These standards help build confidence among patients seeking cancer treatment abroad."]
  },
  {
    id: "research-innovation",
    title: "Research and Innovation",
    paragraphs: [
      "The best cancer hospitals are not only treatment centers but also hubs of medical research and innovation.",
      "Many leading institutions participate in:"
    ],
    items: ["Clinical trials", "Oncology research programs", "International collaborations", "Academic publications", "Medical conferences"],
    trailing: ["Their involvement in research helps ensure access to evolving treatment approaches and emerging technologies within the field of oncology."]
  },
  {
    id: "patient-centered-care",
    title: "Patient-Centered Cancer Care",
    paragraphs: [
      "Modern cancer treatment extends beyond medical procedures. Leading hospitals increasingly focus on delivering holistic care that addresses the physical, emotional, nutritional, and psychological needs of patients.",
      "Patient-centered services often include:"
    ],
    items: ["Pain management programs", "Psycho-oncology support", "Nutritional counseling", "Rehabilitation services", "Survivorship programs", "Palliative care support"],
    trailing: ["These services play an important role in improving the overall patient experience and quality of life."]
  }
];

const considerations = [
  { title: "Clinical Expertise", desc: "Review the hospital's experience in managing the specific type of cancer involved." },
  { title: "Infrastructure", desc: "Evaluate the accessibility of cutting-edge technologies for diagnosis and treatment." },
  { title: "Specialist Availability", desc: "Ensure access to experienced oncologists and multidisciplinary teams." },
  { title: "International Patient Support", desc: "For overseas patients, dedicated international care services can significantly improve treatment coordination." },
  { title: "Transparency", desc: "Choose hospitals that provide clear communication regarding treatment planning, expected timelines, and patient support services." },
  { title: "Follow-Up Care", desc: "Long-term monitoring and follow-up services are important components of comprehensive cancer management." }
];

const whyForeignPatientsParagraphs = [
  "India is a preferred destination for cancer treatment due to its experienced oncologists, advanced medical technology, internationally accredited hospitals, and affordable treatment options. Patients from Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Ghana, Sudan, South Sudan, Zambia, Zimbabwe, Rwanda, DR Congo, Sierra Leone, Liberia, Malawi, the Maldives, Fiji, Papua New Guinea, and the Solomon Islands choose India for comprehensive cancer care, modern treatment facilities, and personalized medical support.",
  "Leading hospitals also offer dedicated international patient services, including medical visa assistance, treatment planning, accommodation guidance, and follow-up care, making the treatment journey smooth and convenient for overseas patients."
];

const ekamHelpIntro = "Selecting a cancer hospital can be overwhelming, especially for international patients unfamiliar with the Indian healthcare system. Ekam helps patients identify suitable cancer hospitals based on their diagnosis, medical requirements, treatment preferences, and travel considerations. The platform assists patients with:";
const ekamHelpItems = ["Hospital selection guidance", "Specialist recommendations", "Medical record review", "Treatment planning support", "Medical visa assistance", "Travel coordination", "Ongoing patient support"];
const ekamHelpTrailing = "By connecting patients with leading healthcare providers across India, Ekam helps simplify the decision-making process and ensures access to quality cancer care.";

const conclusionParagraph =
  "Finding the best cancer hospitals in India requires careful evaluation of clinical expertise, multidisciplinary care, infrastructure, technology, accreditation, and patient support services. India's leading cancer centers continue to attract patients from around the world by offering comprehensive oncology care and internationally recognized medical expertise. With the right hospital and specialist team, patients can confidently begin their treatment journey while benefiting from advanced cancer care in one of the world's fastest-growing healthcare destinations.";

const toc = [
  { href: "#why-it-matters", label: "Why Hospital Selection Matters" },
  { href: "#comprehensive-care", label: "Comprehensive Care Under One Roof" },
  { href: "#tumor-boards", label: "Multidisciplinary Tumor Boards" },
  { href: "#advanced-technology", label: "Advanced Medical Technology" },
  { href: "#specialized-departments", label: "Specialized Cancer Departments" },
  { href: "#international-patient-services", label: "International Patient Services" },
  { href: "#accreditation", label: "Accreditation & Quality Standards" },
  { href: "#research-innovation", label: "Research and Innovation" },
  { href: "#patient-centered-care", label: "Patient-Centered Cancer Care" },
  { href: "#considerations", label: "Considerations for Selecting a Hospital" },
  { href: "#why-foreign-patients", label: "Why Foreign Patients Select India" },
  { href: "#how-ekam-helps", label: "How Ekam Helps" },
  { href: "#conclusion", label: "Conclusion" }
];

/* ---------------------------------------------------------------------
   Shared building blocks
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

function CharacteristicBlock({ c }) {
  return (
    <div id={c.id} className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-8 mb-6 scroll-mt-24">
      <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
        {c.title}
      </h3>

      {c.paragraphs.map((p, i) => (
        <p key={i} className="text-[#3E4C59] leading-relaxed mb-3 last:mb-0">
          {p}
        </p>
      ))}

      {c.items && (
        <div className="flex flex-wrap gap-2 my-4">
          {c.items.map((item, i) => (
            <Tag key={i}>{item}</Tag>
          ))}
        </div>
      )}

      {c.trailing &&
        c.trailing.map((p, i) => (
          <p key={i} className="text-[#3E4C59] leading-relaxed mt-2">
            {p}
          </p>
        ))}
    </div>
  );
}

/* ---------------------------------------------------------------------
   Page
--------------------------------------------------------------------- */

export default function BestCancerHospitalsIndia() {
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
              Best Cancer Hospitals in India
            </h1>
            <p className="text-[#DCE8F7] text-lg leading-relaxed max-w-2xl">
              Explore the best cancer hospitals in India offering advanced oncology care, experienced cancer specialists, modern technology, and comprehensive treatment for international and domestic patients.
            </p>
          </div>
        </section>

        {/* PAGE BODY */}
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-10 gap-10">

          <div className="lg:col-span-7">

            {/* TOC */}
            <div className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-8 mb-10">
              <h2 className="text-lg font-bold mb-4" style={{ color: "var(--color-navy)" }}>In this page</h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {toc.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="text-sm py-1 hover:underline"
                    style={{ color: "var(--color-mid-blue)" }}
                  >
                    › {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* INTRO */}
            <section className="mb-14">
              {introParagraphs.map((p, i) => (
                <p key={i} className="text-[#3E4C59] leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </section>

            {/* WHY IT MATTERS */}
            <section className="mb-14" id="why-it-matters">
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "var(--color-navy)" }}>
                Why Hospital Selection Matters in Cancer Care
              </h2>
              <div className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-8">
                {whyMattersParagraphs.map((p, i) => (
                  <p key={i} className="text-[#3E4C59] leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* CHARACTERISTICS */}
            <section className="mb-14">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--color-navy)" }}>
                Characteristics of the Best Cancer Hospitals in India
              </h2>
              {characteristics.map((c) => (
                <CharacteristicBlock key={c.id} c={c} />
              ))}
            </section>

            {/* CONSIDERATIONS */}
            <section className="mb-14" id="considerations">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "var(--color-navy)" }}>
                Considerations for Selecting a Cancer Hospital
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-6">
                Patients should evaluate several factors before selecting a hospital.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {considerations.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6">
                    <h3 className="font-bold mb-2" style={{ color: "var(--color-mid-blue)" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#3E4C59] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* WHY FOREIGN PATIENTS */}
            <section className="mb-14" id="why-foreign-patients">
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "var(--color-navy)" }}>
                Why Foreign Patients Select India for Cancer Treatment
              </h2>
              <div className="rounded-xl p-6 md:p-8" style={{ background: "linear-gradient(120deg, var(--color-navy) 0%, var(--color-mid-blue) 100%)" }}>
                {whyForeignPatientsParagraphs.map((p, i) => (
                  <p key={i} className="text-white/90 leading-relaxed mb-3 last:mb-0">
                    {p}
                  </p>
                ))}
              </div>
            </section>

            {/* HOW EKAM HELPS */}
            <section className="mb-14" id="how-ekam-helps">
              <h2 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: "var(--color-navy)" }}>
                How Ekam Helps Patients Find the Best Cancer Hospitals in India
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-6">{ekamHelpIntro}</p>
              <div className="rounded-xl p-6 md:p-8" style={{ background: "#EAF1FA" }}>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {ekamHelpItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-4 h-4 flex-shrink-0 border-2 rounded-sm" style={{ borderColor: "var(--color-mid-blue)" }} />
                      <span className="text-[#1F2933] leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-[#3E4C59] leading-relaxed mt-6">{ekamHelpTrailing}</p>
            </section>

            {/* CONCLUSION */}
            <section id="conclusion">
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
                Conclusion
              </h2>
              <blockquote
                className="text-xl md:text-2xl leading-snug pl-6 border-l-4 mb-2"
                style={{ fontWeight: 600, color: "var(--color-navy)", borderColor: "var(--color-blue)" }}
              >
                {conclusionParagraph}
              </blockquote>
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

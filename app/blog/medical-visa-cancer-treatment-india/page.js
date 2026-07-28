import Script from "next/script";
import Link from "next/link";
import React from "react";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Medical Visa for Cancer Treatment in India",
  description:
    "Learn how to apply for a medical visa for cancer treatment in India. Get guidance on eligibility, required documents, visa process, and medical travel support from Ekam.",
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
      "name": "Medical Visa for Cancer Treatment in India",
      "item": "https://www.ekamcure.com/blog/medical-visa-cancer-treatment-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Medical Visa for Cancer Treatment in India",
  "description":
    "Learn how to apply for a medical visa for cancer treatment in India. Get guidance on eligibility, required documents, visa process, and medical travel support from Ekam.",
  "publisher": {
    "@type": "Organization",
    "name": "Ekam Cure",
    "logo": { "@type": "ImageObject", "url": "https://www.ekamcure.com/_next/static/media/Ekam-logo-300x133.bd70579a.webp" }
  }
};

/* ---------------------------------------------------------------------
   FAQ content — used for both the on-page FAQ section and the schema
--------------------------------------------------------------------- */

const faqs = [
  { q: "Can I travel to India specifically for cancer treatment?", a: "Yes, eligible international patients can apply for a medical visa to receive treatment in India." },
  { q: "Can a family member accompany me?", a: "In many cases, eligible attendants can travel under a medical attendant visa." },
  { q: "Do I need a hospital invitation letter?", a: "Most medical visa applications require documentation from the treating hospital." },
  { q: "Can I extend my stay if treatment takes longer?", a: "Visa extension options may be available depending on medical circumstances and applicable regulations." },
  { q: "Should I bring my medical reports?", a: "Yes, carrying complete medical documentation helps facilitate consultations and treatment planning." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

/* ---------------------------------------------------------------------
   Article content — every paragraph / list / step from the source text.
   A "block" is either a plain string (paragraph) or an object:
     { list: { lead?, items: [...], trailing? } }
--------------------------------------------------------------------- */

const sections = [
  {
    id: "intro",
    title: "Introduction",
    blocks: [
      "India has become one of the world's leading destinations for cancer treatment, attracting thousands of international patients each year. With advanced oncology centers, experienced specialists, modern treatment technologies, and comprehensive patient support services, India offers access to high-quality cancer care for patients from across the globe.",
      "For international patients planning to travel to India for cancer treatment, obtaining the appropriate medical visa is an essential part of the treatment journey. A medical visa allows foreign nationals to enter India specifically for medical evaluation, treatment, surgery, follow-up care, and specialized healthcare services.",
      "Whether patients require advanced breast cancer treatment in India or specialized prostate cancer treatment in India, Ekam assists with hospital selection, treatment planning, medical visa support, and complete care coordination for a seamless treatment experience.",
      "Understanding the medical visa process can help patients and their families plan their travel more efficiently and avoid unnecessary delays before treatment begins."
    ]
  },
  {
    id: "what-is-medical-visa",
    title: "What Is a Medical Visa?",
    blocks: [
      "A medical visa is a special category of visa issued to foreign nationals who wish to travel to India for medical treatment.",
      "Unlike tourist visas, medical visas are specifically intended for patients seeking healthcare services at recognized hospitals and treatment centers.",
      "Patients receiving treatment for serious conditions such as cancer, organ transplantation, cardiac diseases, neurological disorders, and complex surgeries commonly apply under the medical visa category.",
      "The visa is generally issued based on medical documentation and confirmation from the treating hospital or healthcare provider."
    ]
  },
  {
    id: "why-need-visa",
    title: "Why Cancer Patients Need a Medical Visa",
    blocks: [
      "Cancer treatment often involves multiple stages of care that may extend over several weeks or months.",
      { list: { lead: "Patients may need to travel to India for:", items: ["Specialist consultations", "Diagnostic evaluations", "Surgical procedures", "Radiation therapy", "Chemotherapy", "Targeted therapies", "Follow-up appointments", "Long-term monitoring"] } },
      "A medical visa helps ensure that patients can legally enter and remain in India for the duration of their treatment plan."
    ]
  },
  {
    id: "who-can-apply",
    title: "Who Can Apply for a Medical Visa?",
    blocks: [
      "Patients diagnosed with medical conditions requiring specialized treatment in India may be eligible to apply.",
      { list: { lead: "Cancer patients commonly travel to India for:", items: ["Breast Cancer Treatment", "Prostate Cancer Treatment", "Lung Cancer Treatment", "Blood Cancer Treatment", "Liver Cancer Treatment", "Pancreatic Cancer Treatment", "Brain Tumor Treatment", "Bone Cancer Treatment", "Head and Neck Cancer Treatment"] } },
      "Eligibility requirements may vary depending on the applicant's country of residence and current immigration regulations."
    ]
  },
  {
    id: "documents-required",
    title: "Documents Required for a Medical Visa",
    blocks: ["Applicants typically need to provide supporting documentation when submitting a medical visa application.", "Common requirements may include:"],
    subs: [
      { h3: "Valid Passport", blocks: ["The passport should generally remain valid for the required travel period."] },
      { h3: "Recent Passport Photographs", blocks: ["Applicants may be asked to provide photographs that meet current visa application guidelines."] },
      { h3: "Medical Records", blocks: [{ list: { lead: "Relevant medical documents may include:", items: ["Diagnostic reports", "Imaging studies", "Biopsy reports", "Physician recommendations", "Treatment history"] } }] },
      { h3: "Hospital Invitation Letter", blocks: ["Many applications require a treatment invitation or appointment confirmation from the Indian hospital where treatment is planned."] },
      { h3: "Visa Application Form", blocks: ["Applicants must complete the official visa application form accurately and provide all requested information."] },
      { h3: "Proof of Financial Capability", blocks: ["Certain applicants may need to demonstrate their ability to cover treatment and travel expenses."] }
    ]
  },
  {
    id: "application-process",
    title: "The Medical Visa Application Process",
    blocks: ["Although procedures vary slightly between countries, the general process typically follows several steps."],
    steps: [
      { title: "Obtain Medical Evaluation", text: "Patients usually begin by sharing medical records with the selected hospital or healthcare facilitator." },
      { title: "Receive Hospital Acceptance", text: "After reviewing the case, the hospital may issue a treatment recommendation or invitation letter." },
      { title: "Complete Visa Application", text: "Applicants submit the required forms and supporting documents through the appropriate visa channels." },
      { title: "Attend Biometrics or Verification (If Required)", text: "Some applicants may need to complete additional verification procedures." },
      { title: "Await Processing", text: "Visa processing timelines vary depending on nationality, application volume, and local procedures." },
      { title: "Receive Visa Approval", text: "Upon approval, patients can finalize travel arrangements and prepare for treatment in India." }
    ]
  },
  {
    id: "attendant-visa",
    title: "Medical Attendant Visa for Family Members",
    blocks: [
      "Cancer treatment often requires emotional and logistical support from family members.",
      "India allows eligible attendants to accompany patients under a medical attendant visa category.",
      { list: { lead: "This option may benefit:", items: ["Spouses", "Parents", "Adult children", "Caregivers"] } },
      "Attendant visas are generally linked to the patient's medical visa and are subject to applicable immigration requirements."
    ]
  },
  {
    id: "benefits",
    title: "Benefits of Obtaining a Medical Visa",
    blocks: ["A medical visa offers several advantages for international patients."],
    subs: [
      { h3: "Purpose-Specific Travel Authorization", blocks: ["The visa is specifically designed for healthcare-related travel."] },
      { h3: "Longer Stay Flexibility", blocks: ["Cancer treatment may require multiple visits and extended monitoring."] },
      { h3: "Easier Treatment Coordination", blocks: ["Hospitals can often assist patients more effectively when travel documentation aligns with medical treatment plans."] },
      { h3: "Access to Follow-Up Care", blocks: ["Patients may return for additional evaluations, consultations, or ongoing treatment as needed."] }
    ]
  },
  {
    id: "planning-travel",
    title: "Planning Travel for Cancer Treatment in India",
    blocks: ["Proper planning can help patients focus on their treatment rather than logistical challenges.", "Important considerations include:"],
    subs: [
      { h3: "Scheduling Appointments", blocks: ["Confirm consultation and treatment dates before booking travel."] },
      { h3: "Accommodation Arrangements", blocks: ["Patients should select accommodations that provide convenient access to the treatment facility."] },
      { h3: "Travel Insurance", blocks: ["Review available insurance options that may support international medical travel."] },
      { h3: "Medical Documentation", blocks: ["Carry both digital and printed copies of important medical records."] },
      { h3: "Emergency Contacts", blocks: ["Maintain contact information for hospitals, physicians, and patient coordinators."] }
    ]
  },
  {
    id: "hospital-support",
    title: "How Indian Hospitals Support International Patients",
    blocks: [
      "Leading cancer hospitals often have dedicated international patient departments.",
      { list: { lead: "These teams may assist with:", items: ["Medical record review", "Treatment scheduling", "Airport pickup arrangements", "Accommodation guidance", "Language support", "Billing assistance", "Follow-up coordination"] } },
      "Such services help simplify the treatment experience for overseas patients."
    ]
  },
  {
    id: "common-challenges",
    title: "Common Challenges and How to Avoid Them",
    blocks: [],
    subs: [
      { h3: "Incomplete Documentation", blocks: ["Ensure all medical reports and required forms are submitted accurately."] },
      { h3: "Delayed Application Submission", blocks: ["Apply well in advance to avoid last-minute travel disruptions."] },
      { h3: "Unclear Treatment Planning", blocks: ["Request detailed treatment recommendations before beginning the visa process."] },
      { h3: "Travel Coordination Issues", blocks: ["Work closely with the hospital's international patient team for guidance."] }
    ]
  },
  {
    id: "visa-extensions",
    title: "Medical Visa Extensions",
    blocks: [
      "Some cancer patients may require longer treatment durations than initially anticipated.",
      "In such cases, visa extensions may be available according to applicable regulations and medical recommendations.",
      "Patients should consult the relevant authorities and healthcare providers regarding extension procedures if additional treatment time becomes necessary."
    ]
  },
  {
    id: "why-choose-india",
    title: "Why International Cancer Patients Choose India",
    blocks: [
      { list: { lead: "India continues to attract cancer patients because of:", items: ["Experienced oncology specialists", "Modern cancer centers", "Advanced treatment technologies", "Multidisciplinary care models", "International patient support programs", "Efficient treatment pathways"] } },
      "The country's healthcare ecosystem is well-equipped to manage the needs of overseas patients seeking specialized cancer care."
    ]
  },
  {
    id: "how-ekam-helps",
    title: "How Ekam Helps with Medical Visa Assistance",
    blocks: [
      "Navigating medical travel can be overwhelming for patients and families.",
      { list: { lead: "Ekam supports international patients throughout the treatment journey by assisting with:", items: ["Hospital selection", "Medical case evaluation", "Treatment planning", "Visa guidance", "Travel coordination", "Accommodation support", "Follow-up care planning"] } },
      "By helping patients connect with leading cancer specialists and hospitals in India, Ekam simplifies the process of accessing quality cancer care."
    ]
  },
  {
    id: "conclusion",
    title: "Conclusion",
    blocks: [
      "Obtaining a medical visa for cancer treatment in India is an important step for international patients seeking specialized oncology care. With proper planning, accurate documentation, and support from experienced healthcare providers, patients can navigate the visa process smoothly and focus on receiving appropriate treatment. India's growing reputation in cancer care, combined with dedicated international patient services, continues to make it a preferred destination for individuals seeking advanced medical treatment and comprehensive support throughout their healthcare journey."
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

function StepsList({ steps }) {
  return (
    <ol className="space-y-4">
      {steps.map((step, i) => (
        <li key={i} className="flex items-start gap-4">
          <span
            className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
            style={{ background: "var(--color-mid-blue)" }}
          >
            {i + 1}
          </span>
          <div className="pt-0.5">
            <h4 className="font-bold mb-1" style={{ color: "var(--color-navy)" }}>{step.title}</h4>
            <p className="text-sm text-[#3E4C59] leading-relaxed">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function Section({ s }) {
  const hasIntroBlocks = s.blocks && s.blocks.length > 0;
  return (
    <section id={s.id} className="mb-10 scroll-mt-24">
      <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>
        {s.title}
      </h2>

      {hasIntroBlocks && (
        <div className="bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-7">
          {s.blocks.map((b, i) => renderBlock(b, i))}
        </div>
      )}

      {s.steps && (
        <div className={`bg-white rounded-xl shadow-sm border border-[#E1E8F0] p-6 md:p-7 ${hasIntroBlocks ? "mt-4" : ""}`}>
          <StepsList steps={s.steps} />
        </div>
      )}

      {s.subs && (
        <div className={`space-y-4 ${hasIntroBlocks || s.steps ? "mt-4" : ""}`}>
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

export default function MedicalVisaCancerTreatmentIndia() {
  return (
    <>
      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              Medical Visa for Cancer Treatment in India
            </h1>
            <p className="text-[#DCE8F7] text-lg leading-relaxed max-w-2xl">
              Learn how to apply for a medical visa for cancer treatment in India. Get guidance on eligibility, required documents, visa process, and medical travel support from Ekam.
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
                <a href="#faqs" className="text-sm py-1 hover:underline" style={{ color: "var(--color-mid-blue)" }}>
                  › Frequently Asked Questions
                </a>
              </div>
            </div>

            {sections.map((s) => (
              <Section key={s.id} s={s} />
            ))}

            {/* FAQs */}
            <section className="mb-6" id="faqs">
              <h2 className="text-xl md:text-2xl font-bold mb-5" style={{ color: "var(--color-navy)" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-6 border"
                    style={{ background: i % 2 === 0 ? "#ffffff" : "var(--color-bg)", borderColor: "#E1E8F0" }}
                  >
                    <h3 className="font-bold mb-2" style={{ color: "var(--color-navy)" }}>{f.q}</h3>
                    <p className="text-sm text-[#3E4C59] leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
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
                            href="/blog/hormone-therapy-for-prostate-cancer-in-india"
                            className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300"
                          >
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                              → Hormone Therapy for Prostate Cancer
                            </span>
                          </Link>
                    
                          <Link
                            href="/blog/metastatic-prostate-cancer-treatment-india"
                            className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300 md:col-span-2"
                          >
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                              → Metastatic Prostate Cancer Treatment in India
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

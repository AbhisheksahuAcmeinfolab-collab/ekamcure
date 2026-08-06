import Script from "next/script";
import React from "react";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Top 10 Cancer Hospitals in India | Best Cancer Hospitals in India",
  description:
    "Discover the top 10 cancer hospitals in India offering advanced oncology care, experienced cancer specialists, robotic surgery, and comprehensive treatment for domestic and international patients.",
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
      "name": "Top 10 Cancer Hospitals in India",
      "item": "https://www.ekamcure.com/blog/top-10-cancer-hospitals-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Top 10 Cancer Hospitals in India",
  "description":
    "Discover the top 10 cancer hospitals in India offering advanced oncology care, experienced cancer specialists, robotic surgery, and comprehensive treatment for domestic and international patients.",
  "publisher": {
    "@type": "Organization",
    "name": "Ekam Cure",
    "logo": { "@type": "ImageObject", "url": "https://www.ekamcure.com/_next/static/media/Ekam-logo-300x133.bd70579a.webp" }
  }
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    "Tata Memorial Hospital, Mumbai",
    "All India Institute of Medical Sciences (AIIMS), New Delhi",
    "Apollo Hospitals, Chennai",
    "Max Super Speciality Hospital, Saket, New Delhi",
    "Fortis Memorial Research Institute (FMRI), Gurugram",
    "Rajiv Gandhi Cancer Institute & Research Centre (RGCIRC), New Delhi",
    "Kokilaben Dhirubhai Ambani Hospital, Mumbai",
    "Medanta – The Medicity, Gurugram",
    "HCG Cancer Centre (HealthCare Global)",
    "BLK-Max Super Speciality Hospital, New Delhi"
  ].map((name, i) => ({ "@type": "ListItem", "position": i + 1, "name": name }))
};

/* ---------------------------------------------------------------------
   Content data — every paragraph / list / callout from the source text
--------------------------------------------------------------------- */

const hospitals = [
  {
    rank: 1,
    name: "Tata Memorial Hospital",
    location: "Mumbai",
    intro: [
      "When discussions turn to cancer care in India, one name consistently earns recognition for its legacy, clinical expertise, and contribution to oncology research - Tata Memorial Hospital, Mumbai.",
      "Established in 1941, the hospital has played a defining role in shaping cancer treatment in the country. Over the decades, it has grown into one of Asia's largest comprehensive cancer centers, serving thousands of patients annually. Its combination of highly specialized medical teams, academic excellence, and research-driven care has made it a preferred destination for both Indian and international patients.",
      "One of the hospital's greatest strengths is its multidisciplinary approach. Patients are evaluated by teams of surgical oncologists, medical oncologists, radiation oncologists, radiologists, pathologists, and supportive care specialists who work together to develop individualized treatment plans."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Areas of Expertise",
        lead: "Tata Memorial Hospital treats virtually every major type of cancer, including:",
        items: ["Breast Cancer", "Lung Cancer", "Blood Cancer (Leukemia, Lymphoma, Myeloma)", "Head and Neck Cancer", "Gastrointestinal Cancer", "Pediatric Cancer", "Bone and Soft Tissue Sarcoma", "Gynecological Cancer", "Brain Tumors", "Urological Cancers"],
        trailing: "The institution is also recognized for its extensive clinical research programs, academic training, and participation in international oncology collaborations, ensuring patients benefit from evolving treatment strategies."
      },
      {
        type: "callout",
        heading: "Why Patients Choose Tata Memorial Hospital",
        paragraphs: ["Patients often select Tata Memorial because of its decades of experience, evidence-based treatment protocols, comprehensive oncology services, and reputation for managing highly complex cancer cases. Its commitment to cancer research and education has also helped establish national standards for oncology care."]
      }
    ]
  },
  {
    rank: 2,
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi",
    intro: [
      "Few healthcare institutions in India command as much respect as the All India Institute of Medical Sciences (AIIMS), New Delhi. Known for excellence in medical education, research, and patient care, AIIMS has become a trusted center for treating complex cancer cases across multiple specialties.",
      "Its oncology department combines advanced diagnostics, specialized surgical expertise, and multidisciplinary treatment planning to deliver comprehensive cancer care. Patients with rare or advanced cancers are frequently referred to AIIMS because of its extensive clinical experience and access to highly specialized medical teams."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Specialized Oncology Services",
        lead: "AIIMS provides treatment for a wide spectrum of cancers, including:",
        items: ["Brain Tumors", "Gastrointestinal Cancers", "Breast Cancer", "Lung Cancer", "Liver Cancer", "Blood Disorders and Hematological Malignancies", "Pediatric Oncology", "Head and Neck Cancer", "Bone Tumors"],
        trailing: "Modern diagnostic technologies, pathology laboratories, molecular testing, and sophisticated imaging facilities support accurate diagnosis and treatment planning."
      },
      {
        type: "callout",
        heading: "Focus on Research and Innovation",
        paragraphs: ["As one of India's premier academic institutions, AIIMS actively participates in oncology research, clinical trials, and translational medicine. This commitment allows specialists to integrate emerging evidence into clinical practice while continuously improving treatment standards."]
      },
      {
        type: "callout",
        heading: "Why Patients Consider AIIMS",
        paragraphs: ["Patients appreciate AIIMS for its experienced oncology specialists, multidisciplinary care model, research-oriented approach, and ability to manage challenging cancer cases with a high level of clinical expertise."]
      }
    ]
  },
  {
    rank: 3,
    name: "Apollo Hospitals",
    location: "Chennai",
    intro: [
      "Over the past several decades, Apollo Hospitals, Chennai has become one of India's most recognized private healthcare institutions. Its comprehensive cancer program combines internationally trained specialists, modern technology, and personalized treatment planning, attracting patients from more than 100 countries.",
      "Apollo's oncology department emphasizes precision medicine, allowing doctors to tailor therapies based on the biology of each patient's cancer. This individualized approach has helped improve outcomes while minimizing unnecessary treatment-related side effects."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Comprehensive Cancer Services",
        lead: "Apollo provides diagnosis and treatment for numerous cancers, including:",
        items: ["Breast Cancer", "Lung Cancer", "Prostate Cancer", "Liver Cancer", "Pancreatic Cancer", "Colorectal Cancer", "Kidney Cancer", "Bladder Cancer", "Ovarian Cancer", "Cervical Cancer"],
        trailing: "Patients also benefit from advanced services such as robotic-assisted surgery, minimally invasive procedures, precision radiation therapy, chemotherapy, immunotherapy, targeted therapy, and bone marrow transplantation."
      },
      {
        type: "tags",
        heading: "Advanced Technology",
        lead: "Apollo has invested significantly in modern oncology infrastructure, including:",
        items: ["Robotic Surgical Systems", "PET-CT Imaging", "Molecular Diagnostics", "Linear Accelerators", "Precision Radiation Therapy", "Genomic Testing"],
        trailing: "These technologies enable clinicians to detect cancer earlier, plan treatment more accurately, and improve surgical precision."
      },
      {
        type: "callout",
        heading: "International Patient Experience",
        paragraphs: ["Apollo's dedicated international patient services simplify every stage of treatment, from medical opinion reviews and appointment scheduling to travel assistance, accommodation guidance, and post-treatment follow-up."]
      }
    ]
  },
  {
    rank: 4,
    name: "Max Super Speciality Hospital",
    location: "Saket, New Delhi",
    intro: [
      "Max Super Speciality Hospital, Saket has established itself as one of India's leading destinations for advanced oncology care. Its multidisciplinary cancer institute combines experienced specialists with modern infrastructure, offering comprehensive treatment for both common and complex cancers.",
      "The hospital places strong emphasis on collaborative treatment planning. Medical oncologists, surgical oncologists, radiation oncologists, radiologists, and pathology experts jointly evaluate each patient's condition before recommending the most appropriate treatment strategy."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Cancer Specialties",
        lead: "Max Hospital provides specialized treatment for:",
        items: ["Breast Cancer", "Prostate Cancer", "Kidney Cancer", "Bladder Cancer", "Colorectal Cancer", "Liver Cancer", "Pancreatic Cancer", "Head and Neck Cancer", "Lung Cancer", "Gynecological Cancers"],
        trailing: "Its disease-specific teams ensure that patients receive focused expertise throughout every stage of diagnosis, treatment, and recovery."
      },
      {
        type: "tags",
        heading: "Modern Oncology Infrastructure",
        lead: "The hospital offers access to a wide range of advanced technologies designed to support accurate diagnosis and minimally invasive treatment, including:",
        items: ["Robotic-assisted cancer surgery", "High-resolution imaging systems", "Advanced radiation therapy", "Molecular pathology", "Precision diagnostics", "Image-guided treatment planning"],
        trailing: "These technologies allow specialists to develop personalized treatment plans aimed at maximizing effectiveness while preserving healthy tissue whenever possible."
      },
      {
        type: "callout",
        heading: "Patient-Centered Care",
        paragraphs: ["Beyond medical treatment, Max Hospital provides supportive services such as nutritional counseling, pain management, rehabilitation, psycho-oncology support, and survivorship programs. This holistic approach recognizes that successful cancer care extends beyond surgery or chemotherapy and includes addressing the physical, emotional, and psychological well-being of patients."]
      }
    ]
  },
  {
    rank: 5,
    name: "Fortis Memorial Research Institute (FMRI)",
    location: "Gurugram",
    intro: [
      "Known for its modern infrastructure and highly specialized medical teams, Fortis Memorial Research Institute (FMRI), Gurugram, has become one of India's leading destinations for advanced cancer treatment.",
      "The hospital follows a multidisciplinary model in which specialists from surgical oncology, medical oncology, radiation oncology, pathology, radiology, nuclear medicine, and rehabilitation work together to design personalized treatment plans. This collaborative approach helps ensure that every patient receives care tailored to the type, stage, and biological characteristics of their cancer."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Key Cancer Specialties",
        lead: "Fortis treats a broad range of malignancies, including:",
        items: ["Breast Cancer", "Lung Cancer", "Liver Cancer", "Gastrointestinal Cancers", "Pancreatic Cancer", "Prostate Cancer", "Kidney and Bladder Cancer", "Gynecological Cancers", "Brain Tumors", "Head and Neck Cancer"]
      },
      {
        type: "tags",
        heading: "Advanced Oncology Technologies",
        lead: "The hospital offers access to sophisticated technologies that support accurate diagnosis and precision treatment, including:",
        items: ["Robotic-assisted cancer surgery", "PET-CT imaging", "High-resolution MRI and CT scanning", "Image-Guided Radiation Therapy (IGRT)", "Intensity-Modulated Radiation Therapy (IMRT)", "Molecular diagnostics", "Precision oncology programs"],
        trailing: "These technologies help improve surgical accuracy, reduce recovery time, and enable targeted treatment while minimizing damage to healthy tissues."
      },
      {
        type: "callout",
        heading: "International Patient Support",
        paragraphs: ["Fortis has extensive experience in treating patients from Africa, the Middle East, Central Asia, and neighboring countries. Dedicated international patient coordinators assist with medical records, virtual consultations, visa documentation, accommodation, and travel arrangements, making the treatment journey more convenient."]
      }
    ]
  },
  {
    rank: 6,
    name: "Rajiv Gandhi Cancer Institute & Research Centre (RGCIRC)",
    location: "New Delhi",
    intro: [
      "Dedicated exclusively to oncology, Rajiv Gandhi Cancer Institute & Research Centre has established itself as one of India's most respected comprehensive cancer centers.",
      "Unlike multispecialty hospitals where oncology is one among several departments, RGCIRC focuses entirely on cancer diagnosis, treatment, rehabilitation, and research. This specialization allows the institution to build highly experienced teams dedicated to specific cancer types."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Comprehensive Cancer Programs",
        lead: "The hospital provides advanced treatment for:",
        items: ["Blood Cancer", "Breast Cancer", "Lung Cancer", "Brain Tumors", "Prostate Cancer", "Head and Neck Cancer", "Bone Cancer", "Pediatric Oncology", "Gastrointestinal Cancers", "Gynecological Malignancies"]
      },
      {
        type: "tags",
        heading: "Specialized Services",
        lead: "Patients benefit from a wide range of oncology services, including:",
        items: ["Medical Oncology", "Surgical Oncology", "Radiation Oncology", "Bone Marrow Transplantation", "Nuclear Medicine", "Precision Diagnostics", "Palliative Care", "Cancer Rehabilitation"],
        trailing: "The institute is also actively involved in oncology education and clinical research, helping introduce newer treatment approaches into clinical practice."
      },
      {
        type: "callout",
        heading: "Why Patients Choose RGCIRC",
        paragraphs: ["Patients appreciate the hospital's disease-specific expertise, experienced oncology teams, advanced radiation facilities, and integrated approach to cancer care. The hospital also emphasizes supportive services such as nutritional counseling, pain management, psycho-oncology, and survivorship programs."]
      }
    ]
  },
  {
    rank: 7,
    name: "Kokilaben Dhirubhai Ambani Hospital",
    location: "Mumbai",
    intro: [
      "Over the years, Kokilaben Dhirubhai Ambani Hospital has developed one of the country's most technologically advanced oncology programs.",
      "Its philosophy centers on precision medicine—combining advanced diagnostics with individualized treatment strategies designed around each patient's disease profile. This personalized approach enables specialists to select therapies that are both effective and appropriate for the patient's overall health condition."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Areas of Expertise",
        lead: "The oncology department manages a wide spectrum of cancers, including:",
        items: ["Breast Cancer", "Lung Cancer", "Liver Cancer", "Pancreatic Cancer", "Prostate Cancer", "Kidney Cancer", "Colorectal Cancer", "Ovarian Cancer", "Cervical Cancer", "Brain Tumors"]
      },
      {
        type: "tags",
        heading: "Modern Cancer Technologies",
        lead: "The hospital has invested significantly in advanced oncology infrastructure, including:",
        items: ["Robotic-assisted surgical systems", "PET-CT imaging", "Digital pathology", "Molecular diagnostics", "Precision radiation therapy", "Advanced chemotherapy units", "Immunotherapy and targeted therapy programs"],
        trailing: "These technologies support early diagnosis, minimally invasive surgery, and personalized treatment planning."
      },
      {
        type: "callout",
        heading: "A Patient-Centered Environment",
        paragraphs: [
          "Beyond clinical excellence, Kokilaben Hospital focuses on creating a comfortable treatment environment. Dedicated cancer coordinators, supportive care teams, rehabilitation specialists, and nutritional experts work closely with patients throughout diagnosis, treatment, and recovery.",
          "Its strong emphasis on communication and patient education has made it a preferred destination for international patients seeking personalized oncology care."
        ]
      }
    ]
  },
  {
    rank: 8,
    name: "Medanta – The Medicity",
    location: "Gurugram",
    intro: [
      "Since its establishment, Medanta – The Medicity has become synonymous with advanced multidisciplinary healthcare. Its Institute of Cancer Care brings together experts from multiple specialties to provide comprehensive treatment for both common and rare cancers.",
      "Rather than approaching cancer as an isolated disease, Medanta emphasizes collaborative decision-making. Every patient's treatment plan is reviewed by multidisciplinary tumor boards, ensuring recommendations are based on collective expertise and the latest clinical evidence."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Specialized Cancer Services",
        lead: "The hospital treats numerous cancer types, including:",
        items: ["Breast Cancer", "Lung Cancer", "Prostate Cancer", "Liver Cancer", "Gastrointestinal Cancers", "Blood Cancer", "Head and Neck Cancer", "Thyroid Cancer", "Bone and Soft Tissue Tumors", "Pediatric Cancers"]
      },
      {
        type: "tags",
        heading: "Advanced Treatment Options",
        lead: "Patients have access to a comprehensive range of therapies, including:",
        items: ["Robotic cancer surgery", "Minimally invasive procedures", "Chemotherapy", "Immunotherapy", "Targeted therapy", "Precision radiation therapy", "Bone marrow transplantation", "Image-guided interventions"],
        trailing: "This integrated approach allows specialists to tailor treatment according to tumor biology, disease stage, and patient preferences."
      },
      {
        type: "callout",
        heading: "Research and Clinical Innovation",
        paragraphs: [
          "Medanta actively participates in oncology research and clinical collaborations, enabling patients to benefit from evidence-based treatment protocols and emerging therapeutic advances.",
          "Continuous investment in modern medical technology ensures that the hospital remains at the forefront of cancer diagnosis and treatment."
        ]
      }
    ]
  },
  {
    rank: 9,
    name: "HCG Cancer Centre (HealthCare Global)",
    location: "Multiple cities, India",
    intro: [
      "When discussing dedicated oncology networks in India, HCG Cancer Centre is a name that frequently stands out. Unlike many multispecialty hospitals, HCG focuses almost exclusively on cancer care, with a network of cancer hospitals located across several Indian cities. This specialized approach has helped the organization build extensive expertise in diagnosing and treating a wide range of cancers.",
      "One of HCG's greatest strengths is consistency. Patients visiting different HCG centers can expect standardized treatment protocols, multidisciplinary consultations, and access to advanced oncology technologies."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Major Cancer Specialties",
        lead: "HCG provides comprehensive treatment for:",
        items: ["Breast Cancer", "Lung Cancer", "Head and Neck Cancer", "Blood Cancer", "Prostate Cancer", "Cervical Cancer", "Ovarian Cancer", "Gastrointestinal Cancers", "Bone and Soft Tissue Tumors", "Pediatric Cancers"]
      },
      {
        type: "tags",
        heading: "Advanced Treatment Facilities",
        lead: "Patients benefit from several modern oncology services, including:",
        items: ["Robotic-assisted surgery", "Advanced radiation therapy", "Chemotherapy day-care units", "Immunotherapy", "Targeted therapy", "Precision diagnostics", "Molecular pathology", "PET-CT imaging"],
        trailing: "The hospital network is also involved in clinical research and precision oncology programs, allowing specialists to offer treatment strategies based on the latest scientific evidence."
      },
      {
        type: "callout",
        heading: "Why Patients Choose HCG",
        paragraphs: ["Many patients prefer HCG because of its cancer-exclusive focus, organ-specific oncology teams, modern treatment facilities, and coordinated care model. The availability of multiple centers across India also makes follow-up care more convenient for patients who may relocate during or after treatment."]
      }
    ]
  },
  {
    rank: 10,
    name: "BLK-Max Super Speciality Hospital",
    location: "New Delhi",
    intro: [
      "Completing our list is BLK-Max Super Speciality Hospital, one of North India's leading private healthcare institutions with a well-established oncology department.",
      "The hospital combines experienced specialists, modern infrastructure, and multidisciplinary treatment planning to manage both common and highly complex cancers. Its oncology teams emphasize evidence-based care while integrating advanced technology into every stage of diagnosis and treatment."
    ],
    blocks: [
      {
        type: "tags",
        heading: "Specialized Oncology Services",
        lead: "BLK-Max provides treatment for numerous cancer types, including:",
        items: ["Breast Cancer", "Blood Cancer", "Lung Cancer", "Prostate Cancer", "Liver Cancer", "Gastrointestinal Cancer", "Brain Tumors", "Head and Neck Cancer", "Gynecological Cancers", "Pediatric Oncology"]
      },
      {
        type: "tags",
        heading: "Comprehensive Cancer Care",
        lead: "Patients have access to:",
        items: ["Surgical Oncology", "Medical Oncology", "Radiation Oncology", "Bone Marrow Transplantation", "Hemato-Oncology", "Immunotherapy", "Targeted Therapy", "Palliative Care", "Rehabilitation Services"]
      },
      {
        type: "callout",
        heading: "Modern Infrastructure",
        paragraphs: [
          "The hospital utilizes advanced technologies such as robotic-assisted surgery, high-resolution imaging, precision radiation therapy, and molecular diagnostics to support individualized treatment planning.",
          "For international patients, dedicated coordinators assist with appointments, treatment scheduling, travel arrangements, interpreter services, and follow-up communication, creating a smoother treatment experience."
        ]
      }
    ]
  }
];

const ekamSupport = [
  "Hospital selection based on diagnosis",
  "Doctor recommendations",
  "Medical record review",
  "Second medical opinions",
  "Treatment planning",
  "Cost estimation",
  "Medical visa assistance",
  "Travel and accommodation support",
  "Appointment scheduling",
  "Continuous patient coordination"
];

const countriesServed = [
  "Nigeria", "Kenya", "Tanzania", "Uganda", "Ethiopia", "Sudan", "South Sudan", "Ghana",
  "Zambia", "Zimbabwe", "Rwanda", "DR Congo", "Sierra Leone", "Liberia", "Malawi",
  "Maldives", "Fiji", "Papua New Guinea", "Solomon Islands"
];

/* ---------------------------------------------------------------------
   Small building blocks
--------------------------------------------------------------------- */

function Tag({ children }) {
  return (
    <span
      className="inline-block text-xs md:text-[13px] px-3 py-1.5 rounded-full border"
      style={{ borderColor: "#C9D9EC", background: "#F5F8FC", color: "#053161" }}
    >
      {children}
    </span>
  );
}

function Block({ block }) {
  if (block.type === "tags") {
    return (
      <div className="mb-6">
        <h4 className="text-sm font-semibold tracking-wide uppercase mb-3" style={{ color: "#1B4F9C", fontFamily: "'Montserrat', sans-serif" }}>
          {block.heading}
        </h4>
        {block.lead && <p className="text-[#3E4C59] text-sm mb-3">{block.lead}</p>}
        <div className="flex flex-wrap gap-2 mb-3">
          {block.items.map((item, i) => (
            <Tag key={i}>{item}</Tag>
          ))}
        </div>
        {block.trailing && <p className="text-[#3E4C59] text-sm leading-relaxed">{block.trailing}</p>}
      </div>
    );
  }
  return (
    <div
      className="mb-6 rounded-lg p-5 md:p-6 border-l-4"
      style={{ background: "#F5F8FC", borderColor: "#6796cc" }}
    >
      <h4 className="text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: "#053161", fontFamily: "'Montserrat', sans-serif" }}>
        {block.heading}
      </h4>
      {block.paragraphs.map((p, i) => (
        <p key={i} className="text-[#3E4C59] text-sm leading-relaxed mb-2 last:mb-0">
          {p}
        </p>
      ))}
    </div>
  );
}

function HospitalCard({ h }) {
  const rankStr = String(h.rank).padStart(2, "0");
  return (
    <article id={`hospital-${h.rank}`} className="relative mb-16 scroll-mt-24">
      <div className="relative bg-white rounded-xl shadow-sm border border-[#E1E8F0] overflow-hidden">
        {/* ghost rank numeral */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-6 -right-2 md:-top-10 md:right-2 leading-none"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(90px, 14vw, 150px)",
            color: "#053161",
            opacity: 0.06
          }}
        >
          {rankStr}
        </span>

        <div className="relative p-6 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="flex-shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white text-sm md:text-base font-bold"
              style={{ background: "linear-gradient(135deg, #053161, #1B4F9C)", fontFamily: "'Montserrat', sans-serif" }}
            >
              {rankStr}
            </div>
            <div>
              <h2
                className="text-xl md:text-2xl font-bold leading-snug"
                style={{ color: "#053161", fontFamily: "'Montserrat', sans-serif" }}
              >
                {h.name}
              </h2>
              <p className="text-sm mt-1" style={{ color: "#6796cc" }}>{h.location}</p>
            </div>
          </div>

          {h.intro.map((p, i) => (
            <p key={i} className="text-[#3E4C59] leading-relaxed mb-4">
              {p}
            </p>
          ))}

          <div className="mt-6">
            {h.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------------
   Page
--------------------------------------------------------------------- */

export default function TopCancerHospitalsIndia() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />

      <Script id="schema-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="schema-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-itemlist" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div style={{ fontFamily: "'Inter', sans-serif", background: "#F5F8FC" }} className="min-h-screen text-[#1F2933]">

        {/* HERO */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(120deg, #053161 0%, #6796cc 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 39px, #ffffff 39px, #ffffff 40px)" }}
          />
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative">
            <p
              className="text-white/70 text-xs md:text-sm tracking-[0.25em] uppercase mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Ekam Oncology Guide
            </p>
            <h1
              className="text-white text-4xl md:text-6xl leading-[1.05] mb-6 max-w-3xl"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              Top 10 Cancer Hospitals in India
            </h1>
            <p className="text-[#DCE8F7] text-lg leading-relaxed max-w-2xl">
              Discover the top 10 cancer hospitals in India offering advanced oncology care, experienced cancer specialists, robotic surgery, and comprehensive treatment for domestic and international patients.
            </p>
          </div>
        </section>

        {/* RANK NAVIGATOR */}
        <div className="border-b" style={{ background: "#ffffff", borderColor: "#E1E8F0" }}>
          <div className="max-w-6xl mx-auto px-6 py-4 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {hospitals.map((h) => (
                <a
                  key={h.rank}
                  href={`#hospital-${h.rank}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-md text-sm whitespace-nowrap hover:bg-[#F5F8FC] transition-colors"
                  style={{ color: "#053161" }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0"
                    style={{ background: "#1B4F9C", fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {h.rank}
                  </span>
                  {h.name.length > 28 ? h.name.split("(")[0].trim() : h.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* PAGE BODY */}
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-10 gap-10">

          <div className="lg:col-span-7">

            {hospitals.map((h) => (
              <HospitalCard key={h.rank} h={h} />
            ))}

            {/* HOW EKAM HELPS */}
            <section className="mb-16" id="how-ekam-helps">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#053161" }}>
                How Ekam Helps Patients
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-6">
                Finding the right cancer hospital can be challenging, especially for international patients unfamiliar with India&apos;s healthcare system. Ekam simplifies the process by connecting patients with leading oncology hospitals and experienced cancer specialists across India. Ekam assists patients with:
              </p>
              <div className="rounded-xl p-6 md:p-8" style={{ background: "#EAF1FA" }}>
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
                By working closely with top hospitals and specialists, Ekam ensures that patients receive personalized guidance throughout their cancer treatment journey.
              </p>
            </section>

            {/* COUNTRIES SERVED */}
            <section className="mb-16" id="countries-served">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#053161" }}>
                Countries We Have Served
              </h2>
              <p className="text-[#3E4C59] leading-relaxed mb-5">
                Ekam has proudly assisted cancer patients from the following countries in accessing advanced cancer treatment in India:
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {countriesServed.map((c, i) => (
                  <Tag key={i}>{c}</Tag>
                ))}
              </div>
              <p className="text-[#3E4C59] leading-relaxed">
                Our experienced team has helped international patients throughout their medical journey by providing hospital selection, expert consultation, medical case evaluation, treatment planning, medical visa assistance, travel coordination, accommodation support, and follow-up care. We remain committed to making high-quality cancer treatment in India accessible, seamless, and patient-focused for individuals and families from these countries.
              </p>
            </section>

            {/* CONCLUSION */}
            <section className="mb-6" id="conclusion">
              <h2 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, color: "#053161" }}>
                Conclusion
              </h2>
              <blockquote
                className="text-xl md:text-2xl leading-snug pl-6 border-l-4 mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, color: "#053161", borderColor: "#6796cc" }}
              >
                India has established itself as a trusted destination for comprehensive cancer care, offering advanced medical technology, experienced oncologists, multidisciplinary treatment, and internationally recognized hospitals.
              </blockquote>
              <p className="text-[#3E4C59] leading-relaxed mb-4">
                Whether patients require robotic surgery, chemotherapy, radiation therapy, immunotherapy, or specialized cancer management, India&apos;s leading hospitals provide high-quality care tailored to individual needs.
              </p>
              <p className="text-[#3E4C59] leading-relaxed mb-4">
                Choosing the right hospital depends on the type and stage of cancer, the expertise of the treating team, available technology, and patient support services. With proper guidance and access to experienced specialists, patients can confidently begin their treatment journey.
              </p>
              <p className="text-[#3E4C59] leading-relaxed">
                If you are exploring cancer treatment options in India, Ekam can help you identify the most suitable hospital and connect you with experienced oncology specialists for personalized care.
              </p>
            </section>

              {/* MORE RELATED LINKS */}
                <section className="mb-10" id="related-links">
                  <div className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-8">
                      <span
                        className="w-1 h-10 rounded-full"
                        style={{
                          background: "linear-gradient(180deg, #E94E77 0%, #8E5CFF 100%)",
                        }}
                      />
                      <h2
                        className="text-2xl md:text-3xl font-bold"
                        style={{
                          color: "#053161",
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        More Related Links
                      </h2>
                    </div>
                
                    <div className="grid md:grid-cols-2 gap-5">
                
                      <a
                        href="/treatments/best-prostate-cancer-treatment-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#1B4F9C" }}>→</span>
                        <span className="text-lg font-medium" style={{ color: "#053161" }}>
                          Best Prostate Cancer Treatment in India
                        </span>
                      </a>
                
                      <a
                        href="/cost-of-treatment/prostate-cancer-treatment-cost-in-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#1B4F9C" }}>→</span>
                        <span className="text-lg font-medium" style={{ color: "#053161" }}>
                          Prostate Cancer Treatment Cost in India
                        </span>
                      </a>
                
                      <a
                        href="/doctors/best-prostate-cancer-doctors-in-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#1B4F9C" }}>→</span>
                        <span className="text-lg font-medium" style={{ color: "#053161" }}>
                          Best Prostate Cancer Doctors in India
                        </span>
                      </a>
                
                      <a
                        href="/blog/best-cancer-hospitals-in-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#1B4F9C" }}>→</span>
                        <span className="text-lg font-medium" style={{ color: "#053161" }}>
                          Best Cancer Hospitals in India
                        </span>
                      </a>
                
                      <a
                        href="/blog/radiation-therapy-for-prostate-cancer-in-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#1B4F9C" }}>→</span>
                        <span className="text-lg font-medium" style={{ color: "#053161" }}>
                          Radiation Therapy for Prostate Cancer in India
                        </span>
                      </a>
                
                      <a
                        href="/blog/prostate-cancer-survival-rate-in-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#1B4F9C" }}>→</span>
                        <span className="text-lg font-medium" style={{ color: "#053161" }}>
                          Prostate Cancer Survival Rate in India
                        </span>
                      </a>
                
                      <a
                        href="/blog/why-choose-india-for-prostate-cancer-treatment"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#1B4F9C" }}>→</span>
                        <span className="text-lg font-medium" style={{ color: "#053161" }}>
                          Why Choose India for Prostate Cancer Treatment?
                        </span>
                      </a>
                
                      <a
                        href="/blog/hormone-therapy-for-prostate-cancer-in-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span className="mr-3 text-xl group-hover:translate-x-1 transition-transform" style={{ color: "#1B4F9C" }}>→</span>
                        <span className="text-lg font-medium" style={{ color: "#053161" }}>
                          Hormone Therapy for Prostate Cancer
                        </span>
                      </a>
                
                      <a
                        href="/blog/metastatic-prostate-cancer-treatment-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span
                          className="mr-3 text-xl group-hover:translate-x-1 transition-transform"
                          style={{ color: "#1B4F9C" }}
                        >
                          →
                        </span>
                        <span
                          className="text-lg font-medium"
                          style={{ color: "#053161" }}
                        >
                          Metastatic Prostate Cancer Treatment in India
                        </span>
                      </a>
                      
                      <a
                        href="/blog/medical-visa-cancer-treatment-india"
                        className="group md:col-span-2 flex items-center rounded-xl border border-[#E5EAF1] bg-[#F8FAFD] px-6 py-5 hover:border-[#1B4F9C] hover:bg-white transition-all duration-300"
                      >
                        <span
                          className="mr-3 text-xl group-hover:translate-x-1 transition-transform"
                          style={{ color: "#1B4F9C" }}
                        >
                          →
                        </span>
                      
                        <span
                          className="text-lg font-medium"
                          style={{ color: "#053161" }}
                        >
                          Medical Visa for Cancer Treatment in India
                        </span>
                      </a>
                      
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

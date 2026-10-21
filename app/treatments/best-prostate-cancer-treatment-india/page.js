import Script from "next/script";
import React from "react";
import Link from "next/link";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Best Prostate Cancer Treatment in India — Expert Surgeons, World-Class Outcomes, 70% Cost Savings",
  description:
    "Complete guide to best prostate cancer treatment in India with expert surgeons Dr. Rajesh Ahlawat & Dr. Pankaj Wadhwa. Learn about robotic surgery, radiation, Gleason scores, real patient stories & transparent pricing for Africa & Pacific patients.",
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

const medicalWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Best Prostate Cancer Treatment in India",
  "description":
    "Complete guide to prostate cancer treatment in India with expert surgeons, real outcomes, and transparent pricing for international patients from Africa and Pacific",
  "author": {
    "@type": "MedicalBusiness",
    "name": "Ekam Health Services",
    "url": "https://www.ekamcure.com"
  },
  "medicalSpecialty": "Uro-Oncology",
  "doctor": [
    {
      "@type": "Person",
      "name": "Dr. Prof. Rajesh Ahlawat",
      "jobTitle": "Group Chairman - Urology"
    },
    {
      "@type": "Person",
      "name": "Dr. Pankaj Wadhwa",
      "jobTitle": "Senior Director - Uro-Oncology"
    }
  ],
  "datePublished": "2026-10-12"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if I'm a candidate for surgery versus radiation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your Gleason Score, PSA level, and stage of cancer determine suitability. Gleason 6-7 cancers can be treated with either surgery or radiation with equivalent outcomes. Gleason 8-9 cancers are usually best treated with surgery, often combined with radiation. Very high-risk cases with significant spread may benefit more from radiation or hormone therapy."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between Gleason 6, 7, 8, and 9?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gleason 6 means cancer cells look relatively normal under the microscope and grow slowly—the least aggressive. Gleason 7 means moderate abnormality and growth rate. Gleason 8-9 means highly abnormal cells that grow aggressively. Higher Gleason scores require more aggressive treatment and carry higher recurrence risks."
      }
    },
    {
      "@type": "Question",
      "name": "Will I be incontinent after surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Temporary leaking of small amounts of urine is common immediately after catheter removal, but this resolves within weeks for almost all patients. Dr. Wadhwa's continence rate is 99%—meaning 99 out of 100 patients regain full urinary control within six weeks."
      }
    },
    {
      "@type": "Question",
      "name": "Will I have erectile dysfunction permanently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Erectile function recovery depends on your age, nerve preservation, and recovery. Dr. Wadhwa's potency preservation rate is 88%. Medications like Viagra often bridge the gap while natural function returns over 3 to 6 months."
      }
    },
    {
      "@type": "Question",
      "name": "How long after surgery can I have sexual relations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should wait 4 to 6 weeks after surgery to avoid straining the surgical site. Natural erectile function recovery takes 3 to 6 months."
      }
    },
    {
      "@type": "Question",
      "name": "What if my cancer comes back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recurrence is rare with complete surgical removal. Dr. Wadhwa's cancer-free rate is 96% in early-stage cases and 80% in advanced cases. If recurrence occurs, early detection via PSA monitoring allows prompt treatment with radiation or other options."
      }
    },
    {
      "@type": "Question",
      "name": "Can family members come with me to India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, hospitals encourage family members to be present. Bring 1 or 2 family members for emotional support. Accommodation near the patient floor can be arranged."
      }
    },
    {
      "@type": "Question",
      "name": "How do I arrange my catheter removal at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ekam Health Services provides your discharge summary and coordinates with your local urologist for catheter removal around day 7 to 10 after surgery. It is a simple 10-minute office procedure."
      }
    },
    {
      "@type": "Question",
      "name": "What if I have complications after returning home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most minor complications are manageable with antibiotics or minor procedures at your local hospital. For serious complications, we can arrange a return to Delhi for assessment and treatment."
      }
    }
  ]
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
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-6">
              BEST PROSTATE CANCER TREATMENT IN INDIA: Complete Guide for International Patients from Africa & Pacific
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-4xl mx-auto text-pink-100">
              Best Prostate Cancer Treatment in India — Expert Surgeons, World-Class Outcomes, 70% Cost Savings
            </p>
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
                  <a href="#why-choose-india" className="toc-link">› Why Choose India</a>
                  <a href="#pathology-report" className="toc-link">› Pathology & Gleason Score</a>
                  <a href="#early-stage" className="toc-link">› Early-Stage (Gleason 6-7)</a>
                  <a href="#intermediate-advanced" className="toc-link">› Advanced (Gleason 8-9)</a>
                  <a href="#metastatic" className="toc-link">› Metastatic (Gleason 10)</a>
                  <a href="#treatment-options" className="toc-link">› 4 Main Treatment Options</a>
                  <a href="#patient-stories" className="toc-link">› Real Patient Stories</a>
                  <a href="#doctor-credentials" className="toc-link">› Why These Surgeons Matter</a>
                  <a href="#timeline" className="toc-link">› Realistic Recovery Timeline</a>
                  <a href="#cost-transparency" className="toc-link">› Transparent Pricing</a>
                  <a href="#faqs" className="toc-link">› Frequently Asked Questions</a>
                  <a href="#next-steps" className="toc-link">› Schedule Free Consultation</a>
                </div>
              </div>

              {/* SECTION: WHY THOUSANDS CHOOSE INDIA */}
              <section className="mb-16" id="why-choose-india">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Why Thousands of International Patients Choose India for Prostate Cancer Surgery
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-6 space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    When you're diagnosed with prostate cancer, you face three critical decisions simultaneously: finding a surgeon you can trust, choosing the right treatment approach, and managing the financial burden. For patients from Africa and the Pacific islands, these decisions become even more complex. You may have heard conflicting advice from different doctors, read varying survival statistics online, and worried about the cost of treatment consuming your family's savings.
                  </p>
                  <p>
                    Here's what the data shows: prostate cancer is one of the most treatable cancers when caught early. The difference between a good outcome and an exceptional one often comes down to surgeon experience and whether your treatment is tailored to your specific cancer stage. India has quietly become a global leader in prostate cancer care, attracting patients from Zimbabwe, Botswana, Mauritius, and Fiji because of three factors that matter most: world-class surgical expertise, verified outcome data, and treatment costs that are 70% lower than Western countries.
                  </p>
                  <p>
                    Ekam Health Services partners with two of Asia's most accomplished prostate cancer surgeons—Dr. Rajesh Ahlawat and Dr. Pankaj Wadhwa—both of whom trained at top American cancer centers and have performed thousands of prostate cancer surgeries. Between them, they have over 5,000 prostate cancer cases, with cancer-free survival rates of 96% in early-stage cases and 78-80% in advanced cases. These aren't theoretical numbers pulled from research papers; these are outcomes from real patients treated in the last five years.
                  </p>
                  <p>
                    The financial advantage is equally compelling. A complete robotic prostatectomy in India—including surgery, hospital stay, anesthesia, pathology, and imaging—costs $12,600 total (including your flight and accommodation). The same surgery in the United States costs $43,400. For a patient from Harare or Gaborone, this isn't just a cost difference; it's the difference between accessing world-class cancer care and delaying treatment because local options feel limited or expensive.
                  </p>
                </div>
              </section>

              {/* SECTION: PATHOLOGY REPORT & GLEASON SCORE */}
              <section className="mb-16" id="pathology-report">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Understanding Your Prostate Cancer Diagnosis: What Your Pathology Report Actually Means
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-6 space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    If you've just received a prostate cancer diagnosis, your pathology report contains one number that will determine everything else about your treatment: the Gleason Score. This single number—ranging from 6 to 10—tells your surgeon how aggressive your cancer is and what approach will give you the best chance of cure.
                  </p>
                  <p>
                    Your pathology report likely looks something like this: "Adenocarcinoma of the prostate, Gleason Score 7 (3+4)." That number matters more than you might realize. The Gleason Score represents how abnormal your cancer cells look under a microscope. A Gleason 6 cancer grows slowly—so slowly that some urologists recommend simply monitoring it rather than immediate surgery. A Gleason 9 cancer is aggressive and requires immediate, comprehensive treatment. Understanding where your cancer falls on this spectrum is the first step toward choosing the right treatment.
                  </p>

                  {/* EARLY STAGE */}
                  <div className="pt-4" id="early-stage">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-pink-500 pl-4">
                      Early-Stage Cancer: Gleason 6-7
                    </h3>
                    <p className="mb-3">
                      If your pathology report shows a Gleason Score of 6 or 7, your cancer is confined to the prostate and grows relatively slowly. You have multiple treatment options, each with excellent outcomes. At Ekam Health Services, patients with early-stage prostate cancer achieve a 96% cancer-free rate at five-year follow-up. This means that out of 100 men treated for early-stage prostate cancer, 96 will have no evidence of recurrence five years after treatment.
                    </p>
                    <p className="mb-3">
                      For Gleason 6 cancer, some doctors recommend active surveillance—essentially monitoring your PSA levels and imaging every few months rather than treating immediately. This approach works well if you're willing to accept the anxiety of living with known cancer and the risk that it might progress while being watched. Other patients prefer definitive treatment—either robotic surgery or radiation—to eliminate the cancer completely and move forward with their lives. There's no single "right" answer; it depends on your age, overall health, and personal comfort level with risk.
                    </p>
                    <p>
                      For Gleason 7 cancer, active surveillance is less commonly recommended because the cancer has a higher probability of growing beyond the prostate. Most patients choose either robotic prostatectomy or radiation therapy. The outcomes between these two approaches are essentially equivalent—both achieve 96% cancer-free rates—so your choice should be based on which approach aligns with your lifestyle and preferences.
                    </p>
                  </div>

                  {/* INTERMEDIATE TO ADVANCED */}
                  <div className="pt-4" id="intermediate-advanced">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-pink-500 pl-4">
                      Intermediate to Advanced Cancer: Gleason 8-9
                    </h3>
                    <p className="mb-3">
                      When your pathology shows a Gleason Score of 8 or 9, your cancer is more aggressive and may have begun spreading beyond the prostate capsule. These are the cases where surgeon experience makes a measurable difference. An experienced uro-oncologist will examine your imaging (CT, MRI, or bone scan) to determine whether your cancer is confined to the prostate or has spread to lymph nodes or bone. This staging determines your treatment approach.
                    </p>
                    <p className="mb-3">
                      For Gleason 8 cancer, Dr. Wadhwa typically recommends robotic prostatectomy combined with six weeks of radiation therapy. This combination approach gives patients the best chance of complete cancer removal. His outcomes in Gleason 8 cases show an 80% cancer-free rate at five-year follow-up, which is substantially higher than the 72% national average in India. That 8% difference represents real lives—real patients alive and cancer-free because their surgeon had the skill and experience to remove all the cancer.
                    </p>
                    <p>
                      The cost for this combination approach (surgery plus radiation) typically ranges from $15,000 to $19,000 at Max Healthcare. When you factor in the flight from Botswana to Delhi and accommodation for the initial surgery and follow-up radiation visits, your total cost for definitive treatment of aggressive prostate cancer is approximately $19,000 to $23,000. Compare this to the United States, where the same combination treatment exceeds $70,000 when you include surgeon fees, hospital facility charges, and radiation oncology costs.
                    </p>
                  </div>

                  {/* METASTATIC CANCER */}
                  <div className="pt-4" id="metastatic">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 border-l-4 border-pink-500 pl-4">
                      Metastatic Cancer: Gleason 10 or Spread Beyond Prostate
                    </h3>
                    <p className="mb-3">
                      If your cancer has spread to lymph nodes or distant sites (bone, liver, lung), you have metastatic prostate cancer. This diagnosis is more serious, but it's important to understand that modern treatment has transformed what was once a death sentence into a chronic disease that can be managed for years or even decades with good quality of life.
                    </p>
                    <p className="mb-3">
                      Metastatic prostate cancer is typically treated with hormone therapy—medications that stop your body from producing testosterone, which prostate cancer cells need to grow. Dr. Ahlawat and Dr. Wadhwa are both expert in managing metastatic cancer. They'll combine hormone therapy with chemotherapy if your cancer is particularly aggressive, and they'll coordinate your care to minimize side effects while maximizing survival.
                    </p>
                    <p>
                      The cost of a six-month course of hormone therapy is approximately $3,000 to $4,200. If chemotherapy is added, the total cost rises to $15,000 to $25,000 depending on the number of cycles. Patients with metastatic prostate cancer typically return to India multiple times over six months for treatment cycles and imaging assessments, but they can live and work from their home country between visits.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION: 4 MAIN TREATMENT OPTIONS */}
              <section className="mb-16" id="treatment-options">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  The Four Main Treatment Options: Which Is Right for Your Cancer?
                </h2>

                <div className="space-y-8 mt-6">

                  {/* OPTION 1 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-pink-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Option 1: Robotic Prostatectomy—Gold Standard for Organ-Confined Cancer
                    </h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Robotic-assisted prostatectomy using the da Vinci surgical system has become the gold standard treatment for prostate cancer confined to the prostate gland. When Dr. Wadhwa performs a robotic prostatectomy, he makes five small incisions (each about 1-2 centimeters) in your abdomen. Through these incisions, he inserts the robotic arms while he sits at a surgical console several feet away, viewing your prostate on a high-definition screen with magnified visualization—typically 8-10 times magnification. This magnified view allows him to identify and preserve the nerve bundles that control erectile function, a technique that wouldn't be possible with open surgery.
                      </p>
                      <p>
                        The actual surgery typically takes two hours from the time you're put under anesthesia until you wake up in the recovery room. During those two hours, Dr. Wadhwa removes your entire prostate and the seminal vesicles (small glands attached to the prostate that can harbor cancer). He then carefully reconnects your urethra—the tube that carries urine—to your bladder so that urine can flow normally after the prostate is gone. A catheter (a thin plastic tube) is left in place for seven to ten days to allow this reconnection to heal while urine drains into an external bag.
                      </p>
                      <p>
                        The advantages of robotic surgery compared to open surgery are significant. Because the incisions are so small, blood loss is minimal—typically 100 to 200 milliliters compared to 500 to 800 milliliters with open surgery. You spend only one night in the hospital compared to two or three nights with open surgery. Pain is substantially less because there's no large surgical incision cutting through muscle. Most patients are walking around the hospital ward by the evening of surgery and feel well enough to leave the hospital the next morning.
                      </p>
                      <p>
                        Recovery happens quickly. By week two, most patients are walking normally and can return to light activities. By week four, they're back to normal daily activities. By week six, they can resume sexual activity (though erectile function may take three to six months to fully return if nerves were involved in the cancer removal). This rapid recovery is one reason international patients prefer robotic surgery—they can return home within a week and continue their recovery at home rather than spending weeks in a hospital or away from family.
                      </p>
                      <p>
                        The outcomes of robotic prostatectomy at Max Healthcare under Dr. Wadhwa's care are exceptional. His cancer-free rate at five-year follow-up is 96% in early-stage cases and 80% in advanced cases. His potency preservation rate—the percentage of men who regain erectile function—is 88%, which is among the highest reported in the medical literature. His continence rate—the percentage of men who regain full urinary control—is 99%, meaning almost all men stop wearing protective pads within six weeks of catheter removal.
                      </p>
                      <p className="font-semibold text-pink-700 bg-pink-50 p-4 rounded-lg">
                        Cost of Robotic Prostatectomy at Max Healthcare: $9,500 to $13,200 (Includes surgeon fee $3,000-$4,000, hospital facilities & equipment $2,500-$3,500, anesthesia $1,200-$1,500, 1-night stay $500-$800, nursing care, imaging, pathology & discharge support).
                      </p>
                    </div>
                  </div>

                  {/* OPTION 2 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Option 2: External Beam Radiation Therapy—Best for Older Patients or Those Not Fit for Surgery
                    </h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Radiation therapy uses high-energy X-rays directed at your prostate from outside your body to kill cancer cells. Unlike surgery, which removes the prostate entirely, radiation destroys the DNA in cancer cells so they can't divide and grow. The treatment course typically lasts eight weeks, with patients receiving radiation five days per week (Monday through Friday).
                      </p>
                      <p>
                        Each radiation session lasts about fifteen minutes. You arrive at the radiation center in the morning, lie on a special table, and high-energy beams are directed at your prostate from multiple angles, calculated by a computer to deliver maximum dose to the cancer while minimizing exposure to surrounding tissues like the rectum and bladder. After each session, you go home. The process is painless—you don't feel anything during the radiation itself, though you might feel fatigue as the weeks progress.
                      </p>
                      <p>
                        Radiation therapy works best for early-stage prostate cancer (Gleason 6-7) and is often recommended for patients over age seventy-five, patients with significant medical conditions that make surgery risky, or patients who prefer not to have surgery. The cancer-free rate with modern radiation therapy is 92% at five-year follow-up, which is only slightly lower than surgery and well within acceptable ranges.
                      </p>
                      <p>
                        The main limitation of radiation therapy is the length of treatment. You must be in or near Delhi for eight weeks to receive daily treatments. Some international patients choose to stay near the radiation center during treatment. Others return home after the first week and commute back to Delhi weekly for the bulk of their treatments, though this requires significant travel. The cumulative side effects of radiation—urinary frequency, fatigue, rectal irritation—are generally mild and temporary but can affect quality of life during the eight-week course.
                      </p>
                      <p className="font-semibold text-purple-700 bg-purple-50 p-4 rounded-lg">
                        Cost of Radiation Therapy at Max Healthcare: $5,800 to $8,900 (Includes radiation oncologist consultation & planning $800-$1,200, daily sessions $2,500-$3,500 for 40-45 treatments, weekly monitoring $400-$600, pre/post imaging $1,200-$1,600, and ongoing follow-up).
                      </p>
                    </div>
                  </div>

                  {/* OPTION 3 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Option 3: Hormone Therapy—Essential for Metastatic Cancer and High-Risk Cases
                    </h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Hormone therapy works on a different principle than surgery or radiation. Prostate cancer cells are dependent on the male hormone testosterone to survive and grow. Hormone therapy uses injected medications called LHRH agonists (drugs like Leuprolide or Goserelin) that signal your body to stop producing testosterone. Within weeks of starting hormone therapy, testosterone levels drop to near-zero, effectively starving cancer cells of the hormone they need to grow.
                      </p>
                      <p>
                        Hormone therapy is the first-line treatment for metastatic prostate cancer—cancer that has spread beyond the prostate to lymph nodes or distant organs. It's also used in combination with surgery or radiation for high-risk, locally advanced cancers. Dr. Ahlawat has managed metastatic prostate cancer for forty-one years and has seen firsthand how hormone therapy has evolved from a temporary treatment (causing cancer to regress for one to two years before resistance developed) to a sophisticated approach that can control cancer for five years or longer.
                      </p>
                      <p>
                        A typical hormone therapy regimen consists of injections every three months for six months or longer, depending on your cancer stage and response. You receive the first injection during your visit to Delhi, and subsequent injections can often be administered by your local urologist at home. Blood tests are needed every six to eight weeks to check your PSA level (which should drop toward zero) and to monitor your testosterone level and organ function.
                      </p>
                      <p>
                        The side effects of hormone therapy are real and worth discussing honestly. About seventy percent of men experience hot flashes—sudden episodes of intense heat and sweating, similar to menopausal hot flashes in women. Most men experience erectile dysfunction because the body isn't producing testosterone, though this typically reverses when hormone therapy ends. Some men experience fatigue, mood changes, or loss of muscle mass. These side effects can be managed with supportive medications and lifestyle changes, and they're generally considered acceptable given that the alternative is progression of metastatic cancer.
                      </p>
                      <p className="font-semibold text-blue-700 bg-blue-50 p-4 rounded-lg">
                        Cost of Hormone Therapy (6-month course): $3,000 to $4,200. (If chemotherapy is added, total cost rises to $15,000 to $25,000 depending on cycles).
                      </p>
                    </div>
                  </div>

                  {/* OPTION 4 */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-emerald-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      Option 4: Chemotherapy—For Aggressive Metastatic Cancer
                    </h3>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Chemotherapy uses drugs that kill rapidly dividing cells, including cancer cells. For metastatic prostate cancer that isn't responding well to hormone therapy, chemotherapy is often the next step. The most common chemotherapy drug for prostate cancer is Docetaxel (Taxotere), which is given intravenously every three weeks for six cycles.
                      </p>
                      <p>
                        Chemotherapy works, but the side effects are significant. Patients typically experience hair loss, nausea (managed with anti-nausea medications), fatigue, and temporary low blood counts. Despite these side effects, chemotherapy can extend survival by one to two years in men with metastatic prostate cancer, which is why Dr. Ahlawat recommends it for appropriate patients.
                      </p>
                      <p>
                        The advantage of chemotherapy in India is cost. Docetaxel costs $3,000 to $5,000 per dose in the United States. In India, the generic version costs $600 to $1,000 per dose—a seventy percent savings. For a six-cycle course, this difference translates to $15,000 to $25,000 total treatment cost in India versus $40,000 to $60,000 in the United States.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* SECTION: REAL PATIENT STORIES */}
              <section className="mb-16" id="patient-stories">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Real Patient Stories: What Happens Before, During, and After Treatment
                </h2>

                <div className="space-y-6 mt-6">

                  {/* PATIENT A */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-pink-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Patient A: Early-Stage Gleason 7 from Zimbabwe, Age 62</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Michael received his prostate cancer diagnosis after a PSA screening detected an elevated level. A biopsy confirmed Gleason 7 adenocarcinoma, meaning his cancer was intermediate-risk and confined to the prostate. His local urologist in Harare recommended radiation therapy, but Michael wanted to explore surgery because he was concerned about eight weeks away from his job.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Michael consulted via video call with Dr. Wadhwa, who reviewed his pathology and imaging and recommended robotic prostatectomy. Michael flew to Delhi on a Monday, had pre-op testing Tuesday, and underwent 2-hour surgery Wednesday morning. Discharged Thursday morning with a catheter, he recovered in his hotel and returned home to Zimbabwe by Saturday.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Catheter removed on day 10 by local urologist. Regained full urinary control in 2 weeks, returned to work. At 3 months, PSA was undetectable. At 6 months, full sexual function restored.
                    </p>
                    <div className="p-4 bg-pink-50 rounded-lg text-sm text-gray-800">
                      <strong>Total Cost:</strong> Hospital $11,500 + Flight $900 + Hotel $400 + Food & Transport $300 = <strong>$13,100 Total</strong>. Insurance reimbursed $9,000 ($4,100 out of pocket). Remained cancer-free at 5-year follow-up.
                    </div>
                  </div>

                  {/* PATIENT B */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Patient B: Aggressive Gleason 8 from Botswana, Age 58</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      David's PSA was 18 ng/mL when diagnosed with Gleason 8 cancer in multiple prostate regions. Dr. Wadhwa recommended robotic prostatectomy followed by 6 weeks of radiation therapy for complete cancer elimination.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      David had surgery in week 1, recovered for 2 weeks at home, then returned to Delhi for radiation (mon-fri for 7 weeks). Post-radiation PSA was undetectable, confirming complete cancer elimination.
                    </p>
                    <div className="p-4 bg-purple-50 rounded-lg text-sm text-gray-800">
                      <strong>Total Cost:</strong> Robotic Surgery $11,500 + Radiation $7,200 + Flights (2 trips) $1,800 + Hotels (20 nights) $1,200 + Food & Transport $400 = <strong>$22,100 Total</strong>. Insurance covered 60% ($8,800 out of pocket). Remained cancer-free at 5-year follow-up.
                    </div>
                  </div>

                  {/* PATIENT C */}
                  <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Patient C: Metastatic Gleason 9 from Fiji, Age 65</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Robert discovered his cancer late with PSA 156 ng/mL and spread to lymph nodes and bone. Dr. Ahlawat recommended 6 months of hormone therapy combined with chemotherapy.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Began hormone therapy immediately in Delhi and returned monthly for chemotherapy infusions. PSA dropped from 156 to 1.2 ng/mL in 3 months. By month 6, scans showed no new growth, switched to maintenance hormone therapy.
                    </p>
                    <div className="p-4 bg-blue-50 rounded-lg text-sm text-gray-800">
                      <strong>Total Cost:</strong> 6 months treatment including hormone therapy, chemotherapy, imaging, and care = <strong>$20,000 Total</strong>. Insurance covered 70% ($6,000 out of pocket). At 5-year follow-up, alive with stable disease and excellent quality of life.
                    </div>
                  </div>

                </div>
              </section>

              {/* SECTION: DOCTOR CREDENTIALS */}
              <section className="mb-16" id="doctor-credentials">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Why These Surgeons Are Different: Credentials That Matter
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-6 space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Your surgeon matters more than almost any other factor in your prostate cancer treatment outcome. The difference between a surgeon with 500 cases and a surgeon with 4,000 cases isn't just experience—it's a measurable difference in complication rates, continence rates, potency preservation, and cancer-free survival.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                      <h3 className="text-xl font-bold text-[#053161] mb-2">Dr. Rajesh Ahlawat</h3>
                      <p className="text-xs font-bold text-pink-600 mb-3">Group Chairman - Urology & Chairman - Centre of Excellence of Prostate & Urological Cancers</p>
                      <p className="text-sm">Completed urology training at AIIMS Delhi and further trained at Mayo Clinic (Minnesota) and Memorial Sloan Kettering (New York). 41+ years experience with over 3,000 prostate cancer surgeries performed.</p>
                    </div>

                    <div className="p-6 bg-pink-50 rounded-xl border border-pink-200">
                      <h3 className="text-xl font-bold text-[#053161] mb-2">Dr. Pankaj Wadhwa</h3>
                      <p className="text-xs font-bold text-pink-600 mb-3">Senior Director - Uro-Oncology, Robotic Surgery & Endourology</p>
                      <p className="text-sm">Trained at PGI Chandigarh with FSSR (Fellowship in Robotic Surgery) from Roswell Park Cancer Institute (Buffalo, NY). Performs 130 robotic prostatectomies per year with 4,000+ total robotic cases.</p>
                    </div>
                  </div>

                  <p className="p-4 bg-purple-50 rounded-lg font-medium text-gray-800 text-sm">
                    <strong>Measurable Difference:</strong> Dr. Wadhwa's complication rate is 3.5% (vs national avg 6-8%), continence rate is 99% (vs 95%), and potency preservation rate is 88% (vs 78%).
                  </p>
                </div>
              </section>

              {/* SECTION: REALISTIC TIMELINE */}
              <section className="mb-16" id="timeline">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Realistic Timeline: What to Expect From Consultation to Full Recovery
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-6 space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The entire journey from initial consultation to resumption of normal life typically takes three to six months, though the acute treatment phase is much shorter. Understanding this timeline helps you plan for work, family responsibilities, and logistics.
                  </p>
                  <ul className="space-y-3 pl-4 border-l-2 border-pink-500 text-sm">
                    <li>• <strong>Initial Contact & Video Consultation:</strong> Video call with Dr. Ahlawat or Dr. Wadhwa within 48 hours of sending medical reports. 30-45 minute discussion on treatment options and cost estimate.</li>
                    <li>• <strong>Scheduling & Arrival:</strong> Surgery scheduled within 2-3 weeks. Fly to Delhi 3 days prior for pre-op testing.</li>
                    <li>• <strong>Surgery & Hospital Stay:</strong> Surgery on day 3 or 4, discharged to hotel next morning (day 4). Return home by day 7 or 8.</li>
                    <li>• <strong>Home Recovery:</strong> 4-6 weeks total. Catheter removed by local urologist on day 7-10. Continence returns in 1-2 weeks. Potency recovers over 3-6 months.</li>
                    <li>• <strong>Follow-up Milestones:</strong> 6 weeks (PSA test), 3 months (imaging), 6 months (comprehensive evaluation via video call), and annually thereafter.</li>
                  </ul>
                </div>
              </section>

              {/* SECTION: COST TRANSPARENCY */}
              <section className="mb-16" id="cost-transparency">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Cost Transparency: No Hidden Fees, Everything Included
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-6 space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    At Ekam Health Services, we believe in complete financial transparency. The prices quoted for surgical treatment include everything—there are no surprise bills after you've paid the quoted amount.
                  </p>
                  <p>
                    For robotic prostatectomy, the quoted hospital cost of $9,500 to $13,200 includes surgeon fee, operating room, anesthesia, hospital stay medications, nursing, imaging, pathology, and 1-night stay. Out-of-pocket travel expenses (flights, hotel, food, transport) add approx $2,000 to $3,000, bringing total trip cost to $13,500 to $14,500.
                  </p>
                  <p className="p-4 bg-emerald-50 rounded-lg text-emerald-900 font-medium">
                    <strong>70% Savings vs USA:</strong> The same procedure in the US costs $56,500+ ($40,000 hospital + $15,000 surgeon + $1,500 anesthesia). Treatment in India saves $40,000 to $50,000.
                  </p>
                  <p>
                    <strong>Payment Plans:</strong> 30% advance (non-refundable) to hold date, 50% due 48 hours before arrival, 20% due within 30 days of discharge. Medical loans available at 0-10% interest for 12 months.
                  </p>
                </div>
              </section>

              {/* SECTION: FAQS */}
              <section className="mb-16" id="faqs">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Frequently Asked Questions Patients Ask
                </h2>

                <div className="space-y-4 mt-6">
                  {[
                    {
                      q: "How do I know if I'm a candidate for surgery versus radiation?",
                      a: "Your Gleason Score, PSA level, and stage of cancer determine suitability. Gleason 6-7 cancers can be treated with either surgery or radiation with equivalent outcomes. Gleason 8-9 cancers are usually best treated with surgery, often combined with radiation. Very high-risk cases with significant spread may benefit more from radiation or hormone therapy."
                    },
                    {
                      q: "What's the difference between Gleason 6, 7, 8, and 9?",
                      a: "Gleason 6 means cancer cells look relatively normal under the microscope and grow slowly—the least aggressive. Gleason 7 means moderate abnormality and growth rate. Gleason 8-9 means highly abnormal cells that grow aggressively. Higher Gleason scores require more aggressive treatment and carry higher recurrence risks."
                    },
                    {
                      q: "Will I be incontinent after surgery?",
                      a: "Temporary leaking of small amounts of urine is common immediately after catheter removal, but this resolves within weeks for almost all patients. Dr. Wadhwa's continence rate is 99%—meaning 99 out of 100 patients regain full urinary control within six weeks."
                    },
                    {
                      q: "Will I have erectile dysfunction permanently?",
                      a: "Erectile function recovery depends on your age, nerve preservation, and recovery. Dr. Wadhwa's potency preservation rate is 88%. Medications like Viagra often bridge the gap while natural function returns over 3 to 6 months."
                    },
                    {
                      q: "How long after surgery can I have sexual relations?",
                      a: "You should wait 4 to 6 weeks after surgery to avoid straining the surgical site. Natural erectile function recovery takes 3 to 6 months."
                    },
                    {
                      q: "What if my cancer comes back?",
                      a: "Recurrence is rare with complete surgical removal. Dr. Wadhwa's cancer-free rate is 96% in early-stage cases and 80% in advanced cases. If recurrence occurs, early detection via PSA monitoring allows prompt treatment with radiation or other options."
                    },
                    {
                      q: "Can family members come with me to India?",
                      a: "Yes, hospitals encourage family members to be present. Bring 1 or 2 family members for emotional support. Accommodation near the patient floor can be arranged."
                    },
                    {
                      q: "How do I arrange my catheter removal at home?",
                      a: "Ekam Health Services provides your discharge summary and coordinates with your local urologist for catheter removal around day 7 to 10 after surgery. It is a simple 10-minute office procedure."
                    },
                    {
                      q: "What if I have complications after returning home?",
                      a: "Most minor complications are manageable with antibiotics or minor procedures at your local hospital. For serious complications, we can arrange a return to Delhi for assessment and treatment."
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-pink-500">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">Q: {item.q}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">A: {item.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION: NEXT STEPS */}
              <section className="mb-16" id="next-steps">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Your Next Step: Schedule Your Free Consultation
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-6 space-y-4">
                  <p className="text-gray-700 font-semibold">
                    The best first step is to speak directly with the surgeon who might treat your cancer. During a free video consultation, the surgeon will review your pathology and imaging, discuss options, answer questions, and provide a detailed cost estimate.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 pt-2">
                    <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                      <h3 className="font-bold text-pink-700 mb-3 text-lg">Contact Ekam Health Services:</h3>
                      <p className="mb-2">📱 WhatsApp: <a href="https://wa.me/919990205353" target="_blank" rel="noopener noreferrer" className="font-semibold text-pink-600 hover:underline">+91-9990205353</a></p>
                      <p className="mb-2">✉️ Email: <a href="mailto:contact@ekamcure.com" className="font-semibold text-pink-600 hover:underline">contact@ekamcure.com</a></p>
                      <p className="mb-2">🌐 Website: <a href="https://www.ekamcure.com" className="font-semibold text-pink-600 hover:underline">www.ekamcure.com</a></p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h3 className="font-bold text-blue-900 mb-3 text-lg">Bring to Your Consultation:</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Prostate biopsy report (with Gleason Score)</li>
                        <li>• Latest imaging (CT, MRI, or ultrasound)</li>
                        <li>• Most recent PSA test result</li>
                        <li>• List of current medical conditions or medications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* MORE RELATED LINKS */}
              <section className="mb-16">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
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

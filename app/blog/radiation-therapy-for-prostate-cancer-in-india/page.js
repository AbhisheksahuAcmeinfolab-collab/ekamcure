import Script from "next/script";
import Link from "next/link";
import React from "react";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

export const metadata = {
  title: "Radiation Therapy for Prostate Cancer in India | Advanced Treatment",
  description:
    "Explore advanced radiation therapy for prostate cancer in India, including IMRT, IGRT, SBRT, VMAT, proton therapy, expert oncologists, and affordable treatment for international patients.",
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
      "name": "Radiation Therapy for Prostate Cancer in India",
      "item": "https://www.ekamcure.com/blog/radiation-therapy-for-prostate-cancer-in-india"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Radiation Therapy for Prostate Cancer in India",
  "description":
    "Explore advanced radiation therapy for prostate cancer in India, including IMRT, IGRT, SBRT, VMAT, proton therapy, expert oncologists, and affordable treatment for international patients.",
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
  {
    q: "What is radiation therapy for prostate cancer?",
    a: "Radiation therapy is a non-invasive cancer treatment that uses high-energy radiation beams to destroy prostate cancer cells while minimizing damage to nearby healthy tissues. It is commonly used for localized, locally advanced, and recurrent prostate cancer."
  },
  {
    q: "When is radiation therapy recommended for prostate cancer?",
    a: "Radiation therapy may be recommended for patients with localized, intermediate-risk, high-risk, or recurrent prostate cancer. It may also be used after prostate surgery to reduce the risk of cancer recurrence or alongside hormone therapy for certain patients."
  },
  {
    q: "What types of radiation therapy are available for prostate cancer in India?",
    a: "Leading cancer hospitals in India offer several advanced radiation techniques, including External Beam Radiation Therapy (EBRT), Intensity-Modulated Radiation Therapy (IMRT), Image-Guided Radiation Therapy (IGRT), Volumetric Modulated Arc Therapy (VMAT), Stereotactic Body Radiation Therapy (SBRT), Proton Therapy, and Brachytherapy."
  },
  {
    q: "How long does radiation therapy for prostate cancer take?",
    a: "The duration depends on the type of radiation therapy and the individualized treatment plan. Conventional radiation therapy may take several weeks, while advanced techniques like SBRT can often be completed in just a few treatment sessions."
  },
  {
    q: "Is radiation therapy painful?",
    a: "No. Radiation therapy is a painless procedure. Patients do not feel the radiation during treatment, and each session typically lasts only a few minutes."
  },
  {
    q: "What are the possible side effects of radiation therapy?",
    a: "Some patients may experience temporary side effects such as fatigue, frequent urination, mild burning during urination, bowel changes, or erectile dysfunction. Most side effects can be managed with appropriate medical care, and your radiation oncologist will discuss potential risks before treatment."
  },
  {
    q: "Is radiation therapy as effective as prostate cancer surgery?",
    a: "For many patients with localized prostate cancer, radiation therapy offers cancer control rates comparable to surgery. The most appropriate treatment depends on the stage of cancer, PSA level, Gleason score, overall health, and individual treatment goals."
  },
  {
    q: "Why do international patients choose India for radiation therapy?",
    a: "Patients from Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Ghana, Sudan, South Sudan, Zambia, Zimbabwe, Rwanda, DR Congo, Sierra Leone, Liberia, Malawi, the Maldives, Fiji, Papua New Guinea, and the Solomon Islands choose India for advanced radiation technology, experienced radiation oncologists, shorter waiting times, and affordable cancer treatment."
  },
  {
    q: "How do doctors decide which radiation therapy technique is best?",
    a: "Radiation oncologists evaluate several factors, including the stage of prostate cancer, PSA level, Gleason score, tumor location, previous treatments, age, and overall health before recommending the most suitable radiation therapy technique."
  },
  {
    q: "How can Ekam help international patients seeking radiation therapy in India?",
    a: "Ekam assists international patients by helping them connect with leading cancer hospitals and experienced radiation oncologists in India. The team also provides support with medical record reviews, treatment planning, hospital selection, medical visa assistance, travel coordination, and end-to-end patient support throughout the treatment journey."
  }
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
     { numbered: [...] }
     { sub: { h, lead?, items?, trailing? } }
--------------------------------------------------------------------- */

const sections = [
  {
    id: "intro",
    title: "Introduction",
    blocks: [
      "Radiation therapy is one of the most widely used and effective treatment approaches for prostate cancer. It uses high-energy radiation beams to destroy cancer cells, prevent tumor growth, and reduce the risk of cancer recurrence. Over the past two decades, advancements in radiation technology have transformed prostate cancer care, allowing doctors to deliver highly targeted treatment while minimizing damage to surrounding healthy tissues.",
      "India has become a leading destination for radiation therapy due to its modern oncology infrastructure, experienced radiation oncologists, and access to advanced treatment technologies. Patients from various countries travel to India seeking high-quality cancer care, shorter waiting periods, and access to specialized radiation treatment programs.",
      "Unlike surgical procedures that involve removing the prostate gland, radiation therapy focuses on destroying cancer cells through carefully planned radiation delivery. Depending on the patient's condition, radiation therapy may be used as a primary treatment, combined with hormone therapy, administered after surgery, or recommended for recurrent disease.",
      "Modern radiation oncology departments in India now utilize sophisticated imaging systems, computer-guided treatment planning, and precision radiation techniques that enable oncologists to customize treatment for each patient."
    ]
  },
  {
    id: "understanding-role",
    title: "Understanding the Role of Radiation Therapy in Prostate Cancer",
    blocks: [
      "Prostate cancer behaves differently from many other cancers. Some tumors grow slowly and remain confined to the prostate gland, while others may spread to nearby tissues or distant organs. Radiation therapy can be adapted to different stages of the disease, making it a versatile treatment option.",
      "The primary objective of radiation therapy is to damage the DNA inside cancer cells. Once the DNA is damaged, cancer cells lose their ability to grow and multiply. Over time, these damaged cells die and are naturally eliminated by the body.",
      { list: { lead: "Radiation therapy may be recommended for:", items: ["Localized prostate cancer", "Intermediate-risk prostate cancer", "High-risk prostate cancer", "Locally advanced prostate cancer", "Recurrent prostate cancer", "Post-surgical treatment", "Symptom management in advanced disease"] } },
      "Because prostate cancer treatment plans are highly individualized, radiation therapy may be delivered alone or as part of a broader treatment strategy."
    ]
  },
  {
    id: "when-recommended",
    title: "When Is Radiation Therapy Recommended?",
    blocks: ["Radiation therapy is not suitable for every patient. Treatment recommendations depend on several factors, including cancer stage, tumor characteristics, age, overall health, and patient preferences."],
    subs: [
      { h3: "Early-Stage Disease", blocks: ["Patients diagnosed with localized prostate cancer often have multiple treatment options available. In many cases, radiation therapy offers outcomes comparable to surgery while avoiding the need for major surgical intervention."] },
      { h3: "Intermediate-Risk Disease", blocks: ["For intermediate-risk prostate cancer, radiation therapy is frequently combined with hormone therapy to improve treatment effectiveness and reduce the likelihood of recurrence."] },
      { h3: "High-Risk Disease", blocks: ["Patients with high-risk prostate cancer may require more intensive treatment. Radiation therapy can be delivered alongside hormone therapy and other supportive interventions to maximize cancer control."] },
      { h3: "After Prostate Surgery", blocks: ["Even after successful surgery, microscopic cancer cells may remain in the prostate bed. Radiation therapy can help eliminate these residual cells and lower the risk of recurrence."] },
      { h3: "Recurrent Prostate Cancer", blocks: ["If cancer returns after surgery or previous treatment, radiation therapy may provide an opportunity for additional cancer control."] }
    ]
  },
  {
    id: "radiation-oncology-india",
    title: "Radiation Oncology in India",
    blocks: [
      "Radiation oncology has evolved significantly in India over the last decade. Leading cancer centers now offer advanced technologies that were once available only in select international institutions.",
      { list: { lead: "Many hospitals have invested in:", items: ["Linear accelerators", "Image-guided radiation systems", "Intensity-modulated radiation therapy platforms", "Stereotactic radiation systems", "Brachytherapy facilities", "Advanced treatment planning software"] } },
      "These developments allow radiation oncologists to deliver highly accurate treatments tailored to each patient's anatomy and disease characteristics."
    ]
  },
  {
    id: "types-of-radiation",
    title: "Types of Radiation Therapy for Prostate Cancer",
    blocks: ["Radiation therapy is not a single treatment. Multiple techniques are available, each designed for specific clinical situations."],
    subs: [
      {
        h3: "External Beam Radiation Therapy (EBRT)",
        blocks: [
          "External Beam Radiation Therapy is the most commonly used form of radiation treatment for prostate cancer.",
          "In this approach, radiation is generated by a machine located outside the body and directed toward the prostate gland. Treatment is carefully planned using imaging studies and computer-generated treatment maps.",
          "The procedure itself is painless and does not require hospitalization. Patients typically receive treatment over several weeks, depending on the treatment protocol.",
          { list: { lead: "Benefits include:", items: ["Non-invasive treatment", "No surgical incisions", "High precision", "Suitable for many stages of prostate cancer"] } }
        ]
      },
      {
        h3: "Intensity-Modulated Radiation Therapy (IMRT)",
        blocks: [
          "IMRT represents a major advancement in radiation oncology.",
          "Traditional radiation techniques deliver uniform radiation doses across the treatment area. IMRT allows doctors to vary radiation intensity across different parts of the target.",
          { list: { lead: "This enables:", items: ["Better protection of healthy tissues", "Higher radiation doses to cancer cells", "Reduced side effects", "Improved treatment accuracy"] } },
          "Because the prostate is located close to the bladder and rectum, IMRT helps minimize radiation exposure to these sensitive organs."
        ]
      },
      {
        h3: "Image-Guided Radiation Therapy (IGRT)",
        blocks: [
          "The prostate gland can shift slightly from day to day due to bladder filling and bowel movements.",
          "IGRT uses advanced imaging before each treatment session to verify the exact position of the prostate.",
          { list: { lead: "Advantages include:", items: ["Improved treatment accuracy", "Reduced radiation exposure to surrounding tissues", "Better consistency throughout the treatment course", "Enhanced safety"] } },
          "Many leading hospitals in India now routinely combine IMRT and IGRT to achieve optimal treatment precision."
        ]
      },
      {
        h3: "Volumetric Modulated Arc Therapy (VMAT)",
        blocks: [
          "VMAT is an advanced form of IMRT that delivers radiation while the treatment machine rotates around the patient.",
          { list: { lead: "This approach offers several advantages:", items: ["Faster treatment sessions", "Enhanced dose distribution", "Increased patient comfort", "Reduced treatment time"] } },
          "Shorter treatment sessions can also help minimize patient movement during treatment."
        ]
      },
      {
        h3: "Stereotactic Body Radiation Therapy (SBRT)",
        blocks: [
          "SBRT delivers highly focused radiation doses in fewer treatment sessions.",
          "Instead of receiving treatment over several weeks, some patients may complete therapy in only a few sessions.",
          { list: { lead: "Benefits include:", items: ["Shorter treatment schedules", "High precision", "Convenience for international patients", "Reduced treatment burden"] } },
          "SBRT is generally considered for carefully selected patients and requires sophisticated planning and imaging systems."
        ]
      },
      {
        h3: "Proton Therapy",
        blocks: [
          "Proton therapy is one of the most advanced forms of radiation treatment.",
          "Unlike traditional radiation, proton beams can be programmed to release their maximum energy directly within the tumor while minimizing exit radiation beyond the target area.",
          { list: { lead: "Potential benefits include:", items: ["Reduced radiation exposure to nearby tissues", "Precise tumor targeting", "Lower risk of certain side effects"] } },
          "Although proton therapy is available in limited centers worldwide, it continues to gain attention as an emerging treatment option for selected prostate cancer patients."
        ]
      },
      {
        h3: "Brachytherapy",
        blocks: [
          "Brachytherapy involves placing radioactive sources directly inside or near the prostate gland.",
          "Because the radiation originates within the target area, very high doses can be delivered while minimizing exposure to surrounding organs.",
          { list: { lead: "Brachytherapy may be used:", items: ["Alone for selected patients", "In combination with external beam radiation", "As part of a comprehensive treatment strategy"] } },
          "The suitability of brachytherapy depends on tumor characteristics, prostate size, and overall treatment objectives."
        ]
      }
    ]
  },
  {
    id: "choosing-technique",
    title: "Choosing the Appropriate Radiation Technique",
    blocks: [
      "No single radiation technique is best for every patient.",
      { list: { lead: "Radiation oncologists evaluate several factors before selecting a treatment approach:", items: ["Cancer stage", "PSA levels", "Tumor aggressiveness", "Prostate size", "Previous treatments", "Overall health", "Expected treatment outcomes"] } },
      "The final treatment plan is designed to maximize cancer control while minimizing side effects and preserving quality of life."
    ]
  },
  {
    id: "planning-process",
    title: "Radiation Therapy Planning Process for Prostate Cancer",
    blocks: [
      "Radiation therapy is much more than simply delivering radiation to a tumor. Before the first treatment session begins, a detailed planning process is carried out to ensure that radiation reaches the prostate with maximum accuracy while protecting surrounding healthy tissues.",
      "Modern radiation therapy relies heavily on imaging, computer-assisted planning, and personalized treatment design. This preparation phase is often one of the most important parts of the entire treatment journey because it directly influences treatment precision and long-term outcomes."
    ]
  },
  {
    id: "initial-consultation",
    title: "Initial Radiation Oncology Consultation",
    blocks: [
      { list: { lead: "The process usually begins with a consultation with a radiation oncologist. During this appointment, the specialist reviews:", items: ["Medical history", "PSA reports", "Biopsy findings", "MRI scans", "PET-CT scans (if available)", "Previous treatments", "Current symptoms", "Overall health condition"] } },
      "The oncologist evaluates whether radiation therapy is appropriate and determines the most suitable radiation technique.",
      { list: { lead: "Patients are encouraged to discuss:", items: ["Treatment expectations", "Possible side effects", "Treatment duration", "Daily routine during therapy", "Long-term follow-up plans"] } },
      "This consultation helps establish realistic expectations and allows patients to make informed decisions about their care."
    ]
  },
  {
    id: "multidisciplinary-planning",
    title: "Multidisciplinary Treatment Planning",
    blocks: [
      "Many leading cancer hospitals in India use a multidisciplinary approach.",
      "Instead of a single doctor making decisions independently, multiple specialists review the patient's case together.",
      { list: { lead: "These specialists may include:", items: ["Uro-oncologists", "Radiation oncologists", "Medical oncologists", "Radiologists", "Pathologists", "Oncology nurses"] } },
      { list: { lead: "The team discusses:", items: ["Cancer stage", "Risk category", "Treatment objectives", "Potential benefits of radiation therapy", "Additional treatments that may be required"] } },
      "This collaborative approach helps ensure that every aspect of the patient's condition is considered before treatment begins."
    ]
  },
  {
    id: "simulation",
    title: "Simulation: The Foundation of Radiation Therapy",
    blocks: [
      "Simulation is a specialized planning procedure performed before radiation treatment starts.",
      "The purpose is to create a precise map of the treatment area.",
      "Simulation is not a treatment session.",
      { list: { lead: "Instead, it serves as a preparation step that allows the oncology team to identify:", items: ["Exact prostate location", "Nearby organs", "Areas requiring radiation", "Structures that need protection"] } },
      "This information is then used to design the final treatment plan."
    ]
  },
  {
    id: "ct-simulation",
    title: "CT Simulation",
    blocks: [
      "The most common planning procedure is CT simulation.",
      { list: { lead: "During this process:", items: ["The patient lies on a treatment table.", "Positioning devices may be used.", "CT images are acquired.", "Multiple anatomical measurements are recorded."] } },
      { list: { lead: "These images provide detailed information about:", items: ["Prostate size", "Prostate location", "Bladder position", "Rectal anatomy", "Pelvic structures"] } },
      "The imaging data is transferred to advanced treatment planning software where specialists begin designing the radiation plan."
    ]
  },
  {
    id: "mri-integration",
    title: "MRI Integration in Radiation Planning",
    blocks: [
      "Many modern cancer centers combine MRI scans with CT simulation.",
      { list: { lead: "MRI offers superior soft tissue visualization and helps doctors identify:", items: ["Tumor boundaries", "Areas of higher cancer involvement", "Critical nearby structures"] } },
      "Combining MRI and CT images improves targeting accuracy and supports more personalized treatment planning."
    ]
  },
  {
    id: "immobilization",
    title: "Immobilization and Patient Positioning",
    blocks: [
      "One of the challenges of radiation therapy is ensuring that the patient remains in exactly the same position during every treatment session.",
      "To achieve consistency, customized positioning systems may be used.",
      { list: { lead: "These can include:", items: ["Leg supports", "Pelvic stabilizers", "Positioning cushions", "Vacuum fixation devices"] } },
      "The goal is to reproduce the same treatment position every day throughout the treatment course.",
      "Consistent positioning improves accuracy and helps avoid unnecessary radiation exposure to healthy tissues."
    ]
  },
  {
    id: "contouring",
    title: "Contouring: Defining the Treatment Area",
    blocks: [
      "Once imaging is complete, radiation oncologists begin a process known as contouring.",
      "Contouring involves identifying:",
      { sub: { h: "Target Areas", lead: "These include:", items: ["Prostate gland", "Areas at risk for microscopic disease", "Surgical bed (for post-operative treatment)"] } },
      { sub: { h: "Organs at Risk", lead: "These structures require protection from excessive radiation exposure. Common organs at risk include:", items: ["Bladder", "Rectum", "Small bowel", "Femoral heads", "Urethra"] } },
      "Accurate contouring plays a major role in reducing side effects."
    ]
  },
  {
    id: "planning-software",
    title: "Treatment Planning Software",
    blocks: [
      "After contouring is completed, medical physicists and radiation oncologists create a customized treatment plan.",
      { list: { lead: "Advanced software calculates:", items: ["Radiation beam angles", "Radiation intensity", "Dose distribution", "Organ protection parameters"] } },
      "Thousands of calculations are performed to determine the safest and most effective radiation delivery strategy.",
      "Modern planning systems generate highly detailed three-dimensional treatment maps.",
      { list: { lead: "These maps allow doctors to visualize:", items: ["Areas receiving radiation", "Dose concentrations", "Organ protection zones"] } },
      "Before treatment begins, the plan undergoes extensive quality checks."
    ]
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance Before Treatment",
    blocks: [
      "Patient safety is a top priority in radiation oncology.",
      { list: { lead: "Before the first treatment session:", items: ["Radiation doses are verified.", "Equipment accuracy is tested.", "Treatment plans are reviewed.", "Physics quality checks are completed."] } },
      "These procedures help ensure that radiation is delivered exactly as prescribed.",
      "Leading hospitals often perform multiple verification steps before approving a treatment plan."
    ]
  },
  {
    id: "preparing",
    title: "Preparing for Radiation Therapy",
    blocks: ["Patients are often given specific instructions before treatment begins.", "These guidelines help improve consistency and treatment accuracy."],
    subs: [
      {
        h3: "Bladder Preparation",
        blocks: [
          { list: { lead: "Patients may be asked to:", items: ["Drink water before treatment.", "Maintain a comfortably full bladder."] } },
          { list: { lead: "A full bladder helps:", items: ["Move the bladder away from the treatment area.", "Reduce radiation exposure.", "Improve treatment reproducibility."] } }
        ]
      },
      {
        h3: "Bowel Preparation",
        blocks: [
          { list: { lead: "Patients may receive instructions regarding:", items: ["Diet modifications", "Bowel habits", "Gas reduction strategies"] } },
          "Maintaining consistent bowel conditions helps stabilize prostate positioning."
        ]
      }
    ]
  },
  {
    id: "session-experience",
    title: "What Happens During a Radiation Therapy Session?",
    blocks: [
      "Many patients feel anxious before their first treatment session.",
      "However, the procedure itself is generally painless and straightforward.",
      "When patients arrive:",
      { numbered: ["Identity verification is completed.", "Positioning is checked.", "Imaging verification may be performed.", "Treatment is delivered."] },
      "Most sessions last only a few minutes.",
      "The actual radiation delivery often takes less time than patient positioning and verification procedures."
    ]
  },
  {
    id: "daily-imaging",
    title: "Daily Imaging and Verification",
    blocks: [
      "Modern systems frequently perform imaging before treatment.",
      "This is especially important because the prostate can shift slightly from day to day.",
      { list: { lead: "Image guidance helps confirm:", items: ["Prostate location", "Treatment alignment", "Organ positioning"] } },
      "Adjustments can be made immediately before radiation delivery.",
      "This process significantly improves treatment precision."
    ]
  },
  {
    id: "during-delivery",
    title: "During Radiation Delivery",
    blocks: [
      "The treatment machine rotates around the patient while delivering radiation according to the treatment plan.",
      { list: { lead: "Patients:", items: ["Do not feel radiation.", "Do not see radiation.", "Do not become radioactive."] } },
      "The machine may produce sounds while operating, but the treatment itself is painless.",
      "Radiation therapists monitor the patient throughout the procedure using cameras and communication systems."
    ]
  },
  {
    id: "after-session",
    title: "After Each Session",
    blocks: [
      "Most patients can immediately resume normal daily activities.",
      "Unlike surgery, radiation therapy generally does not require hospitalization.",
      { list: { lead: "Patients can:", items: ["Return home", "Continue routine activities", "Work if they feel comfortable", "Maintain normal social interactions"] } },
      "Treatment is usually delivered on an outpatient basis."
    ]
  },
  {
    id: "duration",
    title: "Duration of Radiation Therapy",
    blocks: ["The total treatment duration depends on the radiation technique being used."],
    subs: [
      { h3: "Conventional Radiation Therapy", blocks: [{ list: { lead: "Traditionally, treatment may be delivered over:", items: ["7–9 weeks", "Five days per week"] } }, "This approach allows radiation doses to be spread across multiple sessions."] },
      { h3: "Moderate Hypofractionation", blocks: ["Many centers now use moderately shortened treatment schedules.", { list: { lead: "Treatment may be completed within:", items: ["4–6 weeks"] } }, "Clinical studies have demonstrated excellent outcomes with these schedules."] },
      { h3: "Ultra-Hypofractionation (SBRT)", blocks: ["SBRT allows treatment completion in significantly fewer sessions.", { list: { lead: "Some patients may complete therapy in:", items: ["5 sessions", "7 sessions"] } }, "This approach is particularly attractive for international patients who wish to reduce treatment duration."] }
    ]
  },
  {
    id: "managing-life",
    title: "Managing Life During Radiation Therapy",
    blocks: [
      "Most patients continue many of their normal activities throughout treatment.",
      { list: { lead: "Helpful recommendations include:", items: ["Staying physically active", "Drinking adequate fluids", "Following dietary advice", "Maintaining regular sleep patterns", "Reporting side effects early", "Attending all scheduled sessions"] } },
      "Consistency is important because missed sessions may affect treatment schedules."
    ]
  },
  {
    id: "emotional-prep",
    title: "Emotional Preparation for Treatment",
    blocks: [
      "A cancer diagnosis can be emotionally challenging.",
      { list: { lead: "Many patients experience:", items: ["Anxiety", "Uncertainty", "Stress", "Fear of side effects"] } },
      "Support from healthcare teams, family members, counselors, and patient support groups can be valuable during treatment.",
      "Understanding the treatment process often helps reduce anxiety and improves confidence throughout the therapy journey."
    ]
  },
  {
    id: "vs-surgery",
    title: "Radiation Therapy vs Robotic Prostate Surgery: Understanding the Differences",
    blocks: [
      "One of the most common questions patients ask after being diagnosed with prostate cancer is whether they should choose radiation therapy or robotic prostate surgery. Both approaches are established treatment options, but they work in very different ways and may be suitable for different patient profiles.",
      "Robotic surgery physically removes the prostate gland, while radiation therapy destroys cancer cells without removing the organ. The decision is rarely based on a single factor. Instead, specialists evaluate age, cancer aggressiveness, medical history, existing health conditions, and long-term treatment goals before recommending an approach.",
      "For some patients, surgery may be preferred because it provides detailed pathological information after the prostate is removed. Others may benefit more from radiation therapy because it avoids surgery and may be a safer option for individuals with significant medical conditions.",
      "The choice becomes even more complex in intermediate-risk and high-risk prostate cancer, where multiple treatment combinations may be considered. This is why treatment planning should always involve experienced specialists who can evaluate all available options rather than recommending a single approach for every patient."
    ]
  },
  {
    id: "localized",
    title: "Radiation Therapy for Localized Prostate Cancer",
    blocks: [
      "Localized prostate cancer refers to disease that remains confined to the prostate gland.",
      "For these patients, radiation therapy is often considered a definitive treatment option. Modern radiation techniques allow oncologists to deliver highly targeted doses to the prostate while minimizing exposure to nearby structures.",
      "The primary goal in localized disease is complete cancer control while preserving long-term quality of life.",
      "Many patients with localized prostate cancer select radiation therapy because it allows treatment without hospitalization or major surgery. Advances in imaging and treatment planning have further improved precision, making radiation therapy an important option for carefully selected patients."
    ]
  },
  {
    id: "intermediate-risk",
    title: "Radiation Therapy for Intermediate-Risk Prostate Cancer",
    blocks: [
      "Intermediate-risk prostate cancer occupies a unique position between low-risk and high-risk disease.",
      "In these cases, treatment planning becomes more individualized because the biological behavior of the cancer can vary considerably between patients.",
      "Radiation therapy is frequently used as a central component of treatment for intermediate-risk disease. In some situations, additional therapies may be incorporated to strengthen treatment effectiveness.",
      { list: { lead: "Treatment planning focuses on:", items: ["Long-term disease control", "Prevention of local progression", "Reduction of recurrence risk", "Preservation of normal urinary function"] } },
      "Many international treatment guidelines recognize radiation therapy as a highly effective option for appropriately selected intermediate-risk patients."
    ]
  },
  {
    id: "high-risk",
    title: "Radiation Therapy for High-Risk Prostate Cancer",
    blocks: [
      "High-risk prostate cancer requires a more aggressive treatment strategy because the probability of cancer spread is significantly higher.",
      "The treatment objective extends beyond controlling disease within the prostate. Doctors must also address the possibility of microscopic cancer cells that may exist outside the gland.",
      "Radiation therapy plays a critical role in the management of high-risk disease because treatment fields can be customized to include areas at greater risk of cancer involvement.",
      { list: { lead: "Treatment planning in high-risk patients often involves:", items: ["Expanded treatment volumes", "Multidisciplinary review", "Comprehensive follow-up planning", "Long-term disease surveillance"] } },
      "Because every high-risk case is unique, treatment recommendations are highly personalized."
    ]
  },
  {
    id: "locally-advanced",
    title: "Radiation Therapy for Locally Advanced Prostate Cancer",
    blocks: [
      "Locally advanced prostate cancer occurs when cancer extends beyond the prostate but has not spread extensively to distant organs.",
      "These patients often require more complex treatment planning compared to those with localized disease.",
      "Radiation therapy allows oncologists to target not only the prostate gland but also adjacent tissues that may contain microscopic cancer involvement.",
      "One advantage of modern radiation treatment is the ability to customize treatment areas according to the pattern of disease spread identified through imaging studies. This flexibility makes radiation therapy an important option for managing locally advanced disease."
    ]
  },
  {
    id: "adjuvant",
    title: "Adjuvant Radiation Therapy After Surgery",
    blocks: [
      "Not all patients complete their treatment journey after prostate surgery.",
      { list: { lead: "In certain situations, pathology findings may indicate a higher risk of recurrence. Examples may include:", items: ["Cancer extending beyond the prostate", "Positive surgical margins", "High-grade disease features"] } },
      "When these factors are present, doctors may recommend adjuvant radiation therapy.",
      "Adjuvant radiation is delivered after surgery before there is any evidence of recurrent disease.",
      "The objective is preventive rather than reactive. Treatment is designed to eliminate microscopic cancer cells that may remain after surgery and reduce the likelihood of future recurrence."
    ]
  },
  {
    id: "salvage",
    title: "Salvage Radiation Therapy",
    blocks: [
      "Salvage radiation therapy differs significantly from adjuvant radiation.",
      "Instead of being administered immediately after surgery, salvage radiation is used when evidence suggests that cancer may be returning.",
      { list: { lead: "This approach is often considered when:", items: ["PSA levels begin rising after surgery", "Imaging identifies localized recurrence", "There is concern regarding residual disease"] } },
      "The success of salvage radiation therapy often depends on early detection and timely intervention.",
      "Many specialists emphasize close PSA monitoring after prostate cancer surgery because early identification of recurrence can create additional treatment opportunities."
    ]
  },
  {
    id: "biochemical-recurrence",
    title: "Radiation Therapy for Biochemical Recurrence",
    blocks: [
      "Biochemical recurrence refers to rising PSA levels following initial treatment.",
      "In some patients, PSA may increase despite the absence of visible disease on conventional imaging.",
      "This situation presents unique challenges because treatment decisions must be made before cancer becomes clinically apparent.",
      "Modern imaging technologies have improved doctors' ability to identify recurrence at earlier stages, allowing radiation oncologists to design more targeted treatment strategies. Radiation therapy remains one of the most important options for carefully selected patients experiencing biochemical recurrence."
    ]
  },
  {
    id: "combining-hormone",
    title: "Combining Radiation Therapy with Hormone Therapy",
    blocks: [
      "For certain categories of prostate cancer, radiation therapy may be combined with hormone therapy.",
      "Hormone therapy works differently from radiation.",
      "Instead of targeting tumors directly, it reduces the influence of hormones that support prostate cancer growth.",
      "The combination can enhance treatment effectiveness in selected patients.",
      { list: { lead: "Doctors determine whether hormone therapy should accompany radiation based on factors such as:", items: ["Cancer stage", "PSA levels", "Gleason score", "Imaging findings", "Overall recurrence risk"] } },
      "Not every patient requires combination therapy, which is why treatment decisions are individualized."
    ]
  },
  {
    id: "timing-hormone",
    title: "Timing of Hormone Therapy and Radiation",
    blocks: [
      "When hormone therapy is used alongside radiation therapy, the sequence may vary.",
      "Some patients begin hormone therapy before radiation starts.",
      "Others continue hormone therapy during treatment.",
      "Certain high-risk cases may require extended treatment after radiation is completed.",
      "The duration depends on the overall treatment strategy developed by the oncology team.",
      "Because treatment timing can influence outcomes, careful coordination between specialists is essential."
    ]
  },
  {
    id: "lymph-node",
    title: "Radiation Therapy for Pelvic Lymph Node Involvement",
    blocks: [
      "In some prostate cancer cases, there is concern that cancer cells may have spread to nearby lymph nodes.",
      "Modern radiation planning allows doctors to include lymph node regions within treatment fields when clinically appropriate.",
      "Advanced imaging technologies have improved the ability to identify lymph node involvement, allowing treatment plans to become increasingly personalized.",
      "This capability represents one of the major advantages of contemporary radiation oncology."
    ]
  },
  {
    id: "personalized-decisions",
    title: "Personalized Treatment Decisions",
    blocks: [
      "No two prostate cancer patients are exactly alike.",
      { list: { lead: "Factors influencing radiation treatment recommendations may include:", items: ["Age", "Life expectancy", "Existing medical conditions", "Previous treatments", "Tumor characteristics", "PSA history", "Patient preferences"] } },
      "The best treatment strategy often results from balancing cancer control goals with quality-of-life considerations.",
      "Personalization has become a cornerstone of modern prostate cancer care, particularly in advanced radiation oncology programs."
    ]
  },
  {
    id: "follow-up",
    title: "The Role of Follow-Up Monitoring",
    blocks: [
      "The effectiveness of radiation therapy is evaluated over time through structured follow-up programs.",
      { list: { lead: "Regular monitoring allows doctors to:", items: ["Assess treatment response", "Detect recurrence early", "Manage long-term health concerns", "Monitor PSA trends"] } },
      "Follow-up schedules vary among patients, but long-term surveillance remains an important component of prostate cancer management.",
      "Successful treatment extends beyond the completion of radiation sessions. Ongoing monitoring helps ensure that patients continue receiving appropriate care throughout survivorship."
    ]
  },
  {
    id: "looking-ahead",
    title: "Looking Ahead",
    blocks: [
      "Radiation oncology continues to evolve rapidly. Advances in imaging, artificial intelligence, adaptive radiation planning, and precision targeting are transforming how prostate cancer is treated worldwide.",
      "As these technologies become increasingly integrated into clinical practice, patients may benefit from even more personalized treatment strategies, improved accuracy, and enhanced long-term outcomes."
    ]
  }
];

/* ---------------------------------------------------------------------
   Shared rendering helpers
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

  if (block.numbered) {
    return (
      <ol key={key} className="space-y-3 my-4">
        {block.numbered.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ background: "var(--color-mid-blue)" }}
            >
              {i + 1}
            </span>
            <span className="text-[#3E4C59] leading-relaxed pt-0.5">{item}</span>
          </li>
        ))}
      </ol>
    );
  }

  if (block.sub) {
    return (
      <div key={key} className="mb-4">
        <h4 className="text-sm font-bold uppercase tracking-wide mb-2" style={{ color: "var(--color-mid-blue)" }}>
          {block.sub.h}
        </h4>
        {block.sub.lead && <p className="text-[#3E4C59] leading-relaxed mb-3">{block.sub.lead}</p>}
        {block.sub.items && (
          <div className="flex flex-wrap gap-2 mb-3">
            {block.sub.items.map((item, i) => (
              <Tag key={i}>{item}</Tag>
            ))}
          </div>
        )}
        {block.sub.trailing && <p className="text-[#3E4C59] leading-relaxed">{block.sub.trailing}</p>}
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

export default function RadiationTherapyProstateCancerIndia() {
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
              Radiation Therapy for Prostate Cancer in India
            </h1>
            <p className="text-[#DCE8F7] text-lg leading-relaxed max-w-2xl">
              Explore advanced radiation therapy for prostate cancer in India, including IMRT, IGRT, SBRT, VMAT, proton therapy, expert oncologists, and affordable treatment for international patients.
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
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="space-y-3">
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-6 border"
                    style={{ background: i % 2 === 0 ? "#ffffff" : "var(--color-bg)", borderColor: "#E1E8F0" }}
                  >
                    <h3 className="font-bold mb-2" style={{ color: "var(--color-navy)" }}>
                      {i + 1}. {f.q}
                    </h3>
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
                
                            <h2 className="text-2xl md:text-3xl font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" ,
                                color: "#053161" , }}>
                                More Related Links
                            </h2>
                        </div>
                
                        <div className="grid md:grid-cols-2 gap-5">
                
                            <Link href="/cost-of-treatment/prostate-cancer-treatment-cost-in-india"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300">
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                                → Prostate Cancer Treatment Cost in India
                            </span>
                            </Link>
                
                            <Link href="/doctors/best-prostate-cancer-doctors-in-india"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300">
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                                → Best Prostate Cancer Doctors in India
                            </span>
                            </Link>
                
                            <Link href="/blog/top-10-cancer-hospitals-in-india"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300">
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                                → Top 10 Cancer Hospitals in India
                            </span>
                            </Link>
                
                            <Link href="/blog/best-cancer-hospitals-in-india"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300">
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                                → Best Cancer Hospitals in India
                            </span>
                            </Link>
                
                            <Link href="/blog/prostate-cancer-survival-rate-in-india"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300">
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                                → Prostate Cancer Survival Rate in India
                            </span>
                            </Link>
                
                            <Link href="/blog/why-choose-india-for-prostate-cancer-treatment"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300">
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                                → Why Choose India for Prostate Cancer Treatment?
                            </span>
                            </Link>
                
                            <Link href="/blog/hormone-therapy-for-prostate-cancer-in-india"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300">
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                                → Hormone Therapy for Prostate Cancer
                            </span>
                            </Link>
                
                            <Link href="/blog/metastatic-prostate-cancer-treatment-india"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300">
                            <span className="font-medium text-[#053161] group-hover:text-white transition">
                                → Metastatic Prostate Cancer Treatment in India
                            </span>
                            </Link>
                
                            <Link href="/blog/medical-visa-cancer-treatment-india"
                                className="group flex items-center justify-between bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl px-5 py-4 hover:border-pink-500 hover:bg-gradient-to-r hover:from-[#053161] hover:to-[#6796cc] transition-all duration-300 md:col-span-2">
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

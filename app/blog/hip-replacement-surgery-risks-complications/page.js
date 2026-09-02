import Link from "next/link";

export const metadata = {
  title: "Hip Replacement Surgery Risks & Complications",
  description:
    "Learn about hip replacement surgery risks and complications, including infection, blood clots, dislocation, implant problems and revision surgery.",
  alternates: {
    canonical:
      "https://www.ekamcure.com/blog/hip-replacement-surgery-risks-complications",
  },
};

const relatedArticles = [
  {
    title: "Best Cancer Hospitals in India",
    href: "/blog/best-cancer-hospitals-in-india",
  },
  {
    title: "Hormone Therapy for Prostate Cancer in India",
    href: "/blog/hormone-therapy-for-prostate-cancer-in-india",
  },
  {
    title: "Medical Visa for Cancer Treatment in India",
    href: "/blog/medical-visa-cancer-treatment-india",
  },
  {
    title: "Metastatic Prostate Cancer Treatment in India",
    href: "/blog/metastatic-prostate-cancer-treatment-india",
  },
  {
    title: "Prostate Cancer Survival Rate in India",
    href: "/blog/prostate-cancer-survival-rate-in-india",
  },
  {
    title: "Radiation Therapy for Prostate Cancer in India",
    href: "/blog/radiation-therapy-for-prostate-cancer-in-india",
  },
  {
    title: "Top 10 Cancer Hospitals in India",
    href: "/blog/top-10-cancer-hospitals-in-india",
  },
  {
    title: "Total Budget Medical Trip to India",
    href: "/blog/total-budget-medical-trip-to-india",
  },
  {
    title: "Why Choose India for Prostate Cancer Treatment",
    href: "/blog/why-choose-india-for-prostate-cancer-treatment",
  },
];

const moreRelatedLinks = [
  {
    title: "Hip Replacement Surgery Cost in India for International Patients",
    href: "/cost-of-treatment/hip-replacement-surgery-cost-india-international-patients",
  },
  {
    title: "Hip Replacement Surgery for International Patients",
    href: "/blog/hip-replacement-surgery-for-international-patients",
  },
  {
    title: "Best Hospitals for Hip Replacement Surgery in India",
    href: "/blog/best-hospitals-for-hip-replacement-surgery-in-india",
  },
  {
    title: "Hip Replacement Surgery Success Rate",
    href: "/blog/hip-replacement-surgery-success-rate",
  },
  {
    title: "What Are the Negatives of a Hip Replacement?",
    href: "/blog/what-are-the-negatives-of-a-hip-replacement",
  },
  {
    title: "Top 10 Hospitals in India 2026 for International Patients",
    href: "/top-hospitals/top-10-hospitals-india-for-international-patients",
  },
  {
    title: "Medical Visa for Treatment in India: Cost, Requirements & Application Process",
    href: "/services/medical-visa-for-treatment-in-india",
  },
  {
    title: "Total Budget for a Medical Trip to India",
    href: "/blog/total-budget-medical-trip-to-india",
  },
];

const inThisPageLinks = [
  { name: "Introduction", href: "#introduction" },
  { name: "Overview of Risks", href: "#what-are-risks" },
  { name: "15 Risks Detailed", href: "#complications-explained" },
  { name: "Revision Surgery", href: "#revision-surgery" },
  { name: "Higher Risk Factors", href: "#risk-factors" },
  { name: "Reducing Risks", href: "#reducing-risks" },
  { name: "Warning Signs", href: "#warning-signs" },
  { name: "Are Complications Common?", href: "#are-complications-common" },
  { name: "Long-Term Risks", href: "#long-term-risks" },
  { name: "International Patients", href: "#international-patients" },
  { name: "Questions to Ask", href: "#questions-to-ask" },
  { name: "FAQs", href: "#faqs" },
];

export default function HipReplacementRisksPage() {
  return (
    <main className="bg-[#F6F9FD] text-[#053161]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#053161] via-[#1B4F9C] to-[#6796CC]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-2 mb-6 text-sm font-medium">
              Blog • Orthopedics & Joint Surgery
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Hip Replacement Surgery Risks and Complications
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Learn about hip replacement surgery risks and complications, including infection, blood clots, dislocation, implant problems and revision surgery.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10">
          
          {/* LEFT SIDE CONTENT */}
          <div className="space-y-8">
            
            {/* IN THIS PAGE BOX */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#053161] mb-6">
                In This Page
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 text-sm md:text-base">
                {inThisPageLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-2 text-[#1B4F9C] hover:text-[#053161] font-medium transition"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1B4F9C] shrink-0" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <article className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12">
                
                {/* INTRODUCTION */}
                <section id="introduction" className="mb-12">
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Hip replacement surgery is an established treatment for people with severe hip joint damage, persistent pain and reduced mobility. Although many appropriately selected patients experience significant improvement after surgery, it is still a major surgical procedure and carries potential risks.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    For patients considering hip replacement surgery in India, understanding possible complications is an important part of making an informed treatment decision. The level of risk varies between individuals and may depend on age, general health, underlying hip condition, surgical technique, implant selection and post-operative care.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 border-l-4 border-[#1B4F9C] pl-4 py-3 bg-[#F8FAFD] rounded-r-xl">
                    This guide explains the potential risks and complications of hip replacement surgery while keeping the focus specifically on medical risks and complications, rather than treatment cost, hospital rankings, implant comparisons or detailed recovery guidance.
                  </p>
                </section>

                {/* WHAT ARE THE RISKS */}
                <section id="what-are-risks" className="mb-12">
                  <SectionHeading>What Are the Risks of Hip Replacement Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Potential risks and complications can include:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    {[
                      'Infection',
                      'Blood clots',
                      'Dislocation',
                      'Fracture',
                      'Nerve or blood-vessel injury',
                      'Leg-length difference',
                      'Implant loosening or wear',
                      'Persistent pain',
                      'Joint stiffness',
                      'Implant failure',
                      'Need for revision surgery',
                      'Anaesthesia-related complications',
                    ].map((risk, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 p-3.5 bg-[#F8FAFD] border border-[#E1E8F0] rounded-xl text-sm md:text-base font-semibold text-[#053161]">
                        <span className="w-2 h-2 rounded-full bg-[#1B4F9C] shrink-0"></span>
                        {risk}
                      </div>
                    ))}
                  </div>

                  <p className="text-[#425466] text-sm md:text-base leading-7 italic bg-[#FFF7FA] p-4 rounded-xl border border-[#FCDDEC]">
                    Not every patient will experience these complications. Some are uncommon, while others may occur more frequently during the early recovery period.
                  </p>
                </section>

                {/* 15 RISKS DETAILED */}
                <section id="complications-explained" className="mb-12">
                  <div className="space-y-8 mt-6">
                    {/* 1. Infection */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>1. Infection</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        Infection is one of the important complications that can occur after hip replacement surgery.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        An infection may develop around the surgical wound or, in more serious cases, around the artificial joint.
                      </p>
                      <div className="bg-[#FFF7FA] border border-[#FCDDEC] rounded-xl p-4 mb-4">
                        <span className="font-bold text-pink-600 block mb-2 text-sm md:text-base">Possible warning signs can include:</span>
                        <BulletList
                          items={[
                            "Increasing pain",
                            "Redness around the wound",
                            "Swelling",
                            "Wound drainage",
                            "Fever",
                            "Chills",
                            "Feeling generally unwell",
                          ]}
                        />
                      </div>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        A suspected infection following surgery should be assessed promptly by a medical professional.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7">
                        Treatment depends on the type and severity of infection and may involve antibiotics, additional procedures or further surgery.
                      </p>
                    </div>

                    {/* 2. Blood Clots */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>2. Blood Clots</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        Blood clots can develop in the veins after major surgery, particularly when mobility is temporarily reduced.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        A clot in a deep vein is known as deep vein thrombosis (DVT).
                      </p>
                      <SubHeading>Possible symptoms may include:</SubHeading>
                      <BulletList
                        items={[
                          "Swelling in the leg",
                          "Leg pain or tenderness",
                          "Warmth",
                          "Skin discoloration",
                        ]}
                      />
                      <p className="text-[#425466] text-base md:text-lg leading-8 my-4">
                        A blood clot can sometimes travel to the lungs, causing a pulmonary embolism (PE), which can be a medical emergency.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        Hospitals may use measures such as early mobilization, compression devices and prescribed medication to reduce the risk where appropriate.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7">
                        Patients should follow their medical team's instructions regarding movement and medications.
                      </p>
                    </div>

                    {/* 3. Hip Dislocation */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>3. Hip Dislocation</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        Dislocation occurs when the artificial ball moves out of the position where it normally sits within the artificial socket.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        Dislocation can occur particularly during the early period following surgery, although it can also happen later.
                      </p>
                      <SubHeading>Possible symptoms include:</SubHeading>
                      <BulletList
                        items={[
                          "Sudden hip pain",
                          "Difficulty standing or walking",
                          "An abnormal position of the leg",
                          "A feeling that the joint has moved out of place",
                        ]}
                      />
                      <p className="text-[#425466] text-base md:text-lg leading-8 my-4">
                        A dislocated hip requires medical assessment.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        The risk of dislocation can be influenced by factors including surgical approach, implant design, patient anatomy, previous hip surgery and certain movements or activities.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7">
                        Patients should follow the movement precautions provided by their surgeon.
                      </p>
                    </div>

                    {/* 4. Fracture Around the Implant */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>4. Fracture Around the Implant</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        A fracture can occur around the artificial hip implant.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        This is sometimes called a periprosthetic fracture.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        It can occur during surgery or later following trauma such as a fall.
                      </p>
                      <SubHeading>The likelihood may be influenced by:</SubHeading>
                      <BulletList
                        items={[
                          "Bone quality",
                          "Age",
                          "Osteoporosis",
                          "Previous surgery",
                          "Falls or trauma",
                          "Implant-related factors",
                        ]}
                      />
                      <p className="text-[#425466] text-sm md:text-base leading-7 mt-4">
                        Treatment depends on the location and severity of the fracture and may require surgical management.
                      </p>
                    </div>

                    {/* 5. Nerve Injury */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>5. Nerve Injury</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-3">
                        Nerves around the hip can rarely be affected during surgery.
                      </p>
                      <SubHeading>A nerve injury may cause:</SubHeading>
                      <BulletList
                        items={[
                          "Numbness",
                          "Tingling",
                          "Weakness",
                          "Changes in sensation",
                        ]}
                      />
                      <p className="text-[#425466] text-base md:text-lg leading-8 my-3">
                        The severity and recovery of nerve-related symptoms vary.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7">
                        Patients who develop new or worsening neurological symptoms after surgery should contact their medical team.
                      </p>
                    </div>

                    {/* 6. Blood-Vessel Injury */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>6. Blood-Vessel Injury</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        Blood vessels are located around the hip and can rarely be injured during surgery.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        A significant vascular injury can require urgent treatment.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8">
                        The surgical team takes precautions to minimize this risk, but it cannot be completely eliminated.
                      </p>
                    </div>

                    {/* 7. Leg-Length Difference */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>7. Leg-Length Difference</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        Some patients may notice that one leg feels different in length after hip replacement.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        A small difference can sometimes occur despite careful surgical planning.
                      </p>
                      <SubHeading>Patients may experience:</SubHeading>
                      <BulletList
                        items={[
                          "A feeling that one leg is longer or shorter",
                          "Changes in walking",
                          "Temporary discomfort while adapting",
                        ]}
                      />
                      <p className="text-[#425466] text-base md:text-lg leading-8 my-3">
                        In some cases, the perceived difference may be related to muscle tension or changes in hip mechanics rather than an actual significant difference in bone length.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7">
                        Persistent symptoms should be evaluated by the treating specialist.
                      </p>
                    </div>

                    {/* 8. Implant Loosening */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>8. Implant Loosening</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-3">
                        Over time, an artificial hip implant can become loose.
                      </p>
                      <SubHeading>Loosening may cause:</SubHeading>
                      <BulletList
                        items={[
                          "Increasing pain",
                          "Reduced function",
                          "Difficulty walking",
                          "A change in how the joint feels",
                        ]}
                      />
                      <p className="text-[#425466] text-base md:text-lg leading-8 my-3">
                        Implant loosening can result from several factors, including normal wear, bone response, implant-related factors or other problems.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7">
                        If an implant becomes significantly loose, revision surgery may be considered.
                      </p>
                    </div>

                    {/* 9. Implant Wear */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>9. Implant Wear</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        Hip implants are designed for long-term use, but their components can undergo wear over time.
                      </p>
                      <SubHeading>Wear may be influenced by:</SubHeading>
                      <BulletList
                        items={[
                          "Implant materials",
                          "Implant design",
                          "Patient activity",
                          "Body weight",
                          "Implant positioning",
                          "Length of time the implant has been in place",
                        ]}
                      />
                      <p className="text-[#425466] text-base md:text-lg leading-8 my-3">
                        Significant wear can sometimes contribute to loosening or other implant-related problems.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7 italic">
                        For detailed information about implant choices, see Hip Replacement Implant Types.
                      </p>
                    </div>

                    {/* 10. Persistent Hip Pain */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>10. Persistent Hip Pain</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                        One of the main goals of hip replacement is to reduce pain caused by the damaged hip joint.
                      </p>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        However, some patients may continue to experience pain after surgery.
                      </p>
                      <SubHeading>Persistent pain can have several possible causes, including:</SubHeading>
                      <BulletList
                        items={[
                          "Soft-tissue problems",
                          "Implant-related problems",
                          "Infection",
                          "Loosening",
                          "Nerve-related symptoms",
                          "Problems originating outside the hip",
                        ]}
                      />
                      <p className="text-[#425466] text-sm md:text-base leading-7 mt-3">
                        Persistent or worsening pain should be assessed rather than assumed to be a normal part of recovery.
                      </p>
                    </div>

                    {/* 11. Stiffness and Reduced Movement */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>11. Stiffness and Reduced Movement</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        Hip replacement is intended to improve function, but some patients may experience stiffness or reduced movement after surgery.
                      </p>
                      <SubHeading>Possible contributing factors include:</SubHeading>
                      <BulletList
                        items={[
                          "Pre-existing stiffness",
                          "Muscle weakness",
                          "Scar tissue",
                          "Rehabilitation difficulties",
                          "Other medical conditions",
                        ]}
                      />
                      <p className="text-[#425466] text-sm md:text-base leading-7 mt-3">
                        The degree of improvement varies between individuals.
                      </p>
                    </div>

                    {/* 12. Anaesthesia-Related Risks */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>12. Anaesthesia-Related Risks</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        Hip replacement is performed using anaesthesia, and anaesthesia can carry its own risks.
                      </p>
                      <SubHeading>The level of risk depends on factors such as:</SubHeading>
                      <BulletList
                        items={[
                          "Age",
                          "Heart and lung health",
                          "Existing medical conditions",
                          "Medications",
                          "Type of anaesthesia",
                        ]}
                      />
                      <p className="text-[#425466] text-base md:text-lg leading-8 my-3">
                        An anaesthesiologist evaluates the patient's health before surgery and determines the most appropriate anaesthesia plan.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7">
                        Prior to the surgery, patients should correctly report their medications and medical history.
                      </p>
                    </div>

                    {/* 13. Wound-Healing Problems */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>13. Wound-Healing Problems</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        After surgery, some people may have delayed wound healing.
                      </p>
                      <SubHeading>The risk may be influenced by factors such as:</SubHeading>
                      <BulletList
                        items={[
                          "Diabetes",
                          "Smoking",
                          "Poor nutrition",
                          "Certain medications",
                          "Reduced blood supply",
                          "Other medical conditions",
                        ]}
                      />
                      <p className="text-[#425466] text-sm md:text-base leading-7 mt-3">
                        Patients should follow their medical team's wound-care instructions and report unusual drainage, increasing redness or other concerning changes.
                      </p>
                    </div>

                    {/* 14. Blood Loss and Need for Blood Transfusion */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>14. Blood Loss and Need for Blood Transfusion</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        Blood loss can occur during major surgery.
                      </p>
                      <SubHeading>The amount varies depending on:</SubHeading>
                      <BulletList
                        items={[
                          "Surgical technique",
                          "Patient characteristics",
                          "Complexity of the procedure",
                          "Whether the surgery is primary or revision surgery",
                        ]}
                      />
                      <p className="text-[#425466] text-base md:text-lg leading-8 my-3">
                        Additional care or a blood transfusion can be necessary in some situations.
                      </p>
                      <p className="text-[#425466] text-sm md:text-base leading-7">
                        The treating team can discuss this risk based on the patient's individual circumstances.
                      </p>
                    </div>

                    {/* 15. Implant Failure */}
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>15. Implant Failure</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                        Although modern hip implants are designed for long-term use, mechanical or biological problems can occur.
                      </p>
                      <SubHeading>Implant failure may be associated with:</SubHeading>
                      <BulletList
                        items={[
                          "Loosening",
                          "Wear",
                          "Fracture",
                          "Dislocation",
                          "Infection",
                          "Other implant-related problems",
                        ]}
                      />
                      <p className="text-[#425466] text-sm md:text-base leading-7 mt-3">
                        If the implant no longer functions appropriately, the patient may require further evaluation and potentially revision surgery.
                      </p>
                    </div>
                  </div>
                </section>

                {/* REVISION SURGERY */}
                <section id="revision-surgery" className="mb-12">
                  <SectionHeading>What Is Revision Hip Replacement Surgery?</SectionHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Revision hip replacement is surgery performed to address a problem with a previous hip replacement.
                  </p>
                  <SubHeading>Revision may become necessary because of:</SubHeading>
                  <BulletList
                    items={[
                      "Infection",
                      "Implant loosening",
                      "Significant wear",
                      "Repeated dislocation",
                      "Fracture around the implant",
                      "Implant failure",
                      "Other complications",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 my-4">
                    Revision surgery can be more complex than the original hip replacement because the surgeon may need to manage existing implants, damaged bone or scar tissue.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 border-l-4 border-[#053161] pl-4 py-2 bg-[#F8FAFD]">
                    Not every patient with a hip replacement will require revision surgery.
                  </p>
                </section>

                {/* HIGHER RISK FACTORS */}
                <section id="risk-factors" className="mb-12">
                  <SectionHeading>Who May Have a Higher Risk of Complications?</SectionHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Risk varies considerably between individuals.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Factors that may affect surgical risk include:
                  </p>
                  <div className="space-y-4 my-6">
                    <StatCheckCard title="Age" desc="Older patients may have additional medical conditions that can influence surgical risk and recovery." />
                    <StatCheckCard title="Overall Health" desc="Heart disease, lung disease, diabetes, kidney problems and other medical conditions may affect treatment planning." />
                    <StatCheckCard title="Obesity" desc="Higher body weight can affect surgical and post-operative risks in some patients." />
                    <StatCheckCard title="Smoking" desc="Smoking may have an impact on the healing of wounds and the overall results of surgery." />
                    <StatCheckCard title="Previous Hip Surgery" desc="Patients undergoing revision surgery or who have previously had surgery around the hip may have different risk profiles from those undergoing a first hip replacement." />
                    <StatCheckCard title="Bone Quality" desc="Reduced bone density can affect implant fixation and fracture risk." />
                    <StatCheckCard title="Medical History" desc="Previous blood clots, infections, allergies and medication use should be discussed with the treating medical team." />
                  </div>
                </section>

                {/* HOW RISK CAN BE REDUCED */}
                <section id="reducing-risks" className="mb-12">
                  <SectionHeading>How Can the Risk of Hip Replacement Complications Be Reduced?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    No treatment can eliminate all surgical risks, but appropriate preparation and follow-up may help reduce avoidable problems.
                  </p>

                  <div className="space-y-6 my-6">
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>Before Surgery</SubHeading>
                      <span className="text-[#053161] font-semibold block mb-2">Patients should:</span>
                      <BulletList
                        items={[
                          "Provide a complete medical history",
                          "Inform the doctor about all medications",
                          "Discuss allergies",
                          "Complete recommended investigations",
                          "Follow instructions regarding medications",
                          "Stop smoking if advised",
                          "Discuss weight management where appropriate",
                          "Follow pre-operative instructions",
                        ]}
                      />
                    </div>

                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>During Treatment</SubHeading>
                      <p className="text-[#425466] text-base md:text-lg leading-8">
                        The medical team uses appropriate surgical, infection-control and monitoring procedures according to the patient's circumstances.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <SubHeading>After Surgery</SubHeading>
                      <span className="text-[#053161] font-semibold block mb-2">Patients should:</span>
                      <BulletList
                        items={[
                          "Follow medication instructions",
                          "Follow wound-care instructions",
                          "Attend scheduled follow-up appointments",
                          "Participate in recommended rehabilitation",
                          "Follow movement precautions",
                          "Use walking aids as instructed",
                          "Avoid activities that the surgeon has restricted",
                          "Report unusual symptoms promptly",
                        ]}
                      />
                    </div>
                  </div>
                </section>

                {/* WARNING SIGNS */}
                <section id="warning-signs" className="mb-12">
                  <SectionHeading>Warning Signs After Hip Replacement</SectionHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients should contact their medical team if they develop concerning symptoms such as:
                  </p>
                  <div className="bg-[#FFF7FA] border border-[#FCDDEC] rounded-2xl p-6 mb-6">
                    <BulletList
                      items={[
                        "Increasing or severe pain",
                        "Fever or chills",
                        "Increasing redness or swelling",
                        "Wound drainage",
                        "Sudden difficulty walking",
                        "New weakness or numbness",
                        "Significant swelling in the leg",
                        "Sudden shortness of breath",
                        "Chest pain",
                        "A suspected dislocation",
                      ]}
                    />
                  </div>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                    Some symptoms require urgent medical evaluation.
                  </p>
                  <p className="text-[#425466] text-sm md:text-base leading-7">
                    Patients should follow the emergency instructions provided by their treating hospital.
                  </p>
                </section>

                {/* ARE COMPLICATIONS COMMON */}
                <section id="are-complications-common" className="mb-12">
                  <SectionHeading>Are Hip Replacement Complications Common?</SectionHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The likelihood of a complication depends on the individual patient and the type of procedure.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Many patients undergo hip replacement without experiencing a major complication, but no surgical procedure is completely risk-free.
                  </p>
                  <SubHeading>When evaluating risk, patients should consider:</SubHeading>
                  <BulletList
                    items={[
                      "Their personal health",
                      "Type of hip condition",
                      "Primary or revision surgery",
                      "Surgical technique",
                      "Implant selection",
                      "Surgeon and hospital experience",
                      "Rehabilitation plan",
                    ]}
                  />
                  <p className="text-[#425466] text-[#053161] font-semibold text-base md:text-lg leading-8 mt-4">
                    A surgeon can provide a more meaningful assessment after reviewing the patient's medical history and imaging.
                  </p>
                </section>

                {/* LONG TERM RISKS */}
                <section id="long-term-risks" className="mb-12">
                  <SectionHeading>Does Hip Replacement Surgery Have Long-Term Risks?</SectionHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Yes. Some complications can occur months or years after surgery rather than immediately.
                  </p>
                  <SubHeading>Long-term concerns may include:</SubHeading>
                  <BulletList
                    items={[
                      "Implant wear",
                      "Implant loosening",
                      "Recurrent dislocation",
                      "Periprosthetic fracture",
                      "Infection",
                      "Persistent pain",
                      "Need for revision surgery",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 my-4">
                    This is one reason why patients may require ongoing follow-up after hip replacement.
                  </p>
                  <p className="text-[#425466] text-sm md:text-base leading-7 italic">
                    For information about long-term outcomes, see Hip Replacement Surgery Success Rate.
                  </p>
                </section>

                {/* INTERNATIONAL PATIENTS */}
                <section id="international-patients" className="mb-12">
                  <SectionHeading>Hip Replacement Risks for International Patients</SectionHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    International patients considering hip replacement in India should understand that travelling abroad for surgery introduces additional logistical considerations.
                  </p>
                  <SubHeading>Before travelling, patients should plan:</SubHeading>
                  <BulletList
                    items={[
                      "Medical evaluation",
                      "Hospital selection",
                      "Specialist consultation",
                      "Medical visa",
                      "Accommodation",
                      "Transportation",
                      "Rehabilitation",
                      "Follow-up",
                      "Return travel",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 my-4">
                    Patients should also discuss how follow-up will be managed if they return to their home country after surgery.
                  </p>
                  <p className="text-[#425466] text-sm md:text-base leading-7 italic">
                    For more information, see Hip Replacement Surgery for International Patients.
                  </p>
                </section>

                {/* QUESTIONS TO ASK */}
                <section id="questions-to-ask" className="mb-12">
                  <SectionHeading>Questions to Ask Your Hip Replacement Surgeon</SectionHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Before deciding on surgery, international and domestic patients can ask:
                  </p>
                  <BulletList
                    items={[
                      "What are my personal risks from hip replacement?",
                      "Why do you recommend surgery in my case?",
                      "What complications are most relevant to my medical history?",
                      "What can I do before surgery to reduce avoidable risks?",
                      "What implant is being considered and why?",
                      "If issues arise, how will they be handled?",
                      "Which symptoms should prompt me to call the hospital?",
                      "How long will I need follow-up?",
                      "What happens if the implant needs revision?",
                      "How should follow-up be managed after I return home?",
                    ]}
                  />
                  <p className="text-[#425466] text-sm md:text-base leading-7 mt-4 italic">
                    These questions can help patients understand their individual risk rather than relying on general statistics.
                  </p>
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="mb-12">
                  <SectionHeading>Frequently Asked Questions</SectionHeading>

                  <div className="space-y-4">
                    <FAQ
                      question="Is hip replacement surgery dangerous?"
                      answer="Hip replacement is a major surgical procedure and carries potential risks, but it is an established treatment performed routinely for appropriate patients. Individual risk varies according to health, age, diagnosis and other factors."
                    />
                    <FAQ
                      question="What is the most serious complication of hip replacement?"
                      answer="There is no single complication that is considered the most serious for every patient. Serious complications can include infection, blood clots, significant fracture, dislocation, vascular injury and other medical or surgical problems."
                    />
                    <FAQ
                      question="Can a hip replacement become infected?"
                      answer="Yes. Infection can occur after hip replacement and may require antibiotics, additional procedures or surgery depending on its severity."
                    />
                    <FAQ
                      question="Can a hip replacement dislocate?"
                      answer="Yes. An artificial hip can dislocate, particularly during certain periods after surgery. Patients should follow their surgeon's movement and activity recommendations."
                    />
                    <FAQ
                      question="Can a hip replacement fail?"
                      answer="Yes, although many implants function successfully for many years. Failure can occur because of infection, loosening, wear, fracture, dislocation or other problems."
                    />
                    <FAQ
                      question="Will I need another hip replacement?"
                      answer="Not necessarily. Some patients may eventually require revision surgery, but the likelihood varies depending on the patient, implant, activity, health and other factors."
                    />
                    <FAQ
                      question="Does hip replacement cause leg-length difference?"
                      answer="A difference in leg length can occur or be perceived after surgery. The clinical significance varies, and persistent symptoms should be assessed by the treating surgeon."
                    />
                    <FAQ
                      question="How can I reduce my risk of complications?"
                      answer="Following pre-operative instructions, providing an accurate medical history, taking prescribed medications correctly, following rehabilitation guidance and attending follow-up appointments can help support safe recovery."
                    />
                    <FAQ
                      question="Are the risks different for international patients?"
                      answer="The surgical risks are not inherently different simply because a patient is from another country. However, international patients have additional considerations such as travel, visa requirements, accommodation and arranging follow-up after returning home."
                    />
                  </div>
                </section>

                {/* FINAL TAKEAWAY & CTA */}
                <section id="final-takeaway">
                  <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                      Final Takeaway
                    </h2>
                
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Hip replacement surgery can significantly improve pain and mobility for appropriately selected patients, but it is important to understand the potential risks before treatment.
                    </p>
                    
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Possible complications include infection, blood clots, dislocation, fracture, nerve or blood-vessel injury, persistent pain, implant loosening, implant wear and the possibility of revision surgery.
                    </p>

                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      The level of risk is different for every patient. A qualified orthopaedic specialist should review the patient's medical history, imaging and overall health before discussing the expected benefits and individual risks of surgery.
                    </p>

                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                      For international patients considering treatment in India, medical decisions should be made based on individual clinical assessment rather than advertised success rates or cost alone.
                    </p>

                    <div className="border-t border-[#DCE5F0] pt-6 mt-6">
                      <h3 className="text-xl md:text-2xl font-bold text-[#053161] mb-3">
                        Considering Hip Replacement Surgery in India?
                      </h3>
                      <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                        EkamCure can assist international patients with treatment coordination, hospital consultations and other aspects of planning medical care in India.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                      >
                        Consult with EkamCure Team →
                      </Link>
                    </div>
                      
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed border-t border-[#DCE5F0] pt-4 mt-6">
                      This article is for general educational purposes and does not replace medical advice. Individual risks and outcomes vary. Patients should discuss their specific circumstances with a qualified orthopaedic specialist.
                    </p>
                  </div>
                </section>

              </div>
            </article>

            {/* MORE RELATED LINKS (BOTTOM LEFT) */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#053161] mb-6">
                More Related Links
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {moreRelatedLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="flex items-center justify-between gap-4 p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0] text-[#053161] font-semibold hover:border-[#1B4F9C] hover:shadow-md transition group"
                  >
                    <span className="text-sm md:text-base leading-snug group-hover:text-[#1B4F9C] transition">
                      {item.title}
                    </span>
                    <span className="text-[#1B4F9C] shrink-0 font-bold group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            
            {/* GET YOUR ASSESSMENT CTA */}
            <div className="rounded-2xl bg-[#053161] p-6 text-white shadow-md">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 text-xl">
                ✈️
              </div>
              <h3 className="text-xl font-bold mb-2">
                Get Your Assessment
              </h3>
              <p className="text-white/80 text-xs md:text-sm leading-relaxed mb-6">
                Have your medical history evaluated by leading joint-replacement specialists in India.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#053161] rounded-xl py-3 font-bold text-sm hover:bg-[#F8FAFD] transition"
              >
                Get Started →
              </Link>
            </div>

            {/* RELATED ARTICLES */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-5">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((article, idx) => (
                  <div key={idx} className="border-b border-[#E1E8F0] last:border-0 pb-3 last:pb-0">
                    <Link
                      href={article.href}
                      className="flex items-start gap-2 text-sm text-[#053161] hover:text-[#1B4F9C] font-medium leading-snug transition"
                    >
                      <span className="text-[#1B4F9C] font-bold">•</span>
                      <span>{article.title}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}

/* =========================================================
   REUSABLE HELPER COMPONENTS
========================================================= */

function SectionHeading({ children }) {
  return (
    <h2 className="relative text-2xl md:text-3xl font-bold text-[#053161] mt-10 mb-5 pl-4 border-l-4 border-pink-500">
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-lg md:text-xl font-bold text-[#053161] mt-4 mb-2">
      {children}
    </h3>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2 my-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-[#425466] text-base md:text-lg leading-7"
        >
          <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-[#1B4F9C]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StatCheckCard({ title, desc }) {
  return (
    <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">{title}</h4>
      <p className="text-[#425466] text-sm md:text-base leading-6">{desc}</p>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="rounded-xl border border-[#E1E8F0] bg-[#F8FAFD] overflow-hidden">
      <div className="px-5 py-5 md:px-6">
        <h3 className="text-lg md:text-xl font-bold text-[#053161] mb-3">
          {question}
        </h3>
        <p className="text-[#425466] leading-7">
          {answer}
        </p>
      </div>
    </div>
  );
}

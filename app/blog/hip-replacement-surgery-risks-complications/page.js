import Link from "next/link";

export const metadata = {
  title: "Hip Replacement Surgery Risks & Complications",
  description:
    "Learn about hip replacement surgery risks and complications, including infection, blood clots, dislocation, implant problems, and revision surgery.",
  alternates: {
    canonical: "https://www.ekamcure.com/blog/hip-replacement-surgery-risks-complications",
  },
};

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
              Learn about hip replacement surgery risks and complications, including infection, blood clots, dislocation, implant problems, and revision surgery.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10">
          
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

              {/* DETAILED COMPLICATIONS */}
              <section id="complications-explained" className="mb-12">
                <SectionHeading>15 Potential Risks & Complications Explained</SectionHeading>

                <div className="space-y-8 mt-6">
                  {/* 1. Infection */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>1. Infection</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Infection is one of the important complications that can occur after hip replacement surgery. An infection may develop around the surgical wound or, in more serious cases, around the artificial joint.
                    </p>
                    <div className="bg-[#FFF7FA] border border-[#FCDDEC] rounded-xl p-4 mb-4">
                      <span className="font-bold text-pink-600 block mb-2 text-sm md:text-base">Possible warning signs can include:</span>
                      <BulletList
                        items={[
                          "Increasing pain",
                          "Redness around wound",
                          "Swelling or wound drainage",
                          "Fever or chills",
                          "Feeling generally unwell",
                        ]}
                      />
                    </div>
                    <p className="text-[#425466] text-sm md:text-base leading-7">
                      A suspected infection following surgery should be assessed promptly by a medical professional. Treatment depends on the type and severity of infection and may involve antibiotics, additional procedures or further surgery.
                    </p>
                  </div>

                  {/* 2. Blood Clots */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>2. Blood Clots</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Blood clots can develop in the veins after major surgery, particularly when mobility is temporarily reduced. A clot in a deep vein is known as deep vein thrombosis (DVT).
                    </p>
                    <SubHeading>Possible symptoms may include:</SubHeading>
                    <BulletList
                      items={[
                        "Swelling in the leg",
                        "Leg pain or tenderness",
                        "Warmth or skin discoloration",
                      ]}
                    />
                    <p className="text-[#425466] text-base md:text-lg leading-8 my-4">
                      A blood clot can sometimes travel to the lungs, causing a pulmonary embolism (PE), which can be a medical emergency.
                    </p>
                    <p className="text-[#425466] text-sm md:text-base leading-7">
                      Hospitals may use measures such as early mobilization, compression devices and prescribed medication to reduce the risk where appropriate. Patients should follow their medical team's instructions regarding movement and medications.
                    </p>
                  </div>

                  {/* 3. Hip Dislocation */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>3. Hip Dislocation</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Dislocation occurs when the artificial ball moves out of the position where it normally sits within the artificial socket. Dislocation can occur particularly during the early period following surgery, although it can also happen later.
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
                    <p className="text-[#425466] text-sm md:text-base leading-7 mt-4">
                      A dislocated hip requires medical assessment. The risk of dislocation can be influenced by factors including surgical approach, implant design, patient anatomy, previous hip surgery and certain movements or activities.
                    </p>
                  </div>

                  {/* 4. Fracture Around the Implant */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>4. Fracture Around the Implant</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      A fracture can occur around the artificial hip implant (periprosthetic fracture). It can occur during surgery or later following trauma such as a fall.
                    </p>
                    <p className="text-[#425466] text-sm md:text-base leading-7 font-semibold text-[#053161] mb-2">The likelihood may be influenced by:</p>
                    <BulletList
                      items={[
                        "Bone quality & Osteoporosis",
                        "Age and fall risks",
                        "Previous surgery & implant factors",
                      ]}
                    />
                  </div>

                  {/* 5. Nerve Injury */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>5. Nerve Injury</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-3">
                      Nerves around the hip can rarely be affected during surgery. A nerve injury may cause:
                    </p>
                    <BulletList
                      items={[
                        "Numbness or tingling",
                        "Weakness in the leg",
                        "Changes in sensation",
                      ]}
                    />
                    <p className="text-[#425466] text-sm md:text-base leading-7 mt-3">
                      Patients who develop new or worsening neurological symptoms after surgery should contact their medical team.
                    </p>
                  </div>

                  {/* 6. Blood-Vessel Injury */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>6. Blood-Vessel Injury</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8">
                      Blood vessels are located around the hip and can rarely be injured during surgery. A significant vascular injury can require urgent treatment. The surgical team takes precautions to minimize this risk, but it cannot be completely eliminated.
                    </p>
                  </div>

                  {/* 7. Leg-Length Difference */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>7. Leg-Length Difference</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-3">
                      Some patients may notice that one leg feels different in length after hip replacement. A small difference can sometimes occur despite careful surgical planning.
                    </p>
                    <BulletList
                      items={[
                        "A feeling that one leg is longer or shorter",
                        "Changes in walking pattern",
                        "Temporary discomfort while adapting",
                      ]}
                    />
                  </div>

                  {/* 8. Implant Loosening */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>8. Implant Loosening</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-3">
                      Over time, an artificial hip implant can become loose. Loosening may cause increasing pain, reduced function, difficulty walking, and a change in how the joint feels. If an implant becomes significantly loose, revision surgery may be considered.
                    </p>
                  </div>

                  {/* 9. Implant Wear */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>9. Implant Wear</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8">
                      Hip implants are designed for long-term use, but their components can undergo wear over time depending on implant materials, patient activity, body weight, and implant positioning.
                    </p>
                  </div>

                  {/* 10. Persistent Hip Pain */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>10. Persistent Hip Pain</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8">
                      While pain relief is a main goal, some patients may continue to experience pain due to soft-tissue problems, implant issues, infection, nerve irritation, or spine-related causes.
                    </p>
                  </div>

                  {/* 11. Stiffness and Reduced Movement */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>11. Stiffness and Reduced Movement</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8">
                      Some patients may experience stiffness post-surgery due to pre-existing conditions, scar tissue formation, or muscle weakness.
                    </p>
                  </div>

                  {/* 12. Anaesthesia-Related Risks */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>12. Anaesthesia-Related Risks</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8">
                      Anaesthesia risks depend on general health, age, heart/lung health, and current medications. An anaesthesiologist evaluates these risks prior to surgery.
                    </p>
                  </div>

                  {/* 13. Wound-Healing Problems */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>13. Wound-Healing Problems</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8">
                      Delayed wound healing can be influenced by diabetes, smoking, poor nutrition, or certain medications.
                    </p>
                  </div>

                  {/* 14. Blood Loss and Need for Transfusion */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>14. Blood Loss and Blood Transfusion</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8">
                      Blood loss occurs during major joint surgery. The surgical team monitors blood levels and provides transfusions or medical care if necessary.
                    </p>
                  </div>

                  {/* 15. Implant Failure */}
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <SubHeading>15. Implant Failure</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8">
                      If an implant fails due to loosening, wear, structural fracture, or infection, revision surgery may be necessary to restore function.
                    </p>
                  </div>
                </div>
              </section>

              {/* REVISION SURGERY */}
              <section id="revision-surgery" className="mb-12">
                <SectionHeading>What Is Revision Hip Replacement Surgery?</SectionHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  Revision hip replacement is surgery performed to address a problem with a previous hip replacement. Revision may become necessary because of infection, implant loosening, significant wear, repeated dislocation, or structural failure.
                </p>
                <p className="text-[#425466] text-base md:text-lg leading-8 border-l-4 border-[#053161] pl-4 py-2 bg-[#F8FAFD]">
                  Revision surgery can be more complex than primary hip replacement. Not every patient with a hip replacement will require revision surgery.
                </p>
              </section>

              {/* HIGHER RISK FACTORS */}
              <section id="risk-factors" className="mb-12">
                <SectionHeading>Who May Have a Higher Risk of Complications?</SectionHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  Risk factors that may affect surgical outcomes include:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 my-5">
                  <ProblemCard text="Older Age & Medical Conditions" />
                  <ProblemCard text="Heart, Lung, or Kidney Issues" />
                  <ProblemCard text="Diabetes & High Blood Pressure" />
                  <ProblemCard text="Higher Body Weight / Obesity" />
                  <ProblemCard text="Smoking & Poor Circulation" />
                  <ProblemCard text="Osteoporosis / Reduced Bone Quality" />
                  <ProblemCard text="Previous Hip Surgeries" />
                  <ProblemCard text="History of DVT or Infections" />
                </div>
              </section>

              {/* HOW RISK CAN BE REDUCED */}
              <section id="reducing-risks" className="mb-12">
                <SectionHeading>How Can the Risk of Complications Be Reduced?</SectionHeading>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h3 className="text-xl font-bold text-[#053161] mb-4">Before Surgery</h3>
                    <ul className="space-y-2 text-sm text-[#425466]">
                      <li>• Provide a complete medical history</li>
                      <li>• Discuss current medications & allergies</li>
                      <li>• Stop smoking if advised by doctors</li>
                      <li>• Manage existing conditions (diabetes, BP)</li>
                      <li>• Follow pre-operative preparations</li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h3 className="text-xl font-bold text-[#053161] mb-4">After Surgery</h3>
                    <ul className="space-y-2 text-sm text-[#425466]">
                      <li>• Follow medication & DVT protocols</li>
                      <li>• Keep incision clean & follow wound care</li>
                      <li>• Attend physical therapy sessions</li>
                      <li>• Follow hip precautions (avoid dislocation positions)</li>
                      <li>• Report unusual symptoms immediately</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* WARNING SIGNS */}
              <section id="warning-signs" className="mb-12">
                <SectionHeading>Warning Signs After Hip Replacement</SectionHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-pink-600 bg-[#FFF7FA] p-4 rounded-xl border-l-4 border-pink-500">
                  Contact your medical team immediately if you experience:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 my-5">
                  <ProblemCard text="Severe or Increasing Pain" />
                  <ProblemCard text="Fever, Chills, or Night Sweats" />
                  <ProblemCard text="Redness, Swelling, or Wound Drainage" />
                  <ProblemCard text="Sudden Inability to Bear Weight" />
                  <ProblemCard text="Leg Swelling, Warmth, or Tenderness" />
                  <ProblemCard text="Shortness of Breath / Chest Pain" />
                </div>
              </section>

              {/* QUESTIONS TO ASK */}
              <section id="questions-to-ask" className="mb-12">
                <SectionHeading>Questions to Ask Your Hip Replacement Surgeon</SectionHeading>
                <div className="space-y-4 my-6">
                  <StatCheckCard title="Personalized Risk Profile" desc="What are my personal risks based on my age and medical history?" />
                  <StatCheckCard title="Implant Choice" desc="Which type of implant is recommended for my bone quality and activity level?" />
                  <StatCheckCard title="Complication Handling" desc="If complications or infection arise, how does the team manage them?" />
                  <StatCheckCard title="Follow-up Plan" desc="How will follow-up consultations be handled if I am traveling back home?" />
                </div>
              </section>

              {/* FAQ SECTION */}
              <section id="faqs" className="mb-12">
                <SectionHeading>Frequently Asked Questions</SectionHeading>

                <div className="space-y-4">
                  <FAQ
                    question="Is hip replacement surgery dangerous?"
                    answer="Hip replacement is a major surgical procedure and carries potential risks, but it is an established treatment performed routinely for appropriate patients."
                  />
                  <FAQ
                    question="What is the most serious complication of hip replacement?"
                    answer="Complications like deep infection, blood clots (DVT/PE), or major vascular injury are serious and require immediate medical intervention."
                  />
                  <FAQ
                    question="Can a hip replacement become infected?"
                    answer="Yes. Infection can occur after hip replacement and may require antibiotics, additional procedures or revision surgery depending on its severity."
                  />
                  <FAQ
                    question="Can a hip replacement dislocate?"
                    answer="Yes. An artificial hip can dislocate, particularly during early recovery. Patients should strictly follow movement restrictions."
                  />
                  <FAQ
                    question="Are the risks different for international patients?"
                    answer="Surgical risks remain the same, but international patients must plan for travel, accommodation, flight timing post-surgery, and long-distance follow-up care."
                  />
                </div>
              </section>

              {/* FINAL CTA BOX */}
              <section>
                <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                    Get an Individualized Surgical Risk Assessment
                  </h2>
              
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Understanding surgical risks is essential for making safe and informed medical decisions.
                  </p>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    For international patients considering hip replacement in India, EkamCure helps coordinate medical evaluations, hospital selections, and expert orthopaedic consultations.
                  </p>
              
                  <div className="mb-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                    >
                      Consult with EkamCure Team →
                    </Link>
                  </div>
                    
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed border-t border-[#DCE5F0] pt-4 mt-6">
                    <strong>Disclaimer:</strong> This page is for general educational purposes and does not replace medical advice. Individual outcomes vary. Treatment suitability and risks should be discussed with a qualified orthopaedic specialist.
                  </p>
                </div>
              </section>

            </div>
          </article>

          {/* SIDEBAR NAVIGATION */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* CTA WIDGET */}
            <div className="rounded-2xl bg-gradient-to-br from-[#053161] to-[#1B4F9C] p-6 text-white shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 text-2xl">
                🩺
              </div>
              <h3 className="text-xl font-bold mb-3">
                Get Your Assessment
              </h3>
              <p className="text-white/85 text-sm leading-6 mb-5">
                Have your hip condition evaluated by top joint-replacement specialists in India.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#053161] rounded-xl px-5 py-3 font-bold hover:bg-[#F8FAFD] transition"
              >
                Get Started →
              </Link>
            </div>

            {/* QUICK LINKS */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-5">
                On This Page
              </h3>
              <div className="space-y-3 text-sm">
                <a href="#introduction" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Introduction
                </a>
                <a href="#what-are-risks" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Overview of Risks
                </a>
                <a href="#complications-explained" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  15 Risks Explained
                </a>
                <a href="#revision-surgery" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Revision Surgery
                </a>
                <a href="#risk-factors" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  High Risk Factors
                </a>
                <a href="#reducing-risks" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Reducing Risks
                </a>
                <a href="#warning-signs" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Warning Signs
                </a>
                <a href="#faqs" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  FAQs
                </a>
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
    <h3 className="text-xl md:text-2xl font-bold text-[#053161] mt-6 mb-3">
      {children}
    </h3>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5 my-4">
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

function ProblemCard({ text }) {
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFF7FA] border border-[#FCDDEC]">
      <span className="text-pink-600 font-bold">⚠️</span>
      <span className="text-[#053161] text-sm md:text-base font-semibold">{text}</span>
    </div>
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

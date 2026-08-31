import Link from "next/link";

export const metadata = {
  title: "Hip Replacement Surgery for International Patients",
  description:
    "Learn about hip replacement surgery in India for international patients, including advanced treatment options, expert care, hospital facilities, and recovery.",
};

function HipReplacementInternationalPage() {
  // 4 Specific Links for bottom "More Related Links" section
  const moreRelatedLinks = [
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
      title: "Hip Replacement Surgery Risks and Complications",
      href: "/blog/hip-replacement-surgery-risks-complications",
    },
  ];

  // All other blog articles for Sidebar "Related Articles"
  const sidebarRelatedArticles = [
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
              International Patients • Medical Tourism Guide
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Hip Replacement Surgery for International Patients
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Learn about hip replacement surgery in India for international patients, including advanced treatment options, expert care, hospital facilities, and recovery.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10">
          
          {/* LEFT COLUMN: IN THIS PAGE + MAIN ARTICLE */}
          <div className="space-y-8">
            
            {/* IN THIS PAGE (BOX AT LEFT TOP) */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#053161] mb-6">
                In This Page
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 text-sm md:text-base">
                <a href="#visa-preparation" className="text-[#1B4F9C] hover:text-pink-500 transition flex items-center gap-2">
                  <span className="text-[#1B4F9C]">•</span> Visa & Preparation
                </a>
                <a href="#arrival-admission" className="text-[#1B4F9C] hover:text-pink-500 transition flex items-center gap-2">
                  <span className="text-[#1B4F9C]">•</span> Arrival & Hospital Stay
                </a>
                <a href="#recovery-planning" className="text-[#1B4F9C] hover:text-pink-500 transition flex items-center gap-2">
                  <span className="text-[#1B4F9C]">•</span> Recovery & Accommodation
                </a>
                <a href="#follow-up-questions" className="text-[#1B4F9C] hover:text-pink-500 transition flex items-center gap-2">
                  <span className="text-[#1B4F9C]">•</span> Follow-Up & Questions
                </a>
                <a href="#ekam-support-costs" className="text-[#1B4F9C] hover:text-pink-500 transition flex items-center gap-2">
                  <span className="text-[#1B4F9C]">•</span> Ekam Support & Costs
                </a>
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <article className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12">
                
                {/* VISA & PREPARATION */}
                <section id="visa-preparation" className="mb-12">
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    About medical and e-Medical visa categories: Eligibility, documentation, duration, and other conditions can vary depending on the patient's nationality and visa category.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Patients should verify the latest requirements directly through the official Government of India visa portal before making travel arrangements.
                  </p>

                  <div className="my-6">
                    <a
                      href="https://www.indianvisaonline.gov.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#053161] px-5 py-3 text-white font-semibold hover:bg-[#1B4F9C] transition"
                    >
                      Official Indian Visa Online Portal →
                    </a>
                  </div>

                  <SectionHeading>What Should Patients Bring to India?</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    International patients should prepare a medical travel folder containing relevant health and identification documents. A useful checklist may include:
                  </p>

                  <BulletList
                    items={[
                      "Passport and Visa documentation",
                      "Hospital appointment details & Doctor's referral (if available)",
                      "Medical reports, imaging reports, and X-rays",
                      "Previous surgical records & surgical history",
                      "Current medication list & allergy information",
                      "Emergency contact information",
                      "Travel insurance documents (where applicable)",
                    ]}
                  />

                  <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 mt-5">
                    <p className="text-[#425466] text-sm leading-6">
                      <strong>Important Note:</strong> Keep essential medical records accessible in your hand luggage rather than placing all documents in checked luggage.
                    </p>
                  </div>
                </section>

                {/* ARRIVAL & HOSPITAL ADMISSION */}
                <section id="arrival-admission" className="mb-12">
                  <SectionHeading>What Happens After Arriving in India?</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    After arriving in India, the patient may be taken to the hotel or accommodation before attending the hospital, depending on the treatment schedule and medical team's recommendations.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The hospital may then conduct additional assessments before surgery, which may include:
                  </p>

                  <BulletList
                    items={[
                      "Clinical examination and health review",
                      "Review of previous imaging & new X-rays/investigations",
                      "Blood tests and Anaesthesia assessment",
                      "Evaluation of pre-existing medical conditions",
                      "Final confirmation of the surgical plan",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The treating team may modify the treatment plan if the in-person evaluation identifies information that was not available during the preliminary remote assessment.
                  </p>

                  <SectionHeading>Hospital Admission and Treatment</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Once the medical team confirms that the patient is ready for surgery, the hospital admission and treatment process proceeds according to the treating team's plan.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The patient's hospital stay may involve:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-6">
                    <FeatureBox text="Pre-operative preparation" />
                    <FeatureBox text="Joint Replacement Surgery" />
                    <FeatureBox text="Post-operative monitoring" />
                    <FeatureBox text="Pain management protocol" />
                    <FeatureBox text="Early mobilization & Physiotherapy" />
                    <FeatureBox text="Structured discharge planning" />
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8">
                    The exact hospital stay and recovery requirements vary between patients. International patients should not make fixed return-flight plans without considering the treating team's advice.
                  </p>
                </section>

                {/* RECOVERY & ACCOMMODATION */}
                <section id="recovery-planning" className="mb-12">
                  <SectionHeading>Planning Accommodation After Discharge</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Patients may need to remain in India for a period after leaving the hospital, depending on their recovery and follow-up requirements.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    When selecting accommodation, international patients should consider:
                  </p>

                  <BulletList
                    items={[
                      "Proximity and distance from the hospital",
                      "Elevator availability and wheel-chair access",
                      "Accessible bathroom facilities and room layout",
                      "Availability of food and room service",
                      "Easy local transportation options",
                      "Assistance for mobility limitations",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    An accommodation option that is suitable for a healthy traveller may not be appropriate for someone recovering from joint-replacement surgery.
                  </p>

                  <SectionHeading>Recovery Planning for International Patients</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Recovery continues after hospital discharge. The patient may need physiotherapy, prescribed medicines, wound care, and follow-up assessment. Before leaving the hospital, the plan should address:
                  </p>

                  <BulletList
                    items={[
                      "Physiotherapy schedule & mobility guidelines",
                      "Wound care and medication instructions",
                      "Follow-up appointments schedule",
                      "Activity restrictions and fit-to-fly clearance",
                    ]}
                  />

                  <SectionHeading>When Can an International Patient Return Home?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    There is no universal number of days that applies to every international patient. The timing for return travel depends on:
                  </p>

                  <BulletList
                    items={[
                      "Type of surgery performed",
                      "Recovery progress and mobility",
                      "Wound condition and pain control",
                      "Absence of medical complications",
                      "Doctor's final fit-to-fly clearance",
                    ]}
                  />
                </section>

                {/* POST-CARE & PRE-TREATMENT QUESTIONS */}
                <section id="follow-up-questions" className="mb-12">
                  <SectionHeading>Follow-up After Returning to Your Home Country</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    International patients should have a clear plan for continuing care after they return home. Before leaving India, request copies of essential medical records:
                  </p>

                  <BulletList
                    items={[
                      "Detailed Discharge summary",
                      "Operative report (where provided)",
                      "Medication instructions & prescriptions",
                      "Post-op imaging reports and X-rays",
                      "Physiotherapy and rehabilitation instructions",
                      "Emergency contact details of the treating hospital",
                    ]}
                  />

                  <SectionHeading>What Should International Patients Ask Before Choosing Treatment?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Before confirming hip replacement treatment in India, ask your healthcare provider:
                  </p>

                  <div className="space-y-3 my-6">
                    <QuestionItem number="1" question="Who will evaluate and perform my surgery?" />
                    <QuestionItem number="2" question="What type of hip replacement and implant brand is recommended?" />
                    <QuestionItem number="3" question="How long should I expect to remain in India?" />
                    <QuestionItem number="4" question="Which services are included or excluded in the treatment package?" />
                    <QuestionItem number="5" question="When might I be medically fit to travel home?" />
                    <QuestionItem number="6" question="How will my follow-up be coordinated after returning home?" />
                  </div>
                </section>

                {/* HOW EKAM SUPPORTS & COSTS */}
                <section id="ekam-support-costs" className="mb-12">
                  <div className="rounded-2xl bg-gradient-to-br from-[#053161] to-[#1B4F9C] p-7 md:p-9 text-white mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      How Ekam Supports International Patients
                    </h2>
                    <p className="text-white/90 text-base md:text-lg leading-8">
                      Ekam assists international patients with all coordination aspects of seeking medical treatment in India—from organizing records and booking appointments to coordinating travel, accommodation, and post-discharge follow-ups.
                    </p>
                  </div>

                  <BulletList
                    items={[
                      "Collecting and organizing medical records for specialist review",
                      "Coordinating preliminary medical evaluations & hospital opinions",
                      "Connecting patients with top accredited hospitals and surgeons",
                      "Assisting with travel, airport transfers, and accessible stay",
                      "Providing continuous post-discharge and follow-up support",
                    ]}
                  />

                  <div className="rounded-xl border-l-4 border-pink-500 bg-[#FFF7FA] p-4 my-6">
                    <p className="text-[#425466] text-sm leading-6">
                      <strong>Disclaimer:</strong> Ekam's role is to facilitate your medical journey. Diagnosis, surgical decisions, treatment, and clinical care are provided exclusively by treating healthcare professionals and hospitals.
                    </p>
                  </div>

                  <SectionHeading>How Much Does Hip Replacement Treatment Cost for International Patients?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The total expense for an international patient involves more than the surgical procedure itself. Potential expenses include medical treatment, implant, hospitalization, flights, visa, accommodation, and physiotherapy.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    For a detailed breakdown of treatment costs and budget planning, visit our dedicated guide:
                  </p>

                  <div className="my-5">
                    <Link
                      href="/cost-of-treatment/hip-replacement-surgery-cost-india-international-patients"
                      className="inline-flex items-center gap-2 text-[#1B4F9C] font-semibold text-lg underline hover:text-pink-500 transition"
                    >
                      See Hip Replacement Surgery Cost in India →
                    </Link>
                  </div>

                  <SectionHeading>Why Planning Before Travel Matters</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Travelling internationally for major surgery requires structured planning:
                  </p>

                  {/* WORKFLOW STEPPERS */}
                  <div className="p-5 bg-[#F8FAFD] rounded-xl border border-[#DCE5F0] text-sm md:text-base font-semibold text-[#053161] leading-7 my-6">
                    Medical Condition ➔ Specialist Evaluation ➔ Hospital Selection ➔ Treatment Plan ➔ Visa & Travel ➔ Hospital Treatment ➔ Recovery ➔ Follow-up Care ➔ Return Home
                  </div>
                </section>

                {/* FINAL CTA BOX */}
                <section className="mb-12">
                  <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                      Start Planning Your Hip Replacement Treatment in India
                    </h2>
                    
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      If you are considering hip replacement surgery in India as an international patient, the first step is to understand your medical condition and obtain an appropriate specialist evaluation.
                    </p>
                    
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                      You can share your available medical reports and treatment history to begin the coordination process. Based on the medical evaluation, appropriate treatment options and healthcare providers can be discussed before you make travel arrangements.
                    </p>
                    
                    {/* BUTTON WITH MARGIN BOTTOM */}
                    <div className="mb-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                      >
                        Request Treatment Assessment →
                      </Link>
                    </div>
                      
                    {/* MEDICAL DISCLAIMER NOTE */}
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed border-t border-[#DCE5F0] pt-4 mt-6">
                      <strong>Note:</strong> Medical information on this page is for general educational purposes and does not replace consultation with a qualified healthcare professional. Treatment suitability, surgical decisions, travel fitness and follow-up requirements should be determined by the treating medical team.
                    </p>
                  </div>
                </section>

                {/* MORE RELATED LINKS SECTION (4 SPECIFIC LINKS) */}
                <section className="bg-[#F8FAFD] rounded-2xl border border-[#E1E8F0] p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-[#053161] mb-6">
                    More Related Links
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {moreRelatedLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className="flex items-center justify-between gap-3 p-4 bg-white rounded-xl border border-[#E1E8F0] hover:border-[#1B4F9C] hover:shadow-md transition text-[#053161] font-medium text-sm md:text-base group"
                      >
                        <span>{link.title}</span>
                        <span className="text-[#1B4F9C] group-hover:translate-x-1 transition-transform shrink-0">
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>

              </div>
            </article>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            
            {/* 1. TOP CTA WIDGET: GET YOUR ASSESSMENT */}
            <div className="rounded-2xl bg-gradient-to-br from-[#053161] to-[#1B4F9C] p-6 text-white shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 text-2xl">
                ✈️
              </div>
              <h3 className="text-xl font-bold mb-3">
                Get Your Assessment
              </h3>
              <p className="text-white/85 text-sm leading-6 mb-5">
                Have your medical history evaluated by leading joint-replacement specialists in India.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#053161] rounded-xl px-5 py-3 font-bold hover:bg-[#F8FAFD] transition"
              >
                Get Started →
              </Link>
            </div>

            {/* 2. RELATED ARTICLES WIDGET (SIDEBAR WITH ALL OTHER LINKS) */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-5">
                Related Articles
              </h3>
              <div className="space-y-4">
                {sidebarRelatedArticles.map((article, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                    <Link
                      href={article.href}
                      className="text-sm text-[#1B4F9C] hover:text-pink-500 font-medium leading-relaxed block transition"
                    >
                      • {article.title}
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

function BulletList({ items }) {
  return (
    <ul className="space-y-3 my-5">
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

function FeatureBox({ text }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
      <span className="text-emerald-600 font-bold">✓</span>
      <span className="text-[#053161] font-semibold text-sm md:text-base">{text}</span>
    </div>
  );
}

function QuestionItem({ number, question }) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
      <div className="w-7 h-7 shrink-0 rounded-full bg-[#053161] text-white flex items-center justify-center font-bold text-xs">
        {number}
      </div>
      <p className="font-semibold text-[#053161] text-base md:text-lg">{question}</p>
    </div>
  );
}

export default HipReplacementInternationalPage;

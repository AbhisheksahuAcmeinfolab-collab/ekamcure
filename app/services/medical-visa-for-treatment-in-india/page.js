import Link from "next/link";

export const metadata = {
  title:
    "Medical Visa for Treatment in India: Cost, Requirements & Application Process",
  description:
    "Learn about the medical visa for treatment in India, including visa cost, eligibility, required documents, and the application process for international patients.",
};

const moreRelatedLinks = [
  {
    title: "Hip Replacement Surgery Cost in India for International Patients",
    href: "https://www.ekamcure.com/cost-of-treatment/hip-replacement-surgery-cost-india-international-patients",
  },
  {
    title: "Hip Replacement Surgery for International Patients",
    href: "https://www.ekamcure.com/blog/hip-replacement-surgery-for-international-patients",
  },
  {
    title: "Best Hospitals for Hip Replacement Surgery in India",
    href: "https://www.ekamcure.com/blog/best-hospitals-for-hip-replacement-surgery-in-india",
  },
  {
    title: "Hip Replacement Surgery Success Rate",
    href: "https://www.ekamcure.com/blog/hip-replacement-surgery-success-rate",
  },
  {
    title: "What Are the Negatives of a Hip Replacement?",
    href: "https://www.ekamcure.com/blog/what-are-the-negatives-of-a-hip-replacement",
  },
  {
    title: "Hip Replacement Surgery Risks and Complications",
    href: "https://www.ekamcure.com/blog/hip-replacement-surgery-risks-complications",
  },
  {
    title: "Top 10 Hospitals in India 2026 for International Patients",
    href: "https://www.ekamcure.com/top-hospitals/top-10-hospitals-india-for-international-patients",
  },
];

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

export default function MedicalVisaServicePage() {
  return (
    <main className="bg-[#F4F6F9] text-[#0F172A] font-sans min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white py-16 lg:py-20 border-b-4 border-emerald-500 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-12 -left-12 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              International Patient Assistance Service
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-6 text-white">
              Medical Visa for Treatment in India: Cost, Requirements & Application Process
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              International patients travelling to India for medical treatment may need to obtain an appropriate medical visa before travelling. The visa process is an important part of planning treatment abroad, particularly for patients travelling for procedures such as hip replacement surgery, cancer treatment, cardiac procedures, IVF and other specialized medical care.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition shadow-lg shadow-emerald-500/20 text-sm"
              >
                Get Assistance with Treatment Coordination →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT SIDE (8 COLS) ================= */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. IN THIS PAGE (Top Left) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span>📍</span> In This Page
              </h3>
              <nav className="grid sm:grid-cols-2 gap-2 text-sm">
                {[
                  { label: "What Is a Medical Visa?", href: "#what-is-visa" },
                  { label: "Who Needs a Visa?", href: "#who-needs" },
                  { label: "Cost & Examination Fees", href: "#cost-details" },
                  { label: "Tourist vs Medical Visa", href: "#tourist-vs-medical" },
                  { label: "Required Documents", href: "#documents" },
                  { label: "Application Steps", href: "#how-to-apply" },
                  { label: "Attendant Visa", href: "#attendants" },
                  { label: "Duration & Extension", href: "#stay-duration" },
                  { label: "Estimated Expenses", href: "#expenses-table" },
                  { label: "Common Mistakes", href: "#common-mistakes" },
                  { label: "Ekam Support", href: "#ekam-support" },
                  { label: "FAQs", href: "#faqs" },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-slate-600 hover:text-emerald-600 font-medium transition-colors duration-150 py-1"
                  >
                    • {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* 2. ARTICLE CONTENT (Main Body Content) */}
            <div className="space-y-8">
              
              {/* OVERVIEW ALERT CARD */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <p className="text-slate-700 text-base leading-relaxed mb-4">
                  The Indian medical visa is intended for eligible foreign nationals seeking medical treatment in India. Visa requirements, fees, permitted duration and application procedures can vary according to nationality and the applicable visa rules.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="text-amber-900 font-medium text-sm sm:text-base leading-relaxed">
                    Patients should always verify the latest requirements through the official Indian visa authorities before making travel arrangements.
                  </p>
                </div>
              </div>

              {/* WHAT IS MEDICAL VISA */}
              <section id="what-is-visa" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <ServiceHeader title="What Is a Medical Visa for India?" icon="🌐" />
                <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                  <p>
                    A medical visa is a visa category intended for eligible foreign nationals who need to travel to India for medical treatment.
                  </p>
                  <p>
                    Depending on the applicable rules, patients may need documentation from an Indian hospital or recognized healthcare provider confirming the proposed treatment.
                  </p>
                  <p className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-slate-600 font-medium">
                    The medical visa process is separate from the medical treatment itself. Obtaining a visa does not guarantee that a particular treatment, hospital admission or surgical procedure will be provided.
                  </p>
                </div>
              </section>

              {/* WHO NEEDS A MEDICAL VISA */}
              <section id="who-needs" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <ServiceHeader title="Who Needs a Medical Visa for Treatment in India?" icon="👤" />
                <p className="text-slate-700 text-base leading-relaxed mb-4">
                  Foreign nationals who are travelling to India specifically to obtain medical treatment may need a medical visa or an applicable electronic medical visa, depending on their nationality and eligibility.
                </p>
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  The requirements can differ between countries.
                </p>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
                  <h4 className="font-bold text-slate-900 text-base mb-4">Before travelling, patients should check:</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Whether their nationality is eligible",
                      "Which visa category applies",
                      "Whether an e-Medical Visa is available",
                      "Required supporting documents",
                      "Visa fee",
                      "Permitted duration of stay",
                      "Number of permitted entries",
                      "Conditions attached to the visa",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200/60 text-slate-700 text-sm">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-sm italic">
                  The official Indian visa portal should be treated as the primary source for current visa requirements.
                </p>
              </section>

              {/* VISA COST & EXAMINATION COST */}
              <section id="cost-details" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
                <div>
                  <ServiceHeader title="How Much Does a Medical Visa Cost in India?" icon="💳" />
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    There is no single medical-visa fee that applies to every international patient.
                  </p>
                  <p className="font-semibold text-slate-900 text-base mb-3">
                    Visa fees can vary according to factors such as:
                  </p>
                  
                  <ServiceBulletList
                    items={[
                      "Applicant's nationality",
                      "Visa category",
                      "Visa duration",
                      "Number of entries",
                      "Application method",
                      "Applicable government charges",
                      "Any additional service or processing charges",
                    ]}
                  />

                  <p className="text-slate-700 text-base leading-relaxed mt-4 mb-2">
                    For this reason, patients should not rely on a fixed price quoted on an unofficial website.
                  </p>
                  <p className="text-slate-700 text-base leading-relaxed font-medium text-emerald-700">
                    The visa fee should be checked on the official Indian visa application platform applicable to the patient's nationality.
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    What About the Cost of a Medical Examination for a Visa?
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    A medical visa fee and a medical examination fee are two different expenses.
                  </p>
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    If a patient's visa or immigration process requires a medical examination, the examination is generally performed by an approved or authorized medical provider according to the applicable requirements.
                  </p>
                  
                  <p className="font-semibold text-slate-900 text-base mb-3">
                    The cost of such an examination can vary depending on:
                  </p>
                  <ServiceBulletList
                    items={[
                      "Country where the examination is performed",
                      "Approved medical centre",
                      "Tests required",
                      "Type of examination",
                      "Applicant's individual circumstances",
                    ]}
                  />

                  <p className="text-slate-700 text-base leading-relaxed mt-4">
                    Therefore, the question “How much does a visa medical cost in India?” should be clarified based on whether the patient means the Indian medical-visa application fee or the cost of a medical examination.
                  </p>
                </div>
              </section>

              {/* TOURIST VS MEDICAL */}
              <section id="tourist-vs-medical" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <ServiceHeader title="Is a Medical Visa Different From a Tourist Visa?" icon="🔀" />
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 font-bold rounded-lg text-sm mb-4">
                  Yes.
                </div>
                <p className="text-slate-700 text-base leading-relaxed mb-4">
                  A tourist visa is intended for tourism and other permitted non-medical purposes, while a medical visa is designed for eligible travellers seeking medical treatment.
                </p>
                <p className="text-slate-700 text-base leading-relaxed mb-4">
                  Patients should select the visa category appropriate to their purpose of travel and comply with the conditions attached to that visa.
                </p>
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-sm font-medium">
                  Travelling for medical treatment under an inappropriate visa category can create avoidable immigration problems.
                </div>
              </section>

              {/* DOCUMENTS REQUIRED */}
              <section id="documents" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <ServiceHeader title="What Documents Are Required for an Indian Medical Visa?" icon="📄" />
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    The exact documentation depends on the applicant's nationality and visa category.
                  </p>
                  <p className="font-semibold text-slate-900 text-base mb-3">
                    Commonly requested information may include:
                  </p>
                  
                  <ServiceBulletList
                    items={[
                      "Valid passport",
                      "Passport photographs or digital photograph, where applicable",
                      "Completed visa application",
                      "Medical documents",
                      "Letter or confirmation from an Indian hospital or healthcare provider",
                      "Details of the proposed treatment",
                      "Applicant's personal information",
                      "Travel information",
                      "Financial or supporting documentation where required",
                    ]}
                  />
                  
                  <p className="text-slate-600 text-sm mt-4">
                    Additional documents may be requested depending on the applicant's circumstances. Patients should check the current official requirements before submitting an application.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    Medical Invitation or Hospital Letter
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    Patients travelling to India for planned treatment may need documentation from the Indian hospital or healthcare provider.
                  </p>
                  <p className="font-semibold text-slate-900 text-base mb-3">
                    The document may contain information such as:
                  </p>
                  
                  <ServiceBulletList
                    items={[
                      "Patient's name",
                      "Proposed treatment",
                      "Hospital or healthcare provider",
                      "Expected treatment period",
                      "Relevant medical information",
                      "Hospital contact details",
                    ]}
                  />

                  <p className="text-slate-700 text-base leading-relaxed mt-4 mb-2">
                    The exact format and requirements depend on the applicable visa process.
                  </p>
                  <p className="text-slate-900 font-bold text-base">
                    International patients should obtain the required documentation from the hospital before submitting their visa application.
                  </p>
                </div>
              </section>

              {/* APPLICATION PROCESS */}
              <section id="how-to-apply" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <ServiceHeader title="How to Apply for a Medical Visa for India" icon="📋" />
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  The general process involves several stages.
                </p>

                <div className="relative border-l-2 border-slate-200 ml-4 space-y-8 pl-6">
                  <ProcessStep
                    num="1"
                    title="Identify the Appropriate Visa Category"
                    desc="First, determine which Indian medical visa option is applicable to your nationality and treatment purpose."
                  />
                  <ProcessStep
                    num="2"
                    title="Select an Indian Healthcare Provider"
                    desc="Patients should identify an appropriate hospital or healthcare provider and discuss their treatment requirements."
                  />
                  <ProcessStep
                    num="3"
                    title="Obtain Required Medical Documentation"
                    desc="The hospital or healthcare provider may provide the documentation required for the visa application."
                  />
                  <ProcessStep
                    num="4"
                    title="Complete the Visa Application"
                    desc="Submit the application through the official Indian visa platform or diplomatic channels."
                  />
                  <ProcessStep
                    num="5"
                    title="Pay the Applicable Visa Fee"
                    desc="The applicable fee depends on the applicant's nationality and visa category."
                  />
                  <ProcessStep
                    num="6"
                    title="Submit Supporting Documents"
                    desc="Upload or submit the documents requested during the application process."
                  />
                  <ProcessStep
                    num="7"
                    title="Wait for Visa Processing"
                    desc="Processing times can vary. Avoid booking non-refundable travel until visa status is confirmed."
                  />
                </div>
              </section>

              {/* FAMILY MEMBER & ATTENDANT VISA */}
              <section id="attendants" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <ServiceHeader title="Can a Family Member Accompany a Medical Patient?" icon="👨‍👩‍👧" />
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    Eligible family members or attendants may be able to travel to India under a Medical Attendant Visa or applicable electronic medical attendant visa.
                  </p>
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    The eligibility and number of attendants permitted can depend on the patient's visa category, nationality and current Indian immigration rules.
                  </p>
                </div>
              </section>

              {/* DURATION & EXTENSIONS */}
              <section id="stay-duration" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <ServiceHeader title="How Long Can a Medical Visa Holder Stay in India?" icon="⏳" />
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    The permitted duration of stay depends on the visa issued and the applicable rules.
                  </p>
                  <ServiceBulletList
                    items={[
                      "Visa validity",
                      "Permitted stay",
                      "Number of entries",
                      "Registration requirements, where applicable",
                      "Extension provisions, if any",
                    ]}
                  />
                </div>
              </section>

              {/* EXPENSES TABLE SECTION */}
              <section id="expenses-table" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <ServiceHeader title="Estimated Total Visa-Related Expenses" icon="📊" />
                <div className="overflow-hidden rounded-xl border border-slate-200 mb-4">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white text-sm">
                        <th className="p-4 font-bold uppercase tracking-wider">Expense</th>
                        <th className="p-4 font-bold uppercase tracking-wider">What It Covers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700 text-sm sm:text-base">
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-900">Medical visa fee</td>
                        <td className="p-4">Government visa application charge</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-900">Medical documents</td>
                        <td className="p-4">Reports and hospital documentation</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-4 font-bold text-slate-900">Flights & Stay</td>
                        <td className="p-4">Travel to India and local accommodation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* COMMON MISTAKES TO AVOID */}
              <section id="common-mistakes" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <ServiceHeader title="Common Mistakes International Patients Should Avoid" icon="⚠️" />
                <div className="grid sm:grid-cols-2 gap-4">
                  <MistakeCard
                    title="Using an Unofficial Visa Website"
                    desc="Patients should be careful with third-party websites. Always verify details through official Indian government sources."
                  />
                  <MistakeCard
                    title="Applying for the Wrong Visa"
                    desc="Confirm the exact visa category matching your treatment requirement before applying."
                  />
                </div>
              </section>

              {/* EKAM SUPPORT SECTION */}
              <section id="ekam-support" className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
                <h2 className="text-2xl font-bold mb-3 text-white">How Ekam Can Support International Patients</h2>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  For patients travelling to India for treatment, Ekam can help coordinate aspects of the medical journey.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {[
                    "Medical record coordination",
                    "Hospital and specialist coordination",
                    "Hospital appointment coordination",
                    "Assistance with medical documentation",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 text-sm">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQS SECTION */}
              <section id="faqs" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <ServiceHeader title="Frequently Asked Questions" icon="❓" />
                <div className="space-y-4">
                  <FaqCard
                    q="How much does a medical visa for India cost?"
                    a="There is no universal fee. The cost depends on nationality, duration, and visa category."
                  />
                  <FaqCard
                    q="Can my family member accompany me to India for treatment?"
                    a="Eligible attendants may obtain a Medical Attendant Visa alongside the patient."
                  />
                </div>
              </section>

            </div>

            {/* 3. MORE RELATED LINKS (Bottom Left) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span>🔗</span> More Related Links
              </h3>
              <div className="space-y-3 text-sm">
                {moreRelatedLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 text-emerald-700 hover:text-emerald-900 hover:border-emerald-300 font-medium transition block leading-snug"
                  >
                    • {link.title}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE / SIDEBAR (4 COLS) ================= */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8 lg:self-start">
            
            {/* 1. GET YOUR ASSESSMENT (Right Top) */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl mb-4">
                🏥
              </div>
              <h3 className="text-xl font-bold mb-2">Get Your Assessment</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Ekam helps international patients coordinate hospital appointments, specialist consultations, and medical records evaluation.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3.5 px-4 rounded-xl text-sm transition shadow-md"
              >
                Request Free Assessment Now →
              </Link>
            </div>

            {/* 2. RELATED ARTICLES (Right Bottom) */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span>📚</span> Related Articles
              </h3>
              <nav className="space-y-2.5 text-sm">
                {relatedArticles.map((article, idx) => (
                  <Link
                    key={idx}
                    href={article.href}
                    className="block text-slate-700 hover:text-emerald-600 font-medium transition-all duration-150 py-1 leading-snug border-b border-slate-100 last:border-0 pb-2"
                  >
                    • {article.title}
                  </Link>
                ))}
              </nav>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

/* UI HELPER COMPONENTS */
function ServiceHeader({ title, icon }) {
  return (
    <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-100">
      <span className="text-2xl">{icon}</span>
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function ServiceBulletList({ items }) {
  return (
    <div className="space-y-2 my-4">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-start gap-3 text-slate-700 text-base">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 shrink-0" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ProcessStep({ num, title, desc }) {
  return (
    <div className="relative">
      <span className="absolute -left-[35px] top-0 w-7 h-7 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center ring-4 ring-white">
        {num}
      </span>
      <h3 className="text-lg font-bold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-600 text-base leading-relaxed">{desc}</p>
    </div>
  );
}

function MistakeCard({ title, desc }) {
  return (
    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
      <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqCard({ q, a }) {
  return (
    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
      <h3 className="font-bold text-slate-900 text-base mb-2">{q}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
    </div>
  );
}

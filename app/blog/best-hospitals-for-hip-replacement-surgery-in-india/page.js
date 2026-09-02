import Link from "next/link";

export const metadata = {
  title: "Best Hospitals for Hip Replacement Surgery in India",
  description:
    "Explore the best hospitals for hip replacement surgery in India, offering advanced orthopedic care, experienced surgeons, modern facilities, and quality treatment.",
};

function BestHospitalsHipReplacementPage() {
  // 3 Specific Hip Replacement Links for bottom "More Related Links" section
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
              Orthopaedic Care • Hospital Evaluation Guide
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Best Hospitals for Hip Replacement Surgery in India
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Explore the best hospitals for hip replacement surgery in India, offering advanced orthopedic care, experienced surgeons, modern facilities, and quality treatment.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10">
          
          {/* ARTICLE CONTENT AREA */}
          <div className="space-y-8">
            
            {/* IN THIS PAGE CARD (TOP OF ARTICLE CONTENT LIKE SCREENSHOT) */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E1E8F0] shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold text-[#053161] mb-6">
                In This Page
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 text-sm md:text-base font-medium">
                <a href="#introduction" className="flex items-center gap-2 text-[#1B4F9C] hover:text-pink-500 transition">
                  <span className="text-[#1B4F9C]">•</span> Introduction & Criteria
                </a>
                <a href="#how-to-choose" className="flex items-center gap-2 text-[#1B4F9C] hover:text-pink-500 transition">
                  <span className="text-[#1B4F9C]">•</span> How to Choose
                </a>
                <a href="#top-hospitals" className="flex items-center gap-2 text-[#1B4F9C] hover:text-pink-500 transition">
                  <span className="text-[#1B4F9C]">•</span> Top 5 Hospitals
                </a>
                <a href="#best-cities" className="flex items-center gap-2 text-[#1B4F9C] hover:text-pink-500 transition">
                  <span className="text-[#1B4F9C]">•</span> Best Healthcare Cities
                </a>
                <a href="#comparison-framework" className="flex items-center gap-2 text-[#1B4F9C] hover:text-pink-500 transition">
                  <span className="text-[#1B4F9C]">•</span> Comparison Framework
                </a>
                <a href="#questions-evaluation" className="flex items-center gap-2 text-[#1B4F9C] hover:text-pink-500 transition">
                  <span className="text-[#1B4F9C]">•</span> Questions to Ask
                </a>
                <a href="#ekam-help-checklist" className="flex items-center gap-2 text-[#1B4F9C] hover:text-pink-500 transition">
                  <span className="text-[#1B4F9C]">•</span> Ekam Support & Checklist
                </a>
                <a href="#faqs" className="flex items-center gap-2 text-[#1B4F9C] hover:text-pink-500 transition">
                  <span className="text-[#1B4F9C]">•</span> FAQs
                </a>
              </div>
            </div>

            {/* MAIN ARTICLE BODY */}
            <article className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12">
                
                {/* INTRODUCTION */}
                <section id="introduction" className="mb-12">
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Choosing the right hospital is an important part of planning hip replacement surgery in India. For international patients, the decision involves more than comparing hospital names or advertised treatment prices. The hospital's orthopaedic expertise, joint-replacement facilities, surgeon availability, accreditation, rehabilitation services and international-patient support can all influence the treatment experience.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    India has hospitals in several major cities with dedicated orthopaedic and joint-replacement services. However, the most suitable hospital depends on the patient's diagnosis, recommended procedure, medical history, location preferences and treating specialist.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    This guide explains how to evaluate hospitals for hip replacement surgery in India and what international patients should consider before making a decision.
                  </p>

                  <SectionHeading>What Makes a Hospital Suitable for Hip Replacement Surgery?</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    A hospital providing hip replacement should have appropriate facilities and a multidisciplinary team capable of managing the patient's treatment before, during and after surgery. Important factors include:
                  </p>

                  <BulletList
                    items={[
                      "Dedicated orthopaedic and joint-replacement services",
                      "Experienced orthopaedic specialists",
                      "Appropriate operating-room facilities",
                      "Anaesthesia and perioperative support",
                      "Diagnostic and imaging facilities",
                      "Emergency and critical-care services",
                      "Infection-prevention protocols",
                      "Physiotherapy and rehabilitation services",
                      "Post-operative monitoring",
                      "Access to appropriate implant options",
                      "Follow-up care",
                      "International-patient coordination, where required",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 border-l-4 border-[#1B4F9C] pl-4 py-1 bg-[#F8FAFD]">
                    A hospital should be assessed according to the patient's individual medical requirements rather than simply its brand recognition.
                  </p>
                </section>

                {/* HOW TO CHOOSE */}
                <section id="how-to-choose" className="mb-12">
                  <SectionHeading>How to Choose the Best Hospital for Hip Replacement in India</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    There is no single hospital that is automatically the right choice for every patient. Instead, international patients should compare hospitals using objective and relevant criteria.
                  </p>

                  <SubHeading>1. Orthopaedic and Joint-Replacement Expertise</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    First, check whether the hospital has a dedicated orthopaedic department with experience in hip and joint replacement. A strong department may provide care for:
                  </p>
                  <BulletList
                    items={[
                      "Primary hip replacement",
                      "Complex hip replacement",
                      "Revision hip replacement",
                      "Partial hip replacement",
                      "Total hip replacement",
                      "Other joint-replacement procedures",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6 italic bg-[#F8FAFD] p-4 rounded-xl border border-[#E1E8F0]">
                    For example, Medanta's orthopaedics service describes expertise covering primary and complex knee and hip arthroplasty as well as revision knee and hip replacement.
                  </p>

                  <SubHeading>2. Experience of the Treating Surgeon</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A hospital's reputation should not replace evaluation of the individual surgeon who will treat the patient. International patients should review:
                  </p>
                  <BulletList
                    items={[
                      "Medical qualifications",
                      "Orthopaedic specialization",
                      "Joint-replacement experience",
                      "Experience with the required type of procedure",
                      "Experience with primary or revision surgery, when relevant",
                      "Hospital affiliation",
                      "Professional memberships and certifications where applicable",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    For detailed information about selecting a specialist, see{" "}
                    <Link href="/blog/hip-replacement-surgeons-in-india" className="text-[#1B4F9C] font-semibold underline hover:text-pink-500">
                      Hip Replacement Surgeons in India
                    </Link>.
                  </p>

                  <SubHeading>3. Hospital Accreditation and Quality Standards</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Accreditation can be one useful factor when comparing hospitals, although it should not be the only criterion. Patients can check whether the hospital holds relevant accreditation and whether the accreditation is current. They can also ask about:
                  </p>
                  <BulletList
                    items={[
                      "Infection-control practices",
                      "Patient-safety systems",
                      "Nursing support",
                      "Emergency facilities",
                      "Critical-care availability",
                      "Surgical protocols",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    International patients should verify accreditation information directly with the hospital or the relevant accreditation organization.
                  </p>

                  <SubHeading>4. Diagnostic and Imaging Facilities</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Accurate diagnosis and pre-operative planning are important before hip replacement. Depending on the patient's condition, the hospital may require:
                  </p>
                  <BulletList
                    items={[
                      "X-rays",
                      "Blood tests",
                      "ECG",
                      "Other imaging",
                      "Medical clearance",
                      "Anaesthesia assessment",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Having appropriate diagnostic facilities available can help coordinate the pre-operative evaluation efficiently.
                  </p>

                  <SubHeading>5. Joint-Replacement and Surgical Facilities</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients should ask whether the hospital regularly performs the type of hip replacement being considered. Some hospitals may also offer technology-assisted or minimally invasive approaches for selected patients. For example, Apollo describes robot-assisted hip replacement as part of its orthopaedic services, while Fortis documents robotic and direct-anterior hip replacement options at certain centres.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Technology should not be treated as a substitute for surgical expertise. Whether a particular technique is appropriate depends on the patient's anatomy, diagnosis and surgeon's assessment.
                  </p>
                </section>

                {/* TOP 5 HOSPITALS */}
                <section id="top-hospitals" className="mb-12">
                  <SectionHeading>Hospitals Commonly Considered for Hip Replacement in India</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Several established hospital groups and specialist centres in India provide orthopaedic and joint-replacement services. The following examples should be viewed as hospitals patients may consider, rather than a definitive ranking.
                  </p>

                  <div className="rounded-2xl bg-[#053161] p-6 md:p-8 text-white mb-8">
                    <h3 className="text-xl md:text-2xl font-bold mb-3">
                      Top 5 Hospitals to Consider for Hip Replacement Surgery in India
                    </h3>
                    <p className="text-white/90 text-base md:text-lg leading-8">
                      International patients have several hospital options for hip replacement surgery in India. The following five hospitals are presented in the order selected for this guide. Patients should evaluate each hospital based on their medical condition, treating specialist, facilities, treatment plan, rehabilitation services and international-patient support.
                    </p>
                  </div>

                  {/* HOSPITAL 1 */}
                  <div className="mb-8 p-6 md:p-8 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h3 className="text-2xl font-bold text-[#053161] mb-3">1. Max Healthcare</h3>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Max Healthcare provides orthopaedic and joint-replacement services through its hospitals in India. Its orthopaedic services include hip replacement treatment, with specialist-led evaluation and post-operative care.
                    </p>
                    <h4 className="font-semibold text-[#053161] text-base md:text-lg mb-2">Why patients may consider Max Healthcare:</h4>
                    <BulletList
                      items={[
                        "Dedicated orthopaedic services",
                        "Hip and joint-replacement treatment",
                        "Specialist-led care",
                        "Diagnostic and surgical facilities",
                        "Rehabilitation and post-operative support",
                        "International-patient services at relevant centres",
                      ]}
                    />
                    <p className="text-sm text-[#425466] mt-4 pt-3 border-t border-[#E1E8F0]">
                      Patients should confirm the specific hospital location, surgeon and services available for their individual treatment requirements.
                    </p>
                  </div>

                  {/* HOSPITAL 2 */}
                  <div className="mb-8 p-6 md:p-8 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h3 className="text-2xl font-bold text-[#053161] mb-3">2. Yatharth Hospital</h3>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Yatharth Hospitals provides orthopaedic and joint-replacement services through its hospitals, including facilities in the Delhi NCR region.
                    </p>
                    <h4 className="font-semibold text-[#053161] text-base md:text-lg mb-2">Why patients may consider Yatharth Hospital:</h4>
                    <BulletList
                      items={[
                        "Orthopaedic and joint-replacement services",
                        "Hip replacement treatment",
                        "Specialist consultation",
                        "Diagnostic and surgical facilities",
                        "Post-operative care and rehabilitation",
                        "Convenient location options for patients considering treatment in the Delhi NCR region",
                      ]}
                    />
                    <p className="text-sm text-[#425466] mt-4 pt-3 border-t border-[#E1E8F0]">
                      International patients should confirm the availability of the required hip replacement service and the relevant orthopaedic specialist before making travel arrangements.
                    </p>
                  </div>

                  {/* HOSPITAL 3 */}
                  <div className="mb-8 p-6 md:p-8 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h3 className="text-2xl font-bold text-[#053161] mb-3">3. Apollo Hospitals</h3>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Apollo Hospitals is a major hospital network with orthopaedic services across multiple locations in India. Its published orthopaedic information includes hip replacement treatment and joint-replacement services.
                    </p>
                    <h4 className="font-semibold text-[#053161] text-base md:text-lg mb-2">Why patients may consider Apollo Hospitals:</h4>
                    <BulletList
                      items={[
                        "Orthopaedic and joint-replacement departments",
                        "Hip replacement services",
                        "Specialist-led treatment",
                        "Multiple hospital locations",
                        "Diagnostic and surgical facilities",
                        "Technology-assisted treatment options at selected centres",
                        "International-patient services",
                      ]}
                    />
                    <p className="text-sm text-[#425466] mt-4 pt-3 border-t border-[#E1E8F0]">
                      The specific treatments, specialists and technologies available can differ between Apollo locations, so patients should confirm details with the hospital they are considering.
                    </p>
                  </div>

                  {/* HOSPITAL 4 */}
                  <div className="mb-8 p-6 md:p-8 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h3 className="text-2xl font-bold text-[#053161] mb-3">4. Fortis Healthcare</h3>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Fortis Healthcare provides orthopaedic and joint-replacement services through several hospitals in India. Its published information includes hip replacement treatment and advanced surgical approaches at selected centres.
                    </p>
                    <h4 className="font-semibold text-[#053161] text-base md:text-lg mb-2">Why patients may consider Fortis Healthcare:</h4>
                    <BulletList
                      items={[
                        "Dedicated orthopaedic services",
                        "Hip and joint-replacement treatment",
                        "Experienced orthopaedic teams",
                        "Advanced surgical options at selected centres",
                        "Diagnostic and hospital facilities",
                        "Rehabilitation and post-operative care",
                        "International-patient coordination",
                      ]}
                    />
                    <p className="text-sm text-[#425466] mt-4 pt-3 border-t border-[#E1E8F0]">
                      Patients should confirm the relevant specialist, treatment approach and facilities at the specific Fortis hospital they plan to visit.
                    </p>
                  </div>

                  {/* HOSPITAL 5 */}
                  <div className="mb-8 p-6 md:p-8 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h3 className="text-2xl font-bold text-[#053161] mb-3">5. Medanta</h3>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Medanta provides orthopaedic and joint-replacement services, including primary, complex and revision hip arthroplasty. Its orthopaedic services involve multidisciplinary care for patients requiring joint-replacement treatment.
                    </p>
                    <h4 className="font-semibold text-[#053161] text-base md:text-lg mb-2">Why patients may consider Medanta:</h4>
                    <BulletList
                      items={[
                        "Dedicated orthopaedic services",
                        "Primary and complex hip arthroplasty",
                        "Revision hip replacement expertise",
                        "Specialist-led treatment",
                        "Multidisciplinary medical support",
                        "Rehabilitation and follow-up services",
                        "International-patient support",
                      ]}
                    />
                    <p className="text-sm text-[#425466] mt-4 pt-3 border-t border-[#E1E8F0]">
                      Patients should discuss their individual diagnosis and treatment requirements with the relevant orthopaedic specialist before selecting a procedure or hospital.
                    </p>
                  </div>
                </section>

                {/* BEST CITIES */}
                <section id="best-cities" className="mb-12">
                  <SectionHeading>Best Cities for Hip Replacement Surgery in India</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    International patients can find orthopaedic and joint-replacement services in several major Indian healthcare centres.
                  </p>

                  <div className="space-y-6">
                    <CityCard
                      city="Delhi and National Capital Region"
                      text="Delhi and the surrounding National Capital Region have multiple large hospitals with established orthopaedic departments and joint-replacement specialists. The region may also be convenient for international patients because of its major airport and broad healthcare infrastructure."
                    />
                    <CityCard
                      city="Mumbai"
                      text="Mumbai has several hospitals providing orthopaedic and joint-replacement treatment. Patients can compare hospitals according to surgeon expertise, facilities, rehabilitation and international-patient support."
                    />
                    <CityCard
                      city="Bengaluru"
                      text="Bengaluru has established hospitals offering orthopaedic and joint-replacement services, including centres that provide advanced technology-assisted procedures."
                    />
                    <CityCard
                      city="Chennai"
                      text="Chennai is another major healthcare destination with hospitals providing hip replacement and other orthopaedic procedures."
                    />
                    <CityCard
                      city="Hyderabad"
                      text="Hyderabad has hospitals with dedicated orthopaedic and joint-replacement departments and services for patients travelling from different parts of India and abroad."
                    />
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-6 italic">
                    The best city is not necessarily the one with the largest number of hospitals. Patients should choose based on the medical team's suitability, hospital facilities and practical travel considerations.
                  </p>
                </section>

                {/* COMPARISON TABLE */}
                <section id="comparison-framework" className="mb-12">
                  <SectionHeading>How Should International Patients Compare Hospitals?</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    International patients can use a simple comparison framework before selecting a hospital. This approach can be more useful than relying on a generic “top 10” list.
                  </p>

                  <div className="overflow-x-auto my-6 rounded-xl border border-[#E1E8F0]">
                    <table className="w-full text-left text-sm md:text-base border-collapse">
                      <thead>
                        <tr className="bg-[#053161] text-white">
                          <th className="p-4 border-b border-[#E1E8F0] font-bold w-1/3">Factor</th>
                          <th className="p-4 border-b border-[#E1E8F0] font-bold w-2/3">What to Check</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E1E8F0] text-[#425466]">
                        <TableRow factor="Orthopaedic department" check="Dedicated hip and joint-replacement services" />
                        <TableRow factor="Surgeon" check="Qualifications and relevant experience" />
                        <TableRow factor="Hospital accreditation" check="Current accreditation where applicable" />
                        <TableRow factor="Facilities" check="Operating room, diagnostics, ICU/emergency support" />
                        <TableRow factor="Implant options" check="Availability of appropriate implant choices" />
                        <TableRow factor="Rehabilitation" check="Physiotherapy and post-operative support" />
                        <TableRow factor="International services" check="Patient coordination and communication" />
                        <TableRow factor="Location" check="Airport access and local transportation" />
                        <TableRow factor="Follow-up" check="Post-operative consultation and continuity of care" />
                        <TableRow factor="Cost transparency" check="Written estimate and clearly stated exclusions" />
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* QUESTIONS & ADDITIONAL EVALUATION */}
                <section id="questions-evaluation" className="mb-12">
                  <SectionHeading>What Should International Patients Ask a Hospital?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Before travelling to India, international patients should request clear answers to the following questions:
                  </p>

                  <div className="space-y-3 my-6">
                    <QuestionItem number="1" question="Which orthopaedic surgeon will evaluate my case?" />
                    <QuestionItem number="2" question="Does the hospital regularly perform the type of hip replacement I may require?" />
                    <QuestionItem number="3" question="What medical records should I provide before travelling?" />
                    <QuestionItem number="4" question="What investigations will be required after arrival?" />
                    <QuestionItem number="5" question="What type of implant may be appropriate for my condition?" />
                    <QuestionItem number="6" question="How long might I need to remain in India?" />
                    <QuestionItem number="7" question="What rehabilitation services are available?" />
                    <QuestionItem number="8" question="What is included in the hospital's treatment estimate?" />
                    <QuestionItem number="9" question="Which expenses are excluded?" />
                    <QuestionItem number="10" question="How will follow-up care be managed after discharge?" />
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8 my-5">
                    Getting these answers in advance can help international patients make a more informed decision.
                  </p>

                  <SectionHeading>Hospital Cost Should Not Be the Only Selection Factor</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Treatment price is naturally important when planning medical travel, but the lowest quotation is not necessarily the most suitable option. Patients should compare the complete treatment package, including:
                  </p>

                  <BulletList
                    items={[
                      "Surgeon fees",
                      "Hospital charges",
                      "Implant",
                      "Diagnostic investigations",
                      "Room category",
                      "Medicines",
                      "Consumables",
                      "Physiotherapy",
                      "Follow-up",
                      "Additional hospital days",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 my-5">
                    For a detailed discussion of pricing, see{" "}
                    <Link
                      href="/cost-of-treatment/hip-replacement-surgery-cost-india-international-patients"
                      className="text-[#1B4F9C] font-semibold underline hover:text-pink-500"
                    >
                      Hip Replacement Surgery Cost in India
                    </Link>.
                  </p>

                  <SectionHeading>What About the Hip Replacement Surgeon?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The hospital and surgeon should be evaluated separately. A hospital may have excellent infrastructure, but the patient's treatment also depends on the specialist responsible for evaluating and performing the procedure.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold">
                    Patients should review the surgeon's:
                  </p>

                  <BulletList
                    items={[
                      "Qualifications",
                      "Relevant specialization",
                      "Experience",
                      "Experience with the required procedure",
                      "Primary or revision hip-replacement expertise",
                      "Hospital affiliation",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 my-5">
                    For more information, see{" "}
                    <Link href="/blog/hip-replacement-surgeons-in-india" className="text-[#1B4F9C] font-semibold underline hover:text-pink-500">
                      Hip Replacement Surgeons in India
                    </Link>.
                  </p>

                  <SectionHeading>What About the Surgery Itself?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The hospital-selection decision should be made before focusing on the detailed surgical technique. Once a suitable hospital and specialist have been identified, the medical team can determine the appropriate procedure based on the patient's diagnosis and clinical requirements.
                  </p>

                  <SectionHeading>International Patient Services</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Patients travelling from another country may need additional coordination before and after treatment. Useful hospital services can include:
                  </p>

                  <BulletList
                    items={[
                      "International patient department",
                      "Assistance with appointments",
                      "Medical record coordination",
                      "Language support where available",
                      "Airport transfer assistance",
                      "Accommodation guidance",
                      "Billing coordination",
                      "Discharge documentation",
                      "Follow-up coordination",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The availability of these services varies between hospitals, so international patients should confirm them before travelling.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 my-5">
                    For the complete international-patient journey, see{" "}
                    <Link
                      href="/blog/hip-replacement-surgery-for-international-patients"
                      className="text-[#1B4F9C] font-semibold underline hover:text-pink-500"
                    >
                      Hip Replacement Surgery for International Patients
                    </Link>.
                  </p>
                </section>

                {/* HOW EKAM CAN HELP & CHECKLIST */}
                <section id="ekam-help-checklist" className="mb-12">
                  <div className="rounded-2xl bg-gradient-to-br from-[#053161] to-[#1B4F9C] p-7 md:p-9 text-white mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      How Ekam Can Help With Hospital Selection
                    </h2>
                    <p className="text-white/90 text-base md:text-lg leading-8 mb-4">
                      Ekam can assist international patients with the coordination process when they are considering hip replacement treatment in India. Depending on the patient's requirements, this may involve:
                    </p>
                    <ul className="space-y-2 text-white/90 text-base md:text-lg">
                      <li>• Collecting available medical records</li>
                      <li>• Understanding the patient's treatment requirements</li>
                      <li>• Coordinating medical evaluation</li>
                      <li>• Identifying appropriate healthcare providers</li>
                      <li>• Coordinating hospital consultations</li>
                      <li>• Helping the patient understand the proposed treatment plan</li>
                      <li>• Assisting with treatment-related coordination</li>
                      <li>• Supporting aspects of travel and accommodation planning</li>
                      <li>• Coordinating follow-up information</li>
                    </ul>
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The final hospital and treatment decision should be made after considering the patient's medical requirements and the recommendations of qualified healthcare professionals.
                  </p>

                  <div className="rounded-xl border-l-4 border-pink-500 bg-[#FFF7FA] p-4 my-6">
                    <p className="text-[#425466] text-sm leading-6">
                      <strong>Note:</strong> Ekam facilitates the healthcare journey; the treating hospital and surgeon remain responsible for diagnosis, treatment decisions and clinical care.
                    </p>
                  </div>

                  <SectionHeading>How to Choose the Right Hospital: A Practical Checklist</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Before confirming hip replacement surgery in India, international patients should check:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 my-6">
                    <ChecklistItem text="Hospital has relevant orthopaedic and joint-replacement services" />
                    <ChecklistItem text="Treating surgeon's qualifications have been reviewed" />
                    <ChecklistItem text="Surgeon has experience relevant to the patient's condition" />
                    <ChecklistItem text="Hospital accreditation has been verified where applicable" />
                    <ChecklistItem text="Required diagnostic facilities are available" />
                    <ChecklistItem text="Emergency and critical-care support is available" />
                    <ChecklistItem text="Rehabilitation services are available" />
                    <ChecklistItem text="Implant options have been discussed" />
                    <ChecklistItem text="International-patient services have been confirmed" />
                    <ChecklistItem text="Treatment estimate is provided in writing" />
                    <ChecklistItem text="Inclusions and exclusions are understood" />
                    <ChecklistItem text="Follow-up arrangements are clear" />
                    <ChecklistItem text="Expected duration of stay has been discussed" />
                  </div>
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="mb-12">
                  <SectionHeading>Frequently Asked Questions</SectionHeading>

                  <div className="space-y-4">
                    <FAQ
                      question="Which is the best hospital for hip replacement surgery in India?"
                      answer="There is no single hospital that is best for every patient. The appropriate hospital depends on the patient's diagnosis, required procedure, surgeon expertise, hospital facilities, rehabilitation needs and other individual factors."
                    />
                    <FAQ
                      question="Which Indian cities are known for hip replacement treatment?"
                      answer="Delhi NCR, Mumbai, Bengaluru, Chennai and Hyderabad are among the major Indian healthcare centres where patients can find hospitals providing orthopaedic and joint-replacement services. Other cities also have established orthopaedic centres."
                    />
                    <FAQ
                      question="How should I choose a hospital for hip replacement in India?"
                      answer="Compare the orthopaedic department, surgeon's relevant experience, hospital facilities, accreditation where applicable, rehabilitation services, international-patient support, treatment inclusions and follow-up arrangements."
                    />
                    <FAQ
                      question="Should I choose a hospital based only on cost?"
                      answer="No. Treatment cost is one consideration, but patients should also evaluate clinical expertise, hospital facilities, implant options, rehabilitation, safety systems and continuity of care."
                    />
                    <FAQ
                      question="Can international patients choose a hospital before travelling to India?"
                      answer="Yes. International patients can research hospitals and specialists and share their medical records for preliminary evaluation before travelling. The final treatment plan may require an in-person assessment."
                    />
                    <FAQ
                      question="Do all hospitals offer robotic hip replacement?"
                      answer="No. Technology-assisted hip replacement is not available at every hospital, and the availability of specific robotic systems varies by centre. More importantly, whether robotic or another surgical approach is appropriate depends on the patient's clinical situation and the surgeon's assessment."
                    />
                  </div>
                </section>

                {/* FINAL CTA BOX */}
                <section className="mb-12">
                  <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                      Choose a Hospital Based on Your Medical Needs
                    </h2>
                
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Selecting a hospital for hip replacement surgery in India should be based on more than a ranking or advertised price. A well-informed decision considers the hospital's orthopaedic services, the relevant experience of the treating surgeon, facilities, accreditation where applicable, rehabilitation support, international-patient services and the transparency of the treatment plan.
                    </p>
                    
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                      For international patients, early medical evaluation and hospital coordination can make the treatment journey easier to plan.
                    </p>
                
                    {/* BUTTON WITH MARGIN BOTTOM */}
                    <div className="mb-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                      >
                        Request Hospital & Treatment Assessment →
                      </Link>
                    </div>
                      
                    {/* MEDICAL DISCLAIMER NOTE */}
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed border-t border-[#DCE5F0] pt-4 mt-6">
                      <strong>Disclaimer:</strong> This information is intended for general educational purposes and does not replace medical advice. Hospital availability, doctors, facilities, accreditation and treatment options can change. Patients should verify current information directly with the hospital and treating healthcare professional before making treatment or travel decisions.
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

          {/* RIGHT SIDEBAR - CTA & RELATED ARTICLES */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            
            {/* CTA WIDGET */}
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

            {/* RELATED ARTICLES WIDGET */}
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

function SubHeading({ children }) {
  return (
    <h3 className="text-xl md:text-2xl font-bold text-[#053161] mt-8 mb-3">
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

function TableRow({ factor, check }) {
  return (
    <tr className="hover:bg-[#F8FAFD] transition">
      <td className="p-4 font-semibold text-[#053161] align-top">{factor}</td>
      <td className="p-4 align-top">{check}</td>
    </tr>
  );
}

function CityCard({ city, text }) {
  return (
    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
      <h3 className="text-lg md:text-xl font-bold text-[#053161] mb-2">{city}</h3>
      <p className="text-[#425466] text-base leading-7">{text}</p>
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

function ChecklistItem({ text }) {
  return (
    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
      <span className="text-[#053161] text-sm md:text-base font-medium">{text}</span>
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

export default BestHospitalsHipReplacementPage;

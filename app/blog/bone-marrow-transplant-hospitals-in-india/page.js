import Link from "next/link";
import CTA from "../../../Component/cta.jsx";
import ContactForm from "../../../Component/ContactForm.jsx";
import Sidebar from "../../../Component/Sidebar.jsx";

export const metadata = {
  title: "Bone Marrow Transplant Hospitals in India",
  description:
    "Explore bone marrow transplant hospitals in India, treatment options, specialist care, costs, and support for international patients travelling to India.",
};

const moreRelatedLinks = [
  { title: "Hip Replacement Surgery Cost in India for International Patients", href: "/cost-of-treatment/hip-replacement-surgery-cost-india-international-patients" },
  { title: "Hip Replacement Surgery for International Patients", href: "/blog/hip-replacement-surgery-for-international-patients" },
  { title: "Best Hospitals for Hip Replacement Surgery in India", href: "/blog/best-hospitals-for-hip-replacement-surgery-in-india" },
  { title: "Hip Replacement Surgery Success Rate", href: "/blog/hip-replacement-surgery-success-rate" },
  { title: "What Are the Negatives of a Hip Replacement?", href: "/blog/what-are-the-negatives-of-a-hip-replacement" },
  { title: "Hip Replacement Surgery Risks and Complications", href: "/blog/hip-replacement-surgery-risks-complications" },
  { title: "Top 10 Hospitals in India 2026 for International Patients", href: "/top-hospitals/top-10-hospitals-india-for-international-patients" },
  { title: "Medical Visa for Treatment in India: Cost, Requirements & Application Process", href: "/services/medical-visa-for-treatment-in-india" },
];

export default function BoneMarrowTransplantHospitalsInIndiaPage() {
  return (
    <main className="bg-[#F6F9FD] text-[#053161]">
      {/* HERO SECTION (BANNER IMAGE REMOVED) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#053161] via-[#1B4F9C] to-[#6796CC]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm font-medium">
              Haematology • Stem Cell Treatment Guide
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Bone Marrow Transplant Hospitals in India
            </h1>

            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl">
              A bone marrow transplant, also known as a stem cell transplant, is a specialised treatment used for selected blood cancers, blood disorders and certain conditions affecting the blood-forming system.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-10 items-start">
          
          {/* LEFT CONTAINER (ARTICLE & MAIN CONTENT) */}
          <div className="space-y-8">
            
            {/* IN THIS PAGE NAVIGATION */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-4">
                In This Page
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium">
                <a href="#overview" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Overview
                </a>
                <a href="#suitable-hospital" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • What Makes a Hospital Suitable?
                </a>
                <a href="#hospitals-in-india" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • BMT Hospitals in India
                </a>
                <a href="#how-selected" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • How Right Hospital is Selected
                </a>
                <a href="#cost" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Cost in India
                </a>
                <a href="#patient-journey" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Patient Journey
                </a>
                <a href="#questions-to-ask" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Questions to Ask
                </a>
                <a href="#ekam-support" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • How Ekam Helps
                </a>
                <a href="#faqs" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • FAQs
                </a>
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <article className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12">
                
                {/* OVERVIEW SECTION */}
                <section id="overview" className="mb-12">
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    A bone marrow transplant, also known as a stem cell transplant, is a specialised treatment used for selected blood cancers, blood disorders and certain conditions affecting the blood-forming system. Because the treatment involves detailed testing, specialised medical teams and prolonged monitoring, choosing an appropriate transplant hospital is an important part of the treatment journey.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    India has hospitals with dedicated haematology, haemato-oncology and stem cell transplant departments. For patients travelling from overseas, the decision may also involve consultation arrangements, medical records, treatment estimates, accommodation and follow-up planning.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Ekam helps international patients coordinate these aspects and connect with appropriate hospitals and specialists in India based on their individual medical requirements.
                  </p>
                </section>

                {/* WHAT MAKES A HOSPITAL SUITABLE */}
                <section id="suitable-hospital" className="mb-12">
                  <SectionHeading>What Makes a Bone Marrow Transplant Hospital Suitable?</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    There is no single hospital that is appropriate for every patient. The right transplant centre depends on the patient&apos;s diagnosis, age, previous treatment, general health and the type of transplant being considered.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6 font-semibold text-[#053161]">
                    Before selecting a hospital, patients may consider the following factors:
                  </p>

                  <SubHeading>Specialist Transplant Team</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Bone marrow transplantation requires coordination between different areas of medical care. A hospital may have haematologists, haemato-oncologists, transplant specialists, intensive-care teams, laboratory specialists and other healthcare professionals involved in patient management.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Patients should ask which specialist will assess their case and whether the hospital manages their particular condition.
                  </p>

                  <SubHeading>Transplant Options</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-3">
                    The transplant approach varies from one patient to another. Depending on the medical situation, a transplant centre may provide procedures such as:
                  </p>
                  <BulletList
                    items={[
                      "Autologous stem cell transplantation",
                      "Allogeneic stem cell transplantation",
                      "Haploidentical transplantation",
                      "Transplants using different appropriate stem-cell sources",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    The treating team decides which approach is medically appropriate after reviewing the patient&apos;s condition.
                  </p>

                  <SubHeading>Pre-Transplant Testing</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A transplant programme generally requires detailed preparation before the procedure. The evaluation may involve blood investigations, imaging, organ-function testing, disease-specific tests and other assessments.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    For donor-based transplantation, additional compatibility and donor investigations may also be required.
                  </p>

                  <SubHeading>Donor and Stem Cell Facilities</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients who require an allogeneic transplant may need an appropriate donor. The medical team assesses donor compatibility and determines which donor or stem-cell source can be considered.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Patients should discuss donor testing and stem-cell collection with the hospital before making treatment arrangements.
                  </p>

                  <SubHeading>Monitoring and Supportive Care</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The period following transplantation can require close medical observation. A suitable centre should have the facilities and medical support required for monitoring blood counts, infections, treatment-related effects and other potential complications.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    The level of monitoring varies according to the transplant procedure and individual patient requirements.
                  </p>
                </section>

                {/* HOSPITALS IN INDIA */}
                <section id="hospitals-in-india" className="mb-12">
                  <SectionHeading>Bone Marrow Transplant Hospitals in India</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    India has several hospital groups with specialised oncology, haematology and stem cell transplant services. The services available can differ between hospitals and locations, so international patients should confirm the relevant programme before travelling.
                  </p>

                  <div className="space-y-6">
                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="text-xl font-bold text-[#053161] mb-2">Max Healthcare</h4>
                      <p className="text-[#425466] text-base md:text-lg leading-8">
                        Max Healthcare has specialised departments covering cancer care, haematology and transplant-related treatment. Patients can undergo an evaluation with an appropriate specialist to determine whether a bone marrow or stem cell transplant may be considered for their condition. Patients should share their medical history and available reports before travelling so that the medical team can determine the next steps.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="text-xl font-bold text-[#053161] mb-2">Yatharth Hospitals</h4>
                      <p className="text-[#425466] text-base md:text-lg leading-8">
                        Yatharth Hospitals provides specialised services in areas including haematology and haemato-oncology. Its specialist teams include doctors involved in paediatric haemato-oncology and bone marrow transplantation. The appropriate treatment pathway is decided following a detailed medical assessment.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="text-xl font-bold text-[#053161] mb-2">Apollo Hospitals</h4>
                      <p className="text-[#425466] text-base md:text-lg leading-8">
                        Apollo Hospitals provides specialised cancer and haematology services, including stem cell and bone marrow transplant programmes at selected locations. Patients should confirm the availability of the required transplant service and relevant specialist at the particular Apollo hospital they are considering.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="text-xl font-bold text-[#053161] mb-2">Fortis Healthcare</h4>
                      <p className="text-[#425466] text-base md:text-lg leading-8">
                        Fortis Healthcare provides specialised medical care across oncology and haematology, with transplant-related services available at selected centres. Patients can request a specialist evaluation to understand whether transplantation is suitable for their diagnosis and treatment history.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="text-xl font-bold text-[#053161] mb-2">Medanta – The Medicity</h4>
                      <p className="text-[#425466] text-base md:text-lg leading-8">
                        Medanta provides specialised services in cancer care and haematology through multidisciplinary teams. Patients considering transplantation can undergo an assessment to determine their eligibility and potential treatment pathway.
                      </p>
                    </div>
                  </div>
                </section>

                {/* HOW RIGHT HOSPITAL IS SELECTED */}
                <section id="how-selected" className="mb-12">
                  <SectionHeading>How Is the Right Hospital Selected for an International Patient?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    For patients travelling from another country, hospital selection can involve additional considerations. Medical suitability should remain the starting point, followed by practical factors related to the patient&apos;s journey.
                  </p>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-3 font-semibold text-[#053161]">
                    Patients may compare:
                  </p>

                  <BulletList
                    items={[
                      "Specialist expertise relevant to their diagnosis",
                      "Type of transplant available",
                      "Diagnostic and laboratory facilities",
                      "Donor evaluation and compatibility testing",
                      "Inpatient and post-transplant monitoring",
                      "Availability of supportive medical services",
                      "Expected duration of treatment and hospital stay",
                      "Follow-up requirements",
                      "Estimated treatment expenses",
                      "International patient coordination services",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-4">
                    A hospital should be selected after reviewing the patient&apos;s medical records and discussing the treatment plan with the relevant specialist.
                  </p>
                </section>

                {/* COST SECTION */}
                <section id="cost" className="mb-12">
                  <SectionHeading>Bone Marrow Transplant Cost in India</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The total expense of a bone marrow transplant can differ significantly between patients. There is no universal price because treatment requirements depend on the individual&apos;s medical situation.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-3 font-semibold text-[#053161]">
                    Factors that can affect the overall cost include:
                  </p>

                  <BulletList
                    items={[
                      "Type of transplant",
                      "Underlying disease",
                      "Pre-transplant investigations",
                      "Donor evaluation",
                      "Stem cell collection",
                      "Conditioning treatment",
                      "Hospitalisation",
                      "Medicines",
                      "Blood and platelet support",
                      "Management of complications",
                      "Follow-up treatment",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-4">
                    International patients should request a personalised estimate after their medical records have been reviewed. The initial estimate may change if additional investigations or treatment become necessary.
                  </p>
                </section>

                {/* PATIENT JOURNEY */}
                <section id="patient-journey" className="mb-12">
                  <SectionHeading>Bone Marrow Transplant Journey for International Patients</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Travelling to India for a complex medical procedure requires preparation before arrival. Ekam can help patients coordinate the different stages of the journey.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 1: Share Medical Information</h4>
                      <p className="text-[#425466] leading-7">Patients can provide available medical records, laboratory results, imaging reports, biopsy reports and previous treatment details for initial review.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 2: Specialist Review</h4>
                      <p className="text-[#425466] leading-7">The relevant specialist reviews the available information and may recommend additional investigations or a consultation before confirming the treatment approach.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 3: Hospital Coordination</h4>
                      <p className="text-[#425466] leading-7">Once a suitable treatment pathway is identified, Ekam can assist with coordinating the consultation and hospital-related arrangements.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 4: Treatment Planning</h4>
                      <p className="text-[#425466] leading-7">The treating hospital develops the medical plan. Depending on the case, this may involve donor evaluation, conditioning therapy, stem cell collection and transplantation.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 5: Travel and Stay Arrangements</h4>
                      <p className="text-[#425466] leading-7">International patients may need assistance with accommodation, local transportation and other practical arrangements during their stay in India.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 6: Post-Transplant Follow-Up</h4>
                      <p className="text-[#425466] leading-7">Bone marrow transplantation does not end when the patient leaves the hospital. Follow-up appointments, investigations and medicines may continue for an extended period. The treating specialist determines the required follow-up schedule.</p>
                    </div>
                  </div>

                  <SubHeading>Support for Patients from Other Countries</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Ekam also supports international patients travelling from Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Sudan, South Sudan, Zambia, Zimbabwe, Rwanda, DR Congo, Sierra Leone, Liberia, Malawi, Papua New Guinea and Solomon Islands.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8">
                    The support provided can vary according to the patient&apos;s medical and travel requirements. Patients can contact Ekam to discuss their individual treatment needs and understand the available international patient assistance.
                  </p>
                </section>

                {/* QUESTIONS TO ASK */}
                <section id="questions-to-ask" className="mb-12">
                  <SectionHeading>Questions to Ask Before Choosing a Bone Marrow Transplant Hospital</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Before travelling to India, patients may find it useful to discuss the following questions with the hospital:
                  </p>

                  <BulletList
                    items={[
                      "Does the hospital treat my specific condition?",
                      "Which transplant specialist will evaluate my case?",
                      "What medical reports should I provide?",
                      "Will I need donor compatibility testing?",
                      "Which type of transplant may be considered?",
                      "What investigations are required before treatment?",
                      "What is included in the estimated treatment cost?",
                      "How long could the hospital stay be?",
                      "What follow-up care will I need after transplantation?",
                      "What arrangements should I make before travelling to India?",
                    ]}
                  />
                </section>

                {/* HOW EKAM HELPS */}
                <section id="ekam-support" className="mb-12">
                  <SectionHeading>How Ekam Helps International Patients</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Planning treatment in another country can involve multiple medical and logistical steps. Ekam helps international patients coordinate these steps by assisting with specialist consultations, hospital communication and treatment planning.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-3 font-semibold text-[#053161]">
                    Depending on the patient&apos;s requirements, support may include:
                  </p>

                  <BulletList
                    items={[
                      "Medical record coordination",
                      "Specialist consultation coordination",
                      "Hospital coordination",
                      "Treatment cost estimates",
                      "Travel assistance",
                      "Accommodation support",
                      "Local coordination during treatment",
                      "Follow-up coordination",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 italic bg-[#F8FAFD] p-4 rounded-xl border border-[#E1E8F0] mt-4">
                    Ekam does not determine whether a patient requires transplantation. The diagnosis, eligibility for transplantation, treatment method and final medical decisions are made by the treating healthcare professionals after clinical evaluation.
                  </p>
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="mb-12">
                  <SectionHeading>Frequently Asked Questions</SectionHeading>

                  <div className="space-y-4">
                    <FAQ
                      question="Which hospitals provide bone marrow transplant treatment in India?"
                      answer="Several hospitals in India provide specialised haematology, haemato-oncology and stem cell transplant services. These include major hospital groups such as Max Healthcare, Yatharth Hospitals, Apollo Hospitals, Fortis Healthcare and Medanta. Availability of specific transplant programmes can vary by hospital and location."
                    />
                    <FAQ
                      question="What is the cost of a bone marrow transplant in India?"
                      answer="The cost depends on the transplant type, patient's condition, investigations, donor requirements, hospital stay, medicines and other treatment-related factors. An individual estimate should be obtained after medical assessment."
                    />
                    <FAQ
                      question="Can international patients receive bone marrow transplant treatment in India?"
                      answer="International patients can seek evaluation and treatment at specialised Indian hospitals, subject to medical assessment, treatment suitability and hospital acceptance."
                    />
                    <FAQ
                      question="How can I choose a bone marrow transplant hospital in India?"
                      answer="Consider the hospital's relevant specialist team, transplant services, diagnostic facilities, donor evaluation capabilities, supportive care and follow-up arrangements. The patient's medical requirements should guide the final decision."
                    />
                    <FAQ
                      question="Can Ekam arrange a consultation with a bone marrow transplant specialist?"
                      answer="Ekam can help international patients coordinate specialist consultations by collecting relevant medical information and communicating with appropriate hospitals according to the patient's requirements."
                    />
                    <FAQ
                      question="Do all bone marrow transplant patients need a donor?"
                      answer="No. An autologous transplant uses the patient's own stem cells. An allogeneic transplant uses stem cells obtained from another person. The patient's condition and medical evaluation determine the best course of action."
                    />
                  </div>
                </section>

                {/* CONCLUSION */}
                <section className="mb-12">
                  <SectionHeading>Conclusion</SectionHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Choosing among bone marrow transplant hospitals in India should begin with the patient&apos;s medical requirements rather than simply comparing hospitals or prices. Specialist expertise, transplant facilities, donor assessment, supportive care and follow-up planning are important considerations.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8">
                    For international patients, medical coordination is equally important. Ekam can assist patients from Mauritius, Fiji, Ghana, Maldives and other countries with specialist consultations, hospital coordination, treatment estimates and practical arrangements for their medical journey in India.
                  </p>
                </section>

                {/* CTA COMPONENT AT END OF ARTICLE */}
                <CTA />

              </div>
            </article>

            {/* MORE RELATED LINKS (BOTTOM LEFT) */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#053161] mb-5">
                More Related Links
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                {moreRelatedLinks.map((article, index) => (
                  <Link
                    key={index}
                    href={article.href}
                    className="block text-[#425466] hover:text-[#1B4F9C] hover:font-semibold transition-all py-1.5 border-b border-gray-100"
                  >
                    • {article.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR (CONTAINS CONTACT FORM & SIDEBAR COMPONENTS) */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            {/* CONTACT FORM ADDED IN RIGHT SIDEBAR */}
            <ContactForm />

            {/* SIDEBAR COMPONENT */}
            <Sidebar />
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
          <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-[#1B4F9C]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
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

import Link from "next/link";

export const metadata = {
  title:
    "Medical Visa for Treatment in India: Cost, Requirements & Application Process",
  description:
    "Learn about the medical visa for treatment in India, including visa cost, eligibility, required documents, and the application process for international patients.",
};

export default function MedicalVisaServicePage() {
  return (
    <main className="bg-[#F8FAFC] text-[#0F172A] font-sans">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#1E3A8A] to-[#3B82F6] text-white py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-2xl" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 mb-6 text-sm font-medium backdrop-blur-md">
              <span>✈️</span> International Patient Assistance Services
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white">
              Medical Visa for Treatment in India: Cost, Requirements &
              Application Process
            </h1>

            <p className="text-lg md:text-xl text-blue-100 leading-relaxed font-light">
              International patients travelling to India for medical treatment may
              need to obtain an appropriate medical visa before travelling. The visa
              process is an important part of planning treatment abroad,
              particularly for patients travelling for procedures such as hip
              replacement surgery, cancer treatment, cardiac procedures, IVF and
              other specialized medical care.
            </p>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/15">
              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 block uppercase tracking-wider font-semibold">Purpose</span>
                <span className="text-sm md:text-base font-bold text-white">Medical Treatment</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10">
                <span className="text-xs text-blue-200 block uppercase tracking-wider font-semibold">Category</span>
                <span className="text-sm md:text-base font-bold text-white">Medical / e-Medical Visa</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-3.5 rounded-xl border border-white/10 col-span-2 md:col-span-1">
                <span className="text-xs text-blue-200 block uppercase tracking-wider font-semibold">Attendants</span>
                <span className="text-sm md:text-base font-bold text-white">Medical Attendant Visa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-10">
          
          {/* MAIN SERVICE CONTENT */}
          <article className="space-y-10">
            
            {/* INTRO CARD */}
            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                The Indian medical visa is intended for eligible foreign nationals seeking medical treatment in India. Visa requirements, fees, permitted duration and application procedures can vary according to nationality and the applicable visa rules.
              </p>
              <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-amber-900 text-base leading-relaxed">
                Patients should always verify the latest requirements through the official Indian visa authorities before making travel arrangements.
              </div>
            </div>

            {/* WHAT IS A MEDICAL VISA */}
            <section id="what-is-visa" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>What Is a Medical Visa for India?</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                A medical visa is a visa category intended for eligible foreign nationals who need to travel to India for medical treatment.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                Depending on the applicable rules, patients may need documentation from an Indian hospital or recognized healthcare provider confirming the proposed treatment.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                The medical visa process is separate from the medical treatment itself. Obtaining a visa does not guarantee that a particular treatment, hospital admission or surgical procedure will be provided.
              </p>
            </section>

            {/* WHO NEEDS A MEDICAL VISA */}
            <section id="who-needs" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>Who Needs a Medical Visa for Treatment in India?</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                Foreign nationals who are travelling to India specifically to obtain medical treatment may need a medical visa or an applicable electronic medical visa, depending on their nationality and eligibility.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                The requirements can differ between countries.
              </p>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
                <p className="font-bold text-[#0A2540] text-lg mb-4">Before travelling, patients should check:</p>
                <ChecklistGrid
                  items={[
                    "Whether their nationality is eligible",
                    "Which visa category applies",
                    "Whether an e-Medical Visa is available",
                    "Required supporting documents",
                    "Visa fee",
                    "Permitted duration of stay",
                    "Number of permitted entries",
                    "Conditions attached to the visa",
                  ]}
                />
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                The official Indian visa portal should be treated as the primary source for current visa requirements.
              </p>
            </section>

            {/* VISA COST & EXAMINATION COST */}
            <section id="cost-details" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>How Much Does a Medical Visa Cost in India?</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                There is no single medical-visa fee that applies to every international patient.
              </p>
              <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed mb-3">
                Visa fees can vary according to factors such as:
              </p>
              <BulletList
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
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4 mb-4">
                For this reason, patients should not rely on a fixed price quoted on an unofficial website.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                The visa fee should be checked on the official Indian visa application platform applicable to the patient's nationality.
              </p>

              <div className="border-t border-slate-200 pt-8">
                <SubHeading>What About the Cost of a Medical Examination for a Visa?</SubHeading>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                  A medical visa fee and a medical examination fee are two different expenses.
                </p>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                  If a patient's visa or immigration process requires a medical examination, the examination is generally performed by an approved or authorized medical provider according to the applicable requirements.
                </p>

                <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed mb-3">
                  The cost of such an examination can vary depending on:
                </p>
                <BulletList
                  items={[
                    "Country where the examination is performed",
                    "Approved medical centre",
                    "Tests required",
                    "Type of examination",
                    "Applicant's individual circumstances",
                  ]}
                />

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4">
                  Therefore, the question “How much does a visa medical cost in India?” should be clarified based on whether the patient means the Indian medical-visa application fee or the cost of a medical examination.
                </p>
              </div>
            </section>

            {/* TOURIST VS MEDICAL */}
            <section id="tourist-vs-medical" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>Is a Medical Visa Different From a Tourist Visa?</ServiceSectionHeading>

              <p className="text-slate-800 font-bold text-xl mb-3 text-blue-600">Yes.</p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                A tourist visa is intended for tourism and other permitted non-medical purposes, while a medical visa is designed for eligible travellers seeking medical treatment.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                Patients should select the visa category appropriate to their purpose of travel and comply with the conditions attached to that visa.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold text-rose-600">
                Travelling for medical treatment under an inappropriate visa category can create avoidable immigration problems.
              </p>
            </section>

            {/* REQUIRED DOCUMENTS */}
            <section id="documents" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>What Documents Are Required for an Indian Medical Visa?</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                The exact documentation depends on the applicant's nationality and visa category.
              </p>

              <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed mb-3">
                Commonly requested information may include:
              </p>
              <BulletList
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

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4 mb-8">
                Additional documents may be requested depending on the applicant's circumstances. Patients should check the current official requirements before submitting an application.
              </p>

              <div className="bg-blue-50/70 rounded-xl p-6 border border-blue-100">
                <SubHeading>Medical Invitation or Hospital Letter</SubHeading>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                  Patients travelling to India for planned treatment may need documentation from the Indian hospital or healthcare provider.
                </p>

                <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed mb-3">
                  The document may contain information such as:
                </p>
                <BulletList
                  items={[
                    "Patient's name",
                    "Proposed treatment",
                    "Hospital or healthcare provider",
                    "Expected treatment period",
                    "Relevant medical information",
                    "Hospital contact details",
                  ]}
                />

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4 mb-3">
                  The exact format and requirements depend on the applicable visa process.
                </p>
                <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed">
                  International patients should obtain the required documentation from the hospital before submitting their visa application.
                </p>
              </div>
            </section>

            {/* APPLICATION PROCESS STEPS */}
            <section id="how-to-apply" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>How to Apply for a Medical Visa for India</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                The general process involves several stages.
              </p>

              <div className="space-y-6">
                <StepCard
                  step="Step 1"
                  title="Identify the Appropriate Visa Category"
                  desc="First, determine which Indian medical visa option is applicable to your nationality and treatment purpose."
                />
                <StepCard
                  step="Step 2"
                  title="Select an Indian Healthcare Provider"
                  desc="Patients should identify an appropriate hospital or healthcare provider and discuss their treatment requirements. For hip replacement patients, for example, the medical team may review available medical records before confirming an appropriate consultation or treatment plan."
                />
                <StepCard
                  step="Step 3"
                  title="Obtain Required Medical Documentation"
                  desc="The hospital or healthcare provider may provide the documentation required for the visa application."
                />
                <StepCard
                  step="Step 4"
                  title="Complete the Visa Application"
                  desc="Submit the application through the official Indian visa platform or the applicable Indian diplomatic/consular channel. Applicants should ensure that the information entered in the application matches their passport and supporting documents."
                />
                <StepCard
                  step="Step 5"
                  title="Pay the Applicable Visa Fee"
                  desc="The applicable fee depends on the applicant's nationality and visa category. Avoid relying on a third-party website's fee table if the official visa portal provides the current fee information."
                />
                <StepCard
                  step="Step 6"
                  title="Submit Supporting Documents"
                  desc="Upload or submit the documents requested during the application process."
                />
                <StepCard
                  step="Step 7"
                  title="Wait for Visa Processing"
                  desc="Processing times can vary. Applicants should avoid booking non-refundable travel arrangements until they understand the status and conditions of their visa."
                />
              </div>
            </section>

            {/* FAMILY & ATTENDANTS */}
            <section id="attendants" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>Can a Family Member Accompany a Medical Patient?</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                Eligible family members or attendants may be able to travel to India under a Medical Attendant Visa or applicable electronic medical attendant visa.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                The eligibility and number of attendants permitted can depend on the patient's visa category, nationality and current Indian immigration rules.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                Patients should verify the latest requirements before making travel arrangements.
              </p>

              <div className="border-t border-slate-200 pt-8">
                <SubHeading>Medical Attendant Visa for India</SubHeading>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                  A patient travelling internationally for major treatment may require support from a spouse, parent, adult child or another accompanying person.
                </p>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                  The medical attendant's visa application is separate from the patient's medical visa, although the two applications may be connected to the same treatment journey.
                </p>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  The attendant should carry appropriate documentation showing their relationship to the patient and the reason for accompanying them when required.
                </p>
              </div>
            </section>

            {/* DURATION & EXTENSIONS */}
            <section id="stay-duration" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>How Long Can a Medical Visa Holder Stay in India?</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                The permitted duration of stay depends on the visa issued and the applicable rules.
              </p>

              <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed mb-3">
                Patients should check:
              </p>
              <BulletList
                items={[
                  "Visa validity",
                  "Permitted stay",
                  "Number of entries",
                  "Registration requirements, where applicable",
                  "Extension provisions, if any",
                ]}
              />

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4 mb-4">
                A visa's validity period and the permitted duration of stay are not necessarily the same thing.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                Patients should follow the conditions stated on their issued visa.
              </p>

              <div className="border-t border-slate-200 pt-8">
                <SubHeading>Can a Medical Visa Be Extended?</SubHeading>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                  Extension rules can depend on the patient's visa category and individual circumstances.
                </p>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                  Patients who require a longer stay because of ongoing treatment should speak with the appropriate Indian immigration authorities or their hospital's international-patient department.
                </p>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed font-semibold text-rose-600">
                  Patients should not simply remain in India beyond the permitted period without confirming the applicable immigration requirements.
                </p>
              </div>
            </section>

            {/* PRE-TRAVEL PLANNING */}
            <section id="pre-travel" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>Can I Travel to India Before My Treatment Is Confirmed?</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                Patients should ideally have a clear treatment plan or medical consultation arrangement before travelling.
              </p>

              <p className="text-slate-700 font-semibold text-base md:text-lg leading-relaxed mb-3">
                For planned major surgery, it is particularly useful to:
              </p>
              <BulletList
                items={[
                  "Share medical records",
                  "Obtain preliminary medical guidance",
                  "Identify an appropriate hospital",
                  "Confirm consultation or treatment arrangements",
                  "Obtain the necessary visa documentation",
                  "Apply for the appropriate visa",
                  "Plan travel after the relevant arrangements are confirmed",
                ]}
              />

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mt-4">
                This approach can reduce uncertainty after arrival.
              </p>
            </section>

            {/* ESTIMATED EXPENSES TABLE */}
            <section id="expenses-table" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>Estimated Total Visa-Related Expenses</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                When budgeting for medical travel, patients should consider more than the visa application fee.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#0A2540] text-white text-base">
                      <th className="p-4 font-bold border-b border-slate-200">Expense</th>
                      <th className="p-4 font-bold border-b border-slate-200">What It Covers</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 text-base">
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Medical visa fee</td>
                      <td className="p-4">Government visa application charge</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Medical documents</td>
                      <td className="p-4">Reports and hospital documentation</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Medical examination</td>
                      <td className="p-4">Only where required</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Passport-related expenses</td>
                      <td className="p-4">New or renewed passport, if necessary</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Travel insurance</td>
                      <td className="p-4">If obtained by the patient</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Flights</td>
                      <td className="p-4">Travel to and from India</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Accommodation</td>
                      <td className="p-4">Hotel or other stay</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Local transportation</td>
                      <td className="p-4">Airport and hospital transfers</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 font-semibold text-[#0A2540]">Attendant expenses</td>
                      <td className="p-4">Costs for accompanying family members</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                The actual amount will depend on the patient's country of residence and individual travel arrangements.
              </p>
            </section>

            {/* COMMON MISTAKES */}
            <section id="common-mistakes" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>Common Mistakes International Patients Should Avoid</ServiceSectionHeading>

              <div className="space-y-6">
                <div>
                  <SubHeading>Using an Unofficial Visa Website</SubHeading>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-2">
                    Patients should be careful with websites that appear to be official but are actually private visa-service providers.
                  </p>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    Always verify the application channel and requirements through the official Indian government sources.
                  </p>
                </div>

                <hr className="border-slate-100" />

                <div>
                  <SubHeading>Applying for the Wrong Visa</SubHeading>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-2">
                    The purpose of travel should match the visa category.
                  </p>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    A patient travelling specifically for medical treatment should confirm which visa category applies to them.
                  </p>
                </div>

                <hr className="border-slate-100" />

                <div>
                  <SubHeading>Using Outdated Fee Information</SubHeading>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-2">
                    Visa fees and requirements can change.
                  </p>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    Always check the current fee before submitting the application.
                  </p>
                </div>

                <hr className="border-slate-100" />

                <div>
                  <SubHeading>Booking Travel Too Early</SubHeading>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    Patients should understand the visa processing situation before making non-refundable travel arrangements.
                  </p>
                </div>

                <hr className="border-slate-100" />

                <div>
                  <SubHeading>Ignoring the Attendant's Visa Requirements</SubHeading>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    If a family member is travelling with the patient, they should separately check whether a medical attendant visa is required.
                  </p>
                </div>
              </div>
            </section>

            {/* HOW EKAM SUPPORTS */}
            <section id="ekam-support" className="bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] text-white rounded-2xl p-6 md:p-10 shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                How Ekam Can Support International Patients
              </h2>

              <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
                For patients travelling to India for treatment, Ekam can help coordinate aspects of the medical journey.
              </p>

              <p className="text-white font-semibold text-base md:text-lg leading-relaxed mb-4">
                Depending on the patient's requirements, support may include:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Medical record coordination",
                  "Hospital and specialist coordination",
                  "Treatment-related communication",
                  "Hospital appointment coordination",
                  "Assistance with medical-treatment documentation",
                  "Travel planning support",
                  "Accommodation coordination",
                  "Airport-transfer coordination",
                  "Follow-up coordination",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/10 p-3.5 rounded-xl border border-white/10">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span className="text-sm md:text-base text-white">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-blue-200 text-sm md:text-base leading-relaxed border-t border-white/15 pt-6">
                Visa applications remain subject to Indian immigration and visa rules. Patients should verify eligibility, fees, documentation and application requirements through the official authorities.
              </p>
            </section>

            {/* FAQS */}
            <section id="faqs" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>Frequently Asked Questions</ServiceSectionHeading>

              <div className="space-y-4">
                <FAQ
                  question="How much does a medical visa for India cost?"
                  answer="There is no universal fee. The applicable cost depends on the applicant's nationality, visa category, duration and other applicable factors. Check the official Indian visa portal for the current fee applicable to your application."
                />
                <FAQ
                  question="How much does a medical examination for a visa cost in India?"
                  answer="A medical examination is different from the visa application fee. If an examination is required, its price depends on the medical centre, tests and applicable requirements."
                />
                <FAQ
                  question="Can I apply for an Indian medical visa online?"
                  answer="Eligible applicants may be able to apply through India's official online visa system, depending on their nationality and visa category."
                />
                <FAQ
                  question="Can my family member accompany me to India for treatment?"
                  answer="Eligible attendants may be able to obtain a Medical Attendant Visa or applicable electronic medical attendant visa. The current eligibility rules should be checked before travel."
                />
                <FAQ
                  question="Do I need a hospital letter for a medical visa?"
                  answer="Depending on the visa category and nationality, supporting documentation from the Indian healthcare provider may be required. Patients should check the current official requirements."
                />
                <FAQ
                  question="Can I get a medical visa for hip replacement surgery in India?"
                  answer="Eligible foreign patients may apply for the appropriate Indian medical visa to seek treatment such as hip replacement, subject to the applicable visa rules and medical documentation requirements."
                />
                <FAQ
                  question="Can I extend my medical visa if treatment takes longer?"
                  answer="Extension provisions depend on the applicable visa category and immigration rules. Patients requiring additional time should contact the appropriate Indian immigration authority before their permitted stay expires."
                />
              </div>
            </section>

            {/* PLAN YOUR MEDICAL JOURNEY & FINAL CTA */}
            <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80">
              <ServiceSectionHeading>Plan Your Medical Journey to India</ServiceSectionHeading>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                A medical visa is an important part of planning treatment in India, but it is only one component of an international patient's journey.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
                Before travelling, patients should confirm their medical treatment, hospital arrangements, visa category, required documentation, travel plans and follow-up arrangements.
              </p>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                For the latest visa requirements, fees and eligibility conditions, always refer to the official Indian government visa authorities before submitting an application.
              </p>

              <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                  Planning Medical Treatment in India?
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
                  Ekam can help international patients coordinate aspects of their medical-treatment journey, including hospital and treatment coordination.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#0A2540] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#1E3A8A] transition shadow-md"
                >
                  Get Assistance with Treatment Coordination →
                </Link>

                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-4 mt-8">
                  This page is for general informational purposes and does not constitute immigration or legal advice. Indian visa requirements, fees, eligibility and processing procedures may change. Applicants should verify the latest information with the official Government of India visa authorities before applying.
                </p>
              </div>
            </section>

          </article>

          {/* SIDEBAR NAVIGATION & QUICK CONTACT WIDGET */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            
            {/* ACTION CARD */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#1E3A8A] p-6 text-white shadow-xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 text-2xl">
                ✈️
              </div>
              <h3 className="text-xl font-bold mb-2">
                Planning Medical Travel?
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                Ekam can help coordinate your hospital arrangements, specialist consultations, and treatment journey.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#0A2540] rounded-xl px-5 py-3 font-bold hover:bg-blue-50 transition shadow-sm"
              >
                Start Journey Planning →
              </Link>
            </div>

            {/* QUICK NAVIGATION */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6">
              <h3 className="text-lg font-bold text-[#0A2540] mb-4 pb-3 border-b border-slate-100">
                Service Navigation
              </h3>
              <nav className="space-y-2.5 text-sm">
                <a href="#what-is-visa" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  What Is a Medical Visa?
                </a>
                <a href="#who-needs" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Who Needs a Medical Visa?
                </a>
                <a href="#cost-details" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Visa & Examination Cost
                </a>
                <a href="#tourist-vs-medical" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Tourist vs Medical Visa
                </a>
                <a href="#documents" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Required Documents
                </a>
                <a href="#how-to-apply" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Application Steps
                </a>
                <a href="#attendants" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Attendant Visa
                </a>
                <a href="#stay-duration" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Duration & Extensions
                </a>
                <a href="#expenses-table" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Estimated Expenses Table
                </a>
                <a href="#common-mistakes" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  Common Mistakes to Avoid
                </a>
                <a href="#ekam-support" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  How Ekam Supports You
                </a>
                <a href="#faqs" className="block text-slate-600 hover:text-blue-600 font-medium transition">
                  FAQs
                </a>
              </nav>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}

/* =========================================================
   UI HELPER COMPONENTS (PURITY & STYLING PRESERVED)
========================================================= */

function ServiceSectionHeading({ children }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 pb-3 border-b border-slate-100">
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-xl md:text-2xl font-bold text-[#0A2540] mt-6 mb-3">
      {children}
    </h3>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5 my-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-slate-600 text-base md:text-lg leading-relaxed">
          <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-blue-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ChecklistGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3">
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm md:text-base">
          <span className="text-blue-600 font-bold">✓</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200/80">
      <div className="shrink-0 bg-[#0A2540] text-white font-bold text-xs uppercase px-3 py-1.5 rounded-lg h-fit">
        {step}
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-[#0A2540] mb-2">{title}</h3>
        <p className="text-slate-600 text-base leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 md:p-6">
      <h3 className="text-lg md:text-xl font-bold text-[#0A2540] mb-3">
        {question}
      </h3>
      <p className="text-slate-600 leading-relaxed text-base">
        {answer}
      </p>
    </div>
  );
}

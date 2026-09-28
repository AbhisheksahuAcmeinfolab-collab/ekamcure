import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CTA from "../../../Component/cta.jsx";
import ContactForm from "../../../Component/ContactForm.jsx";
import Sidebar from "../../../Component/Sidebar.jsx";

export const metadata = {
  title: "Bone Marrow Transplant Hospitals in India",
  description:
    "Explore bone marrow transplant hospitals in India, treatment options, specialist care, costs, and support for international patients travelling to India.",
};

export default function BoneMarrowTransplantHospitals() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* MAIN CONTENT AREA */}
            <main className="lg:col-span-2 space-y-12">
              
              {/* HERO / INTRO SECTION */}
              <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
                  Bone Marrow Transplant Hospitals in India
                </h1>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  A bone marrow transplant, also known as a stem cell transplant, is a specialised treatment used for selected blood cancers, blood disorders and certain conditions affecting the blood-forming system. Because the treatment involves detailed testing, specialised medical teams and prolonged monitoring, choosing an appropriate transplant hospital is an important part of the treatment journey.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  India has hospitals with dedicated haematology, haemato-oncology and stem cell transplant departments. For patients travelling from overseas, the decision may also involve consultation arrangements, medical records, treatment estimates, accommodation and follow-up planning.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ekam helps international patients coordinate these aspects and connect with appropriate hospitals and specialists in India based on their individual medical requirements.
                </p>
              </section>

              {/* WHAT MAKES A HOSPITAL SUITABLE */}
              <section id="what-makes-a-hospital-suitable" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  What Makes a Bone Marrow Transplant Hospital Suitable?
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  There is no single hospital that is appropriate for every patient. The right transplant centre depends on the patient's diagnosis, age, previous treatment, general health and the type of transplant being considered.
                </p>
                
                <p className="font-semibold text-gray-800 mb-4">
                  Before selecting a hospital, patients may consider the following factors:
                </p>

                <div className="space-y-6">
                  <div className="border-l-4 border-pink-500 pl-4 bg-pink-50/30 p-4 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Specialist Transplant Team</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Bone marrow transplantation requires coordination between different areas of medical care. A hospital may have haematologists, haemato-oncologists, transplant specialists, intensive-care teams, laboratory specialists and other healthcare professionals involved in patient management.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Patients should ask which specialist will assess their case and whether the hospital manages their particular condition.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4 bg-pink-50/30 p-4 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Transplant Options</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      The transplant approach varies from one patient to another. Depending on the medical situation, a transplant centre may provide procedures such as:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-3">
                      <li>Autologous stem cell transplantation</li>
                      <li>Allogeneic stem cell transplantation</li>
                      <li>Haploidentical transplantation</li>
                      <li>Transplants using different appropriate stem-cell sources</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      The treating team decides which approach is medically appropriate after reviewing the patient's condition.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4 bg-pink-50/30 p-4 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Pre-Transplant Testing</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      A transplant programme generally requires detailed preparation before the procedure. The evaluation may involve blood investigations, imaging, organ-function testing, disease-specific tests and other assessments.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      For donor-based transplantation, additional compatibility and donor investigations may also be required.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4 bg-pink-50/30 p-4 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Donor and Stem Cell Facilities</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Patients who require an allogeneic transplant may need an appropriate donor. The medical team assesses donor compatibility and determines which donor or stem-cell source can be considered.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Patients should discuss donor testing and stem-cell collection with the hospital before making treatment arrangements.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4 bg-pink-50/30 p-4 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Monitoring and Supportive Care</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      The period following transplantation can require close medical observation. A suitable centre should have the facilities and medical support required for monitoring blood counts, infections, treatment-related effects and other potential complications.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The level of monitoring varies according to the transplant procedure and individual patient requirements.
                    </p>
                  </div>
                </div>
              </section>

              {/* HOSPITALS SECTION */}
              <section id="hospitals-in-india" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  Bone Marrow Transplant Hospitals in India
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  India has several hospital groups with specialised oncology, haematology and stem cell transplant services. The services available can differ between hospitals and locations, so international patients should confirm the relevant programme before travelling.
                </p>

                <div className="space-y-6">
                  <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Max Healthcare</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Max Healthcare has specialised departments covering cancer care, haematology and transplant-related treatment. Patients can undergo an evaluation with an appropriate specialist to determine whether a bone marrow or stem cell transplant may be considered for their condition.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Patients should share their medical history and available reports before travelling so that the medical team can determine the next steps.
                    </p>
                  </div>

                  <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Yatharth Hospitals</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Yatharth Hospitals provides specialised services in areas including haematology and haemato-oncology. Its specialist teams include doctors involved in paediatric haemato-oncology and bone marrow transplantation.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The appropriate treatment pathway is decided following a detailed medical assessment.
                    </p>
                  </div>

                  <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Apollo Hospitals</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Apollo Hospitals provides specialised cancer and haematology services, including stem cell and bone marrow transplant programmes at selected locations.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Patients should confirm the availability of the required transplant service and relevant specialist at the particular Apollo hospital they are considering.
                    </p>
                  </div>

                  <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Fortis Healthcare</h3>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      Fortis Healthcare provides specialised medical care across oncology and haematology, with transplant-related services available at selected centres.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Patients can request a specialist evaluation to understand whether transplantation is suitable for their diagnosis and treatment history.
                    </p>
                  </div>

                  <div className="p-5 border border-gray-200 rounded-xl bg-gray-50/50">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Medanta – The Medicity</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Medanta provides specialised services in cancer care and haematology through multidisciplinary teams. Patients considering transplantation can undergo an assessment to determine their eligibility and potential treatment pathway.
                    </p>
                  </div>
                </div>
              </section>

              {/* HOW RIGHT HOSPITAL IS SELECTED */}
              <section id="hospital-selection" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  How Is the Right Hospital Selected for an International Patient?
                </h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  For patients travelling from another country, hospital selection can involve additional considerations. Medical suitability should remain the starting point, followed by practical factors related to the patient's journey.
                </p>
                
                <p className="font-semibold text-gray-800 mb-3">Patients may compare:</p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Specialist expertise relevant to their diagnosis</li>
                  <li>Type of transplant available</li>
                  <li>Diagnostic and laboratory facilities</li>
                  <li>Donor evaluation and compatibility testing</li>
                  <li>Inpatient and post-transplant monitoring</li>
                  <li>Availability of supportive medical services</li>
                  <li>Expected duration of treatment and hospital stay</li>
                  <li>Follow-up requirements</li>
                  <li>Estimated treatment expenses</li>
                  <li>International patient coordination services</li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg border-l-4 border-pink-500">
                  A hospital should be selected after reviewing the patient's medical records and discussing the treatment plan with the relevant specialist.
                </p>
              </section>

              {/* COST SECTION */}
              <section id="transplant-cost" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  Bone Marrow Transplant Cost in India
                </h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  The total expense of a bone marrow transplant can differ significantly between patients. There is no universal price because treatment requirements depend on the individual's medical situation.
                </p>
                
                <p className="font-semibold text-gray-800 mb-3">Factors that can affect the overall cost include:</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 mb-6">
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Type of transplant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Underlying disease</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Pre-transplant investigations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Donor evaluation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Stem cell collection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Conditioning treatment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Hospitalisation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Medicines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Blood and platelet support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Management of complications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Follow-up treatment</span>
                  </li>
                </ul>
                
                <p className="text-gray-700 leading-relaxed">
                  International patients should request a personalised estimate after their medical records have been reviewed. The initial estimate may change if additional investigations or treatment become necessary.
                </p>
              </section>

              {/* TRANSPLANT JOURNEY */}
              <section id="patient-journey" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  Bone Marrow Transplant Journey for International Patients
                </h2>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Travelling to India for a complex medical procedure requires preparation before arrival. Ekam can help patients coordinate the different stages of the journey.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <span className="bg-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">1</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Step 1: Share Medical Information</h3>
                      <p className="text-gray-700 leading-relaxed">Patients can provide available medical records, laboratory results, imaging reports, biopsy reports and previous treatment details for initial review.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="bg-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">2</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Step 2: Specialist Review</h3>
                      <p className="text-gray-700 leading-relaxed">The relevant specialist reviews the available information and may recommend additional investigations or a consultation before confirming the treatment approach.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="bg-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">3</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Step 3: Hospital Coordination</h3>
                      <p className="text-gray-700 leading-relaxed">Once a suitable treatment pathway is identified, Ekam can assist with coordinating the consultation and hospital-related arrangements.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="bg-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">4</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Step 4: Treatment Planning</h3>
                      <p className="text-gray-700 leading-relaxed">The treating hospital develops the medical plan. Depending on the case, this may involve donor evaluation, conditioning therapy, stem cell collection and transplantation.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="bg-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">5</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Step 5: Travel and Stay Arrangements</h3>
                      <p className="text-gray-700 leading-relaxed">International patients may need assistance with accommodation, local transportation and other practical arrangements during their stay in India.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="bg-pink-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">6</span>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">Step 6: Post-Transplant Follow-Up</h3>
                      <p className="text-gray-700 leading-relaxed">Bone marrow transplantation does not end when the patient leaves the hospital. Follow-up appointments, investigations and medicines may continue for an extended period. The treating specialist determines the required follow-up schedule.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SUPPORT FOR PATIENTS FROM OTHER COUNTRIES */}
              <section id="international-support" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  Support for Patients from Other Countries
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ekam also supports international patients travelling from Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Sudan, South Sudan, Zambia, Zimbabwe, Rwanda, DR Congo, Sierra Leone, Liberia, Malawi, Papua New Guinea and Solomon Islands.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  The support provided can vary according to the patient's medical and travel requirements. Patients can contact Ekam to discuss their individual treatment needs and understand the available international patient assistance.
                </p>
              </section>

              {/* QUESTIONS TO ASK */}
              <section id="questions-to-ask" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  Questions to Ask Before Choosing a Bone Marrow Transplant Hospital
                </h2>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Before travelling to India, patients may find it useful to discuss the following questions with the hospital:
                </p>

                <ul className="space-y-2 text-gray-700 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Does the hospital treat my specific condition?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Which transplant specialist will evaluate my case?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>What medical reports should I provide?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Will I need donor compatibility testing?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>Which type of transplant may be considered?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>What investigations are required before treatment?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>What is included in the estimated treatment cost?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>How long could the hospital stay be?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>What follow-up care will I need after transplantation?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-pink-500 font-bold">•</span>
                    <span>What arrangements should I make before travelling to India?</span>
                  </li>
                </ul>
              </section>

              {/* HOW EKAM HELPS */}
              <section id="how-ekam-helps" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  How Ekam Helps International Patients
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Planning treatment in another country can involve multiple medical and logistical steps. Ekam helps international patients coordinate these steps by assisting with specialist consultations, hospital communication and treatment planning.
                </p>
                
                <p className="font-semibold text-gray-800 mb-3">Depending on the patient's requirements, support may include:</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>Medical record coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>Specialist consultation coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>Hospital coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>Treatment cost estimates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>Travel assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>Accommodation support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>Local coordination during treatment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-500"></span>
                    <span>Follow-up coordination</span>
                  </li>
                </ul>
                
                <p className="text-sm text-gray-600 italic bg-gray-50 p-4 rounded-lg">
                  Ekam does not determine whether a patient requires transplantation. The diagnosis, eligibility for transplantation, treatment method and final medical decisions are made by the treating healthcare professionals after clinical evaluation.
                </p>
              </section>

              {/* FREQUENTLY ASKED QUESTIONS */}
              <section id="faq" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Which hospitals provide bone marrow transplant treatment in India?</h3>
                    <p className="text-gray-700 leading-relaxed">Several hospitals in India provide specialised haematology, haemato-oncology and stem cell transplant services. These include major hospital groups such as Max Healthcare, Yatharth Hospitals, Apollo Hospitals, Fortis Healthcare and Medanta. Availability of specific transplant programmes can vary by hospital and location.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">What is the cost of a bone marrow transplant in India?</h3>
                    <p className="text-gray-700 leading-relaxed">The cost depends on the transplant type, patient's condition, investigations, donor requirements, hospital stay, medicines and other treatment-related factors. An individual estimate should be obtained after medical assessment.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Can international patients receive bone marrow transplant treatment in India?</h3>
                    <p className="text-gray-700 leading-relaxed">International patients can seek evaluation and treatment at specialised Indian hospitals, subject to medical assessment, treatment suitability and hospital acceptance.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">How can I choose a bone marrow transplant hospital in India?</h3>
                    <p className="text-gray-700 leading-relaxed">Consider the hospital's relevant specialist team, transplant services, diagnostic facilities, donor evaluation capabilities, supportive care and follow-up arrangements. The patient's medical requirements should guide the final decision.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Can Ekam arrange a consultation with a bone marrow transplant specialist?</h3>
                    <p className="text-gray-700 leading-relaxed">Ekam can help international patients coordinate specialist consultations by collecting relevant medical information and communicating with appropriate hospitals according to the patient's requirements.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">Do all bone marrow transplant patients need a donor?</h3>
                    <p className="text-gray-700 leading-relaxed">No. An autologous transplant uses the patient's own stem cells. An allogeneic transplant uses stem cells obtained from another person. The patient's condition and medical evaluation determine the best course of action.</p>
                  </div>
                </div>
              </section>

              {/* CONCLUSION */}
              <section id="conclusion" className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                  Conclusion
                </h2>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choosing among bone marrow transplant hospitals in India should begin with the patient's medical requirements rather than simply comparing hospitals or prices. Specialist expertise, transplant facilities, donor assessment, supportive care and follow-up planning are important considerations.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  For international patients, medical coordination is equally important. Ekam can assist patients from Mauritius, Fiji, Ghana, Maldives and other countries with specialist consultations, hospital coordination, treatment estimates and practical arrangements for their medical journey in India.
                </p>
              </section>

              <CTA />
            </main>

            {/* SIDEBAR & FORM AREA */}
            <aside className="lg:col-span-1 space-y-8">
              <div className="sticky top-6 space-y-8">
                <ContactForm />
                <Sidebar />
              </div>
            </aside>

          </div>
        </div>
      </div>
    </>
  );
}

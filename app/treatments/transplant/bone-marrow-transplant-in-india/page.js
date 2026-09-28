import Script from "next/script";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../../../Component/ContactForm";

export const metadata = {
  title: "Bone Marrow Transplant in India | Cost & Treatment",
  description:
    "Explore bone marrow transplant in India, including treatment types, cost, recovery, risks and international patient support with Ekam.",
};

export default function BoneMarrowTransplantIndia() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">

        {/* HERO SECTION */}
        <div className="relative bg-gradient-to-r from-[#053161] to-[#6796cc] text-white py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Bone Marrow Transplant in India
            </h1>
          </div>
        </div>

        {/* PAGE LAYOUT */}
        <div className="w-full px-4 lg:px-8 py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8">

            {/* LEFT SIDEBAR (FORM + SIDEBAR CONTENT) */}
            <div className="lg:col-span-3 order-1">
              <div className="lg:sticky lg:top-24">
                <div className="shadow-lg rounded-xl overflow-hidden">
                  {/* Contact Form */}
                  <ContactForm />
                </div>

                {/* ENHANCED SIDEBAR CONTENT BELOW FORM */}
                <div className="mt-6 p-6 bg-white rounded-2xl shadow-xl border border-pink-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-200/40 to-transparent rounded-bl-full -z-0 pointer-events-none" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
                      <span className="w-2.5 h-6 bg-pink-500 rounded-full inline-block"></span>
                      <h3 className="text-lg font-bold text-gray-800 tracking-tight">
                        Related Treatments
                      </h3>
                    </div>

                    <ul className="space-y-2.5 text-sm">
                      {[
                        { title: "Spine Surgery in India", href: "/treatments/best-spine-surgery-in-india" },
                        { title: "IVF Treatments in India", href: "/ivf-treatments-in-india" },
                        { title: "Breast Cancer Treatment", href: "/treatments/breast-cancer-treatment-in-india" },
                        { title: "Heart Valve Surgery", href: "/treatments/heart-valve-surgery-india" },
                        { title: "Glaucoma Surgery", href: "/treatments/glaucoma-surgery-in-india-for-international-patients" },
                        { title: "Knee Replacement Surgery", href: "/treatments/knee-replacement-surgery-in-india" },
                        { title: "Superficial Parotidectomy Surgery", href: "/treatments/superficial-parotidectomy-surgery-india" },
                        { title: "Prostate Cancer Treatment", href: "/treatments/best-prostate-cancer-treatment-india" },
                        { title: "Kidney Transplant", href: "/treatments/kidney-transplant-in-india" },
                        { title: "Cornea Transplant Surgery", href: "/treatments/eye-care/cornea-transplant-surgery-in-india" },
                        { title: "Laser Cataract Surgery", href: "/treatments/eye-care/laser-cataract-surgery-in-india" },
                      ].map((item, idx) => (
                        <li key={idx}>
                          <Link 
                            href={item.href} 
                            className="group flex items-center p-2 rounded-lg hover:bg-pink-50/80 text-gray-700 hover:text-pink-600 transition-all duration-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-2.5 group-hover:scale-125 group-hover:bg-pink-600 transition-all" />
                            <span className="font-medium text-xs md:text-sm">{item.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT MAIN CONTENT */}
            <div className="lg:col-span-7 order-2">
              {/* TABLE OF CONTENTS */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-pink-500 mb-10">
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    In this page
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                  <a href="#advanced-care" className="toc-link">› Advanced BMT Care</a>
                  <a href="#what-is-bmt" className="toc-link">› What Is a Bone Marrow Transplant?</a>
                  <a href="#when-recommended" className="toc-link">› When Is BMT Recommended?</a>
                  <a href="#types-of-bmt" className="toc-link">› Types of Bone Marrow Transplant</a>
                  <a href="#how-performed" className="toc-link">› How Is BMT Performed?</a>
                  <a href="#specialised-hospitals" className="toc-link">› Specialised Hospitals in India</a>
                  <a href="#treatment-journey" className="toc-link">› Treatment Journey in India</a>
                  <a href="#experienced-doctors" className="toc-link">› Experienced BMT Doctors</a>
                  <a href="#ekam-help" className="toc-link">› How Ekam Can Help</a>
                  <a href="#bmt-cost" className="toc-link">› Bone Marrow Transplant Cost</a>
                  <a href="#cost-comparison" className="toc-link">› Cost Comparison by Country</a>
                  <a href="#cost-in-india" className="toc-link">› Cost Breakup in India</a>
                  <a href="#success-factors" className="toc-link">› What Can Affect Success?</a>
                  <a href="#risks-complications" className="toc-link">› Risks & Possible Complications</a>
                  <a href="#recovery" className="toc-link">› Recovery After BMT</a>
                  <a href="#why-choose-india" className="toc-link">› Why Choose India?</a>
                  <a href="#why-choose-ekam" className="toc-link">› Why Choose Ekam</a>
                  <a href="#international-patients" className="toc-link">› International Patients Support</a>
                  <a href="#faq" className="toc-link">› Frequently Asked Questions</a>
                </div>
              </div>

              {/* ADVANCED BMT CARE */}
              <section className="mb-16" id="advanced-care">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Advanced Bone Marrow Transplant Care for International Patients
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A specialized treatment for some blood malignancies, blood disorders, immune system disorders, and other diseases involving the bone marrow or blood-forming cells is bone marrow transplantation, also referred to as stem cell transplantation. A specialized treatment for some blood malignancies, blood disorders, immune system disorders, and other diseases involving the bone marrow or blood-forming cells is bone marrow transplantation, also referred to as stem cell transplantation.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    India has specialised hospitals and transplant centres that provide bone marrow transplant evaluation, donor matching, transplantation and post-transplant care. For international patients, Ekam helps coordinate the medical journey, including hospital coordination, specialist consultations, treatment planning, cost estimates, travel assistance and follow-up support.
                  </p>

                  <p className="text-gray-700 leading-relaxed">
                    If you are considering a bone marrow transplant in India, the appropriate treatment approach depends on the patient's diagnosis, overall health, disease status and availability of a suitable donor or stem-cell source.
                  </p>
                </div>
              </section>

              {/* WHAT IS BMT */}
              <section className="mb-16" id="what-is-bmt">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  What Is a Bone Marrow Transplant?
                </h2>

                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Unhealthy or injured blood-forming stem cells are replaced with healthy stem cells during a bone marrow transplant. Following treatment, the donated cells may aid the bone marrow in producing healthy blood cells.
                  </p>

                  <p className="font-semibold mb-3 text-gray-800">
                    Depending on the patient's condition and treatment plan, stem cells may come from:
                  </p>

                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• The patient themselves — called an autologous transplant</li>
                    <li>• A suitable donor — called an allogeneic transplant</li>
                    <li>• In selected situations, stem cells may be obtained from sources such as peripheral blood, bone marrow or umbilical cord blood</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    The transplant process is highly individualised and is planned by a haematologist or transplant specialist.
                  </p>
                </div>
              </section>

              {/* WHEN IS BMT RECOMMENDED */}
              <section className="mb-16" id="when-recommended">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  When Is Bone Marrow Transplant Recommended?
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <p className="font-semibold mb-3 text-gray-800">
                    For certain patients with disorders like these, a bone marrow or stem cell transplant may be considered :
                  </p>

                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Leukemia</li>
                    <li>• Lymphoma</li>
                    <li>• Multiple myeloma</li>
                    <li>• Aplastic anaemia</li>
                    <li>• Myelodysplastic syndromes</li>
                    <li>• Certain inherited blood disorders</li>
                    <li>• Selected immune system disorders</li>
                    <li>• Other diseases affecting blood-forming cells</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    Transplants are not necessary for all patients with these diseases. The medical team evaluates the diagnosis, disease stage, previous treatments, general health and other clinical factors before recommending transplantation.
                  </p>
                </div>
              </section>

              {/* TYPES OF BMT */}
              <section className="mb-16" id="types-of-bmt">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Types of Bone Marrow Transplant
                </h2>

                {/* AUTOLOGOUS */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">
                    Autologous Stem Cell Transplant
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    An autologous transplant involves the collection and storage of the patient's own stem cells prior to high-dose therapy. The cells are then returned to the patient after the conditioning treatment.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When the patient's own stem cells are suitable for transplantation, this method may be applied to specific malignancies and blood diseases.
                  </p>
                </div>

                {/* ALLOGENEIC */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">
                    Allogeneic Stem Cell Transplant
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Blood-forming stem cells from a donor are used in an allogeneic transplant. The donor may be a sibling, another matched relative or an unrelated donor, depending on the patient's circumstances and donor availability.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Donor matching is an important part of the evaluation because compatibility can influence treatment planning and the risk of certain complications.
                  </p>
                </div>

                {/* HAPLOIDENTICAL */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">
                    Haploidentical Transplant
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    A haploidentical transplant uses a partially matched family donor. When a fully matched donor is unavailable, this strategy can offer an alternative.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Depending on the patient's illness and state of health, the transplant team decides if this strategy is suitable.
                  </p>
                </div>
              </section>

              {/* HOW IS BMT PERFORMED */}
              <section className="mb-16" id="how-performed">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  How Is Bone Marrow Transplant Performed?
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    Typically, a bone marrow transplant takes more than one day to complete. It involves several stages and requires close monitoring by a specialised transplant team.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      num: "1",
                      title: "Medical Evaluation",
                      desc: "Prior to transplantation, the patient has a thorough medical evaluation. This may include blood tests, imaging, disease-specific investigations, organ-function assessment and other tests required by the transplant team.",
                      bg: "bg-gradient-to-br from-blue-50 to-purple-50"
                    },
                    {
                      num: "2",
                      title: "Donor and Stem Cell Assessment",
                      desc: "For an allogeneic transplant, the medical team assesses potential donors and performs compatibility testing. For an autologous transplant, the patient's own stem cells are evaluated and collected.",
                      bg: "bg-white"
                    },
                    {
                      num: "3",
                      title: "Stem Cell Collection",
                      desc: "Depending on the intended transplant and donor or patient characteristics, stem cells may be extracted directly from the bone marrow or from the circulation.",
                      bg: "bg-gradient-to-br from-pink-50 to-purple-50"
                    },
                    {
                      num: "4",
                      title: "Conditioning Treatment",
                      desc: "Before the stem cells are infused, the patient may receive chemotherapy, radiation therapy or a combination of treatments. This stage is known as conditioning. The purpose and intensity of conditioning depend on the underlying disease and transplant protocol.",
                      bg: "bg-white"
                    },
                    {
                      num: "5",
                      title: "Stem Cell Infusion",
                      desc: "The patient's bloodstream is infused with the gathered stem cells. This is generally similar to receiving an intravenous infusion rather than conventional surgery.",
                      bg: "bg-gradient-to-br from-purple-50 to-pink-50"
                    },
                    {
                      num: "6",
                      title: "Engraftment and Monitoring",
                      desc: "Following infusion, the transplanted stem cells migrate to the bone marrow and begin producing new blood cells This process is called engraftment. During this period, patients require close monitoring for infection, blood-count changes, side effects and other complications.",
                      bg: "bg-white"
                    },
                    {
                      num: "7",
                      title: "Recovery and Follow-Up",
                      desc: "Recovery continues after the initial transplant period. Regular blood tests, specialist appointments, medications and monitoring may be required for weeks or months, depending on the patient's condition and type of transplant.",
                      bg: "bg-gradient-to-br from-blue-50 to-purple-50"
                    }
                  ].map((step, idx) => (
                    <div key={idx} className={`${step.bg} rounded-xl shadow-lg p-8`}>
                      <div className="flex items-start gap-4">
                        <span className="bg-pink-500 text-white text-base font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          {step.num}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                          <p className="text-gray-700 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SPECIALISED HOSPITALS */}
              <section className="mb-16" id="specialised-hospitals">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Specialised Bone Marrow Transplant Hospitals in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed">
                    India has specialised hospitals offering bone marrow and stem cell transplant services for eligible patients. Hospitals provide specialist evaluation, donor assessment, transplantation and post-treatment monitoring. For international patients, Ekam can help coordinate consultations, hospital arrangements, treatment estimates and travel support, helping patients from different countries plan their bone marrow transplant journey in India with appropriate medical guidance.
                  </p>
                </div>
              </section>

              {/* TREATMENT JOURNEY */}
              <section className="mb-16" id="treatment-journey">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Bone Marrow Transplant Treatment Journey in India
                </h2>

                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    For international patients, planning treatment abroad involves both medical and logistical arrangements.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ekam can help coordinate the journey from initial medical review through hospital treatment and follow-up planning.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      title: "Before Travelling to India",
                      desc: "Patients can share relevant medical records, previous treatment details, laboratory reports and imaging with the medical coordination team. These records can be reviewed to help identify an appropriate specialist and treatment pathway.",
                      bg: "bg-white"
                    },
                    {
                      title: "Specialist Consultation",
                      desc: "A transplant specialist reviews the available medical information and may recommend additional investigations before confirming the treatment plan.",
                      bg: "bg-gradient-to-br from-blue-50 to-purple-50"
                    },
                    {
                      title: "Hospital Coordination",
                      desc: "Ekam can assist with coordinating consultations and treatment arrangements with appropriate hospitals and transplant centres in India.",
                      bg: "bg-white"
                    },
                    {
                      title: "Treatment Planning",
                      desc: "The final treatment plan is determined by the treating medical team after evaluating the patient's condition. It may include donor testing, conditioning therapy, stem cell transplantation and post-transplant monitoring.",
                      bg: "bg-gradient-to-br from-purple-50 to-pink-50"
                    },
                    {
                      title: "Travel and Stay Support",
                      desc: "International patients may require assistance with travel arrangements, accommodation and other practical aspects of their medical journey.",
                      bg: "bg-white"
                    },
                    {
                      title: "Follow-Up Care",
                      desc: "After transplantation, ongoing medical monitoring is important. Ekam can help international patients understand their follow-up requirements and coordinate communication with the treating team where appropriate.",
                      bg: "bg-gradient-to-br from-pink-50 to-purple-50"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className={`${item.bg} rounded-xl shadow-lg p-8`}>
                      <h3 className="text-xl font-bold text-pink-600 mb-3">{item.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* EXPERIENCED DOCTORS */}
              <section className="mb-16" id="experienced-doctors">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Experienced Bone Marrow Transplant Doctors in India
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
                  <p className="text-gray-700 leading-relaxed">
                    Choosing the right specialist is an important part of planning bone marrow transplant treatment in India. The appropriate doctor may depend on the patient's age, diagnosis, treatment history and type of transplant being considered. International patients can review specialist profiles and discuss their medical records with the treating hospital before travelling.
                  </p>
                </div>

                {/* DR. SATYARANJAN DAS */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">
                    Dr. Satyaranjan Das – Max Healthcare
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dr. Satyaranjan Das is associated with Cancer Care/Oncology at Max Healthcare. Max Healthcare lists Bone Marrow Transplant among its transplant medicine services. International patients can review his official profile and discuss consultation options based on their medical requirements.
                  </p>
                  <p className="font-semibold text-gray-800">
                    Doctor Profile: Dr. Satyaranjan Das – Max Healthcare
                  </p>
                </div>

                {/* DR. CHANDRIKA VERMA */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">
                    Dr. Chandrika Verma – Max Healthcare
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dr. Chandrika Verma is a Paediatric Oncology specialist at Max Healthcare. Her expertise may be relevant for children requiring evaluation and treatment for blood cancers and related conditions, including cases where bone marrow transplant may be considered.
                  </p>
                  <p className="font-semibold text-gray-800">
                    Doctor Profile: Dr. Chandrika Verma – Max Healthcare
                  </p>
                </div>

                {/* DR. (MAJ) RAVI SHANKAR */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-pink-600 mb-4">
                    Dr. (Maj) Ravi Shankar – Yatharth Hospitals
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Dr. (Maj) Ravi Shankar is a Consultant in Paediatric Haemato-Oncology & BMT at Yatharth Hospitals. His profile is particularly relevant for paediatric patients requiring haematology, oncology or bone marrow transplant evaluation.
                  </p>
                  <p className="font-semibold text-gray-800">
                    Doctor Profile: Dr. Ravi Shankar – Yatharth Hospitals
                  </p>
                </div>
              </section>

              {/* HOW EKAM CAN HELP */}
              <section className="mb-16" id="ekam-help">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  How Ekam Can Help International Patients
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed">
                    Ekam can help patients from Mauritius, Fiji, Ghana, Maldives, Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Sudan and other countries understand their treatment options, share medical records with appropriate hospitals, coordinate specialist consultations and assist with international patient arrangements.
                  </p>
                </div>
              </section>

              {/* BMT COST IN INDIA */}
              <section className="mb-16" id="bmt-cost">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Bone Marrow Transplant Cost in India
                </h2>

                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The cost of bone marrow transplant in India varies significantly from one patient to another. It depends on several factors, including:
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 mb-6">
                    <li>• Type of transplant</li>
                    <li>• Underlying disease</li>
                    <li>• Patient's overall health</li>
                    <li>• Donor availability and compatibility testing</li>
                    <li>• Conditioning treatment</li>
                    <li>• Hospital and transplant centre</li>
                    <li>• Medications and supportive care</li>
                    <li>• Length of hospitalisation</li>
                    <li>• Management of complications</li>
                    <li>• Follow-up requirements</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed font-medium">
                    Because these factors can substantially affect the total treatment expense, an exact cost should not be assumed from a general online figure.
                  </p>
                </div>
              </section>

              {/* COST COMPARISON BY COUNTRY */}
              <section className="mb-16" id="cost-comparison">
                <h3 className="text-2xl font-bold text-pink-600 mb-6">
                  Bone Marrow Transplant Cost Comparison by Country
                </h3>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                          <th className="px-6 py-4 font-semibold rounded-tl-lg">Country</th>
                          <th className="px-6 py-4 font-semibold">Estimated Cost in USD</th>
                          <th className="px-6 py-4 font-semibold rounded-tr-lg">Cost Considerations</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-pink-700 border-b border-pink-100">India</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100 font-medium">$15,000–$70,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100 text-sm">Depends on transplant type, donor matching, hospitalisation, conditioning therapy and post-transplant care</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">Turkey</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$36,000–$80,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100 text-sm">Varies according to transplant type, hospital and treatment requirements</td>
                        </tr>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-pink-100">Thailand</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$50,000–$120,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100 text-sm">Depends on the transplant procedure, hospital facilities and supportive care</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">Malaysia</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$35,000–$60,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100 text-sm">Costs vary according to treatment complexity and hospital</td>
                        </tr>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-pink-100">Singapore</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$60,000–$100,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100 text-sm">Influenced by specialist care, hospital facilities and treatment duration</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">Germany</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100">$180,000–$350,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100 text-sm">Costs depend on transplant type, hospitalisation and medical requirements</td>
                        </tr>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-pink-100">Spain</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100">$70,000–$240,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100 text-sm">Varies according to the procedure, hospital and patient-specific care</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 rounded-bl-lg">United States</td>
                          <td className="px-6 py-4 text-gray-700 rounded-br-lg font-medium">$300,000–$700,000+</td>
                          <td className="px-6 py-4 text-gray-700 rounded-br-lg text-sm">Costs may include complex transplant care, hospitalisation and treatment of complications</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-600 text-sm mt-6 italic">
                    Important: The figures above are broad, indicative ranges from publicly available sources. They are not directly comparable hospital packages, and some sources report different ranges for autologous and allogeneic transplantation. The final price must be confirmed by the selected hospital after reviewing the patient's medical records.
                  </p>
                </div>
              </section>

              {/* COST BREAKUP IN INDIA */}
              <section className="mb-16" id="cost-in-india">
                <h3 className="text-2xl font-bold text-pink-600 mb-6">
                  Bone Marrow Transplant Cost Breakdown in India
                </h3>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                          <th className="px-6 py-4 font-semibold rounded-tl-lg">Type of Bone Marrow Transplant</th>
                          <th className="px-6 py-4 font-semibold">Indicative Cost in India*</th>
                          <th className="px-6 py-4 font-semibold rounded-tr-lg">Key Cost Factors</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-pink-100">Autologous Stem Cell Transplant</td>
                          <td className="px-6 py-4 text-pink-700 font-semibold border-b border-pink-100">USD 15,000–25,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100 text-sm">Stem-cell collection, conditioning therapy, hospitalisation and supportive care</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-gray-100">Allogeneic Stem Cell Transplant</td>
                          <td className="px-6 py-4 text-pink-700 font-semibold border-b border-gray-100">USD 25,000–40,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-gray-100 text-sm">Donor matching, stem-cell collection, conditioning, hospitalisation and post-transplant care</td>
                        </tr>
                        <tr className="bg-pink-50">
                          <td className="px-6 py-4 font-semibold text-gray-800 border-b border-pink-100">Haploidentical Stem Cell Transplant</td>
                          <td className="px-6 py-4 text-pink-700 font-semibold border-b border-pink-100">USD 25,000–45,000</td>
                          <td className="px-6 py-4 text-gray-700 border-b border-pink-100 text-sm">Donor assessment, transplant protocol, medications and extended monitoring</td>
                        </tr>
                        <tr className="bg-white">
                          <td className="px-6 py-4 font-semibold text-gray-800 rounded-bl-lg">Bone Marrow Transplant with Complications</td>
                          <td className="px-6 py-4 text-pink-700 font-semibold rounded-br-lg">USD 35,000+</td>
                          <td className="px-6 py-4 text-gray-700 rounded-br-lg text-sm">Additional hospitalisation, medicines, infection management and treatment of complications</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-gray-600 text-sm mt-6 italic mb-6">
                    *These figures are indicative estimates only and should not be presented as a guaranteed treatment price. The actual cost is determined after specialist evaluation and depends on the patient's diagnosis, transplant type, donor requirements, hospital, treatment protocol, length of stay, medications and possible complications.
                  </p>

                  <p className="text-gray-700 leading-relaxed bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg">
                    For international patients, Ekam can help coordinate a personalised treatment estimate after the relevant medical records have been reviewed by the treating hospital or specialist.
                  </p>
                </div>
              </section>

              {/* WHAT CAN AFFECT SUCCESS */}
              <section className="mb-16" id="success-factors">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  What Can Affect the Success of a Bone Marrow Transplant?
                </h2>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bone marrow transplant outcomes vary between patients. Factors that can influence outcomes include:
                  </p>

                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Type and stage of the underlying disease</li>
                    <li>• Patient's age and general health</li>
                    <li>• Disease response before transplantation</li>
                    <li>• Type of transplant</li>
                    <li>• Donor compatibility</li>
                    <li>• Conditioning regimen</li>
                    <li>• Presence of infections or other medical conditions</li>
                    <li>• Post-transplant complications</li>
                    <li>• Quality of follow-up care</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    After examining each patient's unique medical history, a transplant specialist can offer a more insightful evaluation.
                  </p>
                </div>
              </section>

              {/* RISKS AND COMPLICATIONS */}
              <section className="mb-16" id="risks-complications">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Risks and Possible Complications
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Bone marrow transplantation is a complex treatment and may involve significant risks. Possible complications can include:
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 mb-6">
                    <li>• Infection</li>
                    <li>• Low blood cell counts</li>
                    <li>• Bleeding</li>
                    <li>• Nausea and fatigue</li>
                    <li>• Organ-related complications</li>
                    <li>• Reactions to conditioning treatment</li>
                    <li>• Graft-versus-host disease in allogeneic transplantation</li>
                    <li>• Delayed engraftment</li>
                    <li>• Disease relapse</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    The risks differ depending on the type of transplant and the patient's condition. The treating transplant team should explain the expected benefits, risks and alternatives before treatment.
                  </p>
                </div>
              </section>

              {/* RECOVERY AFTER BMT */}
              <section className="mb-16" id="recovery">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Recovery After Bone Marrow Transplant
                </h2>

                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    After a bone marrow transplant, recovery may take some time. Patients may need regular medical monitoring while blood counts and immune function recover.
                  </p>

                  <p className="font-semibold mb-3 text-gray-800">
                    Follow-up may include:
                  </p>

                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>• Regular blood tests</li>
                    <li>• Medication management</li>
                    <li>• Infection monitoring</li>
                    <li>• Nutritional and lifestyle guidance</li>
                    <li>• Monitoring for transplant-related complications</li>
                    <li>• Disease-specific follow-up</li>
                    <li>• Long-term specialist reviews</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    Patients travelling from another country should discuss the expected duration of stay in India and the follow-up plan with their transplant team before travelling.
                  </p>
                </div>
              </section>

              {/* WHY CHOOSE INDIA */}
              <section className="mb-16" id="why-choose-india">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Why Choose India for Bone Marrow Transplant?
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    India has established tertiary-care hospitals and specialised transplant centres offering haematology and stem-cell transplantation services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    International patients may consider India because treatment planning can be coordinated through specialised hospitals, with access to multidisciplinary medical teams and supporting services.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    However, the most suitable hospital and transplant approach depends on the patient's diagnosis, clinical requirements, donor situation and specialist recommendation rather than location alone.
                  </p>
                </div>
              </section>

              {/* WHY INTERNATIONAL PATIENTS CHOOSE EKAM */}
              <section className="mb-16" id="why-choose-ekam">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Why International Patients Choose Ekam
                </h2>

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ekam supports international patients who are considering medical treatment in India by helping coordinate different parts of their healthcare journey.
                  </p>

                  <p className="font-semibold mb-3 text-gray-800">
                    Our support may include:
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700 mb-6">
                    <li>• Review and organisation of medical records</li>
                    <li>• Specialist consultation coordination</li>
                    <li>• Hospital coordination</li>
                    <li>• Treatment planning support</li>
                    <li>• Cost estimate coordination</li>
                    <li>• Medical travel assistance</li>
                    <li>• Accommodation support</li>
                    <li>• Assistance with treatment-related logistics</li>
                    <li>• Follow-up coordination</li>
                  </ul>

                  <p className="text-gray-700 leading-relaxed">
                    The medical diagnosis, treatment decision and transplant procedure are carried out by qualified medical professionals at the selected hospital.
                  </p>
                </div>
              </section>

              {/* BMT FOR INTERNATIONAL PATIENTS */}
              <section className="mb-16" id="international-patients">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Bone Marrow Transplant for International Patients
                </h2>

                <div className="bg-white rounded-xl shadow-lg p-8">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Patients travelling from Mauritius, Fiji, Ghana, Maldives, Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Sudan, South Sudan, Zambia, Zimbabwe, Rwanda, the Democratic Republic of the Congo (DR Congo), Sierra Leone, Liberia, Malawi, Papua New Guinea and Solomon Islands may need to plan several aspects of their bone marrow transplant journey before travelling to India.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ekam can support international patients by helping them understand the expected treatment process, coordinate consultations with appropriate specialists, communicate with hospitals, and organise essential arrangements before and during their medical journey.
                  </p>
                </div>
              </section>

              {/* FAQS */}
              <section className="mb-16" id="faq">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6 mt-6">
                  {[
                    {
                      q: "Is bone marrow transplant available in India?",
                      a: "Yes. Bone marrow and stem cell transplantation are performed at specialised hospitals and transplant centres in India. The appropriate treatment depends on the patient's diagnosis and medical assessment.",
                      bg: "bg-gradient-to-br from-blue-50 to-purple-50"
                    },
                    {
                      q: "How much does a bone marrow transplant cost in India?",
                      a: "There is no single fixed cost. The total expense depends on the transplant type, underlying disease, hospital, donor testing, conditioning treatment, hospital stay, medications and possible complications. A personalised estimate should be obtained after medical evaluation.",
                      bg: "bg-white"
                    },
                    {
                      q: "How long does a bone marrow transplant take?",
                      a: "The overall treatment journey can extend over several weeks or longer. The exact duration depends on the conditioning regimen, transplant type, engraftment, recovery and the patient's clinical condition.",
                      bg: "bg-gradient-to-br from-pink-50 to-purple-50"
                    },
                    {
                      q: "Is bone marrow transplant a surgery?",
                      a: "A bone marrow transplant itself is generally performed by infusing stem cells through an intravenous line rather than through conventional surgery. However, stem-cell collection and other procedures may be required as part of the treatment process.",
                      bg: "bg-white"
                    },
                    {
                      q: "Can international patients get bone marrow transplant treatment in India?",
                      a: "Individuals from various nations can be evaluated and treated for bone marrow transplants in India. Before traveling, they typically have to submit pertinent medical data for professional assessment and treatment planning.",
                      bg: "bg-gradient-to-br from-purple-50 to-pink-50"
                    },
                    {
                      q: "Is a donor required for every bone marrow transplant?",
                      a: "No. An autologous transplant uses the patient's own stem cells. Donor stem cells are needed for an allogeneic transplant, and the transplant team assesses donor compatibility.",
                      bg: "bg-white"
                    },
                    {
                      q: "How is a bone marrow donor matched?",
                      a: "Donor compatibility is assessed using specialised tissue typing, commonly involving human leukocyte antigen (HLA) testing. The transplant team determines which donor option is appropriate for the patient.",
                      bg: "bg-gradient-to-br from-blue-50 to-purple-50"
                    },
                    {
                      q: "What happens after a bone marrow transplant?",
                      a: "Patients require close monitoring after transplantation. The medical team monitors blood counts, engraftment, infections, medication effects and possible complications. Long-term follow-up may also be necessary.",
                      bg: "bg-white"
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className={`${faq.bg} rounded-xl shadow-lg p-8`}>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* PLAN YOUR TREATMENT */}
              <section className="mb-16">
                <div className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Plan Your Bone Marrow Transplant Treatment in India
                  </h2>
                  <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-6 leading-relaxed">
                    If you or a family member has been advised to consider a bone marrow transplant, getting the right specialist evaluation is an important first step.
                  </p>
                  <p className="text-md text-blue-50 max-w-2xl mx-auto leading-relaxed">
                    Ekam can help international patients coordinate medical consultations, hospital arrangements, treatment estimates and travel-related support in India. Share your medical reports with Ekam to begin the treatment coordination process.
                  </p>
                </div>
              </section>

            </div>

          </div>
        </div>

      </div>
    </>
  );
}

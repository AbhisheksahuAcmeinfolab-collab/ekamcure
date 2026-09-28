import Script from "next/script";
import React from "react";
import Link from "next/link";
import CTA from "../../../../Component/cta.jsx";
import Image from "next/image";
import ContactForm from "../../../../Component/ContactForm.jsx";
import Sidebar from "../../../../Component/Sidebar.jsx";

import {
  Activity,
  Brain,
  Stethoscope,
  Timer,
  ShieldCheck,
  CheckCircle,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Bone Marrow Transplant in India | Cost & Treatment",
  description:
    "Explore bone marrow transplant in India, including treatment types, cost, recovery, risks and international patient support with Ekam.",
};

export default function BoneMarrowTransplantInIndia() {
  return (
    <>
      <Script
        id="bmt-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is bone marrow transplant available in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Bone marrow and stem cell transplantation are performed at specialised hospitals and transplant centres in India. The appropriate treatment depends on the patient's diagnosis and medical assessment.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a bone marrow transplant cost in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "There is no single fixed cost. The total expense depends on the transplant type, underlying disease, hospital, donor testing, conditioning treatment, hospital stay, medications and possible complications. A personalised estimate should be obtained after medical evaluation.",
                },
              },
              {
                "@type": "Question",
                name: "How long does a bone marrow transplant take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The overall treatment journey can extend over several weeks or longer. The exact duration depends on the conditioning regimen, transplant type, engraftment, recovery and the patient's clinical condition.",
                },
              },
              {
                "@type": "Question",
                name: "Is bone marrow transplant a surgery?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A bone marrow transplant itself is generally performed by infusing stem cells through an intravenous line rather than through conventional surgery. However, stem-cell collection and other procedures may be required as part of the treatment process.",
                },
              },
              {
                "@type": "Question",
                name: "Can international patients get bone marrow transplant treatment in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Individuals from various nations can be evaluated and treated for bone marrow transplants in India. Before traveling, they typically have to submit pertinent medical data for professional assessment and treatment planning.",
                },
              },
              {
                "@type": "Question",
                name: "Is a donor required for every bone marrow transplant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. An autologous transplant uses the patient's own stem cells. Donor stem cells are needed for an allogeneic transplant, and the transplant team assesses donor compatibility.",
                },
              },
              {
                "@type": "Question",
                name: "How is a bone marrow donor matched?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Donor compatibility is assessed using specialised tissue typing, commonly involving human leukocyte antigen (HLA) testing. The transplant team determines which donor option is appropriate for the patient.",
                },
              },
              {
                "@type": "Question",
                name: "What happens after a bone marrow transplant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Patients require close monitoring after transplantation. The medical team monitors blood counts, engraftment, infections, medication effects and possible complications. Long-term follow-up may also be necessary.",
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* HERO */}
        <div
          className="relative text-white h-[400px] overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner/bone-marrow-transplant-banner.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
          ></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Bone Marrow Transplant in India
            </h1>
            <p className="text-lg md:text-xl mt-3 max-w-3xl mx-auto">
              Advanced Bone Marrow Transplant Care for International Patients
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-10 gap-8 px-4 py-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 order-2 lg:order-1">

            {/* TOC */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border-t-4 border-pink-500">
              <h2 className="font-bold text-xl mb-4 flex items-center">
                <CheckCircle className="mr-2 text-pink-600" />
                In this page
              </h2>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "What Is a Bone Marrow Transplant?",
                  "When Is Bone Marrow Transplant Recommended?",
                  "Types of Bone Marrow Transplant",
                  "How Is Bone Marrow Transplant Performed?",
                  "Specialised Bone Marrow Transplant Hospitals in India",
                  "Bone Marrow Transplant Treatment Journey in India",
                  "Experienced Bone Marrow Transplant Doctors in India",
                  "How Ekam Can Help International Patients",
                  "Bone Marrow Transplant Cost in India",
                  "What Can Affect the Success of a Bone Marrow Transplant?",
                  "Risks and Possible Complications",
                  "Recovery After Bone Marrow Transplant",
                  "Why Choose India for Bone Marrow Transplant?",
                  "Why International Patients Choose Ekam",
                  "Bone Marrow Transplant for International Patients",
                  "Frequently Asked Questions",
                ].map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="hover:text-pink-600 flex items-center"
                  >
                    <span className="mr-1">›</span> {item}
                  </a>
                ))}
              </div>
            </div>

            {/* INTRO SECTION */}
            <div className="bg-white p-6 rounded-xl shadow mb-10 text-gray-700 leading-relaxed space-y-4">
              <p>
                A specialized treatment for some blood malignancies, blood disorders, immune system disorders, and other diseases involving the bone marrow or blood-forming cells is bone marrow transplantation, also referred to as stem cell transplantation. A specialized treatment for some blood malignancies, blood disorders, immune system disorders, and other diseases involving the bone marrow or blood-forming cells is bone marrow transplantation, also referred to as stem cell transplantation.
              </p>
              <p>
                India has specialised hospitals and transplant centres that provide bone marrow transplant evaluation, donor matching, transplantation and post-transplant care. For international patients, Ekam helps coordinate the medical journey, including hospital coordination, specialist consultations, treatment planning, cost estimates, travel assistance and follow-up support.
              </p>
              <p>
                If you are considering a bone marrow transplant in India, the appropriate treatment approach depends on the patient's diagnosis, overall health, disease status and availability of a suitable donor or stem-cell source.
              </p>
            </div>

            {/* WHAT IS A BONE MARROW TRANSPLANT? */}
            <section id="what-is-a-bone-marrow-transplant" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                What Is a Bone Marrow Transplant?
              </h2>
              <div className="bg-white p-6 rounded-xl shadow space-y-4 text-gray-700">
                <p>
                  Unhealthy or injured blood-forming stem cells are replaced with healthy stem cells during a bone marrow transplant. Following treatment, the donated cells may aid the bone marrow in producing healthy blood cells.
                </p>
                <p className="font-semibold text-gray-800">
                  Depending on the patient's condition and treatment plan, stem cells may come from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The patient themselves — called an autologous transplant</li>
                  <li>A suitable donor — called an allogeneic transplant</li>
                  <li>In selected situations, stem cells may be obtained from sources such as peripheral blood, bone marrow or umbilical cord blood</li>
                </ul>
                <p>
                  The transplant process is highly individualised and is planned by a haematologist or transplant specialist.
                </p>
              </div>
            </section>

            {/* WHEN IS BONE MARROW TRANSPLANT RECOMMENDED? */}
            <section id="when-is-bone-marrow-transplant-recommended" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                When Is Bone Marrow Transplant Recommended?
              </h2>
              <div className="bg-white p-6 rounded-xl shadow space-y-4 text-gray-700">
                <p className="font-semibold text-gray-800">
                  For certain patients with disorders like these, a bone marrow or stem cell transplant may be considered:
                </p>
                <div className="grid md:grid-cols-2 gap-3 pt-2">
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">• Leukemia</div>
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">• Lymphoma</div>
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">• Multiple myeloma</div>
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">• Aplastic anaemia</div>
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">• Myelodysplastic syndromes</div>
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">• Certain inherited blood disorders</div>
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">• Selected immune system disorders</div>
                  <div className="bg-pink-50 p-3 rounded-lg border-l-4 border-pink-500">• Other diseases affecting blood-forming cells</div>
                </div>
                <p className="pt-2">
                  Transplants are not necessary for all patients with these diseases. The medical team evaluates the diagnosis, disease stage, previous treatments, general health and other clinical factors before recommending transplantation.
                </p>
              </div>
            </section>

            {/* TYPES OF BONE MARROW TRANSPLANT */}
            <section id="types-of-bone-marrow-transplant" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Types of Bone Marrow Transplant
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Autologous Stem Cell Transplant</h3>
                  <p className="text-gray-700 mb-3">
                    An autologous transplant involves the collection and storage of the patient's own stem cells prior to high-dose therapy. The cells are then returned to the patient after the conditioning treatment.
                  </p>
                  <p className="text-gray-700">
                    When the patient's own stem cells are suitable for transplantation, this method may be applied to specific malignancies and blood diseases.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Allogeneic Stem Cell Transplant</h3>
                  <p className="text-gray-700 mb-3">
                    Blood-forming stem cells from a donor are used in an allogeneic transplant. The donor may be a sibling, another matched relative or an unrelated donor, depending on the patient's circumstances and donor availability.
                  </p>
                  <p className="text-gray-700">
                    Donor matching is an important part of the evaluation because compatibility can influence treatment planning and the risk of certain complications.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Haploidentical Transplant</h3>
                  <p className="text-gray-700 mb-3">
                    A haploidentical transplant uses a partially matched family donor. When a fully matched donor is unavailable, this strategy can offer an alternative.
                  </p>
                  <p className="text-gray-700">
                    Depending on the patient's illness and state of health, the transplant team decides if this strategy is suitable.
                  </p>
                </div>
              </div>
            </section>

            {/* HOW IS BONE MARROW TRANSPLANT PERFORMED? */}
            <section id="how-is-bone-marrow-transplant-performed" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                How Is Bone Marrow Transplant Performed?
              </h2>
              <div className="bg-white p-6 rounded-xl shadow space-y-6">
                <p className="text-gray-700">
                  Typically, a bone marrow transplant takes more than one day to complete. It involves several stages and requires close monitoring by a specialised transplant team.
                </p>

                <div className="grid gap-4">
                  {[
                    {
                      step: "1. Medical Evaluation",
                      desc: "Prior to transplantation, the patient has a thorough medical evaluation. This may include blood tests, imaging, disease-specific investigations, organ-function assessment and other tests required by the transplant team.",
                    },
                    {
                      step: "2. Donor and Stem Cell Assessment",
                      desc: "For an allogeneic transplant, the medical team assesses potential donors and performs compatibility testing. For an autologous transplant, the patient's own stem cells are evaluated and collected.",
                    },
                    {
                      step: "3. Stem Cell Collection",
                      desc: "Depending on the intended transplant and donor or patient characteristics, stem cells may be extracted directly from the bone marrow or from the circulation.",
                    },
                    {
                      step: "4. Conditioning Treatment",
                      desc: "Before the stem cells are infused, the patient may receive chemotherapy, radiation therapy or a combination of treatments. This stage is known as conditioning. The purpose and intensity of conditioning depend on the underlying disease and transplant protocol.",
                    },
                    {
                      step: "5. Stem Cell Infusion",
                      desc: "The patient's bloodstream is infused with the gathered stem cells. This is generally similar to receiving an intravenous infusion rather than conventional surgery.",
                    },
                    {
                      step: "6. Engraftment and Monitoring",
                      desc: "Following infusion, the transplanted stem cells migrate to the bone marrow and begin producing new blood cells. This process is called engraftment. During this period, patients require close monitoring for infection, blood-count changes, side effects and other complications.",
                    },
                    {
                      step: "7. Recovery and Follow-Up",
                      desc: "Recovery continues after the initial transplant period. Regular blood tests, specialist appointments, medications and monitoring may be required for weeks or months, depending on the patient's condition and type of transplant.",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-pink-50/50 p-4 rounded-lg border-l-4 border-pink-500">
                      <h3 className="font-bold text-gray-800 text-lg mb-1">{item.step}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SPECIALISED HOSPITALS */}
            <section id="specialised-bone-marrow-transplant-hospitals-in-india" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Specialised Bone Marrow Transplant Hospitals in India
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4">
                <p>
                  India has specialised hospitals offering bone marrow and stem cell transplant services for eligible patients. Hospitals provide specialist evaluation, donor assessment, transplantation and post-treatment monitoring.
                </p>
                <p>
                  For international patients, Ekam can help coordinate consultations, hospital arrangements, treatment estimates and travel support, helping patients from different countries plan their bone marrow transplant journey in India with appropriate medical guidance.
                </p>
              </div>
            </section>

            {/* TREATMENT JOURNEY */}
            <section id="bone-marrow-transplant-treatment-journey-in-india" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Bone Marrow Transplant Treatment Journey in India
              </h2>
              <div className="bg-white p-6 rounded-xl shadow space-y-4 text-gray-700">
                <p>
                  For international patients, planning treatment abroad involves both medical and logistical arrangements. Ekam can help coordinate the journey from initial medical review through hospital treatment and follow-up planning.
                </p>
                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-pink-50 border border-pink-100">
                    <h3 className="font-bold text-gray-800 mb-2">Before Travelling to India</h3>
                    <p className="text-sm">Patients can share relevant medical records, previous treatment details, laboratory reports and imaging with the medical coordination team. These records can be reviewed to help identify an appropriate specialist and treatment pathway.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-pink-50 border border-pink-100">
                    <h3 className="font-bold text-gray-800 mb-2">Specialist Consultation</h3>
                    <p className="text-sm">A transplant specialist reviews the available medical information and may recommend additional investigations before confirming the treatment plan.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-pink-50 border border-pink-100">
                    <h3 className="font-bold text-gray-800 mb-2">Hospital Coordination</h3>
                    <p className="text-sm">Ekam can assist with coordinating consultations and treatment arrangements with appropriate hospitals and transplant centres in India.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-pink-50 border border-pink-100">
                    <h3 className="font-bold text-gray-800 mb-2">Treatment Planning</h3>
                    <p className="text-sm">The final treatment plan is determined by the treating medical team after evaluating the patient's condition. It may include donor testing, conditioning therapy, stem cell transplantation and post-transplant monitoring.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-pink-50 border border-pink-100">
                    <h3 className="font-bold text-gray-800 mb-2">Travel and Stay Support</h3>
                    <p className="text-sm">International patients may require assistance with travel arrangements, accommodation and other practical aspects of their medical journey.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-pink-50 border border-pink-100">
                    <h3 className="font-bold text-gray-800 mb-2">Follow-Up Care</h3>
                    <p className="text-sm">After transplantation, ongoing medical monitoring is important. Ekam can help international patients understand their follow-up requirements and coordinate communication with the treating team where appropriate.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* DOCTORS SECTION */}
            <section id="experienced-bone-marrow-transplant-doctors-in-india" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Experienced Bone Marrow Transplant Doctors in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow text-gray-700 mb-6">
                Choosing the right specialist is an important part of planning bone marrow transplant treatment in India. The appropriate doctor may depend on the patient's age, diagnosis, treatment history and type of transplant being considered. International patients can review specialist profiles and discuss their medical records with the treating hospital before travelling.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Dr. Satyaranjan Das – Max Healthcare</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Dr. Satyaranjan Das is associated with Cancer Care/Oncology at Max Healthcare. Max Healthcare lists Bone Marrow Transplant among its transplant medicine services. International patients can review his official profile and discuss consultation options based on their medical requirements.
                  </p>
                  <p className="text-pink-600 font-semibold text-sm">
                    Doctor Profile: Dr. Satyaranjan Das – Max Healthcare
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Dr. Chandrika Verma – Max Healthcare</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Dr. Chandrika Verma is a Paediatric Oncology specialist at Max Healthcare. Her expertise may be relevant for children requiring evaluation and treatment for blood cancers and related conditions, including cases where bone marrow transplant may be considered.
                  </p>
                  <p className="text-pink-600 font-semibold text-sm">
                    Doctor Profile: Dr. Chandrika Verma – Max Healthcare
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">Dr. (Maj) Ravi Shankar – Yatharth Hospitals</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Dr. (Maj) Ravi Shankar is a Consultant in Paediatric Haemato-Oncology & BMT at Yatharth Hospitals. His profile is particularly relevant for paediatric patients requiring haematology, oncology or bone marrow transplant evaluation.
                  </p>
                  <p className="text-pink-600 font-semibold text-sm">
                    Doctor Profile: Dr. Ravi Shankar – Yatharth Hospitals
                  </p>
                </div>
              </div>
            </section>

            {/* HOW EKAM CAN HELP */}
            <section id="how-ekam-can-help-international-patients" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                How Ekam Can Help International Patients
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4">
                <p>
                  Ekam can help patients from Mauritius, Fiji, Ghana, Maldives, Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Sudan and other countries understand their treatment options, share medical records with appropriate hospitals, coordinate specialist consultations and assist with international patient arrangements.
                </p>
              </div>
            </section>

            {/* COST IN INDIA */}
            <section id="bone-marrow-transplant-cost-in-india" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Bone Marrow Transplant Cost in India
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4 mb-6">
                <p>
                  The cost of bone marrow transplant in India varies significantly from one patient to another. It depends on several factors, including:
                </p>
                <div className="grid md:grid-cols-2 gap-2 text-sm pt-2">
                  <div className="bg-pink-50 p-2 rounded">• Type of transplant</div>
                  <div className="bg-pink-50 p-2 rounded">• Underlying disease</div>
                  <div className="bg-pink-50 p-2 rounded">• Patient's overall health</div>
                  <div className="bg-pink-50 p-2 rounded">• Donor availability and compatibility testing</div>
                  <div className="bg-pink-50 p-2 rounded">• Conditioning treatment</div>
                  <div className="bg-pink-50 p-2 rounded">• Hospital and transplant centre</div>
                  <div className="bg-pink-50 p-2 rounded">• Medications and supportive care</div>
                  <div className="bg-pink-50 p-2 rounded">• Length of hospitalisation</div>
                  <div className="bg-pink-50 p-2 rounded">• Management of complications</div>
                  <div className="bg-pink-50 p-2 rounded">• Follow-up requirements</div>
                </div>
                <p className="pt-2">
                  Because these factors can substantially affect the total treatment expense, an exact cost should not be assumed from a general online figure.
                </p>
              </div>

              {/* TABLE 1: COMPARISON BY COUNTRY */}
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Bone Marrow Transplant Cost Comparison by Country
              </h3>
              <div className="bg-white rounded-xl shadow overflow-x-auto mb-6">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                      <th className="p-4 font-bold">Country</th>
                      <th className="p-4 font-bold">Estimated Cost in USD</th>
                      <th className="p-4 font-bold">Cost Considerations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["India", "$15,000–$70,000", "Depends on transplant type, donor matching, hospitalisation, conditioning therapy and post-transplant care"],
                      ["Turkey", "$36,000–$80,000", "Varies according to transplant type, hospital and treatment requirements"],
                      ["Thailand", "$50,000–$120,000", "Depends on the transplant procedure, hospital facilities and supportive care"],
                      ["Malaysia", "$35,000–$60,000", "Costs vary according to treatment complexity and hospital"],
                      ["Singapore", "$60,000–$100,000", "Influenced by specialist care, hospital facilities and treatment duration"],
                      ["Germany", "$180,000–$350,000", "Costs depend on transplant type, hospitalisation and medical requirements"],
                      ["Spain", "$70,000–$240,000", "Varies according to the procedure, hospital and patient-specific care"],
                      ["United States", "$300,000–$700,000+", "Costs may include complex transplant care, hospitalisation and treatment of complications"],
                    ].map(([country, cost, considerations], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-pink-50/40" : "bg-white"}>
                        <td className="p-4 font-medium text-gray-900">{country}</td>
                        <td className="p-4 text-pink-700 font-semibold">{cost}</td>
                        <td className="p-4 text-gray-600">{considerations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic mb-8">
                Important: The figures above are broad, indicative ranges from publicly available sources. They are not directly comparable hospital packages, and some sources report different ranges for autologous and allogeneic transplantation. The final price must be confirmed by the selected hospital after reviewing the patient's medical records.
              </p>

              {/* TABLE 2: TYPE WISE COST */}
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Bone Marrow Transplant Cost in India by Type
              </h3>
              <div className="bg-white rounded-xl shadow overflow-x-auto mb-6">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                      <th className="p-4 font-bold">Type of Bone Marrow Transplant</th>
                      <th className="p-4 font-bold">Indicative Cost in India*</th>
                      <th className="p-4 font-bold">Key Cost Factors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Autologous Stem Cell Transplant", "USD 15,000–25,000", "Stem-cell collection, conditioning therapy, hospitalisation and supportive care"],
                      ["Allogeneic Stem Cell Transplant", "USD 25,000–40,000", "Donor matching, stem-cell collection, conditioning, hospitalisation and post-transplant care"],
                      ["Haploidentical Stem Cell Transplant", "USD 25,000–45,000", "Donor assessment, transplant protocol, medications and extended monitoring"],
                      ["Bone Marrow Transplant with Complications", "USD 35,000+", "Additional hospitalisation, medicines, infection management and treatment of complications"],
                    ].map(([type, cost, factors], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-pink-50/40" : "bg-white"}>
                        <td className="p-4 font-medium text-gray-900">{type}</td>
                        <td className="p-4 text-pink-700 font-semibold">{cost}</td>
                        <td className="p-4 text-gray-600">{factors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic mb-6">
                *These figures are indicative estimates only and should not be presented as a guaranteed treatment price. The actual cost is determined after specialist evaluation and depends on the patient's diagnosis, transplant type, donor requirements, hospital, treatment protocol, length of stay, medications and possible complications.
              </p>
              <p className="text-sm text-gray-700 bg-white p-4 rounded-xl shadow">
                For international patients, Ekam can help coordinate a personalised treatment estimate after the relevant medical records have been reviewed by the treating hospital or specialist.
              </p>
            </section>

            {/* WHAT CAN AFFECT SUCCESS */}
            <section id="what-can-affect-the-success-of-a-bone-marrow-transplant" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                What Can Affect the Success of a Bone Marrow Transplant?
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4">
                <p>
                  Bone marrow transplant outcomes vary between patients. Factors that can influence outcomes include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Type and stage of the underlying disease</li>
                  <li>Patient's age and general health</li>
                  <li>Disease response before transplantation</li>
                  <li>Type of transplant</li>
                  <li>Donor compatibility</li>
                  <li>Conditioning regimen</li>
                  <li>Presence of infections or other medical conditions</li>
                  <li>Post-transplant complications</li>
                  <li>Quality of follow-up care</li>
                </ul>
                <p className="pt-2">
                  After examining each patient's unique medical history, a transplant specialist can offer a more insightful evaluation.
                </p>
              </div>
            </section>

            {/* RISKS AND COMPLICATIONS */}
            <section id="risks-and-possible-complications" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Risks and Possible Complications
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4">
                <p>
                  Bone marrow transplantation is a complex treatment and may involve significant risks. Possible complications can include:
                </p>
                <div className="grid md:grid-cols-2 gap-3 pt-2 text-sm">
                  <div className="bg-pink-50 p-3 rounded-lg">• Infection</div>
                  <div className="bg-pink-50 p-3 rounded-lg">• Low blood cell counts</div>
                  <div className="bg-pink-50 p-3 rounded-lg">• Bleeding</div>
                  <div className="bg-pink-50 p-3 rounded-lg">• Nausea and fatigue</div>
                  <div className="bg-pink-50 p-3 rounded-lg">• Organ-related complications</div>
                  <div className="bg-pink-50 p-3 rounded-lg">• Reactions to conditioning treatment</div>
                  <div className="bg-pink-50 p-3 rounded-lg">• Graft-versus-host disease in allogeneic transplantation</div>
                  <div className="bg-pink-50 p-3 rounded-lg">• Delayed engraftment</div>
                  <div className="bg-pink-50 p-3 rounded-lg">• Disease relapse</div>
                </div>
                <p className="pt-2">
                  The risks differ depending on the type of transplant and the patient's condition. The treating transplant team should explain the expected benefits, risks and alternatives before treatment.
                </p>
              </div>
            </section>

            {/* RECOVERY */}
            <section id="recovery-after-bone-marrow-transplant" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Recovery After Bone Marrow Transplant
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4">
                <p>
                  After a bone marrow transplant, recovery may take some time. Patients may need regular medical monitoring while blood counts and immune function recover.
                </p>
                <p className="font-semibold text-gray-800">
                  Follow-up may include:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Regular blood tests</li>
                  <li>Medication management</li>
                  <li>Infection monitoring</li>
                  <li>Nutritional and lifestyle guidance</li>
                  <li>Monitoring for transplant-related complications</li>
                  <li>Disease-specific follow-up</li>
                  <li>Long-term specialist reviews</li>
                </ul>
                <p className="pt-2">
                  Patients travelling from another country should discuss the expected duration of stay in India and the follow-up plan with their transplant team before travelling.
                </p>
              </div>
            </section>

            {/* WHY CHOOSE INDIA */}
            <section id="why-choose-india-for-bone-marrow-transplant" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Why Choose India for Bone Marrow Transplant?
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4">
                <p>
                  India has established tertiary-care hospitals and specialised transplant centres offering haematology and stem-cell transplantation services.
                </p>
                <p>
                  International patients may consider India because treatment planning can be coordinated through specialised hospitals, with access to multidisciplinary medical teams and supporting services.
                </p>
                <p>
                  However, the most suitable hospital and transplant approach depends on the patient's diagnosis, clinical requirements, donor situation and specialist recommendation rather than location alone.
                </p>
              </div>
            </section>

            {/* WHY EKAM */}
            <section id="why-international-patients-choose-ekam" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Why International Patients Choose Ekam
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4">
                <p>
                  Ekam supports international patients who are considering medical treatment in India by helping coordinate different parts of their healthcare journey.
                </p>
                <p className="font-semibold text-gray-800">
                  Our support may include:
                </p>
                <ul className="grid md:grid-cols-2 gap-2 text-sm">
                  <li className="bg-pink-50 p-2 rounded">• Review and organisation of medical records</li>
                  <li className="bg-pink-50 p-2 rounded">• Specialist consultation coordination</li>
                  <li className="bg-pink-50 p-2 rounded">• Hospital coordination</li>
                  <li className="bg-pink-50 p-2 rounded">• Treatment planning support</li>
                  <li className="bg-pink-50 p-2 rounded">• Cost estimate coordination</li>
                  <li className="bg-pink-50 p-2 rounded">• Medical travel assistance</li>
                  <li className="bg-pink-50 p-2 rounded">• Accommodation support</li>
                  <li className="bg-pink-50 p-2 rounded">• Assistance with treatment-related logistics</li>
                  <li className="bg-pink-50 p-2 rounded">• Follow-up coordination</li>
                </ul>
                <p className="pt-2">
                  The medical diagnosis, treatment decision and transplant procedure are carried out by qualified medical professionals at the selected hospital.
                </p>
              </div>
            </section>

            {/* BMT FOR INT PATIENTS */}
            <section id="bone-marrow-transplant-for-international-patients" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Bone Marrow Transplant for International Patients
              </h2>
              <div className="bg-white p-6 rounded-xl shadow text-gray-700 space-y-4">
                <p>
                  Patients travelling from Mauritius, Fiji, Ghana, Maldives, Nigeria, Kenya, Tanzania, Uganda, Ethiopia, Sudan, South Sudan, Zambia, Zimbabwe, Rwanda, the Democratic Republic of the Congo (DR Congo), Sierra Leone, Liberia, Malawi, Papua New Guinea and Solomon Islands may need to plan several aspects of their bone marrow transplant journey before travelling to India.
                </p>
                <p>
                  Ekam can support international patients by helping them understand the expected treatment process, coordinate consultations with appropriate specialists, communicate with hospitals, and organise essential arrangements before and during their medical journey.
                </p>
              </div>
            </section>

            {/* FAQS */}
            <section id="frequently-asked-questions" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  {
                    q: "Is bone marrow transplant available in India?",
                    a: "Yes. Bone marrow and stem cell transplantation are performed at specialised hospitals and transplant centres in India. The appropriate treatment depends on the patient's diagnosis and medical assessment.",
                  },
                  {
                    q: "How much does a bone marrow transplant cost in India?",
                    a: "There is no single fixed cost. The total expense depends on the transplant type, underlying disease, hospital, donor testing, conditioning treatment, hospital stay, medications and possible complications. A personalised estimate should be obtained after medical evaluation.",
                  },
                  {
                    q: "How long does a bone marrow transplant take?",
                    a: "The overall treatment journey can extend over several weeks or longer. The exact duration depends on the conditioning regimen, transplant type, engraftment, recovery and the patient's clinical condition.",
                  },
                  {
                    q: "Is bone marrow transplant a surgery?",
                    a: "A bone marrow transplant itself is generally performed by infusing stem cells through an intravenous line rather than through conventional surgery. However, stem-cell collection and other procedures may be required as part of the treatment process.",
                  },
                  {
                    q: "Can international patients get bone marrow transplant treatment in India?",
                    a: "Individuals from various nations can be evaluated and treated for bone marrow transplants in India. Before traveling, they typically have to submit pertinent medical data for professional assessment and treatment planning.",
                  },
                  {
                    q: "Is a donor required for every bone marrow transplant?",
                    a: "No. An autologous transplant uses the patient's own stem cells. Donor stem cells are needed for an allogeneic transplant, and the transplant team assesses donor compatibility.",
                  },
                  {
                    q: "How is a bone marrow donor matched?",
                    a: "Donor compatibility is assessed using specialised tissue typing, commonly involving human leukocyte antigen (HLA) testing. The transplant team determines which donor option is appropriate for the patient.",
                  },
                  {
                    q: "What happens after a bone marrow transplant?",
                    a: "Patients require close monitoring after transplantation. The medical team monitors blood counts, engraftment, infections, medication effects and possible complications. Long-term follow-up may also be necessary.",
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">{faq.q}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PLAN YOUR TREATMENT CTA */}
            <div className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white p-8 rounded-xl shadow-lg text-center space-y-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Plan Your Bone Marrow Transplant Treatment in India</h2>
              <p className="max-w-2xl mx-auto text-sm md:text-base opacity-90">
                If you or a family member has been advised to consider a bone marrow transplant, getting the right specialist evaluation is an important first step. Ekam can help international patients coordinate medical consultations, hospital arrangements, treatment estimates and travel-related support in India.
              </p>
              <p className="font-semibold text-pink-200">
                Share your medical reports with Ekam to begin the treatment coordination process.
              </p>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="sticky top-6 space-y-6">
              <ContactForm />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

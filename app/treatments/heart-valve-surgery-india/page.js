import React from "react";
import Link from "next/link";
import CTA from "../../../Component/cta";
import ContactForm from "../../../Component/ContactForm";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Timer,
  BadgeDollarSign,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title:
    "Heart Valve Surgery in India – Cost, Types, TAVI, Success Rate & Recovery",
  description:
    "Explore heart valve surgery in India including valve repair, valve replacement, TAVI, Bentall procedure, cost in India (USD comparison), recovery time, risks, success rate, and medical tourism support. Learn symptoms, diagnosis, ICU care, and long-term outcomes from experienced cardiac specialists.",
};

export default function HeartValveSurgery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* HERO */}
      <div className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Heart Valve Surgery in India
        </h1>
        <p className="text-xl max-w-4xl mx-auto text-pink-100">
          Advanced valve repair and replacement procedures with experienced
          cardiac surgeons, modern technology, high success rates and affordable
          cost.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-10 gap-8 px-4 py-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7">

          {/* TOC */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border-t-4 border-pink-500">
            <h2 className="font-bold text-xl mb-4 flex items-center">
              <CheckCircle className="mr-2 text-pink-600" />
              In this page
            </h2>

            <div className="grid md:grid-cols-2 gap-3 text-sm">
              {[
                "Overview of Heart Valve Surgery",
                "What is Heart Valve Surgery?",
                "Symptoms of Heart Valve Disease",
                "Valve Replacement Surgery Cost in India",
                "Medical Tourism for Heart Valve Surgery in India",
                "Types of Heart Valve Surgery Available in India",
                "Diagnosis Before Valve Replacement Surgery",
                "Recovery Time After Valve Replacement Surgery",
                "Lifestyle After Heart Valve Surgery",
                "Risks Associated With Heart Valve Surgery",
                "Frequently Asked Questions – Heart Valve Surgery in India",
                "Final Thoughts: Making an Informed Decision",
              ].map((item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="hover:text-pink-600"
                >
                  › {item}
                </a>
              ))}
            </div>
          </div>

          {/* OVERVIEW */}
          <section id="overview-of-heart-valve-surgery" className="mb-16">
            <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6">
              Overview of Heart Valve Surgery
            </h2>
            <p className="bg-white p-6 rounded-xl shadow">
              Heart valve surgery is performed to repair or replace damaged
              valves that control blood flow in the heart. Timely intervention
              improves circulation, prevents heart failure and significantly
              enhances quality of life.
            </p>
          </section>

          {/* WHAT IS HEART VALVE SURGERY */}
          <section id="what-is-heart-valve-surgery" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              What is Heart Valve Surgery?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card
                icon={<HeartPulse />}
                title="Valves Affected"
                text="Mitral and aortic valves are most commonly involved due to narrowing or leakage."
              />

              <Card
                icon={<Activity />}
                title="Repair vs Replacement"
                text="Repair preserves the natural valve while replacement uses mechanical or tissue valves."
              />

              <Card
                icon={<ShieldCheck />}
                title="How Serious?"
                text="It is a major procedure but modern ICU care and techniques make it very safe."
              />
            </div>
          </section>

          {/* SYMPTOMS */}
          <section id="symptoms-of-heart-valve-disease" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">Symptoms of Heart Valve Disease</h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <GradientCard
                title="Early Signs"
                text="Fatigue, shortness of breath, palpitations and reduced exercise tolerance."
              />
              <GradientCard
                title="Advanced Symptoms"
                text="Chest pain, fainting, swelling in legs and severe breathlessness."
              />
              <GradientCard
                title="When to See Doctor"
                text="Consult a cardiologist if symptoms persist or worsen."
              />
            </div>
          </section>

          {/* COST */}
          <section id="valve-replacement-surgery-cost-in-india" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Valve Replacement Surgery Cost in India
            </h2>

            <div className="bg-white p-6 rounded-xl shadow mt-6">
              <p>
                The cost depends on valve type, surgical method, ICU stay and
                hospital infrastructure. India offers world-class treatment at
                significantly lower cost than Western countries.
              </p>
            </div>
          </section>

          {/* TYPES */}
          <section id="types-of-heart-valve-surgery-available-in-india" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Types of Heart Valve Surgery Available in India
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card
                icon={<Stethoscope />}
                title="Valve Repair"
                text="Preserves the natural valve and maintains heart mechanics."
              />
              <Card
                icon={<Activity />}
                title="Valve Replacement"
                text="Mechanical or biological prosthetic valve is used."
              />
              <Card
                icon={<Timer />}
                title="TAVI Procedure"
                text="Catheter-based valve replacement without open-heart surgery."
              />
            </div>
          </section>

          {/* DIAGNOSIS */}
          <section id="diagnosis-before-valve-replacement-surgery" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Diagnosis Before Valve Replacement Surgery
            </h2>

            <InfoBlock title="Echocardiography & TEE" />
            <InfoBlock title="Cardiac Catheterization" />
          </section>

          {/* RECOVERY */}
          <section id="recovery-time-after-valve-replacement-surgery" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Recovery Time After Valve Replacement Surgery
            </h2>

            <InfoBlock title="Home Recovery Timeline" />
            <InfoBlock title="Recovery After Minimally Invasive Procedures" />
          </section>

          {/* LIFESTYLE */}
          <section id="lifestyle-after-heart-valve-surgery" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Lifestyle After Heart Valve Surgery
            </h2>

            <InfoBlock title="Blood Thinners & Medication" />
            <InfoBlock title="Diet & Cardiac Rehabilitation" />
          </section>

          {/* RISKS */}
          <section id="risks-associated-with-heart-valve-surgery" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Risks Associated With Heart Valve Surgery
            </h2>

            <div className="bg-white p-6 rounded-xl shadow">
              Bleeding, infection, irregular heartbeat and blood clots are
              possible but rare when performed in experienced centers.
            </div>
          </section>

          {/* FAQ */}
          <section
  id="frequently-asked-questions-heart-valve-surgery-in-india"
  className="mb-16"
>
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
    Frequently Asked Questions – Heart Valve Surgery in India
  </h2>

  <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
    <div className="space-y-6">

      {[
        {
          q: "Is valve replacement a serious surgery?",
          a: "Yes, heart valve replacement is a major cardiac procedure. However, with modern surgical techniques, advanced ICU monitoring, and experienced cardiac teams, outcomes have significantly improved. The level of risk depends on age, overall health, and the specific valve condition."
        },
        {
          q: "What is the recovery time for heart valve surgery?",
          a: "Recovery depends on the type of surgery. Open-heart surgery requires several weeks, while minimally invasive procedures allow faster healing. Most patients resume light activities within a few weeks under cardiac rehabilitation."
        },
        {
          q: "Can you lead a normal life after heart valve replacement?",
          a: "Yes, many patients return to an active and fulfilling life. With proper medication, regular follow-ups, and a healthy lifestyle, breathing and energy levels improve significantly."
        },
        {
          q: "What are complications of heart valve replacement?",
          a: "Possible complications include bleeding, infection, irregular heartbeat, blood clots, or valve dysfunction. Choosing an experienced cardiac center greatly reduces these risks."
        },
        {
          q: "What is the cost of heart valve surgery in India?",
          a: "The cost varies based on procedure type, hospital category, ICU stay, valve material, and patient condition. Hospitals usually provide comprehensive packages for transparent planning."
        },
        {
          q: "What is valve replacement surgery cost in India for international patients?",
          a: "For international patients, total cost may include surgery, hospital stay, visa support, accommodation, and follow-ups. India is preferred for affordable advanced cardiac care."
        },
        {
          q: "How many hours is heart valve surgery?",
          a: "The duration depends on complexity. Single valve procedures take a few hours, while double valve or Bentall procedures may take longer."
        },
        {
          q: "How painful is heart valve surgery?",
          a: "Pain is managed effectively with modern anesthesia and medications. Minimally invasive procedures usually involve less discomfort."
        },
        {
          q: "What is Mitral Valve Repair and when is it recommended?",
          a: "Mitral Valve Repair is performed when the mitral valve leaks. It is preferred when possible because it preserves the natural valve and heart function."
        },
        {
          q: "What is Aortic Valve Repair?",
          a: "It corrects narrowing or leakage of the aortic valve. In advanced cases, replacement or TAVI may be required."
        },
        {
          q: "What is Double Valve Replacement?",
          a: "It involves replacing two damaged valves in a single surgery and is done in complex cases by experienced cardiac surgeons."
        },
        {
          q: "What is Transcatheter Aortic Valve Implantation (TAVI)?",
          a: "TAVI is a minimally invasive procedure where a new valve is inserted using a catheter without open-heart surgery."
        },
        {
          q: "What is the success rate of valve replacement surgery?",
          a: "With modern techniques and experienced teams, success rates are very high. Long-term outcomes depend on follow-ups and lifestyle."
        },
        {
          q: "How serious is heart valve replacement surgery for elderly patients?",
          a: "Age alone does not decide risk. Doctors evaluate overall health and may recommend minimally invasive procedures like TAVI."
        },
        {
          q: "What is the difference between valve repair and valve replacement?",
          a: "Repair preserves the natural valve, while replacement uses a mechanical or biological valve. The choice depends on valve damage and patient condition."
        },
        {
          q: "How long does a replaced heart valve last?",
          a: "Mechanical valves last very long but require lifelong medication. Biological valves may have limited lifespan but often do not need long-term anticoagulation."
        },
        {
          q: "What tests are required before heart valve surgery?",
          a: "Tests include echocardiography, ECG, blood tests, chest imaging, and sometimes coronary angiography."
        },
        {
          q: "Is heart valve surgery safe in India?",
          a: "Yes, India has advanced cardiac centers, modern ICUs, and highly experienced surgeons ensuring safe outcomes."
        },
        {
          q: "How long is hospital stay after valve replacement?",
          a: "Open-heart surgery requires several days including ICU stay. Minimally invasive procedures reduce hospital stay."
        },
        {
          q: "What lifestyle changes are needed after heart valve surgery?",
          a: "Heart-healthy diet, regular exercise, avoiding smoking, medication adherence, and routine follow-ups are essential."
        }

      ].map((faq, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-lg font-bold text-pink-700 mb-3">
            {faq.q}
          </h3>
          <p className="text-gray-700 leading-relaxed">{faq.a}</p>
        </div>
      ))}

    </div>
  </div>
</section>

          {/* FINAL */}
          <section id="final-thoughts-making-an-informed-decision" className="mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Final Thoughts: Making an Informed Decision
            </h2>

            <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-xl shadow">
              Timely consultation with a cardiac specialist, choosing an
              experienced hospital and following rehabilitation ensures long-term
              success.
            </div>
          </section>

          <CTA />
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-3">
          <div className="sticky top-24 bg-gray-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-4 text-blue-900">
              Book Free Consultation
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

const Card = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
    <div className="text-pink-600 mb-3">{icon}</div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

const GradientCard = ({ title, text }) => (
  <div className="bg-gradient-to-br from-pink-100 to-purple-50 p-6 rounded-xl shadow">
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-700">{text}</p>
  </div>
);

const InfoBlock = ({ title }) => (
  <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500 mb-4">
    <h3 className="font-bold">{title}</h3>
  </div>
);

const FAQ = ({ q, a }) => (
  <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-5 rounded-xl mb-4">
    <h3 className="font-bold text-pink-700">{q}</h3>
    <p className="text-gray-700 mt-2">{a}</p>
  </div>
);
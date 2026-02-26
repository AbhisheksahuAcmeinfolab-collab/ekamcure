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
    "Heart Valve Surgery in India – Types, Cost, Success Rate & Treatment Options",
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
                "Conditions That May Require Heart Valve Surgery",
                "Symptoms of Heart Valve Disease",
                "Valve Replacement Surgery Cost in India",
                "Valve Replacement Surgery Cost Comparison (USD)",
                "Medical Tourism for Heart Valve Surgery in India",
                "Heart Valve Surgery Specialist in India",
                "Types of Heart Valve Surgery Available in India",
                "Open Surgery vs. Minimally Invasive Valve Surgery",
                "Diagnosis Before Valve Replacement Surgery",
                "ICU Care After Heart Valve Surgery",
                "Recovery Time After Valve Replacement Surgery",
                "Lifestyle After Heart Valve Surgery",
                "Risks Associated With Heart Valve Surgery",
                "Special Considerations for Elderly Patients",
                "Long-Term Outcomes After Heart Valve Surgery",
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
              Heart valve surgery is a specialized cardiac procedure performed to repair or replace damaged heart valves that regulate blood flow. When valves fail to open or close properly, circulation becomes inefficient. Timely surgical intervention restores normal blood flow, reduces complications, and significantly improves long-term heart function and quality of life.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold text-lg mb-3">Why Heart Valve Surgery Becomes Necessary</h3>
                <p className="text-gray-700 text-sm">
                  Heart valve surgery becomes necessary when medications no longer control symptoms or when structural damage threatens heart function. Untreated valve disorders can lead to heart failure, irregular heart rhythms, stroke, or organ damage. Early surgical correction helps prevent irreversible complications and supports safer long-term recovery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold text-lg mb-3">Modern Advances in Valve Treatment</h3>
                <p className="text-gray-700 text-sm">
                  Modern cardiology offers minimally invasive procedures, robotic-assisted techniques, and catheter-based interventions. Treatments like Transcatheter Aortic Valve Implantation (TAVI) allow selected patients to undergo valve replacement without open-heart surgery. These innovations reduce hospital stay, improve precision, and support faster rehabilitation.
                </p>
              </div>
            </div>
          </section>

          {/* WHAT IS HEART VALVE SURGERY */}
          <section id="what-is-heart-valve-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              What is Heart Valve Surgery?
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Heart valve surgery is a procedure designed to correct malfunctioning valves that control blood flow between heart chambers. Depending on severity, surgeons may repair the native valve or replace it with a mechanical or biological prosthesis to restore efficient circulation and reduce cardiac strain.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card
                icon={<HeartPulse />}
                title="Heart Valves Affected by Disease"
                text="The four valves—mitral, aortic, tricuspid, and pulmonary—can be affected by narrowing (stenosis) or leakage (regurgitation). Among these, aortic and mitral valves are most commonly treated surgically. Structural defects, age-related degeneration, infections, or congenital abnormalities may impair valve function."
              />
              <Card
                icon={<Activity />}
                title="Repair vs. Valve Replacement Surgery"
                text="Valve repair preserves the patient's natural valve and is often preferred when feasible. Replacement surgery involves inserting a mechanical or tissue valve when repair is not possible. The choice depends on valve condition, patient age, lifestyle considerations, and long-term management needs."
              />
              <Card
                icon={<ShieldCheck />}
                title="How Serious is Heart Valve Replacement Surgery?"
                text="Heart valve replacement is a major cardiac procedure performed under specialized care. While it carries typical surgical risks, advancements in anesthesia, surgical techniques, and post-operative monitoring have improved safety significantly. Careful evaluation and timely intervention enhance recovery and long-term outcomes."
              />
            </div>
          </section>

          {/* CONDITIONS */}
          <section id="conditions-that-may-require-heart-valve-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Conditions That May Require Heart Valve Surgery
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Several structural and degenerative heart conditions may require surgical correction. Severe narrowing, valve leakage, infections like endocarditis, or inherited connective tissue disorders can progressively weaken heart performance and demand timely surgical intervention.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Aortic Stenosis Treatment and Severe Valve Narrowing</h3>
                <p className="text-sm text-gray-700">
                  Aortic stenosis occurs when the aortic valve narrows, restricting blood flow from the heart to the body. Severe cases may require surgical replacement or catheter-based intervention such as Transcatheter Aortic Valve Implantation, depending on patient suitability and clinical evaluation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Mitral Regurgitation and Structural Valve Defects</h3>
                <p className="text-sm text-gray-700">
                  Mitral regurgitation develops when the mitral valve fails to close tightly, allowing blood to flow backward. Persistent leakage enlarges the heart and weakens pumping efficiency. Surgical repair is often preferred, though replacement may be required in advanced structural damage.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Complex Cases Requiring Bentall Procedure</h3>
                <p className="text-sm text-gray-700">
                  The Bentall procedure is performed in complex cases involving the aortic valve and ascending aorta. It replaces the damaged valve and affected aortic segment simultaneously, often recommended for aneurysms or connective tissue disorders affecting the aortic root.
                </p>
              </div>
            </div>
          </section>

          {/* SYMPTOMS */}
          <section id="symptoms-of-heart-valve-disease" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Symptoms of Heart Valve Disease
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Heart valve disease symptoms vary depending on severity and the valve involved. Some individuals remain asymptomatic for years, while others experience progressive limitations in daily activities. Recognizing early warning signs supports timely diagnosis and intervention.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <GradientCard
                title="Early Warning Signs"
                text="Early symptoms may include fatigue, shortness of breath during exertion, mild chest discomfort, or irregular heartbeat. These signs are often subtle and mistaken for general weakness or aging. Regular cardiac evaluations help detect valve abnormalities before complications develop."
              />
              <GradientCard
                title="Advanced Symptoms Requiring Urgent Evaluation"
                text="Advanced symptoms include severe breathlessness, swelling in legs, chest pain, fainting episodes, or sudden palpitations. These may indicate worsening valve dysfunction and require urgent medical evaluation to prevent heart failure or life-threatening complications."
              />
              <GradientCard
                title="When to Consult a Cardiac Specialist"
                text="Consult a cardiac specialist if symptoms persist, worsen, or if diagnostic tests reveal valve abnormalities. Early consultation ensures accurate assessment through echocardiography and other imaging methods, enabling timely decisions regarding monitoring, repair, or replacement."
              />
            </div>
          </section>

          {/* COST */}
          <section id="valve-replacement-surgery-cost-in-india" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Valve Replacement Surgery Cost in India
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Valve replacement surgery cost in India varies depending on hospital infrastructure, surgeon expertise, valve type, and patient condition. Despite advanced facilities, treatment remains significantly more affordable compared to many Western countries, without compromising clinical standards.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Factors Affecting Valve Replacement Surgery Price</h3>
                <p className="text-sm text-gray-700">
                  Costs are influenced by valve type (mechanical or tissue), surgical approach, hospital category, intensive care duration, and additional investigations. Complex procedures or minimally invasive techniques may alter overall pricing based on equipment and postoperative monitoring needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Mitral Valve Replacement Surgery Cost in India</h3>
                <p className="text-sm text-gray-700">
                  Mitral valve replacement cost depends on the extent of damage, need for repair versus replacement, and associated cardiac conditions. Hospitals typically offer comprehensive packages covering surgery, hospital stay, routine medications, and standard follow-up care.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Aortic Valve Replacement Surgery Cost in India</h3>
                <p className="text-sm text-gray-700">
                  Aortic valve replacement cost varies based on whether traditional open surgery or catheter-based approaches like TAVI are used. Patient age, risk profile, and prosthetic valve selection also contribute to the overall treatment expense.
                </p>
              </div>
            </div>
          </section>

          {/* COST COMPARISON TABLE */}
          <section id="valve-replacement-surgery-cost-comparison-usd" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Valve Replacement Surgery Cost Comparison (USD)
            </h2>
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                    <th className="p-4 text-left font-bold">Country</th>
                    <th className="p-4 text-left font-bold">Estimated Price (USD)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["India", "$6,000 – $12,000"],
                    ["United States", "$90,000 – $200,000"],
                    ["United Kingdom", "$40,000 – $80,000"],
                    ["Germany", "$45,000 – $85,000"],
                    ["Australia", "$50,000 – $100,000"],
                    ["Singapore", "$60,000 – $110,000"],
                    ["Thailand", "$18,000 – $30,000"],
                    ["Turkey", "$20,000 – $35,000"],
                  ].map(([country, price], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-pink-50" : "bg-white"}>
                      <td className="p-4 font-medium">{country}</td>
                      <td className="p-4 text-pink-700 font-semibold">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* MEDICAL TOURISM */}
          <section id="medical-tourism-for-heart-valve-surgery-in-india" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Medical Tourism for Heart Valve Surgery in India
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              India has become a global hub for cardiac medical tourism, offering advanced surgical care with structured international patient support. Hospitals provide coordinated services from consultation to recovery, ensuring smooth treatment experiences for overseas patients.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Why International Patients Choose India</h3>
                <p className="text-sm text-gray-700">
                  International patients choose India for experienced cardiac teams, English-speaking medical staff, and internationally accredited hospitals. Efficient scheduling, shorter waiting periods, and comprehensive cardiac programs make treatment accessible and reliable for global visitors.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Treatment Packages and Cost Transparency</h3>
                <p className="text-sm text-gray-700">
                  Hospitals offer clearly defined treatment packages that include surgery, diagnostics, hospital stay, and routine follow-ups. Transparent billing practices help patients understand inclusions beforehand, reducing financial uncertainty and improving treatment planning.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Pre- and Post-Surgery Support for Overseas Patients</h3>
                <p className="text-sm text-gray-700">
                  Dedicated international patient departments assist with medical visas, airport transfers, accommodation, and interpreter services. Structured post-surgery follow-up plans, including teleconsultations, ensure continuity of care even after patients return to their home country.
                </p>
              </div>
            </div>
          </section>

          {/* SPECIALIST */}
          <section id="heart-valve-surgery-specialist-in-india" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Heart Valve Surgery Specialist in India
            </h2>
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700">
                A heart valve surgery specialist in India is typically a senior cardiac surgeon with advanced training in valve repair and replacement procedures. These experts work within multidisciplinary cardiac teams, follow international safety protocols, and perform complex surgeries including minimally invasive and catheter-based valve interventions.
              </p>
            </div>
          </section>

          {/* TYPES */}
          <section id="types-of-heart-valve-surgery-available-in-india" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Types of Heart Valve Surgery Available in India
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              India offers a comprehensive range of heart valve procedures, from conventional open-heart surgery to advanced catheter-based treatments. The choice of surgery depends on valve condition, patient age, overall health, and structural complexity of the disease.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <Card
                icon={<Stethoscope />}
                title="Valve Repair Procedures"
                text="Valve repair procedures aim to preserve the patient's natural valve whenever possible. Techniques may involve reshaping valve leaflets, tightening supporting structures, or correcting prolapse. Repair is often preferred for suitable mitral valve conditions because it maintains natural heart mechanics and may reduce long-term medication needs."
              />
              <Card
                icon={<Activity />}
                title="Valve Replacement Procedures"
                text="Valve replacement is performed when the native valve is severely damaged and cannot be repaired. Surgeons replace it with a mechanical or biological tissue valve. The decision depends on patient age, lifestyle, medical history, and the need for long-term anticoagulation therapy."
              />
              <Card
                icon={<Timer />}
                title="Minimally Invasive & Catheter-Based Procedures (TAVI)"
                text="Minimally invasive approaches use smaller incisions or catheter-based access to treat valve disease. Procedures such as Transcatheter Aortic Valve Implantation (TAVI) allow selected patients to undergo aortic valve replacement without traditional open-heart surgery, reducing hospital stay and supporting faster recovery."
              />
            </div>
          </section>

          {/* OPEN VS MINIMALLY INVASIVE */}
          <section id="open-surgery-vs-minimally-invasive-valve-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Open Surgery vs. Minimally Invasive Valve Surgery
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Both open and minimally invasive valve surgeries are effective treatment options. The most appropriate technique depends on valve anatomy, patient risk profile, and surgeon expertise. Careful evaluation ensures the safest and most beneficial surgical plan.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Differences in Surgical Approach</h3>
                <p className="text-sm text-gray-700">
                  Open-heart surgery requires a larger chest incision and direct access to the heart using a heart-lung machine. Minimally invasive surgery uses smaller incisions or catheter entry points, reducing tissue disruption while achieving similar corrective outcomes in selected patients.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Recovery Time and ICU Stay</h3>
                <p className="text-sm text-gray-700">
                  Open surgery generally involves a longer ICU stay and recovery period due to the extent of the incision. Minimally invasive procedures may shorten hospitalization and allow earlier mobilization, though recovery still depends on individual health conditions and surgical complexity.
                </p>
              </div>
            </div>
          </section>

          {/* DIAGNOSIS */}
          <section id="diagnosis-before-valve-replacement-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Diagnosis Before Valve Replacement Surgery
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Accurate diagnosis is essential before planning valve surgery. Cardiologists assess valve structure, severity of narrowing or leakage, and heart function to determine whether repair or replacement is necessary and to choose the safest surgical approach.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Echocardiography and TEE Evaluation</h3>
                <p className="text-sm text-gray-700">
                  Echocardiography is the primary imaging tool used to evaluate valve structure and blood flow. Transesophageal echocardiography (TEE) provides detailed internal images of the heart, helping surgeons understand valve anatomy and plan precise surgical correction.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Cardiac Catheterization and Imaging Tests</h3>
                <p className="text-sm text-gray-700">
                  Cardiac catheterization helps assess coronary arteries and pressure measurements inside the heart. Additional imaging tests such as CT scans or MRI may be recommended to evaluate the aorta, detect structural abnormalities, and guide surgical planning.
                </p>
              </div>
            </div>
          </section>

          {/* ICU CARE */}
          <section id="icu-care-after-heart-valve-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              ICU Care After Heart Valve Surgery
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Post-operative ICU care is critical for monitoring heart rhythm, blood pressure, oxygen levels, and overall stability. Specialized cardiac teams ensure that patients transition safely from surgery to recovery while preventing complications.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Immediate Post-Surgery Monitoring</h3>
                <p className="text-sm text-gray-700">
                  Immediately after surgery, patients are closely observed for heart function, bleeding risks, and fluid balance. Continuous cardiac monitoring allows early detection of rhythm disturbances or blood pressure fluctuations requiring prompt medical attention.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Ventilator Support and Pain Management</h3>
                <p className="text-sm text-gray-700">
                  Patients may require temporary ventilator support until they regain stable breathing. Pain management protocols ensure comfort while encouraging early movement and breathing exercises, both of which are important for preventing lung-related complications.
                </p>
              </div>
            </div>
          </section>

          {/* RECOVERY */}
          <section id="recovery-time-after-valve-replacement-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Recovery Time After Valve Replacement Surgery
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Recovery time varies depending on surgical method, patient age, and overall health. While hospital discharge may occur within days, complete healing and return to routine activities require structured rehabilitation and follow-up care.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Home Recovery Timeline</h3>
                <p className="text-sm text-gray-700">
                  At home, patients gradually increase physical activity under medical guidance. Light walking is usually encouraged early, while strenuous activities are avoided initially. Follow-up appointments monitor wound healing, heart function, and medication adjustment.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Recovery After Minimally Invasive Procedures</h3>
                <p className="text-sm text-gray-700">
                  Patients undergoing minimally invasive or catheter-based procedures often experience shorter recovery periods. Smaller incisions may reduce discomfort and allow quicker return to daily tasks, though ongoing cardiac monitoring remains essential.
                </p>
              </div>
            </div>
          </section>

          {/* LIFESTYLE */}
          <section id="lifestyle-after-heart-valve-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Lifestyle After Heart Valve Surgery
            </h2>
            <p className="bg-white p-6 rounded-xl shadow mb-6">
              Adopting heart-healthy habits is vital after valve surgery. Long-term outcomes depend not only on surgical success but also on medication adherence, diet control, physical activity, and regular follow-up with a cardiac specialist.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Blood Thinners and Medication Management</h3>
                <p className="text-sm text-gray-700">
                  Patients with mechanical valves may require long-term blood thinners to prevent clot formation. Regular monitoring ensures safe dosage levels. Other medications may include drugs for blood pressure control, rhythm management, or heart function support.
                </p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Diet and Cardiac Rehabilitation</h3>
                <p className="text-sm text-gray-700">
                  A balanced diet low in saturated fats and excess salt supports heart recovery. Structured cardiac rehabilitation programs include supervised exercise, education, and lifestyle counseling, helping patients rebuild strength and maintain long-term cardiovascular health.
                </p>
              </div>
            </div>
          </section>

          {/* RISKS */}
          <section id="risks-associated-with-heart-valve-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Risks Associated With Heart Valve Surgery
            </h2>
            <div className="bg-white p-6 rounded-xl shadow mb-6">
              <p className="text-gray-700 mb-4">
                Heart valve surgery is generally safe when performed by experienced cardiac teams. However, as with any major heart procedure, certain risks must be understood beforehand. Proper evaluation, surgical planning, and postoperative monitoring significantly reduce complications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-3">Common Surgical Risks</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Bleeding during or after surgery requiring medical intervention.</li>
                  <li>• Infection at the surgical site or inside the heart (endocarditis).</li>
                  <li>• Irregular heart rhythms, blood clots, stroke, or temporary kidney dysfunction.</li>
                  <li>• Mechanical valves may require lifelong blood-thinning medication.</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-3">Maintaining High Valve Replacement Surgery Success Rate</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Early diagnosis and timely surgery improve outcomes.</li>
                  <li>• Choosing an experienced cardiac surgeon and accredited hospital is critical.</li>
                  <li>• Strict adherence to postoperative medications and cardiac rehabilitation supports long-term valve function.</li>
                  <li>• Regular follow-up with echocardiography ensures ongoing monitoring.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* SPECIAL CONSIDERATIONS FOR ELDERLY */}
          <section id="special-considerations-for-elderly-patients" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Special Considerations for Elderly Patients
            </h2>
            <div className="bg-white p-6 rounded-xl shadow">
              <ul className="text-gray-700 space-y-3">
                <li>• Advanced age alone does not automatically exclude surgery.</li>
                <li>• Doctors assess overall health, lung function, kidney function, and mobility.</li>
                <li>• Minimally invasive approaches or catheter-based treatments may be preferred in high-risk elderly patients.</li>
                <li>• Personalized treatment planning helps balance benefits and surgical risk.</li>
              </ul>
            </div>
          </section>

          {/* LONG-TERM OUTCOMES */}
          <section id="long-term-outcomes-after-heart-valve-surgery" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Long-Term Outcomes After Heart Valve Surgery
            </h2>
            <div className="bg-white p-6 rounded-xl shadow">
              <ul className="text-gray-700 space-y-3">
                <li>• Most patients experience significant improvement in breathing and physical stamina.</li>
                <li>• Lifestyle modifications, including diet and exercise, support heart health.</li>
                <li>• Mechanical valves require ongoing anticoagulation monitoring.</li>
                <li>• Biological valves may eventually need replacement, depending on durability and patient age.</li>
                <li>• Lifelong cardiac follow-up remains essential.</li>
              </ul>
            </div>
          </section>

          {/* FAQ */}
          <section id="frequently-asked-questions-heart-valve-surgery-in-india" className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Frequently Asked Questions – Heart Valve Surgery in India
            </h2>

            <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
              <div className="space-y-6">
                {[
                  {
                    q: "1. Is valve replacement a serious surgery?",
                    a: "Yes, heart valve replacement is a major cardiac procedure because it involves repairing or replacing a damaged heart valve. However, with modern surgical techniques, advanced ICU monitoring, and experienced cardiac teams, outcomes have significantly improved. The level of risk depends on age, overall health, and the specific valve condition."
                  },
                  {
                    q: "2. What is the recovery time for heart valve surgery?",
                    a: "Recovery time depends on the type of surgery performed. Open-heart valve surgery usually requires several weeks for healing, while minimally invasive procedures may allow faster recovery. Most patients resume light activities within a few weeks and gradually regain full strength under guided cardiac rehabilitation."
                  },
                  {
                    q: "3. Can you lead a normal life after heart valve replacement?",
                    a: "Many patients return to an active and fulfilling life after heart valve replacement. With proper medication, regular follow-ups, and healthy lifestyle changes, individuals often experience improved breathing and energy levels. Long-term success depends on adherence to medical advice and consistent cardiac monitoring."
                  },
                  {
                    q: "4. What are complications of heart valve replacement?",
                    a: "Possible complications include bleeding, infection, irregular heartbeat, blood clots, or valve dysfunction. However, careful pre-surgical assessment, experienced surgeons, and structured post-operative care significantly reduce these risks. Selecting a specialized cardiac center improves safety and recovery outcomes."
                  },
                  {
                    q: "5. What is the cost of heart valve surgery in India?",
                    a: "Heart valve surgery cost in India varies depending on the procedure type, hospital category, ICU stay, valve material, and medical condition. Hospitals usually offer comprehensive packages covering surgeon fees, operating charges, ICU care, and investigations for transparent financial planning."
                  },
                  {
                    q: "6. What is valve replacement surgery cost in India for international patients?",
                    a: "For international patients, the total expense may include surgery, hospitalization, visa support, accommodation, and follow-up consultations. India is often preferred because it offers advanced cardiac treatment with internationally trained surgeons and structured medical tourism assistance."
                  },
                  {
                    q: "7. How many hours is heart valve surgery?",
                    a: "The duration depends on the complexity of the condition. Single valve procedures may take several hours, while double valve replacement or complex cases such as Bentall procedure may require longer operating time. Minimally invasive methods may reduce operative duration in selected patients."
                  },
                  {
                    q: "8. How painful is heart valve surgery?",
                    a: "Modern anesthesia and pain management techniques help control discomfort effectively. While mild to moderate pain is expected after surgery, it is managed through medications and rehabilitation programs. Minimally invasive approaches may involve less post-operative discomfort."
                  },
                  {
                    q: "9. What is Mitral Valve Repair and when is it recommended?",
                    a: "Mitral Valve Repair is performed when the mitral valve does not close properly, causing blood leakage. Repair is often preferred over replacement when feasible because it preserves natural valve structure and function. The decision depends on severity and overall cardiac condition."
                  },
                  {
                    q: "10. What is Aortic Valve Repair?",
                    a: "Aortic Valve Repair corrects narrowing or leakage of the aortic valve. It may be recommended in early-stage valve disease. In advanced cases, valve replacement or procedures like Transcatheter Aortic Valve Implantation (TAVI) may be considered."
                  },
                  {
                    q: "11. What is Double Valve Replacement?",
                    a: "Double Valve Replacement involves replacing two damaged heart valves during one surgical session. It is recommended when both valves are severely diseased. The procedure requires detailed evaluation and is performed by experienced cardiac surgeons."
                  },
                  {
                    q: "12. What is Transcatheter Aortic Valve Implantation (TAVI)?",
                    a: "TAVI is a minimally invasive procedure used to treat severe aortic stenosis. Instead of open-heart surgery, a new valve is inserted via a catheter. It is often recommended for high-risk or elderly patients after careful evaluation."
                  },
                  {
                    q: "13. What is the success rate of valve replacement surgery?",
                    a: "Success depends on patient health, surgical expertise, and post-operative care. With modern techniques and experienced cardiac teams, outcomes have improved significantly. Long-term success also depends on lifestyle changes and medical follow-up."
                  },
                  {
                    q: "14. How serious is heart valve replacement surgery for elderly patients?",
                    a: "Age alone does not determine surgical risk. Doctors evaluate overall health, organ function, and severity of valve disease before recommending treatment. Minimally invasive procedures such as TAVI may be considered for selected elderly patients."
                  },
                  {
                    q: "15. What is the difference between valve repair and valve replacement?",
                    a: "Valve repair preserves the patient's natural valve structure, while valve replacement substitutes it with a mechanical or biological valve. The choice depends on valve damage severity, patient age, and long-term medical considerations."
                  },
                  {
                    q: "16. How long does a replaced heart valve last?",
                    a: "Durability depends on the type of valve used. Mechanical valves are designed for long-term durability but require lifelong medication. Biological valves may not require long-term anticoagulation but may have limited lifespan. The choice is individualized."
                  },
                  {
                    q: "17. What tests are required before heart valve surgery?",
                    a: "Patients typically undergo echocardiography, blood tests, ECG, chest imaging, and sometimes coronary angiography. These evaluations help surgeons plan the procedure safely and identify any additional cardiac issues."
                  },
                  {
                    q: "18. Is heart valve surgery safe in India?",
                    a: "India has advanced cardiac centers equipped with modern operation theatres and cardiac ICUs. Experienced surgeons and structured pre-operative assessments contribute to improved safety. Patients should select accredited hospitals with dedicated cardiac units."
                  },
                  {
                    q: "19. How long is hospital stay after valve replacement?",
                    a: "Hospital stay varies depending on procedure type and patient recovery. Open-heart surgeries generally require several days in ICU followed by ward recovery, while minimally invasive procedures may reduce hospitalization duration."
                  },
                  {
                    q: "20. What lifestyle changes are needed after heart valve surgery?",
                    a: "Patients are advised to follow heart-healthy diets, avoid smoking, maintain weight, exercise regularly, and attend routine follow-ups. Medication compliance and periodic echocardiograms are important for long-term valve health."
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
              Final Thoughts: Making an Informed Decision
            </h2>
            <div className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 rounded-xl shadow">
              <ul className="text-gray-800 space-y-3">
                <li>• Understanding your diagnosis and treatment options empowers confident decision-making.</li>
                <li>• Discuss risks, benefits, and alternatives clearly with a cardiac specialist.</li>
                <li>• Evaluate hospital expertise, surgical experience, and postoperative care facilities.</li>
                <li>• Timely intervention can significantly improve quality of life and long-term heart function.</li>
              </ul>
              <p className="mt-4 text-gray-800">
                If you or a loved one is considering heart valve surgery in India, consult a qualified cardiologist to receive a personalized treatment plan tailored to your specific heart condition.
              </p>
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
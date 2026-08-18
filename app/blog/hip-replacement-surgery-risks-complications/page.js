import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Hip Replacement Surgery Risks & Complications',
  description: 'Learn about hip replacement surgery risks and complications, including infection, blood clots, dislocation, implant problems and revision surgery.',
  alternates: {
    canonical: 'https://www.ekamcure.com/blog/hip-replacement-surgery-risks-complications',
  },
};

export default function HipReplacementRisksPage() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800">
      {/* Header / Hero Section */}
      <section className="bg-gradient-to-r from-sky-100 via-white to-sky-50 border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 uppercase tracking-wider mb-3">
            <span>Blog</span>
            <span>•</span>
            <span>Orthopedics & Joint Surgery</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Hip Replacement Surgery Risks and Complications
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Hip replacement surgery is an established treatment for people with severe hip joint damage, persistent pain and reduced mobility. Although many appropriately selected patients experience significant improvement after surgery, it is still a major surgical procedure and carries potential risks.
          </p>
          <p className="text-slate-600 leading-relaxed">
            For patients considering hip replacement surgery in India, understanding possible complications is an important part of making an informed treatment decision. The level of risk varies between individuals and may depend on age, general health, underlying hip condition, surgical technique, implant selection and post-operative care.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Intro Note */}
        <div className="bg-sky-50 border-l-4 border-sky-600 p-5 rounded-r-xl">
          <p className="text-sky-900 text-sm md:text-base leading-relaxed">
            This guide explains the potential risks and complications of hip replacement surgery while keeping the focus specifically on medical risks and complications, rather than treatment cost, hospital rankings, implant comparisons or detailed recovery guidance.
          </p>
        </div>

        {/* Overview Box */}
        <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            What Are the Risks of Hip Replacement Surgery?
          </h2>
          <p className="text-slate-600 mb-6">
            Potential risks and complications can include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Infection',
              'Blood clots',
              'Dislocation',
              'Fracture',
              'Nerve or blood-vessel injury',
              'Leg-length difference',
              'Implant loosening or wear',
              'Persistent pain',
              'Joint stiffness',
              'Implant failure',
              'Need for revision surgery',
              'Anaesthesia-related complications',
            ].map((risk, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm font-medium text-slate-800">
                <span className="h-2 w-2 rounded-full bg-sky-600 flex-shrink-0"></span>
                {risk}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-6 italic">
            Not every patient will experience these complications. Some are uncommon, while others may occur more frequently during the early recovery period.
          </p>
        </section>

        {/* Detailed Complications Section */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            15 Potential Risks & Complications Explained
          </h2>

          <div className="space-y-6">
            {/* 1. Infection */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Infection</h3>
              <p className="text-slate-600 mb-4">
                Infection is one of the important complications that can occur after hip replacement surgery. An infection may develop around the surgical wound or, in more serious cases, around the artificial joint.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <span className="font-semibold text-amber-900 block mb-2 text-sm">Possible warning signs can include:</span>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs md:text-sm text-amber-800">
                  <li>• Increasing pain</li>
                  <li>• Redness around wound</li>
                  <li>• Swelling</li>
                  <li>• Wound drainage</li>
                  <li>• Fever</li>
                  <li>• Chills</li>
                  <li>• Feeling generally unwell</li>
                </ul>
              </div>
              <p className="text-sm text-slate-600">
                A suspected infection following surgery should be assessed promptly by a medical professional. Treatment depends on the type and severity of infection and may involve antibiotics, additional procedures or further surgery.
              </p>
            </div>

            {/* 2. Blood Clots */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Blood Clots</h3>
              <p className="text-slate-600 mb-3">
                Blood clots can develop in the veins after major surgery, particularly when mobility is temporarily reduced. A clot in a deep vein is known as deep vein thrombosis (DVT).
              </p>
              <div className="mb-4">
                <span className="font-semibold text-slate-800 text-sm block mb-1">Possible symptoms may include:</span>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>Swelling in the leg</li>
                  <li>Leg pain or tenderness</li>
                  <li>Warmth</li>
                  <li>Skin discoloration</li>
                </ul>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                A blood clot can sometimes travel to the lungs, causing a pulmonary embolism (PE), which can be a medical emergency.
              </p>
              <p className="text-sm text-slate-600">
                Hospitals may use measures such as early mobilization, compression devices and prescribed medication to reduce the risk where appropriate. Patients should follow their medical team's instructions regarding movement and medications.
              </p>
            </div>

            {/* 3. Hip Dislocation */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Hip Dislocation</h3>
              <p className="text-slate-600 mb-3">
                Dislocation occurs when the artificial ball moves out of the position where it normally sits within the artificial socket. Dislocation can occur particularly during the early period following surgery, although it can also happen later.
              </p>
              <div className="mb-4">
                <span className="font-semibold text-slate-800 text-sm block mb-1">Possible symptoms include:</span>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>Sudden hip pain</li>
                  <li>Difficulty standing or walking</li>
                  <li>An abnormal position of the leg</li>
                  <li>A feeling that the joint has moved out of place</li>
                </ul>
              </div>
              <p className="text-sm text-slate-600">
                A dislocated hip requires medical assessment. The risk of dislocation can be influenced by factors including surgical approach, implant design, patient anatomy, previous hip surgery and certain movements or activities. Patients should follow the movement precautions provided by their surgeon.
              </p>
            </div>

            {/* 4. Fracture Around the Implant */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">4. Fracture Around the Implant</h3>
              <p className="text-slate-600 mb-3">
                A fracture can occur around the artificial hip implant. This is sometimes called a periprosthetic fracture. It can occur during surgery or later following trauma such as a fall.
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-800 text-sm block mb-1">The likelihood may be influenced by:</span>
                <p className="text-sm text-slate-600">Bone quality, Age, Osteoporosis, Previous surgery, Falls or trauma, Implant-related factors.</p>
              </div>
              <p className="text-sm text-slate-600">
                Treatment depends on the location and severity of the fracture and may require surgical management.
              </p>
            </div>

            {/* 5. Nerve Injury */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">5. Nerve Injury</h3>
              <p className="text-slate-600 mb-3">
                Nerves around the hip can rarely be affected during surgery. A nerve injury may cause:
              </p>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mb-3">
                <li>Numbness</li>
                <li>Tingling</li>
                <li>Weakness</li>
                <li>Changes in sensation</li>
              </ul>
              <p className="text-sm text-slate-600">
                The severity and recovery of nerve-related symptoms vary. Patients who develop new or worsening neurological symptoms after surgery should contact their medical team.
              </p>
            </div>

            {/* 6. Blood-Vessel Injury */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">6. Blood-Vessel Injury</h3>
              <p className="text-slate-600 text-sm">
                Blood vessels are located around the hip and can rarely be injured during surgery. A significant vascular injury can require urgent treatment. The surgical team takes precautions to minimize this risk, but it cannot be completely eliminated.
              </p>
            </div>

            {/* 7. Leg-Length Difference */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">7. Leg-Length Difference</h3>
              <p className="text-slate-600 mb-3">
                Some patients may notice that one leg feels different in length after hip replacement. A small difference can sometimes occur despite careful surgical planning.
              </p>
              <div className="mb-3">
                <span className="font-semibold text-slate-800 text-sm block mb-1">Patients may experience:</span>
                <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                  <li>A feeling that one leg is longer or shorter</li>
                  <li>Changes in walking</li>
                  <li>Temporary discomfort while adapting</li>
                </ul>
              </div>
              <p className="text-sm text-slate-600">
                In some cases, the perceived difference may be related to muscle tension or changes in hip mechanics rather than an actual significant difference in bone length. Persistent symptoms should be evaluated by the treating specialist.
              </p>
            </div>

            {/* 8. Implant Loosening */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">8. Implant Loosening</h3>
              <p className="text-slate-600 mb-3">
                Over time, an artificial hip implant can become loose. Loosening may cause increasing pain, reduced function, difficulty walking, and a change in how the joint feels.
              </p>
              <p className="text-sm text-slate-600">
                Implant loosening can result from several factors, including normal wear, bone response, implant-related factors or other problems. If an implant becomes significantly loose, revision surgery may be considered.
              </p>
            </div>

            {/* 9. Implant Wear */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">9. Implant Wear</h3>
              <p className="text-slate-600 mb-3">
                Hip implants are designed for long-term use, but their components can undergo wear over time. Wear may be influenced by implant materials, implant design, patient activity, body weight, implant positioning, and length of time the implant has been in place.
              </p>
              <p className="text-sm text-slate-600">
                Significant wear can sometimes contribute to loosening or other implant-related problems.
              </p>
            </div>

            {/* 10. Persistent Hip Pain */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">10. Persistent Hip Pain</h3>
              <p className="text-slate-600 mb-3">
                One of the main goals of hip replacement is to reduce pain caused by the damaged hip joint. However, some patients may continue to experience pain after surgery.
              </p>
              <p className="text-sm text-slate-600">
                Persistent pain can have several possible causes, including soft-tissue problems, implant-related problems, infection, loosening, nerve-related symptoms, or problems originating outside the hip. Persistent or worsening pain should be assessed rather than assumed to be a normal part of recovery.
              </p>
            </div>

            {/* 11. Stiffness and Reduced Movement */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">11. Stiffness and Reduced Movement</h3>
              <p className="text-slate-600 mb-3">
                Hip replacement is intended to improve function, but some patients may experience stiffness or reduced movement after surgery.
              </p>
              <p className="text-sm text-slate-600">
                Possible contributing factors include pre-existing stiffness, muscle weakness, scar tissue, rehabilitation difficulties, and other medical conditions. The degree of improvement varies between individuals.
              </p>
            </div>

            {/* 12. Anaesthesia-Related Risks */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">12. Anaesthesia-Related Risks</h3>
              <p className="text-slate-600 mb-3">
                Hip replacement is performed using anaesthesia, and anaesthesia can carry its own risks. The level of risk depends on factors such as age, heart and lung health, existing medical conditions, medications, and type of anaesthesia.
              </p>
              <p className="text-sm text-slate-600">
                An anaesthesiologist evaluates the patient's health before surgery and determines the most appropriate anaesthesia plan. Prior to the surgery, patients should correctly report their medications and medical history.
              </p>
            </div>

            {/* 13. Wound-Healing Problems */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">13. Wound-Healing Problems</h3>
              <p className="text-slate-600 mb-3">
                After surgery, some people may have delayed wound healing. The risk may be influenced by factors such as diabetes, smoking, poor nutrition, certain medications, reduced blood supply, and other medical conditions.
              </p>
              <p className="text-sm text-slate-600">
                Patients should follow their medical team's wound-care instructions and report unusual drainage, increasing redness or other concerning changes.
              </p>
            </div>

            {/* 14. Blood Loss and Need for Blood Transfusion */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">14. Blood Loss and Need for Blood Transfusion</h3>
              <p className="text-slate-600 mb-3">
                Blood loss can occur during major surgery. The amount varies depending on surgical technique, patient characteristics, complexity of the procedure, and whether the surgery is primary or revision surgery.
              </p>
              <p className="text-sm text-slate-600">
                Additional care or a blood transfusion can be necessary in some situations. The treating team can discuss this risk based on the patient's individual circumstances.
              </p>
            </div>

            {/* 15. Implant Failure */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-3">15. Implant Failure</h3>
              <p className="text-slate-600 mb-3">
                Although modern hip implants are designed for long-term use, mechanical or biological problems can occur. Implant failure may be associated with loosening, wear, fracture, dislocation, infection, or other implant-related problems.
              </p>
              <p className="text-sm text-slate-600">
                If the implant no longer functions appropriately, the patient may require further evaluation and potentially revision surgery.
              </p>
            </div>
          </div>
        </section>

        {/* What Is Revision Surgery */}
        <section className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">What Is Revision Hip Replacement Surgery?</h2>
          <p className="text-slate-300 leading-relaxed mb-4">
            Revision hip replacement is surgery performed to address a problem with a previous hip replacement. Revision may become necessary because of infection, implant loosening, significant wear, repeated dislocation, fracture around the implant, implant failure, or other complications.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Revision surgery can be more complex than the original hip replacement because the surgeon may need to manage existing implants, damaged bone or scar tissue. Not every patient with a hip replacement will require revision surgery.
          </p>
        </section>

        {/* Risk Factors */}
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Who May Have a Higher Risk of Complications?
          </h2>
          <p className="text-slate-600 mb-6">
            Risk varies considerably between individuals. Factors that may affect surgical risk include:
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            {[
              { label: 'Age', text: 'Older patients may have additional medical conditions that can influence surgical risk and recovery.' },
              { label: 'Overall Health', text: 'Heart disease, lung disease, diabetes, kidney problems and other medical conditions may affect treatment planning.' },
              { label: 'Obesity', text: 'Higher body weight can affect surgical and post-operative risks in some patients.' },
              { label: 'Smoking', text: 'Smoking may have an impact on the healing of wounds and the overall results of surgery.' },
              { label: 'Previous Hip Surgery', text: 'Patients undergoing revision surgery or who have previously had surgery around the hip may have different risk profiles.' },
              { label: 'Bone Quality', text: 'Reduced bone density can affect implant fixation and fracture risk.' },
              { label: 'Medical History', text: 'Previous blood clots, infections, allergies and medication use should be discussed with the treating medical team.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">{item.label}</span>
                <span className="text-slate-600">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Prevention / How Risk Can Be Reduced */}
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            How Can the Risk of Hip Replacement Complications Be Reduced?
          </h2>
          <p className="text-slate-600">
            No treatment can eliminate all surgical risks, but appropriate preparation and follow-up may help reduce avoidable problems.
          </p>

          <div className="space-y-4 text-sm text-slate-600">
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Before Surgery</h3>
              <p>Patients should provide a complete medical history, inform the doctor about all medications, discuss allergies, complete recommended investigations, follow instructions regarding medications, stop smoking if advised, discuss weight management where appropriate, and follow pre-operative instructions.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-2">During Treatment</h3>
              <p>The medical team uses appropriate surgical, infection-control and monitoring procedures according to the patient's circumstances.</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base mb-2">After Surgery</h3>
              <p>Patients should follow medication instructions, follow wound-care instructions, attend scheduled follow-up appointments, participate in recommended rehabilitation, follow movement precautions, use walking aids as instructed, avoid activities that the surgeon has restricted, and report unusual symptoms promptly.</p>
            </div>
          </div>
        </section>

        {/* Warning Signs Box */}
        <section className="bg-red-50 border border-red-200 p-6 md:p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-red-950 mb-3">
            Warning Signs After Hip Replacement
          </h2>
          <p className="text-red-900 text-sm mb-4">
            Patients should contact their medical team if they develop concerning symptoms such as:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs md:text-sm text-red-800 font-medium">
            <span>• Increasing or severe pain</span>
            <span>• Fever or chills</span>
            <span>• Increasing redness or swelling</span>
            <span>• Wound drainage</span>
            <span>• Sudden difficulty walking</span>
            <span>• New weakness or numbness</span>
            <span>• Significant swelling in leg</span>
            <span>• Sudden shortness of breath</span>
            <span>• Chest pain</span>
            <span>• A suspected dislocation</span>
          </div>
          <p className="text-xs text-red-700 mt-4 italic">
            Some symptoms require urgent medical evaluation. Patients should follow the emergency instructions provided by their treating hospital.
          </p>
        </section>

        {/* Frequency & Long Term Risks */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Are Complications Common?</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              The likelihood of a complication depends on the individual patient and the type of procedure. Many patients undergo hip replacement without experiencing a major complication, but no surgical procedure is completely risk-free.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              When evaluating risk, consider personal health, hip condition, surgical technique, implant selection, and hospital experience. A surgeon can provide a more meaningful assessment after reviewing imaging.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Long-Term Risks</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-3">
              Yes. Some complications can occur months or years after surgery rather than immediately.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Long-term concerns may include implant wear, implant loosening, recurrent dislocation, periprosthetic fracture, infection, persistent pain, and need for revision surgery. This is why ongoing follow-up is necessary.
            </p>
          </div>
        </section>

        {/* International Patients Considerations */}
        <section className="bg-sky-50 border border-sky-200 p-6 md:p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-sky-950 mb-3">
            Hip Replacement Risks for International Patients
          </h2>
          <p className="text-sky-900 text-sm md:text-base leading-relaxed mb-4">
            International patients considering hip replacement in India should understand that travelling abroad for surgery introduces additional logistical considerations.
          </p>
          <p className="text-sky-900 text-sm leading-relaxed">
            Before travelling, patients should plan medical evaluation, hospital selection, specialist consultation, medical visa, accommodation, transportation, rehabilitation, follow-up, and return travel. Patients should also discuss how follow-up will be managed if they return to their home country after surgery.
          </p>
        </section>

        {/* Questions to Ask Your Surgeon */}
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Questions to Ask Your Hip Replacement Surgeon
          </h2>
          <p className="text-slate-600 text-sm mb-4">
            Before deciding on surgery, international and domestic patients can ask:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ What are my personal risks from hip replacement?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ Why do you recommend surgery in my case?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ What complications are most relevant to my medical history?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ What can I do before surgery to reduce avoidable risks?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ What implant is being considered and why?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ If issues arise, how will they be handled?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ Which symptoms should prompt me to call the hospital?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ How long will I need follow-up?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ What happens if the implant needs revision?</li>
            <li className="bg-slate-50 p-3 rounded-lg border border-slate-100">❓ How should follow-up be managed after I return home?</li>
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-6">
            Frequently Asked Questions
          </h2>
          {[
            {
              q: 'Is hip replacement surgery dangerous?',
              a: 'Hip replacement is a major surgical procedure and carries potential risks, but it is an established treatment performed routinely for appropriate patients. Individual risk varies according to health, age, diagnosis and other factors.',
            },
            {
              q: 'What is the most serious complication of hip replacement?',
              a: 'There is no single complication that is considered the most serious for every patient. Serious complications can include infection, blood clots, significant fracture, dislocation, vascular injury and other medical or surgical problems.',
            },
            {
              q: 'Can a hip replacement become infected?',
              a: 'Yes. Infection can occur after hip replacement and may require antibiotics, additional procedures or surgery depending on its severity.',
            },
            {
              q: 'Can a hip replacement dislocate?',
              a: 'Yes. An artificial hip can dislocate, particularly during certain periods after surgery. Patients should follow their surgeon\'s movement and activity recommendations.',
            },
            {
              q: 'Can a hip replacement fail?',
              a: 'Yes, although many implants function successfully for many years. Failure can occur because of infection, loosening, wear, fracture, dislocation or other problems.',
            },
            {
              q: 'Will I need another hip replacement?',
              a: 'Not necessarily. Some patients may eventually require revision surgery, but the likelihood varies depending on the patient, implant, activity, health and other factors.',
            },
            {
              q: 'Does hip replacement cause leg-length difference?',
              a: 'A difference in leg length can occur or be perceived after surgery. The clinical significance varies, and persistent symptoms should be assessed by the treating surgeon.',
            },
            {
              q: 'How can I reduce my risk of complications?',
              a: 'Following pre-operative instructions, providing an accurate medical history, taking prescribed medications correctly, following rehabilitation guidance and attending follow-up appointments can help support safe recovery.',
            },
            {
              q: 'Are the risks different for international patients?',
              a: 'The surgical risks are not inherently different simply because a patient is from another country. However, international patients have additional considerations such as travel, visa requirements, accommodation and arranging follow-up after returning home.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </section>

        {/* Final Takeaway & Ekam CTA Banner */}
        <section className="bg-gradient-to-r from-sky-900 to-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Final Takeaway</h2>
          <p className="text-sky-100 text-sm md:text-base leading-relaxed mb-4">
            Hip replacement surgery can significantly improve pain and mobility for appropriately selected patients, but it is important to understand the potential risks before treatment.
          </p>
          <p className="text-sky-100 text-sm md:text-base leading-relaxed mb-6">
            Possible complications include infection, blood clots, dislocation, fracture, nerve or blood-vessel injury, persistent pain, implant loosening, implant wear and the possibility of revision surgery. The level of risk is different for every patient.
          </p>

          <div className="border-t border-sky-800 pt-6 mt-6">
            <h3 className="text-xl font-bold text-amber-400 mb-2">Considering Hip Replacement Surgery in India?</h3>
            <p className="text-slate-300 text-sm mb-6">
              EkamCure can assist international patients with treatment coordination, hospital consultations and other aspects of planning medical care in India.
            </p>
            <button className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-3.5 rounded-lg shadow transition">
              Consult with EkamCure Team
            </button>
          </div>
        </section>

        {/* Educational Disclaimer */}
        <footer className="text-center text-xs text-slate-500 py-4">
          This article is for general educational purposes and does not replace medical advice. Individual risks and outcomes vary. Patients should discuss their specific circumstances with a qualified orthopaedic specialist.
        </footer>

      </div>
    </main>
  );
}

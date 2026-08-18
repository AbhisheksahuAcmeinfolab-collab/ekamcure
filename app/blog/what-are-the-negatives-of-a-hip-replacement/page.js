import Link from "next/link";

export const metadata = {
  title: "What Are the Negatives of a Hip Replacement?",
  description:
    "Learn about the negatives of a hip replacement, including potential risks, complications, side effects, recovery challenges, and long-term considerations.",
};

export default function HipReplacementNegativesPage() {
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
              Orthopaedic Insights • Surgical Risk Guide
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              What Are the Negatives of a Hip Replacement?
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Hip replacement provides substantial pain relief and mobility, but as a major surgical procedure, understanding its potential drawbacks, risks, and long-term considerations helps you make a well-informed decision.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10">
          
          {/* ARTICLE CONTENT */}
          <article className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] overflow-hidden">
            <div className="p-6 md:p-10 lg:p-12">
              
              {/* INTRODUCTION */}
              <section id="introduction" className="mb-12">
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  Hip replacement surgery is an effective treatment for joint damage, but like any major medical procedure, it carries specific risks, limitations, and potential drawbacks that patients should consider beforehand.
                </p>

                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  Understanding the full picture — including surgical risks, recovery requirements, activity modifications, and long-term implant performance — allows patients to set realistic expectations and work closely with their medical team for the best outcome.
                </p>

                <p className="text-[#425466] text-base md:text-lg leading-8 border-l-4 border-[#1B4F9C] pl-4 py-2 bg-[#F8FAFD]">
                  <strong>Key Takeaway:</strong> Disadvantages do not mean surgery is unsafe; rather, they reflect the realistic medical factors involved in replacing a natural joint with an artificial implant.
                </p>
              </section>

              {/* DETAILED DISADVANTAGES BREAKDOWN */}
              <section id="main-disadvantages" className="mb-12">
                <SectionHeading>Main Disadvantages & Limitations Breakdown</SectionHeading>

                {/* ITEM 1 */}
                <SubHeading>1. Hip Replacement Is Major Surgery</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  Hip replacement involves replacing damaged parts of the hip joint with artificial components under anaesthesia.
                </p>
                <BulletList
                  items={[
                    "Pre-operative medical assessment & Anaesthesia preparation",
                    "Invasive surgical intervention & post-op hospital monitoring",
                    "Structured rehabilitation & ongoing follow-up care",
                  ]}
                />

                {/* ITEM 2 */}
                <SubHeading>2. Recovery Can Take Time</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  Recovery is not immediate and varies from person to person. Regaining full mobility requires patience and active participation in rehab.
                </p>
                <BulletList
                  items={[
                    "Rebuilding muscle strength & balance around the joint",
                    "Restoring mobility & walking confidence gradually",
                    "Returning to normal daily function over several weeks or months",
                  ]}
                />

                {/* ITEM 3 */}
                <SubHeading>3. Pain and Discomfort After Surgery</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  While intended to eliminate long-term joint pain, early post-operative surgical discomfort is normal and expected.
                </p>
                <BulletList
                  items={[
                    "Managed via prescribed medications & cold therapy",
                    "Supported by structured physiotherapy exercises",
                    "Requires gradual mobilization under medical guidance",
                  ]}
                />

                {/* ITEM 4 */}
                <SubHeading>4. Physiotherapy May Be Required</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  Rehabilitation plays a non-negotiable role in restoring joint function and achieving a optimal long-term result.
                </p>
                <BulletList
                  items={[
                    "Restores joint flexibility and walking gait",
                    "Builds essential muscle strength around the artificial joint",
                    "Skipping exercises can hamper optimal functional recovery",
                  ]}
                />

                {/* ITEM 5 */}
                <SubHeading>5. Some Activities May Need to Be Modified</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  Certain high-impact or demanding activities may need to be limited during recovery or over the long term.
                </p>
                <BulletList
                  items={[
                    "Surgical approach & recovery progress dictate activity boundaries",
                    "Surgeon guidelines determine safe return to sports, work, or heavy lifting",
                  ]}
                />

                {/* ITEM 6 */}
                <SubHeading>6. An Artificial Hip Is Not the Same as a Natural Hip</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  An artificial joint offers immense pain relief, but may feel subtly different from a healthy natural joint.
                </p>
                <BulletList
                  items={[
                    "Subtle changes in sensation, flex, or movement around the surgical site",
                    "Varying activity tolerance based on individual health and bone quality",
                  ]}
                />

                {/* ITEM 7 */}
                <SubHeading>7. Hip Implants Can Wear Over Time</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  Modern implants are highly durable, but friction over decades can cause gradual mechanical wear.
                </p>
                <BulletList
                  items={[
                    "Influenced by implant materials and surgical positioning precision",
                    "Affected by patient age, body weight, and physical activity levels",
                  ]}
                />

                {/* ITEM 8 */}
                <SubHeading>8. Some Patients May Eventually Need Revision Surgery</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  A younger or highly active patient may outlive their implant, requiring a secondary revision procedure later in life.
                </p>
                <BulletList
                  items={[
                    "Triggers include implant loosening, material wear, dislocation, or infection",
                    "Younger patients face a higher lifetime probability of secondary revision",
                  ]}
                />

                {/* ITEM 9 */}
                <SubHeading>9. Surgical Risks and Potential Complications</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  Like any major surgical procedure, standard medical risks exist:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 my-5">
                  <ProblemCard text="Infection" />
                  <ProblemCard text="Blood Clots (DVT)" />
                  <ProblemCard text="Joint Dislocation" />
                  <ProblemCard text="Implant Loosening" />
                  <ProblemCard text="Leg-Length Difference" />
                  <ProblemCard text="Nerve or Vessel Injury" />
                </div>
                <p className="text-[#425466] text-base md:text-lg leading-8">
                  For a detailed review, see{" "}
                  <Link
                    href="/blog/hip-replacement-surgery-risks-and-complications"
                    className="text-[#1B4F9C] font-semibold underline hover:text-pink-500"
                  >
                    Hip Replacement Surgery Risks and Complications
                  </Link>.
                </p>

                {/* ITEM 10 */}
                <SubHeading>10. Financial and Logistical Considerations</SubHeading>
                <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                  Costs extend beyond the surgeon fee to hospital stays, implants, physical therapy, and logistical arrangements for international patients.
                </p>
                <p className="text-[#425466] text-base md:text-lg leading-8">
                  Check our detailed cost breakdown:{" "}
                  <Link
                    href="/blog/hip-replacement-surgery-cost-in-india"
                    className="text-[#1B4F9C] font-semibold underline hover:text-pink-500"
                  >
                    Hip Replacement Surgery Cost in India
                  </Link>.
                </p>
              </section>

              {/* BENEFITS VS NEGATIVES */}
              <section id="benefits-vs-negatives" className="mb-12">
                <SectionHeading>Are the Negatives Greater Than the Benefits?</SectionHeading>

                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  There is no single answer for everyone. For patients with severe joint damage and debilitating daily pain, the benefits of pain relief and restored mobility almost always far outweigh the potential negatives.
                </p>

                <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0] my-6">
                  <h3 className="text-xl font-bold text-[#053161] mb-3">Key Decision Factors:</h3>
                  <BulletList
                    items={[
                      "Severity of hip symptoms and daily life disruption",
                      "Response to prior non-surgical conservative treatments",
                      "Overall medical health, age, and individual activity goals",
                    ]}
                  />
                </div>
              </section>

              {/* NON-SURGICAL ALTERNATIVES */}
              <section id="alternatives" className="mb-12">
                <SectionHeading>Non-Surgical Alternatives to Consider First</SectionHeading>

                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  Before deciding on surgery, doctors typically recommend exploring conservative treatments:
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
                  <FeatureBox text="Activity Modification" />
                  <FeatureBox text="Physiotherapy & Exercise" />
                  <FeatureBox text="Weight Management" />
                  <FeatureBox text="Targeted Pain Therapy" />
                  <FeatureBox text="Assistive Mobility Devices" />
                  <FeatureBox text="Joint Injections" />
                </div>
              </section>

              {/* QUESTIONS FOR SURGEON */}
              <section id="questions-to-ask" className="mb-12">
                <SectionHeading>Questions to Ask Your Surgeon</SectionHeading>

                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  When discussing treatment options, ask your orthopaedic specialist:
                </p>

                <div className="space-y-3 my-6">
                  <QuestionItem number="1" question="What are the main risks or negatives in my specific medical case?" />
                  <QuestionItem number="2" question="How long is my personal recovery expected to take?" />
                  <QuestionItem number="3" question="What activities will I need to permanently modify?" />
                  <QuestionItem number="4" question="How long is my chosen implant expected to last?" />
                  <QuestionItem number="5" question="Are there non-surgical alternatives I should try before proceeding?" />
                </div>
              </section>

              {/* FAQ SECTION */}
              <section id="faqs" className="mb-12">
                <SectionHeading>Frequently Asked Questions</SectionHeading>

                <div className="space-y-4">
                  <FAQ
                    question="What is the biggest disadvantage of hip replacement?"
                    answer="There is no single disadvantage for everyone. Primary concerns include the recovery timeline, activity modifications, risk of surgical complications, and potential implant revision in younger patients."
                  />
                  <FAQ
                    question="Does hip replacement have permanent disadvantages?"
                    answer="Some patients may need long-term activity modifications (like avoiding high-impact sports or running), though most regain excellent function for daily life."
                  />
                  <FAQ
                    question="Can you live a normal life after hip replacement?"
                    answer="Yes! Most patients return to normal daily living, walking, swimming, golfing, and cycling without disabling joint pain."
                  />
                  <FAQ
                    question="Can a hip replacement wear out?"
                    answer="Yes. Modern hip implants last 15–25+ years, but physical friction or loosening can occur over decades."
                  />
                  <FAQ
                    question="Is hip replacement worth it?"
                    answer="For patients with severe arthritis or joint damage causing disabling pain, the benefits of mobility and pain relief almost always far outweigh the negatives."
                  />
                </div>
              </section>

              {/* FINAL CTA BOX */}
              <section>
                <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                    Get an Expert Opinion on Your Treatment Options
                  </h2>
              
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Understanding surgical risks and expected outcomes requires a personalized evaluation. Connect with top joint-replacement specialists in India to review your medical reports and discuss the best approach for you.
                  </p>
              
                  <div className="mb-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                    >
                      Request a Personalized Treatment Assessment →
                    </Link>
                  </div>
                    
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed border-t border-[#DCE5F0] pt-4 mt-6">
                    <strong>Disclaimer:</strong> This page is for general educational purposes and does not replace professional medical advice. Individual surgical outcomes and risks vary based on health status and surgeon evaluation.
                  </p>
                </div>
              </section>

            </div>
          </article>

          {/* SIDEBAR NAVIGATION */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* CTA WIDGET */}
            <div className="rounded-2xl bg-gradient-to-br from-[#053161] to-[#1B4F9C] p-6 text-white shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 text-2xl">
                📊
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

            {/* QUICK LINKS */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-5">
                On This Page
              </h3>
              <div className="space-y-3 text-sm">
                <a href="#introduction" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Introduction
                </a>
                <a href="#main-disadvantages" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Disadvantages Breakdown
                </a>
                <a href="#benefits-vs-negatives" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Benefits vs Negatives
                </a>
                <a href="#alternatives" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Non-Surgical Alternatives
                </a>
                <a href="#questions-to-ask" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Questions to Ask Surgeon
                </a>
                <a href="#faqs" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  FAQs
                </a>
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

function ProblemCard({ text }) {
  return (
    <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FFF7FA] border border-[#FCDDEC]">
      <span className="text-pink-600 font-bold">⚠️</span>
      <span className="text-[#053161] text-sm md:text-base font-semibold">{text}</span>
    </div>
  );
}

function FeatureBox({ text }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
      <span className="text-emerald-600 font-bold">✓</span>
      <span className="text-[#053161] font-semibold text-sm md:text-base">{text}</span>
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

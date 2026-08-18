import Link from "next/link";

export const metadata = {
  title: "What Are the Negatives of a Hip Replacement?",
  description:
    "Learn about the negatives of a hip replacement, including potential risks, complications, side effects, recovery challenges, and long-term considerations.",
};

export default function HipReplacementNegativesPage() {
  const disadvantages = [
    {
      title: "1. Hip Replacement Is Major Surgery",
      desc: "Hip replacement involves replacing damaged parts of the hip joint with artificial components.",
      bullets: [
        "Pre-operative assessment & Anaesthesia",
        "Surgical intervention & Hospital monitoring",
        "Rehabilitation & Structured follow-up care",
      ],
      note: "Patients should consider whether expected functional improvements justify surgical treatment based on individual symptoms.",
    },
    {
      title: "2. Recovery Can Take Time",
      desc: "Recovery is not immediate and varies from person to person. Regaining full mobility requires patience.",
      bullets: [
        "Rebuilding muscle strength & balance",
        "Restoring mobility & walking confidence",
        "Returning to normal daily function gradually",
      ],
      note: "Factors like age, general health, pre-op mobility, and rehab dedication strongly influence timeline.",
    },
    {
      title: "3. Pain and Discomfort After Surgery",
      desc: "While intended to eliminate long-term pain, early post-operative discomfort is normal.",
      bullets: [
        "Managed via prescribed medicines & ice therapy",
        "Supported by structured physiotherapy",
        "Requires gradual mobilization under guidance",
      ],
    },
    {
      title: "4. Physiotherapy May Be Required",
      desc: "Rehabilitation plays a non-negotiable role in restoring joint function.",
      bullets: [
        "Restores joint movement and walking balance",
        "Builds muscle strength around the artificial joint",
        "Skipping exercises can hamper optimal functional recovery",
      ],
    },
    {
      title: "5. Some Activities May Need to Be Modified",
      desc: "Certain high-impact or demanding activities may need to be limited during recovery or long-term.",
      bullets: [
        "Surgical approach & recovery progress dictate activity caps",
        "Surgeon guidelines determine safe return to sports/work",
      ],
    },
    {
      title: "6. An Artificial Hip Is Not the Same as a Natural Hip",
      desc: "An artificial joint offers immense pain relief, but may feel slightly different from a natural joint.",
      bullets: [
        "Subtle changes in movement, strength, or sensation around surgical site",
        "Varying activity tolerance based on individual health",
      ],
    },
    {
      title: "7. Hip Implants Can Wear Over Time",
      desc: "Modern implants are long-lasting, but friction over years can cause gradual mechanical wear.",
      bullets: [
        "Affected by implant materials & surgical design",
        "Influenced by patient age, body weight, and physical activity levels",
      ],
    },
    {
      title: "8. Some Patients May Eventually Need Revision Surgery",
      desc: "A younger or highly active patient may outlive their implant, requiring a secondary procedure.",
      bullets: [
        "Triggers include implant loosening, wear, dislocation, or infection",
        "Younger patients face higher lifetime probability of revision",
      ],
    },
    {
      title: "9. There Can Be Surgical Risks",
      desc: "Like any major operation, standard surgical risks exist.",
      bullets: [
        "Infection, blood clots, or joint dislocation",
        "Rare nerve or blood-vessel damage",
      ],
      linkText: "Read detailed guide: Hip Replacement Surgery Risks and Complications",
      linkHref: "/blog/hip-replacement-surgery-risks-and-complications",
    },
    {
      title: "10. Some Patients May Continue to Experience Pain",
      desc: "Surgery drastically reduces joint pain, but complete 100% elimination is not guaranteed for every patient.",
      bullets: [
        "Persistent pain can stem from nerve issues or non-joint causes",
        "Requires immediate medical evaluation rather than assuming it is normal",
      ],
    },
    {
      title: "11. Recovery May Affect Work and Daily Life",
      desc: "Temporary assistance is required for routine daily activities during initial recovery weeks.",
      bullets: [
        "Help with cooking, cleaning, shopping, and personal care",
        "Planned leave from work and temporary driving restrictions",
      ],
    },
    {
      title: "12. Long-Term Follow-Up May Be Necessary",
      desc: "Regular check-ups ensure your artificial joint remains in optimal condition.",
      bullets: [
        "Periodic X-rays to monitor implant stability",
        "Preservation of surgical and implant documentation for future reference",
      ],
    },
    {
      title: "13. There May Be Financial Considerations",
      desc: "Costs extend beyond the primary surgeon fee to overall medical and logistical care.",
      bullets: [
        "Hospital charges, implant costs, diagnostic tests, & physical therapy",
        "Travel, visa, accommodation, and attendant costs for overseas patients",
      ],
      linkText: "Check detailed breakdown: Hip Replacement Surgery Cost in India",
      linkHref: "/blog/hip-replacement-surgery-cost-in-india",
    },
    {
      title: "14. International Patients Have Additional Planning Challenges",
      desc: "Traveling abroad requires extra care with travel schedules and fit-to-fly clearances.",
      bullets: [
        "Coordinating medical records and overseas consultations",
        "Planning return flights strictly based on surgeon approval, not default dates",
      ],
      linkText: "Learn more: Hip Replacement Surgery for International Patients",
      linkHref: "/blog/hip-replacement-surgery-for-international-patients",
    },
  ];

  const faqs = [
    {
      question: "What is the biggest disadvantage of hip replacement?",
      answer: "There is no single disadvantage for everyone. Primary concerns include the recovery timeline, activity modifications, risk of surgical complications, and potential implant revision in younger patients.",
    },
    {
      question: "Does hip replacement have permanent disadvantages?",
      answer: "Some patients may need long-term activity modifications (like avoiding high-impact running), though most regain excellent function for daily life.",
    },
    {
      question: "Can you live a normal life after hip replacement?",
      answer: "Yes! Most patients return to normal daily living, walking, swimming, golfing, and cycling without joint pain.",
    },
    {
      question: "Can a hip replacement wear out?",
      answer: "Yes. Modern hip implants last 15-25+ years, but physical wear or loosening can occur over decades.",
    },
    {
      question: "Will I need another hip replacement in the future?",
      answer: "Not necessarily. Many implants last a lifetime. Younger patients, however, have a higher chance of needing a revision later in life.",
    },
    {
      question: "Is hip replacement worth it?",
      answer: "For patients with severe arthritis or joint damage causing disabling pain, the benefits of mobility and pain relief almost always far outweigh the negatives.",
    },
    {
      question: "What should international patients consider before having hip replacement in India?",
      answer: "Plan for hospital selection, medical visa preparation, flight timing, stay duration, post-op rehab, and fit-to-fly clearances.",
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
              Orthopaedic Insights • Surgical Considerations Guide
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
                  Hip replacement surgery is an effective treatment for severe joint damage, but like any major medical procedure, it carries specific risks, limitations, and potential drawbacks that patients should consider beforehand.
                </p>

                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  Understanding the full picture — including surgical risks, recovery requirements, activity modifications, and long-term implant performance — allows patients to set realistic expectations and work closely with their medical team for the best outcome.
                </p>

                <p className="text-[#425466] text-base md:text-lg leading-8 border-l-4 border-[#1B4F9C] pl-4 py-2 bg-[#F8FAFD]">
                  <strong>Key Takeaway:</strong> Disadvantages do not mean surgery is unsafe; rather, they reflect the realistic medical factors involved in replacing a natural joint with an artificial implant.
                </p>
              </section>

              {/* 14 MAIN DISADVANTAGES */}
              <section id="disadvantages-list" className="mb-12">
                <SectionHeading>Main Disadvantages & Limitations Breakdown</SectionHeading>

                {disadvantages.map((item, index) => (
                  <div key={index} className="mb-8">
                    <SubHeading>{item.title}</SubHeading>
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-3">
                      {item.desc}
                    </p>
                    {item.bullets && <BulletList items={item.bullets} />}
                    {item.note && (
                      <p className="text-[#425466] text-sm md:text-base leading-7 italic bg-[#F8FAFD] p-3.5 rounded-xl border border-[#E1E8F0] mt-3">
                        {item.note}
                      </p>
                    )}
                    {item.linkHref && (
                      <p className="mt-3">
                        <Link
                          href={item.linkHref}
                          className="text-[#1B4F9C] font-semibold underline hover:text-pink-500 text-base"
                        >
                          {item.linkText} →
                        </Link>
                      </p>
                    )}
                  </div>
                ))}
              </section>

              {/* BENEFITS VS NEGATIVES */}
              <section id="benefits-vs-negatives" className="mb-12">
                <SectionHeading>Are the Negatives Greater Than the Benefits?</SectionHeading>

                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  There is no universal answer. For someone with severe joint damage and debilitating pain, benefits almost always outweigh disadvantages. For mild symptoms still manageable non-surgically, immediate surgery may not be necessary.
                </p>

                <div className="p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0] my-6">
                  <h3 className="text-xl font-bold text-[#053161] mb-3">Key Decision Factors:</h3>
                  <BulletList
                    items={[
                      "Symptom severity & daily life disruption",
                      "Prior non-surgical treatment results",
                      "Overall medical health & personal treatment goals",
                    ]}
                  />
                </div>
              </section>

              {/* ALTERNATIVES */}
              <section id="alternatives" className="mb-12">
                <SectionHeading>When Might Hip Replacement Not Be the First Option?</SectionHeading>

                <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                  Doctors often recommend exploring conservative non-surgical treatments prior to total joint replacement:
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
                  <FeatureBox text="Activity Modification" />
                  <FeatureBox text="Physiotherapy & Exercise" />
                  <FeatureBox text="Weight Management" />
                  <FeatureBox text="Targeted Pain Management" />
                  <FeatureBox text="Assistive Mobility Devices" />
                  <FeatureBox text="Underlying Condition Therapy" />
                </div>
              </section>

              {/* QUESTIONS TO ASK */}
              <section id="questions-to-ask" className="mb-12">
                <SectionHeading>Questions to Ask Your Surgeon</SectionHeading>

                <div className="space-y-3 my-6">
                  <QuestionItem number="1" question="What are the main disadvantages in my specific case?" />
                  <QuestionItem number="2" question="What complications am I personally at higher risk for?" />
                  <QuestionItem number="3" question="How long will my personal recovery take?" />
                  <QuestionItem number="4" question="What activities will I need to permanently modify?" />
                  <QuestionItem number="5" question="How long is my chosen implant expected to last?" />
                  <QuestionItem number="6" question="What rehabilitation program will I need to follow?" />
                  <QuestionItem number="7" question="When can I return to work and international travel?" />
                  <QuestionItem number="8" question="Are there non-surgical alternatives I should try first?" />
                </div>
              </section>

              {/* FAQs */}
              <section id="faqs" className="mb-12">
                <SectionHeading>Frequently Asked Questions</SectionHeading>

                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <FAQ key={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </section>

              {/* FINAL CTA BOX */}
              <section>
                <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                    Choose Treatment Based on Individual Assessment
                  </h2>
              
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Understanding surgical risks and expected outcomes requires a personalized evaluation. Connect with Ekam Health Services to get expert medical opinions from top joint-replacement specialists in India.
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
                Need Treatment Advice?
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
                <a href="#disadvantages-list" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  14 Main Disadvantages
                </a>
                <a href="#benefits-vs-negatives" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Benefits vs Negatives
                </a>
                <a href="#alternatives" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Non-Surgical Alternatives
                </a>
                <a href="#questions-to-ask" className="block text-[#1B4F9C] hover:text-pink-500 transition">
                  Questions to Ask
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
   REUSABLE HELPER COMPONENTS (Same as page (5).js)
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

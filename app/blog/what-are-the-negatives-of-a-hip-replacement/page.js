"use client";

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
      q: "What is the biggest disadvantage of hip replacement?",
      a: "There is no single disadvantage for everyone. Primary concerns include the recovery timeline, activity modifications, risk of surgical complications, and potential implant revision in younger patients.",
    },
    {
      q: "Does hip replacement have permanent disadvantages?",
      a: "Some patients may need long-term activity modifications (like avoiding high-impact running), though most regain excellent function for daily life.",
    },
    {
      q: "Can you live a normal life after hip replacement?",
      a: "Yes! Most patients return to normal daily living, walking, swimming, golfing, and cycling without joint pain.",
    },
    {
      q: "Can a hip replacement wear out?",
      a: "Yes. Modern hip implants last 15-25+ years, but physical wear or loosening can occur over decades.",
    },
    {
      q: "Will I need another hip replacement in the future?",
      a: "Not necessarily. Many implants last a lifetime. Younger patients, however, have a higher chance of needing a revision later in life.",
    },
    {
      q: "Is hip replacement worth it?",
      a: "For patients with severe arthritis or joint damage causing disabling pain, the benefits of mobility and pain relief almost always far outweigh the negatives.",
    },
    {
      q: "What should international patients consider before having hip replacement in India?",
      a: "Plan for hospital selection, medical visa preparation, flight timing, stay duration, post-op rehab, and fit-to-fly clearances.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Banner Section */}
      <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-teal-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-teal-200 mb-4 flex gap-2 items-center">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <span>/</span>
            <span className="text-white font-medium truncate">
              What Are the Negatives of a Hip Replacement?
            </span>
          </nav>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 max-w-4xl">
            What Are the Negatives of a Hip Replacement?
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Hip replacement provides substantial pain relief and mobility, but as a major surgical procedure, understanding its potential drawbacks, risks, and long-term considerations helps you make a well-informed decision.
          </p>
        </div>
      </section>

      {/* Main Container with Sidebar */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Main Content (8 cols) */}
          <main className="lg:col-span-8 space-y-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            
            {/* Quick Summary Box */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl">
              <h2 className="text-amber-900 font-bold text-lg mb-2">
                Key Disadvantages Overview
              </h2>
              <p className="text-amber-800 text-xs sm:text-sm leading-relaxed mb-3">
                No surgery is completely risk-free. Outcomes depend on age, overall health, implant selection, surgical precision, and dedicated rehabilitation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-amber-950 font-medium">
                <span>• Time-intensive recovery & rehab</span>
                <span>• Temporary post-op discomfort</span>
                <span>• Potential implant wear over decades</span>
                <span>• Activity restrictions during healing</span>
              </div>
            </div>

            {/* Section 1: Detailed Disadvantages */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 border-b pb-2 border-slate-200">
                Main Disadvantages & Limitations Breakdown
              </h2>

              <div className="space-y-6">
                {disadvantages.map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
                      {item.desc}
                    </p>
                    {item.bullets && (
                      <ul className="list-disc list-inside space-y-1 text-xs text-slate-600 mb-3 pl-2">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    )}
                    {item.note && (
                      <p className="text-xs bg-white p-2.5 rounded border border-slate-200 text-slate-600 italic">
                        {item.note}
                      </p>
                    )}
                    {item.linkHref && (
                      <div className="mt-3">
                        <Link
                          href={item.linkHref}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1"
                        >
                          {item.linkText} →
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Benefits vs Negatives */}
            <section className="bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h2 className="text-xl font-bold text-blue-950 mb-3">
                Are the Negatives Greater Than the Benefits?
              </h2>
              <p className="text-xs sm:text-sm text-blue-900 leading-relaxed mb-4">
                There is no universal answer. For someone with severe joint damage and debilitating pain, benefits almost always outweigh disadvantages. For mild symptoms still manageable non-surgically, immediate surgery may not be necessary.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-xs text-blue-950 space-y-2">
                <p className="font-semibold text-sm">Key decision factors:</p>
                <p>• Symptom severity & daily life disruption</p>
                <p>• Prior non-surgical treatment results</p>
                <p>• Overall medical health & personal treatment goals</p>
              </div>
            </section>

            {/* Section 3: Non-surgical alternatives */}
            <section>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                When Might Hip Replacement Not Be the First Option?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Doctors often recommend exploring conservative non-surgical treatments prior to total joint replacement:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-700">
                <div className="bg-slate-100 p-3 rounded-lg text-center">Activity Modification</div>
                <div className="bg-slate-100 p-3 rounded-lg text-center">Physiotherapy & Exercise</div>
                <div className="bg-slate-100 p-3 rounded-lg text-center">Weight Management</div>
                <div className="bg-slate-100 p-3 rounded-lg text-center">Targeted Pain Management</div>
                <div className="bg-slate-100 p-3 rounded-lg text-center">Assistive Mobility Devices</div>
                <div className="bg-slate-100 p-3 rounded-lg text-center">Underlying Condition Therapy</div>
              </div>
            </section>

            {/* Section 4: Questions to Ask Your Surgeon */}
            <section className="bg-slate-900 text-white rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-blue-400">
                Questions to Ask Your Surgeon
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <li>• What are the main disadvantages in my specific case?</li>
                <li>• What complications am I personally at higher risk for?</li>
                <li>• How long will my personal recovery take?</li>
                <li>• What activities will I need to permanently modify?</li>
                <li>• How long is my chosen implant expected to last?</li>
                <li>• What rehabilitation program will I need to follow?</li>
                <li>• When can I return to work and international travel?</li>
                <li>• Are there non-surgical alternatives I should try first?</li>
              </ul>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2 border-slate-200">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-lg p-4 bg-white"
                  >
                    <h3 className="font-semibold text-slate-900 text-sm mb-2">
                      {faq.q}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Right Column: Sticky Sidebar Form (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="sticky top-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Need Treatment Advice?
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Connect with Ekam Health Services to get expert opinion and treatment estimates from top hospitals in India.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 234 567 890"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Country"
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Medical Query / Report
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your condition..."
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 rounded-lg text-xs transition-colors shadow"
                >
                  Get Free Consultation
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                <p className="text-[11px] text-slate-500 mb-2">Or chat directly via WhatsApp:</p>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700"
                >
                  <span>💬 Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}

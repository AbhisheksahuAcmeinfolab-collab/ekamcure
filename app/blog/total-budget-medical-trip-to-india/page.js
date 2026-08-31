import Link from "next/link";

export const metadata = {
  title: "Total Budget for a Medical Trip to India",
  description:
    "Plan your medical trip to India with estimated treatment, flights, visa, accommodation and other costs, plus a comparison with the USA, UK, Canada and Australia.",
};

const relatedArticles = [
  { title: "Best Cancer Hospitals in India", href: "/blog/best-cancer-hospitals-in-india" },
  { title: "Best Hospitals for Hip Replacement Surgery in India", href: "/blog/best-hospitals-for-hip-replacement-surgery-in-india" },
  { title: "Hip Replacement Surgery for International Patients", href: "/blog/hip-replacement-surgery-for-international-patients" },
  { title: "Hip Replacement Surgery Success Rate", href: "/blog/hip-replacement-surgery-success-rate" },
  { title: "Hip Replacement Surgery Risks & Complications", href: "/blog/hip-replacement-surgery-risks-complications" },
  { title: "Hormone Therapy for Prostate Cancer in India", href: "/blog/hormone-therapy-for-prostate-cancer-in-india" },
  { title: "Medical Visa for Cancer Treatment in India", href: "/blog/medical-visa-cancer-treatment-india" },
  { title: "Metastatic Prostate Cancer Treatment in India", href: "/blog/metastatic-prostate-cancer-treatment-india" },
  { title: "Prostate Cancer Survival Rate in India", href: "/blog/prostate-cancer-survival-rate-in-india" },
  { title: "Radiation Therapy for Prostate Cancer in India", href: "/blog/radiation-therapy-for-prostate-cancer-in-india" },
  { title: "Top 10 Cancer Hospitals in India", href: "/blog/top-10-cancer-hospitals-in-india" },
  { title: "What Are the Negatives of a Hip Replacement", href: "/blog/what-are-the-negatives-of-a-hip-replacement" },
  { title: "Why Choose India for Prostate Cancer Treatment", href: "/blog/why-choose-india-for-prostate-cancer-treatment" },
];

export default function TotalBudgetMedicalTripPage() {
  return (
    <main className="bg-[#F6F9FD] text-[#053161]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#053161] via-[#1B4F9C] to-[#6796CC]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm font-medium">
              Medical Tourism • Financial Planning Guide
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Total Budget for a Medical Trip to India
            </h1>

            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Plan your medical trip to India with estimated treatment, flights, visa, accommodation and other costs, plus a comparison with the USA, UK, Canada and Australia.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10 items-start">
          
          {/* LEFT CONTAINER */}
          <div className="space-y-8">
            
            {/* IN THIS PAGE NAVIGATION */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-4">
                In This Page
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium">
                <a href="#introduction" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Introduction
                </a>
                <a href="#cost-overview" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Medical Trip Cost Overview
                </a>
                <a href="#potential-savings" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Potential Savings
                </a>
                <a href="#budget-breakdown" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Budget Components
                </a>
                <a href="#sample-budgets" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Sample Trip Budgets
                </a>
                <a href="#global-comparison" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • India vs Global Costs
                </a>
                <a href="#budget-planning" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Planning & Contingency
                </a>
                <a href="#stay-duration" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Stay Duration
                </a>
                <a href="#ekam-support" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • How Ekam Helps
                </a>
                <a href="#faqs" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • FAQs
                </a>
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <article className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12">
                
                {/* INTRODUCTION */}
                <section id="introduction" className="mb-12">
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Travelling to India for medical treatment involves more than paying for the medical procedure. International patients should also plan for flights, medical visas, accommodation, food, local transportation, diagnostic tests, medicines, follow-up care and unexpected expenses.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The total budget for a medical trip to India therefore depends on several factors, including the treatment required, hospital, city, length of stay, country of departure and whether a family member or medical attendant travels with the patient.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    For international patients comparing India with the USA, UK, Canada and Australia, India can offer substantially lower private treatment costs for many planned procedures. However, the correct comparison should always consider what is included in the treatment package and whether the patient would otherwise receive subsidized or publicly funded care in their home country.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 border-l-4 border-[#1B4F9C] pl-4 py-2 bg-[#F8FAFD] rounded-r-lg">
                    <strong>Important:</strong> The costs in this article are approximate planning ranges, not hospital quotations. Actual costs vary according to the patient&apos;s condition, hospital, doctor, treatment complexity, implant or medication requirements, length of stay and other individual factors.
                  </p>
                </section>

                {/* COST OVERVIEW */}
                <section id="cost-overview" className="mb-12">
                  <SectionHeading>How Much Does a Medical Trip to India Cost?</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    There is no single fixed price for a medical trip to India. A patient travelling for a specialist consultation may spend only a few thousand dollars, while someone undergoing major surgery or cancer treatment may require tens of thousands of dollars.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    For international patients, the total budget can be divided into:
                  </p>

                  <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0] mb-6 text-center font-bold text-[#053161] text-base md:text-lg">
                    Medical Expenses + Travel Expenses + Stay Expenses + Follow-Up + Contingency
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A broad planning range is:
                  </p>

                  <CostTable
                    headers={["Type of Medical Trip", "Approximate Total Budget"]}
                    rows={[
                      ["Consultation / diagnostic visit", "$1,000 – $3,000"],
                      ["Minor procedure / day-care treatment", "$2,000 – $5,000"],
                      ["Major planned surgery", "$5,000 – $15,000+"],
                      ["Complex surgery", "$10,000 – $25,000+"],
                      ["Cancer treatment", "$8,000 – $50,000+"],
                      ["Highly complex treatment", "$20,000 – $75,000+"],
                    ]}
                  />

                  <p className="text-[#425466] text-sm leading-6 italic mt-3">
                    * These are broad planning ranges. They should not be interpreted as standard package prices.
                  </p>
                </section>

                {/* POTENTIAL SAVINGS */}
                <section id="potential-savings" className="mb-12">
                  <SectionHeading>How Much Can International Patients Save by Choosing India?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The potential difference can be substantial for certain procedures. For example, estimates for hip replacement put India at approximately <strong>$6,000–$11,000</strong>, compared with around <strong>$35,000–$50,000+</strong> in the USA.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    For IVF, one comparison estimates approximately <strong>$1,800–$3,500</strong> in India, compared with approximately <strong>$15,000–$25,000</strong> in the USA, <strong>$6,500–$10,000</strong> in the UK, <strong>$10,000–$15,000</strong> in Canada and <strong>$7,000–$11,000</strong> in Australia.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 italic bg-[#F8FAFD] p-4 rounded-xl border border-[#E1E8F0]">
                    This does not mean patients should select India purely because of price. The appropriate hospital, specialist, treatment protocol, expected outcomes, accreditation, follow-up arrangements and total travel cost should also be considered.
                  </p>
                </section>

                {/* BUDGET BREAKDOWN */}
                <section id="budget-breakdown" className="mb-12">
                  <SectionHeading>What Makes Up the Total Medical Trip Budget?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    The medical procedure is usually the largest expense, but international patients should calculate several additional costs.
                  </p>

                  <SubHeading>1. Medical Treatment</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The treatment cost depends on medical condition, procedure type, hospital, specialist, complexity, length of stay, implants, medicines, diagnostics and follow-up care. For example, hip replacement surgery in India is currently listed by Ekam at approximately <strong>$6,000–$11,000</strong>.
                  </p>

                  <SubHeading>2. Diagnostic Tests ($60 – $350+)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Investigations required upon arrival may include Blood tests, X-rays, MRI, CT scans, Ultrasound, ECG, Biopsy, and other specialist tests. For complex medical conditions, diagnostic expenses can be considerably higher.
                  </p>

                  <SubHeading>3. Medical Visa</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    India&apos;s official e-Visa system states that e-Medical and e-Medical Attendant visa fees are country-specific, and a 3% bank transaction charge applies.
                  </p>
                  <BulletList
                    items={[
                      "Many eligible nationalities: $80",
                      "United States: $100",
                      "United Kingdom: $129",
                      "Ukraine: $85 | UAE: $80",
                    ]}
                  />

                  <SubHeading>4. International Flights</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Airfare depends heavily on the country of origin. Approximate return economy budgets:
                  </p>
                  <CostTable
                    headers={["Origin", "Approximate Return Airfare"]}
                    rows={[
                      ["Bangladesh / Nepal", "$180 – $500"],
                      ["Middle East", "$300 – $700"],
                      ["Southeast Asia", "$350 – $800"],
                      ["Africa", "$500 – $1,200+"],
                      ["UK / Europe", "$600 – $1,300+"],
                      ["USA / Canada", "$900 – $1,700+"],
                      ["Australia", "$800 – $1,600+"],
                    ]}
                  />

                  <SubHeading>5. Accommodation (per night)</SubHeading>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 my-4">
                    <PriceCard title="Budget Hotel" price="$12 – $30" />
                    <PriceCard title="Mid-range Hotel" price="$30 – $60" />
                    <PriceCard title="Comfortable Hotel" price="$60 – $120" />
                    <PriceCard title="Premium Hotel" price="$120 – $250+" />
                    <PriceCard title="Serviced Apartment" price="$35 – $100+" />
                  </div>

                  <SubHeading>6. Food & Daily Expenses</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A single international patient may budget <strong>$10 – $25 per day</strong>. For a patient travelling with an attendant, <strong>$20 – $50 per day</strong> is a practical planning range.
                  </p>

                  <SubHeading>7. Local Transportation ($120 – $350)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Covers airport transfers, hotel-to-hospital visits, diagnostic centres, and pharmacies. Patients recovering from major surgery may require private transfers.
                  </p>

                  <SubHeading>8. Medicines & Supplies ($100 – $400+)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Post-discharge medication costs. Cancer treatment, transplant care, or complex surgeries will require higher medication budgets.
                  </p>

                  <SubHeading>9. Follow-Up & Rehabilitation ($150 – $500+)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Includes specialist consultations, imaging, blood tests, physiotherapy, wound assessment, and medication reviews.
                  </p>

                  <SubHeading>10. Attendant or Family Member Costs ($500 – $1,500+)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    For a two-week trip, an attendant adds flight, visa, accommodation, food, and personal expenses.
                  </p>
                </section>

                {/* SAMPLE BUDGETS */}
                <section id="sample-budgets" className="mb-12">
                  <SectionHeading>Sample Trip Budget Calculations</SectionHeading>

                  <SubHeading>Example 1: Total Budget for a 14-Day Medical Trip</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Illustrative budget for an international patient travelling to India for a planned major procedure:
                  </p>

                  <CostTable
                    headers={["Expense Head", "Approximate Cost"]}
                    rows={[
                      ["Medical treatment", "$5,000 – $10,000"],
                      ["Diagnostic tests", "$100 – $350"],
                      ["Medical visa", "$80 – $130+"],
                      ["Return flight", "$500 – $1,300"],
                      ["Accommodation (14 nights)", "$420 – $1,400"],
                      ["Food", "$140 – $350"],
                      ["Local transportation", "$120 – $350"],
                      ["Medicines", "$100 – $400"],
                      ["Follow-up / rehabilitation", "$150 – $500"],
                      ["Contingency reserve", "$500 – $1,000"],
                      ["Approximate Total", "$7,110 – $15,780+"],
                    ]}
                  />

                  <SubHeading>Example 2: Hip Replacement Medical Trip</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Detailed sample budget for hip replacement surgery (Ekam estimate: $6,000–$11,000 for surgery):
                  </p>

                  <CostTable
                    headers={["Expense Head", "Approximate Cost"]}
                    rows={[
                      ["Hip replacement procedure", "$6,000 – $11,000"],
                      ["Diagnostic tests", "$100 – $350"],
                      ["Medical visa", "$80 – $130+"],
                      ["Return flight", "$600 – $1,700"],
                      ["Accommodation", "$420 – $1,400"],
                      ["Food", "$140 – $350"],
                      ["Local transport", "$120 – $350"],
                      ["Medicines", "$100 – $400"],
                      ["Physiotherapy / follow-up", "$150 – $500+"],
                      ["Contingency reserve", "$500 – $1,000"],
                      ["Estimated Trip Total", "$8,210 – $16,180+"],
                    ]}
                  />
                </section>

                {/* GLOBAL COMPARISON */}
                <section id="global-comparison" className="mb-12">
                  <SectionHeading>India vs USA, UK, Canada & Australia: What to Compare?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Price alone is not enough when comparing medical treatment between countries. International patients should evaluate:
                  </p>

                  <BulletList
                    items={[
                      "Medical Expertise: Experience of specialists in the required procedure.",
                      "Hospital Facilities: Quality of OTs, ICUs, diagnostic imaging, and emergency care.",
                      "Treatment Inclusions: Check if quoted prices include implants, specialist fees, tests, and rehabilitation.",
                      "Travel Expenses: Flights, visas, and stay costs vary significantly by distance.",
                      "Follow-Up Arrangements: How post-discharge care will be managed once back home.",
                    ]}
                  />

                  <SubHeading>Why Is Treatment in India Less Expensive?</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Differences in treatment costs stem from lower healthcare operating costs, reduced administrative expenses, lower cost of living, and structured medical billing systems. Lower prices do not mean lower clinical standards.
                  </p>
                </section>

                {/* PLANNING & CONTINGENCY */}
                <section id="budget-planning" className="mb-12">
                  <SectionHeading>How to Plan Your Medical Trip Budget</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Formula for realistic planning:
                  </p>

                  <div className="p-5 rounded-2xl bg-[#053161] text-white my-5 font-semibold text-center text-sm md:text-lg">
                    Medical Treatment + Diagnostics + Visa + Flights + Accommodation + Food + Local Transport + Medicines + Follow-Up + Emergency Reserve = Total Budget
                  </div>

                  <SubHeading>Keep an Emergency Reserve</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Do not allocate 100% of available funds to planned costs. Keep at least <strong>$500–$1,500+</strong> as a contingency for extra tests, extended hospital stay, medication changes, or flight modifications.
                  </p>
                </section>

                {/* STAY DURATION */}
                <section id="stay-duration" className="mb-12">
                  <SectionHeading>How Long Should You Stay in India?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Estimated duration based on the type of medical visit:
                  </p>

                  <CostTable
                    headers={["Type of Medical Visit", "Possible Stay Duration"]}
                    rows={[
                      ["Specialist consultation", "3 – 7 days"],
                      ["Diagnostic evaluation", "3 – 10 days"],
                      ["Minor procedure", "5 – 14 days"],
                      ["Major surgery", "2 – 4 weeks+"],
                      ["Complex treatment", "Several weeks to months"],
                    ]}
                  />
                </section>

                {/* HOW EKAM HELPS */}
                <section id="ekam-support" className="mb-12">
                  <SectionHeading>How Ekam Can Help International Patients</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Planning treatment remotely requires coordinating multiple aspects. Ekam assists international patients with:
                  </p>

                  <BulletList
                    items={[
                      "Medical record review and coordination",
                      "Hospital and specialist selection",
                      "Treatment cost estimate coordination",
                      "Appointment scheduling",
                      "Medical visa documentation support",
                      "Airport transfer coordination",
                      "Accommodation and local transport assistance",
                      "Follow-up coordination after treatment",
                    ]}
                  />
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="mb-12">
                  <SectionHeading>Frequently Asked Questions</SectionHeading>

                  <div className="space-y-4">
                    <FAQ
                      question="How much does a medical trip to India cost?"
                      answer="A medical trip can range from approximately $1,000 for a consultation visit to $15,000 or more for major planned treatment. Complex treatments can cost considerably more."
                    />
                    <FAQ
                      question="Is medical treatment cheaper in India than in the USA?"
                      answer="Yes. For many planned procedures, private treatment in India is substantially less expensive than self-pay treatment in the USA. For instance, hip replacement ranges from $6,000–$11,000 in India compared with $35,000–$50,000+ in the USA."
                    />
                    <FAQ
                      question="Is India cheaper than the UK, Canada and Australia?"
                      answer="For elective private treatment, Indian prices are generally lower. However, comparisons do not apply directly to citizens receiving fully subsidized public healthcare in their home countries."
                    />
                    <FAQ
                      question="How much does a hip replacement medical trip to India cost?"
                      answer="A broad total planning budget ranges from $8,000 to $16,000+, including procedure costs, travel, stay, meals, transport, follow-up and contingency reserves."
                    />
                    <FAQ
                      question="How much does IVF cost in India compared with the USA?"
                      answer="A standard IVF cycle in India is estimated at $1,800–$3,500, compared with approximately $15,000–$25,000 in the USA."
                    />
                    <FAQ
                      question="How much is a medical visa for India?"
                      answer="Fees depend on nationality. E-Medical visas cost $100 for US citizens, $129 for UK citizens, and $80 for many other eligible nationalities, plus a 3% bank transaction charge."
                    />
                    <FAQ
                      question="How much should I budget for accommodation?"
                      answer="A general range is $12–$120 per night depending on hotel category and city location. Serviced apartments range from $35–$100+ per night."
                    />
                    <FAQ
                      question="Does the medical treatment cost include flights and hotel?"
                      answer="Usually not. Hospital quotes generally cover medical procedures and hospital stays only. Always request a detailed written inclusion list."
                    />
                    <FAQ
                      question="Can Ekam help me estimate the total cost?"
                      answer="Yes. Ekam coordinates medical history reviews, hospital treatment quotes, travel planning, and accommodation assistance to help you build an accurate budget."
                    />
                  </div>
                </section>

                {/* FINAL CTA BOX */}
                <section>
                  <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                      Plan Your Medical Journey with Confidence
                    </h2>
                
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      The total budget for a medical trip to India should always account for all travel, stay, treatment, and contingency factors—not just the procedure cost.
                    </p>
                    
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                      Let Ekam assist you in getting accurate treatment estimates, specialist consultations, and travel coordination.
                    </p>
                
                    <div className="mb-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                      >
                        Request a Personalised Cost Estimate →
                      </Link>
                    </div>
                      
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed border-t border-[#DCE5F0] pt-4 mt-6">
                      <strong>Disclaimer:</strong> This page is for general informational purposes only. All treatment, travel and accommodation figures are approximate planning ranges and not official quotations. Costs vary by patient condition, hospital, city, and length of stay. Always verify medical quotes and official visa guidelines before travelling.
                    </p>
                  </div>
                </section>

              </div>
            </article>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            
            {/* 1. GET YOUR ASSESSMENT */}
            <div className="rounded-2xl bg-gradient-to-br from-[#053161] to-[#1B4F9C] p-6 text-white shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-bold mb-3">
                Get Cost Estimate
              </h3>
              <p className="text-white/85 text-sm leading-6 mb-5">
                Get an accurate medical treatment estimate and planning guide tailored to your requirements.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#053161] rounded-xl px-5 py-3 font-bold hover:bg-[#F8FAFD] transition"
              >
                Get Started →
              </Link>
            </div>

            {/* 2. RELATED ARTICLES */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-5">
                Related Articles
              </h3>
              <div className="space-y-3 text-sm">
                {relatedArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.href}
                    className="block text-[#425466] hover:text-[#1B4F9C] hover:font-semibold transition-all py-1 border-b border-gray-100 last:border-0"
                  >
                    • {article.title}
                  </Link>
                ))}
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
          <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-[#1B4F9C]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CostTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-6 border border-[#E1E8F0] rounded-xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#053161] text-white text-sm md:text-base">
            {headers.map((header, idx) => (
              <th key={idx} className="p-3.5 md:p-4 font-semibold border-b border-[#E1E8F0]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E1E8F0] text-sm md:text-base text-[#425466]">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#F8FAFD]"}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3.5 md:p-4 font-medium text-[#053161]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PriceCard({ title, price }) {
  return (
    <div className="p-4 rounded-xl bg-[#FFF7FA] border border-[#FCDDEC] text-center">
      <div className="text-[#053161] text-sm font-semibold mb-1">{title}</div>
      <div className="text-pink-600 font-bold text-base md:text-lg">{price}</div>
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

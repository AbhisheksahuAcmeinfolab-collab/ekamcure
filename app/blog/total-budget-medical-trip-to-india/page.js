"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaCalendarAlt, 
  FaUser, 
  FaClock, 
  FaChevronDown, 
  FaChevronUp, 
  FaList, 
  FaArrowRight 
} from "react-icons/fa";

export default function MedicalTripBudgetBlog() {
  // FAQ Accordion Toggle State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Table of Contents Scroll Handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Table of Contents Navigation Items
  const tocItems = [
    { id: "overview", label: "Overview" },
    { id: "how-much-cost", label: "How Much Does a Medical Trip Cost?" },
    { id: "how-much-save", label: "How Much Can Patients Save?" },
    { id: "budget-breakdown", label: "What Makes Up the Total Budget?" },
    { id: "sample-14day-budget", label: "14-Day Trip Budget Example" },
    { id: "hip-replacement-example", label: "Hip Replacement Budget Example" },
    { id: "comparison-guide", label: "India vs USA, UK, Canada & Australia" },
    { id: "why-less-expensive", label: "Why Treatment Costs Less in India" },
    { id: "how-to-plan", label: "How to Plan a Medical Trip Budget" },
    { id: "emergency-reserve", label: "Keeping an Emergency Reserve" },
    { id: "how-long-stay", label: "How Long Should You Stay in India?" },
    { id: "cost-increase-factors", label: "What Can Increase Your Budget?" },
    { id: "ekam-assistance", label: "How Ekam Can Help International Patients" },
    { id: "faqs", label: "Frequently Asked Questions" },
    { id: "final-takeaway", label: "Final Takeaway" },
  ];

  // Dummy Related Blogs for Right Sidebar
  const relatedBlogs = [
    {
      title: "Hip Replacement Surgery Cost in India: 2026 Complete Guide",
      slug: "/blog/hip-replacement-surgery-cost-in-india",
      date: "August 15, 2026",
    },
    {
      title: "Top 10 Best Hospitals for Medical Tourism in India",
      slug: "/blog/top-10-hospitals-medical-tourism-india",
      date: "August 10, 2026",
    },
    {
      title: "How to Apply for Indian Medical e-Visa: Step-by-Step Guide",
      slug: "/blog/indian-medical-evisa-guide",
      date: "July 28, 2026",
    },
    {
      title: "IVF Treatment in India: Success Rates & Detailed Costs",
      slug: "/blog/ivf-treatment-cost-india-guide",
      date: "July 20, 2026",
    },
  ];

  // FAQ Items List
  const faqs = [
    {
      q: "How much does a medical trip to India cost?",
      a: "A medical trip can range from approximately $1,000 for a consultation-focused visit to $15,000 or more for major planned treatment. Complex treatments can cost considerably more."
    },
    {
      q: "Is medical treatment cheaper in India than in the USA?",
      a: "For many planned procedures, private treatment in India can be substantially less expensive than comparable private/self-pay treatment in the USA. For example, hip replacement estimates currently range from approximately $6,000–$11,000 in India compared with $35,000–$50,000+ in the USA."
    },
    {
      q: "Is India cheaper than the UK, Canada and Australia?",
      a: "For many elective procedures, Indian private-treatment prices can be lower than private/self-pay prices in the UK, Canada and Australia. However, the comparison is not directly applicable to eligible residents receiving publicly funded or subsidized care."
    },
    {
      q: "How much does a hip replacement medical trip to India cost?",
      a: "A broad planning budget could be approximately $8,000–$16,000+, including hip replacement treatment and typical travel, accommodation, food, transportation, follow-up and contingency expenses."
    },
    {
      q: "How much does IVF cost in India compared with the USA?",
      a: "A standard IVF cycle in India is commonly estimated at approximately $1,800–$3,500, compared with approximately $15,000–$25,000 in the USA in current 2026 comparisons."
    },
    {
      q: "How much is a medical visa for India?",
      a: "The fee depends on nationality. India's official e-Visa fee schedule is country-specific. For example, the current schedule lists $100 for the USA and $129 for the UK for the relevant e-Medical visa category, while many countries have an $80 fee. A 3% bank transaction charge may apply."
    },
    {
      q: "How much should I budget for accommodation?",
      a: "A broad range is approximately $12–$120 per night, depending on hotel category and location. Premium hotels can cost more."
    },
    {
      q: "Does the medical treatment cost include flights and hotel?",
      a: "Usually not. International patients should ask the hospital for a written quotation specifying exactly what is included and excluded."
    },
    {
      q: "Should I travel alone or with an attendant?",
      a: "It depends on the treatment. Patients undergoing major surgery may benefit from travelling with an attendant, but this adds flight, visa, accommodation, food and transportation expenses."
    },
    {
      q: "Can Ekam help me estimate the total cost?",
      a: "Ekam can help coordinate medical treatment information, hospital estimates and travel-related arrangements. The final medical treatment cost is determined by the selected hospital and treating medical team."
    }
  ];

  return (
    <article className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      {/* Container Header / Meta details */}
      <div className="max-w-7xl mx-auto mb-8">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 mb-4 flex items-center space-x-2">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">Total Budget for a Medical Trip to India</span>
        </nav>

        {/* Blog Main Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight mb-4">
          Total Budget for a Medical Trip to India
        </h1>

        {/* Meta Bar */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 border-b border-gray-200 pb-6 mb-8">
          <div className="flex items-center space-x-2">
            <FaUser className="text-blue-600" />
            <span>Ekam Medical Team</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCalendarAlt className="text-blue-600" />
            <span>August 27, 2026</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-blue-600" />
            <span>8 min read</span>
          </div>
        </div>
      </div>

      {/* Main Grid Layout: Left Content (75%) vs Right Sidebar (25%) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN: Main Blog Body & Left-Top Table of Contents (Span 8) */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
          
          {/* TOP LEFT TABLE OF CONTENTS ("In this page") */}
          <div className="mb-10 p-6 bg-blue-50/70 border border-blue-100 rounded-xl">
            <div className="flex items-center space-x-3 mb-4 text-blue-950 font-bold text-xl border-b border-blue-200/60 pb-3">
              <FaList className="text-blue-600" />
              <span>In this page</span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm">
              {tocItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-blue-600 hover:underline flex items-start space-x-2 transition-colors"
                  >
                    <span className="text-blue-500 font-semibold">•</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOG CONTENT STARTS */}
          <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
            
            {/* OVERVIEW */}
            <section id="overview" className="scroll-mt-6">
              <p className="text-base sm:text-lg text-gray-700 leading-8">
                Travelling to India for medical treatment involves more than paying for the medical procedure. International patients should also plan for flights, medical visas, accommodation, food, local transportation, diagnostic tests, medicines, follow-up care and unexpected expenses.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-8">
                The total budget for a medical trip to India therefore depends on several factors, including the treatment required, hospital, city, length of stay, country of departure and whether a family member or medical attendant travels with the patient.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-8">
                For international patients comparing India with the USA, UK, Canada and Australia, India can offer substantially lower private treatment costs for many planned procedures. However, the correct comparison should always consider what is included in the treatment package and whether the patient would otherwise receive subsidized or publicly funded care in their home country.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-8">
                This guide provides approximate 2026 planning ranges in US dollars to help international patients understand the potential cost of travelling to India for medical treatment.
              </p>
              
              <div className="my-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <p className="text-sm sm:text-base text-amber-900 font-medium m-0">
                  <strong>Important:</strong> The costs in this article are approximate planning ranges, not hospital quotations. Actual costs vary according to the patient&apos;s condition, hospital, doctor, treatment complexity, implant or medication requirements, length of stay and other individual factors.
                </p>
              </div>
            </section>

            {/* HOW MUCH DOES A MEDICAL TRIP COST */}
            <section id="how-much-cost" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                How Much Does a Medical Trip to India Cost?
              </h2>
              <p>There is no single fixed price for a medical trip to India.</p>
              <p>
                A patient travelling for a specialist consultation may spend only a few thousand dollars, while someone undergoing major surgery or cancer treatment may require tens of thousands of dollars.
              </p>
              <p>For international patients, the total budget can be divided into:</p>
              
              <div className="p-4 bg-gray-100 rounded-xl text-center font-semibold text-blue-900 text-sm sm:text-base">
                Medical Expenses + Travel Expenses + Stay Expenses + Follow-Up + Contingency
              </div>

              <p className="mt-4">A broad planning range is:</p>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="p-3 border border-gray-200">Type of Medical Trip</th>
                      <th className="p-3 border border-gray-200">Approximate Total Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50"><td className="p-3 border">Consultation / diagnostic visit</td><td className="p-3 border font-semibold">$1,000 – $3,000</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-3 border">Minor procedure / day-care treatment</td><td className="p-3 border font-semibold">$2,000 – $5,000</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-3 border">Major planned surgery</td><td className="p-3 border font-semibold">$5,000 – $15,000+</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-3 border">Complex surgery</td><td className="p-3 border font-semibold">$10,000 – $25,000+</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-3 border">Cancer treatment</td><td className="p-3 border font-semibold">$8,000 – $50,000+</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-3 border">Highly complex treatment</td><td className="p-3 border font-semibold">$20,000 – $75,000+</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 italic">
                These are broad planning ranges. They should not be interpreted as standard package prices.
              </p>
            </section>

            {/* HOW MUCH CAN PATIENTS SAVE */}
            <section id="how-much-save" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                How Much Can International Patients Save by Choosing India?
              </h2>
              <p>The potential difference can be substantial for certain procedures.</p>
              <p>
                For example, current 2026 estimates for hip replacement put India at approximately $6,000–$11,000, compared with around $35,000–$50,000+ in the USA.
              </p>
              <p>
                For IVF, one 2026 comparison estimates approximately $1,800–$3,500 in India, compared with approximately $15,000–$25,000 in the USA, $6,500–$10,000 in the UK, $10,000–$15,000 in Canada and $7,000–$11,000 in Australia.
              </p>
              <p>
                This does not mean patients should select India purely because of price. The appropriate hospital, specialist, treatment protocol, expected outcomes, accreditation, follow-up arrangements and total travel cost should also be considered.
              </p>
            </section>

            {/* WHAT MAKES UP THE TOTAL BUDGET */}
            <section id="budget-breakdown" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                What Makes Up the Total Medical Trip Budget?
              </h2>
              <p>
                The medical procedure is usually the largest expense, but international patients should calculate several additional costs.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">1. Medical Treatment</h3>
              <p>The treatment cost depends on:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Medical condition</li>
                <li>Type of procedure</li>
                <li>Hospital</li>
                <li>Specialist</li>
                <li>Treatment complexity</li>
                <li>Length of hospital stay</li>
                <li>Implant or device</li>
                <li>Medicines</li>
                <li>Diagnostic requirements</li>
                <li>Follow-up</li>
              </ul>
              <p>
                For example, hip replacement surgery in India is currently listed by Ekam at approximately $6,000–$11,000, depending on factors such as hospital, implant and surgical method.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">2. Diagnostic Tests</h3>
              <p>Patients may need additional investigations after arriving in India. These can include:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Blood tests</li>
                <li>X-rays</li>
                <li>MRI</li>
                <li>CT scans</li>
                <li>Ultrasound</li>
                <li>ECG</li>
                <li>Biopsy</li>
                <li>Other specialist investigations</li>
              </ul>
              <div className="p-3 bg-gray-50 border-l-4 border-blue-600 my-3 font-semibold">
                Approximate Budget: $60 – $350+
              </div>
              <p>For complex medical conditions, diagnostic expenses can be considerably higher.</p>
              <p>Patients should ask whether investigations are included in the hospital&apos;s treatment quotation.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">3. Medical Visa</h3>
              <p>
                International patients travelling to India may require an e-Medical Visa or another appropriate medical visa, depending on their nationality and circumstances.
              </p>
              <p>
                India&apos;s official e-Visa system states that e-Medical and e-Medical Attendant visa fees are country/territory specific, and a 3% bank transaction charge applies to applicable e-Visa fees.
              </p>
              <p>For example, the current official fee table lists:</p>
              
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Applicant</th>
                      <th className="p-2 border">Example e-Medical Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">Many eligible nationalities</td><td className="p-2 border">$80</td></tr>
                    <tr><td className="p-2 border">United Kingdom</td><td className="p-2 border">$129</td></tr>
                    <tr><td className="p-2 border">United States</td><td className="p-2 border">$100</td></tr>
                    <tr><td className="p-2 border">Ukraine</td><td className="p-2 border">$85</td></tr>
                    <tr><td className="p-2 border">UAE</td><td className="p-2 border">$80</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The actual fee must be checked for the patient&apos;s nationality before applying.</p>
              <p>An accompanying family member may require an e-Medical Attendant Visa, subject to eligibility.</p>
              <p>For official requirements, patients should verify the latest information through India&apos;s official e-Visa portal.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">4. International Flights</h3>
              <p>Airfare depends heavily on the patient&apos;s country and departure city.</p>
              <p>A broad return economy-class planning budget could be:</p>
              
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Origin</th>
                      <th className="p-2 border">Approximate Return Airfare</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">Bangladesh / Nepal</td><td className="p-2 border">$180 – $500</td></tr>
                    <tr><td className="p-2 border">Middle East</td><td className="p-2 border">$300 – $700</td></tr>
                    <tr><td className="p-2 border">Southeast Asia</td><td className="p-2 border">$350 – $800</td></tr>
                    <tr><td className="p-2 border">Africa</td><td className="p-2 border">$500 – $1,200+</td></tr>
                    <tr><td className="p-2 border">UK</td><td className="p-2 border">$600 – $1,200+</td></tr>
                    <tr><td className="p-2 border">Europe</td><td className="p-2 border">$600 – $1,300+</td></tr>
                    <tr><td className="p-2 border">USA / Canada</td><td className="p-2 border">$900 – $1,700+</td></tr>
                    <tr><td className="p-2 border">Australia</td><td className="p-2 border">$800 – $1,600+</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Airfares fluctuate according to season, airline, route, booking date and baggage requirements.</p>
              <p>For major surgery, patients should discuss their expected travel date with the treating doctor before purchasing a non-refundable return ticket.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">5. Accommodation</h3>
              <p>International patients may need accommodation before hospital admission and after discharge.</p>
              <p>Approximate accommodation costs in India can be:</p>
              
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Accommodation</th>
                      <th className="p-2 border">Approx. Cost per Night</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">Budget hotel</td><td className="p-2 border">$12 – $30</td></tr>
                    <tr><td className="p-2 border">Mid-range hotel</td><td className="p-2 border">$30 – $60</td></tr>
                    <tr><td className="p-2 border">Comfortable hotel</td><td className="p-2 border">$60 – $120</td></tr>
                    <tr><td className="p-2 border">Premium hotel</td><td className="p-2 border">$120 – $250+</td></tr>
                    <tr><td className="p-2 border">Serviced apartment</td><td className="p-2 border">$35 – $100+</td></tr>
                  </tbody>
                </table>
              </div>
              <p>For patients recovering from surgery, accommodation close to the hospital may be more practical than choosing the cheapest option far away.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">6. Food and Daily Expenses</h3>
              <p>A single international patient may budget approximately:</p>
              <div className="font-semibold text-blue-900 my-1">$10 – $25 per day</div>
              <p>for meals and basic daily expenses.</p>
              <p>For a patient travelling with an attendant:</p>
              <div className="font-semibold text-blue-900 my-1">$20 – $50 per day</div>
              <p>may be a more practical planning range.</p>
              <p>The actual amount depends on dietary requirements, accommodation and lifestyle.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">7. Local Transportation</h3>
              <p>Transportation may be required between airport, hotel, hospital, diagnostic centre, pharmacy and rehabilitation centre.</p>
              <p>A reasonable initial budget for a typical medical trip is:</p>
              <div className="font-semibold text-blue-900 my-1">$120 – $350</div>
              <p>However, longer stays or frequent hospital visits may increase this amount.</p>
              <p>Patients recovering from major surgery may need private transportation.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">8. Medicines and Medical Supplies</h3>
              <p>Depending on the treatment, patients may require medicines and medical supplies after discharge.</p>
              <p>A general planning budget could be:</p>
              <div className="font-semibold text-blue-900 my-1">$100 – $400+</div>
              <p>However, cancer treatment, transplant care and other complex conditions may require substantially higher medication costs.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">9. Follow-Up and Rehabilitation</h3>
              <p>Follow-up expenses can include specialist consultations, imaging, blood tests, physiotherapy, medication review, wound assessment and rehabilitation.</p>
              <p>For procedures such as hip or knee replacement, rehabilitation can be an important part of the overall medical journey.</p>
              <p>A general planning budget might be:</p>
              <div className="font-semibold text-blue-900 my-1">$150 – $500+</div>
              <p>depending on the treatment and number of sessions.</p>

              <h3 className="text-xl font-bold text-gray-900 mt-6">10. Attendant or Family Member Costs</h3>
              <p>Many international patients travel with an accompanying family member.</p>
              <p>An attendant may need an additional budget for flight, visa, accommodation, food, transportation and personal expenses.</p>
              <p>For a two-week trip, an attendant may add approximately:</p>
              <div className="font-semibold text-blue-900 my-1">$500 – $1,500+</div>
              <p>depending on flight origin, accommodation and lifestyle.</p>
            </section>

            {/* 14-DAY MEDICAL TRIP SAMPLE BUDGET */}
            <section id="sample-14day-budget" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                Example: Total Budget for a 14-Day Medical Trip to India
              </h2>
              <p>Consider an international patient travelling to India for a planned medical procedure and staying for approximately two weeks.</p>
              <p>A sample budget could look like this:</p>
              
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="p-3 border">Expense</th>
                      <th className="p-3 border">Approximate Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">Medical treatment</td><td className="p-2 border">$5,000 – $10,000</td></tr>
                    <tr><td className="p-2 border">Diagnostic tests</td><td className="p-2 border">$100 – $350</td></tr>
                    <tr><td className="p-2 border">Medical visa</td><td className="p-2 border">$80 – $130+</td></tr>
                    <tr><td className="p-2 border">Return flight</td><td className="p-2 border">$500 – $1,300</td></tr>
                    <tr><td className="p-2 border">Accommodation – 14 nights</td><td className="p-2 border">$420 – $1,400</td></tr>
                    <tr><td className="p-2 border">Food</td><td className="p-2 border">$140 – $350</td></tr>
                    <tr><td className="p-2 border">Local transportation</td><td className="p-2 border">$120 – $350</td></tr>
                    <tr><td className="p-2 border">Medicines</td><td className="p-2 border">$100 – $400</td></tr>
                    <tr><td className="p-2 border">Follow-up / rehabilitation</td><td className="p-2 border">$150 – $500</td></tr>
                    <tr><td className="p-2 border">Contingency</td><td className="p-2 border">$500 – $1,000</td></tr>
                    <tr className="bg-blue-50 font-bold text-blue-950"><td className="p-3 border">Approximate Total</td><td className="p-3 border">$7,110 – $15,780+</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500">This is an illustrative example for a planned major procedure, not a fixed medical package. The actual total may be lower or considerably higher depending on treatment.</p>
            </section>

            {/* HIP REPLACEMENT MEDICAL TRIP EXAMPLE */}
            <section id="hip-replacement-example" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                Example: Hip Replacement Medical Trip to India
              </h2>
              <p>Hip replacement is a useful example because it is one of the procedures international patients may consider when comparing healthcare costs.</p>
              <p>Ekam currently lists an approximate Indian hip replacement cost of $6,000–$11,000.</p>
              <p>A patient travelling from the UK, USA, Canada or Australia should also budget for travel and accommodation.</p>
              
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="p-3 border">Expense</th>
                      <th className="p-3 border">Approximate Budget</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">Hip replacement</td><td className="p-2 border">$6,000 – $11,000</td></tr>
                    <tr><td className="p-2 border">Diagnostic tests</td><td className="p-2 border">$100 – $350</td></tr>
                    <tr><td className="p-2 border">Medical visa</td><td className="p-2 border">$80 – $130+</td></tr>
                    <tr><td className="p-2 border">Return flight</td><td className="p-2 border">$600 – $1,700</td></tr>
                    <tr><td className="p-2 border">Accommodation</td><td className="p-2 border">$420 – $1,400</td></tr>
                    <tr><td className="p-2 border">Food</td><td className="p-2 border">$140 – $350</td></tr>
                    <tr><td className="p-2 border">Local transport</td><td className="p-2 border">$120 – $350</td></tr>
                    <tr><td className="p-2 border">Medicines</td><td className="p-2 border">$100 – $400</td></tr>
                    <tr><td className="p-2 border">Physiotherapy/follow-up</td><td className="p-2 border">$150 – $500+</td></tr>
                    <tr><td className="p-2 border">Contingency</td><td className="p-2 border">$500 – $1,000</td></tr>
                    <tr className="bg-blue-50 font-bold text-blue-950"><td className="p-3 border">Estimated Trip Total</td><td className="p-3 border">$8,210 – $16,180+</td></tr>
                  </tbody>
                </table>
              </div>
              <p>The patient&apos;s actual budget will depend on the hospital, implant, medical condition, length of stay, flight origin and rehabilitation requirements.</p>
            </section>

            {/* COMPARISON GUIDE */}
            <section id="comparison-guide" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                India vs USA, UK, Canada and Australia: What Should Patients Compare?
              </h2>
              <p>Price alone is not enough when comparing medical treatment between countries.</p>
              <p>International patients should compare:</p>

              <h3 className="text-lg font-bold text-gray-900 mt-4">Medical Expertise</h3>
              <p>Does the hospital have specialists experienced in the required procedure?</p>

              <h3 className="text-lg font-bold text-gray-900 mt-4">Hospital Facilities</h3>
              <p>Consider operating theatres, ICU facilities, diagnostic imaging, laboratory services, emergency care, and rehabilitation.</p>

              <h3 className="text-lg font-bold text-gray-900 mt-4">Treatment Inclusions</h3>
              <p>A lower quoted price may not include implant, specialist fees, diagnostic tests, medicines, follow-up, or rehabilitation. Always request an itemized quotation.</p>

              <h3 className="text-lg font-bold text-gray-900 mt-4">Travel Expenses</h3>
              <p>A patient travelling from the USA or Australia may spend significantly more on flights than someone travelling from Nepal or the Middle East.</p>

              <h3 className="text-lg font-bold text-gray-900 mt-4">Follow-Up</h3>
              <p>Ask how follow-up will be handled after returning home.</p>
            </section>

            {/* WHY LESS EXPENSIVE */}
            <section id="why-less-expensive" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                Why Is Medical Treatment in India Often Less Expensive?
              </h2>
              <p>Treatment prices can differ between countries because of differences in:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Healthcare operating costs</li>
                <li>Labour costs</li>
                <li>Hospital infrastructure costs</li>
                <li>Insurance systems</li>
                <li>Medical billing structures</li>
                <li>Administrative expenses</li>
                <li>Cost of living</li>
                <li>Specialist fees</li>
              </ul>
              <p>
                India&apos;s lower treatment costs do not automatically mean lower medical standards. International patients should evaluate the specific hospital, specialist, treatment protocol and accreditation rather than making a country-wide assumption about quality.
              </p>
            </section>

            {/* HOW TO PLAN */}
            <section id="how-to-plan" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                How to Plan a Medical Trip Budget
              </h2>
              <p>Before travelling, create a budget using:</p>
              
              <div className="p-4 bg-blue-900 text-white rounded-xl font-medium text-center my-4 leading-relaxed">
                Medical Treatment + Diagnostic Tests + Visa + Flights + Accommodation + Food + Local Transportation + Medicines + Follow-Up + Emergency Reserve = Total Medical Trip Budget
              </div>
              <p>This gives international patients a more realistic estimate than looking only at the hospital&apos;s procedure price.</p>
            </section>

            {/* EMERGENCY RESERVE */}
            <section id="emergency-reserve" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                Keep an Emergency Reserve
              </h2>
              <p>International patients should not spend their entire available budget on the treatment package.</p>
              <p>A contingency reserve can help cover:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Additional tests</li>
                <li>Extended hospitalisation</li>
                <li>Extra accommodation</li>
                <li>Additional medicines</li>
                <li>Additional physiotherapy</li>
                <li>Flight changes</li>
                <li>Unexpected follow-up</li>
              </ul>
              <p>
                For a planned procedure, keeping at least $500–$1,500 or more available as a contingency can be sensible, depending on the complexity of treatment.
              </p>
              <p>Complex cancer treatment, transplantation and major surgeries may require a significantly larger reserve.</p>
            </section>

            {/* HOW LONG SHOULD YOU STAY */}
            <section id="how-long-stay" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                How Long Should You Stay in India?
              </h2>
              <p>The required stay depends on the treatment.</p>
              
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border">Type of Medical Visit</th>
                      <th className="p-2 border">Possible Stay</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="p-2 border">Specialist consultation</td><td className="p-2 border">3–7 days</td></tr>
                    <tr><td className="p-2 border">Diagnostic evaluation</td><td className="p-2 border">3–10 days</td></tr>
                    <tr><td className="p-2 border">Minor procedure</td><td className="p-2 border">5–14 days</td></tr>
                    <tr><td className="p-2 border">Major surgery</td><td className="p-2 border">2–4 weeks+</td></tr>
                    <tr><td className="p-2 border">Complex treatment</td><td className="p-2 border">Several weeks to months</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500">These are only planning ranges. The treating specialist should determine when a patient is medically fit to return home.</p>
            </section>

            {/* COST INCREASE FACTORS */}
            <section id="cost-increase-factors" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                What Can Increase Your Medical Trip Budget?
              </h2>
              <p>Your final cost can increase if:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Treatment becomes more complex</li>
                <li>Additional tests are required</li>
                <li>Hospitalisation is extended</li>
                <li>Recovery takes longer</li>
                <li>Additional medicines are required</li>
                <li>More physiotherapy is needed</li>
                <li>The patient needs revision or additional surgery</li>
                <li>The return flight has to be changed</li>
                <li>The attendant stays longer</li>
              </ul>
              <p>For this reason, patients should always keep a contingency reserve.</p>
            </section>

            {/* EKAM ASSISTANCE */}
            <section id="ekam-assistance" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                How Ekam Can Help International Patients
              </h2>
              <p>Planning treatment from another country can involve multiple arrangements at the same time.</p>
              <p>Ekam can help international patients coordinate aspects of their medical journey, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Medical record review and coordination</li>
                <li>Hospital and specialist coordination</li>
                <li>Treatment estimate coordination</li>
                <li>Appointment scheduling</li>
                <li>Medical visa documentation support</li>
                <li>Airport transfer coordination</li>
                <li>Accommodation assistance</li>
                <li>Local transportation</li>
                <li>Follow-up coordination</li>
              </ul>
              <p className="mt-4 font-semibold text-gray-800">
                The treating hospital and medical team remain responsible for diagnosis, treatment decisions and final medical charges.
              </p>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
            <section id="faqs" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-blue-50/50 text-left font-semibold text-gray-900 transition-colors"
                    >
                      <span className="text-base sm:text-lg">{faq.q}</span>
                      {openFaq === index ? (
                        <FaChevronUp className="text-blue-600 flex-shrink-0 ml-2" />
                      ) : (
                        <FaChevronDown className="text-gray-400 flex-shrink-0 ml-2" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="p-4 bg-white text-gray-700 leading-relaxed border-t border-gray-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* FINAL TAKEAWAY */}
            <section id="final-takeaway" className="scroll-mt-6 pt-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-4">
                Final Takeaway
              </h2>
              <p>The total budget for a medical trip to India should never be calculated using the treatment price alone.</p>
              <p>For an international patient, the complete budget is:</p>
              <div className="p-3 bg-gray-100 rounded-lg font-semibold text-blue-900 text-sm sm:text-base my-2 text-center">
                Treatment + Diagnostics + Visa + Flights + Accommodation + Food + Transportation + Medicines + Follow-Up + Contingency
              </div>
              <p>
                India can offer significantly lower private/self-pay treatment costs for many procedures compared with the USA and, in many cases, private treatment in the UK, Canada and Australia. Current 2026 comparisons demonstrate particularly large differences for procedures such as hip replacement, IVF and cardiac surgery.
              </p>
              <p>
                However, patients should compare the complete treatment package, clinical expertise, hospital facilities, follow-up arrangements and total travel expenses, rather than choosing a provider solely because it offers the lowest price.
              </p>
              <p>
                For international patients planning treatment in India, a realistic budget should include an additional contingency reserve for unexpected expenses.
              </p>
            </section>

            {/* CALL TO ACTION BOX */}
            <div className="my-10 p-8 bg-gradient-to-r from-blue-900 to-blue-950 rounded-2xl text-white shadow-lg text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Planning Medical Treatment in India?</h3>
                <p className="text-blue-100 m-0">
                  Ekam can help international patients coordinate hospitals, specialists, treatment estimates and other aspects of their medical journey.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-950 font-bold px-6 py-3 rounded-full shadow hover:bg-blue-50 transition-all flex-shrink-0"
              >
                Get Medical Guidance
              </Link>
            </div>

            {/* DISCLAIMER FOOTER */}
            <p className="text-xs text-gray-500 leading-normal border-t border-gray-200 pt-6">
              This article is for general informational purposes only. All treatment, travel and accommodation figures are approximate 2026 planning ranges and are not medical or financial quotations. Costs vary by patient, nationality, hospital, treatment, city, season and length of stay. UK, Canadian and Australian healthcare costs can differ substantially for residents receiving public or subsidized care. Patients should obtain a current quotation from the relevant hospital and verify visa requirements through official government sources before travelling.
            </p>

          </div>
        </div>

        {/* RIGHT COLUMN: Related Articles / Blogs Sidebar (Span 4) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* STICKY CONTAINER FOR RIGHT SIDEBAR */}
          <div className="sticky top-6 space-y-6">
            
            {/* RELATED ARTICLES BOX */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-950 mb-5 border-b border-gray-100 pb-3 flex items-center space-x-2">
                <span>Related Articles</span>
              </h3>
              
              <div className="space-y-4">
                {relatedBlogs.map((blog, idx) => (
                  <div key={idx} className="group border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <span className="text-xs text-gray-400 block mb-1">{blog.date}</span>
                    <Link 
                      href={blog.slug} 
                      className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2 text-sm leading-snug flex items-start justify-between"
                    >
                      <span>{blog.title}</span>
                      <FaArrowRight className="text-xs text-gray-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1 flex-shrink-0 ml-2 mt-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK CONTACT SIDEBAR BANNER */}
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
              <h4 className="text-lg font-bold text-blue-950 mb-2">Need a Custom Estimate?</h4>
              <p className="text-xs text-gray-600 mb-4">
                Share your medical reports with Ekam for exact treatment options and hospital quotes.
              </p>
              <Link 
                href="/contact"
                className="block w-full bg-blue-600 text-white font-semibold py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm shadow-sm"
              >
                Request Cost Estimate
              </Link>
            </div>

          </div>
        </div>

      </div>
    </article>
  );
}

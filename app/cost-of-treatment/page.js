import Link from "next/link";

export const metadata = {
  title: "Cost of Medical Treatment in India | Ekam Health Services",
  description:
    "Explore affordable and transparent medical treatment costs in India for international patients. Compare prices for surgeries and procedures.",
};

const treatmentCosts = [
  {
    title: "Hip Replacement Surgery",
    slug: "hip-replacement-surgery-cost-india-international-patients",
    category: "Orthopedics",
    avgCost: "$4,000 - $6,500",
    savings: "Up to 70% vs US/UK",
    description:
      "Affordable total and partial hip replacement procedures by top orthopedic surgeons in India using advanced implants.",
  },
  {
    title: "Prostate Cancer Treatment",
    slug: "prostate-cancer-treatment-cost-in-india",
    category: "Oncology / Urology",
    avgCost: "$4,500 - $8,000",
    savings: "Up to 75% vs US/UK",
    description:
      "Comprehensive prostate cancer care including Robotic Surgery, Radiation Therapy, and Chemotherapy with modern technology.",
  },
];

export default function CostOfTreatmentPage() {
  return (
    <main className="min-h-screen bg-[#F6F9FD] text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#053161] to-[#1B4F9C] text-white py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-teal-300 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            Transparent Pricing for International Patients
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Cost of Medical Treatment in India
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-200 leading-relaxed">
            Get world-class medical care at a fraction of Western costs. Compare
            treatment prices, hospital packages, and request a free personalized quote.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#053161]">
              Available Treatment Cost Guides
            </h2>
            <p className="text-sm text-gray-500">
              Select a treatment to view detailed cost breakdowns and hospital packages.
            </p>
          </div>
          <span className="text-sm font-medium bg-blue-100 text-[#053161] px-3 py-1 rounded-full">
            {treatmentCosts.length} Procedures Available
          </span>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {treatmentCosts.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-bold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-md">
                    {item.savings}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#053161] mb-2 hover:text-[#1B4F9C]">
                  <Link href={`/cost-of-treatment/${item.slug}`}>
                    {item.title}
                  </Link>
                </h3>

                <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="block text-xs text-gray-400 font-medium">
                    Est. Cost Range
                  </span>
                  <span className="text-lg font-bold text-[#053161]">
                    {item.avgCost}
                  </span>
                </div>

                <Link
                  href={`/cost-of-treatment/${item.slug}`}
                  className="px-5 py-2.5 bg-[#053161] hover:bg-[#1B4F9C] text-white text-sm font-bold rounded-xl transition flex items-center gap-1 shadow-sm"
                >
                  View Details
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose India Info Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <h3 className="text-xl font-bold text-[#053161] mb-4 text-center">
            Why Patients Choose India for Medical Treatment
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-[#F8FAFD] rounded-xl">
              <div className="text-2xl mb-2">💰</div>
              <h4 className="font-bold text-[#053161] mb-1">60-80% Savings</h4>
              <p className="text-xs text-gray-500">
                Significantly lower cost compared to US, UK, Europe, or Australia.
              </p>
            </div>
            <div className="p-4 bg-[#F8FAFD] rounded-xl">
              <div className="text-2xl mb-2">🏥</div>
              <h4 className="font-bold text-[#053161] mb-1">JCI Accredited</h4>
              <p className="text-xs text-gray-500">
                World-class hospitals with state-of-the-art medical technology.
              </p>
            </div>
            <div className="p-4 bg-[#F8FAFD] rounded-xl">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="font-bold text-[#053161] mb-1">Zero Wait Time</h4>
              <p className="text-xs text-gray-500">
                Immediate access to specialists and surgical procedures.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#1B4F9C] to-[#053161] rounded-2xl p-8 text-white text-center shadow-md">
          <h3 className="text-2xl font-bold mb-2">
            Need a Customized Cost Estimate?
          </h3>
          <p className="text-gray-200 text-sm mb-6 max-w-xl mx-auto">
            Send us your medical reports and our health advisors will get back to you with free opinions and cost estimates from top Indian hospitals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-white text-[#053161] hover:bg-gray-100 font-bold rounded-xl transition shadow"
          >
            Get Free Cost Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";

export const metadata = {
  title: "EkamCure Health Blog | Latest Medical Insights & Guides",
  description:
    "Explore comprehensive medical guides on cancer treatments, joint replacements, medical visas, and top hospitals in India.",
  alternates: {
    canonical: "https://www.ekamcure.com/blog",
  },
};

const blogs = [
  {
    title: "Hip Replacement Surgery Risks and Complications",
    slug: "hip-replacement-surgery-risks-complications",
    category: "Joint Replacement",
    description:
      "Learn about hip replacement surgery risks and complications, including infection, blood clots, dislocation, implant problems and revision surgery.",
    readTime: "6 min read",
  },
  {
    title: "Best Hospitals for Hip Replacement Surgery in India",
    slug: "best-hospitals-for-hip-replacement-surgery-in-india",
    category: "Joint Replacement",
    description:
      "Discover the top orthopedic hospitals and specialists in India offering advanced hip joint replacement options.",
    readTime: "7 min read",
  },
  {
    title: "Hip Replacement Surgery for International Patients",
    slug: "hip-replacement-surgery-for-international-patients",
    category: "Medical Tourism",
    description:
      "A complete guide for international patients planning hip replacement surgery in India, covering travel, stay, and care.",
    readTime: "8 min read",
  },
  {
    title: "Hip Replacement Surgery Success Rate",
    slug: "hip-replacement-surgery-success-rate",
    category: "Joint Replacement",
    description:
      "Understand long-term success rates, durability of modern implants, and factor-affecting outcomes after surgery.",
    readTime: "5 min read",
  },
  {
    title: "What Are the Negatives of a Hip Replacement?",
    slug: "what-are-the-negatives-of-a-hip-replacement",
    category: "Joint Replacement",
    description:
      "An honest look at limitations, lifestyle adjustments, and potential drawbacks after total hip replacement.",
    readTime: "5 min read",
  },
  {
    title: "Best Cancer Hospitals in India",
    slug: "best-cancer-hospitals-in-india",
    category: "Oncology",
    description:
      "Explore premier cancer care institutions in India with cutting-edge technology and renowned oncologists.",
    readTime: "8 min read",
  },
  {
    title: "Top 10 Cancer Hospitals in India",
    slug: "top-10-cancer-hospitals-in-india",
    category: "Oncology",
    description:
      "A detailed overview of the top 10 specialized oncology centers across India for advanced cancer care.",
    readTime: "9 min read",
  },
  {
    title: "Prostate Cancer Survival Rate in India",
    slug: "prostate-cancer-survival-rate-in-india",
    category: "Oncology",
    description:
      "Statistical insights, stage-wise survival outcomes, and treatment efficiency for prostate cancer in India.",
    readTime: "6 min read",
  },
  {
    title: "Hormone Therapy for Prostate Cancer in India",
    slug: "hormone-therapy-for-prostate-cancer-in-india",
    category: "Oncology",
    description:
      "How androgen deprivation therapy (ADT) works, costs, and options available for prostate cancer care.",
    readTime: "6 min read",
  },
  {
    title: "Radiation Therapy for Prostate Cancer in India",
    slug: "radiation-therapy-for-prostate-cancer-in-india",
    category: "Oncology",
    description:
      "Comprehensive guide on modern radiation techniques like IMRT, IGRT, and CyberKnife for prostate cancer.",
    readTime: "7 min read",
  },
  {
    title: "Metastatic Prostate Cancer Treatment in India",
    slug: "metastatic-prostate-cancer-treatment-india",
    category: "Oncology",
    description:
      "Advanced therapeutic approaches, targeted therapies, and clinical care for stage IV prostate cancer.",
    readTime: "7 min read",
  },
  {
    title: "Why Choose India for Prostate Cancer Treatment?",
    slug: "why-choose-india-for-prostate-cancer-treatment",
    category: "Medical Tourism",
    description:
      "Key benefits, international medical standards, cost advantages, and expert doctors for prostate cancer.",
    readTime: "6 min read",
  },
  {
    title: "Medical Visa for Cancer Treatment in India",
    slug: "medical-visa-cancer-treatment-india",
    category: "Medical Tourism",
    description:
      "Step-by-step process, required documents, and assistance for obtaining an Indian e-Medical Visa.",
    readTime: "5 min read",
  },
];

export default function BlogListingPage() {
  return (
    <main className="bg-[#F6F9FD] text-[#053161] min-h-screen">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#053161] via-[#1B4F9C] to-[#6796CC] py-16 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4 text-sm font-medium">
            Knowledge Hub & Medical Guides
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            EkamCure Health Articles & Medical Insights
          </h1>
          <p className="text-white/85 text-base md:text-lg max-w-2xl mx-auto">
            Stay informed with expert guidance on orthopedic surgeries, advanced oncology treatments, and seamless medical travel to India.
          </p>
        </div>
      </section>

      {/* BLOG GRID CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="flex items-center justify-between border-b border-[#E1E8F0] pb-5 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#053161]">
            All Articles ({blogs.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-pink-600 bg-[#FFF7FA] border border-[#FCDDEC] px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    {blog.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#053161] group-hover:text-[#1B4F9C] transition mb-3 line-clamp-2">
                  <Link href={`/blog/${blog.slug}`}>
                    {blog.title}
                  </Link>
                </h3>

                <p className="text-[#425466] text-sm leading-relaxed line-clamp-3 mb-4">
                  {blog.description}
                </p>
              </div>

              <div className="px-6 md:px-7 pb-6 pt-2 border-t border-[#F0F4F8] mt-auto">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1B4F9C] group-hover:text-pink-600 transition"
                >
                  Read Article <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

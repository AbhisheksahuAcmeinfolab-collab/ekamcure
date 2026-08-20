import Link from "next/link";

export const metadata = {
  title: "HTML Sitemap | Ekam Cure",
  description:
    "Browse all important pages of Ekam Cure including treatments, doctors, blogs, services and patient resources.",
};

const sections = [
  {
    title: "Main Pages",
    links: [
      ["Home", "/"],
      ["About Us", "/about"],
      ["Contact", "/contact"],
      ["Services", "/services"],
      ["Treatments", "/treatments"],
      ["Top Hospitals", "/top-hospitals"],
      ["Patient Story", "/patient-story"],
      ["Gallery", "/gallery"],
      ["Fees", "/fees"],
    ],
  },

  {
    title: "Treatments & Specialities",
    links: [
      [
        "Best Prostate Cancer Treatment in India",
        "/treatments/best-prostate-cancer-treatment-india",
      ],
      [
        "Breast Cancer Treatment in India",
        "/treatments/breast-cancer-treatment-in-india",
      ],
      [
        "Heart Valve Surgery",
        "/treatments/heart-valve-surgery-india",
      ],
      [
        "Glaucoma Surgery for International Patients",
        "/treatments/glaucoma-surgery-in-india-for-international-patients",
      ],
      [
        "Kidney Transplant in India",
        "/treatments/kidney-transplant-in-india",
      ],
      [
        "Hip Replacement Surgery in India",
        "/treatments/hip-replacement-surgery-in-india",
      ],
      [
        "Knee Replacement Surgery in India",
        "/treatments/knee-replacement-surgery-in-india",
      ],
      [
        "Best Spine Surgery in India",
        "/treatments/best-spine-surgery-in-india",
      ],
      [
        "Superficial Parotidectomy Surgery",
        "/treatments/superficial-parotidectomy-surgery-india",
      ],
      [
        "IVF Treatments in India",
        "/ivf-treatments-in-india",
      ],
    ],
  },

  {
    title: "Services & Top Hospitals",
    links: [
      [
        "Medical Visa for Treatment in India",
        "/services/medical-visa-for-treatment-in-india",
      ],
      [
        "Top 10 Hospitals in India for International Patients",
        "/top-hospitals/top-10-hospitals-india-for-international-patients",
      ],
      [
        "Best Prostate Cancer Doctors in India",
        "/doctors/best-prostate-cancer-doctors-in-india",
      ],
    ],
  },

  {
    title: "Cost of Treatments",
    links: [
      [
        "Prostate Cancer Treatment Cost in India",
        "/cost-of-treatment/prostate-cancer-treatment-cost-in-india",
      ],
      [
        "Hip Replacement Surgery Cost in India",
        "/cost-of-treatment/hip-replacement-surgery-cost-india-international-patients",
      ],
    ],
  },

  {
    title: "Blogs & Articles",
    links: [
      [
        "Top 10 Cancer Hospitals in India",
        "/blog/top-10-cancer-hospitals-in-india",
      ],
      [
        "Best Cancer Hospitals in India",
        "/blog/best-cancer-hospitals-in-india",
      ],
      [
        "Radiation Therapy for Prostate Cancer",
        "/blog/radiation-therapy-for-prostate-cancer-in-india",
      ],
      [
        "Prostate Cancer Survival Rate in India",
        "/blog/prostate-cancer-survival-rate-in-india",
      ],
      [
        "Why Choose India for Prostate Cancer Treatment",
        "/blog/why-choose-india-for-prostate-cancer-treatment",
      ],
      [
        "Hormone Therapy for Prostate Cancer",
        "/blog/hormone-therapy-for-prostate-cancer-in-india",
      ],
      [
        "Metastatic Prostate Cancer Treatment in India",
        "/blog/metastatic-prostate-cancer-treatment-india",
      ],
      [
        "Medical Visa for Cancer Treatment in India",
        "/blog/medical-visa-cancer-treatment-india",
      ],
      [
        "Hip Replacement Surgery for International Patients",
        "/blog/hip-replacement-surgery-for-international-patients",
      ],
      [
        "Best Hospitals for Hip Replacement Surgery in India",
        "/blog/best-hospitals-for-hip-replacement-surgery-in-india",
      ],
      [
        "Hip Replacement Surgery Success Rate",
        "/blog/hip-replacement-surgery-success-rate",
      ],
      [
        "What Are the Negatives of a Hip Replacement",
        "/blog/what-are-the-negatives-of-a-hip-replacement",
      ],
      [
        "Hip Replacement Surgery Risks & Complications",
        "/blog/hip-replacement-surgery-risks-complications",
      ],
    ],
  },

  {
    title: "Legal Pages",
    links: [
      ["Terms & Conditions", "/terms-and-condition"],
      ["Privacy Policy", "/privacy-policy"],
      ["Disclaimer", "/disclaimer"],
    ],
  },
];

export default function SitemapPage() {
  return (
    <div
      style={{
        background: "#f6f9fc",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero */}
      <section
        style={{
          background:
            "linear-gradient(135deg,#053161 0%, #0a5bb8 100%)",
          padding: "70px 20px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "15px",
          }}
        >
          Sitemap
        </h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            color: "#dbe8ff",
            lineHeight: "30px",
            fontSize: "18px",
          }}
        >
          Browse all important pages of Ekamcure from one place
        </p>
      </section>

      <div
        style={{
          maxWidth: "1200px",
          margin: "50px auto",
          padding: "0 20px",
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "30px",
              marginBottom: "30px",
              boxShadow: "0 8px 20px rgba(0,0,0,.05)",
            }}
          >
            <h2
              style={{
                color: "#053161",
                marginBottom: "20px",
                fontSize: "28px",
              }}
            >
              {section.title}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(280px,1fr))",
                gap: "15px",
              }}
            >
              {section.links.map(([title, url], i) => (
                <Link
                  key={i}
                  href={url}
                  style={{
                    textDecoration: "none",
                    color: "#053161",
                    padding: "14px 18px",
                    background: "#f5f8fd",
                    borderRadius: "10px",
                    border: "1px solid #dde7f5",
                    transition: ".3s",
                    fontWeight: "500",
                  }}
                >
                  ➜ {title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import img from "../../assets/newimage/team-bg-bg.webp";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-white relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Fee Banner"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
        </div>
      </div>

      <section className="bg-gray-50 py-12 px-4 md:px-10 text-gray-800">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Privacy Policy
          </h1>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Greetings from Indian Health Adviser. We place a high priority on
              protecting your privacy and your health and personal data. This
              Privacy Policy outlines how we collect, use, disclose, and
              safeguard your data, in compliance with India’s applicable laws.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">2. Scope</h2>
            <p className="text-gray-700 leading-relaxed">
              This Policy applies to all data collected via our website{" "}
              <a
                href="https://www.indianhealthadviser.com"
                target="_blank"
                className="text-blue-600 font-medium hover:underline"
              >
                www.indianhealthadviser.com
              </a>{" "}
              and related digital services. Please review this policy carefully.
              By using our services, you accept the practices outlined here.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">3. Legal Framework</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We align with the following Indian legal requirements:
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>
                  Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011:
                </strong>{" "}
                mandates clear policies on collection, usage, disclosure, and
                security of sensitive personal data.
              </li>
              <li>
                <strong>
                  Digital Personal Data Protection Act, 2023 (DPDP Act):
                </strong>{" "}
                governs digital personal data processing, ensuring consent,
                rights of individuals to access, correct, and withdraw consent,
                and mandates transparency and accountability.
              </li>
              <li>
                Applicable <strong>health sector guidelines</strong>, including
                the Health Data Management Policy and ICMR principles
                emphasizing privacy-by-design, accountability, consent
                frameworks, and data minimisation.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              4. What Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Personal Information:</strong> Name, contact (email,
                phone), age, gender, location.
              </li>
              <li>
                <strong>Health/Sensitive Data:</strong> Medical history,
                self-reported symptoms, health assessments, diagnostic
                information—all considered <em>sensitive personal data</em>{" "}
                under Indian law.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              5. How Information Is Collected
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Voluntarily supplied forms (e.g., health queries, research
                participation).
              </li>
              <li>
                Automatically through the use of site analytics and cookies to
                improve performance.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              6. Purpose of Collection & Use
            </h2>
            <h2 className=" text-xl font-bold">We process data for:</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Delivering health advice and relevant content.</li>
              <li>
                Internal improvements (e.g., customizing information,
                analytics).
              </li>
              <li>
                Communication: newsletters, responding to your requests (with
                consent).
              </li>
              <li>
                Compliance with legal obligations and research (where
                applicable).
              </li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">7. Consent</h2>
            <p className="list-disc space-y-2 text-gray-700">
              We obtain explicit and informed consent before collecting or
              processing your sensitive health data. Under the DPDP Act, consent
              must be unambiguous, informed, and limited to the specific
              purpose.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              8. Disclosure of Information
            </h2>
            <h2>We may share personal data with:</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                <strong>Service Providers:</strong> engaged in support
                infrastructure (hosting, analytics), who are contractually bound
                to maintain confidentiality.
              </li>
              <li>
                <strong>Third Parties:</strong> if legally required (e.g., court
                orders) or with your explicit consent.
              </li>
              <li>
                <strong>Aggregated or anonymized data</strong> for research or
                operational insights.
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">9. Security Measures</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                We implement{" "}
                <strong className="font-bold">
                  reasonable security practices
                </strong>{" "}
                including encryption, access controls, regular audits, and data
                retention policies in line with Rule 8 of the IT Rules, 2011.
              </p>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">10. Data Retention</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                We only keep personal information for as long as it’s required
                by law or for the purposes above. Sensitive health records are
                retained and deleted according to relevant health sector and
                legal guidelines (e.g., clinical trial rules or data
                minimisation norms).
              </p>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">11. Your Rights</h2>
            <h2>Under the DPDP Act, you have rights to:</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Access your personal data.</li>
              <li>
                Request data erasure. If necessary, choose a nominee to oversee
                your data rights.
              </li>
              <li>Withdraw consent at any time.</li>
              <li>Correct or update inaccuracies.</li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              12. Cookies & Tracking
            </h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                Our website uses cookies and similar technologies for
                functionality and analytics. You may opt out—note that this may
                impact your site experience.
              </p>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">13. External Links</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                Links to third-party sites are beyond our control; their privacy
                practices may differ, and this policy doesn’t apply to them.
              </p>
            </ul>
          </div>

          {/* Section 14 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              14. Children’s Privacy
            </h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                Our services are not intended for children under the age of
                eighteen. In accordance with current regulations, parental
                approval will be sought before collecting data from minors.
              </p>
            </ul>
          </div>

          {/* Section 15 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              15. Changes to This Policy
            </h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                We may update this Policy periodically—significant changes will
                be highlighted on the site or via email. The effective date will
                be updated accordingly.
              </p>
            </ul>
          </div>

          {/* Section 16 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">16. Contact Us</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                For questions or data requests (access, correction, deletion,
                etc.), reach out to us at:
              </p>
            </ul>
          </div>
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <MdEmail className="text-blue-600 text-xl" />
              <p className="text-gray-800">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@ekamcure.com"
                  className="text-pink-600 hover:underline"
                >
                  info@ekamcure.com
                </a>
              </p>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3">
              <MdLocationOn className="text-blue-600 text-xl" />
              <p className="text-gray-800">
                <strong>Address:</strong> Delhi, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import img from "../../assets/newimage/team-bg-bg.webp";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function termscondition() {
  return (
    <>
      <div className="bg-white relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="terms"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Terms & Condition
          </h1>
        </div>
      </div>
      <section className="bg-gray-50 py-12 px-4 md:px-10 text-gray-800">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Terms & Conditions
          </h1>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms & Conditions govern your use of our website, content,
              and services. By accessing IndianHealthAdviser.com, you confirm
              that you are at least 18 years old and legally capable of entering
              into this agreement.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              2. Purpose of the Website
            </h2>
            <p className="text-gray-700 leading-relaxed">
              IndianHealthAdviser.com is designed to provide health information,
              guidance, and resources. This website’s content is intended solely
              for informative purposes and should not be used in place of expert
              medical advice, diagnosis, or treatment. Before making any medical
              decisions, always get advice from a trained healthcare provider.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              3. User Responsibilities
            </h2>
            <h2>When using our website, you agree to:</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Provide accurate information when filling out forms,
                subscriptions, or inquiries.
              </li>
              <li>
                Not misuse, copy, or distribute our content without prior
                permission.
              </li>
              <li>
                Not engage in activities that may harm, disrupt, or overload the
                website.
              </li>
              <li>
                Use the website in compliance with applicable Indian laws and
                regulations.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              4. Intellectual Property Rights
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                All content on this site, including text, graphics, images,
                logos, and design, is the property of IndianHealthAdviser.com
                unless otherwise stated.
              </li>
              <li>
                Any unauthorized use, duplication, or distribution of our
                content is strictly prohibited.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              5. Limitation of Liability
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                IndianHealthAdviser.com strives to provide accurate and updated
                information but does not guarantee completeness, reliability, or
                accuracy.
              </li>
              <li>
                We are not liable for any direct, indirect, incidental, or
                consequential damages arising from the use of our website,
                including reliance on health information provided.
              </li>
              <li>
                If there are any external links, they are included for
                convenience and we have no control over content from third
                parties.
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">6. Privacy</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                Additionally, our [Privacy Policy], which describes how we
                gather, use, and safeguard your data, governs how you use this
                website.
              </p>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              7. Third-Party Services
            </h2>
            <p className="list-disc space-y-2 text-gray-700">
              We may use trusted third-party service providers (e.g., hosting,
              analytics, email services). While we ensure compliance, we are not
              responsible for their independent privacy or terms policies.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">8. Indemnification</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                By using this website, you agree to indemnify and hold harmless
                IndianHealthAdviser.com, its owners, employees, and partners
                from any claims, damages, or liabilities arising from your use
                of the website or violation of these Terms.
              </p>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">9. Changes to Terms</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                We may update or revise these Terms & Conditions at any time
                without prior notice. The updated version will be posted on this
                page, and your continued use of the site indicates acceptance of
                the revised terms.
              </p>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              10. Governing Law & Jurisdiction
            </h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                The laws of India regulate these terms and conditions. Any
                disputes shall be subject to the jurisdiction of courts located
                in Delhi, India.
              </p>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              11. Contact Information
            </h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                For questions regarding these Terms & Conditions, please
                contact:
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

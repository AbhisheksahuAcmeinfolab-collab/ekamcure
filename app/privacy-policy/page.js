import Image from "next/image";
import Link from "next/link";
import img from "../../assets/recent/Privacy Policy 1.webp";
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

          <div className="mb-8">
            <p>
              This privacy policy has been compiled and structured in order to
              better serve those who are concerned about how their personal
              information is being used online.{" "}
              <strong>Ekam Health Services</strong> is committed to protecting
              your private information. This privacy policy applies to{" "}
              <span className="text-blue-700"> www.ekamcure.com, </span> its
              parents, subsidiaries and/or other affiliates, and governs data
              collection and usage. The privacy policy will bind all those who
              visit, access and/or utilise the website in any form, regardless
              of acting as an individual or on behalf of an entity. By using
              this website, you consent to the practices described in this
              policy.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Information We Collect
            </h2>
            <h3 className="font-bold mb-4">
              We may collect both personal and non-personal information from
              users in various ways:
            </h3>
          </div>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">1. Personal Information</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Name, email, phone number</li>
              <li>Country and city of residence</li>
              <li>Medical condition or reports (as voluntarily provided)</li>
              <li>Passport and visa details for medical travel</li>
              <li>
                Information submitted via contact forms or direct communication
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              2. Technical Information
            </h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>IP address, browser type, and operating system</li>
              <li>Device type and usage data</li>
              <li>Pages visited and browsing behaviour</li>
              <li>Cookies and tracking pixels</li>
            </ul>
          </div>

          {/* section 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              3. Purpose of Collection
            </h2>
            <h3 className="font-bold mb-4">
              The information collected is used for:
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Responding to medical enquiries and arranging consultations
              </li>
              <li>
                Coordinating treatment plans with partner hospitals and doctors
              </li>
              <li>Assisting with visa, travel, and accommodation</li>
              <li>Improving our website and service delivery</li>
              <li>
                Sending relevant updates and communication (only with consent)
              </li>
              <li>Fulfilling legal and contractual obligations</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              4. Sharing and Disclosure
            </h2>
            <h3 className="font-bold mb-4">
              We do not sell, rent, or lease your personal data. Information may
              be shared with:
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Accredited hospitals, doctors, and clinics for consultation or
                treatment planning
              </li>
              <li>
                Travel and logistics partners to support your medical journey
              </li>
              <li>
                Technology and analytics providers to maintain and improve our
                site
              </li>
              <li>Regulatory authorities if required by law</li>
            </ul>
            <h3 className="font-bold mt-4">
              All shared data is protected through confidentiality agreements
              and used only for the intended purpose.
            </h3>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              5. Data Security</h2>
            <h3 className="font-bold mb-4">We implement appropriate technical and organisational
              measures to protect personal information, including:</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Secure servers and encrypted data transmission</li>
              <li>Access controls and authentication measures</li>
              <li>Regular security audits and updates
              </li>
            </ul>
            <h3 className="mt-4">
              While we aim to ensure complete security, no online transmission can be guaranteed 100% secure.
            </h3>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className=" text-xl font-bold mb-2">
              6. Use of Cookies
            </h2>
            <h3 className="font-bold mb-4">Cookies are used to:</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Enhance site performance and user experience</li>
              <li>Track visitor behaviour and improve website content</li>
              <li>Enable features like live chat or language preferences</li>
            </ul>
            <h3 className="font-semibold mt-4">Users may choose to disable cookies via browser settings, although some features may not function optimally.</h3>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">7. Your Rights</h2>
            <h3 className="font-bold mb-4">Depending on your jurisdiction, you may have the right to:</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Access and review your personal data</li>
              <li>Correct inaccurate or outdated information</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent or restrict processing</li>
              <li>File a complaint with a data protection authority</li>
            </ul>
            <h3 className="mt-4">To exercise any of these rights, email us at <strong>info@ekamcure.com.</strong></h3>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-2">
              8. Data Retention
            </h2>
            <p className="list-disc space-y-2 text-gray-700">
              We retain personal data only as long as necessary to fulfill the purposes outlined or as
              required by law. When no longer needed, data is securely deleted or anonymised.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">9. Third-Party Links</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                Our website may include links to third-party sites. We are not responsible for their
                privacy practices or content. We advise users to review those sites&apos;s privacy policies
                before providing any personal data.
              </p>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">10. Children&apos;s Privacy</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly
                collect data from minors. If such data is identified, it will be deleted immediately
                upon notification.
              </p>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">11. Changes to the Privacy Policy</h2>
            <p className="list-disc space-y-2 text-gray-700">
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page. Continued use of the site after such changes signifies acceptance of the revised
              policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

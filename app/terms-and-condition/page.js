import Image from "next/image";
import img from "../../assets/recent/Terms and Conditions 1.webp";
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
      <section className="text-justify bg-gray-50 py-12 px-4 md:px-10 text-gray-800">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Terms & Conditions
          </h1>

          <div className="text-gray-700 leading-relaxed">
            <p className="mb-4">
              For making use of any product, service, or feature via the
              internet website or Ekam Health Services as an organisation by any
              user of the website shall be directed by the following terms of
              use:
            </p>
            <p className="mb-4">
              This website is handed over by Ekam Health Services and may be
              utilised for informational purposes only. By using this site or
              downloading any materials from the site, you agree to follow the
              terms and conditions described in this notice. If you do not agree
              with these terms and conditions, kindly refrain from using this
              website or downloading any content from it.
            </p>
            <p className="mb-4">
              This website, along with all materials available (except any
              applicable third-party content), is the property of Ekam Health
              Services and is copyrighted and protected by international
              copyright laws and treaties. You agree to comply with all
              applicable intellectual property laws in your use of this website
              and to prevent any unauthorised copying or use of materials. Ekam
              Health Services does not grant any express or implied rights under
              any patents, trademarks, copyrights, or trade secrets. If
              unintentionally any content, image, or copyrighted material
              belongs to you or someone you represent, please contact us in
              writing and we will act promptly to remove it.
            </p>
            <p className="mb-4">
              Ekam Health Services maintains professional relationships with
              many hospitals, medical practitioners, logistics providers, and
              institutions. For ease of communication, terms like “partner”,
              “affiliation”, or “joint venture” may be used informally to
              describe these relationships, although they may not always reflect
              legally binding partnerships.
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">1. Use of Website</h2>
            <h3 className="font-bold mb-4">
              You agree to use{" "}
              <span className="text-blue-700">www.ekamcure.com</span> in a
              lawful and responsible manner. You must not:
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>Attempt to gain unauthorised access to data or systems</li>
              <li>
                Introduce harmful code, viruses, or use the website for any
                fraudulent activity
              </li>
              <li>
                Infringe upon the rights of others, including privacy,
                confidentiality, or intellectual property
              </li>
              <li>
                Misuse or exploit any of the health consultation features for
                commercial or unauthorised purposes
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              2. Nature of Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ekam Health Services is a medical tourism facilitator. We assist
              patients in obtaining second opinions, treatment quotes, and
              travel arrangements for medical procedures abroad. We are not a
              healthcare provider and do not offer direct medical services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              All medical consultations, opinions, diagnoses, or treatments are
              provided by registered hospitals and certified healthcare
              professionals. Ekam Health Services is not liable for the medical
              decisions, treatments, or outcomes delivered by any third party.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              3. Information Accuracy
            </h2>
            <ul className="space-y-2 text-gray-700">
              <p>
                We strive to provide accurate and up-to-date information
                regarding hospitals, treatments, doctors, and services. However,
                Ekam Health Services does not guarantee the accuracy,
                reliability, or completeness of any information on the website.
                Users are responsible for verifying all details with the
                respective medical providers.
              </p>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">4. Third-Party Links</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                The website may contain links to third-party sites, such as
                hospitals, airlines, insurance providers, or visa agencies. Ekam
                Health Services does not control or endorse the content, terms,
                or practices of these external websites and is not responsible
                for any loss or damage resulting from their use.
              </p>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              5. Privacy and Confidentiality
            </h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                All information shared with Ekam Health Services through contact
                forms, chat, or email is treated confidentially in accordance
                with our Privacy Policy. Personal data may be shared only with
                your explicit consent to hospitals, doctors, or travel
                coordinators to facilitate your medical journey.
              </p>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              6. Intellectual Property Rights
            </h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                All text, images, graphics, icons, designs, and content on
                www.ekamcure.com are the intellectual property of Ekam Health
                Services or are used with permission. You are not permitted to
                reproduce, distribute, modify, or publicly display any content
                without prior written consent.
              </p>
            </ul>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              7. Limitation of Liability
            </h2>
            <h3 className="font-bold mb-4">
              To the fullest extent permitted by law, Ekam Health Services shall
              not be held liable for:
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Any indirect, incidental, special, or consequential damages
                arising from use of this website.
              </li>
              <li>
                Delays or failures in treatment, travel, or service caused by
                third-party providers.
              </li>
              <li>
                Any medical complications or decisions made by partner hospitals
                or healthcare professionals
              </li>
              <li>
                Inaccurate or outdated information provided on this website or
                through partner organisations
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">8. User Obligations</h2>
            <h3 className="font-bold mb-4">
              By using this website, you agree to:
            </h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Provide honest, accurate, and complete medical and personal
                information
              </li>
              <li>Not impersonate others or misrepresent your identity</li>
              <li>
                Follow all local and international laws related to travel and
                medical treatment
              </li>
              <li>
                Accept that all final medical decisions rest with qualified
                healthcare providers
              </li>
            </ul>
          </div>

          {/* Section 9 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">9. Indemnity</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                You agree to indemnify and hold harmless Ekam Health Services,
                its team, affiliates, and service partners from any claims,
                losses, liabilities, damages, or expenses (including legal fees)
                arising from your use of the website or any violation of these
                terms.
              </p>
            </ul>
          </div>

          {/* Section 10 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">10. Modifications</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                Ekam Health Services reserves the right to modify, update, or
                replace any part of these Terms and Conditions at any time
                without prior notice. It is your responsibility to review this
                page periodically. Continued use of the website after any
                changes constitutes acceptance of those changes.
              </p>
            </ul>
          </div>

          {/* Section 11 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">11. Governing Law</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                These Terms and Conditions are governed by and construed in
                accordance with the laws of India. Any disputes related to the
                use of this website shall be subject to the exclusive
                jurisdiction of the courts located in Delhi, India.
              </p>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

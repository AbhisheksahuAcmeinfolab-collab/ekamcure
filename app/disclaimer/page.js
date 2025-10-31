import Image from "next/image";
import Link from "next/link";
import img from "../../assets/recent/common banner.webp";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-white relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="disclaimer"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Disclaimer
          </h1>
        </div>
      </div>

      <section className="bg-gray-50 py-12 px-4 md:px-10 text-gray-800">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Disclaimer
          </h1>

          <ul className="mb-2">
            <p className="mb-2">
              The information provided on www.ekamcure.com is intended for
              general informational and educational purposes only and should not
              be considered as a substitute for professional medical advice,
              diagnosis, or treatment.
            </p>
            <p className="mb-2">
              <strong>Ekam Health Services</strong> is a medical tourism
              facilitation company and not a medical or healthcare provider. We
              do not provide medical advice, perform medical procedures, or make
              clinical decisions. All medical consultations, treatments, and
              procedures are carried out solely by qualified and licensed
              medical professionals at third-party hospitals or clinics.
            </p>
            <p className="mb-2">
              While we work with reputed hospitals and specialists, the final
              decision regarding your diagnosis and treatment rests solely with
              the healthcare providers you choose. Ekam Health Services does not
              endorse or guarantee the accuracy, safety, or success of any
              medical treatment or procedure recommended by these providers.
            </p>
          </ul>

          {/* Section 1 */}
          <div className="mb-8 mt-6">
            <h4 className="text-xl font-semibold mb-2">
              You are strongly encouraged to:
            </h4>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Consult with a licensed physician or relevant healthcare
                professional before making any decisions based on content from
                this website.
              </li>
              <li>
                Independently verify the credentials, accreditations, and
                reputation of any hospital or doctor recommended through our
                platform.
              </li>
              <li>
                Thoroughly understand the risks, benefits, costs, and
                alternatives before proceeding with any medical treatment.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              No Guarantee of Outcomes
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Medical results vary from person to person. Ekam Health Services
              makes no representations or warranties regarding the outcome,
              recovery, or results of any medical treatment obtained through our
              network partners.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2">
              Third-Party Links and Content
            </h4>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our website may contain links to third-party websites or
              information. These links are provided for convenience only. We are
              not responsible for the content, privacy practices, or accuracy of
              information on external sites. Accessing third-party sites is at
              your own risk.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2">
              Limitation of Liability
            </h4>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                Under no circumstances shall{" "}
                <strong>Ekam Health Services, </strong>its employees, directors,
                affiliates, or agents be held liable for any direct, indirect,
                incidental, or consequential damages arising from your use of
                this website or reliance on any content or service linked to it.
              </p>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-2">
              This includes, but is not limited to:
            </h4>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                Medical negligence or malpractice by any third-party hospital or
                professional
              </li>
              <li>Treatment delays, cancellations, or travel disruptions</li>
              <li>Errors or omissions in content on this website</li>
              <li>
                Decisions made by users based on the information available on
                the site
              </li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">
              No Doctor-Patient Relationship
            </h2>
            <p className="list-disc space-y-2 text-gray-700">
              Use of this website or communication with our team does not
              establish a doctor-patient relationship. Any medical relationship
              will be established only between the patient and the third-party
              healthcare provider after formal consultation.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Consent</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                By using this website, you acknowledge that you have read,
                understood, and agreed to this disclaimer and our Terms and
                Conditions.
              </p>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <ul className="list-disc space-y-2 text-gray-700">
              <p>
                If you have any questions about this disclaimer or would like
                further clarification, please contact:
              </p>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

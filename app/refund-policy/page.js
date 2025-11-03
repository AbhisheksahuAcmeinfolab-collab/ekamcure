import Image from "next/image";
import Link from "next/link";
import img from "../../assets/recent/Refund Policy 1.webp";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="bg-white relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Refund"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
           Refund Policy
          </h1>
        </div>
      </div>

      <section className="bg-gray-50 py-12 px-4 md:px-10 text-gray-800">
        <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Refund Policy 
          </h1>

          {/* Section 1 */}
          <ul className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>Ekam Health Services,</strong> we are committed to offering clear and transparent communication 
              regarding all services, including our refund policy. As a medical tourism facilitation 
              company, we act as a coordinator between international patients and healthcare providers, 
              helping clients access medical opinions, treatment planning, and travel arrangements. 
              Please note that we do not provide direct medical treatment and are therefore not 
              responsible for any payments made directly to hospitals, clinics, or third-party providers
              such as hotels, embassies, or airlines.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              All facilitation services offered by Ekam Health Services—such as medical consultations, 
              second opinions, hospital coordination, visa assistance, and itinerary planning—require 
              significant time and effort from our team. Once these services are initiated or delivered, 
              they become non-refundable. Charges for visa documentation, translation, patient file 
              preparation, and logistical arrangements are also non-refundable once executed, either 
              in full or in part.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If a client decides to cancel the medical travel plan before any services are executed, 
              we may consider a partial refund after deducting administrative and processing charges. 
              Cancellation requests must be sent in writing via email to info@ekamcure.com, along with 
              the relevant service booking ID and valid identification. In the case of visa rejection, a 
              refund may be applicable only if no medical appointments or coordination efforts have been 
              completed. Documentation proving visa denial will be required, and any refund approved will 
              be processed after deducting applicable third-party or service fees already incurred.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In situations where a patient travels to the treatment destination but then decides not to 
              proceed with treatment, Ekam Health Services will not refund facilitation charges already 
              provided. Refunds from hospitals or partner organisations in such scenarios will be subject 
              to the policies of those third parties, and we will support patients in initiating those 
              discussions where possible. Please understand that medical outcomes are not guaranteed and 
              dissatisfaction with treatment or results will not qualify for a refund of facilitation 
              services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              All approved refunds, if any, will be processed via the original mode of payment within 14 
              to 21 working days from the date of confirmation. This refund policy is subject to change 
              at the discretion of Ekam Health Services without prior notice. The most current version 
              will always be available on our website
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions or require further clarification about our refund process, 
              feel free to reach out to us at info@ekamcure.com or call us at <strong>+91-9990205353.</strong>
            </p>
          </ul>
        </div>
      </section>
    </>
  );
}

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import img from "../../assets/recent/common banner.webp";
// You can replace these image paths with your own service icons/images
import pic1 from "../../assets/newimage/Neurology Treatment.webp";
import pic2 from "../../assets/newimage/Cosmetic Surgeries.webp";
import pic3 from "../../assets/newimage/Cancer Treatment.webp";
import pic4 from "../../assets/newimage/Dental Treatments.webp";
import pic5 from "../../assets/newimage/Heart & Cardiology Treatments.webp";
import pic6 from "../../assets/newimage/Kidney & Urology Treatments.webp";
import pic7 from "../../assets/newimage/Ophthalmology Surgery.webp";
import pic8 from "../../assets/newimage/Infertility Treatments.webp";
import pic9 from "../../assets/newimage/Transplant Programs.webp";
import pic10 from "../../assets/newimage/Ear, Nose, and Throat (ENT).webp";

export default function TreatmentServices() {
  return (
    <>
      {/* Banner Section */}
      <div className="bg-white relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Fee Banner"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Plan your Travel
          </h1>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Services at a <span className="text-blue-900">Glance</span>
            <p className="relative text-sm">
              Planning to travel to India for medical treatment?
            </p>
          </h2>

          {/* content  */}
          <div className="relative">
            {/* Center Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-blue-500"></div>

            {/* 1 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-blue-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Know Our Services:
                  </h3>
                  <p className="text-gray-600 text-left">
                    Explore our range of medical services and specialties. You
                    can contact us by phone or WhatsApp for initial guidance and
                    consultation.
                  </p>
                </div>
              </div>
              {/* Icon */}
              <div className="relative z-10 bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic1.src}
                  alt="Neurology Treatment"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 2 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-pink-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic2.src}
                  alt="Cosmetic Surgeries"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-pink-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-pink-700 mb-2">
                    Contact Us:
                  </h3>
                  <p className="text-gray-600">
                    Fill out the inquiry form or share your latest medical
                    reports for a free review and treatment opinion from our
                    network of top hospitals in India.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-green-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Receive a Treatment Plan:
                  </h3>
                  <p className="text-gray-600 text-left">
                    Our medical experts will review your reports and provide a
                    detailed treatment plan within 1–2 working days, including
                    estimated cost and duration.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic3.src}
                  alt="Cancer Treatment"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 4 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic4.src}
                  alt="Dental Treatments"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-red-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-red-700 mb-2">
                    Get a Visa Invitation Letter:
                  </h3>
                  <p className="text-gray-600">
                    Once you confirm your treatment, we’ll issue an official
                    invitation letter to help you apply for a Medical Visa
                    (M-Visa) at the nearest Indian Embassy.
                  </p>
                </div>
              </div>
            </div>

            {/* 5 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-yellow-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-yellow-700 mb-2">
                    Book Your Flight:
                  </h3>
                  <p className="text-gray-600 text-left">
                    After receiving your visa, share your flight details with us
                    so we can arrange airport pickup and comfortable
                    accommodation near the hospital.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic5.src}
                  alt="Heart & Cardiology Treatments"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 6 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-purple-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic6.src}
                  alt="Kidney & Urology Treatments"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-purple-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">
                    Special Assistance (If Required):
                  </h3>
                  <p className="text-gray-600">
                    We provide extra care for patients with special needs, such
                    as air ambulance services, wheelchair assistance, or medical
                    escorts.
                  </p>
                </div>
              </div>
            </div>

            {/* 7 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-teal-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">
                    Carry Essential Documents:
                  </h3>
                  <p className="text-gray-600 text-left">
                    Don’t forget your passport, visa, medical records, and
                    credit/debit cards. Keep copies of all important travel and
                    health documents.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic7.src}
                  alt="Ophthalmology Surgery"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 8 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic8.src}
                  alt="Infertility Treatments"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-indigo-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    Stay in India:
                  </h3>
                  <p className="text-gray-600">
                    Enjoy secure and comfortable accommodation during your
                    stay—ranging from luxury hotels to budget guest houses. Our
                    team is available 24/7 to assist you with all arrangements.
                  </p>
                </div>
              </div>
            </div>

            {/* 9 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 text-right relative">
                <span className="hidden md:block absolute right-0 top-1/2 w-8 border-t-4 border-teal-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">
                    Treatment & Recovery:
                  </h3>
                  <p className="text-gray-600 text-left">
                    Undergo your treatment under the supervision of highly
                    qualified doctors. After the procedure, our team ensures
                    your comfort and complete recovery support until discharge.
                  </p>
                </div>
              </div>
              <div className="relative z-10 bg-teal-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic7.src}
                  alt="Ophthalmology Surgery"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2"></div>
            </div>

            {/* 10 */}
            <div className="mb-12 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="relative z-10 bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-xl shadow-md mx-auto my-4">
                <img
                  src={pic8.src}
                  alt="Infertility Treatments"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-left relative">
                <span className="hidden md:block absolute left-0 top-1/2 w-8 border-t-4 border-indigo-500"></span>
                <div className="bg-white p-6 rounded-2xl shadow-md inline-block">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                    Post-Treatment Care:
                  </h3>
                  <p className="text-gray-600">
                    Even after you return home, we stay connected through online
                    consultations and follow-ups to ensure a smooth recovery
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="text-center font-bold">
          <p className="capitalize">
            We’re with you every step of the way—from your first inquiry to your
            complete recovery.
          </p>
        </ul>
      </section>
    </>
  );
}

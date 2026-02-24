import Script from "next/script";
import React from 'react';
import Link from "next/link";
import CTA from "../../../Component/cta";
import Image from "next/image";
import ContactForm from "../../../Component/ContactForm";

import { Calendar, Heart, Shield, Hospital, Users, Award, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: "Glaucoma Surgery in India for International Patients",
  description:
    "Get advanced glaucoma surgery in India with expert eye surgeons and complete medical tourism support for international patients. Safe, affordable, and reliable care.",
};

const countries = [
  "Nigeria", "Kenya", "Tanzania", "Uganda", "Ethiopia", "Sudan",
  "South Sudan", "Ghana", "Zambia", "Zimbabwe", "Rwanda", "DR Congo",
  "Sierra Leone", "Liberia", "Malawi", "Maldives", "Fiji",
  "Papua New Guinea", "Solomon Islands"
];

export default function GlaucomaSurgeryIndia() {
  return (
    <>
    {/* ✅ FAQ SCHEMA */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is glaucoma and why is surgery needed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Glaucoma is an eye condition that damages the optic nerve due to increased eye pressure. Surgery is recommended when medicines and eye drops are not enough to control this pressure.",
                },
              },
              {
                "@type": "Question",
                name: "How much does glaucoma surgery cost in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The cost depends on the type of surgery, hospital, and patient condition. India is known for offering affordable glaucoma treatment.",
                },
              },
              {
                "@type": "Question",
                name: "Is glaucoma surgery painful?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The surgery is performed under anesthesia, and patients usually experience minimal discomfort.",
                },
              },
              {
                "@type": "Question",
                name: "Which cities in India are best for glaucoma surgery?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Delhi, Chennai, Mumbai, and other major cities have specialized eye hospitals for glaucoma care.",
                },
              },
            ],
          }),
        }}
      />
    
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#053161] to-[#6796cc] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Glaucoma Surgery in India for International Patients
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Glaucoma is a serious eye condition that gradually damages the optic nerve and can lead to permanent vision loss if not treated on time. For many patients around the world, accessing advanced glaucoma care can be expensive or delayed. This is why thousands of international patients now choose Advanced glaucoma surgery in India for safe, modern, and affordable glaucoma surgery.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 lg:px-8 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8">

          {/* LEFT CONTENT - 70% */}
          <div className="lg:col-span-7 order-2 lg:order-1">

            {/* Table of Contents */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-pink-500">
                <div className="flex items-center mb-6">
                  <CheckCircle className="text-pink-600 mr-3" size={28} />
                  <h2 className="text-2xl font-bold text-gray-800">In this page</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Understanding Glaucoma and When Surgery is Needed',
                    'Best Doctor for Glaucoma Surgery in India',
                    'Types of Glaucoma Surgeries Available in India',
                    'Glaucoma Surgery Cost in India for Foreign Patients',
                    'Why International Patients Choose India for Glaucoma Surgery',
                    'Best Cities in India for Glaucoma Surgery',
                    'Diagnostic Tests Before Glaucoma Surgery',
                    'What to Expect During Your Medical Journey to India',
                    'Recovery After Glaucoma Surgery',
                    'How Medical Tourism Support Helps International Patients',
                    'Risks and Safety of Glaucoma Surgery',
                    'Frequently Asked Questions About Glaucoma Surgery in India',
                    'Choosing the Right Partner for Your Glaucoma Treatment in India',
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      className="text-gray-700 hover:text-pink-600 hover:bg-pink-50 p-3 rounded-lg transition-all duration-200 flex items-start group"
                    >
                      <span className="text-pink-500 mr-2 group-hover:scale-110 transition-transform">›</span>
                      <span className="text-sm">{item}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

              {/* Overview Section */}
              <section id="understanding-glaucoma-and-when-surgery-is-needed" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Understanding Glaucoma and When Surgery is Needed
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    In 2025, India has become a trusted destination for complex Eye surgery in India for international patients because of its experienced ophthalmic surgeons, advanced surgical techniques, and well-equipped eye hospitals. For international patients, the journey is not only about Glaucoma surgery treatment but also about receiving complete support - from consultation and diagnosis to surgery, recovery, and travel assistance.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    This guide explains everything you need to know about glaucoma surgery in India, the types of procedures available, costs, recovery, and how medical tourism works for eye care.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mt-4">
                    We provide complete medical tourism support for foreign patients coming to India for advanced glaucoma treatment. Patients from African and island nations choose India for experienced eye specialists, modern facilities, and smooth coordination from consultation to recovery.
                  </p>
                </div>
              </section>

              {/* What is Glaucoma */}
              <section id="what-is-glaucoma" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Understanding Glaucoma and When Surgery is Needed
                </h2>
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8 mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-pink-600 mb-4">What Is Glaucoma?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Glaucoma is a group of eye disorders caused by increased pressure inside the eye, which damages the optic nerve. This damage is irreversible and often develops slowly without noticeable symptoms in the early stages.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-pink-600 mb-4">Symptoms That Indicate Advanced Glaucoma</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Many patients do not realize they have glaucoma until vision starts narrowing. Warning signs may include blurred vision, halos around lights, eye pain, and gradual loss of peripheral vision.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-pink-600 mb-4">When Do Doctors Recommend Glaucoma Surgery?</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Surgery is usually advised when medications and eye drops fail to control eye pressure. The goal of surgery is to create a new drainage pathway for fluid inside the eye, reducing pressure and preventing further nerve damage.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Doctor Section */}
              <section id="best-doctor-for-glaucoma-surgery-in-india" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Best Doctor for Glaucoma Surgery in India
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Finding the best doctor for glaucoma surgery in India is essential for patients who want safe, precise, and long-term protection of their vision. Leading glaucoma specialists in India are highly experienced in diagnosing complex eye conditions and providing the right Glaucoma surgery treatment in India based on the patient's eye pressure, optic nerve health, and stage of disease.
                  </p>
                  <h3 className="text-2xl font-bold text-pink-600 mb-6">Best Glaucoma Surgeon in India</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    When it comes to protecting your vision and getting effective glaucoma care, choosing the best glaucoma surgeon in India makes all the difference. India is recognized globally for world-class eye specialists who combine extensive surgical expertise with advanced technology to deliver top-tier glaucoma treatment.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    The best glaucoma surgeons in India are highly trained in managing all forms of glaucoma, including open angle glaucoma, closed angle glaucoma, and acute angle closure glaucoma. Their deep understanding of glaucoma diagnostics, progression, and treatment enables them to design personalized care plans based on the patient's condition and needs.
                  </p>

                  {/* Doctors */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-pink-500">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Suraj Munjal</h4>
                        <p className="text-pink-700 font-semibold mb-2">Founder &amp; Chief Medical Officer</p>
                        <p className="text-gray-700 text-sm mb-2">The Sight Avenue Eye Hospital (Delhi &amp; Gurugram)</p>
                        <p className="text-gray-600 text-sm font-semibold mb-3">Experience: 20+ Years | Specialty: Ophthalmology &amp; Refractive Surgery</p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Dr. Suraj Munjal is a senior ophthalmologist with over two decades of experience in advanced eye care. He completed his MBBS and MS (Ophthalmology) and pursued specialized training in cataract and refractive surgeries in India and Germany.
                        </p>
                        <div className="bg-pink-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-800 mb-1">Areas of Expertise:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• LASIK, SMILE &amp; ICL Surgery</li>
                            <li>• Advanced Cataract Surgery</li>
                            <li>• Corneal Transplant &amp; Keratoconus Treatment</li>
                            <li>• Squint &amp; Pediatric Eye Surgery</li>
                            <li>• Glaucoma Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Rahil Chaudhary</h4>
                        <p className="text-purple-700 font-semibold mb-2">Managing Director &amp; Ophthalmologist</p>
                        <p className="text-gray-700 text-sm mb-2">Eye7 Eye Hospitals, Lajpat Nagar, New Delhi</p>
                        <p className="text-gray-600 text-sm font-semibold mb-3">Experience: 15+ years | MBBS, Postgraduate degree in Ophthalmology</p>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          Dr. Rahil Chaudhary is a leading eye surgeon known for his expertise in refractive and cataract surgery, particularly in specs removal procedures like LASIK and Contoura Vision. He holds Guinness and Limca World Records for high-volume and advanced eye surgeries.
                        </p>
                        <div className="bg-purple-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-800 mb-1">Key Highlights:</p>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Pioneer of advanced laser vision correction techniques in India</li>
                            <li>• Guinness World Record: 250 Contoura Vision LASIK surgeries in a single day</li>
                            <li>• Limca World Record: correcting highest spectacle power (-32.5D)</li>
                            <li>• Recognized internationally with awards in refractive surgery</li>
                            <li>• Languages: English, Hindi</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Types of Surgeries */}
              <section id="types-of-glaucoma-surgeries-available-in-india" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Types of Glaucoma Surgeries Available in India
                </h2>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-pink-100 rounded-full p-3 mr-4">
                          <Hospital className="text-pink-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Trabeculectomy Surgery</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Trabeculectomy is a well-established glaucoma procedure where surgeons create a controlled drainage pathway to reduce intraocular pressure. It is often advised for moderate to advanced cases when medications fail. The surgery helps slow optic nerve damage and preserve remaining vision safely.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 rounded-full p-3 mr-4">
                          <Hospital className="text-purple-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Minimally Invasive Glaucoma Surgery (MIGS)</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        MIGS includes advanced techniques performed through tiny incisions with minimal tissue disruption. These procedures reduce eye pressure with faster healing, less discomfort, and lower complication risk. MIGS is commonly recommended for early to moderate glaucoma stages and combined cataract cases.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 rounded-full p-3 mr-4">
                          <Award className="text-blue-600" size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Glaucoma Drainage Implant Surgery</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        In complex or resistant glaucoma cases, surgeons place a small implant to regulate fluid drainage inside the eye. This device helps maintain stable eye pressure when other surgeries may not be effective, offering long-term pressure control and protection of the optic nerve.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cost Section */}
              <section id="glaucoma-surgery-cost-in-india-for-foreign-patients" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Glaucoma Surgery Cost in India for Foreign Patients
                </h2>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-8 mt-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
                      <h3 className="text-xl font-bold text-green-700 mb-3">Factors Affecting Treatment Cost</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The overall cost depends on the type of surgery, hospital facilities, surgeon experience, and the length of stay required. Individual medical conditions also influence the treatment approach and expenses.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">Comparing Cost with Other Countries</h3>
                      <p className="text-gray-700 leading-relaxed">
                        India offers glaucoma surgery at considerably lower costs compared to many Western nations. This affordability, combined with quality care, makes it an attractive choice for international patients.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-500 md:col-span-2">
                      <h3 className="text-xl font-bold text-purple-700 mb-3">Transparent Treatment Planning</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Hospitals and facilitators provide detailed treatment plans and cost estimates before travel. This transparency helps patients plan their medical journey without unexpected financial concerns.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cost Comparison Table */}
              <section id="glaucoma-surgery-cost-comparison" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Glaucoma Surgery Cost Comparison (Country-Wise)
                </h2>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                        <tr>
                          <th className="px-6 py-4 text-left text-lg font-semibold">Country</th>
                          <th className="px-6 py-4 text-left text-lg font-semibold">Average Glaucoma Surgery Cost</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { country: 'India', cost: '$1,000 – $3,000+', highlight: true },
                          { country: 'USA', cost: '$4,000 – $8,000+' },
                          { country: 'UK', cost: '$3,500 – $6,500' },
                          { country: 'UAE', cost: '$2,500 – $5,000' },
                        ].map((row, index) => (
                          <tr key={index} className={row.highlight ? 'bg-pink-50 font-semibold' : 'hover:bg-gray-50'}>
                            <td className="px-6 py-4 text-gray-900">{row.country}</td>
                            <td className="px-6 py-4 text-gray-700">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600 italic">
                    ✅ Key takeaway: Even the most advanced glaucoma surgeries in India often cost 60–80% less than similar procedures in the USA, UK, or UAE.
                  </div>
                </div>
              </section>

              {/* Why Choose India */}
              <section id="why-international-patients-choose-india-for-glaucoma-surgery" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Why International Patients Choose India for Glaucoma Surgery
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-blue-600 mb-3">Access to Experienced Eye Surgeons</h3>
                      <p className="text-gray-700 leading-relaxed">
                        India has highly trained ophthalmologists who routinely perform glaucoma surgeries using modern surgical practices. Their extensive experience in handling varied glaucoma conditions provides international patients with confidence in receiving dependable and carefully managed eye treatment.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-purple-600 mb-3">Advanced Eye Hospitals and Technology</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The best eye hospital in India for glaucoma surgery uses advanced diagnostic imaging, surgical microscopes, and laser systems for precise Laser glaucoma surgery India. These technologies allow accurate assessment, safe surgical execution, and better monitoring, ensuring patients receive modern eye care throughout their treatment journey.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-pink-600 mb-3">Affordable Glaucoma Surgery Without Compromising Care</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Glaucoma surgery in India is cost-effective compared to many countries, yet hospitals maintain strong safety standards and quality care. This balance of affordability and reliable treatment attracts international patients seeking effective solutions within reasonable medical budgets.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Best Cities */}
              <section id="best-cities-in-india-for-glaucoma-surgery" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Best Cities in India for Glaucoma Surgery
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <MapPin className="text-red-600 mr-3" size={28} />
                        <h3 className="text-xl font-bold text-gray-900">Glaucoma Surgery in Delhi</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Delhi offers access to reputed eye hospitals with dedicated glaucoma specialists in India and international patient departments. The city provides convenient travel connectivity, modern facilities, and coordinated medical services that make it a preferred destination for glaucoma surgery.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-3">
                        <MapPin className="text-blue-600 mr-3" size={28} />
                        <h3 className="text-xl font-bold text-gray-900">Glaucoma Treatment in Chennai and Mumbai</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Chennai and Mumbai are known for established eye institutes with advanced glaucoma care units. These cities attract international patients because of experienced surgeons, modern infrastructure, and well-organized medical support for complex eye procedures.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2">
                      <div className="flex items-center mb-3">
                        <MapPin className="text-purple-600 mr-3" size={28} />
                        <h3 className="text-xl font-bold text-gray-900">Availability of Eye Care Across Major Indian Cities</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Beyond metro cities, several specialized eye centers across India provide quality glaucoma diagnosis and surgery. Patients can choose locations based on travel ease, hospital reputation, and personal comfort without compromising on medical expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Diagnostic Tests */}
              <section id="diagnostic-tests-before-glaucoma-surgery" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Diagnostic Tests Before Glaucoma Surgery
                </h2>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mt-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-600 mb-3">Eye Pressure Measurement and Optic Nerve Examination</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Doctors carefully measure intraocular pressure and examine the optic nerve using specialized instruments. These tests help determine the severity of nerve damage and guide surgeons in selecting the most appropriate glaucoma surgery for the patient.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                      <h3 className="text-xl font-bold text-purple-600 mb-3">Visual Field Testing</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Visual field testing checks the extent of peripheral vision loss caused by glaucoma. This assessment helps doctors understand disease progression and plan treatment strategies that aim to prevent further deterioration of visual capacity.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-pink-500">
                      <h3 className="text-xl font-bold text-pink-600 mb-3">Imaging and Drainage Angle Evaluation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Advanced imaging techniques evaluate the eye's drainage angle and internal structures. These detailed scans assist surgeons in understanding fluid flow issues and choosing surgical methods best suited to restore balanced eye pressure.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Medical Journey */}
              <section id="what-to-expect-during-your-medical-journey-to-india" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  What to Expect During Your Medical Journey to India
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500">
                      <h3 className="text-xl font-bold text-pink-700 mb-3">Initial Online Consultation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        International patients can share medical reports and test results digitally for preliminary evaluation. Doctors review these details, suggest suitable procedures, and guide patients about travel plans before they arrive in India for treatment.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
                      <h3 className="text-xl font-bold text-purple-700 mb-3">Travel, Medical Visa, and Arrival Assistance</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Medical tourism teams assist patients with visa documentation, travel coordination, and airport pickup. This organized support helps international patients feel comfortable and reduces stress associated with traveling for medical treatment.
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">Surgery and Hospital Stay</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Glaucoma surgery usually requires a short hospital stay for monitoring eye pressure and recovery. Medical teams ensure careful observation after the procedure, allowing patients to heal safely before discharge.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recovery */}
              <section id="recovery-after-glaucoma-surgery" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Recovery After Glaucoma Surgery
                </h2>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-8 mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                      <h3 className="text-xl font-bold text-green-700 mb-3">Post-Surgery Care and Medication</h3>
                      <p className="text-gray-700 leading-relaxed">
                        After surgery, patients use prescribed eye drops and medications to support healing and maintain pressure control. Doctors provide clear instructions to avoid strain and protect the operated eye during recovery.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">Follow-Up Visits and Monitoring</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Regular follow-up appointments help doctors monitor eye pressure and healing progress. These visits are essential to ensure the surgery remains effective and to address any concerns promptly.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
                      <h3 className="text-xl font-bold text-purple-700 mb-3">Returning to Daily Activities</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Patients gradually resume daily tasks as advised by their doctor. Light activities can begin early, while strenuous work should be avoided until the eye has healed adequately.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Medical Tourism Support */}
              <section id="how-medical-tourism-support-helps-international-patients" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  How Medical Tourism Support Helps International Patients
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-l-4 border-pink-500">
                      <h3 className="text-xl font-bold text-pink-700 mb-3">Coordination with Hospitals and Doctors</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Medical tourism teams manage communication between patients and hospitals, ensuring appointments, reports, and treatment schedules are organized smoothly before and during the visit.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border-l-4 border-purple-500">
                      <h3 className="text-xl font-bold text-purple-700 mb-3">Language and Travel Assistance</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Support staff assist with language translation, local travel arrangements, and daily needs, helping patients feel comfortable in an unfamiliar environment.
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-700 mb-3">Accommodation and Local Travel Support</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Patients are assisted in finding nearby accommodation and transport facilities, allowing them to focus on recovery while logistical aspects are handled efficiently.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Risks and Safety */}
              <section id="risks-and-safety-of-glaucoma-surgery" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Risks and Safety of Glaucoma Surgery
                </h2>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 mt-8">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-pink-500">
                      <h3 className="text-xl font-bold text-pink-600 mb-3 flex items-center">
                        <Shield className="mr-3" size={24} />
                        Common Surgical Risks Explained
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Like all surgeries, glaucoma procedures carry minor risks such as infection or temporary discomfort. Proper pre-surgery evaluation and skilled surgical practices significantly reduce these possibilities.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                      <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center">
                        <Heart className="mr-3" size={24} />
                        Importance of Choosing the Right Eye Hospital
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Selecting a reputed eye hospital ensures adherence to safety protocols, experienced surgical teams, and reliable post-operative care for better treatment outcomes.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                      <h3 className="text-xl font-bold text-blue-600 mb-3 flex items-center">
                        <Calendar className="mr-3" size={24} />
                        Post-Surgical Monitoring for Long-Term Eye Health
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Continuous monitoring after surgery is essential to maintain controlled eye pressure and protect vision. Regular check-ups help ensure long-term eye health and stability.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* International Patient Experiences */}
              {/* <section className="min-h-screen text-black font-sans relative overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
                  <div className="text-center mb-20">
                    <p className="inline-flex items-center gap-2 text-[#032870] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4">
                      <span className="w-8 h-px bg-[#032870]" />
                      Testimonials
                      <span className="w-8 h-px bg-[#032870]" />
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[#4678bd]">
                      Patient <span className="text-[#032870]">Reviews</span>
                    </h2>
                    <div className="mt-5 mx-auto w-16 h-[2px] rounded-full bg-black" />
                  </div>

                  <div className="mb-20">
                    <div className="relative rounded-2xl border border-black/10 bg-white overflow-hidden">
                      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-black rounded-tl-2xl" />
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-black rounded-br-2xl" />
                      <div className="p-6 sm:p-10 lg:p-14">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-1 h-7 rounded-full bg-black" />
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black tracking-tight">
                            International Patient Experiences
                          </h3>
                        </div>
                        <p className="text-black text-base sm:text-lg leading-relaxed w-full mb-6">
                          India is a preferred destination for glaucoma surgery among{" "}
                          <span className="font-medium italic">patients traveling</span>{" "}
                          from{" "}
                          <span className="font-medium">
                            {countries.slice(0, -1).join(", ")} and {countries[countries.length - 1]}
                          </span>.{" "}
                          Patients choose India for experienced eye specialists, modern facilities, and smooth coordination from consultation to recovery under internationally accepted clinical practices.
                        </p>
                        <p className="text-black text-base sm:text-lg leading-relaxed w-full">
                          Patients have shared that timely assistance, clear medical guidance, and personalized attention helped them feel confident while undergoing treatment in a foreign country.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-2">
                          {countries.map((country) => (
                            <span
                              key={country}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/20 bg-white text-black text-xs sm:text-sm"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-black" />
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="relative rounded-2xl border border-black/10 bg-white overflow-hidden">
                      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-black rounded-tl-2xl" />
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-black rounded-br-2xl" />
                      <div className="p-6 sm:p-10 lg:p-14">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-1 h-7 rounded-full bg-black" />
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-black tracking-tight">
                            Patient Reviews and Experiences
                          </h3>
                        </div>
                        <p className="text-black text-base sm:text-lg leading-relaxed w-full mb-4">
                          Patient experiences play an important role in understanding the quality of medical tourism services. Over the years, international patients from different countries have shared positive feedback about their glaucoma treatment journey in India.
                        </p>
                        <p className="text-black text-base sm:text-lg leading-relaxed w-full">
                          Their reviews highlight not only medical outcomes but also the overall support, coordination, and care they received throughout the process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}

              {/* CTA */}
              {/* <CTA /> */}

              {/* FAQs */}
              <section id="frequently-asked-questions-about-glaucoma-surgery-in-india" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Frequently Asked Questions About Glaucoma Surgery in India
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                  <div className="space-y-6">
                    {[
                      {
                        question: "What is glaucoma and why is surgery needed?",
                        answer: "Glaucoma is an eye condition that damages the optic nerve due to increased eye pressure. Surgery is recommended when medicines and eye drops are not enough to control this pressure and protect remaining vision."
                      },
                      {
                        question: "Is glaucoma surgery available in India for international patients?",
                        answer: "Yes. Many reputed eye hospitals in India regularly treat international patients and offer advanced glaucoma surgeries with complete medical tourism assistance."
                      },
                      {
                        question: "What types of glaucoma surgeries are performed in India?",
                        answer: "Common procedures include trabeculectomy, minimally invasive glaucoma surgery (MIGS), laser procedures, and glaucoma drainage implant surgery, depending on the patient's condition."
                      },
                      {
                        question: "How much does glaucoma surgery cost in India?",
                        answer: "The cost depends on the type of surgery, hospital, and patient condition. India is known for offering affordable glaucoma treatment compared to many Western countries."
                      },
                      {
                        question: "How long do I need to stay in India for glaucoma surgery?",
                        answer: "Most patients stay for around one to two weeks, including pre-surgery evaluation, the procedure, and follow-up checks before returning home."
                      },
                      {
                        question: "Is glaucoma surgery painful?",
                        answer: "The surgery is performed under anesthesia, and patients usually experience minimal discomfort during and after the procedure."
                      },
                      {
                        question: "Can glaucoma surgery restore lost vision?",
                        answer: "Glaucoma surgery helps prevent further vision loss by controlling eye pressure. It cannot restore vision that has already been lost."
                      },
                      {
                        question: "Which cities in India are best for glaucoma surgery?",
                        answer: "Delhi, Chennai, Mumbai, and other major cities have specialized eye hospitals known for glaucoma care and international patient services."
                      },
                      {
                        question: "Do I need a medical visa for glaucoma surgery in India?",
                        answer: "Yes. International patients require a medical visa, and hospitals or medical tourism facilitators provide the necessary documents for the application."
                      },
                      {
                        question: "What is the recovery time after glaucoma surgery?",
                        answer: "Recovery varies by procedure, but most patients resume normal activities gradually within a few weeks under medical guidance."
                      },
                      {
                        question: "Are follow-up consultations possible after returning home?",
                        answer: "Yes. Many hospitals offer online follow-up consultations to monitor recovery and eye pressure after the patient returns to their country."
                      },
                      {
                        question: "Why choose India for glaucoma surgery?",
                        answer: "India offers experienced eye surgeons, modern hospitals, affordable treatment, and complete support for international patients, making it a preferred destination for glaucoma care."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                        <h3 className="text-lg font-bold text-pink-700 mb-3">{faq.question}</h3>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section id="choosing-the-right-partner-for-your-glaucoma-treatment-in-india" className="mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                  Choosing the Right Partner for Your Glaucoma Treatment in India
                </h2>
                <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-xl shadow-lg p-8 mt-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Planning glaucoma surgery in another country can feel overwhelming. With proper guidance, experienced doctors, and trusted hospitals, international patients can receive world-class eye care while feeling supported throughout the journey.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    India continues to be a preferred destination for patients seeking reliable and affordable glaucoma surgery combined with compassionate care and medical tourism assistance.
                  </p>
                  <h3 className="text-2xl font-bold text-pink-700 mb-3 mt-6">Need Guidance for Glaucoma Surgery in India?</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    If you are considering glaucoma surgery in India, our team can help you connect with reputed eye hospitals, arrange consultations, and plan your medical travel smoothly. Reach out to receive personalized assistance for your treatment journey.
                  </p>
                </div>
              </section>

            </div>

            {/* Footer CTA */}
            <div className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
                <p className="text-xl text-pink-100 mb-8">Book your consultation with our glaucoma surgery specialists today</p>
                <Link href="/contact" passHref>
                  <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Book Appointment Now
                  </button>
                </Link>
              </div>
            </div>

          </div> {/* END LEFT COL */}

          {/* RIGHT SIDEBAR - 30% */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-900">
                  Book Free Consultation
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
    </>
  );
}
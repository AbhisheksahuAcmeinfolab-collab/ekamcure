import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top 10 Hospitals in India 2026 for International Patients',
  description: 'Explore the top 10 hospitals in India for international patients in 2026, with key specialties, facilities, locations and medical tourism support.',
  alternates: {
    canonical: 'https://ekamhealthservices.com/top-hospitals/top-10-hospitals-india-for-international-patients',
  },
};

const hospitals = [
  {
    rank: 1,
    name: 'Max Healthcare',
    location: 'Delhi NCR & Other Locations',
    imgSrc: '/images/hospitals/max-healthcare.jpg',
    specialties: ['Orthopaedics', 'Oncology', 'Cardiac Sciences', 'Neurosciences', 'Gastroenterology', 'Nephrology', 'Transplant Services', 'Critical Care'],
    whyChoose: [
      'Multispecialty and super-specialty departments led by medical experts.',
      'Advanced surgical infrastructure and dedicated international-patient support.',
      'Strategic locations across Delhi NCR with easy airport accessibility.',
    ],
  },
  {
    rank: 2,
    name: 'Yatharth Hospitals',
    location: 'Delhi NCR Region',
    imgSrc: '/images/hospitals/yatharth-hospital.jpg',
    specialties: ['Orthopaedics', 'Joint Replacement', 'Cardiology', 'Oncology', 'Neurology', 'Gastroenterology', 'Nephrology', 'Critical Care'],
    whyChoose: [
      'Strong focus on orthopaedic, surgical, and joint replacement infrastructure.',
      'Modern diagnostic and critical-care facilities situated across Delhi NCR.',
      'Accessible medical facilities for overseas traveling patients.',
    ],
  },
  {
    rank: 3,
    name: 'Apollo Hospitals',
    location: 'Multiple Cities Pan-India',
    imgSrc: '/images/hospitals/apollo-hospital.jpg',
    specialties: ['Cardiology', 'Oncology', 'Orthopaedics', 'Neurosurgery', 'Gastroenterology', 'Nephrology', 'Transplant Medicine', 'Fertility Care'],
    whyChoose: [
      'Pioneer in private healthcare with a massive network of specialist doctors.',
      'High-end diagnostic technology and complex-care capabilities.',
      'Comprehensive support for international patients from travel to recovery.',
    ],
  },
  {
    rank: 4,
    name: 'Fortis Healthcare',
    location: 'Pan-India Presence',
    imgSrc: '/images/hospitals/fortis-healthcare.jpg',
    specialties: ['Cardiology', 'Oncology', 'Orthopaedics', 'Neurology', 'Gastroenterology', 'Renal Sciences', 'Transplantation', 'Critical Care'],
    whyChoose: [
      'Specialist-led treatment protocols across multi-specialty domains.',
      'Dedicated international patient care coordinators.',
      'Structured post-surgery rehabilitation and follow-up support.',
    ],
  },
  {
    rank: 5,
    name: 'Medanta – The Medicity',
    location: 'Gurugram, Haryana (Delhi NCR)',
    badge: "Ranked No. 1 in India (Newsweek 2026)",
    imgSrc: '/images/hospitals/medanta-gurugram.jpg',
    specialties: ['Cardiac Sciences', 'Oncology', 'Orthopaedics', 'Neurosciences', 'Gastroenterology', 'Organ Transplantation', 'Kidney & Urology Care'],
    whyChoose: [
      'Ranked top hospital in India based on quality metrics and patient outcomes.',
      'Multidisciplinary institute model bringing world-renowned doctors together.',
      'State-of-the-art international patient wing and concierge service.',
    ],
  },
  {
    rank: 6,
    name: 'Manipal Hospitals',
    location: 'Multiple Cities Pan-India',
    imgSrc: '/images/hospitals/manipal-hospital.jpg',
    specialties: ['Cardiology', 'Oncology', 'Orthopaedics', 'Neurosciences', 'Gastroenterology', 'Nephrology', 'Transplantation', 'Critical Care'],
    whyChoose: [
      'Extensive network giving patients freedom of location preference.',
      'Advanced critical care infrastructure and patient-centric care models.',
    ],
  },
  {
    rank: 7,
    name: 'Yashoda Hospitals',
    location: 'Hyderabad',
    imgSrc: '/images/hospitals/yashoda-hospital.jpg',
    specialties: ['Oncology', 'Cardiology', 'Neurology', 'Orthopaedics', 'Gastroenterology', 'Nephrology', 'Transplant Medicine', 'Critical Care'],
    whyChoose: [
      'Leading healthcare destination in Southern India.',
      'Expert multi-disciplinary surgical teams and advanced cancer care technology.',
    ],
  },
  {
    rank: 8,
    name: 'Artemis Hospitals',
    location: 'Gurugram (Delhi NCR)',
    imgSrc: '/images/hospitals/artemis-hospital.jpg',
    specialties: ['Orthopaedics', 'Cardiology', 'Oncology', 'Neurology', 'Gastroenterology', 'Critical Care', 'Surgical Treatment'],
    whyChoose: [
      'JCI & NABH accredited super-specialty facility.',
      'Conveniently located near New Delhi international airport.',
    ],
  },
  {
    rank: 9,
    name: 'Kokilaben Dhirubhai Ambani Hospital',
    location: 'Mumbai',
    imgSrc: '/images/hospitals/kokilaben-hospital.jpg',
    specialties: ['Oncology', 'Orthopaedics', 'Cardiology', 'Neurosciences', 'Gastroenterology', 'Transplantation', 'Critical Care'],
    whyChoose: [
      'Premier multispecialty hospital in Western India.',
      'Full-Time Specialist System (FTSS) ensuring round-the-clock expert availability.',
    ],
  },
  {
    rank: 10,
    name: 'BLK-Max Super Speciality Hospital',
    location: 'New Delhi',
    imgSrc: '/images/hospitals/blk-max-hospital.jpg',
    specialties: ['Oncology', 'Bone Marrow Transplantation', 'Orthopaedics', 'Gastroenterology', 'Cardiac Care', 'Neurosciences', 'Critical Care'],
    whyChoose: [
      'One of Asia’s largest Bone Marrow Transplant centers.',
      'Prime location in central New Delhi with comprehensive international support.',
    ],
  },
];

export default function TopHospitalsPage() {
  return (
    <main className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-100 via-white to-sky-50 border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4">
              Top 10 Hospitals in India 2026 for International Patients
            </h1>
            <p className="text-lg text-slate-600 mb-6">
              India has become an important destination for specialized medical care. Discover world-class hospitals equipped with advanced medical technology, leading specialists, and dedicated international patient services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#ekam-assistance" className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                Request Consultation
              </a>
              <a href="#comparison-table" className="bg-slate-800 hover:bg-slate-900 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                Compare Hospitals
              </a>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Get Medical Guidance</h2>
            <p className="text-slate-600 mb-6">
              Need assistance selecting the right hospital or specialist? Connect with Ekam for medical record evaluation and cost estimates.
            </p>
            <a href="#ekam-assistance" className="block text-center bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition">
              Get Assistance
            </a>
          </div>
        </div>
      </section>

      {/* Selection Criteria Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            How We Selected Hospitals for International Patients
          </h2>
          <p className="text-slate-600">
            Choosing a hospital in another country requires looking beyond treatment costs. Relevant factors for evaluating hospitals include clinical departments, specialist expertise, global accreditation, and international patient services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Specialties & Expertise', desc: 'Access to multidisciplinary super-specialists and specialist-led care.' },
            { title: 'Infrastructure', desc: 'Modern OTs, advanced diagnostic imaging, and critical care facilities.' },
            { title: 'Accreditation', desc: 'JCI and NABH quality certifications ensuring top clinical safety.' },
            { title: 'International Services', desc: 'Visa coordination, airport transfers, language translators, and follow-up care.' },
          ].map((factor, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-lg text-slate-900 mb-2">{factor.title}</h3>
              <p className="text-slate-600 text-sm">{factor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparison-table" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
          Quick Comparison of Top 10 Hospitals
        </h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow border border-slate-200">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 font-semibold">Rank</th>
                <th className="p-4 font-semibold">Hospital</th>
                <th className="p-4 font-semibold">Location</th>
                <th className="p-4 font-semibold">Key Areas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {hospitals.map((h) => (
                <tr key={h.rank} className="hover:bg-slate-50">
                  <td className="p-4 font-bold text-sky-600">{h.rank}</td>
                  <td className="p-4 font-semibold text-slate-900">{h.name}</td>
                  <td className="p-4 text-slate-600">{h.location}</td>
                  <td className="p-4 text-slate-600">{h.specialties.slice(0, 4).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Hospitals Detail Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
          Top 10 Hospitals in India for International Patients in 2026
        </h2>

        {hospitals.map((hospital, index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={hospital.rank}
              className={`bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden grid md:grid-cols-12 gap-0 items-center`}
            >
              {/* Image Container */}
              <div
                className={`relative h-64 md:h-full min-h-[280px] md:col-span-5 bg-slate-200 ${
                  isEven ? 'md:order-last' : ''
                }`}
              >
                <Image
                  src={hospital.imgSrc}
                  alt={`${hospital.name} Building`}
                  fill
                  className="object-cover"
                />
                {hospital.badge && (
                  <span className="absolute top-4 left-4 bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1.5 rounded shadow">
                    {hospital.badge}
                  </span>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-8 md:col-span-7">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sky-600 font-extrabold text-lg">#{hospital.rank}</span>
                  <h3 className="text-2xl font-bold text-slate-900">{hospital.name}</h3>
                </div>
                <span className="inline-block bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded mb-4">
                  📍 {hospital.location}
                </span>

                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">Key Specialties:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {hospital.specialties.map((item, i) => (
                      <span key={i} className="bg-sky-50 text-sky-800 text-xs px-2.5 py-1 rounded-md border border-sky-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 mb-1 text-sm">Why Consider {hospital.name}:</h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {hospital.whyChoose.map((reason, i) => (
                      <li key={i}>{reason}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Ekam Assistance Section */}
      <section id="ekam-assistance" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-sky-900 text-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Ekam Can Help International Patients</h2>
          <p className="text-sky-100 mb-6 max-w-3xl">
            Choosing a hospital in another country can be complicated. Ekam helps international patients coordinate different parts of their medical journey seamlessly.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              'Collecting Medical Records',
              'Preliminary Medical Evaluation',
              'Hospital & Specialist Selection',
              'Medical Visa Assistance',
              'Accommodation & Travel Support',
              'Follow-up Care Coordination',
            ].map((step, idx) => (
              <div key={idx} className="bg-sky-800/60 border border-sky-700 p-4 rounded-lg text-sm font-medium">
                ✔ {step}
              </div>
            ))}
          </div>
          <button className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-8 py-3.5 rounded-lg shadow transition">
            Request International Patient Assistance
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Which are the top hospitals in India for international patients in 2026?',
              a: 'Top hospitals include Medanta, Apollo Hospitals, Max Healthcare, Fortis Healthcare, Manipal Hospitals, Yashoda Hospitals, Artemis Hospitals, Kokilaben Dhirubhai Ambani Hospital, BLK-Max, and Yatharth Hospitals.',
            },
            {
              q: 'Which hospital is ranked No. 1 in India in 2026?',
              a: 'Medanta reported that Medanta Gurugram was ranked No. 1 in India in Newsweek’s World’s Best Hospitals 2026 ranking.',
            },
            {
              q: 'How do I choose the right Indian hospital from another country?',
              a: 'Start by identifying your medical specialty requirement, then evaluate specialist expertise, facilities, accreditation, international patient services, location, and cost estimates.',
            },
            {
              q: 'Can Ekam help me choose a hospital?',
              a: 'Yes, Ekam can assist with medical treatment coordination and help international patients identify appropriate healthcare providers based on their clinical requirements.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

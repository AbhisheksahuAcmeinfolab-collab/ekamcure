"use client";
import Image from "next/image";
import Link from "next/link";

import img from "../../assets/recent/Our Services.webp";

export default function ServicesPage() {
  const helpItems = [
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-300/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.128 1.152.487V8.25c4.335 0 7.5 1.5 9.5 4.5-2 3-5.165 4.5-9.5 4.5v4.717c0 .615-.713.926-1.152.487L2.25 12z"
            />
          </svg>
        </div>
      ),
      title: "Communications Support",
      desc: "We help you stay connected by arranging local SIM cards and internet dongles so you can easily communicate with your loved ones.",
    },

    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg shadow-purple-300/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.5l1.664-8.32A2.25 2.25 0 016.88 3h10.24a2.25 2.25 0 012.216 1.82L21 13.5M3 13.5h18M3 13.5l1.5 6.75M21 13.5l-1.5 6.75M4.5 20.25h15"
            />
          </svg>
        </div>
      ),
      title: "Transportation",
      desc: "We arrange cars for all local transfers and recommend safe, convenient travel options around the city.",
    },

    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg shadow-green-300/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h6m-6 4h6m-9 4h12a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018 4.5H6A2.25 2.25 0 003.75 6.75v11.25A2.25 2.25 0 006 20.25z"
            />
          </svg>
        </div>
      ),
      title: "Pickup At Airport",
      desc: "Our executive meets you at the airport and arranges safe transportation to your final destination.",
    },

    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-300/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 21h15M4.5 10.5h15M3 7.5l9-4.5 9 4.5M12 7.5V21"
            />
          </svg>
        </div>
      ),
      title: "Accommodation",
      desc: "We help you find comfortable and nearby accommodations to make your treatment stay convenient.",
    },

    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shadow-lg shadow-red-300/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 14.25L12 9.75l4.5 4.5m-9 3.75H9m6 0h1.5M3 6.75h18"
            />
          </svg>
        </div>
      ),
      title: "Medical Assistance",
      desc: "Our care team supports you at every step to ensure your treatment and recovery are smooth and stress-free.",
    },

    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-300/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.75A8.25 8.25 0 116.33 6.33M12 6.75v6l3.75 1.5"
            />
          </svg>
        </div>
      ),
      title: "Dedicated Support",
      desc: "We provide 24/7 support to answer your questions and help with anything you need throughout your journey.",
    },
  ];
  
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Fee Banner"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
        </div>
      </div>

      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-20 bg-blue">
        {/* Header */}
        <div className="py-16 px-6 md:px-20 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              How We Can Help You
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {helpItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 text-center border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <div className="mb-4">{item.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-900 text-white py-12 px-6 md:px-12 lg:px-20 text-center mt-6">
            <div className="max-w-4xl mx-auto">
              {/* Heading */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Want to Schedule an Appointment?
              </h2>

              {/* Subheading */}
              <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-8">
                In a country known for world-class care and compassion, don’t
                get lost in the process. Start your healing with guidance you
                can trust.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition text-white text-center"
                >
                  Talk to Our Experts
                </Link>

                <Link
                  href="/contact"
                  className="bg-blue-700 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition text-white text-center"
                >
                  Appointment Form
                </Link>
              </div>

              {/* Footer Note */}
              <p className="mt-8 text-xs md:text-sm italic text-gray-300">
                No hidden charges. Just honest, personalised advice to make your
                medical trip to India safe and successful.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

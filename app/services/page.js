"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  Microscope,
  Syringe,
  Hospital,
  Pill,
} from "lucide-react";
import img from "../../assets/recent/Our Services.webp";
import pic1 from "../../assets/icon/1.jpg";
import pic2 from "../../assets/icon/2.jpg";
import pic3 from "../../assets/icon/3.jpg";
import pic4 from "../../assets/icon/4.jpg";
import pic5 from "../../assets/uses/A3.png";
import pic6 from "../../assets/icon/5.jpg";
import pic7 from "../../assets/icon/6.png";
import pic8 from "../../assets/icon/7.jpg";
import pic9 from "../../assets/icon/8.jpg";

export default function ServicesPage() {
  const services = [
    {
      icon: <Stethoscope className="w-10 h-10 text-blue-600" />,
      title: "Doctor and Hospital Selection",
      desc: "Comprehensive health checkups and expert medical advice tailored to your needs.",
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-green-600" />,
      title: "Cardiology",
      desc: "Advanced heart care with modern diagnostics and personalized treatment plans.",
    },
    {
      icon: <Microscope className="w-10 h-10 text-purple-600" />,
      title: "Diagnostics",
      desc: "Accurate lab testing and imaging services with cutting-edge equipment.",
    },
    {
      icon: <Syringe className="w-10 h-10 text-red-600" />,
      title: "Vaccination",
      desc: "Safe and effective immunization for all age groups to prevent major illnesses.",
    },
    {
      icon: <Hospital className="w-10 h-10 text-orange-600" />,
      title: "Emergency Care",
      desc: "24/7 emergency services to handle critical health conditions promptly.",
    },
    {
      icon: <Pill className="w-10 h-10 text-pink-600" />,
      title: "Pharmacy",
      desc: "On-site pharmacy providing genuine medicines and healthcare essentials.",
    },
  ];

  const helpItems = [
    {
      img: pic1, // put your image in public/icons/
      title: "Communications Support",
      desc: "To help you stay in touch with your loved ones back home, we will assist you in finding an activated telephone number from the local service provider. We can also help you acquire an internet dongle to continue accessing the internet and your email.",
    },
    {
      img: pic2,
      title: "Transportation",
      desc: "To make it simple for you to travel and navigate the city without difficulties, we will help you arrange a car for all of your local transfers inside the city. We’ll also recommend alternate, more convenient, and secure ways of transportation.",
    },
    {
      img: pic3,
      title: "Pickup At Airport",
      desc: "Following receipt of the patient’s travel schedule, our executive will arrange transport for you. They will meet you and any family members at the airport and assist you in reaching your final destination safely.",
    },
    {
      img: pic4,
      title: "Accommodation",
      desc: "We assist in finding suitable accommodations near the hospital or city center, ensuring comfort and convenience during your treatment stay.",
    },
    {
      img: pic5,
      width: 1000,
      height: 500,
      //   className={w-full h-72 object-cover rounded-lg},
      //   <div className="container">
      //     <img src="../../assets/uses/3.png" alt="Doctors team smiling" width="500" height="300" />
      // </div>
      //
      title: "Medical Assistance",
      desc: "Our healthcare team provides continuous support, ensuring your treatment and recovery process is smooth and stress-free.",
    },
    {
      img: pic6,
      title: "Dedicated Support",
      desc: "From start to finish, our team is available 24/7 to answer queries, provide guidance, and assist you with anything you need.",
    },
    {
      img: pic7, // put your image in public/icons/
      title: "Communications Support",
      desc: "To help you stay in touch with your loved ones back home, we will assist you in finding an activated telephone number from the local service provider. We can also help you acquire an internet dongle to continue accessing the internet and your email.",
    },
    {
      img: pic8,
      title: "Transportation",
      desc: "To make it simple for you to travel and navigate the city without difficulties, we will help you arrange a car for all of your local transfers inside the city. We’ll also recommend alternate, more convenient, and secure ways of transportation.",
    },
    {
      img: pic9,
      title: "Pickup At Airport",
      desc: "Following receipt of the patient’s travel schedule, our executive will arrange transport for you. They will meet you and any family members at the airport and assist you in reaching your final destination safely.",
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
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={60}
                    height={60}
                  />
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

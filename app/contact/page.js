"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../../assets/recent/common banner.webp";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <>
      {/* Banner */}
      {/* <section className="w-full bg-gray-50"> */}
        <div className="relative w-full h-[200px] md:h-[200px] flex items-center justify-center">
          <Image
            src={img}
            alt="Contact Banner"
            fill
            className="object-cover brightness-80"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Our Contact
            </h1>
          </div>
        </div>
      {/* </section> */}

      {/* Main Section */}
      <section className="w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 bg-white mb-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 border-b-2 border-blue-900 inline-block pb-1">
              SEND MESSAGE
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                maxLength={180}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>

              <p className="text-right text-sm text-gray-500">
                {formData.message.length}/180
              </p>

              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="mr-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 border-b-2 border-blue-900 inline-block pb-1">
              CONTACT DETAIL
            </h2>

            <div className="mt-6 space-y-6 text-gray-700">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  ADDRESS
                </h3>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-orange-500 mt-1" />
                  <p>
                    LOGIX TECHNOVA, B-138, Tower B,
                    <br />
                    Sector 132, Noida, Uttar Pradesh 201304
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  PHONE
                </h3>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-orange-500" />
                  <p>+91-9990205353</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  EMAIL
                </h3>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-orange-500" />
                  <p>info@ekamcare.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  SOCIAL MEDIA
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href="#"
                    className="bg-blue-900 text-white p-2 rounded-full hover:bg-orange-500 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="bg-black text-white p-2 rounded-full hover:bg-orange-500 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="bg-pink-600 text-white p-2 rounded-full hover:bg-orange-500 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
            Find Us On The Map
          </h2>

          {/* Responsive Map Container */}
          <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224348.9470810114!2d77.0688994782996!3d28.527582000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a28b1b5e9b%3A0x2b7e71e87a0a2d5c!2sEkam%20Health%20Services!5e0!3m2!1sen!2sin!4v1696878725487!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}


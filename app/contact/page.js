"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaPhone, FaCommentDots, FaPaperclip, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import img from "../../assets/recent/Our Contact 1.webp";

export default function ContactPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [reportFile, setReportFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("report", reportFile);
      formDataToSend.append("pageUrl", window.location.href);

      const res = await fetch("/api/send", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setReportFile(null);
        router.push("/contact/thank-you");
      } else {
        alert(data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error("FORM ERROR:", err);
      alert("Error sending message!");
    }

    setLoading(false);
  };

  return (
    <main className="bg-gray-50/50 min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-[260px] md:h-[320px] bg-[#053161] flex items-center justify-center overflow-hidden">
        <Image
          src={img}
          alt="Contact Banner"
          fill
          priority
          className="object-cover opacity-30 mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            We’re Here to Help You
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-2 max-w-xl mx-auto font-light">
            Have questions about your treatment in India? Reach out to our care coordinators today.
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Professional Form Card (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100">
            <div className="mb-8">
              <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase mb-2">
                Send a Message
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#053161]">
                Request a Free Consultation
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition text-sm"
                    required
                  />
                </div>

                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition text-sm"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition text-sm"
                  required
                />
              </div>

              {/* Message */}
              <div className="relative">
                <FaCommentDots className="absolute left-4 top-4 text-gray-400 text-sm" />
                <textarea
                  name="message"
                  placeholder="Tell us about your medical condition or requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  maxLength={180}
                  className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-3 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-900 transition text-sm resize-none"
                  required
                ></textarea>
                <div className="text-right text-xs text-gray-400 mt-1">
                  {formData.message.length}/180 characters
                </div>
              </div>

              {/* Upload Report */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Upload Medical Reports (JPG, PNG, PDF)
                </label>
                <div className="relative">
                  <FaPaperclip className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="file"
                    name="report"
                    required
                    onChange={(e) => setReportFile(e.target.files[0])}
                    className="w-full border border-gray-200 rounded-xl pl-11 pr-4 py-2.5 bg-gray-50/50 text-sm text-gray-600 focus:outline-none file:mr-4 file:py-1 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#053161] to-[#1B4F9C] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 text-base"
              >
                {loading ? "Sending Message..." : "Submit Inquiry"}
              </button>

            </form>
          </div>

          {/* Right: Contact Details & Info Card (5 Cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#053161] to-blue-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-cyan-200 text-xs font-semibold tracking-wider uppercase mb-2">
              Information
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 tracking-tight">
              Contact Details
            </h2>

            <div className="space-y-6 text-blue-100/90 text-sm">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-cyan-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">Our Office</h3>
                  <a
                    href="https://maps.app.goo.gl/LHb8o3igQWcmr4Vq7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition leading-relaxed block"
                  >
                    LOGIX TECHNOVA, Block B, Sector 132, Noida, Uttar Pradesh 201304
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-cyan-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">Call Us</h3>
                  <a href="tel:+919990205353" className="hover:text-white transition font-semibold">
                    +91-9990205353
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-cyan-300">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">Email Us</h3>
                  <a href="mailto:info@ekamcure.com" className="hover:text-white transition font-semibold">
                    info@ekamcure.com
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">Connect With Us</h3>
                <div className="flex items-center gap-3">
                  <Link href="https://www.facebook.com/EkamCure/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition hover:scale-110">
                    <FaFacebookF size={16} />
                  </Link>
                  <Link href="https://www.instagram.com/ekamcure/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition hover:scale-110">
                    <FaInstagram size={16} />
                  </Link>
                  <Link href="https://www.linkedin.com/company/ekam-cure/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition hover:scale-110">
                    <FaLinkedinIn size={16} />
                  </Link>
                  <Link href="https://x.com/ekamcure" target="_blank" rel="noopener noreferrer" aria-label="X" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition hover:scale-110">
                    <FaXTwitter size={16} />
                  </Link>
                  <Link href="https://www.youtube.com/@EkamCure/" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition hover:scale-110">
                    <FaYoutube size={16} />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold tracking-wider uppercase mb-2">
              Location
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#053161]">
              Find Us On The Map
            </h2>
          </div>
          <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59763676.667022385!2d99.206524!3d-23.900774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67d257006c1633a5%3A0x3de93d00462b99ae!2sEkam%20Health%20Services!5e0!3m2!1sen!2sin!4v1763441321849!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

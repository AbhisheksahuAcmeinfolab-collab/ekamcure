"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <main className="min-h-[85vh] flex items-center justify-center bg-[#F6F9FD] px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-3xl border border-[#E1E8F0] shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
        
        {/* Top Decorative Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#053161] via-[#1B4F9C] to-teal-400" />

        {/* Animated Success Checkmark Icon */}
        <div className="mx-auto w-20 h-20 bg-teal-50 border-2 border-teal-500 text-teal-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
          <svg
            className="w-10 h-10 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        {/* Heading & Subtitle */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#053161] mb-3">
          Thank You!
        </h1>
        <p className="text-base md:text-lg text-[#425466] leading-relaxed mb-8">
          Your enquiry has been received successfully. Our Health Advisor will get in touch with you shortly.
        </p>

        {/* Next Steps Card */}
        <div className="bg-[#F8FAFD] border border-[#DCE5F0] rounded-2xl p-5 mb-8 text-left">
          <h3 className="text-sm font-bold text-[#053161] uppercase tracking-wide mb-3">
            What Happens Next?
          </h3>
          <ul className="space-y-2.5 text-sm text-[#425466]">
            <li className="flex items-start gap-2.5">
              <span className="text-teal-600 font-bold">1.</span>
              <span>Our team will review your medical requirements.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-teal-600 font-bold">2.</span>
              <span>A senior medical advisor will call or WhatsApp you within 24 hours.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#053161] hover:bg-[#1B4F9C] text-white font-bold rounded-xl transition shadow-md"
          >
            Back to Home
          </button>
          
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 py-3.5 bg-white border border-[#DCE5F0] text-[#053161] hover:bg-[#F8FAFD] font-bold rounded-xl transition"
          >
            Contact Support
          </Link>
        </div>

        {/* Urgent Query Note */}
        <p className="text-xs text-gray-400 mt-8">
          Need immediate assistance? Reach out to us directly via phone or email.
        </p>

      </div>
    </main>
  );
}

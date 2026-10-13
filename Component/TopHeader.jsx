"use client";
import Image from "next/image";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/newimage/what.webp";

export default function TopHeader() {
  return (
    <>
      {/* 🖥️ Desktop Top Header */}
      <div className="t-header hidden md:flex bg-[#053161] text-white text-sm xl:px-24 lg:px-12 md:px-6 py-3 justify-between items-center shadow-sm">
        
        {/* Left Side: Ekam White Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Image
              src="/_next/static/media/Ekam-logo-300x133.bd70579a.webp" 
              alt="Ekam Logo"
              width={110}
              height={45}
              className="object-contain filter brightness-0 invert"
              priority
            />
          </a>
        </div>

        {/* Right Side: Three Action Buttons */}
        <div className="flex items-center gap-6">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919990205353"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full transition duration-300 cursor-pointer border border-white/15"
          >
            <Image
              src={img3}
              alt="WhatsApp"
              width={18}
              height={18}
              className="rounded-md"
            />
            <span className="font-semibold text-xs tracking-wide">Chat on WhatsApp</span>
          </a>

          {/* Get Free Quote Button */}
          <a
            href="/contact"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3.5 py-1.5 rounded-full transition duration-300 cursor-pointer border border-white/15"
          >
            <Image
              src={img2}
              alt="Quote"
              width={18}
              height={18}
              className="rounded-md"
            />
            <span className="font-semibold text-xs tracking-wide">Get a Free Quote</span>
          </a>

          {/* Become Partner Button (# link for now) */}
          <a
            href="#"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-1.5 rounded-full transition duration-300 cursor-pointer shadow-sm font-semibold text-xs tracking-wide"
          >
            <Image
              src={img1}
              alt="Partner"
              width={18}
              height={18}
              className="rounded-md"
            />
            <span>Become a Partner!</span>
          </a>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 right-0 left-0 z-[100] bg-white border-t border-gray-300 shadow-lg md:hidden transform-gpu will-change-transform"
      style={{ perspective: "1px" }}>
        <div className="flex justify-evenly items-center py-2 text-[#053161] text-center w-full">
          <a
            href="/contact"
            className="flex flex-col items-center justify-center flex-1 text-xs"
          >
            <img
              src="/images/img2.png"
              alt="Get Quote"
              className="w-[40px] h-[40px] mb-1 object-contain"
            />
            <span className="font-bold text-[12px]">Get Quote</span>
          </a>

          <a
            href="#"
            className="flex flex-col items-center justify-center flex-1 text-xs"
          >
            <img
              src="/images/img1.png"
              alt="Partner"
              className="w-[40px] h-[40px] mb-1 object-contain"
            />
            <span className="font-bold text-[12px]">Partner</span>
          </a>

          <a
            href="https://wa.me/919990205353"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center flex-1 text-xs"
          >
            <img
              src="/images/what.webp"
              alt="Chat"
              className="w-[35px] h-[35px] mb-1 object-contain"
            />
            <span className="font-bold text-[12px]">Chat</span>
          </a>
        </div>
      </div>
    </>
  );
}

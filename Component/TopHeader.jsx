"use client";
import Image from "next/image";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/newimage/what.webp";

export default function TopHeader() {
  return (
    <>
      {/* 🖥️ Desktop Top Header */}
      <div className="t-header hidden md:flex bg-[#053161] text-white text-sm xl:px-16 lg:px-10 md:px-6 py-2.5 justify-between items-center shadow-md">
        
        {/* Left Side: White Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <Image
              src="/_next/static/media/Ekam-logo-300x133.bd70579a.webp" 
              alt="Ekam Logo"
              width={125}
              height={50}
              className="object-contain filter brightness-0 invert"
              priority
            />
          </a>
        </div>

        {/* Right Side: Button Links as shown in Image 2 */}
        <div className="flex items-center gap-7">
          {/* WhatsApp / Phone Button */}
          <a
            href="https://wa.me/919990205353"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-90 transition duration-300 cursor-pointer"
          >
            <Image
              src={img3}
              alt="WhatsApp"
              width={20}
              height={20}
              className="rounded-md"
            />
            <span className="font-semibold text-xs tracking-wide text-white">
              (+91) 9990205353
            </span>
          </a>

          {/* Become Partner Button (# Link) */}
          <a
            href="#"
            className="flex items-center gap-2 hover:opacity-90 transition duration-300 cursor-pointer"
          >
            <Image
              src={img1}
              alt="Partner"
              width={22}
              height={22}
              className="rounded-md object-contain"
            />
            <span className="font-semibold text-xs tracking-wide text-white">
              Become Partner!
            </span>
          </a>

          {/* Get Quote Button */}
          <a
            href="/contact"
            className="flex items-center gap-2 hover:opacity-90 transition duration-300 cursor-pointer"
          >
            <Image
              src={img2}
              alt="Quote"
              width={22}
              height={22}
              className="rounded-md object-contain"
            />
            <span className="font-semibold text-xs tracking-wide text-white">
              Get Quote!
            </span>
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
              className="w-[36px] h-[36px] mb-1 object-contain"
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
              className="w-[36px] h-[36px] mb-1 object-contain"
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
              className="w-[32px] h-[32px] mb-1 object-contain"
            />
            <span className="font-bold text-[12px]">Chat</span>
          </a>
        </div>
      </div>
    </>
  );
}

"use client";
import Image from "next/image";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/newimage/what.webp";

export default function TopHeader() {
  return (
    <>
      {/* 🖥️ Desktop Header */}
      <div className="hidden md:flex bg-[#053161] text-white text-sm xl:px-25 lg:px-10 md:px-5 py-2 justify-end items-center gap-6">
        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <a
            href="https://wa.me/919990205353"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer"
          >
            <Image
              src={img3}
              alt="WhatsApp"
              width={20}
              height={20}
              className="rounded-md"
            />
            <span className="font-medium">(+91) 9990205353</span>
          </a>
        </div>

        <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer"
          >
            <Image
              src={img1}
              alt="Partner"
              width={25}
              height={15}
              className="rounded-md"
            />
            <span className="font-medium">Become Partner!</span>
          </a>
        </div>

        <div className=" flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer"
          >
            <Image
              src={img2}
              alt="Quote"
              width={25}
              height={25}
              className="rounded-md"
            />
            <span className="font-medium">Get Quote!</span>
          </a>
        </div>
      </div>

      {/* mobile view */}
      {/* ===== Mobile Bottom Fixed Footer (no blink) ===== */}
      <div className="mobile-footer fixed bottom-0 left-0 right-0 z-[9999] bg-white border-t border-gray-300 shadow-[0_-2px_10px_rgba(0,0,0,0.08)] md:hidden">
        <div className="flex justify-around items-center py-2 px-2 text-[#053161] text-center select-none">
          <a
            href="/contact"
            className="flex flex-col items-center justify-center flex-1 text-xs"
          >
            <img
              src="/images/what.webp"
              alt="Get Quote"
              className="w-[32px] h-[32px] mb-1"
            />
            <span className="font-semibold text-[13px]">Get Quote</span>
          </a>

          <a
            href="/contact"
            className="flex flex-col items-center justify-center flex-1 text-xs"
          >
            <img
              src="/images/img1.png"
              alt="Partner"
              className="w-[32px] h-[32px] mb-1"
            />
            <span className="font-semibold text-[13px]">Partner</span>
          </a>

          <a
            href="https://wa.me/919990205353"
            target="_blank"
            className="flex flex-col items-center justify-center flex-1 text-xs"
          >
            <img
              src="/images/img2.png"
              alt="Chat"
              className="w-[32px] h-[32px] mb-1"
            />
            <span className="font-semibold text-[13px]">Chat</span>
          </a>
        </div>
      </div>
    </>
  );
}


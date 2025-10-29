"use client";
import Image from "next/image";
import {
  FaUserMd,
  FaCalendarCheck,
  FaComments,
  FaPhoneAlt,
  FaBars,
} from "react-icons/fa";
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
            className="flex items-center gap-1 hover:scale-105 hover:text-green-600 transition duration-300 cursor-pointer"
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
            className="flex items-center gap-1 hover:scale-105 hover:text-green-600 transition duration-300 cursor-pointer"
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
            className="flex items-center gap-1 hover:scale-105 hover:text-green-600 transition duration-300 cursor-pointer"
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

      {/* 📱 Mobile Bottom Sticky Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md md:hidden z-50">
        <div className="flex justify-around items-center py-2 text-[#053161] text-center">
          <div className="flex flex-col items-center justify-center text-xs hover:text-blue-600 cursor-pointer text-center">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={img2}
                alt="Quote"
                width={50}
                height={20}
                className="rounded-md items-center"
              />
              <span className="font-bold text-md">Get Quote!</span>
            </a>
          </div>
          <div className="flex flex-col items-center text-xs hover:text-blue-600 cursor-pointer justify-center">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={img1}
                alt="Partner"
                width={40}
                height={20}
                className="rounded-md items-center"
              />
              <span className="font-bold text-md">Become Partner!</span>
            </a>
          </div>
          <div className="flex flex-col items-center text-xs hover:text-blue-600 cursor-pointer">
            <a
              href="https://wa.me/919990205353"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={img3}
                alt="WhatsApp"
                width={30}
                height={30}
                className="rounded-md items-center"
              />
              <span className="font-bold text-md">Chat</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

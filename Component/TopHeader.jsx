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
      <div className="fixed bottom-0 right-0 left-0 z-[100] bg-white border-t border-gray-300 shadow-lg md:hidden transform-gpu will-change-transform">
        <div className="flex justify-evenly items-center py-2 text-[#053161] text-center w-full">
          {/* Get Quote */}
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-[11px] flex-1"
          >
            <Image
              src={img2}
              alt="Quote"
              width={60}
              height={20}
              className="object-contain mb-1"
            />
            <span className="font-semibold text-lg">Get Quote</span>
          </a>

          {/* Become Partner */}
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-[10px] flex-1"
          >
            <Image
              src={img1}
              alt="Partner"
              width={60}
              height={30}
              className="object-contain mb-1"
            />
            <span className="font-semibold text-center text-lg">Partner</span>
          </a>
        
          {/* WhatsApp Chat */}
          <a
            href="https://wa.me/919990205353"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center text-[11px] flex-1"
          >
            <Image
              src={img3}
              alt="WhatsApp"
              width={50}
              height={50}
              className="object-contain mb-3"
            />
            <span className="font-semibold text-lg">Chat</span>
          </a>
        </div>
      </div>
    </>
  );
}







// "use client";
// import Image from "next/image";
// import img1 from "../assets/image/img1.png";
// import img2 from "../assets/image/img2.png";
// import img3 from "../assets/newimage/what.webp";

// export default function TopHeader() {
//   return (
//     <>
//       {/* 🖥️ Desktop Header */}
//       <div className="hidden md:flex bg-[#053161] text-white text-sm xl:px-25 lg:px-10 md:px-5 py-2 justify-end items-center gap-6">
//         <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
//           <a
//             href="https://wa.me/919990205353"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer"
//           >
//             <Image
//               src={img3}
//               alt="WhatsApp"
//               width={20}
//               height={20}
//               className="rounded-md"
//             />
//             <span className="font-medium">(+91) 9990205353</span>
//           </a>
//         </div>

//         <div className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
//           <a
//             href="/contact"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer"
//           >
//             <Image
//               src={img1}
//               alt="Partner"
//               width={25}
//               height={15}
//               className="rounded-md"
//             />
//             <span className="font-medium">Become Partner!</span>
//           </a>
//         </div>

//         <div className=" flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer">
//           <a
//             href="/contact"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-1 hover:scale-105 transition duration-300 cursor-pointer"
//           >
//             <Image
//               src={img2}
//               alt="Quote"
//               width={25}
//               height={25}
//               className="rounded-md"
//             />
//             <span className="font-medium">Get Quote!</span>
//           </a>
//         </div>
//       </div>

//       {/* mobile view */}
//       <div className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-gray-300 shadow-lg md:hidden">
//         <div className="flex justify-evenly items-center py-2 text-[#053161] text-center w-full">
//           {/* Get Quote */}
//           <a
//             href="/contact"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col items-center justify-center text-[11px] flex-1"
//           >
//             <Image
//               src={img2}
//               alt="Quote"
//               width={60}
//               height={20}
//               className="object-contain mb-1"
//             />
//             <span className="font-semibold text-lg">Get Quote</span>
//           </a>

//           {/* Become Partner */}
//           <a
//             href="/contact"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col items-center justify-center text-[10px] flex-1"
//           >
//             <Image
//               src={img1}
//               alt="Partner"
//               width={60}
//               height={30}
//               className="object-contain mb-1"
//             />
//             <span className="font-semibold text-center text-lg">Partner</span>
//           </a>
        
//           {/* WhatsApp Chat */}
//           <a
//             href="https://wa.me/919990205353"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col items-center justify-center text-[11px] flex-1"
//           >
//             <Image
//               src={img3}
//               alt="WhatsApp"
//               width={50}
//               height={50}
//               className="object-contain mb-3"
//             />
//             <span className="font-semibold text-lg">Chat</span>
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

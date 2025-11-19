"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Your image imports
import img from "../../assets/recent/Gallery 1.webp";
import pic23 from "../../assets/recent/Vidya Wati.webp";
import pic22 from "../../assets/recent/Shylotte Kativhu.webp";
import pic21 from "../../assets/recent/Deepak Dhookoo.webp";
import pic20 from "../../assets/recent/Bissun Prasad.webp";
import pic19 from "../../assets/recent/Christopher Muza3.webp";
import pic17 from "../../assets/recent/Adbul Aziim Ramzan.webp";
import pic16 from "../../assets/recent/Satish Chandra.webp";
import pic15 from "../../assets/recent/Patient(9).webp";
import pic14 from "../../assets/recent/Shylotte Kativhu2.webp";
import pic12 from "../../assets/recent/Kamurayi Mambayo.webp";
import pic11 from "../../assets/recent/Christopher Muza2.webp";
import pic10 from "../../assets/recent/Brij Lata.webp";
import pic9 from "../../assets/recent/Narendra Chand.webp";
import pic8 from "../../assets/recent/Patient(2).webp";
import pic7 from "../../assets/recent/SunilDuth Putty2.webp";
import pic6 from "../../assets/recent/patient1.webp";
import pic5 from "../../assets/recent/Christopher Muza1.webp";
import pic4 from "../../assets/recent/Keshwan Prasad.webp";
import pic3 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic2 from "../../assets/recent/Sunilduth Putty.webp";
import pic1 from "../../assets/recent/Yogita Singh.webp";

// Your image and video data
const images = [
  pic23,
  pic22,
  pic21,
  pic20,
  pic19,
  pic17,
  pic16,
  pic15,
  pic14,
  pic12,
  pic11,
  pic10,
  pic9,
  pic8,
  pic7,
  pic6,
  pic5,
  pic4,
  pic3,
  pic2,
  pic1,
];

const videos = [
  { src: "/videos/video1.mp4", title: "Knee Surgery", desc: "Fast recovery." },
  {
    src: "/videos/video2.mp4",
    title: "Heart Treatment",
    desc: "Successful case.",
  },
  { src: "/videos/video3.mp4", title: "Neuro Case", desc: "Recovered fully." },
  {
    src: "/videos/video4.mp4",
    title: "Liver Treatment",
    desc: "Quick recovery.",
  },
  {
    src: "/videos/video5.mp4",
    title: "Child Specialist",
    desc: "Happy result.",
  },
];

/**
 * 🎥 Mobile Reels View Component */
const VideoReels = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);

  // Intersection Observer for autoplay on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            // Find the index of the video that is currently intersecting
            const index = videoRefs.current.indexOf(video);
            if (index !== -1) {
              setCurrentVideoIndex(index);
              video.play().catch(() => {});
            }
          } else {
            video.pause();
            video.currentTime = 0; // Rewind video for next play
          }
        });
      },
      // Ensure the video is mostly in view before playing
      { threshold: 0.9 }
    );

    // Observe all videos
    videoRefs.current.forEach((v) => v && observer.observe(v));

    // Cleanup
    return () => {
      videoRefs.current.forEach((v) => v && observer.unobserve(v));
    };
  }, []);

  return (
    // Fixed height container with snapping scroll for Reels effect
    <div
      ref={containerRef}
      className="h-[calc(100vh-100px)] snap-y snap-mandatory overflow-y-scroll bg-black"
    >
      {videos.map((v, i) => (
        <div
          key={i}
          className="h-full w-full flex items-center justify-center snap-start relative"
        >
          {/* Video element */}
          <video
            src={v.src}
            // muted
            playsInline
            loop // Reels usually loop
            controls
            ref={(el) => (videoRefs.current[i] = el)}
            className="w-full h-full object-contain bg-black"
          />
          {/* Info overlay (optional) */}
          <div className="absolute bottom-10 left-5 text-white p-3 bg-black/50 rounded-lg">
            <h3 className="font-bold text-xl">{v.title}</h3>
            <p className="text-sm">{v.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// ----------------------------------------------------

export default function Gallery() {
  const [active, setActive] = useState("mission");
  const [openIndex, setOpenIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  // Check if the screen is mobile (you can adjust this breakpoint)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      // Assuming a mobile device is anything less than a medium screen (768px)
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for real-time responsiveness
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * 🔥 Handle Video Play/Click for Desktop
   * 1. Pauses all other videos.
   * 2. Plays the clicked video.
   * 3. Set the playing index state.
   */
  const handleVideoClick = (index) => {
    // Desktop: Stop other videos and play the clicked one
    if (!isMobile) {
      if (playingIndex !== index) {
        // Pause the previously playing video
        if (playingIndex !== null && videoRefs.current[playingIndex]) {
          videoRefs.current[playingIndex].pause();
        }

        // Play the new video (optional: can be done via controls)
        // videoRefs.current[index]?.play().catch(() => {});
        setPlayingIndex(index);
      }

      // Also open the Lightbox (Popup)
      setOpenIndex(index);
    }
  };

  // Lightbox Navigation
  const nextVideo = () => {
    setOpenIndex((prev) => (prev + 1) % videos.length);
  };
  const prevVideo = () => {
    setOpenIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Lightbox Close handler - Pause the video when lightbox closes
  const handleCloseLightbox = () => {
    // If the video is playing in the lightbox, pause it on close
    if (openIndex !== null && videoRefs.current[openIndex]) {
      videoRefs.current[openIndex].pause();
    }
    setOpenIndex(null);
  };

  // Effect to ensure the correct video reference is playing in Lightbox
  useEffect(() => {
    if (openIndex !== null && videoRefs.current[openIndex]) {
      // Stop the current video in the background grid if it's not the one in the lightbox
      videoRefs.current.forEach((video, i) => {
        if (video && i !== openIndex) {
          video.pause();
        }
      });
      // Start/Continue playing the video in the lightbox
      videoRefs.current[openIndex].play().catch(() => {});
    }
  }, [openIndex]);

  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Gallery"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Gallery</h1>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* ===== Toggle Switch ===== */}
          <div className="flex justify-center items-center space-x-3 mb-10">
            <span
              className={`font-medium ${
                active === "mission" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Our Photos
            </span>
            {/* Toggle Button */}
            <button
              onClick={() =>
                setActive(active === "mission" ? "vision" : "mission")
              }
              className={`relative w-20 h-10 flex items-center rounded-full transition-all duration-500 ${
                active === "mission" ? "bg-blue-600" : "bg-blue-600"
              }`}
            >
              <span
                className={`absolute w-9 h-9 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  active === "mission" ? "translate-x-1" : "translate-x-10"
                }`}
              ></span>
            </button>
            <span
              className={`font-medium ${
                active === "vision" ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Our Videos
            </span>
          </div>

          {/* ===== Content Blocks ===== */}
          <div className="space-y-10">
            {/* Mission Section (Photos) */}
            {active === "mission" && (
              <>
                <section className="bg-white py-10 px-4">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                      Photo Gallery
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6">
                      {images.map((src, i) => (
                        <motion.div
                          key={i}
                          className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Image
                            src={src}
                            alt={`Portfolio ${i + 1}`}
                            width={400}
                            height={350}
                            className="w-full h-70 object-cover transition-transform duration-500 ease-in-out [&::before]:box-border [&::after]:box-border hover:scale-110 hover:rotate-[5deg]"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}

            {/* Vision Section (Videos) */}
            {active === "vision" && (
              <>
                {/* 📱 Mobile Reels View (Visible only on mobile/small screens) */}
                <div className="md:hidden">
                  <VideoReels videos={videos} />
                </div>

                {/* 🖥️ Desktop Grid View (Visible only on desktop/large screens) */}
                <div className="hidden md:block px-4 py-10">
                  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {videos.map((v, i) => (
                      <div key={i} className="break-inside-avoid">
                        {/* Skeleton Loader */}
                        {!loaded && (
                          <div className="w-full h-60 bg-gray-200 animate-pulse rounded-xl mb-3"></div>
                        )}
                        <video
                          src={v.src}
                          muted
                          playsInline
                          controls={playingIndex === i} // Only show controls for the currently playing video (optional, you can keep it always)
                          ref={(el) => (videoRefs.current[i] = el)}
                          // Desktop: Stop other videos and play/open the clicked one
                          onClick={() => handleVideoClick(i)}
                          onLoadedData={() => setLoaded(true)}
                          className={`rounded-xl shadow-md cursor-pointer hover:opacity-80 transition ${
                            !loaded ? "hidden" : ""
                          }`}
                        />
                        {/* Title + Description */}
                        <h3 className="font-semibold text-lg mt-2">
                          {v.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{v.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* 🔥 LIGHTBOX POPUP WITH NEXT / PREV (Desktop only) */}
                  <AnimatePresence>
                    {openIndex !== null && (
                      <motion.div
                        className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {/* Close overlay click */}
                        <div
                          className="absolute inset-0"
                          onClick={handleCloseLightbox}
                        />

                        {/* Video - The video inside the lightbox should have the same ref */}
                        <motion.video
                          key={openIndex}
                          src={videos[openIndex].src}
                          controls
                          autoPlay // Play immediately when the lightbox opens
                          ref={(el) => (videoRefs.current[openIndex] = el)}
                          className="w-[90%] md:w-[60%] lg:w-[45%] rounded-xl shadow-xl relative z-[10000]"
                          initial={{ scale: 0.7 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0.7 }}
                        />

                        {/* Prev Button */}
                        <button
                          onClick={prevVideo}
                          className="absolute left-5 text-white text-4xl font-bold z-[10001] bg-black bg-opacity-40 px-4 py-2 rounded-full hover:bg-opacity-60 transition"
                        >
                          ❮
                        </button>
                        {/* Next Button */}
                        <button
                          onClick={nextVideo}
                          className="absolute right-5 text-white text-4xl font-bold z-[10001] bg-black bg-opacity-40 px-4 py-2 rounded-full hover:bg-opacity-60 transition"
                        >
                          ❯
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

// "use client";
// // import { useState, useEffect } from "react";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// // import { motion } from "framer-motion";
// import img from "../../assets/recent/Gallery 1.webp";
// import pic23 from "../../assets/recent/Vidya Wati.webp";
// import pic22 from "../../assets/recent/Shylotte Kativhu.webp";
// import pic21 from "../../assets/recent/Deepak Dhookoo.webp";
// import pic20 from "../../assets/recent/Bissun Prasad.webp";
// import pic19 from "../../assets/recent/Christopher Muza3.webp";
// // import pic18 from "../../assets/recent/Christopher Muza3.webp";
// import pic17 from "../../assets/recent/Adbul Aziim Ramzan.webp";
// import pic16 from "../../assets/recent/Satish Chandra.webp";
// import pic15 from "../../assets/recent/Patient(9).webp";
// import pic14 from "../../assets/recent/Shylotte Kativhu2.webp";
// // import pic13 from "../../assets/recent/Patient(7).webp";
// import pic12 from "../../assets/recent/Kamurayi Mambayo.webp";
// import pic11 from "../../assets/recent/Christopher Muza2.webp";
// import pic10 from "../../assets/recent/Brij Lata.webp";
// import pic9 from "../../assets/recent/Narendra Chand.webp";
// import pic8 from "../../assets/recent/Patient(2).webp";
// import pic7 from "../../assets/recent/SunilDuth Putty2.webp";
// import pic6 from "../../assets/recent/patient1.webp";
// import pic5 from "../../assets/recent/Christopher Muza1.webp";
// import pic4 from "../../assets/recent/Keshwan Prasad.webp";
// import pic3 from "../../assets/recent/Abdullah AI Mamun.webp";
// import pic2 from "../../assets/recent/Sunilduth Putty.webp";
// import pic1 from "../../assets/recent/Yogita Singh.webp";

// const images = [
//   pic23,
//   pic22,
//   pic21,
//   pic20,
//   pic19,
//   pic17,
//   pic16,
//   pic15,
//   pic14,
//   pic12,
//   pic11,
//   pic10,
//   pic9,
//   pic8,
//   pic7,
//   pic6,
//   pic5,
//   pic4,
//   pic3,
//   pic2,
//   pic1,
// ];

// const videos = [
//   { src: "/videos/video1.mp4", title: "Knee Surgery", desc: "Fast recovery." },
//   { src: "/videos/video2.mp4", title: "Heart Treatment", desc: "Successful case." },
//   { src: "/videos/video3.mp4", title: "Neuro Case", desc: "Recovered fully." },
//   { src: "/videos/video4.mp4", title: "Liver Treatment", desc: "Quick recovery." },
//   { src: "/videos/video5.mp4", title: "Child Specialist", desc: "Happy result." },
// ];

// export default function Gallery() {
//   const [active, setActive] = useState("mission");
//   const [current, setCurrent] = useState(0);
//    const [openIndex, setOpenIndex] = useState(null);
//   const [loaded, setLoaded] = useState(false);
//   const videoRefs = useRef([]);

//   // 🔥 Auto Play on Scroll
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const video = entry.target;
//           if (entry.isIntersecting) video.play().catch(() => {});
//           else video.pause();
//         });
//       },
//       { threshold: 0.6 }
//     );

//     videoRefs.current.forEach((v) => v && observer.observe(v));
//   }, []);

//   // Next video
//   const nextVideo = () => {
//     setOpenIndex((prev) => (prev + 1) % videos.length);
//   };

//   // Previous video
//   const prevVideo = () => {
//     setOpenIndex((prev) => (prev - 1 + videos.length) % videos.length);
//   };

//   return (
//     <>
//       {/* Banner Section */}
//       <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
//         <Image
//           src={img}
//           alt="Gallery"
//           fill
//           className="object-cover brightness-80"
//         />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">Gallery</h1>
//         </div>
//       </div>

//       {/* Gallery Section */}

//       <section className="py-16 bg-white">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           {/* ===== Toggle Switch ===== */}
//           <div className="flex justify-center items-center space-x-3 mb-10">
//             <span
//               className={`font-medium ${
//                 active === "mission" ? "text-gray-900" : "text-gray-500"
//               }`}
//             >
//               Our Photos
//             </span>

//             {/* Toggle Button */}
//             <button
//               onClick={() =>
//                 setActive(active === "mission" ? "vision" : "mission")
//               }
//               className={`relative w-20 h-10 flex items-center rounded-full transition-all duration-500 ${
//                 active === "mission" ? "bg-blue-600" : "bg-blue-600"
//               }`}
//             >
//               <span
//                 className={`absolute w-9 h-9 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
//                   active === "mission" ? "translate-x-1" : "translate-x-10"
//                 }`}
//               ></span>
//             </button>

//             <span
//               className={`font-medium ${
//                 active === "vision" ? "text-gray-900" : "text-gray-500"
//               }`}
//             >
//               Our Videos
//             </span>
//           </div>

//           {/* ===== Content Blocks ===== */}
//           <div className="space-y-10">
//             {/* Mission Section */}
//             {active === "mission" && (
//               <>
//                 {/* Block 1 */}
//                 <section className="bg-white py-10 px-4">
//                   <div className="max-w-7xl mx-auto">
//                     <h2 className="text-2xl font-semibold mb-6 text-center">
//                       Photo Gallery
//                     </h2>
//                     {/* ✅ Display images directly */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-6">
//                       {images.map((src, i) => (
//                         <motion.div
//                           key={i}
//                           className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//                           initial={{ opacity: 0, y: 30 }}
//                           whileInView={{ opacity: 1, y: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: i * 0.05 }}
//                         >
//                           <Image
//                             src={src}
//                             alt={`Portfolio ${i + 1}`}
//                             width={400}
//                             height={350}
//                             className="w-full h-70 object-cover
//                             transition-transform duration-500 ease-in-out
//                             [&::before]:box-border [&::after]:box-border
//                             hover:scale-110 hover:rotate-[5deg]"
//                           />
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </section>
//               </>
//             )}

//             {/* Vision Section */}
//             {active === "vision" && (
//               <>
//                 {/* Block 1 */}
//                 <div className="px-4 py-10">
//                   {/* Masonry Layout (Responsive) */}
//                   <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
//                     {videos.map((v, i) => (
//                       <div key={i} className="break-inside-avoid">
//                         {/* Skeleton Loader */}
//                         {!loaded && (
//                           <div className="w-full h-60 bg-gray-200 animate-pulse rounded-xl mb-3"></div>
//                         )}

//                         <video
//                           src={v.src}
//                           muted
//                           playsInline
//                           controls
//                           ref={(el) => (videoRefs.current[i] = el)}
//                           onClick={() => setOpenIndex(i)}
//                           onLoadedData={() => setLoaded(true)}
//                           className={`rounded-xl shadow-md cursor-pointer hover:opacity-80 transition ${
//                             !loaded ? "hidden" : ""
//                           }`}
//                         />

//                         {/* Title + Description */}
//                         <h3 className="font-semibold text-lg mt-2">
//                           {v.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm">{v.desc}</p>
//                       </div>
//                     ))}
//                   </div>

//                   {/* 🔥 LIGHTBOX POPUP WITH NEXT / PREV */}
//                   <AnimatePresence>
//                     {openIndex !== null && (
//                       <motion.div
//                         className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                       >
//                         {/* Close overlay click */}
//                         <div
//                           className="absolute inset-0"
//                           onClick={() => setOpenIndex(null)}
//                         />

//                         {/* Video */}
//                         <motion.video
//                           key={openIndex}
//                           src={videos[openIndex].src}
//                           controls
//                           autoPlay
//                           className="w-[90%] md:w-[60%] lg:w-[45%] rounded-xl shadow-xl relative z-[10000]"
//                           initial={{ scale: 0.7 }}
//                           animate={{ scale: 1 }}
//                           exit={{ scale: 0.7 }}
//                         />

//                         {/* Prev Button */}
//                         <button
//                           onClick={prevVideo}
//                           className="absolute left-5 text-white text-4xl font-bold z-[10001] bg-black bg-opacity-40 px-4 py-2 rounded-full"
//                         >
//                           ❮
//                         </button>

//                         {/* Next Button */}
//                         <button
//                           onClick={nextVideo}
//                           className="absolute right-5 text-white text-4xl font-bold z-[10001] bg-black bg-opacity-40 px-4 py-2 rounded-full"
//                         >
//                           ❯
//                         </button>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

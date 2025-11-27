"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Your image imports
import img from "../../assets/recent/Gallery 1.webp";
import pic23 from "../../assets/recent/Vidya Wati.png";
import pic22 from "../../assets/recent/Shylotte Kativhu.png";
import pic21 from "../../assets/recent/Deepak Dhookoo.png";
import pic20 from "../../assets/recent/Bissun Prasad.png";
import pic19 from "../../assets/recent/Christopher Muza3.png";
//18
import pic17 from "../../assets/recent/Adbul Aziim Ramzan.png";
import pic16 from "../../assets/recent/Satish Chandra.png";
import pic15 from "../../assets/recent/Kamurayi Mambayo2.png";
import pic14 from "../../assets/recent/Shylotte Kativhu2.png";
//13
import pic12 from "../../assets/recent/Kamurayi Mambayo.png";
import pic11 from "../../assets/recent/Christopher Muza2.png";
import pic10 from "../../assets/recent/Brij Lata.png";
import pic9 from "../../assets/recent/Narendra Chand.png";
// import pic8 from "../../assets/recent/Patient(2).png";
import pic7 from "../../assets/recent/SunilDuth Putty2.png";
import pic6 from "../../assets/recent/Junior Goredema.png";
// import pic5 from "../../assets/recent/Christopher Muza1.png";
import pic4 from "../../assets/recent/Keshwan Prasad.png";
import pic3 from "../../assets/recent/Abdullah AI Mamun.webp";
import pic2 from "../../assets/recent/SunilDuth Putty3.png";
import pic1 from "../../assets/recent/Yogita Singh.png";

// Your image and video data
const images = [
  { src: pic23, title: "Vidya Wati" },
  {
    src: pic22,
    title: "Shylotte Kativhu",
  },
  {
    src: pic21,
    title: "Deepak Dhookoo",
  },
  {
    src: pic20,
    title: "Bissun Prasad",
  },
  {
    src: pic19,
    title: "Christopher Muza",
  },
  {
    src: pic17,
    title: "Adbul Aziim Ramzan",
  },
  {
    src: pic16,
    title: "Satish Chandra",
  },
  { src: pic15, title: "Kamurayi Mambayo" },
  {
    src: pic14,
    title: "Shylotte Kativhu",
  },
  { src: pic12, title: "Kamurayi Mambayo" },
  {
    src: pic11,
    title: "Christopher Muza",
  },
  {
    src: pic10,
    title: "Brij Lata",
  },
  {
    src: pic9,
    title: "Narendra Chand",
  },
  // pic8,
  { src: pic7, title: "Sunilduth Putty" },
  { src: pic6, title: "Junior Goredema" },

  // pic5,
  { src: pic4, title: "Keshwan Prasad" },
  {
    src: pic3,
    title: "Abdullah AI Mamun",
  },
  {
    src: pic2,
    title: "SunilDuth Putty",
  },
  {
    src: pic1,
    title: "Yogita Singh",
  },
];

const videos = [
  //videos
  {
    src: "https://www.youtube.com/embed/mtwVy2uLgmw?si=pmOHOqAa_nktu7aA",
    type: "youtube",
    title: "Vidya Wati",
    desc: "Eye",
  },
  {
    src: "https://www.youtube.com/embed/myRz4-oj2V8?si=1nGFpfqP6FzpzJ-V",
    title: "Christopher Muza",
    desc: "Urology",
    type: "youtube",
  },
  {
    src: "https://www.youtube.com/embed/76eBbyVs1tk?si=aUDM-Pc7pyJ3MBoy",
    title: "Junior Goredema",
    desc: "Eye",
    type: "youtube",
  },
  {
    src: "https://www.youtube.com/embed/FuX4pQNBNEY?si=SSOMvbtjsaojYYNL",
    title: "Narendra Chand",
    desc: "Glucoma",
    type: "youtube",
  },
  //shorts
  {
    // src: "https://youtube.com/embed/NQRfdU546DQ?si=RM1obEKzmnLXp9i7",
    src: "https://youtube.com/embed/m4Ocj1jPiCc?si=MFFc0z2ULvdyyNC-",
    title: "Abdullah AI Mamun",
    desc: "Health Checkup",
    type: "shorts",
  },
];

/* 🎥 Mobile Reels View Component */
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
    <div className="columns-1 sm:columns-2 gap-6 space-y-6">
      {videos.map((item, i) => (
        <div key={i} className="w-full">
          <iframe
            width="100%"
            height="250"
            src={item.src}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="rounded-lg w-full aspect-video"
          />
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
          <div className="flex justify-center items-center space-x-3 mb-10 ">
            <span
              className={`font-medium text-2xl ${
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
              className={`relative w-15 h-7 flex items-center rounded-full transition-all duration-500 ${
                active === "mission" ? "bg-blue-600" : "bg-blue-600"
              }`}
            >
              <span
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  active === "mission" ? "translate-x-1" : "translate-x-8"
                }`}
              ></span>
            </button>
            <span
              className={`font-medium text-2xl ${
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {images.map((item, i) => (
                        <motion.div
                          key={i}
                          className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {/* IMAGE */}
                          <Image
                            src={item.src}
                            alt={`Portfolio ${i + 1}`}
                            width={400}
                            height={350}
                            className="w-full h-70 object-cover transition-transform duration-500 ease-in-out 
                            group-hover:scale-110 group-hover:rotate-[3deg]"
                          />

                          {/* SLIDE-UP OVERLAY */}
                          <div
                            className="
                              absolute bottom-0 left-0 w-full
                              bg-[rgba(0,0,0,0.6)] text-white
                              py-3 px-4 text-[15px] sm:text-[17px] font-medium
                              translate-y-full group-hover:translate-y-0
                              transition-all duration-500 ease-out
                            "
                          >
                            {item.title}
                          </div>
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
                  <h2 className="text-2xl font-semibold mb-6 text-center">
                    Video Gallery
                  </h2>
                  <div className="columns-1 sm:columns-2 gap-6 space-y-6">
                    {videos.map((item, i) => (
                      <div key={i}>
                        {item.type === "youtube" ? (
                          <iframe
                            width="100%"
                            height="250"
                            src={item.src}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                          />
                        ) : (
                          <iframe
                            src={item.src}
                            controls
                            className="w-full rounded-lg aspect-[9/16] max-w-[360px]"
                          ></iframe>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}


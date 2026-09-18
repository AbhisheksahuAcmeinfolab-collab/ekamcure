"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Banner Image Import
import img from "../../assets/recent/Gallery 1.webp";

const videos = [
  {
    src: "https://www.youtube.com/embed/22At_3bi8q8?si=yTyz8090Y7BJM77V",
    title: "Marie Line (Mauritius)",
    desc: "Successful Knee Replacement Recovery Journey in India",
    featured: true,
  },
  {
    src: "https://www.youtube.com/embed/FuX4pQNBNEY",
    title: "Mr. Kamurayi Mambayo Testimonial",
    desc: "Successful Hip Replacement Surgery Journey in India",
  },
  {
    src: "https://www.youtube.com/embed/jMaLr0QkPZk?si=wJLFhahTJxnaC0Re",
    title: "From Fiji to New Delhi: Mr. Suresh Chand's Successful Heart Valve Surgery Journey",
    desc: "Complete treatment and hospital recovery experience",
  },
  {
    src: "https://www.youtube.com/embed/BTFTSevzZZs?si=0XiDRaul4aqpbJMz",
    title: "Patient Success Story | Ms. Heeramatee Bhurtan, Mauritius",
    desc: "Complete treatment and hospital recovery experience",
  },
  {
    src: "https://www.youtube.com/embed/tpSRme1ZaZU?si=K8CrNklfEOfXBoXi",
    title: "Spinal Compression Surgery Success Story | Neurosurgery in India",
    desc: "Ekam Health Services | Complete treatment and hospital recovery experience",
  },
  {
    src: "https://www.youtube.com/embed/DPQEiGFSWok?si=r4-IIFy1xHYXRAcV",
    title: "A Journey of Hope and Healing | Patient Story from South Africa",
    desc: "Ekam Health Services | Complete treatment and hospital recovery experience",
  },
  {
    src: "https://www.youtube.com/embed/kFUijCYIHAU",
    title: "Mr. Keshwan Prasad",
    desc: "Medical treatment and care story",
  },
  {
    src: "https://www.youtube.com/embed/u--DGk3BKYk",
    title: "Mr. Aziim Ramzan Testimonial",
    desc: "International Patient shares his recovery journey",
  },
  {
    src: "https://www.youtube.com/embed/12FGoVnCtzs",
    title: "Dennis Goredema",
    desc: "Successful treatment journey with Ekam Care",
  },
  {
    src: "https://www.youtube.com/embed/2UnjdXoTSNo",
    title: "Florence - Healing Journey",
    desc: "High quality medical care experience in India",
  },
  {
    src: "https://www.youtube.com/embed/-byO8roa5vI",
    title: "Sunilduth Putty",
    desc: "Patient feedback and overall service rating",
  },
  {
    src: "https://www.youtube.com/embed/AjRSPGuUq50",
    title: "Kamal Prakash Nadi",
    desc: "Treatment guidance & hospital coordination story",
  },
  {
    src: "https://www.youtube.com/embed/22At_3bi8q8",
    title: "Marie Line",
    desc: "Personalized medical trip experience in India",
  },
  {
    src: "https://www.youtube.com/embed/n0NJUBqqGtk",
    title: "Miss Priscilla Danso",
    desc: "Patient testimonial on specialized treatment",
  },
  {
    src: "https://www.youtube.com/embed/DPQEiGFSWok",
    title: "Noor Mohammad",
    desc: "Healing experience & care assistance",
  },
];

export default function VideoGallery() {
  const featuredVideo = videos.find((v) => v.featured) || videos[0];
  const regularVideos = videos.filter((v) => !v.featured);

  return (
    <main className="bg-[#F6F9FD] min-h-screen">
      {/* ===== HERO BANNER SECTION ===== */}
      <div className="relative w-full h-[240px] md:h-[320px] bg-gradient-to-r from-[#053161] via-[#1B4F9C] to-[#053161] flex items-center justify-center overflow-hidden">
        <Image
          src={img}
          alt="Video Gallery Banner"
          fill
          priority
          className="object-cover opacity-25 mix-blend-overlay"
        />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase mb-3">
            Ekam Video Testimonials
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Patient Video Stories
          </h1>
          <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed font-light">
            Watch global patients share their genuine experiences, recovery stories, and treatment journeys in India.
          </p>
        </div>
      </div>

      {/* ===== MAIN VIDEOS SECTION ===== */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#053161]">
              Video Testimonials
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Watch international patients share their journey and treatment outcome in India.
            </p>
          </div>

          {/* HERO FEATURED VIDEO CARD */}
          <div className="mb-12 bg-white rounded-3xl border border-[#E1E8F0] shadow-md p-5 md:p-8 grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 aspect-video rounded-2xl overflow-hidden shadow-inner bg-black">
              <iframe
                src={featuredVideo.src}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-3">
                ★ Featured Story
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#053161] leading-tight mb-3">
                {featuredVideo.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                {featuredVideo.desc}
              </p>
              <div className="p-4 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0] flex items-center gap-3">
                <span className="text-2xl">🩺</span>
                <span className="text-xs md:text-sm font-semibold text-[#053161]">
                  Facilitated by Ekam Health Services India
                </span>
              </div>
            </div>
          </div>

          {/* REGULAR VIDEO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regularVideos.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-2xl overflow-hidden border border-[#E1E8F0] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={item.src}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#053161] mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                    <span className="text-gray-400">Patient Journey</span>
                    <span className="text-[#1B4F9C] flex items-center gap-1">
                      ▶ Play Testimonial
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

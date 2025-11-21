import Image from "next/image";
import img from "../../assets/recent/Plan your Travel 1.webp";
import hosImg from "../../assets/recent/hospitalmg.webp";

import hos1 from "../../assets/hospitals/max.webp";
import hos2 from "../../assets/hospitals/yatharth.webp";
import hos3 from "../../assets/hospitals/psri.webp";
import hos4 from "../../assets/hospitals/fortis.webp";
import hos5 from "../../assets/hospitals/action cancer.webp";
import hos6 from "../../assets/hospitals/manipal.webp";
import hos7 from "../../assets/hospitals/metro.webp";
import hos8 from "../../assets/hospitals/blk.webp";
import hos9 from "../../assets/hospitals/apollo.webp";
import hos10 from "../../assets/hospitals/kohinoor.webp";
import hos11 from "../../assets/hospitals/asian.webp";
import hos12 from "../../assets/hospitals/global.webp";
import hos13 from "../../assets/hospitals/bombay.webp";
import hos14 from "../../assets/hospitals/glaneagles.webp";
import hos15 from "../../assets/hospitals/sims.webp";
import hos16 from "../../assets/hospitals/parvathy.webp";
import hos17 from "../../assets/hospitals/arthmis.webp";
import hos18 from "../../assets/hospitals/vijaya.webp";
import hos19 from "../../assets/hospitals/miot.webp";
import hos20 from "../../assets/hospitals/vs.webp";
import hos21 from "../../assets/hospitals/sooriya.webp";
import hos22 from "../../assets/hospitals/appasamy.webp";
import hos23 from "../../assets/hospitals/seven hills.webp";
import hos24 from "../../assets/hospitals/godrej.webp";
import hos25 from "../../assets/hospitals/moolchand.webp";
import hos26 from "../../assets/hospitals/saroj.webp";
import hos27 from "../../assets/hospitals/primus.webp";
import hos28 from "../../assets/hospitals/mgm.webp";
import hos29 from "../../assets/hospitals/kauvery.webp";
import hos30 from "../../assets/hospitals/asian hospital.webp";

export default function tophospitals() {
  const hospitals = [
    {
      src: hos1,
      alt: "max",
    },
    {
      src: hos2,
      alt: "yatharth",
    },
    {
      src: hos3,
      alt: "psri",
    },
    {
      src: hos4,
      alt: "fortis",
    },
    {
      src: hos5,
      alt: "action cancer",
    },
    {
      src: hos6,
      alt: "manipal",
    },
    {
      src: hos7,
      alt: "metro",
    },
    {
      src: hos8,
      alt: "blk",
    },
    {
      src: hos9,
      alt: "apollo",
    },
    {
      src: hos10,
      alt: "kohinoor",
    },
    {
      src: hos11,
      alt: "asian",
    },
    {
      src: hos12,
      alt: "global",
    },
    {
      src: hos13,
      alt: "bombay",
    },
    {
      src: hos14,
      alt: "glaneagles",
    },
    {
      src: hos15,
      alt: "sims",
    },
    {
      src: hos16,
      alt: "parvathy",
    },
    {
      src: hos17,
      alt: "arthmis",
    },
    {
      src: hos18,
      alt: "vijaya",
    },
    {
      src: hos19,
      alt: "miot",
    },
    {
      src: hos20,
      alt: "vs",
    },
    {
      src: hos21,
      alt: "sooriya",
    },
    {
      src: hos22,
      alt: "appasamy",
    },
    {
      src: hos23,
      alt: "seven hills",
    },
    {
      src: hos24,
      alt: "godrej",
    },
    {
      src: hos25,
      alt: "moolchand",
    },
    {
      src: hos26,
      alt: "saroj",
    },
    {
      src: hos27,
      alt: "primus",
    },
    {
      src: hos28,
      alt: "mgm",
    },
    {
      src: hos29,
      alt: "kauvery",
    },
    {
      src: hos30,
      alt: "asian hospital",
    },
  ];

  return (
    <>
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Banner"
          fill
          className="object-cover brightness-80 w-full h-full"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our Hospitals
          </h1>
        </div>
      </div>

      <section className="w-full py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {/* First 4 logos */}
          {hospitals.slice(0, 28).map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={200}
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}

          {/* Last 2 logos centered */}
          <div className="hidden md:flex grid-col-1 sm:grid-col-1 md:col-span-4 flex justify-center gap-6">
            {hospitals.slice(28, 30).map((item, index) => (
              <div key={index} className="flex items-center w-75">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={200}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-[20px] py-[20px] md:px-[15px] md:py-[15px]">
        <section className="py-10 px-10 bg-white mt-5">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h2 className="text-2xl font-semibold text-[#082859] mb-4">
                Exploring India&apos;s Top Hospitals:
              </h2>
              <p className="text-gray-600 mb-6 text-justify">
                India boasts a plethora of world-class hospitals. Institutions
                like Apollo Hospitals, Fortis Healthcare, and AIIMS consistently
                rank among the best. These hospitals offer state-of-the-art
                facilities, renowned medical experts, and a wide range of
                specialized services, making India a global healthcare
                destination.
              </p>
              <h2 className="text-2xl font-semibold text-[#082859] mb-4">
                Excellence in Healthcare:
              </h2>
              <p className="text-gray-600 text-justify mb-2">
                The top hospitals of India are known for their excellence in
                medical care, cutting-edge technology, and a patient-centric
                approach. Whether you seek complex surgeries, diagnostics, or
                specialized treatments, these hospitals provide comprehensive
                solutions.
              </p>
              <p className="text-gray-600 text-justify">
                In conclusion, India&apos;s top hospitals, featured on Indian
                Health Adviser, set a benchmark for quality healthcare, making
                the nation a hub for medical tourism.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center md:justify-end">
              <Image
                src={hosImg}
                alt="Top Hospitals"
                width={350}
                height={350}
                className="rounded-xl shadow-lg object-cover"
                loading="eager"
                unoptimized
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

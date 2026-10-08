import Image from "next/image";
import img from "../../assets/recent/Plan your Travel 1.webp";
import hosImg from "../../assets/recent/hospitalmg.webp";

import hos1 from "../../assets/hospitals/max.webp";
import hos2 from "../../assets/hospitals/yatharth.webp";
import hos3 from "../../assets/hospitals/fortis.webp";
import hos4 from "../../assets/hospitals/psri.webp";
import hos5 from "../../assets/hospitals/apollo.webp";
import hos6 from "../../assets/hospitals/action cancer.webp";
import hos7 from "../../assets/hospitals/manipal.webp";
import hos8 from "../../assets/hospitals/metro.webp";
import hos9 from "../../assets/hospitals/blk.webp";
import hos10 from "../../assets/hospitals/Eye 7.png";
import hos11 from "../../assets/hospitals/Zeeva Fertility.png";
import hos12 from "../../assets/hospitals/The Sight Avenue.png";
import hos13 from "../../assets/hospitals/kohinoor.webp";
import hos14 from "../../assets/hospitals/asian.webp";
import hos15 from "../../assets/hospitals/global.webp";
import hos16 from "../../assets/hospitals/bombay.webp";
import hos17 from "../../assets/hospitals/glaneagles.webp";
import hos18 from "../../assets/hospitals/sims.webp";
import hos19 from "../../assets/hospitals/parvathy.webp";
import hos20 from "../../assets/hospitals/arthmis.webp";
import hos21 from "../../assets/hospitals/vijaya.webp";
import hos22 from "../../assets/hospitals/miot.webp";
import hos23 from "../../assets/hospitals/vs.webp";
import hos24 from "../../assets/hospitals/sooriya.webp";
import hos25 from "../../assets/hospitals/appasamy.webp";
import hos26 from "../../assets/hospitals/seven hills.webp";
import hos27 from "../../assets/hospitals/godrej.webp";
import hos28 from "../../assets/hospitals/moolchand.webp";
import hos29 from "../../assets/hospitals/saroj.webp";
import hos30 from "../../assets/hospitals/primus.webp";
import hos31 from "../../assets/hospitals/mgm.webp";
import hos32 from "../../assets/hospitals/kauvery.webp";
import hos33 from "../../assets/hospitals/asian hospital.webp";

export default function TopHospitals() {
  const hospitals = [
    { src: hos1, alt: "Max Healthcare" },
    { src: hos2, alt: "Yatharth Hospital" },
    { src: hos3, alt: "Fortis Healthcare" },
    { src: hos4, alt: "PSRI Hospital" },
    { src: hos5, alt: "Apollo Hospitals" },
    { src: hos6, alt: "Action Cancer Hospital" },
    { src: hos7, alt: "Manipal Hospital" },
    { src: hos8, alt: "Metro Hospital" },
    { src: hos9, alt: "BLK Super Speciality Hospital" },
    { src: hos10, alt: "Eye7 Eye Hospitals" },
    { src: hos11, alt: "Zeeva Fertility" },
    { src: hos12, alt: "The Sight Avenue" },
    { src: hos13, alt: "Kohinoor Hospital" },
    { src: hos14, alt: "Asian Institute of Medical Sciences" },
    { src: hos15, alt: "Gleneagles Global Health City" },
    { src: hos16, alt: "Bombay Hospital" },
    { src: hos17, alt: "Gleneagles Hospitals" },
    { src: hos18, alt: "SIMS Hospital" },
    { src: hos19, alt: "Parvathy Hospital" },
    { src: hos20, alt: "Artemis Hospitals" },
    { src: hos21, alt: "Vijaya Hospital" },
    { src: hos22, alt: "MIOT International" },
    { src: hos23, alt: "VS Hospital" },
    { src: hos24, alt: "Sooriya Hospital" },
    { src: hos25, alt: "Appasamy Hospitals" },
    { src: hos26, alt: "Seven Hills Hospital" },
    { src: hos27, alt: "Godrej Memorial Hospital" },
    { src: hos28, alt: "Moolchand Hospital" },
    { src: hos29, alt: "Saroj Hospital" },
    { src: hos30, alt: "Primus Super Speciality Hospital" },
    { src: hos31, alt: "MGM Healthcare" },
    { src: hos32, alt: "Kauvery Hospital" },
    { src: hos33, alt: "Asian Hospital" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Hero Banner */}
      <div className="relative w-full h-[220px] md:h-[280px] bg-slate-900 flex items-center justify-center overflow-hidden">
        <Image
          src={img}
          alt="Our Top Associated Hospitals Banner"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-blue-200 uppercase bg-blue-900/50 backdrop-blur-md rounded-full border border-blue-400/30">
            World-Class Medical Partners
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Partner Hospitals
          </h1>
          <p className="mt-2 text-sm md:text-base text-slate-200 font-light">
            Collaborating with India&apos;s leading healthcare institutions to provide world-class medical treatment.
          </p>
        </div>
      </div>

      {/* Hospitals Logo Grid Section */}
      <section className="w-full py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#082859]">
            Associated Healthcare Institutions
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {hospitals.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200/80 p-4 flex items-center justify-center h-[110px] sm:h-[120px] shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Content & Image Banner */}
      <section className="py-12 bg-white border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Healthcare Network
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#082859] mt-1">
                  Exploring India&apos;s Top Hospitals
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-justify text-sm sm:text-base">
                India boasts a wide network of world-class healthcare institutions. Renowned hospitals such as Apollo Hospitals, Fortis Healthcare, Max Healthcare, and Manipal Hospitals consistently rank among the finest globally. These facilities offer state-of-the-art diagnostic technology, highly experienced specialists, and international patient care services.
              </p>

              <h3 className="text-xl font-semibold text-[#082859] pt-2">
                Excellence in International Patient Care
              </h3>

              <p className="text-slate-600 leading-relaxed text-justify text-sm sm:text-base">
                Our associated partner hospitals adhere to stringent international quality standards (NABH & JCI accredited). From complex surgical interventions and advanced oncology care to fertility treatments and robotic surgeries, Ekam Health Services ensures seamless coordination between international patients and top medical experts.
              </p>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-md h-[300px] sm:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-slate-100">
                <Image
                  src={hosImg}
                  alt="Ekam Cure Hospital Network"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

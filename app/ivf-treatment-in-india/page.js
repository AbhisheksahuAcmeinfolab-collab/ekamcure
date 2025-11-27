"use client";
import DOMPurify from "isomorphic-dompurify";
// 🚨 IMPORTANT: You must import the Next.js Image component
import img from "../../assets/recent/Gallery 1.webp";
import Image from "next/image";
import Link from "next/link";

// 1. ✅ DEFINE DOCTOR IMAGE VARIABLES HERE (for use in the profile section)
import DoctorImage from "../../assets/doctors/Dr. Shobha Gupta.webp";

const doctorName = "Dr. Shobha Gupta";
const specialization = "IVF Specialist";
const experience =
  "Over 16+ years of experience in the field of reproductive medicine infertility specialist in Delhi";
const profileTextPart1 =
  "Dr Shobha Gupta is one of the **IVF specialist doctor in Delhi** who has got the reputation of contributing best of the services in the field of IVF specialist doctor in Delhi and infertility treatment in Delhi. No doubt she is among the most sought infertility doctor in Delhi and belongs to an eminent group of IVF specialist in India who are widely known for their clinical work and performance in the area of IVF treatment procedure as a stand and deliver IVF doctor in India and IVF doctor in Delhi that fulfills the dreams of many childless couples who are striving hard to conceive through infertility doctor in Delhi. Therefore she is an adorable IVF doctor in Delhi among the patients.";
const profileTextPart2 =
  "Dr Shobha Gupta is considered a prestigious IVF specialist doctor in Delhi and leading infertility doctor in Delhi. She has concluded her **MBBS from the well-known Lady Hardinge Medical College** and **PG from equally notable Maulana Azad Medical College (MAMC), New Delhi (India)**. Dr Shobha Gupta, an IVF Doctor in Delhi, is the Director of **Mother's Lap IVF centre**, her own self governing test tube baby centre in Delhi. IVF Specialist in India Providing Excellence in Treatment";
const profileTextPart3 =
  "She is a qualified and impeccable IVF specialist in Delhi who has gain massive popularity for rendering her service to this profession and as an IVF doctor in India for more than 20 years which is quite a remarkable achievement for any IVF specialist in India. Being an IVF doctor in Delhi she has dedicated herself to the impassionate pursuit in the sphere of infertility or childlessness and has received infertility training from the exalted **Justus Liebig University in Germany**. Her team comprises of the best IVF doctor in Delhi and IVF specialist in India.";

// 2. ✅ MOVE FEATURE BOX COMPONENT OUTSIDE
function FeatureBox({ title, description, iconSvg }) {
  const safeSvg = DOMPurify.sanitize(iconSvg);
  const safeTitle = DOMPurify.sanitize(title);
  const safeDescription = DOMPurify.sanitize(description);

  return (
    <div className="icon-box-component p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-gray-200 bg-white">
      <div className="elementor-icon-box-icon mb-4">
        <span
          className="elementor-icon inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full p-3"
          dangerouslySetInnerHTML={{ __html: safeSvg }}
        ></span>
      </div>
      <div className="elementor-icon-box-content mt-2">
        <h3 className="elementor-icon-box-title text-xl font-semibold text-gray-800 mb-2">
          <span>{safeTitle}</span>
        </h3>
        <p
          className="elementor-icon-box-description text-base text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: safeDescription }}
        />
      </div>
    </div>
  );
}

// 3. ✅ DEFINE FEATURES DATA OUTSIDE (where it was already, good!)
const featuresData = [
  {
    title: "Clinical Excellence",
    description: "Science and evidence-based fertility care...",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hospital"> <line x1="12" y1="18" x2="12" y2="10"></line> <line x1="8" y1="14" x2="16" y2="14"></line> <rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect> </svg>`,
  },
  // ... all other featureData items ...
  {
    title: "Personalized Treatments",
    description:
      "Treatments that are tailored to suit your specific needs and ensure the best outcomes.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check"> <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> <circle cx="8.5" cy="7" r="4"></circle> <polyline points="17 11 19 13 23 9"></polyline> </svg>`,
  },
  {
    title: "Comprehensive Care",
    description:
      "Patient-centric nutritional, psychological, and holistic support in every step of the fertility journey.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path> </svg>`,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs. Clear pricing on every test, scan, and procedure.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"> <path d="M20.59 13.41l-7.15 7.15a.5.5 0 0 1-.71 0L2.24 10.71a.5.5 0 0 1 0-.71L9.95 2.24a.5.5 0 0 1 .71 0l7.15 7.15a.5.5 0 0 1 0 .71l-7.15 7.15a.5.5 0 0 1-.71 0z"></path> <circle cx="7" cy="7" r="2"></circle> </svg>`,
  },
  {
    title: "Trusted Experts",
    description:
      "Ekam cure delivers personalized, affordable, and safe medical tourism services with complete support and clear communication.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"> <circle cx="12" cy="8" r="7"></circle> <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.89"></polyline> </svg>`,
  },
  {
    title: "High Success Rates",
    description:
      "Ekam cure is proud to deliver consistently high success rates through expert care, advanced techniques, and personalized solutions.",
    iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"> <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline> <polyline points="17 6 23 6 23 12"></polyline> </svg>`,
  },
];

// 4. ✅ MAIN EXPORT COMPONENT (now clean)
export default function ChooseEkam() {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="IVF"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">IVF</h1>
        </div>
      </div>

      <section className="bg-white py-16 px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left Side: YouTube Video Embed */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="video-frame w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(3,40,112,0.3)] transition-all duration-400 ease-in-out hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(3,40,112,0.4)] relative before:content-[''] before:absolute before:inset-0 before:border-[3px] before:border-[#032870] before:rounded-xl before:opacity-50 before:pointer-events-none">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/76eBbyVs1tk?si=aUDM-Pc7pyJ3MBoy"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="md:w-1/2 text-justify md:text-left mt-2">
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#032870] mb-4">
              About Us!
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 font-karla text-[17px]">
              Embarking on the journey to parenthood can be both exciting and
              overwhelming, but with our acclaimed IVF experts by your side, you
              can rest assured you&apos;re in the best hands. Our team of highly
              skilled specialists combines years of experience with the latest
              advancements in fertility care, tailoring every treatment to suit
              your unique needs. With a proven track record of high success
              rates, we take pride in turning hopes into reality, helping
              countless families achieve their dream of having a baby.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 font-karla text-[17px]">
              We believe that exceptional care should be accessible to everyone,
              which is why our treatments are designed to be both high-quality
              and affordable. Transparency and compassion are at the core of
              everything we do, ensuring you feel supported every step of the
              way. Understanding the emotional rollercoaster that often
              accompanies this process, we provide 24/7 care to address your
              questions and concerns whenever they arise. From the moment you
              walk through our doors, our mission is to guide you with empathy,
              expertise, and unwavering dedication toward the joy of parenthood.
            </p>
          </div>
        </div>
      </section>

      {/* --- FEATURES SECTION --- */}
      <section className="w-full py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 leading-snug">
            Why Choose Ekam For IVF Treatments?
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto mb-10" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureBox
              key={index}
              title={feature.title}
              description={feature.description}
              iconSvg={feature.iconSvg}
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-[#0B4AA1] text-white py-3">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 px-4">
          {/* Phone */}
          <div className="flex items-center gap-2 text-[15px] sm:text-[16px]">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.516.758a11.042 11.042 0 005.516 5.516l.758-1.516a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 3 16.837 3 9V5z"
              />
            </svg>
            <p>
              <span className="font-semibold">Call us :</span> +91-999 020 5353
            </p>
          </div>

          {/* Divider (Only on Desktop) */}
          <div className="hidden sm:block w-[1px] h-6 bg-white/40"></div>

          {/* Email */}
          <div className="flex items-center gap-2 text-[15px] sm:text-[16px]">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              fill="none"
              viewBox="0 0 122.879 88.855"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="5"
                d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,48.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z"
              />
            </svg>
            <p>
              <span className="font-semibold">Mail us :</span> info@ekamcure.com
            </p>
          </div>
        </div>
      </section>

      {/* --- SPECIALIST PROFILE SECTION --- */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block border-b-4 border-blue-700 pb-2">
            Our Specialist
          </h2>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="md:grid md:grid-cols-12">
            {/* Left Column (Image & Details) */}
            <div className="md:col-span-4 p-8 bg-blue-100 flex flex-col items-center text-center">
              {/* Image Container */}
              <div className="w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                {/* Ensure Next.js Image component is imported and used correctly */}
                <Image
                  src={DoctorImage}
                  alt={doctorName}
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
                 
              {/* Name and Specialization - NOW VARIABLES ARE IN SCOPE */}
              <h3 className="text-2xl font-bold text-blue-900 mb-1 font-karla text-[28px]">
                {doctorName}
              </h3>
              <p className="text-lg font-semibold text-orange-600 mb-4 font-karla text-[18px]">
                {specialization}
              </p>

              {/* Experience */}
              <p className="text-gray-700 text-sm mb-6 max-w-xs font-karla text-[18px]">
                {experience}
              </p>

              {/* Book Appointment Button */}
              <Link
                href="/contact"
                className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-800 flex items-center shadow-lg"
              >
                Book an Appointment
                <span className="ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Right Column (Description) */}
            <div className="md:col-span-8 p-8 md:p-10">
              <div className="space-y-6 text-gray-700 leading-relaxed text-base font-karla text-[17px]">
                {/* Profile Text Blocks - NOW VARIABLES ARE IN SCOPE */}
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: profileTextPart1.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </p>
                <p>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: profileTextPart2.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </p>
                <p>
                  <span   
                    dangerouslySetInnerHTML={{
                      __html: profileTextPart3.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


// "use client";
// import DOMPurify from "isomorphic-dompurify";
// // 🚨 IMPORTANT: You must import the Next.js Image component
// import img from "../../assets/recent/Gallery 1.webp";
// import Image from "next/image";
// import Link from "next/link";

// // 1. ✅ DEFINE DOCTOR IMAGE VARIABLES HERE (for use in the profile section)
// import DoctorImage from "../../assets/doctors/Dr. Shobha Gupta.webp";

// const doctorName = "Dr. Shobha Gupta";
// const specialization = "IVF Specialist";
// const experience =
//   "Over 16+ years of experience in the field of reproductive medicine infertility specialist in Delhi";
// const profileTextPart1 =
//   "Dr Shobha Gupta is one of the **IVF specialist doctor in Delhi** who has got the reputation of contributing best of the services in the field of IVF specialist doctor in Delhi and infertility treatment in Delhi. No doubt she is among the most sought infertility doctor in Delhi and belongs to an eminent group of IVF specialist in India who are widely known for their clinical work and performance in the area of IVF treatment procedure as a stand and deliver IVF doctor in India and IVF doctor in Delhi that fulfills the dreams of many childless couples who are striving hard to conceive through infertility doctor in Delhi. Therefore she is an adorable IVF doctor in Delhi among the patients.";
// const profileTextPart2 =
//   "Dr Shobha Gupta is considered a prestigious IVF specialist doctor in Delhi and leading infertility doctor in Delhi. She has concluded her **MBBS from the well-known Lady Hardinge Medical College** and **PG from equally notable Maulana Azad Medical College (MAMC), New Delhi (India)**. Dr Shobha Gupta, an IVF Doctor in Delhi, is the Director of **Mother's Lap IVF centre**, her own self governing test tube baby centre in Delhi. IVF Specialist in India Providing Excellence in Treatment";
// const profileTextPart3 =
//   "She is a qualified and impeccable IVF specialist in Delhi who has gain massive popularity for rendering her service to this profession and as an IVF doctor in India for more than 20 years which is quite a remarkable achievement for any IVF specialist in India. Being an IVF doctor in Delhi she has dedicated herself to the impassionate pursuit in the sphere of infertility or childlessness and has received infertility training from the exalted **Justus Liebig University in Germany**. Her team comprises of the best IVF doctor in Delhi and IVF specialist in India.";

// // 2. ✅ MOVE FEATURE BOX COMPONENT OUTSIDE
// function FeatureBox({ title, description, iconSvg }) {
//   const safeSvg = DOMPurify.sanitize(iconSvg);
//   const safeTitle = DOMPurify.sanitize(title);
//   const safeDescription = DOMPurify.sanitize(description);

//   return (
//     <div className="icon-box-component p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-gray-200 bg-white">
//       <div className="elementor-icon-box-icon mb-4">
//         <span
//           className="elementor-icon inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full p-3"
//           dangerouslySetInnerHTML={{ __html: safeSvg }}
//         ></span>
//       </div>
//       <div className="elementor-icon-box-content mt-2">
//         <h3 className="elementor-icon-box-title text-xl font-semibold text-gray-800 mb-2">
//           <span>{safeTitle}</span>
//         </h3>
//         <p
//           className="elementor-icon-box-description text-base text-gray-600 leading-relaxed"
//           dangerouslySetInnerHTML={{ __html: safeDescription }}
//         />
//       </div>
//     </div>
//   );
// }

// // 3. ✅ DEFINE FEATURES DATA OUTSIDE (where it was already, good!)
// const featuresData = [
//   {
//     title: "Clinical Excellence",
//     description: "Science and evidence-based fertility care...",
//     iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hospital"> <line x1="12" y1="18" x2="12" y2="10"></line> <line x1="8" y1="14" x2="16" y2="14"></line> <rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect> </svg>`,
//   },
//   // ... all other featureData items ...
//   {
//     title: "Personalized Treatments",
//     description:
//       "Treatments that are tailored to suit your specific needs and ensure the best outcomes.",
//     iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-check"> <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path> <circle cx="8.5" cy="7" r="4"></circle> <polyline points="17 11 19 13 23 9"></polyline> </svg>`,
//   },
//   {
//     title: "Comprehensive Care",
//     description:
//       "Patient-centric nutritional, psychological, and holistic support in every step of the fertility journey.",
//     iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"> <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path> </svg>`,
//   },
//   {
//     title: "Transparent Pricing",
//     description:
//       "No hidden costs. Clear pricing on every test, scan, and procedure.",
//     iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag"> <path d="M20.59 13.41l-7.15 7.15a.5.5 0 0 1-.71 0L2.24 10.71a.5.5 0 0 1 0-.71L9.95 2.24a.5.5 0 0 1 .71 0l7.15 7.15a.5.5 0 0 1 0 .71l-7.15 7.15a.5.5 0 0 1-.71 0z"></path> <circle cx="7" cy="7" r="2"></circle> </svg>`,
//   },
//   {
//     title: "Trusted Experts",
//     description:
//       "Ekam cure delivers personalized, affordable, and safe medical tourism services with complete support and clear communication.",
//     iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"> <circle cx="12" cy="8" r="7"></circle> <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.89"></polyline> </svg>`,
//   },
//   {
//     title: "High Success Rates",
//     description:
//       "Ekam cure is proud to deliver consistently high success rates through expert care, advanced techniques, and personalized solutions.",
//     iconSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#FF8C00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up"> <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline> <polyline points="17 6 23 6 23 12"></polyline> </svg>`,
//   },
// ];

// // 4. ✅ MAIN EXPORT COMPONENT (now clean)
// export default function ChooseEkam() {
//   return (
//     <>
//       {/* Banner Section */}
//       <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
//         <Image
//           src={img}
//           alt="IVF"
//           fill
//           className="object-cover brightness-80"
//         />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">IVF</h1>
//         </div>
//       </div>

//       <section className="bg-white py-16 px-6 md:px-16">
//         <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
//           {/* Left Side: YouTube Video Embed */}
//           <div className="relative w-full md:w-1/2 flex justify-center">
//             <div className="video-frame w-full max-w-[500px] aspect-video rounded-xl overflow-hidden shadow-[0_10px_25px_rgba(3,40,112,0.3)] transition-all duration-400 ease-in-out hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(3,40,112,0.4)] relative before:content-[''] before:absolute before:inset-0 before:border-[3px] before:border-[#032870] before:rounded-xl before:opacity-50 before:pointer-events-none">
//               <iframe
//                 width="100%"
//                 height="100%"
//                 src="https://www.youtube.com/embed/76eBbyVs1tk?si=aUDM-Pc7pyJ3MBoy"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                 referrerPolicy="strict-origin-when-cross-origin"
//                 allowFullScreen
//                 className="rounded-xl"
//               ></iframe>
//             </div>
//           </div>

//           {/* Right Side: Text Content */}
//           <div className="md:w-1/2 text-justify md:text-left mt-2">
//             <h3 className="text-3xl md:text-4xl font-extrabold text-[#032870] mb-4">
//               About Us!
//             </h3>
//             <p className="text-gray-600 leading-relaxed mb-4 font-karla text-[17px]">
//               Embarking on the journey to parenthood can be both exciting and
//               overwhelming, but with our acclaimed IVF experts by your side, you
//               can rest assured you&apos;re in the best hands. Our team of highly
//               skilled specialists combines years of experience with the latest
//               advancements in fertility care, tailoring every treatment to suit
//               your unique needs. With a proven track record of high success
//               rates, we take pride in turning hopes into reality, helping
//               countless families achieve their dream of having a baby.
//             </p>
//             <p className="text-gray-600 leading-relaxed mb-6 font-karla text-[17px]">
//               We believe that exceptional care should be accessible to everyone,
//               which is why our treatments are designed to be both high-quality
//               and affordable. Transparency and compassion are at the core of
//               everything we do, ensuring you feel supported every step of the
//               way. Understanding the emotional rollercoaster that often
//               accompanies this process, we provide 24/7 care to address your
//               questions and concerns whenever they arise. From the moment you
//               walk through our doors, our mission is to guide you with empathy,
//               expertise, and unwavering dedication toward the joy of parenthood.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- FEATURES SECTION --- */}
//       <section className="w-full py-10 px-4 md:px-10 lg:px-20">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 leading-snug">
//             Why Choose Ekam For IVF Treatments?
//           </h2>
//           <div className="w-20 h-1 bg-blue-900 mx-auto mb-10" />
//         </div>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {featuresData.map((feature, index) => (
//             <FeatureBox
//               key={index}
//               title={feature.title}
//               description={feature.description}
//               iconSvg={feature.iconSvg}
//             />
//           ))}
//         </div>
//       </section>

//       <section className="w-full bg-[#0B4AA1] text-white py-3">
//         <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 px-4">
//           {/* Phone */}
//           <div className="flex items-center gap-2 text-[15px] sm:text-[16px]">
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-1.516.758a11.042 11.042 0 005.516 5.516l.758-1.516a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 3 16.837 3 9V5z"
//               />
//             </svg>
//             <p>
//               <span className="font-semibold">Call us :</span> +91-999 020 5353
//             </p>
//           </div>

//           {/* Divider (Only on Desktop) */}
//           <div className="hidden sm:block w-[1px] h-6 bg-white/40"></div>

//           {/* Email */}
//           <div className="flex items-center gap-2 text-[15px] sm:text-[16px]">
//             {/* <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//               id="Layer_1"
//               fill="none"
//               viewBox="0 0 122.879 88.855"
//               stroke="currentColor"
//               xml:space="preserve"
//               x="0px" y="0px"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="6"
//                 d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,48.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z"
//               />
//             </svg> */}
//             <svg
//               className="w-5 h-5"
//               xmlns="http://www.w3.org/2000/svg"
//               id="Layer_1"
//               fill="none"
//               viewBox="0 0 122.879 88.855"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="5"
//                 d="M7.048,0h108.784c1.939,0,3.701,0.794,4.977,2.069c1.277,1.277,2.07,3.042,2.07,4.979v74.759 c0,1.461-0.451,2.822-1.221,3.951c-0.141,0.365-0.361,0.705-0.662,0.994c-0.201,0.189-0.422,0.344-0.656,0.461 c-1.225,1.021-2.799,1.643-4.508,1.643H7.048c-1.937,0-3.701-0.793-4.979-2.07C0.794,85.51,0,83.748,0,81.807V7.048 c0-1.941,0.792-3.704,2.068-4.979C3.344,0.792,5.107,0,7.048,0L7.048,0z M5.406,78.842l38.124-38.22L5.406,9.538V78.842 L5.406,78.842z M47.729,44.045L8.424,83.449h105.701L76.563,44.051L64.18,54.602l0,0c-0.971,0.83-2.425,0.877-3.453,0.043 L47.729,48.045L47.729,44.045z M80.674,40.549l36.799,38.598V9.198L80.674,40.549L80.674,40.549z M8.867,5.406l53.521,43.639 l51.223-43.639H8.867L8.867,5.406z"
//               />
//             </svg>
//             <p>
//               <span className="font-semibold">Mail us :</span> info@ekamcure.com
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* --- SPECIALIST PROFILE SECTION --- */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-100">
//         <div className="max-w-7xl mx-auto text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 inline-block border-b-4 border-blue-700 pb-2">
//             Our Specialist
//           </h2>
//         </div>

//         <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
//           <div className="md:grid md:grid-cols-12">
//             {/* Left Column (Image & Details) */}
//             <div className="md:col-span-4 p-8 bg-blue-100 flex flex-col items-center text-center">
//               {/* Image Container */}
//               <div className="w-56 h-56 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
//                 {/* Ensure Next.js Image component is imported and used correctly */}
//                 <Image
//                   src={DoctorImage}
//                   alt={doctorName}
//                   width={224}
//                   height={224}
//                   className="object-cover w-full h-full"
//                   priority
//                 />
//               </div>

//               {/* Name and Specialization - NOW VARIABLES ARE IN SCOPE */}
//               <h3 className="text-2xl font-bold text-blue-900 mb-1 font-karla text-[28px]">
//                 {doctorName}
//               </h3>
//               <p className="text-lg font-semibold text-orange-600 mb-4 font-karla text-[18px]">
//                 {specialization}
//               </p>

//               {/* Experience */}
//               <p className="text-gray-700 text-sm mb-6 max-w-xs font-karla text-[18px]">
//                 {experience}
//               </p>

//               {/* Book Appointment Button */}
//               <Link
//                 href="/contact"
//                 className="bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-blue-800 flex items-center shadow-lg"
//               >
//                 Book an Appointment
//                 <span className="ml-3">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                     <path
//                       fillRule="evenodd"
//                       d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </span>
//               </Link>
//             </div>

//             {/* Right Column (Description) */}
//             <div className="md:col-span-8 p-8 md:p-10">
//               <div className="space-y-6 text-gray-700 leading-relaxed text-base font-karla text-[17px]">
//                 {/* Profile Text Blocks - NOW VARIABLES ARE IN SCOPE */}
//                 <p>
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: profileTextPart1.replace(
//                         /\*\*(.*?)\*\*/g,
//                         "<strong>$1</strong>"
//                       ),
//                     }}
//                   />
//                 </p>
//                 <p>
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: profileTextPart2.replace(
//                         /\*\*(.*?)\*\*/g,
//                         "<strong>$1</strong>"
//                       ),
//                     }}
//                   />
//                 </p>
//                 <p>
//                   <span   
//                     dangerouslySetInnerHTML={{
//                       __html: profileTextPart3.replace(
//                         /\*\*(.*?)\*\*/g,
//                         "<strong>$1</strong>"
//                       ),
//                     }}
//                   />
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

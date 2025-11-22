import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import img from "../../assets/recent/common banner.webp";
import Link from "next/link";

const basicFeatures = [
  "Initial consultation and case review",
  "Assistance choosing the right hospital or doctor",
  "Appointment scheduling support",
  "Email and chat support (up to 3 interactions)",
  "General pre-travel guidance (visa, documentation, local info)",
];

const premiumFeatures = [
  "All features of the Basic Plan, plus:",
  "Dedicated case manager assigned to you",
  "24/7 phone, chat, and email support",
  "Support with flight booking and airport transfers",
  "Hotel and accommodation arrangements",
  "Medical document coordination and translation (if required)",
  "Post-treatment follow-up coordination",
  "Priority scheduling with top hospitals and specialists",
  "Physical ground support – a dedicated executive will accompany you during hospital visits",
  "Daily check-ins and well-being monitoring during your stay",
];

const PricingBanner = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Fee Banner"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our Fees
          </h1>
        </div>
      </div>

      <section className="w-full bg-gray-50 py-12 px-6 md:px-20 font-karla text-[17px]">
        {/* Pricing Philosophy */}
        <div className="text-center max-w-12xl mx-auto px-6 md:px-12 py-10 ">
          <p className=" text-gray-700 leading-relaxed font-karla text-[17px]">
            At <strong>Ekam Health Services,</strong> we offer transparent and
            affordable pricing for medical travelers who want reliable,
            high-quality support every step of the way. Whether you need basic
            coordination or full-service assistance, we have a plan designed for
            your comfort and convenience.
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-10 font-karla text-[17px]">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Choose Your Plan
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Transparent pricing for every medical traveler
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Plans Grid */}
        <section className="py-16 bg-white text-center">
          <div className="max-w-6xl mx-auto px-4">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-karla text-[17px] ">
              {/* BASIC PLAN */}
              <div className="bg-white rounded-xl shadow-md p-8 border-5 border-blue-900 md:h-155">
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  Basic Plan
                </h3>
                <p className="text-gray-600 mb-6">
                  Perfect for individuals who need essential medical travel
                  guidance.
                </p>

                <div className="flex items-baseline gap-1 mb-5 bg-[#0910572e] flex justify-center">
                  <span className="text-gray-900 text-5xl font-bold">$</span>
                  <span className="text-5xl font-semibold text-gray-900">
                    50 USD
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 text-justify">
                  {basicFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-bold text-gray-600 mb-6 font-karla text-[17px]">
                  Best For: Independent travelers with straightforward needs or
                  prior experience with medical travel.
                </p>

                <Link
                  href="https://www.ekamcure.com/contact-us/"
                  className="w-50 block mx-auto text-center bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
                >
                  Buy Now
                </Link>
              </div>

              {/* PREMIUM PLAN */}
              <div className="bg-white rounded-xl shadow-md p-8 border-5 border-blue-900 font-karla text-[17px]">
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  Comprehensive Plan
                </h3>
                <p className="text-gray-600 mb-6">
                  Our premium all-inclusive service for a stress-free medical
                  journey.
                </p>

                <div className="flex items-center mb-5 gap-1 bg-[#0910572e] justify-center">
                  <span className="text-gray-900 text-5xl font-bold">$</span>
                  <span className="text-5xl text-center font-semibold text-gray-900">
                    200 USD
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 text-justify">
                  {premiumFeatures.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="font-karla text-[17px] text-gray-600 mb-6">
                  Best For: First-time medical travelers, patients with complex
                  conditions, or anyone who wants total peace of mind with
                  expert assistance.
                </p>

                <Link
                  href="https://www.ekamcure.com/contact-us/"
                  className="w-50 block mx-auto text-center bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default PricingBanner;

// import { FaCheck } from "react-icons/fa";
// import Image from "next/image";
// import img from "../../assets/recent/common banner.webp";
// import Link from "next/link";

// const basicFeatures = [
//   "Initial consultation and case review",
//   "Assistance choosing the right hospital or doctor",
//   "Appointment scheduling support",
//   "Email and chat support (up to 3 interactions)",
//   "General pre-travel guidance (visa, documentation, local info)",
// ];

// const premiumFeatures = [
//   "All features of the Basic Plan, plus:",
//   "Dedicated case manager assigned to you",
//   "24/7 phone, chat, and email support",
//   "Support with flight booking and airport transfers",
//   "Hotel and accommodation arrangements",
//   "Medical document coordination and translation (if required)",
//   "Post-treatment follow-up coordination",
//   "Priority scheduling with top hospitals and specialists",
//   "Physical ground support – a dedicated executive will accompany you during hospital visits",
//   "Daily check-ins and well-being monitoring during your stay",
// ];

// const PricingBanner = () => {
//   return (
//     <>
//       {/* Banner Section */}
//       <div className="relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
//         <Image
//           src={img}
//           alt="Our Fee Banner"
//           fill
//           className="object-cover brightness-80"
//         />
//         <div className="relative z-10 text-center px-4">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">
//             Our Fees
//           </h1>
//         </div>
//       </div>

//       <section className="w-full bg-gray-50 py-12 px-6 md:px-20 font-karla text-[17px]">
//         {/* Pricing Philosophy */}
//         <div className="text-center max-w-12xl mx-auto px-6 md:px-12 py-10 ">
//           <p className=" text-gray-700 leading-relaxed font-karla text-[17px]">
//             At <strong>Ekam Health Services,</strong> we offer transparent and
//             affordable pricing for medical travelers who want reliable,
//             high-quality support every step of the way. Whether you need basic
//             coordination or full-service assistance, we have a plan designed for
//             your comfort and convenience.
//           </p>
//         </div>

//         {/* Section Title */}
//         <div className="text-center mb-10 font-karla text-[17px]">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//             Choose Your Plan
//           </h2>
//           <p className="mt-2 text-gray-600 text-lg">
//             Transparent pricing for every medical traveler
//           </p>
//           <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
//         </div>

//         {/* Plans Grid */}
//         <section className="py-16 bg-white text-center">
//           <div className="max-w-6xl mx-auto px-4">
//             {/* Grid Container */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-karla text-[17px]">
//               {/* BASIC PLAN */}
//               <div className="bg-white rounded-xl shadow-md p-8 border-4 border-blue-900">
//                 <h3 className="text-3xl font-semibold text-gray-900 mb-2">
//                   Basic Plan
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   Perfect for individuals who need essential medical travel guidance.
//                 </p>

//                 <div className="flex items-baseline gap-1 mb-5 bg-[#0910572e] flex justify-center">
//                   <span className="text-gray-900 text-5xl font-bold">$</span>
//                   <span className="text-5xl font-semibold text-gray-900">
//                     50 USD
//                   </span>
//                 </div>

//                 {/* Features */}
//                 <ul className="space-y-3 mb-6 text-justify">
//                   {basicFeatures.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
//                       <span className="text-gray-700 leading-relaxed">{item}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <p className="text-bold text-gray-600 mb-6 font-karla text-[17px]">
//                   Best For: Independent travelers with straightforward needs or
//                   prior experience with medical travel.
//                 </p>

//                 <Link
//                   href="https://www.ekamcure.com/contact-us/"
//                   className="w-50 block mx-auto text-center bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
//                 >
//                   Buy Now
//                 </Link>
//               </div>

//               {/* PREMIUM PLAN */}
//               <div className="bg-white rounded-xl shadow-md p-8 border-4 border-blue-900 font-karla text-[17px]">
//                 <h3 className="text-3xl font-semibold text-gray-900 mb-2">
//                   Comprehensive Plan
//                 </h3>
//                 <p className="text-gray-600 mb-6">
//                   Our premium all-inclusive service for a stress-free medical
//                   journey.
//                 </p>

//                 <div className="flex items-center mb-5 gap-1 bg-[#0910572e] flex justify-center">
//                   <span className="text-gray-900 text-5xl font-bold">$</span>
//                   <span className="text-5xl text-center font-semibold text-gray-900">
//                     200 USD
//                   </span>
//                 </div>

//                 {/* Features */}
//                 <ul className="space-y-3 mb-6 text-justify">
//                   {premiumFeatures.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3">
//                       <FaCheck className="text-green-600 mt-1 flex-shrink-0" />
//                       <span className="text-gray-700 leading-relaxed">
//                         {item}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 <p className="font-karla text-[17px] text-gray-600 mb-6">
//                   Best For: First-time medical travelers, patients with complex
//                   conditions, or anyone who wants total peace of mind with
//                   expert assistance.
//                 </p>

//                 <Link
//                   href="https://www.ekamcure.com/contact-us/"
//                   className="w-50 block mx-auto text-center bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition"
//                 >
//                   Buy Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </section>
//     </>
//   );
// };

// export default PricingBanner;

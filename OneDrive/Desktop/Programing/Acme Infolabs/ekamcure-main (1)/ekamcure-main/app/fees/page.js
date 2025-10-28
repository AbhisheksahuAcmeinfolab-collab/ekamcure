import Image from "next/image";
import img from "../../assets/newimage/team-bg-bg.webp";
const PricingBanner = () => {
  return (
    <>
      <section className="w-full bg-gray-50">
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

        {/* Pricing Philosophy */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-10 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At Ekam Health Services, we offer transparent and affordable pricing
            for medical travelers who want reliable, high-quality support every
            step of the way. Whether you need basic coordination or full-service
            assistance, we have a plan designed for your comfort and
            convenience.
          </p>
        </div>
      </section>

      <section className="w-full bg-gray-50 py-12 px-6 md:px-20">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            Choose Your Plan
          </h2>
          <p className="mt-2 text-gray-600 text-lg">
            Transparent pricing for every medical traveler
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Plan */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">
              Basic Plan
            </h3>
            <p className="text-xl font-bold text-gray-800 mb-4">$50 USD</p>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>✔️ Initial consultation with service team</li>
              <li>✔️ Doctor appointment scheduling support</li>
              <li>✔️ Local travel and hotel bookings (if needed)</li>
              <li>✔️ General guidance</li>
              <li>✔️ Basic post-treatment guidance</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 italic text-center">
              Best For: Independent travelers with straightforward needs or
              prior experience with medical travel.
            </p>
            <div className="flex justify-center items-center py-6">
              <button className="bg-blue-900 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>

          {/* Comprehensive Plan */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-green-800 mb-2">
              Comprehensive Plan
            </h3>
            <p className="text-xl font-bold text-gray-800 mb-4">$200 USD</p>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>✔️ All Basic Plan features</li>
              <li>✔️ Dedicated case manager support</li>
              <li>✔️ 24/7 live chat, phone & email support</li>
              <li>✔️ Flight booking & airport transfers</li>
              <li>✔️ Hotel & accommodation arrangements</li>
              <li>✔️ Medical document review & interpretation</li>
              <li>✔️ Post-treatment follow-up coordination</li>
              <li>✔️ Priority scheduling with top doctors/hospitals</li>
              <li>✔️ Personalized assistant during hospital visits</li>
              <li>✔️ Daily check-ins & well-being monitoring</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500 italic text-center">
              Best For: First-time medical travelers, patients with complex
              conditions, or anyone who wants total peace of mind with expert
              assistance.
            </p>
            <div className="flex justify-center items-center py-6">
              <button className="bg-blue-900 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingBanner;

// const PricingPlans = () => {
//   return (
//     <section className="w-full bg-gray-50 py-12 px-6 md:px-20">
//       {/* Section Title */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Choose Your Plan</h2>
//         <p className="mt-2 text-gray-600 text-lg">Transparent pricing for every medical traveler</p>
//         <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
//       </div>

//       {/* Plans Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Basic Plan */}
//         <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500 hover:shadow-xl transition duration-300">
//           <h3 className="text-2xl font-semibold text-blue-800 mb-2">Basic Plan</h3>
//           <p className="text-xl font-bold text-gray-800 mb-4">$50 USD</p>
//           <ul className="space-y-2 text-gray-700 text-base">
//             <li>✔️ Initial consultation with service team</li>
//             <li>✔️ Doctor appointment scheduling support</li>
//             <li>✔️ Local travel and hotel bookings (if needed)</li>
//             <li>✔️ General guidance</li>
//             <li>✔️ Basic post-treatment guidance</li>
//           </ul>
//           <p className="mt-4 text-sm text-gray-500 italic">
//             Ideal for independent travelers needing general support.
//           </p>
//         </div>

//         {/* Comprehensive Plan */}
//         <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition duration-300">
//           <h3 className="text-2xl font-semibold text-green-800 mb-2">Comprehensive Plan</h3>
//           <p className="text-xl font-bold text-gray-800 mb-4">$200 USD</p>
//           <ul className="space-y-2 text-gray-700 text-base">
//             <li>✔️ All Basic Plan features</li>
//             <li>✔️ Dedicated case manager support</li>
//             <li>✔️ 24/7 live chat, phone & email support</li>
//             <li>✔️ Flight booking & airport transfers</li>
//             <li>✔️ Hotel & accommodation arrangements</li>
//             <li>✔️ Medical document review & interpretation</li>
//             <li>✔️ Post-treatment follow-up coordination</li>
//             <li>✔️ Priority scheduling with top doctors/hospitals</li>
//             <li>✔️ Personalized assistant during hospital visits</li>
//             <li>✔️ Daily check-ins & well-being monitoring</li>
//           </ul>
//           <p className="mt-4 text-sm text-gray-500 italic">
//             Perfect for first-time travelers or complex cases needing full support.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingPlans;

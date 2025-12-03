// "use client";
// import { useState } from "react";

// export default function ContactForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("/api/contact", {
//       method: "Post",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, message }),
//     });

//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <div className="border-2 mb-2 mt-2 p-4">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="border p-2 w-full"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

//         <input
//           type="email"
//           placeholder="Your Email"
//           className="border p-2 w-full"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <textarea
//           placeholder="Your Message"
//           className="border p-2 w-full"
//           rows="5"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>

//         <button
//           type="onSubmit"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// }




// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import img from "../../assets/recent/Our Contact 1.webp";
// import {
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// export default function ContactPage() {

  
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Message sent!");
//   };

// //  const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const res = await fetch("/api/contact", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ name, email, message }),
// //     });

//     const data = await res.json();
//     console.log(data);
//   };

//   return (
//     <>
//       {/* Banner */}
//       <div className="relative w-full h-[200px] md:h-[200px] flex items-center justify-center">
//         <Image
//           src={img}
//           alt="Contact Banner"
//           fill
//           className="object-cover brightness-80"
//         />
//         <div className="relative z-10 text-center">
//           <h1 className="text-3xl md:text-5xl font-bold text-white">
//             Our Contact
//           </h1>
//         </div>
//       </div>
//       {/* </section> */}

//       {/* Main Section */}
//       <section className="w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 bg-white mb-1">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Left: Form */}
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 border-b-2 border-blue-900 inline-block pb-1">
//               Send Message
//             </h2>
//             <form
//               // action="https://formspree.io/f/xyzlgqyv"  //info@ekamcure.com
//               onSubmit={handleSubmit}
//               method="POST"
//               className="space-y-4 text-black dark:text-black"
//               // action="https://formspree.io/f/meovjbqj"
//               //abhisheksahuacmeinfolab@gmail.com
//               // onSubmit={handleSubmit} className="mt-6 space-y-4"
//             >
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
//                   required
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone No."
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
//                   required
//                 />
//               </div>

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
//                 required
//               />

//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 maxLength={180}
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
//                 required
//               ></textarea>

//               <p className="text-right text-sm text-gray-500">
//                 {formData.message.length}/180
//               </p>
//               <button
//                 type="submit"
//                 className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* Right: Contact Details */}
//           <div className="mr-4">
//             <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 border-b-2 border-blue-900 inline-block pb-1">
//               Contact Details
//             </h2>

//             <div className="mt-6 space-y-6 text-gray-700">
//               <div>
//                 <h3 className="text-sm font-semibold text-gray-800 mb-1">
//                   Address
//                 </h3>
//                 <div className="flex items-start gap-3">
//                   <FaMapMarkerAlt className="text-blue-900 mt-1" />
//                   <a
//                     href="https://www.google.com/maps?q=LOGIX+TECHNOVA,+B-138,+Tower+B,+Sector+132,+Noida"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     <p>
//                       LOGIX TECHNOVA, B-138, Tower B,
//                       <br />
//                       Sector 132, Noida, Uttar Pradesh 201304
//                     </p>
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-sm font-semibold text-gray-800 mb-1">
//                   Phone
//                 </h3>
//                 <div className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-blue-900" />
//                   <a className="hover:underline" href="tel:+919990205353">
//                     <p>+91-9990205353</p>
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-sm font-semibold text-gray-800 mb-1">
//                   Email
//                 </h3>
//                 <div className="flex items-center gap-3">
//                   <FaEnvelope className="text-blue-900" />
//                   <a
//                     className="hover:underline"
//                     href="mailto:info@ekamcure.com"
//                   >
//                     <p>info@ekamcure.com</p>
//                   </a>
//                 </div>
//               </div>

//               <div>
//                 <h3 className="text-sm font-semibold text-gray-800 mb-1">
//                   Social Media
//                 </h3>
//                 <div className="flex items-center gap-4 mt-2">
//                   <a
//                     href="https://www.facebook.com/EkamCure/"
//                     className="bg-blue-900 text-white p-2 rounded-full bg-blue-900 transition"
//                   >
//                     <FaFacebookF />
//                   </a>
//                   <a
//                     href="https://x.com/EkamCare"
//                     className="bg-black text-white p-2 rounded-full bg-black-500 transition"
//                   >
//                     <FaTwitter />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/ekamcure/"
//                     className="bg-pink-600 text-white p-2 rounded-full bg-pink-500 transition"
//                   >
//                     <FaInstagram />
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/company/ekam-cure/posts/?feedView=all"
//                     className="bg-blue-900 text-white p-2 rounded-full bg-blue-900 transition"
//                   >
//                     <FaLinkedinIn />
//                   </a>
//                   <a
//                     href="https://www.youtube.com/@EkamCure"
//                     className="bg-red-700 text-white p-2 rounded-full bg-red-500 transition"
//                   >
//                     <FaYoutube />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full px-4">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
//             Find Us On The Map
//           </h2>

//           {/* Responsive Map Container */}
//           <div className="relative w-full h-100 pb-[40.25%] overflow-hidden rounded-2xl">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59763676.667022385!2d99.
//            206524!3d-23.900774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67d257006c1633a5%3A0x3de93d00462b99ae!
//            2sEkam%20Health%20Services!5e0!3m2!1sen!2sin!4v1763441321849!5m2!1sen!2sin%22
//            "
//               className="absolute top-0 left-0 w-full h-100 border-0"
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }


// use formspree

"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../../assets/recent/Our Contact 1.webp";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <>
      {/* Banner */}
      <div className="relative w-full h-[200px] md:h-[200px] flex items-center justify-center">
        <Image
          src={img}
          alt="Contact Banner"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Our Contact
          </h1>
        </div>
      </div>
      {/* </section> */}

      {/* Main Section */}
      <section className="w-full min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-12 bg-white mb-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 border-b-2 border-blue-900 inline-block pb-1">
              Send Message
            </h2>
            <form
              // action="https://formspree.io/f/xyzlgqyv"  //info@ekamcure.com
              method="POST"
              className="space-y-4 text-black dark:text-black"
              action="https://formspree.io/f/meovjbqj"
              //abhisheksahuacmeinfolab@gmail.com
              // onSubmit={handleSubmit} className="mt-6 space-y-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              />

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                maxLength={180}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900"
                required
              ></textarea>

              <p className="text-right text-sm text-gray-500">
                {formData.message.length}/180
              </p>

              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact Details */}
          <div className="mr-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-2 border-b-2 border-blue-900 inline-block pb-1">
              Contact Details
            </h2>

            <div className="mt-6 space-y-6 text-gray-700">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Address
                </h3>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-blue-900 mt-1" />
                  <a
                    href="https://www.google.com/maps?q=LOGIX+TECHNOVA,+B-138,+Tower+B,+Sector+132,+Noida"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <p>
                      LOGIX TECHNOVA, B-138, Tower B,
                      <br />
                      Sector 132, Noida, Uttar Pradesh 201304
                    </p>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Phone
                </h3>
                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="text-blue-900" />
                  <a className="hover:underline" href="tel:+919990205353">
                    <p>+91-9990205353</p>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Email
                </h3>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-blue-900" />
                  <a
                    className="hover:underline"
                    href="mailto:info@ekamcure.com"
                  >
                    <p>info@ekamcure.com</p>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Social Media
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <a
                    href="https://www.facebook.com/EkamCure/"
                    className="bg-blue-900 text-white p-2 rounded-full bg-blue-900 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://x.com/EkamCare"
                    className="bg-black text-white p-2 rounded-full bg-black-500 transition"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.instagram.com/ekamcure/"
                    className="bg-pink-600 text-white p-2 rounded-full bg-pink-500 transition"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ekam-cure/posts/?feedView=all"
                    className="bg-blue-900 text-white p-2 rounded-full bg-blue-900 transition"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://www.youtube.com/@EkamCure"
                    className="bg-red-700 text-white p-2 rounded-full bg-red-500 transition"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
            Find Us On The Map
          </h2>

          {/* Responsive Map Container */}
          <div className="relative w-full h-100 pb-[40.25%] overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59763676.667022385!2d99.
           206524!3d-23.900774!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x67d257006c1633a5%3A0x3de93d00462b99ae!
           2sEkam%20Health%20Services!5e0!3m2!1sen!2sin!4v1763441321849!5m2!1sen!2sin%22
           "
              className="absolute top-0 left-0 w-full h-100 border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

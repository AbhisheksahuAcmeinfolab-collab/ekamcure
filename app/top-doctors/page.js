import Image from "next/image";
import img from "../../assets/recent/Plan your Travel 1.webp";

import d1 from "../../assets/doctors/Dr. Sandeep Madaan.webp";
import d2 from "../../assets/doctors/Dr. Suman Madaan.webp";
import d3 from "../../assets/doctors/Dr. Lok Prakash Choudhary.webp";
import d4 from "../../assets/doctors/Dr. Anjali Chaudhary.webp";
import d5 from "../../assets/doctors/Dr. Abhisar Katiyar.webp";
import d6 from "../../assets/doctors/Dr. Manoj Luthra.webp";
import d7 from "../../assets/doctors/Dr. K. M. Hassan.webp";
import d8 from "../../assets/doctors/Dr. Pramod Saini.webp";
import d9 from "../../assets/doctors/Dr. Manik Sharma.webp";
import d10 from "../../assets/doctors/Dr. Rohan Sinha.webp";
import d11 from "../../assets/doctors/Dr. G S Nagi.webp";
import d12 from "../../assets/doctors/Dr. B. S. Murthy.webp";
import d13 from "../../assets/doctors/Dr. Hitin Mathur.webp";
import d14 from "../../assets/doctors/Dr. Anil Raheja.webp";
import d15 from "../../assets/doctors/Dr. Vikas Agarwal.webp";
import d16 from "../../assets/doctors/Dr. Anshuman Agarwal.webp";
import d17 from "../../assets/doctors/Dr. Shobha Gupta.webp";
import d18 from "../../assets/doctors/Dr. Devendra K. Babbar.webp";
import d19 from "../../assets/doctors/Dr. Parveen Mendiratta.webp";
import d20 from "../../assets/doctors/Dr. Siddhartha S. Shrivastava.webp";
import d21 from "../../assets/doctors/Dr. Ashish Rai.webp";

export default function topdoctors() {
  const doctors = [
    {
      name: "Dr Sandeep Madaan",
      specialty: "Ayurveda",
      img: d1,
    },
    {
      name: "Dr Suman Madaan",
      specialty: "Ayurveda",
      img: d2,
    },
    {
      name: "Dr. Lok Prakash Choudhary",
      specialty: "Uro-Oncology, Robotics Urology & Kidney Transplant",
      img: d3,
    },
    {
      name: "Dr. Anjali Chaudhary",
      specialty: "Gynaecology",
      img: d4,
    },
    {
      name: "Dr. Abhisar Katiyar",
      specialty: "Orthopaedic Surgeons",
      img: d5,
    },
    {
      name: "Dr. Manoj Luthra",
      specialty: "Cardiac Surgeon",
      img: d6,
    },
    {
      name: "Dr. K. M. Hassan",
      specialty: "Neurology",
      img: d7,
    },
    {
      name: "Dr. Pramod Saini",
      specialty: "Spine Surgeon",
      img: d8,
    },
    {
      name: "Dr. Manik Sharma",
      specialty: "Gastroenterology, Hepatology & Endoscopy",
      img: d9,
    },
    {
      name: "Dr. Rohan Sinha",
      specialty: "Neurosurgeon and Spine Surgeon",
      img: d10,
    },
    {
      name: "Dr. G S Nagi",
      specialty: "Cardiac Surgeon",
      img: d11,
    },
    {
      name: "Dr. B. S. Murthy",
      specialty: "Orthopedics & Joint Replacement Surgeon",
      img: d12,
    },
    {
      name: "Dr. Hitin Mathur",
      specialty: "Orthopedic Surgeon",
      img: d13,
    },
    {
      name: "Dr. Anil Raheja",
      specialty: "Orthopedic Surgeon",
      img: d14,
    },
    {
      name: "Dr. Vikas Agarwal",
      specialty: "Urosurgeon",
      img: d15,
    },
    {
      name: "Dr. Anshuman Agarwal",
      specialty: "Urology Surgeon",
      img: d16,
    },
    {
      name: "Dr. Shobha Gupta",
      specialty: "IVF",
      img: d17,
    },
    {
      name: "Dr. Devendra K. Babbar",
      specialty: "Urologist and Renal Transplant",
      img: d18,
    },
    {
      name: "Dr. Parveen Mendiratta",
      specialty: "Surgical Oncology",
      img: d19,
    },
    {
      name: "Dr. Siddhartha S. Shrivastava",
      specialty: "ENT(Ear Nose Throat)",
      img: d20,
    },
    {
      name: "Dr. Ashish Rai",
      specialty: "Plastic, Aesthetic & Reconstructive Surgery",
      img: d21,
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
            Our Doctors
          </h1>
        </div>
      </div>

      <section className="w-full py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition p-4 text-center bg-blue-900"
            >
              <div className="w-full aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover"
                  loading="eager"
                  unoptimized
                />
              </div>

              <h3 className="mt-4 text-lg text-white font-semibold">
                {doc.name}
              </h3>

              <p className="text-white text-sm mt-1">{doc.specialty}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

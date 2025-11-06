"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../assets/recent/Plan your Travel 1.webp";
// You can replace these image paths with your own service icons/images
import pic1 from "../../assets/newimage/Neurology Treatment.webp";
import pic2 from "../../assets/newimage/Cosmetic Surgeries.webp";
import pic3 from "../../assets/newimage/Cancer Treatment.webp";
import pic4 from "../../assets/newimage/Dental Treatments.webp";
import pic5 from "../../assets/newimage/Heart & Cardiology Treatments.webp";
import pic6 from "../../assets/newimage/Kidney & Urology Treatments.webp";
import pic7 from "../../assets/newimage/Ophthalmology Surgery.webp";
import pic8 from "../../assets/newimage/Infertility Treatments.webp";
import pic9 from "../../assets/newimage/Transplant Programs.webp";
import pic10 from "../../assets/newimage/Ear, Nose, and Throat (ENT).webp";

export default function TreatmentServices() {
  // export default function CosmeticSurgeries() {
  const [activeLink, setActiveLink] = useState(null);

  const neurology = [
    [
      {
        name: "Epilepsy Treatment",
        link: "#",
      },
      {
        name: "Cerebrospinal Fluid Shunt",
        link: "#",
      },
      {
        name: "Skull Base Surgery",
        link: "#",
      },
      {
        name: "Brain Tumor",
        link: "#",
      },
      {
        name: "Parkinson's Treatment",
        link: "#",
      },
    ],

    [
      {
        name: "Cyber Knife Robotic Radiation",
        link: "#",
      },
      {
        name: "Stroke Rehabilitation",
        link: "#",
      },
      {
        name: "Multiple Sclerosis",
        link: "#",
      },
      { name: "Alzheimer", link: "#" },
      { name: "Chronic Cerebrospinal Venous Insufficiency", link: "#" },
    ],

    [
      {
        name: " Deep Brain Stimulation Surgery",
        link: "#",
      },
      {
        name: "Epidural Stimulation",
        link: "#",
      },
      {
        name: "Intrathecal Baclofen Pump",
        link: "#",
      },
      { name: "Focal Seizure", link: "#" },
      { name: "Sacral Nerve Stimulation", link: "#" },
    ],
  ];

  const cosmetic = [
    [
      {
        name: "Liposuction",
        link: "#",
      },
      {
        name: "Eyelid Surgery",
        link: "#",
      },
      {
        name: "Breast Implant",
        link: "#",
      },
      {
        name: "Nose Jobs",
        link: "#",
      },
      {
        name: "Brow Lift",
        link: "#",
      },
    ],
    [
      {
        name: "Face Lift",
        link: "#",
      },
      {
        name: "Hair Transplant",
        link: "#",
      },
      {
        name: "Rhinoplasty Surgery",
        link: "#",
      },
      { name: "Lip Augmentation", link: "#" },
      { name: "Chin Augmentation", link: "#" },
    ],
    [
      {
        name: "Tummy Tuck Surgery",
        link: "#",
      },
      {
        name: "Mommy Makeover",
        link: "#",
      },
      {
        name: "Abdominoplasty",
        link: "#",
      },
      { name: "Buttock Lift", link: "#" },
      { name: "Thigh Lift", link: "#" },
    ],
  ];

  const cancer = [
    [
      {
        name: "Rhabdomyosarcoma Treatment",
        link: "#",
      },
      {
        name: "Robotic Prostate Cancer Surgery",
        link: "#",
      },
      {
        name: "Pancreatic Cancer Treatment",
        link: "#",
      },
      {
        name: "Ovarian Cancer Treatment",
        link: "#",
      },
      {
        name: "Oral Cancer Treatment",
        link: "#",
      },
      {
        name: "Liver Cancer",
        link: "#",
      },
      {
        name: "Brain Cancer (Tumour) Treatment",
        link: "#",
      },
      {
        name: "Prostate Cancer",
        link: "#",
      },
      {
        name: "Cervical Cancer",
        link: "#",
      },
      {
        name: "Gastrointestinal Cancer",
        link: "#",
      },
    ],

    [
      {
        name: "Breast Cancer",
        link: "#",
      },
      {
        name: "Head And Neck Cancer",
        link: "#",
      },
      {
        name: "Lung Cancer",
        link: "#",
      },
      { name: "Blood Cancer", link: "#" },
      { name: "Thyroid Cancer", link: "#" },
      {
        name: "Bladder Cancer",
        link: "#",
      },
      {
        name: "Esophagus Cancer",
        link: "#",
      },
      { name: "Penile Cancer", link: "#" },
      { name: "Nasopharyngeal Cancer", link: "#" },
      {
        name: "Uterine Cancer",
        link: "#",
      },
    ],

    [
      {
        name: "Anal Cancer",
        link: "#",
      },
      {
        name: "Vulvar Cancer",
        link: "#",
      },
      { name: "Primary Bone Cancer", link: "#" },
      { name: "Vaginal Cancer", link: "#" },
      {
        name: "Bone Cancer",
        link: "#",
      },
      {
        name: "Skin Cancer",
        link: "#",
      },
      { name: "Colon Cancer", link: "#" },
      { name: "Gallbladder Cancer", link: "#" },
      { name: "Salivary Cancer Cancer", link: "#" },
      { name: "Bile Duct Cancer", link: "#" },
    ],
  ];

  const dental = [
    [
      {
        name: "Bridges",
        link: "#",
      },
      {
        name: "Crowns",
        link: "#",
      },
      {
        name: "Dentures",
        link: "#",
      },
      {
        name: "Veneers",
        link: "#",
      },
      {
        name: "Braces",
        link: "#",
      },
      {
        name: "Bone Graft Treatment",
        link: "#",
      },
      {
        name: "Denture Treatment",
        link: "#",
      },
    ],

    [
      {
        name: "Fillings",
        link: "#",
      },
      {
        name: "Root Canal Treatment",
        link: "#",
      },
      {
        name: "Gum Treatment",
        link: "#",
      },
      { name: "Tooth Extraction", link: "#" },
      { name: "Dental Bonding", link: "#" },
      { name: "Complete Denture", link: "#" },
      { name: "Fixed Braces", link: "#" },
    ],

    [
      {
        name: "Dental Implants",
        link: "#",
      },
      {
        name: "Teeth Whitening",
        link: "#",
      },
      {
        name: "Invisalign",
        link: "#",
      },
      { name: "Oral Surgery", link: "#" },
      { name: "Pediatric Dentistry", link: "#" },
      { name: "Wisdom Tooth Extraction", link: "#" },
    ],
  ];

  const heart = [
    [
      {
        name: "Heart Transplant",
        link: "#",
      },
      {
        name: "Heart Diseases",
        link: "#",
      },
      {
        name: "Endovascular Aneurysm Repair",
        link: "#",
      },
      {
        name: "Coronary Heart Diseases",
        link: "#",
      },
      {
        name: "Robotic Heart Bypass Surgery",
        link: "#",
      },
      {
        name: "Ventricular Septal Defect (VSD)",
        link: "#",
      },
      {
        name: "Atrial Septal Defect",
        link: "#",
      },
      {
        name: "Endoscopic Vein Harvesting",
        link: "#",
      },
      {
        name: "Bentall Procedure",
        link: "#",
      },
      {
        name: "Aortic Valve Repair",
        link: "#",
      },
    ],

    [
      {
        name: "Coronary Angioplasty",
        link: "#",
      },
      {
        name: "Heart Bypass Surgery",
        link: "#",
      },
      {
        name: "Heart Valve Surgery",
        link: "#",
      },
      { name: "Atherosclerosis Treatment", link: "#" },
      { name: "Aortic Stenosis Treatment", link: "#" },
      {
        name: "Balloon Mitral Valvuloplasty",
        link: "#",
      },
      {
        name: "Balloon Pulmonary Valvuloplasty",
        link: "#",
      },
      {
        name: "Cardiac Asthma Treatment",
        link: "#",
      },
      { name: "Coronary Artery Disease", link: "#" },
      { name: "Hypertension Treatment", link: "#" },
    ],

    [
      {
        name: "Paediatric Heart Surgery",
        link: "#",
      },
      {
        name: "Robotic Heart Surgery",
        link: "#",
      },
      {
        name: "Pacemaker Implantation",
        link: "#",
      },
      { name: "Mitral Valve Repair", link: "#" },
      { name: "Myocardial Bridge Treatment", link: "#" },
      {
        name: "Pericarditis Treatment",
        link: "#",
      },
      {
        name: "Transcatheter Aortic Valve Implantation",
        link: "#",
      },
      {
        name: "Aortopulmonary Window",
        link: "#",
      },
      { name: "Cardioversion Treatment", link: "#" },
      { name: "Double Valve Replacement", link: "#" },
    ],
  ];

  const kidney = [
    [
      {
        name: "Hydronephrosis Treatment",
        link: "#",
      },
      {
        name: "Kidney Cyst",
        link: "#",
      },
      {
        name: "Kidney Stones",
        link: "#",
      },
      {
        name: "Percutaneous Nephrolithotomy (PCNL)",
        link: "#",
      },
      {
        name: "TURP Surgery",
        link: "#",
      },
      {
        name: "Nephrectomy Surgery",
        link: "#",
      },
    ],

    [
      {
        name: "Renal Angiography",
        link: "#",
      },
      {
        name: "Kidney Dialysis",
        link: "#",
      },
      {
        name: "Kidney Tumor",
        link: "#",
      },
      { name: "Undescended Testicle Surgery", link: "#" },
      { name: "Bladder Stone Removal", link: "#" },
      { name: "Prostate Biopsy", link: "#" },
    ],

    //
    //
    // Pyeloplasty Surgery
    //
    //
    //
    [
      {
        name: "RIRS Surgery",
        link: "#",
      },
      {
        name: "Endopyelotomy Procedure",
        link: "#",
      },
      {
        name: "Pyeloplasty Surgery",
        link: "#",
      },
      { name: "Peyronie's Disease Treatment", link: "#" },
      { name: "Penile Prosthesis", link: "#" },
      { name: "Urethral Surgery", link: "#" },
    ],
  ];

  const ophthalmology = [
    [
      {
        name: "Refractive Surgery",
        link: "#",
      },
      {
        name: "Cornea Transplant Surgery",
        link: "#",
      },
      {
        name: "Laser Eye Surgery",
        link: "#",
      },
      {
        name: "LASIK Surgery",
        link: "#",
      },
      {
        name: "PRK Surgery",
        link: "#",
      },
    ],

    [
      {
        name: "Cataract Surgery",
        link: "#",
      },
      {
        name: "Glaucoma Surgery",
        link: "#",
      },
      {
        name: "Vitreoretinal Surgery",
        link: "#",
      },
      { name: "Retinal Detachment Surgery", link: "#" },
      { name: "Macular Hole Surgery", link: "#" },
    ],

    [
      {
        name: "Eye Muscle Repair",
        link: "#",
      },
      {
        name: "Artificial Iris Implantation",
        link: "#",
      },
      {
        name: "Astigmatism Correction",
        link: "#",
      },
      { name: "Blepharoplasty", link: "#" },
      { name: "Retinal detachment", link: "#" },
    ],
  ];

  const infertility = [
    [
      {
        name: "In Vitro Fertilization (IVF)",
        link: "#",
      },
      {
        name: "Embryo Transfer",
        link: "#",
      },
      {
        name: "Hysterosalpingography (HSG)",
        link: "#",
      },
      {
        name: "Sperm Collection",
        link: "#",
      },
      {
        name: "Fertility Testing",
        link: "#",
      },
    ],
    //
    //
    //
    //
    //
    [
      {
        name: "Ovulation Induction",
        link: "#",
      },
      {
        name: "Laparoscopic Ovarian Drilling (LOD)",
        link: "#",
      },
      {
        name: "Blastocyst Transfer",
        link: "#",
      },
      { name: "Intrauterine Insemination (IUI)", link: "#" },
      { name: "Fertility Preservation", link: "#" },
    ],
  
    [
      {
        name: "Retrograde Ejaculation Treatment",
        link: "#",
      },
      {
        name: "Assisted Hatching",
        link: "#",
      },
      {
        name: "Intracytoplasmic Sperm Injection (ICSI)",
        link: "#",
      },
      { name: "Gamete Intrafallopian Transfer (GIFT)", link: "#" },
      { name: "Surrogacy", link: "#" },
    ],
  ];

  const transplant = [ 
    [
      {
        name: "Bone Marrow Transplants (BMT)",
        link: "#",
      },
      {
        name: "Kidney Transplant",
        link: "#",
      },
      {
        name: "Liver Transplant",
        link: "#",
      },
      {
        name: "Heart Transplant",
        link: "#",
      },
      {
        name: "Lung Transplant",
        link: "#",
      },
    ],
// 
// 
// 
// 
// 
    [
      {
        name: "Pancreas Transplant",
        link: "#",
      },
      {
        name: "Intestine Transplant",
        link: "#",
      },
      {
        name: "Face Transplant Surgery",
        link: "#",
      },
      { name: "Bilateral Hand Transplant", link: "#" },
      { name: "Corneal Transplant", link: "#" },
    ],

    [
      {
        name: "Stem Cell Transplant",
        link: "#",
      },
      {
        name: "Multi-Organ Transplant",
        link: "#",
      },
      {
        name: "Living Donor Transplant",
        link: "#",
      },
      { name: "Cadaveric Transplant", link: "#" },
      { name: "Pediatric Transplant", link: "#" },
    ],
  ];

  const ent = [

    [
      {
        name: "Cochlear Implant Surgery",
        link: "#",
      },
      {
        name: "Endoscopic Sinus",
        link: "#",
      },
      {
        name: "Vertigo Surgery",
        link: "#",
      },
      {
        name: "Tonsillectomy",
        link: "#",
      },
      {
        name: "Adenoidectomy",
        link: "#",
      },
    ],

    [
      {
        name: "Laryngotracheoplasty",
        link: "#",
      },
      {
        name: "Thyroid Surgery Treatment",
        link: "#",
      },
      {
        name: "Turbinate Reduction Surgery",
        link: "#",
      },
      { name: "Septoplasty", link: "#" },
      { name: "Rhinoplasty", link: "#" },
    ],

    [
      {
        name: "Thyroidectomy Surgery",
        link: "#",
      },
      {
        name: "Bone Conduction Hearing Aid",
        link: "#",
      },
      {
        name: "Tympanoplasty Surgery",
        link: "#",
      },
      { name: "Myringotomy", link: "#" },
      { name: "Mastoidectomy", link: "#" },
    ],
  ];

  return (
    <>
      {/* Banner Section */}
      <div className="bg-white relative w-full h-[200px] md:h-[200px] bg-blue-100 flex items-center justify-center">
        <Image
          src={img}
          alt="Our Fee Banner"
          fill
          className="object-cover brightness-80"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Treatment
          </h1>
        </div>
      </div>

      {/*1st Neurology Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic1}
            alt="Neurology Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Neurology Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {neurology[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {neurology[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {neurology[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*2nd Cosmetic Surgeries */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic2}
            alt="Cosmetic Surgeries"
            width={50}
            height={50}
            className="w-[70px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Cosmetic Surgeries
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {cosmetic[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {cosmetic[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {cosmetic[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*3rd Cancer Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic3}
            alt="Cancer Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Cancer Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {cancer[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[550px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {cancer[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[550px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {cancer[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*4th Dental Treatments */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic4}
            alt="Dental Treatments"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Dental Treatments
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {dental[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {dental[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {dental[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*5th Heart & Cardiology Treatments */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic5}
            alt="Heart & Cardiology Treatments"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Heart & Cardiology Treatments
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {heart[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {heart[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {heart[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*6th Kidney & Urology Treatments */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic6}
            alt="Kidney & Urology Treatments"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Kidney & Urology Treatments
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {kidney[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {kidney[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {kidney[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*7th Ophthalmology Surgery */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic7}
            alt="Ophthalmology Surgery"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Ophthalmology Surgery
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {ophthalmology[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {ophthalmology[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {ophthalmology[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*8th Infertility Treatments */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic8}
            alt="Infertility Treatments"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Infertility Treatments
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {infertility[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {infertility[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {infertility[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*9th Transplant Programs */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic9}
            alt="Transplant Programs"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Transplant Programs
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {transplant[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {transplant[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {transplant[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/*10th Ear, Nose, and Throat (ENT) */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic10}
            alt="Ear, Nose, and Throat (ENT)"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Ear, Nose, and Throat (ENT)
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {ent[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {ent[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {ent[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 1st Neurology Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic1}
            alt="Neurology Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Neurology Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {neurology[0].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          {/* Column 2 (with same arrow on left side) */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {neurology[1].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Right Column Arrow (same as left) */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[300px] bg-[#ddd] mx-auto"></div>

          <ul className="list-none p-0 m-0 space-y-[12px]">
            {neurology[2].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(74,144,226,0.1)] hover:translate-x-[5px] hover:shadow-[0_2px_8px_rgba(74,144,226,0.15)]"
              >
                {/* Left Column Arrow */}
                <span
                  className="w-[25px] h-[25px] bg-center bg-no-repeat bg-contain flex-shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundImage: "url('/recent/right-arrow.webp')",
                  }}
                ></span>
                {item.link ? (
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveLink(item.name)}
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#777] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

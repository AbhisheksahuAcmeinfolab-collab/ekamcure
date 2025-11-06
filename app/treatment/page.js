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
import pic11 from "../../assets/newimage/Ayurveda Treatments.webp";
import pic12 from "../../assets/newimage/Pediatrics Treatment.webp";
import pic13 from "../../assets/newimage/Gender Reassignment Surgery.webp";
import pic14 from "../../assets/newimage/General Medicine.webp";
import pic15 from "../../assets/newimage/Gynecology Treatment.webp";
import pic16 from "../../assets/newimage/Preventive Health Check.webp";
import pic17 from "../../assets/newimage/Obesity Treatment.webp";
import pic18 from "../../assets/newimage/Orthopedic Treatment.webp";
import pic19 from "../../assets/newimage/Pulmonology Treatment.webp";
import pic20 from "../../assets/newimage/Rheumatology Treatment.webp";
import pic21 from "../../assets/newimage/Spine Surgery Treatment.webp";
import pic22 from "../../assets/newimage/Surgical Oncology.webp";
import pic23 from "../../assets/newimage/Orthopaedic Procedures.webp";
import pic24 from "../../assets/newimage/Stem Cell Treatments.webp";

export default function TreatmentServices() {
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

  const ayurveda = [
    [
      { name: "Udvartthanam", link: "#" },
      { name: "Navarakizhi", link: "#" },
      { name: "Elakizhi", link: "#" },
      { name: "Thalapothichil", link: "#" },
    ],
    [
      { name: "Pizhichil", link: "#" },
      { name: "Thalam", link: "#" },
      { name: "Lepanam", link: "#" },
    ],
  ];

  const pediatrics = [
    [
      { name: "Fontan Procedure", link: "#" },
      { name: "Coarctation Of The Aorta (CoA)", link: "#" },
      { name: "Tetralogy Of Fallot (TOF)", link: "#" },
      { name: "Heart Surgery", link: "#" },
      { name: "Nursemaid's Elbow Treatment", link: "#" },
      { name: "Incision And Drainage Abscess", link: "#" },
    ],
    [
      { name: "Arrhythmias", link: "#" },
      { name: "Fetal Cardiology", link: "#" },
      { name: "ASD Closure Surgery", link: "#" },
      { name: "Atrioventricular Canal Defect", link: "#" },
      { name: "Laceration Repair", link: "#" },
      { name: "Splinting Fracture", link: "#" },
    ],
    [
      { name: "Patent Ductus Arteriosus (PDA) Device Closure", link: "#" },
      { name: "Arterial Switch Operation", link: "#" },
      {
        name: "Total Anomalous Pulmonary Venous Connection (TAPVC)",
        link: "#",
      },
      { name: "Right Heart Catheterization", link: "#" },
      { name: "Transposition Of The Great Arteries", link: "#" },
      { name: "Balloon Atrial Septostomy", link: "#" },
    ],
  ];

  const gender = [
    [
      { name: "Sex Reassignment Surgery", link: "#" },
      { name: "Adams Apple Removal Surgery", link: "#" },
      { name: "Mastectomy Surgery", link: "#" },
      { name: "Vaginoplasty", link: "#" },
      { name: "Phalloplasty", link: "#" },
    ],
    [
      { name: "Facial Feminization Surgery", link: "#" },
      { name: "Labia Surgery", link: "#" },
      { name: "Reduction Clitoroplasty", link: "#" },
      { name: "Orchiectomy", link: "#" },
      { name: "Hysterectomy", link: "#" },
    ],
    [
      { name: "Salpingo-Oophorectomy", link: "#" },
      { name: "Metoidioplasty Surgery", link: "#" },
      { name: "Voice Feminization Surgery", link: "#" },
      { name: "Breast Augmentation", link: "#" },
      { name: "Body Contouring", link: "#" },
    ],
  ];

  const medicine = [
    [
      { name: "Asthma", link: "#" },
      { name: "Geriatric Medicine", link: "#" },
      { name: "Hypertension", link: "#" },
      { name: "Diabetes Management", link: "#" },
      { name: "Respiratory Infections", link: "#" },
    ],
    [
      { name: "Internal Medicine", link: "#" },
      { name: "Hyperbaric Medicine", link: "#" },
      { name: "Preventive Medicine", link: "#" },
      { name: "Chronic Disease Management", link: "#" },
      { name: "Health Screening", link: "#" },
    ],
    [
      { name: "Extracorporeal Shockwave Therapy", link: "#" },
      { name: "Anal Fissure Treatment", link: "#" },
      { name: "Vaccination Services", link: "#" },
      { name: "Travel Medicine", link: "#" },
      { name: "Pain Management", link: "#" },
    ],
  ];

  const gynecology = [
    [
      { name: "Gynecology & Obstetrics", link: "#" },
      { name: "Bartholin's Cyst Treatment", link: "#" },
      { name: "Colposcopy", link: "#" },
      { name: "Breast Biopsy", link: "#" },
      { name: "Cervical Cautery", link: "#" },
      { name: "Endometriosis Treatment", link: "#" },
      { name: "Dilation And Curettage", link: "#" },
      { name: "Myomectomy", link: "#" },
      { name: "Female Sterilization", link: "#" },
      { name: "Ovarian Cyst Removal", link: "#" },
      { name: "Oophorectomy", link: "#" },
      { name: "Contraceptive Implant", link: "#" },
      { name: "Cesarean Section", link: "#" },
      { name: "Tubal Ligation Reversal", link: "#" },
      { name: "Vaginoplasty", link: "#" },
      { name: "Ectopic Pregnancy Surgery", link: "#" },
      { name: "Pelvic Floor Repair", link: "#" },
      { name: "Hysterectomy", link: "#" },
    ],

    [
      { name: "Ovarian Tumor Removal", link: "#" },
      { name: "Cervical Biopsy", link: "#" },
      { name: "Uterine Prolapse Surgery", link: "#" },
      { name: "Cystocele Repair", link: "#" },
      { name: "Intrauterine Device (IUD) Placement", link: "#" },
      { name: "Vaginal Vault Prolapse Surgery", link: "#" },
      { name: "Endometrial Biopsy", link: "#" },
      { name: "Hormone Replacement Therapy (HRT)", link: "#" },
      { name: "Hysteroscopy", link: "#" },
      { name: "Vaginal Childbirth", link: "#" },
      { name: "Pelvic Adhesiolysis", link: "#" },
      { name: "Cervical Polyp Removal", link: "#" },
      { name: "Vulval Biopsy", link: "#" },
      { name: "Antenatal Care (ANC)", link: "#" },
      { name: "Pessary Placement", link: "#" },
      { name: "Fetal Echocardiography", link: "#" },
      { name: "Intrauterine Device (IUD) Removal", link: "#" },
      { name: "Vaginectomy", link: "#" },
      { name: "Hysterosonography", link: "#" },
      { name: "Hymenotomy", link: "#" },
    ],

    [
      { name: "Uterosacral Nerve Ablation", link: "#" },
      { name: "Vulval Skin Treatment", link: "#" },
      { name: "Cervical Cerclage", link: "#" },
      { name: "Amniocentesis", link: "#" },
      { name: "Pelvic Floor Electrical Stimulator", link: "#" },
      { name: "Presacral Neurectomy", link: "#" },
      { name: "Vaginismus Treatment", link: "#" },
      { name: "Urodynamic Evaluation", link: "#" },
      { name: "Vulvectomy", link: "#" },
      { name: "Episiotomy Repair", link: "#" },
      { name: "Cardiotocography (CTG)", link: "#" },
      { name: "Ovarian Transposition Surgery", link: "#" },
      { name: "Molar Pregnancy Treatment", link: "#" },
      { name: "Fetal Surgery", link: "#" },
      { name: "Microdochectomy", link: "#" },
      { name: "Uterine Artery Embolization (UAE)", link: "#" },
      { name: "Robotic Hysterectomy", link: "#" },
      { name: "Vaginal Hysterectomy", link: "#" },
      { name: "Fibroid Removal", link: "#" },
      { name: "Uterus Transplant", link: "#" },
    ],
  ];

  const preventive = [
    [
      {
        name: "Master Health Check-up",
        link: "#",
      },
      {
        name: "Executive Health Check",
        link: "#",
      },
      {
        name: "Heart Check-up",
        link: "#",
      },
      {
        name: "Advanced Cardiac Package (Male / Female)",
        link: "#",
      },
      {
        name: "Wellness Check-up",
        link: "#",
      },
      {
        name: "Senior Citizen Health Package",
        link: "#",
      },
    ],

    [
      {
        name: "Diabetic Health Check – I",
        link: "#",
      },
      {
        name: "Diabetic Health Check – II",
        link: "#",
      },
      {
        name: "Child Health Check-up (MCHC)",
        link: "#",
      },
      { name: "Cancer Screening – Level 1 – Female", link: "#" },
      { name: "Thyroid Profile Package", link: "#" },
      { name: "Liver Function Package", link: "#" },
    ],

    [
      {
        name: "Cancer Screening – Level 1 – Male",
        link: "#",
      },
      {
        name: "Cancer Screening – Level 2 – Female",
        link: "#",
      },
      {
        name: "Cancer Screening – Level 2 – Male",
        link: "#",
      },
      { name: "Kidney Function Package", link: "#" },
      { name: "Women's Health Package", link: "#" },
      { name: "Men's Health Package", link: "#" },
    ],
  ];

  const obesity = [

    [
      { name: "Bariatric Surgery", link: "#" },
      { name: "Gastric Bypass Surgery", link: "#" },
      { name: "Gastric Sleeve", link: "#" },
      { name: "Medical Weight Management", link: "#" },
      { name: "Nutrition Counseling", link: "#" },
    ],

    [
      { name: "Gastric Balloon", link: "#" },
      { name: "Weight Loss Treatment", link: "#" },
      { name: "Gastric Plication", link: "#" },
      { name: "Endoscopic Sleeve Gastroplasty", link: "#" },
      { name: "Behavioral Therapy", link: "#" },
    ],

    [
      { name: "Gastric Band Surgery", link: "#" },
      { name: "Biliopancreatic Diversion With Duodenal Switch", link: "#" },
      { name: "Primary Obesity Surgery Endolumenal", link: "#" },
      { name: "Metabolic Surgery", link: "#" },
      { name: "Exercise Physiology", link: "#" },
    ],
  ];


  const orthopedic = [
    [
      { name: "Anterior Cruciate Ligament (ACL)", link: "#" },
      { name: "Hip Replacement Surgery", link: "#" },
      { name: "Shoulder Replacement", link: "#" },
      { name: "Knee Replacement Surgery", link: "#" },
      { name: "Arthroscopy Surgery", link: "#" },
      { name: "Limb Lengthening Surgery", link: "#" },
      { name: "Bone Tumor", link: "#" },
      { name: "Joint Replacement Surgery", link: "#" },
    ],

    [
      { name: "Limb Amputation", link: "#" },
      { name: "Dislocated Hip Treatment", link: "#" },
      { name: "Femur Fracture Treatment", link: "#" },
      { name: "Carpal Tunnel Release Surgery", link: "#" },
      { name: "Club Foot Treatment", link: "#" },
      { name: "Ankle Arthroscopy", link: "#" },
      { name: "Elbow Arthroscopy Surgery", link: "#" },
      { name: "Dynamic Hip Screw", link: "#" },
    ],

    [

      { name: "Baker's Cyst Treatment", link: "#" },
      { name: "Shoulder Impingement Syndrome Treatment", link: "#" },
      { name: "ACL Reconstruction Surgery", link: "#" },
      { name: "Pinched Nerve Treatment", link: "#" },
      { name: "Achilles Tendinitis Treatment", link: "#" },
      { name: "Ankle Fracture Treatment", link: "#" },
      { name: "Dislocated Elbow Treatment", link: "#" },
    ],
  ];


  const pulmonology = [
    [
      { name: "Bronchoscopic Lung Volume Reduction", link: "#" },
      { name: "Bronchoscopy Surgery", link: "#" },
      { name: "Pulmonary Lobectomy", link: "#" },
      { name: "Asthma Treatment", link: "#" },
      { name: "Pneumonia Treatment", link: "#" },
    ],

    [
      { name: "Lung Biopsy", link: "#" },
      { name: "Pleural Biopsy", link: "#" },
      { name: "Thoracentesis Surgery", link: "#" },
      { name: "Interstitial Lung Disease Treatment", link: "#" },
      { name: "Pulmonary Rehabilitation", link: "#" },
    ],

    [
      { name: "Thoracoscopy Surgery", link: "#" },
      { name: "Tuberculosis Treatment", link: "#" },
      { name: "Chronic Obstructive Pulmonary Disease Treatment", link: "#" },
      { name: "Sleep Apnea Treatment", link: "#" },
      { name: "Lung Cancer Treatment", link: "#" },
    ],
  ];


  const rheumatology = [
    [
      { name: "Biologic Response Modifiers", link: "#" },
      { name: "Lupus Erythematosus", link: "#" },
      { name: "Fibromyalgia Treatment", link: "#" },
      { name: "Gout Treatment", link: "#" },
      { name: "Vasculitis Treatment", link: "#" },
    ],

    [
      { name: "Sjogren's Syndrome Treatment", link: "#" },
      { name: "Rheumatoid Arthritis Treatment", link: "#" },
      { name: "Autoinflammatory Diseases", link: "#" },
      { name: "Psoriatic Arthritis Treatment", link: "#" },
      { name: "Ankylosing Spondylitis Treatment", link: "#" },
    ],

    [
      { name: "Autoimmune Diseases Treatment", link: "#" },
      { name: "Osteoarthritis Surgery", link: "#" },
      { name: "Systemic Lupus Erythematosus", link: "#" },
      { name: "Scleroderma Treatment", link: "#" },
      { name: "Polymyalgia Rheumatica", link: "#" },
    ],
  ];


  const spine = [
    [
      { name: "Scoliosis Spine Surgery", link: "#" },
      { name: "Spine Surgery", link: "#" },
      { name: "Spine Tumor Surgery", link: "#" },
      { name: "Laminectomy", link: "#" },
      { name: "Spinal Fusion", link: "#" },
    ],

    [
      { name: "Disc Replacement Surgery", link: "#" },
      { name: "Kyphoplasty Surgery", link: "#" },
      { name: "Cervical Spondylosis Treatment", link: "#" },
      { name: "Microdiscectomy", link: "#" },
      { name: "Artificial Disc Replacement", link: "#" },
    ],

    [
      { name: "Corpectomy Surgery", link: "#" },
      { name: "Foraminotomy Surgery", link: "#" },
      { name: "Vertebroplasty Surgery", link: "#" },
      { name: "Spinal Decompression", link: "#" },
      { name: "Minimally Invasive Spine Surgery", link: "#" },
    ],
  ];


  const surgical = [
    [
      { name: "Cryosurgery", link: "#" },
      { name: "Radiofrequency Ablation", link: "#" },
      { name: "Laparoscopic Surgery", link: "#" },
      { name: "Breast Cancer Surgery", link: "#" },
      { name: "Colorectal Cancer Surgery", link: "#" },
    ],

    [
      { name: "Robotic Surgery", link: "#" },
      { name: "Thoracic Surgery", link: "#" },
      { name: "Endoscopy Surgery", link: "#" },
      { name: "Head and Neck Cancer Surgery", link: "#" },
      { name: "Gynecologic Oncology Surgery", link: "#" },
    ],

    [
      { name: "Diagnostic Surgery", link: "#" },
      { name: "Reconstructive Surgery", link: "#" },
      { name: "Melanoma Surgery", link: "#" },
      { name: "Sarcoma Surgery", link: "#" },
      { name: "Hepatobiliary Surgery", link: "#" },
    ],
  ];


  const orthopaedic = [
    [
      { name: "Cochlear Implant Surgery", link: "#" },
      { name: "Endoscopic Sinus", link: "#" },
      { name: "Vertigo Surgery", link: "#" },
      { name: "Tonsillectomy", link: "#" },
      { name: "Adenoidectomy", link: "#" },
    ],

    [
      { name: "Laryngotracheoplasty", link: "#" },
      { name: "Thyroid Surgery Treatment", link: "#" },
      { name: "Turbinate Reduction Surgery", link: "#" },
      { name: "Septoplasty", link: "#" },
      { name: "Rhinoplasty", link: "#" },
    ],

    [
      { name: "Thyroidectomy Surgery", link: "#" },
      { name: "Bone Conduction Hearing Aid", link: "#" },
      { name: "Tympanoplasty Surgery", link: "#" },
      { name: "Myringotomy", link: "#" },
      { name: "Mastoidectomy", link: "#" },
    ],
  ];


  const stem = [
    [
      { name: "Diabetes", link: "#" },
      { name: "Various Blood Cancers", link: "#" },
      { name: "Spinal Cord Injuries", link: "#" },
      { name: "Retinal Diseases", link: "#" },
      { name: "Brain Stroke", link: "#" },
      { name: "Multiple Sclerosis", link: "#" },
    ],

    [
      { name: "Hearing Loss", link: "#" },
      { name: "Osteoarthritis, Rheumatoid Arthritis", link: "#" },
      { name: "Lung Diseases", link: "#" },
      { name: "Autism", link: "#" },
      { name: "Parkinson's Disease", link: "#" },
      { name: "Heart Disease", link: "#" },
    ],

    [
      { name: "Knee Injuries", link: "#" },
      { name: "Kidney Failure", link: "#" },
      { name: "Sickle Cell Anemia / Sickle Cell Disease", link: "#" },
      { name: "Alzheimer's Disease", link: "#" },
      { name: "Liver Disease", link: "#" },
      { name: "Muscular Dystrophy", link: "#" },
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
          <div className="hidden md:block w-[2px] h-[400px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
          <div className="hidden md:block w-[2px] h-[400px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 11th Ayurveda Treatments */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic11}
            alt="Ayurveda Treatments"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Ayurveda Treatments
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {ayurveda[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {ayurveda[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 12th Pediatrics Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic12}
            alt="Pediatrics Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Pediatrics Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {pediatrics[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {pediatrics[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {pediatrics[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 13th Gender Reassignment Surgery */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic13}
            alt="Gender Reassignment Surgery"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Gender Reassignment Surgery
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {gender[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {gender[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {gender[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 14th General Medicine */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic14}
            alt="General Medicine"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            General Medicine
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {medicine[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {medicine[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {medicine[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 15th Gynecology Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic15}
            alt="Gynecology Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Gynecology Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {gynecology[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {gynecology[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {gynecology[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 16th Preventive Health Check */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic16}
            alt="Preventive Health Check"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Preventive Health Check
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {preventive[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {preventive[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {preventive[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 17th Obesity Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic17}
            alt="Obesity Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Obesity Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {obesity[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {obesity[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {obesity[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 18th Orthopedic Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic18}
            alt="Orthopedic Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Orthopedic Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {orthopedic[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {orthopedic[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {orthopedic[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 19th Pulmonology Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic19}
            alt="Pulmonology Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Pulmonology Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {pulmonology[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {pulmonology[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {pulmonology[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 20th Rheumatology Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic20}
            alt="Rheumatology Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Rheumatology Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {rheumatology[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {rheumatology[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {rheumatology[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 21th Spine Surgery Treatment */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic21}
            alt="Spine Surgery Treatment"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Spine Surgery Treatment
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {spine[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {spine[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {spine[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 22th Surgical Oncology */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic22}
            alt="Surgical Oncology"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Surgical Oncology
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {surgical[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {surgical[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {surgical[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 23th Orthopaedic Procedures */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic23}
            alt="Orthopaedic Procedures"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Orthopaedic Procedures
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {orthopaedic[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {orthopaedic[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {orthopaedic[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

      {/* 24th Stem Cell Treatments */}
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 bg-[#082859] rounded-[15px] py-[30px] px-[20px] mb-[30px]">
          <Image
            src={pic24}
            alt="Stem Cell Treatments"
            width={50}
            height={50}
            className="w-[60px] h-[50px] flex-shrink-0"
          />
          <h2 className="text-white text-[1.8rem] font-semibold m-0">
            Stem Cell Treatments
          </h2>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-[30px] items-start">
          {/* Column 1 */}
          <ul className="list-none p-0 m-0 space-y-[12px]">
            {stem[0].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {stem[1].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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
            {stem[2].map((item, i) => (
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${activeLink === item.name
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

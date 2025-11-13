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
      },
      {
        name: "Cerebrospinal Fluid Shunt",
      },
      {
        name: "Skull Base Surgery",
      },
      {
        name: "Brain Tumor",
      },
      {
        name: "Parkinson's Treatment",
      },
    ],

    [
      {
        name: "Cyber Knife Robotic Radiation",
      },
      {
        name: "Stroke Rehabilitation",
      },
      {
        name: "Multiple Sclerosis",
      },
      { name: "Alzheimer" },
      { name: "Chronic Cerebrospinal Venous Insufficiency" },
    ],

    [
      {
        name: " Deep Brain Stimulation Surgery",
      },
      {
        name: "Epidural Stimulation",
      },
      {
        name: "Intrathecal Baclofen Pump",
      },
      { name: "Focal Seizure" },
      { name: "Sacral Nerve Stimulation" },
    ],
  ];

  const cosmetic = [
    [
      {
        name: "Liposuction",
      },
      {
        name: "Eyelid Surgery",
      },
      {
        name: "Breast Implant",
      },
      {
        name: "Nose Jobs",
      },
      {
        name: "Brow Lift",
      },
    ],
    [
      {
        name: "Face Lift",
      },
      {
        name: "Hair Transplant",
      },
      {
        name: "Rhinoplasty Surgery",
      },
      { name: "Lip Augmentation" },
      { name: "Chin Augmentation" },
    ],
    [
      {
        name: "Tummy Tuck Surgery",
      },
      {
        name: "Mommy Makeover",
      },
      {
        name: "Abdominoplasty",
      },
      { name: "Buttock Lift" },
      { name: "Thigh Lift" },
    ],
  ];

  const cancer = [
    [
      {
        name: "Rhabdomyosarcoma Treatment",
      },
      {
        name: "Robotic Prostate Cancer Surgery",
      },
      {
        name: "Pancreatic Cancer Treatment",
      },
      {
        name: "Ovarian Cancer Treatment",
      },
      {
        name: "Oral Cancer Treatment",
      },
      {
        name: "Liver Cancer",
      },
      {
        name: "Brain Cancer (Tumour) Treatment",
      },
      {
        name: "Prostate Cancer",
      },
      {
        name: "Cervical Cancer",
      },
      {
        name: "Gastrointestinal Cancer",
      },
    ],

    [
      {
        name: "Breast Cancer",
      },
      {
        name: "Head And Neck Cancer",
      },
      {
        name: "Lung Cancer",
      },
      { name: "Blood Cancer" },
      { name: "Thyroid Cancer" },
      {
        name: "Bladder Cancer",
      },
      {
        name: "Esophagus Cancer",
      },
      { name: "Penile Cancer" },
      { name: "Nasopharyngeal Cancer" },
      {
        name: "Uterine Cancer",
      },
    ],

    [
      {
        name: "Anal Cancer",
      },
      {
        name: "Vulvar Cancer",
      },
      { name: "Primary Bone Cancer" },
      { name: "Vaginal Cancer" },
      {
        name: "Bone Cancer",
      },
      {
        name: "Skin Cancer",
      },
      { name: "Colon Cancer" },
      { name: "Gallbladder Cancer" },
      { name: "Salivary Cancer Cancer" },
      { name: "Bile Duct Cancer" },
    ],
  ];

  const dental = [
    [
      {
        name: "Bridges",
      },
      {
        name: "Crowns",
      },
      {
        name: "Dentures",
      },
      {
        name: "Veneers",
      },
      {
        name: "Braces",
      },
      {
        name: "Bone Graft Treatment",
      },
      {
        name: "Denture Treatment",
      },
    ],

    [
      {
        name: "Fillings",
      },
      {
        name: "Root Canal Treatment",
      },
      {
        name: "Gum Treatment",
      },
      { name: "Tooth Extraction" },
      { name: "Dental Bonding" },
      { name: "Complete Denture" },
      { name: "Fixed Braces" },
    ],

    [
      {
        name: "Dental Implants",
      },
      {
        name: "Teeth Whitening",
      },
      {
        name: "Invisalign",
      },
      { name: "Oral Surgery" },
      { name: "Pediatric Dentistry" },
      { name: "Wisdom Tooth Extraction" },
    ],
  ];

  const heart = [
    [
      {
        name: "Heart Transplant",
      },
      {
        name: "Heart Diseases",
      },
      {
        name: "Endovascular Aneurysm Repair",
      },
      {
        name: "Coronary Heart Diseases",
      },
      {
        name: "Robotic Heart Bypass Surgery",
      },
      {
        name: "Ventricular Septal Defect (VSD)",
      },
      {
        name: "Atrial Septal Defect",
      },
      {
        name: "Endoscopic Vein Harvesting",
      },
      {
        name: "Bentall Procedure",
      },
      {
        name: "Aortic Valve Repair",
      },
    ],

    [
      {
        name: "Coronary Angioplasty",
      },
      {
        name: "Heart Bypass Surgery",
      },
      {
        name: "Heart Valve Surgery",
      },
      { name: "Atherosclerosis Treatment" },
      { name: "Aortic Stenosis Treatment" },
      {
        name: "Balloon Mitral Valvuloplasty",
      },
      {
        name: "Balloon Pulmonary Valvuloplasty",
      },
      {
        name: "Cardiac Asthma Treatment",
      },
      { name: "Coronary Artery Disease" },
      { name: "Hypertension Treatment" },
    ],

    [
      {
        name: "Paediatric Heart Surgery",
      },
      {
        name: "Robotic Heart Surgery",
      },
      {
        name: "Pacemaker Implantation",
      },
      { name: "Mitral Valve Repair" },
      { name: "Myocardial Bridge Treatment" },
      {
        name: "Pericarditis Treatment",
      },
      {
        name: "Transcatheter Aortic Valve Implantation",
      },
      {
        name: "Aortopulmonary Window",
      },
      { name: "Cardioversion Treatment" },
      { name: "Double Valve Replacement" },
    ],
  ];

  const kidney = [
    [
      {
        name: "Hydronephrosis Treatment",
      },
      {
        name: "Kidney Cyst",
      },
      {
        name: "Kidney Stones",
      },
      {
        name: "Percutaneous Nephrolithotomy (PCNL)",
      },
      {
        name: "TURP Surgery",
      },
      {
        name: "Nephrectomy Surgery",
      },
    ],

    [
      {
        name: "Renal Angiography",
      },
      {
        name: "Kidney Dialysis",
      },
      {
        name: "Kidney Tumor",
      },
      { name: "Undescended Testicle Surgery" },
      { name: "Bladder Stone Removal" },
      { name: "Prostate Biopsy" },
    ],

    [
      {
        name: "RIRS Surgery",
      },
      {
        name: "Endopyelotomy Procedure",
      },
      {
        name: "Pyeloplasty Surgery",
      },
      { name: "Peyronie's Disease Treatment" },
      { name: "Penile Prosthesis" },
      { name: "Urethral Surgery" },
    ],
  ];

  const ophthalmology = [
    [
      {
        name: "Refractive Surgery",
      },
      {
        name: "Cornea Transplant Surgery",
      },
      {
        name: "Laser Eye Surgery",
      },
      {
        name: "LASIK Surgery",
      },
      {
        name: "PRK Surgery",
      },
    ],

    [
      {
        name: "Cataract Surgery",
      },
      {
        name: "Glaucoma Surgery",
      },
      {
        name: "Vitreoretinal Surgery",
      },
      { name: "Retinal Detachment Surgery" },
      { name: "Macular Hole Surgery" },
    ],

    [
      {
        name: "Eye Muscle Repair",
      },
      {
        name: "Artificial Iris Implantation",
      },
      {
        name: "Astigmatism Correction",
      },
      { name: "Blepharoplasty" },
      { name: "Retinal detachment" },
    ],
  ];

  const infertility = [
    [
      {
        name: "In Vitro Fertilization (IVF)",
      },
      {
        name: "Embryo Transfer",
      },
      {
        name: "Hysterosalpingography (HSG)",
      },
      {
        name: "Sperm Collection",
      },
      {
        name: "Fertility Testing",
      },
    ],

    [
      {
        name: "Ovulation Induction",
      },
      {
        name: "Laparoscopic Ovarian Drilling (LOD)",
      },
      {
        name: "Blastocyst Transfer",
      },
      { name: "Intrauterine Insemination (IUI)" },
      { name: "Fertility Preservation" },
    ],

    [
      {
        name: "Retrograde Ejaculation Treatment",
      },
      {
        name: "Assisted Hatching",
      },
      {
        name: "Intracytoplasmic Sperm Injection (ICSI)",
      },
      { name: "Gamete Intrafallopian Transfer (GIFT)" },
      { name: "Surrogacy" },
    ],
  ];

  const transplant = [
    [
      {
        name: "Bone Marrow Transplants (BMT)",
      },
      {
        name: "Kidney Transplant",
      },
      {
        name: "Liver Transplant",
      },
      {
        name: "Heart Transplant",
      },
      {
        name: "Lung Transplant",
      },
    ],

    [
      {
        name: "Pancreas Transplant",
      },
      {
        name: "Intestine Transplant",
      },
      {
        name: "Face Transplant Surgery",
      },
      { name: "Bilateral Hand Transplant" },
      { name: "Corneal Transplant" },
    ],

    [
      {
        name: "Stem Cell Transplant",
      },
      {
        name: "Multi-Organ Transplant",
      },
      {
        name: "Living Donor Transplant",
      },
      { name: "Cadaveric Transplant" },
      { name: "Pediatric Transplant" },
    ],
  ];

  const ent = [
    [
      {
        name: "Cochlear Implant Surgery",
      },
      {
        name: "Endoscopic Sinus",
      },
      {
        name: "Vertigo Surgery",
      },
      {
        name: "Tonsillectomy",
      },
      {
        name: "Adenoidectomy",
      },
    ],

    [
      {
        name: "Laryngotracheoplasty",
      },
      {
        name: "Thyroid Surgery Treatment",
      },
      {
        name: "Turbinate Reduction Surgery",
      },
      { name: "Septoplasty" },
      { name: "Rhinoplasty" },
    ],

    [
      {
        name: "Thyroidectomy Surgery",
      },
      {
        name: "Bone Conduction Hearing Aid",
      },
      {
        name: "Tympanoplasty Surgery",
      },
      { name: "Myringotomy" },
      { name: "Mastoidectomy" },
    ],
  ];

  const ayurveda = [
    [
      { name: "Udvartthanam" },
      { name: "Navarakizhi" },
      { name: "Elakizhi" },
      { name: "Thalapothichil" },
    ],
    [{ name: "Pizhichil" }, { name: "Thalam" }, { name: "Lepanam" }],
  ];

  const pediatrics = [
    [
      { name: "Fontan Procedure" },
      { name: "Coarctation Of The Aorta (CoA)" },
      { name: "Tetralogy Of Fallot (TOF)" },
      { name: "Heart Surgery" },
      { name: "Nursemaid's Elbow Treatment" },
      { name: "Incision And Drainage Abscess" },
    ],
    [
      { name: "Arrhythmias" },
      { name: "Fetal Cardiology" },
      { name: "ASD Closure Surgery" },
      { name: "Atrioventricular Canal Defect" },
      { name: "Laceration Repair" },
      { name: "Splinting Fracture" },
    ],
    [
      { name: "Patent Ductus Arteriosus (PDA) Device Closure" },
      { name: "Arterial Switch Operation" },
      {
        name: "Total Anomalous Pulmonary Venous Connection (TAPVC)",
      },
      { name: "Right Heart Catheterization" },
      { name: "Transposition Of The Great Arteries" },
      { name: "Balloon Atrial Septostomy" },
    ],
  ];

  const gender = [
    [
      { name: "Sex Reassignment Surgery" },
      { name: "Adams Apple Removal Surgery" },
      { name: "Mastectomy Surgery" },
      { name: "Vaginoplasty" },
      { name: "Phalloplasty" },
    ],
    [
      { name: "Facial Feminization Surgery" },
      { name: "Labia Surgery" },
      { name: "Reduction Clitoroplasty" },
      { name: "Orchiectomy" },
      { name: "Hysterectomy" },
    ],
    [
      { name: "Salpingo-Oophorectomy" },
      { name: "Metoidioplasty Surgery" },
      { name: "Voice Feminization Surgery" },
      { name: "Breast Augmentation" },
      { name: "Body Contouring" },
    ],
  ];

  const medicine = [
    [
      { name: "Asthma" },
      { name: "Geriatric Medicine" },
      { name: "Hypertension" },
      { name: "Diabetes Management" },
      { name: "Respiratory Infections" },
    ],
    [
      { name: "Internal Medicine" },
      { name: "Hyperbaric Medicine" },
      { name: "Preventive Medicine" },
      { name: "Chronic Disease Management" },
      { name: "Health Screening" },
    ],
    [
      { name: "Extracorporeal Shockwave Therapy" },
      { name: "Anal Fissure Treatment" },
      { name: "Vaccination Services" },
      { name: "Travel Medicine" },
      { name: "Pain Management" },
    ],
  ];

  const gynecology = [
    [
      { name: "Gynecology & Obstetrics" },
      { name: "Bartholin's Cyst Treatment" },
      { name: "Colposcopy" },
      { name: "Breast Biopsy" },
      { name: "Cervical Cautery" },
      { name: "Endometriosis Treatment" },
      { name: "Dilation And Curettage" },
      { name: "Myomectomy" },
      { name: "Female Sterilization" },
      { name: "Ovarian Cyst Removal" },
      { name: "Oophorectomy" },
      { name: "Contraceptive Implant" },
      { name: "Cesarean Section" },
      { name: "Tubal Ligation Reversal" },
      { name: "Vaginoplasty" },
      { name: "Ectopic Pregnancy Surgery" },
      { name: "Pelvic Floor Repair" },
      { name: "Hysterectomy" },
    ],

    [
      { name: "Ovarian Tumor Removal" },
      { name: "Cervical Biopsy" },
      { name: "Uterine Prolapse Surgery" },
      { name: "Cystocele Repair" },
      { name: "Intrauterine Device (IUD) Placement" },
      { name: "Vaginal Vault Prolapse Surgery" },
      { name: "Endometrial Biopsy" },
      { name: "Hormone Replacement Therapy (HRT)" },
      { name: "Hysteroscopy" },
      { name: "Vaginal Childbirth" },
      { name: "Pelvic Adhesiolysis" },
      { name: "Cervical Polyp Removal" },
      { name: "Vulval Biopsy" },
      { name: "Antenatal Care (ANC)" },
      { name: "Pessary Placement" },
      { name: "Fetal Echocardiography" },
      { name: "Intrauterine Device (IUD) Removal" },
      { name: "Vaginectomy" },
      { name: "Hysterosonography" },
      { name: "Hymenotomy" },
    ],

    [
      { name: "Uterosacral Nerve Ablation" },
      { name: "Vulval Skin Treatment" },
      { name: "Cervical Cerclage" },
      { name: "Amniocentesis" },
      { name: "Pelvic Floor Electrical Stimulator" },
      { name: "Presacral Neurectomy" },
      { name: "Vaginismus Treatment" },
      { name: "Urodynamic Evaluation" },
      { name: "Vulvectomy" },
      { name: "Episiotomy Repair" },
      { name: "Cardiotocography (CTG)" },
      { name: "Ovarian Transposition Surgery" },
      { name: "Molar Pregnancy Treatment" },
      { name: "Fetal Surgery" },
      { name: "Microdochectomy" },
      { name: "Uterine Artery Embolization (UAE)" },
      { name: "Robotic Hysterectomy" },
      { name: "Vaginal Hysterectomy" },
      { name: "Fibroid Removal" },
      { name: "Uterus Transplant" },
    ],
  ];

  const preventive = [
    [
      {
        name: "Master Health Check-up",
      },
      {
        name: "Executive Health Check",
      },
      {
        name: "Heart Check-up",
      },
      {
        name: "Advanced Cardiac Package (Male / Female)",
      },
      {
        name: "Wellness Check-up",
      },
      {
        name: "Senior Citizen Health Package",
      },
    ],

    [
      {
        name: "Diabetic Health Check – I",
      },
      {
        name: "Diabetic Health Check – II",
      },
      {
        name: "Child Health Check-up (MCHC)",
      },
      { name: "Cancer Screening – Level 1 – Female" },
      { name: "Thyroid Profile Package" },
      { name: "Liver Function Package" },
    ],

    [
      {
        name: "Cancer Screening – Level 1 – Male",
      },
      {
        name: "Cancer Screening – Level 2 – Female",
      },
      {
        name: "Cancer Screening – Level 2 – Male",
      },
      { name: "Kidney Function Package" },
      { name: "Women's Health Package" },
      { name: "Men's Health Package" },
    ],
  ];

  const obesity = [
    [
      { name: "Bariatric Surgery" },
      { name: "Gastric Bypass Surgery" },
      { name: "Gastric Sleeve" },
      { name: "Medical Weight Management" },
      { name: "Nutrition Counseling" },
    ],

    [
      { name: "Gastric Balloon" },
      { name: "Weight Loss Treatment" },
      { name: "Gastric Plication" },
      { name: "Endoscopic Sleeve Gastroplasty" },
      { name: "Behavioral Therapy" },
    ],

    [
      { name: "Gastric Band Surgery" },
      { name: "Biliopancreatic Diversion With Duodenal Switch" },
      { name: "Primary Obesity Surgery Endolumenal" },
      { name: "Metabolic Surgery" },
      { name: "Exercise Physiology" },
    ],
  ];

  const orthopedic = [
    [
      { name: "Anterior Cruciate Ligament (ACL)" },
      { name: "Hip Replacement Surgery" },
      { name: "Shoulder Replacement" },
      { name: "Knee Replacement Surgery" },
      { name: "Arthroscopy Surgery" },
      { name: "Limb Lengthening Surgery" },
      { name: "Bone Tumor" },
      { name: "Joint Replacement Surgery" },
    ],

    [
      { name: "Limb Amputation" },
      { name: "Dislocated Hip Treatment" },
      { name: "Femur Fracture Treatment" },
      { name: "Carpal Tunnel Release Surgery" },
      { name: "Club Foot Treatment" },
      { name: "Ankle Arthroscopy" },
      { name: "Elbow Arthroscopy Surgery" },
      { name: "Dynamic Hip Screw" },
    ],

    [
      { name: "Baker's Cyst Treatment" },
      { name: "Shoulder Impingement Syndrome Treatment" },
      { name: "ACL Reconstruction Surgery" },
      { name: "Pinched Nerve Treatment" },
      { name: "Achilles Tendinitis Treatment" },
      { name: "Ankle Fracture Treatment" },
      { name: "Dislocated Elbow Treatment" },
    ],
  ];

  const pulmonology = [
    [
      { name: "Bronchoscopic Lung Volume Reduction" },
      { name: "Bronchoscopy Surgery" },
      { name: "Pulmonary Lobectomy" },
      { name: "Asthma Treatment" },
      { name: "Pneumonia Treatment" },
    ],

    [
      { name: "Lung Biopsy" },
      { name: "Pleural Biopsy" },
      { name: "Thoracentesis Surgery" },
      { name: "Interstitial Lung Disease Treatment" },
      { name: "Pulmonary Rehabilitation" },
    ],

    [
      { name: "Thoracoscopy Surgery" },
      { name: "Tuberculosis Treatment" },
      { name: "Chronic Obstructive Pulmonary Disease Treatment" },
      { name: "Sleep Apnea Treatment" },
      { name: "Lung Cancer Treatment" },
    ],
  ];

  const rheumatology = [
    [
      { name: "Biologic Response Modifiers" },
      { name: "Lupus Erythematosus" },
      { name: "Fibromyalgia Treatment" },
      { name: "Gout Treatment" },
      { name: "Vasculitis Treatment" },
    ],

    [
      { name: "Sjogren's Syndrome Treatment" },
      { name: "Rheumatoid Arthritis Treatment" },
      { name: "Autoinflammatory Diseases" },
      { name: "Psoriatic Arthritis Treatment" },
      { name: "Ankylosing Spondylitis Treatment" },
    ],

    [
      { name: "Autoimmune Diseases Treatment" },
      { name: "Osteoarthritis Surgery" },
      { name: "Systemic Lupus Erythematosus" },
      { name: "Scleroderma Treatment" },
      { name: "Polymyalgia Rheumatica" },
    ],
  ];

  const spine = [
    [
      { name: "Scoliosis Spine Surgery" },
      { name: "Spine Surgery" },
      { name: "Spine Tumor Surgery" },
      { name: "Laminectomy" },
      { name: "Spinal Fusion" },
    ],

    [
      { name: "Disc Replacement Surgery" },
      { name: "Kyphoplasty Surgery" },
      { name: "Cervical Spondylosis Treatment" },
      { name: "Microdiscectomy" },
      { name: "Artificial Disc Replacement" },
    ],

    [
      { name: "Corpectomy Surgery" },
      { name: "Foraminotomy Surgery" },
      { name: "Vertebroplasty Surgery" },
      { name: "Spinal Decompression" },
      { name: "Minimally Invasive Spine Surgery" },
    ],
  ];

  const surgical = [
    [
      { name: "Cryosurgery" },
      { name: "Radiofrequency Ablation" },
      { name: "Laparoscopic Surgery" },
      { name: "Breast Cancer Surgery" },
      { name: "Colorectal Cancer Surgery" },
    ],

    [
      { name: "Robotic Surgery" },
      { name: "Thoracic Surgery" },
      { name: "Endoscopy Surgery" },
      { name: "Head and Neck Cancer Surgery" },
      { name: "Gynecologic Oncology Surgery" },
    ],

    [
      { name: "Diagnostic Surgery" },
      { name: "Reconstructive Surgery" },
      { name: "Melanoma Surgery" },
      { name: "Sarcoma Surgery" },
      { name: "Hepatobiliary Surgery" },
    ],
  ];

  const orthopaedic = [
    [
      { name: "Cochlear Implant Surgery" },
      { name: "Endoscopic Sinus" },
      { name: "Vertigo Surgery" },
      { name: "Tonsillectomy" },
      { name: "Adenoidectomy" },
    ],

    [
      { name: "Laryngotracheoplasty" },
      { name: "Thyroid Surgery Treatment" },
      { name: "Turbinate Reduction Surgery" },
      { name: "Septoplasty" },
      { name: "Rhinoplasty" },
    ],

    [
      { name: "Thyroidectomy Surgery" },
      { name: "Bone Conduction Hearing Aid" },
      { name: "Tympanoplasty Surgery" },
      { name: "Myringotomy" },
      { name: "Mastoidectomy" },
    ],
  ];

  const stem = [
    [
      { name: "Diabetes" },
      { name: "Various Blood Cancers" },
      { name: "Spinal Cord Injuries" },
      { name: "Retinal Diseases" },
      { name: "Brain Stroke" },
      { name: "Multiple Sclerosis" },
    ],

    [
      { name: "Hearing Loss" },
      { name: "Osteoarthritis, Rheumatoid Arthritis" },
      { name: "Lung Diseases" },
      { name: "Autism" },
      { name: "Parkinson's Disease" },
      { name: "Heart Disease" },
    ],

    [
      { name: "Knee Injuries" },
      { name: "Kidney Failure" },
      { name: "Sickle Cell Anemia / Sickle Cell Disease" },
      { name: "Alzheimer's Disease" },
      { name: "Liver Disease" },
      { name: "Muscular Dystrophy" },
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
      <section className="max-w-[1240px] mx-auto bg-[#f7f7f7] dark:bg-white rounded-[20px] p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)] font-sans mb-10 mt-10">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[200px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[350px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[350px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[1100px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[1100px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[350px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[350px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[450px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[450px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[250px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column Divider */}
          <div className="hidden md:block w-[2px] h-[350px] bg-[#ddd] mx-auto"></div>

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
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
                    {item.name}
                  </span>
                )}
              </li>
            ))}
          </ul>

          {/* Column 3 */}
          <div className="hidden md:block w-[2px] h-[350px] bg-[#ddd] mx-auto"></div>

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
                    className={`text-[18px] font-medium flex-1 transition-colors duration-300 ${
                      activeLink === item.name
                        ? "text-[#082859] font-semibold"
                        : "text-[#082859] hover:text-[#0C3D88]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className="text-[#082859] text-[18px] font-medium flex-1 cursor-default">
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

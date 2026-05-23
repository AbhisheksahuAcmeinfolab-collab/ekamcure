import Script from "next/script";
import React from "react";
import Link from "next/link";
import CTA from "../../../Component/cta";
import Image from "next/image";
import ContactForm from "../../../Component/ContactForm";
import Sidebar from "../../../Component/Sidebar";

import {
  Activity,
  Brain,
  Stethoscope,
  Timer,
  ShieldCheck,
  CheckCircle,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Best Kidney Transplant in India | Affordable Cost & Top Hospitals",
  description:
    "Looking for affordable kidney transplant in India? Get world-class treatment, expert transplant surgeons, advanced hospitals, and complete international patient support. Explore kidney transplant cost India with Ekam today.",
};

export default function KidneyTransplantInIndia() {
  return (
    <>
      <Script
        id="kidney-transplant-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is kidney transplant in India safe for international patients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, many Indian hospitals follow international healthcare standards and offer advanced transplant care with experienced specialists.",
                },
              },
              {
                "@type": "Question",
                name: "How long does kidney transplant recovery take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Initial recovery usually takes several weeks, although complete healing and long-term adjustment may take a few months.",
                },
              },
              {
                "@type": "Question",
                name: "Can patients travel after kidney transplant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, many patients can travel after recovery, but doctors usually recommend waiting until health stabilises completely.",
                },
              },
              {
                "@type": "Question",
                name: "Are robotic kidney transplants available in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, several advanced hospitals offer robotic-assisted kidney transplant procedures for eligible patients.",
                },
              },
              {
                "@type": "Question",
                name: "How long should international patients stay in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The required stay depends on medical condition and recovery progress, but patients are often advised to remain in India for several weeks after surgery.",
                },
              },
              {
                "@type": "Question",
                name: "Is dialysis required after transplant?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Successful transplantation often eliminates the need for dialysis.",
                },
              },
              {
                "@type": "Question",
                name: "What support does Ekam provide?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ekam assists with hospital selection, doctor consultations, travel planning, visa support, accommodation, and follow-up care.",
                },
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* HERO */}
        <div
          className="relative text-white h-[400px] overflow-hidden bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/banner/kidney-transplant-banner.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
          ></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Kidney Transplant in India for International Patients
            </h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-10 gap-8 px-4 py-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 order-2">

            {/* TOC */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border-t-4 border-pink-500">
              <h2 className="font-bold text-xl mb-4 flex items-center">
                <CheckCircle className="mr-2 text-pink-600" />
                In this page
              </h2>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                {[
                  "Understanding Kidney Failure",
                  "Early Signs and Symptoms of Kidney Failure",
                  "Common Causes of Kidney Failure",
                  "When Is a Kidney Transplant Needed",
                  "Why International Patients Choose India for Kidney Transplant",
                  "Eligibility Factors for Kidney Transplant",
                  "Types of Kidney Donors",
                  "ABO-Compatible Kidney Transplant",
                  "Donor Compatibility Assessment",
                  "ABO-Incompatible Kidney Transplant",
                  "Medical Tests Before Kidney Transplant",
                  "Pre-Transplant Preparation",
                  "Diet Management Before Kidney Transplant",
                  "Emotional Support Before Transplant",
                  "Why International Patients Prefer India for Kidney Transplant Preparation",
                  "Kidney Transplant Procedure in India",
                  "Preparation Before Kidney Transplant Surgery",
                  "Donor Kidney Removal Procedure",
                  "Kidney Implantation Procedure",
                  "Robotic-Assisted Kidney Transplant Surgery",
                  "Intensive Care and Immediate Postoperative Recovery",
                  "Hospital Recovery After Kidney Transplant",
                  "Immunosuppressive Medications After Transplant",
                  "Risks and Complications of Kidney Transplant",
                  "Long-Term Monitoring After Kidney Transplant",
                  "Benefits of Successful Kidney Transplant",
                  "International Patient Support Through Ekam",
                  "Kidney Transplant Cost in India",
                  "International Patient Support in India",
                  "Life After Kidney Transplant",
                  "Lifestyle Changes After Kidney Transplant",
                  "Kidney Transplant Surgeons in India",
                  "Kidney Transplant Success Rates",
                  "Frequently Asked Questions",
                ].map((item, i) => (
                  <a
                    key={i}
                    href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="hover:text-pink-600"
                  >
                    › {item}
                  </a>
                ))}
              </div>
            </div>

            {/* INTRO */}
            <div className="bg-white p-6 rounded-xl shadow mb-10">
              <p className="text-gray-700">
                Kidney failure is a serious health condition that affects millions of people around the world. The kidneys are responsible for filtering waste products, balancing fluids, regulating blood pressure, and maintaining overall body functions. When the kidneys stop working properly, harmful toxins begin to accumulate in the body, leading to severe health complications. For many patients suffering from end-stage renal disease (ESRD), a kidney transplant becomes the best long-term treatment option.
              </p>
              <p className="text-gray-700 mt-4">
                Today, kidney transplant in India has become a trusted healthcare solution for international patients from Ghana, Mauritius, Fiji, Zimbabwe, Bangladesh, South Africa, and Kenya. Patients from across Africa and other international regions prefer India for affordable and advanced kidney care supported by experienced transplant surgeons, internationally accredited hospitals, modern medical technology, and personalised patient assistance. With high success rates, shorter waiting periods, and cost-effective treatment options, India continues to be a leading destination for kidney failure treatment India services.
              </p>
              <p className="text-gray-700 mt-4">
                One of the key reasons why patients choose affordable kidney transplant India options is the combination of quality treatment and lower healthcare costs. Compared to many Western countries, India offers world-class healthcare facilities at significantly lower expenses without compromising patient safety or treatment quality. Modern Indian hospitals are equipped with advanced transplant ICUs, minimally invasive surgical technology, robotic-assisted procedures, and specialised nephrology departments that support successful transplant outcomes.
              </p>
              <p className="text-gray-700 mt-4">
                For international patients, travelling abroad for treatment may feel overwhelming. Concerns regarding hospital selection, donor matching, medical visas, accommodation, travel coordination, and post-surgery recovery are common. This is where Ekam provides valuable assistance by helping patients throughout their medical journey in India. From initial consultation and treatment planning to travel support and post-treatment follow-up, Ekam ensures that patients receive coordinated and compassionate care.
              </p>
              <p className="text-gray-700 mt-4">
                A successful kidney transplant surgery India procedure can significantly improve a patient's quality of life. Many patients experience better energy levels, fewer dietary restrictions, greater independence from dialysis, and improved long-term health after transplantation. This guide explains everything international patients should know about kidney transplantation in India, including symptoms, eligibility, treatment procedures, recovery, costs, and long-term care.
              </p>
            </div>

            {/* UNDERSTANDING KIDNEY FAILURE */}
            <section id="understanding-kidney-failure" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6">
                Understanding Kidney Failure
              </h2>
              <h3 className="text-xl font-bold mb-4">What Is Kidney Failure?</h3>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                The kidneys are two bean-shaped organs that are situated close to the lower back. Their primary role is to remove waste products and excess fluids from the bloodstream through urine. They also help maintain electrolyte balance, regulate blood pressure, support bone health, and stimulate red blood cell production. When the kidneys are unable to carry out these tasks efficiently, kidney failure results. This condition may develop suddenly or gradually over time depending on the underlying cause.
              </p>
              <p className="text-gray-700 mb-4 px-1">There are two major types of kidney failure:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">Acute Kidney Failure</h3>
                  <p className="text-gray-700 text-sm">Acute kidney failure occurs suddenly and may develop because of severe infections, dehydration, blood loss, trauma, or medication-related complications. In some cases, acute kidney failure can be treated successfully if detected early.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">Chronic Kidney Disease (CKD)</h3>
                  <p className="text-gray-700 text-sm mb-3">Chronic kidney disease is a progressive condition in which kidney function gradually declines over months or years. Diabetes and high blood pressure are among the most common causes of CKD worldwide. If left untreated, CKD may progress to end-stage renal disease, where dialysis or a renal transplant India procedure becomes necessary.</p>
                  <p className="text-gray-700 text-sm">For many patients, kidney transplantation offers better long-term outcomes and improved quality of life compared to lifelong dialysis treatment.</p>
                </div>
              </div>
            </section>

            {/* EARLY SIGNS AND SYMPTOMS */}
            <section id="early-signs-and-symptoms-of-kidney-failure" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Early Signs and Symptoms of Kidney Failure
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                In its early stages, kidney disease frequently progresses silently. Many patients may not notice symptoms until kidney function becomes severely impaired. Recognising warning signs early can help patients seek timely treatment and reduce the risk of complications.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card
                  icon={<Activity />}
                  title="Fatigue and Weakness"
                  text="One of the earliest symptoms of kidney failure is persistent tiredness and weakness. When the kidneys cannot effectively remove toxins from the body, waste products accumulate in the bloodstream, causing fatigue and reduced energy levels."
                />
                <Card
                  icon={<Brain />}
                  title="Swelling and Fluid Retention"
                  text="Kidney dysfunction can affect the body's ability to regulate fluids properly. As a result, patients may experience swelling in the feet, ankles, legs, hands, or face. This condition is known as edema."
                />
                <Card
                  icon={<ShieldCheck />}
                  title="Shortness of Breath"
                  text="Breathing may become challenging due to fluid accumulation in the lungs. Patients may experience shortness of breath during physical activity or while lying down."
                />
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div className="bg-gradient-to-br from-pink-100 to-purple-50 p-6 rounded-xl shadow">
                  <h3 className="font-bold mb-2">Changes in Urination</h3>
                  <p className="text-sm text-gray-700 mb-3">Patients with kidney failure may notice:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reduced urine output</li>
                    <li>• Frequent urination at night</li>
                    <li>• Dark or foamy urine</li>
                    <li>• Difficulty urinating</li>
                    <li>• Changes in urine smell</li>
                  </ul>
                </div>
                <GradientCard
                  title="Nausea and Vomiting"
                  text="The buildup of toxins in the bloodstream may lead to nausea, vomiting, poor appetite, and weight loss."
                />
                <div className="bg-gradient-to-br from-pink-100 to-purple-50 p-6 rounded-xl shadow">
                  <h3 className="font-bold mb-2">Muscle Cramps and Weakness</h3>
                  <p className="text-sm text-gray-700">Electrolyte imbalances, particularly abnormal potassium levels, can cause muscle cramps, weakness, and irregular heart rhythms.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">High Blood Pressure</h3>
                  <p className="text-sm text-gray-700">The kidneys help regulate blood pressure. Kidney disease can lead to uncontrolled hypertension, which may further worsen kidney damage.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Difficulty Concentrating</h3>
                  <p className="text-sm text-gray-700">Patients may experience memory problems, confusion, and difficulty concentrating because of toxin accumulation in the body.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow mt-6">
                <p className="text-gray-700">If these symptoms persist or worsen, medical evaluation should not be delayed. Early diagnosis and treatment can help slow disease progression and improve treatment outcomes.</p>
              </div>
            </section>

            {/* COMMON CAUSES */}
            <section id="common-causes-of-kidney-failure" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Common Causes of Kidney Failure
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Several health conditions can increase the risk of kidney disease and kidney failure.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Diabetes</h3>
                  <p className="text-sm text-gray-700">One of the main causes of chronic kidney disease in the world is diabetes. High blood sugar levels can gradually damage the blood vessels in the kidneys over time.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">High Blood Pressure</h3>
                  <p className="text-sm text-gray-700">Uncontrolled hypertension puts extra pressure on kidney blood vessels and can impair kidney function.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Polycystic Kidney Disease</h3>
                  <p className="text-sm text-gray-700">This inherited condition causes fluid-filled cysts to develop inside the kidneys, reducing their ability to function normally.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Chronic Infections</h3>
                  <p className="text-sm text-gray-700">Repeated kidney infections or urinary tract infections may lead to long-term kidney damage.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Autoimmune Disorders</h3>
                  <p className="text-sm text-gray-700">Certain autoimmune diseases such as lupus can attack kidney tissues and cause inflammation.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Obesity and Lifestyle Factors</h3>
                  <p className="text-sm text-gray-700">Poor diet, obesity, smoking, and lack of exercise may contribute to kidney disease progression.</p>
                </div>
              </div>
            </section>

            {/* WHEN IS A KIDNEY TRANSPLANT NEEDED */}
            <section id="when-is-a-kidney-transplant-needed" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                When Is a Kidney Transplant Needed?
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                A kidney transplant is usually recommended for patients with end-stage renal disease (ESRD), where kidney function declines severely and dialysis alone is no longer considered the best long-term solution. Dialysis helps remove waste products and excess fluids from the blood artificially, but it cannot fully replace the natural functions of healthy kidneys. Many patients on dialysis experience dietary restrictions, fatigue, limited mobility, and reduced quality of life.
              </p>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500 mb-6">
                <h3 className="font-bold mb-3">A successful kidney transplant in India can offer several benefits:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Improved energy levels</li>
                  <li>• Better physical health</li>
                  <li>• Greater independence</li>
                  <li>• Improved appetite and sleep</li>
                  <li>• Fewer dietary restrictions</li>
                  <li>• Better emotional well-being</li>
                  <li>• Longer life expectancy in many cases</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">Doctors carefully evaluate each patient's medical history, overall health, and transplant suitability before recommending transplantation.</p>
              </div>
            </section>

            {/* WHY INTERNATIONAL PATIENTS CHOOSE INDIA */}
            <section id="why-international-patients-choose-india-for-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Why International Patients Choose India for Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                India has become one of the leading destinations for international patient kidney transplant India services because of its combination of advanced healthcare and affordability.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Modern Hospitals and Technology</h3>
                  <p className="text-sm text-gray-700 mb-2">Many best hospitals for kidney transplant India are equipped with:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Advanced operation theatres</li>
                    <li>• Robotic surgery systems</li>
                    <li>• Dedicated transplant ICUs</li>
                    <li>• Modern diagnostic imaging</li>
                    <li>• Infection-controlled transplant wards</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Experienced Transplant Specialists</h3>
                  <p className="text-sm text-gray-700">India has highly experienced nephrologists and transplant surgeons who regularly perform complex kidney transplant procedures.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Cost-Effective Treatment</h3>
                  <p className="text-sm text-gray-700">Compared to many developed countries, kidney transplant cost India is significantly lower while maintaining advanced treatment standards.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Faster Access to Treatment</h3>
                  <p className="text-sm text-gray-700">Patients often receive quicker consultations, evaluations, and surgical scheduling compared to long waiting periods in some countries.</p>
                </div>
              </div>
            </section>

            {/* ELIGIBILITY FACTORS */}
            <section id="eligibility-factors-for-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Eligibility Factors for Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Not every patient with kidney disease immediately qualifies for a transplant. Before recommending kidney transplant surgery India procedures, doctors perform a detailed medical evaluation to determine whether the patient is physically and medically suitable for transplantation. The goal of this assessment is to improve transplant success rates while minimising surgical and long-term health risks. A kidney transplant can significantly improve quality of life for patients with end-stage renal disease (ESRD), but the patient's overall health condition must be carefully reviewed before surgery.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Kidney Function Assessment</h3>
                  <p className="text-sm text-gray-700 mb-2">The first step in determining transplant eligibility is evaluating kidney function. Patients with severely reduced kidney function or irreversible kidney failure are usually considered potential transplant candidates. Doctors typically assess:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Glomerular filtration rate (GFR)</li>
                    <li>• Creatinine levels</li>
                    <li>• Electrolyte balance</li>
                    <li>• Urine output</li>
                    <li>• Dialysis dependency</li>
                  </ul>
                  <p className="text-sm text-gray-700">Patients who are already undergoing dialysis or approaching end-stage kidney disease are often evaluated for a renal transplant India procedure.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Overall Health Evaluation</h3>
                  <p className="text-sm text-gray-700 mb-2">A kidney transplant is a major surgical procedure, so doctors carefully examine the patient's overall health status. Certain medical conditions may increase surgical risks or affect transplant outcomes. Doctors usually evaluate:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Heart health</li>
                    <li>• Lung function</li>
                    <li>• Liver health</li>
                    <li>• Diabetes management</li>
                    <li>• Blood pressure control</li>
                    <li>• Infection status</li>
                  </ul>
                  <p className="text-sm text-gray-700">Patients with uncontrolled infections or severe cardiovascular disease may require additional treatment before transplantation.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Age and Physical Fitness</h3>
                  <p className="text-sm text-gray-700 mb-2">There is no strict age limit for kidney transplantation. Instead, transplant specialists focus on the patient's physical condition and ability to recover successfully after surgery. Many older patients can still undergo successful kidney transplant in India procedures if their overall health is stable and well-managed.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Psychological Readiness</h3>
                  <p className="text-sm text-gray-700 mb-2">Kidney transplantation requires lifelong follow-up care, medication management, and lifestyle adjustments. Emotional readiness and family support are also important factors during evaluation. Patients and families are often counselled regarding:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Long-term medication adherence</li>
                    <li>• Recovery expectations</li>
                    <li>• Emotional challenges</li>
                    <li>• Lifestyle modifications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* TYPES OF KIDNEY DONORS */}
            <section id="types-of-kidney-donors" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Types of Kidney Donors
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                The availability and suitability of donors are critical to a successful kidney transplant. India offers several transplant options depending on the donor type and medical suitability.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">Living Related Donors</h3>
                  <p className="text-sm text-gray-700 mb-2">Living related donors are often immediate family members such as:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    <li>• Parents</li>
                    <li>• Siblings</li>
                    <li>• Children</li>
                    <li>• Spouse</li>
                  </ul>
                  <p className="text-sm text-gray-700 mb-2">Living donor transplants are commonly preferred because they often provide:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    <li>• Better tissue compatibility</li>
                    <li>• Faster scheduling</li>
                    <li>• Improved transplant survival</li>
                    <li>• Reduced waiting times</li>
                  </ul>
                  <p className="text-sm text-gray-700">Since humans can live healthy lives with one functioning kidney, a healthy donor may donate one kidney safely after thorough medical evaluation.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">Living Unrelated Donors</h3>
                  <p className="text-sm text-gray-700 mb-2">In some situations, donors may include extended family members such as:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    <li>• Cousins</li>
                    <li>• Aunts</li>
                    <li>• Uncles</li>
                    <li>• Nephews</li>
                    <li>• Nieces</li>
                  </ul>
                  <p className="text-sm text-gray-700">Strict legal and ethical regulations apply to unrelated donor transplantation in India.</p>
                </div>
              </div>
            </section>

            {/* ABO-COMPATIBLE */}
            <section id="abo-compatible-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                ABO-Compatible Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                An ABO-compatible kidney transplant is a transplant in which the donor and recipient have matching or medically compatible blood groups. This is considered the most common and preferred type of kidney transplant because it carries a lower risk of rejection and generally offers better long-term outcomes.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">In an ABO-compatible kidney transplant:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• The donor and recipient blood groups are naturally compatible</li>
                    <li>• The risk of antibody-related rejection is lower</li>
                    <li>• Fewer pre-transplant treatments may be required</li>
                    <li>• Recovery and long-term kidney function are often better compared to incompatible transplants</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-3">This type of transplant is widely performed for both domestic and international kidney transplant patients in India.</p>
                </div>
              </div>
            </section>

            {/* DONOR COMPATIBILITY ASSESSMENT */}
            <section id="donor-compatibility-assessment" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Donor Compatibility Assessment
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Before a kidney transplant, doctors perform several compatibility tests to ensure the donor kidney is suitable for the recipient. These tests help reduce rejection risk and improve transplant success. Compatibility testing plays a major role in transplant success. Before surgery, transplant teams perform several tests to reduce rejection risks and improve long-term kidney function.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Blood Group Matching</h3>
                  <p className="text-sm text-gray-700 mb-2">Blood group matching is one of the most important steps in ABO-compatible kidney transplantation. Examples of compatible blood group matching include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Blood group A recipient can receive from A or O donor</li>
                    <li>• Blood group B recipient can receive from B or O donor</li>
                    <li>• Blood group AB recipient can receive from A, B, AB, or O donor</li>
                    <li>• Blood group O recipient can receive only from O donor</li>
                  </ul>
                  <p className="text-sm text-gray-700">Proper blood group compatibility helps improve transplant safety and long-term kidney survival.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Tissue Typing</h3>
                  <p className="text-sm text-gray-700 mb-2">Tissue typing checks how closely the donor and recipient immune systems match. Doctors examine special proteins called HLA (Human Leukocyte Antigens). Tissue typing helps assess compatibility between donor and recipient immune systems. Doctors examine special proteins called HLA antigens that influence transplant success.</p>
                  <p className="text-sm text-gray-700 mb-2">Better tissue compatibility may:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reduce rejection chances</li>
                    <li>• Improve long-term kidney function</li>
                    <li>• Increase transplant success rates</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-2">Better tissue matching may reduce rejection risks and improve long-term kidney survival.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Cross-Matching</h3>
                  <p className="text-sm text-gray-700 mb-2">Cross-matching involves testing donor and recipient blood samples together to detect harmful immune reactions.</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• A negative cross-match usually means the transplant is safer</li>
                    <li>• A positive cross-match may indicate higher rejection risk</li>
                  </ul>
                  <p className="text-sm text-gray-700">This test is essential before proceeding with transplantation. A negative cross-match result generally indicates lower rejection risk and better transplant compatibility.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Antibody Testing</h3>
                  <p className="text-sm text-gray-700 mb-2">Doctors also perform antibody testing to check for donor-specific antibodies in the recipient's blood. Doctors also evaluate donor-specific antibodies that may increase rejection risk. This evaluation helps:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Identify possible immune reactions</li>
                    <li>• Reduce transplant complications</li>
                    <li>• Improve overall transplant outcomes</li>
                  </ul>
                  <p className="text-sm text-gray-700">If antibody levels are high, doctors may recommend additional treatment before surgery.</p>
                </div>
              </div>
            </section>

            {/* ABO-INCOMPATIBLE */}
            <section id="abo-incompatible-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                ABO-Incompatible Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Traditionally, kidney transplantation required matching donor and recipient blood groups. However, advances in transplant medicine now allow ABO-incompatible kidney transplant procedures in selected patients.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Special Medical Treatments</h3>
                  <p className="text-sm text-gray-700">Special medical treatments reduce harmful antibodies before surgery, making the transplant possible even when blood groups differ.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Immunosuppressive Therapies</h3>
                  <p className="text-sm text-gray-700">Immunosuppressive therapies help reduce rejection risks. Advanced monitoring improves safety and outcomes throughout the treatment process.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Broader Access to Transplant</h3>
                  <p className="text-sm text-gray-700">This approach has helped many international patient kidney transplant India cases proceed successfully even when donor blood groups differ.</p>
                </div>
              </div>
            </section>

            {/* MEDICAL TESTS */}
            <section id="medical-tests-before-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Medical Tests Before Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Before kidney transplant surgery India procedures, both donor and recipient undergo extensive medical testing to ensure safety and surgical readiness.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Blood Tests</h3>
                  <p className="text-sm text-gray-700 mb-2">Blood tests help evaluate:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Kidney function</li>
                    <li>• Blood group compatibility</li>
                    <li>• Infection status</li>
                    <li>• Electrolyte levels</li>
                    <li>• Liver function</li>
                    <li>• Blood counts</li>
                  </ul>
                  <p className="text-sm text-gray-700">These tests also help identify conditions that may affect transplant outcomes.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Chest X-Ray</h3>
                  <p className="text-sm text-gray-700 mb-3">A chest X-ray helps assess lung health and identify possible infections or respiratory problems before surgery.</p>
                  <h3 className="font-bold mb-2">Cardiac Evaluation</h3>
                  <p className="text-sm text-gray-700 mb-2">Heart function testing is extremely important because kidney transplant surgery places stress on the cardiovascular system. Tests may include:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• ECG</li>
                    <li>• Echocardiogram</li>
                    <li>• Stress testing</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Kidney Ultrasound with Doppler</h3>
                  <p className="text-sm text-gray-700 mb-3">Ultrasound and Doppler imaging help evaluate kidney anatomy and blood flow. These tests assist surgeons in planning the transplant procedure.</p>
                  <h3 className="font-bold mb-2">CT Scan and MRI</h3>
                  <p className="text-sm text-gray-700 mb-3">Advanced imaging studies such as CT scans and MRI scans provide detailed information about internal organs and blood vessels.</p>
                  <h3 className="font-bold mb-2">Kidney Biopsy</h3>
                  <p className="text-sm text-gray-700">In some situations, a kidney biopsy may be required to assess the condition of kidney tissue or identify transplant-related complications.</p>
                </div>
              </div>
            </section>

            {/* PRE-TRANSPLANT PREPARATION */}
            <section id="pre-transplant-preparation" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Pre-Transplant Preparation
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Proper preparation before transplantation plays an important role in improving surgical outcomes and recovery.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Maintaining Good Overall Health</h3>
                  <p className="text-sm text-gray-700 mb-2">Patients are encouraged to maintain good physical health before surgery by:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Following prescribed medications</li>
                    <li>• Managing blood pressure</li>
                    <li>• Controlling diabetes</li>
                    <li>• Attending dialysis sessions regularly</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Stopping Smoking</h3>
                  <p className="text-sm text-gray-700 mb-2">Smoking increases the risk of:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Lung complications</li>
                    <li>• Heart disease</li>
                    <li>• Poor wound healing</li>
                    <li>• Infection</li>
                  </ul>
                  <p className="text-sm text-gray-700">Doctors strongly advise patients and donors to stop smoking before surgery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Dental Care</h3>
                  <p className="text-sm text-gray-700 mb-3">Dental infections can become serious after transplantation because immunosuppressive medications weaken the immune system. Proper dental care before surgery is essential.</p>
                  <h3 className="font-bold mb-2">Good Hygiene</h3>
                  <p className="text-sm text-gray-700 mb-3">Maintaining good hygiene helps reduce infection risks before and after transplantation.</p>
                  <h3 className="font-bold mb-2">Weight Management</h3>
                  <p className="text-sm text-gray-700">Maintaining a healthy weight improves surgical safety and recovery outcomes.</p>
                </div>
              </div>
            </section>

            {/* DIET MANAGEMENT */}
            <section id="diet-management-before-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Diet Management Before Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Diet management is an important part of kidney failure treatment India programs before transplantation.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Fluid Restrictions</h3>
                  <p className="text-sm text-gray-700 mb-2">Patients with advanced kidney disease may need to limit:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Water intake</li>
                    <li>• Tea and coffee</li>
                    <li>• Soft drinks</li>
                    <li>• Fruit juices</li>
                  </ul>
                  <p className="text-sm text-gray-700">Fluid management helps reduce swelling and blood pressure complications.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Sodium and Salt Control</h3>
                  <p className="text-sm text-gray-700 mb-2">Excess salt intake can worsen fluid retention and high blood pressure. Patients are often advised to avoid:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Processed foods</li>
                    <li>• Pickles</li>
                    <li>• Packaged snacks</li>
                    <li>• High-sodium sauces</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Potassium Management</h3>
                  <p className="text-sm text-gray-700">Abnormal potassium levels can cause serious heart complications. Foods high in potassium may need restriction depending on kidney function.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Protein Intake</h3>
                  <p className="text-sm text-gray-700 mb-2">Protein intake is adjusted carefully based on dialysis status and overall health condition.</p>
                  <p className="text-sm text-gray-700">Dietitians working in affordable kidney transplant India programs provide personalised nutrition guidance to help patients prepare for transplantation safely.</p>
                </div>
              </div>
            </section>

            {/* EMOTIONAL SUPPORT */}
            <section id="emotional-support-before-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Emotional Support Before Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Kidney transplantation can be emotionally challenging for both patients and families. Fear, anxiety, and uncertainty are common during the waiting period.
              </p>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500 mb-6">
                <h3 className="font-bold mb-2">Support from:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Family members</li>
                  <li>• Counsellors</li>
                  <li>• Transplant coordinators</li>
                  <li>• Healthcare teams</li>
                </ul>
                <p className="text-sm text-gray-700 mt-3">can help patients feel more confident and emotionally prepared for surgery.</p>
              </div>
            </section>

            {/* WHY INTERNATIONAL PATIENTS PREFER INDIA FOR PREPARATION */}
            <section id="why-international-patients-prefer-india-for-kidney-transplant-preparation" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Why International Patients Prefer India for Kidney Transplant Preparation
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                India offers comprehensive pre-transplant evaluation programs that help international patients receive:
              </p>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500 mb-6">
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  <li>• Faster medical assessments</li>
                  <li>• Coordinated consultations</li>
                  <li>• Advanced diagnostic testing</li>
                  <li>• Donor evaluation services</li>
                  <li>• Cost-effective treatment planning</li>
                </ul>
                <p className="text-sm text-gray-700">Ekam helps international patients coordinate every stage of the transplant preparation process, including hospital selection, medical reviews, visa assistance, travel arrangements, and accommodation support.</p>
              </div>
            </section>

            {/* KIDNEY TRANSPLANT PROCEDURE */}
            <section id="kidney-transplant-procedure-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Kidney Transplant Procedure in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-4">
                A kidney transplant is a highly specialised surgical procedure in which a healthy kidney from a donor is implanted into a patient whose kidneys are no longer functioning properly. Today, kidney transplant surgery India programs are performed using advanced surgical techniques, modern operation theatres, and specialised transplant teams that focus on patient safety and long-term recovery.
              </p>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                India has become one of the leading destinations for kidney transplant procedures because of its experienced surgeons, modern hospitals, advanced technology, and comprehensive international patient support systems. Many best hospitals for kidney transplant India are equipped with dedicated transplant ICUs, robotic-assisted surgical systems, and highly trained multidisciplinary transplant teams. Before surgery, both donor and recipient undergo detailed medical evaluations to ensure safety and compatibility. Once all tests are completed successfully, the transplant team schedules the procedure.
              </p>
            </section>

            {/* PREPARATION BEFORE KIDNEY TRANSPLANT SURGERY */}
            <section id="preparation-before-kidney-transplant-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Preparation Before Kidney Transplant Surgery
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Final Medical Evaluation</h3>
                  <p className="text-sm text-gray-700 mb-2">Before surgery, doctors conduct final medical assessments to confirm that both donor and recipient are physically ready for the transplant procedure. This evaluation usually includes:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Blood tests</li>
                    <li>• Infection screening</li>
                    <li>• Cardiac evaluation</li>
                    <li>• Blood pressure monitoring</li>
                    <li>• Cross-matching confirmation</li>
                    <li>• Anaesthesia assessment</li>
                  </ul>
                  <p className="text-sm text-gray-700">The transplant team also reviews all imaging studies and compatibility reports carefully.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Counselling and Education</h3>
                  <p className="text-sm text-gray-700 mb-2">Patients and family members are counselled regarding:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Surgical expectations</li>
                    <li>• Recovery timelines</li>
                    <li>• Risks and complications</li>
                    <li>• Lifelong medications</li>
                    <li>• Lifestyle changes after transplant</li>
                  </ul>
                  <p className="text-sm text-gray-700">This counselling process helps reduce anxiety and prepares patients emotionally for the procedure.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Hospital Admission</h3>
                  <p className="text-sm text-gray-700 mb-2">Patients are generally admitted to the hospital one day before surgery. During this period:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Vital signs are monitored</li>
                    <li>• Dialysis may be performed if needed</li>
                    <li>• Fluids and medications are administered</li>
                    <li>• Preoperative preparations begin</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* DONOR KIDNEY REMOVAL */}
            <section id="donor-kidney-removal-procedure" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Donor Kidney Removal Procedure
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                In living donor transplantation, the healthy kidney is removed surgically from the donor before implantation into the recipient.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Laparoscopic Donor Nephrectomy</h3>
                  <p className="text-sm text-gray-700 mb-2">Most affordable kidney transplant India programs now use laparoscopic donor nephrectomy techniques. This minimally invasive procedure involves:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Small incisions</li>
                    <li>• Special surgical instruments</li>
                    <li>• Camera-guided surgery</li>
                  </ul>
                  <p className="text-sm text-gray-700 mb-2">Benefits of laparoscopic kidney removal include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Less postoperative pain</li>
                    <li>• Smaller scars</li>
                    <li>• Faster recovery</li>
                    <li>• Reduced hospital stay</li>
                    <li>• Faster return to daily activities</li>
                  </ul>
                  <p className="text-sm text-gray-700">Many donors are discharged within a few days after surgery and can resume normal routines relatively quickly.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Open Donor Nephrectomy</h3>
                  <p className="text-sm text-gray-700">In rare cases, open surgery may still be performed if medically necessary. However, minimally invasive techniques are now preferred because of lower complications and improved recovery.</p>
                </div>
              </div>
            </section>

            {/* KIDNEY IMPLANTATION */}
            <section id="kidney-implantation-procedure" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Kidney Implantation Procedure
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                During kidney transplant surgery India procedures:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Surgical Placement of the Donor Kidney</h3>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• The donor kidney is usually placed in the lower abdomen</li>
                    <li>• Blood vessels from the donor kidney are connected to the recipient's iliac blood vessels</li>
                    <li>• The ureter is connected to the bladder</li>
                  </ul>
                  <p className="text-sm text-gray-700">Interestingly, the patient's original kidneys are often left in place unless there is a specific medical reason to remove them.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Blood Flow Restoration</h3>
                  <p className="text-sm text-gray-700">Once the blood vessels are connected, blood circulation begins flowing into the transplanted kidney. In many cases, the transplanted kidney starts producing urine soon after surgery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Duration of Surgery</h3>
                  <p className="text-sm text-gray-700 mb-2">The complete kidney transplant procedure generally takes several hours depending on:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Surgical complexity</li>
                    <li>• Patient anatomy</li>
                    <li>• Donor compatibility</li>
                    <li>• Previous surgeries</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ROBOTIC-ASSISTED */}
            <section id="robotic-assisted-kidney-transplant-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Robotic-Assisted Kidney Transplant Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Many best hospitals for kidney transplant India now offer robotic-assisted kidney transplantation for selected patients.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">What Is Robotic Kidney Transplant?</h3>
                  <p className="text-sm text-gray-700">Robotic-assisted transplantation uses advanced robotic surgical systems controlled by experienced surgeons. Small incisions and robotic instruments allow surgeons to perform delicate movements with enhanced precision.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Benefits of Robotic Surgery</h3>
                  <p className="text-sm text-gray-700 mb-2">Robotic-assisted procedures may offer:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Smaller surgical incisions</li>
                    <li>• Reduced blood loss</li>
                    <li>• Less postoperative pain</li>
                    <li>• Faster recovery</li>
                    <li>• Shorter hospital stay</li>
                    <li>• Better cosmetic outcomes</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Who Can Benefit from Robotic Kidney Transplant?</h3>
                  <p className="text-sm text-gray-700 mb-2">Robotic surgery may be particularly beneficial for:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Obese patients</li>
                    <li>• Younger patients</li>
                    <li>• Patients seeking minimally invasive procedures</li>
                  </ul>
                  <p className="text-sm text-gray-700">However, suitability depends on individual medical conditions and surgeon recommendations.</p>
                </div>
              </div>
            </section>

            {/* INTENSIVE CARE AND IMMEDIATE POSTOPERATIVE RECOVERY */}
            <section id="intensive-care-and-immediate-postoperative-recovery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Intensive Care and Immediate Postoperative Recovery
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Transplant ICU Monitoring</h3>
                  <p className="text-sm text-gray-700 mb-2">After surgery, patients are shifted to a dedicated transplant ICU where they are monitored closely for:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Blood pressure stability</li>
                    <li>• Kidney function</li>
                    <li>• Urine output</li>
                    <li>• Oxygen levels</li>
                    <li>• Fluid balance</li>
                    <li>• Signs of bleeding or infection</li>
                  </ul>
                  <p className="text-sm text-gray-700">Special transplant ICUs help reduce infection risks and allow continuous observation during the critical recovery phase.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Pain Management</h3>
                  <p className="text-sm text-gray-700">Pain management is carefully monitored after surgery. Doctors provide medications to help patients remain comfortable during recovery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Fluid Intake and Monitoring</h3>
                  <p className="text-sm text-gray-700 mb-2">The transplant team carefully measures:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Fluid intake</li>
                    <li>• Urine output</li>
                    <li>• Drain output</li>
                    <li>• Body weight</li>
                  </ul>
                  <p className="text-sm text-gray-700">These measurements help doctors assess how well the transplanted kidney is functioning.</p>
                </div>
              </div>
            </section>

            {/* HOSPITAL RECOVERY */}
            <section id="hospital-recovery-after-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Hospital Recovery After Kidney Transplant
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Gradual Mobilisation</h3>
                  <p className="text-sm text-gray-700 mb-2">Patients are usually encouraged to begin gentle movement within a day or two after surgery. Early mobilisation helps:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Improve circulation</li>
                    <li>• Reduce blood clot risks</li>
                    <li>• Improve lung function</li>
                    <li>• Support faster recovery</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Dietary Progression</h3>
                  <p className="text-sm text-gray-700">Initially, patients may begin with liquid diets before gradually transitioning to normal food depending on recovery progress.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Removal of Tubes and Drains</h3>
                  <p className="text-sm text-gray-700 mb-2">As recovery improves:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Urinary catheters are removed</li>
                    <li>• Surgical drains are removed</li>
                    <li>• Monitoring lines are discontinued</li>
                  </ul>
                  <p className="text-sm text-gray-700">Most patients remain hospitalised for approximately one week, although recovery times vary depending on overall health and complications.</p>
                </div>
              </div>
            </section>

            {/* IMMUNOSUPPRESSIVE MEDICATIONS */}
            <section id="immunosuppressive-medications-after-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Immunosuppressive Medications After Transplant
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Why Are Immunosuppressants Necessary?</h3>
                  <p className="text-sm text-gray-700">The body's immune system naturally recognises the transplanted kidney as foreign tissue and may attempt to reject it. Immunosuppressive medications help reduce this immune response.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Lifelong Medication Requirement</h3>
                  <p className="text-sm text-gray-700 mb-2">Kidney transplant recipients usually require lifelong immunosuppressive treatment to maintain kidney function and prevent rejection. Doctors monitor medication levels carefully to balance:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Rejection prevention</li>
                    <li>• Infection risk</li>
                    <li>• Medication side effects</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* RISKS AND COMPLICATIONS */}
            <section id="risks-and-complications-of-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Risks and Complications of Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Although kidney transplantation offers significant benefits, it also carries certain risks that patients should understand.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Surgical Risks</h3>
                  <p className="text-sm text-gray-700 mb-2">Possible complications include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Bleeding</li>
                    <li>• Infection</li>
                    <li>• Blood clots</li>
                    <li>• Anaesthesia-related complications</li>
                    <li>• Delayed kidney function</li>
                  </ul>
                  <p className="text-sm text-gray-700">Experienced transplant teams work carefully to minimise these risks.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Organ Rejection</h3>
                  <p className="text-sm text-gray-700 mb-2">Rejection occurs when the immune system attacks the transplanted kidney.</p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Acute Rejection</p>
                  <p className="text-sm text-gray-700 mb-2">This may occur suddenly and requires immediate medical treatment.</p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Chronic Rejection</p>
                  <p className="text-sm text-gray-700 mb-2">This develops gradually over time and may affect long-term kidney function.</p>
                  <p className="text-sm text-gray-700">Regular monitoring and proper medication adherence help reduce rejection risks.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Infection Risk</h3>
                  <p className="text-sm text-gray-700 mb-2">Because immunosuppressive medications weaken the immune system, transplant patients become more vulnerable to infections. Doctors advise patients regarding:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Hygiene practices</li>
                    <li>• Food safety</li>
                    <li>• Vaccination guidance</li>
                    <li>• Infection prevention measures</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LONG-TERM MONITORING */}
            <section id="long-term-monitoring-after-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Long-Term Monitoring After Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Long-term follow-up care is essential for successful kidney transplant outcomes.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Regular Medical Checkups</h3>
                  <p className="text-sm text-gray-700 mb-2">Patients require ongoing monitoring of:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kidney function</li>
                    <li>• Blood pressure</li>
                    <li>• Medication levels</li>
                    <li>• Electrolytes</li>
                    <li>• Blood sugar</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Lifestyle Changes</h3>
                  <p className="text-sm text-gray-700 mb-2">Healthy habits after transplantation include:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Balanced diet</li>
                    <li>• Regular exercise</li>
                    <li>• Smoking cessation</li>
                    <li>• Weight management</li>
                    <li>• Proper hydration</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Emotional and Psychological Support</h3>
                  <p className="text-sm text-gray-700">Adjusting to life after transplantation can sometimes feel emotionally challenging. Counselling and family support help patients adapt successfully.</p>
                </div>
              </div>
            </section>

            {/* BENEFITS OF SUCCESSFUL KIDNEY TRANSPLANT */}
            <section id="benefits-of-successful-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Benefits of Successful Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                A successful kidney transplant in India can dramatically improve quality of life.
              </p>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500 mb-6">
                <h3 className="font-bold mb-3">Many patients experience:</h3>
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  <li>• Freedom from regular dialysis</li>
                  <li>• Better energy levels</li>
                  <li>• Improved appetite</li>
                  <li>• Greater physical activity</li>
                  <li>• Better sleep quality</li>
                  <li>• Improved emotional well-being</li>
                  <li>• Ability to travel and work normally</li>
                </ul>
                <p className="text-sm text-gray-700">For many patients, transplantation offers the opportunity to return to a healthier and more active lifestyle.</p>
              </div>
            </section>

            {/* INTERNATIONAL PATIENT SUPPORT THROUGH EKAM */}
            <section id="international-patient-support-through-ekam" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                International Patient Support Through Ekam
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Ekam supports international patients throughout the transplant journey by helping with:
              </p>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  <li>• Hospital coordination</li>
                  <li>• Doctor consultations</li>
                  <li>• Treatment planning</li>
                  <li>• Medical visa support</li>
                  <li>• Accommodation assistance</li>
                  <li>• Airport transfers</li>
                  <li>• Post-treatment follow-up</li>
                </ul>
                <p className="text-sm text-gray-700">This coordinated support helps reduce stress for patients and families travelling to India for treatment.</p>
              </div>
            </section>

            {/* KIDNEY TRANSPLANT COST */}
            <section id="kidney-transplant-cost-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Kidney Transplant Cost in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                One of the primary reasons international patients choose kidney transplant in India is the affordability of treatment compared to many developed countries. India offers advanced transplant care, highly experienced specialists, modern hospitals, and comprehensive postoperative support at a significantly lower cost than countries such as the United States, the United Kingdom, Canada, or several European nations. The availability of affordable kidney transplant India programs allows patients from across the world to access life-saving treatment without the extremely high expenses often associated with transplantation abroad.
              </p>

              <h3 className="text-xl font-bold mb-4">Kidney Transplant Cost in India Compared to Other Countries (USD)</h3>
              <p className="text-sm text-gray-600 mb-4">India has become one of the most affordable and trusted destinations for kidney transplant treatment for international patients. Compared to countries like the USA, UK, Singapore, UAE, and Thailand, the cost of kidney transplant in India is significantly lower while still offering advanced medical infrastructure, experienced transplant surgeons, and high success rates.</p>
              <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                      <th className="p-4 text-left font-bold">Country</th>
                      <th className="p-4 text-left font-bold">Estimated Kidney Transplant Cost (USD)</th>
                      <th className="p-4 text-left font-bold">Approximate Savings Compared to USA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["India", "$11,000 – $28,000", "Up to 90% Lower"],
                      ["United States", "$150,000 – $400,000", "—"],
                      ["United Kingdom", "$60,000 – $120,000", "60–80% Lower"],
                      ["Turkey", "$16,000 – $45,000", "70–85% Lower"],
                      ["Thailand", "$25,000 – $50,000", "60–75% Lower"],
                      ["Singapore", "$50,000 – $80,000", "50–70% Lower"],
                      ["UAE / Dubai", "$40,000 – $70,000", "50–70% Lower"],
                      ["Germany", "$70,000 – $120,000", "60–80% Lower"],
                      ["South Korea", "$40,000 – $70,000", "50–70% Lower"],
                    ].map(([country, cost, saving], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-pink-50" : "bg-white"}>
                        <td className="p-4 font-medium">{country}</td>
                        <td className="p-4 text-pink-700 font-semibold">{cost}</td>
                        <td className="p-4 text-gray-600">{saving}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic mb-6">For personalised treatment planning and cost estimation, patients should consult trusted medical facilitators such as Ekam for complete international patient assistance.</p>

              <h3 className="text-xl font-bold mb-4">Factors Affecting Kidney Transplant Cost India</h3>
              <p className="text-sm text-gray-600 mb-4">The total cost of kidney transplant treatment can vary depending on several medical and non-medical factors.</p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Hospital and Infrastructure</h3>
                  <p className="text-sm text-gray-700">Premium hospitals with advanced transplant centres, robotic surgery systems, and specialised ICUs may have higher treatment costs compared to standard facilities. However, these hospitals also provide advanced technology and highly specialised care.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Type of Transplant Procedure</h3>
                  <p className="text-sm text-gray-700 mb-2">The overall cost may differ based on:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Living donor transplant</li>
                    <li>• Deceased donor transplant</li>
                    <li>• ABO-incompatible transplant</li>
                    <li>• Robotic-assisted transplant</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-2">More complex procedures often require additional investigations, medications, and monitoring.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Pre-Transplant Evaluation</h3>
                  <p className="text-sm text-gray-700 mb-2">Before surgery, both donor and recipient undergo extensive testing, including:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Blood tests</li>
                    <li>• Tissue typing</li>
                    <li>• Imaging studies</li>
                    <li>• Cardiac evaluation</li>
                    <li>• Infection screening</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-2">These diagnostic assessments contribute to the overall treatment expense.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Hospital Stay and ICU Care</h3>
                  <p className="text-sm text-gray-700">The duration of ICU monitoring and hospital recovery also affects the final cost. Patients requiring longer observation or additional medical management may experience increased expenses.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Immunosuppressive Medications</h3>
                  <p className="text-sm text-gray-700">After transplantation, patients require lifelong immunosuppressive medicines to prevent organ rejection. Medication costs continue after discharge and form an important part of long-term treatment planning.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Follow-Up Care</h3>
                  <p className="text-sm text-gray-700">Regular consultations, blood tests, imaging, and monitoring are necessary after surgery to ensure healthy kidney function and early detection of complications.</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Why India Is Affordable for Kidney Transplant Treatment</h3>
              <p className="text-sm text-gray-600 mb-4">India has become a leading destination for medical tourism India services because of its ability to provide high-quality healthcare at comparatively lower costs.</p>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <p className="text-sm text-gray-700 mb-2">Several factors contribute to this affordability:</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-2">
                  <li>• Lower hospital operational costs</li>
                  <li>• Competitive healthcare infrastructure</li>
                  <li>• Skilled medical workforce</li>
                  <li>• Reduced administrative expenses</li>
                  <li>• Currency exchange advantages for international patients</li>
                </ul>
                <p className="text-sm text-gray-700">Despite the lower cost structure, many best hospitals for kidney transplant India maintain international standards of patient care and advanced medical technology.</p>
              </div>
            </section>

            {/* INTERNATIONAL PATIENT SUPPORT IN INDIA */}
            <section id="international-patient-support-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                International Patient Support in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Travelling abroad for major surgery can feel stressful for patients and families. International patients often need support with:
              </p>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500 mb-6">
                <ul className="text-sm text-gray-700 space-y-1 mb-3">
                  <li>• Hospital selection</li>
                  <li>• Doctor consultations</li>
                  <li>• Medical visas</li>
                  <li>• Accommodation</li>
                  <li>• Language assistance</li>
                  <li>• Travel coordination</li>
                  <li>• Post-treatment recovery</li>
                </ul>
                <p className="text-sm text-gray-700">This is where Ekam provides complete assistance throughout the treatment journey.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Personalised Treatment Coordination</h3>
                  <p className="text-sm text-gray-700 mb-2">Ekam helps international patients connect with experienced nephrologists and transplant specialists across India based on:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Medical condition</li>
                    <li>• Treatment requirements</li>
                    <li>• Budget preferences</li>
                    <li>• Location preferences</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Medical Visa Assistance</h3>
                  <p className="text-sm text-gray-700">Patients travelling for kidney failure treatment India services often require medical visas and supporting documentation. Ekam assists with the visa process to help reduce delays and confusion.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Travel and Accommodation Support</h3>
                  <p className="text-sm text-gray-700 mb-2">The platform also helps patients arrange:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Airport pickup</li>
                    <li>• Hotel accommodation</li>
                    <li>• Local transportation</li>
                    <li>• Translation assistance</li>
                  </ul>
                  <p className="text-sm text-gray-700">This support helps international patients focus on recovery instead of logistical challenges.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Post-Treatment Follow-Up</h3>
                  <p className="text-sm text-gray-700 mb-2">After surgery, patients continue receiving support for:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Follow-up consultations</li>
                    <li>• Medical reports</li>
                    <li>• Recovery coordination</li>
                    <li>• Ongoing communication with hospitals</li>
                  </ul>
                </div>
              </div>

              {/* Patient Journey Steps */}
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500 mt-6">
                <h3 className="font-bold mb-4">Patient Journey for Kidney Transplant in India</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-bold text-pink-700 mb-2">Step 1: Online Medical Consultation</p>
                    <p className="text-sm text-gray-700">Patients share MRI scans, medical history, and symptoms. A kidney transplant specialist reviews reports and provides a treatment plan.</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-bold text-pink-700 mb-2">Step 2: Personalised Treatment Plan</p>
                    <p className="text-sm text-gray-700 mb-1">The team recommends either:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Non-surgical management</li>
                      <li>• Standard transplant procedure</li>
                      <li>• Robotic-assisted transplantation</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-bold text-pink-700 mb-2">Step 3: Travel and Hospital Admission</p>
                    <p className="text-sm text-gray-700 mb-1">Assistance may include:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Visa documentation</li>
                      <li>• Airport pickup</li>
                      <li>• Hospital admission coordination</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-bold text-pink-700 mb-2">Step 4: Surgery and Recovery</p>
                    <p className="text-sm text-gray-700">Procedure is performed under advanced monitoring systems followed by structured rehabilitation.</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-bold text-pink-700 mb-2">Step 5: Post-Discharge Follow-Up</p>
                    <p className="text-sm text-gray-700 mb-1">Patients receive:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Online follow-up consultations</li>
                      <li>• Rehabilitation guidance</li>
                      <li>• Long-term kidney health advice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* LIFE AFTER KIDNEY TRANSPLANT */}
            <section id="life-after-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Life After Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                A patient's quality of life can be greatly enhanced with a successful kidney transplant. Many transplant recipients experience freedom from dialysis and regain the ability to return to daily activities, work, and social life. However, maintaining long-term transplant success requires continuous medical care and healthy lifestyle habits.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Freedom from Dialysis</h3>
                  <p className="text-sm text-gray-700">One of the biggest benefits of successful kidney transplant surgery India procedures is reduced dependence on dialysis. Patients no longer need to spend multiple hours every week undergoing dialysis sessions.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Improved Energy Levels</h3>
                  <p className="text-sm text-gray-700 mb-2">Many patients experience:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Increased physical energy</li>
                    <li>• Reduced fatigue</li>
                    <li>• Better concentration</li>
                    <li>• Improved emotional well-being</li>
                  </ul>
                  <p className="text-sm text-gray-700">This often allows patients to resume work, travel, and family activities more comfortably.</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Fewer Dietary Restrictions</h3>
                  <p className="text-sm text-gray-700">While some dietary precautions remain necessary, many patients enjoy greater flexibility in their food and fluid intake after successful transplantation.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Improved Physical and Emotional Health</h3>
                  <p className="text-sm text-gray-700 mb-2">Successful transplantation often helps improve:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sleep quality</li>
                    <li>• Appetite</li>
                    <li>• Physical mobility</li>
                    <li>• Mental health</li>
                    <li>• Confidence and independence</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* LIFESTYLE CHANGES */}
            <section id="lifestyle-changes-after-kidney-transplant" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Lifestyle Changes After Kidney Transplant
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Long-term transplant success depends greatly on healthy lifestyle habits and proper medical follow-up.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Medication Adherence</h3>
                  <p className="text-sm text-gray-700">Patients must take prescribed immunosuppressive medicines exactly as directed. Missing medications can increase the risk of organ rejection.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Regular Medical Monitoring</h3>
                  <p className="text-sm text-gray-700 mb-2">Routine follow-up appointments help doctors monitor:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kidney function</li>
                    <li>• Blood pressure</li>
                    <li>• Blood sugar</li>
                    <li>• Medication levels</li>
                    <li>• Signs of infection or rejection</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Healthy Diet</h3>
                  <p className="text-sm text-gray-700 mb-2">A balanced diet helps support kidney function and overall health. Dietitians may recommend:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reduced salt intake</li>
                    <li>• Controlled sugar consumption</li>
                    <li>• Adequate hydration</li>
                    <li>• Healthy protein balance</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Exercise and Weight Management</h3>
                  <p className="text-sm text-gray-700 mb-2">Regular physical activity helps improve:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Cardiovascular health</li>
                    <li>• Muscle strength</li>
                    <li>• Weight control</li>
                    <li>• Overall recovery</li>
                  </ul>
                  <p className="text-sm text-gray-700">Patients should follow exercise plans approved by their doctors.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Infection Prevention</h3>
                  <p className="text-sm text-gray-700 mb-2">Immunosuppressive medications weaken the immune system, increasing infection risks. Patients are advised to:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Maintain hygiene</li>
                    <li>• Avoid contaminated food</li>
                    <li>• Stay updated on vaccinations</li>
                    <li>• Seek medical attention for fever or illness</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* KIDNEY TRANSPLANT SURGEONS */}
            <section id="kidney-transplant-surgeons-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Kidney Transplant Surgeons in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-8">
                India is trusted globally for its highly skilled kidney transplant surgeons in India who deliver advanced and successful transplant care for patients from around the world. Every kidney transplant specialist in India combines years of expertise with cutting-edge technology to manage complex kidney transplant procedures safely and effectively. Through Ekam, international patients can access expert doctors, top hospitals, and affordable transplant treatment in India.
              </p>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-pink-600 mb-6">Doctor's Profile</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Dr. Rajesh Ahlawat */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-pink-500">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-20 sm:w-24 md:w-24 lg:w-24 flex items-center justify-center bg-pink-200 rounded-full mr-4 overflow-hidden">
                        <Image
                          src="/doctor/dr-rajesh-ahlawat.png"
                          alt="Dr. (Prof.) Rajesh Ahlawat"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Dr. (Prof.) Rajesh Ahlawat</h4>
                        <p className="text-pink-700 font-semibold mb-1 text-sm">Leading Kidney Transplant Surgeon in India</p>
                        <p className="text-gray-800 text-sm mb-2">Group Chairman – Urology & Kidney Transplant | Max Healthcare</p>
                        <p className="text-gray-700 text-sm mb-2">MBBS | 40+ years of experience | Kidney Transplant Surgery | Robotic Kidney Transplant | Urology & Uro-Oncology | Minimally Invasive Urology | Robotic Surgery</p>
                        <p className="text-gray-600 text-sm">Dr. (Prof.) Rajesh Ahlawat is one of the most renowned Kidney Transplant Surgeons in India, known for his expertise in robotic kidney transplant, urology, and minimally invasive surgery. He is internationally recognized for performing the world's first robotic kidney transplant with regional hypothermia. With 40+ years of experience, Dr. Rajesh Ahlawat has successfully performed thousands of complex kidney transplant and urological procedures. Patients from India and abroad choose Dr. Rajesh Ahlawat for advanced kidney transplant treatment due to his vast experience, high success rates, and patient-focused care.</p>
                      </div>
                    </div>
                  </div>
                  {/* Dr. Prasad Dandekar */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-20 sm:w-24 md:w-24 lg:w-24 flex items-center justify-center bg-purple-200 rounded-full mr-4 overflow-hidden">
                        <Image
                          src="/doctor/dr-prasad-dandekar.png"
                          alt="Dr. Prasad Dandekar"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">Dr. Prasad Dandekar</h4>
                        <p className="text-purple-700 font-semibold mb-1 text-sm">Kidney Transplant Specialist in India</p>
                        <p className="text-gray-700 text-sm mb-2">Consultant – Nephrology and Kidney Transplant | Yatharth Hospitals, Greater Noida</p>
                        <p className="text-gray-700 text-sm mb-2">8+ years of experience | Kidney Transplant Treatment | Nephrology & Renal Care | Dialysis Procedures | Interventional Nephrology | Chronic Kidney Disease Management</p>
                        <p className="text-gray-600 text-sm">Dr. Prasad Dandekar is a skilled and experienced nephrologist recognized among trusted Kidney Transplant Surgeons in India for advanced kidney care and renal transplant management. He has received advanced training from leading institutions including Medanta and Fortis Hospitals, ensuring comprehensive and patient-focused kidney care. Dr. Prasad Dandekar is known for delivering personalized treatment plans and advanced renal care for both domestic and international patients seeking quality kidney transplant treatment in India.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* KIDNEY TRANSPLANT SUCCESS RATES */}
            <section id="kidney-transplant-success-rates" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Kidney Transplant Success Rates
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Advances in transplant medicine have significantly improved kidney transplant success rates over the years.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Living Donor Success Rates</h3>
                  <p className="text-sm text-gray-700 mb-2">Living donor kidney transplants generally provide excellent outcomes because of better compatibility and reduced waiting times. Many patients experience:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Strong kidney function</li>
                    <li>• Long-term graft survival</li>
                    <li>• Better recovery outcomes</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Long-Term Survival</h3>
                  <p className="text-sm text-gray-700">With proper care and regular monitoring, transplanted kidneys can function successfully for many years. Many patients continue living healthy and productive lives long after transplantation.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Importance of Follow-Up Care</h3>
                  <p className="text-sm text-gray-700 mb-2">Long-term success depends on:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Regular medical monitoring</li>
                    <li>• Healthy lifestyle choices</li>
                    <li>• Medication adherence</li>
                    <li>• Early detection of complications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="frequently-asked-questions" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Frequently Asked Questions (FAQs)
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                <div className="space-y-6">
                  {[
                    {
                      q: "Is kidney transplant in India safe for international patients?",
                      a: "Yes, many Indian hospitals follow international healthcare standards and offer advanced transplant care with experienced specialists.",
                    },
                    {
                      q: "How long does kidney transplant recovery take?",
                      a: "Initial recovery usually takes several weeks, although complete healing and long-term adjustment may take a few months.",
                    },
                    {
                      q: "Can patients travel after kidney transplant?",
                      a: "Yes, many patients can travel after recovery, but doctors usually recommend waiting until health stabilises completely.",
                    },
                    {
                      q: "Are robotic kidney transplants available in India?",
                      a: "Yes, several advanced hospitals offer robotic-assisted kidney transplant procedures for eligible patients.",
                    },
                    {
                      q: "How long should international patients stay in India?",
                      a: "The required stay depends on medical condition and recovery progress, but patients are often advised to remain in India for several weeks after surgery.",
                    },
                    {
                      q: "Is dialysis required after transplant?",
                      a: "Successful transplantation often eliminates the need for dialysis.",
                    },
                    {
                      q: "What support does Ekam provide?",
                      a: "Ekam assists with hospital selection, doctor consultations, travel planning, visa support, accommodation, and follow-up care.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
                    >
                      <h3 className="text-lg font-bold text-pink-700 mb-3">{faq.q}</h3>
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CONCLUSION */}
            <div className="bg-white p-6 rounded-xl shadow mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 mb-4">
                Kidney transplant in India has become a trusted and effective solution for patients suffering from end-stage kidney disease. With advanced hospitals, experienced transplant specialists, modern surgical techniques, and affordable healthcare services, India continues to attract international patients seeking high-quality renal care.
              </p>
              <p className="text-gray-700 mb-4">
                From pre-transplant evaluation and donor compatibility testing to surgery, recovery, and long-term follow-up, patients receive comprehensive care throughout their treatment journey. Affordable kidney transplant India programs provide hope for patients seeking life-saving treatment without the financial burden often associated with transplantation in many other countries.
              </p>
              <p className="text-gray-700 mb-4">
                With the support of Ekam, international patients can receive personalised assistance at every stage of their medical journey, making treatment in India more comfortable, organised, and accessible.
              </p>
              <p className="text-gray-700">
                If you are exploring kidney failure treatment India options or searching for the best hospitals for kidney transplant India, contact Ekam today to begin your journey toward advanced and affordable kidney care in India.
              </p>
            </div>

            <CTA />
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-3 order-1">
            <div className="sticky top-25 flex flex-col gap-2 bg-gray-100 rounded-xl shadow">
              <ContactForm />
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* COMPONENTS */
const Card = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
    <div className="text-pink-600 mb-3">{icon}</div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
);

const GradientCard = ({ title, text }) => (
  <div className="bg-gradient-to-br from-pink-100 to-purple-50 p-6 rounded-xl shadow">
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-sm text-gray-700">{text}</p>
  </div>
);

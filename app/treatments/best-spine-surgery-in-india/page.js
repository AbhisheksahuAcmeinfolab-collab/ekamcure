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
  title:
    "Best Spine Surgery in India | Advanced Minimally Invasive Spine Treatment",
  description:
    "Explore comprehensive spine surgery in India including minimally invasive procedures, spinal fusion, disc replacement, recovery, risks, success rate, and expert spine surgeons. Get advanced treatment with personalized care.",
};

export default function BestSpineSurgeryInIndia() {
  return (
    <>
      <Script
        id="spine-surgery-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is the success rate of spine surgery in India?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Success depends on the procedure and condition treated. Surgeries such as discectomy and decompression generally show favorable outcomes when patients are properly selected and rehabilitation is followed.",
                },
              },
              {
                "@type": "Question",
                name: "How long does spine surgery recovery take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recovery varies by procedure. Minimally invasive surgeries may allow faster recovery, while fusion surgeries require longer healing time due to bone fusion.",
                },
              },
              {
                "@type": "Question",
                name: "Can spine surgery completely cure back pain?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Spine surgery primarily treats structural causes of pain and nerve compression. While many patients experience significant relief, complete elimination of back pain is not guaranteed in all cases.",
                },
              },
            ],
          }),
        }}
      />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
        {/* HERO */}
        <div className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white py-20 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Best Spine Surgery in India
          </h1>
          
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
                  "Why Spine Surgery Is Needed",
                  "Reasons for Spine Surgery",
                  "Symptoms That Require Spine Surgery",
                  "Causes of Spine Disorders",
                  "Non-Surgical vs Surgical Spine Treatment",
                  "Spine Surgery Cost in India",
                  "Different Types of Spine Surgery in India",
                  "Open Spine Surgery Techniques",
                  "Minimally Invasive Spine Surgery",
                  "Spinal Fusion Surgery",
                  "Disc Replacement Surgery",
                  "Laminectomy Surgery",
                  "Discectomy Spine Surgery",
                  "Scoliosis Spine Surgery",
                  "Cervical Spine Surgery",
                  "Lumbar Spine Surgery",
                  "Spine Surgery Success Rate in India",
                  "Spine Surgery Recovery Rate",
                  "Maintaining Spine Health After Surgery",
                  "Best Doctor for Spine Surgery in India",
                  "Spine Specialist Doctor India",
                  "Best Hospital for Spine Surgery in India",
                  "International Patient Care Facilities",
                  "When to Consult a Spine Specialist Immediately",
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

            {/* INTRO PARAGRAPH */}
            <div className="bg-white p-6 rounded-xl shadow mb-10">
              <p className="text-gray-700">
                The spine is one of the most important structures in the human body. It supports posture, allows movement, and protects the spinal cord — the central communication pathway between the brain and the rest of the body. When spinal conditions disrupt this structure, they can lead to persistent pain, weakness, numbness, or reduced mobility.
              </p>
              <p className="text-gray-700 mt-4">
                Best Spine Surgery in India has become a preferred treatment option for patients seeking advanced surgical care, experienced spine specialists, and modern medical infrastructure. India offers comprehensive spinal treatment ranging from minimally invasive procedures to complex deformity correction surgeries.
              </p>
              <p className="text-gray-700 mt-4">
                This complete guide explains why spine surgery is needed, common conditions requiring surgery, available procedures, recovery expectations, potential risks, and how to choose the right spine surgeon and hospital in India.
              </p>
            </div>

            {/* WHY SPINE SURGERY IS NEEDED */}
            <section id="why-spine-surgery-is-needed" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6">
                Why Spine Surgery Is Needed
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Spine surgery is generally recommended only after non-surgical treatments fail to provide adequate relief. According to globally accepted orthopedic and neurosurgical guidelines, surgery becomes necessary when structural spine problems cause persistent symptoms or neurological compromise.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">Failure of Conservative Back Pain Treatments</h3>
                  <p className="text-gray-700 text-sm mb-3">Most spine conditions are initially treated with non-surgical methods such as:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Physical therapy</li>
                    <li>• Pain medications</li>
                    <li>• Anti-inflammatory drugs</li>
                    <li>• Activity modification</li>
                    <li>• Epidural steroid injections</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-3">When these treatments do not relieve pain or restore function over a reasonable period, surgical intervention may be considered.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">Progressive Nerve Compression and Weakness</h3>
                  <p className="text-gray-700 text-sm mb-3">The spinal cord and nerve roots can become compressed due to disc herniation, spinal stenosis, or bone overgrowth. Progressive nerve compression may lead to:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Radiating pain into arms or legs</li>
                    <li>• Muscle weakness</li>
                    <li>• Loss of sensation</li>
                    <li>• Impaired coordination</li>
                  </ul>
                  <p className="text-sm text-gray-700 mt-3">If nerve damage worsens over time, early surgery may help prevent permanent neurological deficits.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">Severe Spinal Instability or Deformity</h3>
                  <p className="text-gray-700 text-sm">Spinal instability occurs when vertebrae move abnormally, often due to trauma, degeneration, or deformity. Conditions such as scoliosis or spondylolisthesis may require surgical correction to restore stability and alignment.</p>
                </div>
              </div>
            </section>

            {/* REASONS FOR SPINE SURGERY */}
            <section id="reasons-for-spine-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Reasons for Spine Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Different medical conditions may require surgical treatment depending on severity and progression.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card
                  icon={<Activity />}
                  title="Herniated Disc and Spinal Stenosis"
                  text="A herniated disc occurs when the soft inner material of a spinal disc protrudes and presses against nearby nerves. Spinal stenosis refers to narrowing of the spinal canal, which compresses nerves and may cause difficulty walking. Surgery may be recommended if pain persists despite conservative therapy, leg weakness develops, or daily activities become restricted."
                />
                <Card
                  icon={<Brain />}
                  title="Degenerative Disc Disease"
                  text="With aging, spinal discs lose hydration and elasticity. Degeneration may cause chronic back pain or instability. In advanced cases, surgical procedures such as fusion or disc replacement may be considered."
                />
                <Card
                  icon={<ShieldCheck />}
                  title="Spine Fractures, Trauma, or Tumors"
                  text="Spinal trauma from accidents or falls can cause fractures requiring stabilization. In rare cases, spinal tumors may compress nerves or weaken vertebrae, necessitating surgical removal or reconstruction."
                />
              </div>
            </section>

            {/* SYMPTOMS */}
            <section id="symptoms-that-require-spine-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Symptoms That Require Spine Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Not all back pain requires surgery. However, certain symptoms indicate the need for urgent evaluation.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <GradientCard
                  title="Chronic Back or Neck Pain"
                  text="Persistent pain lasting several months and not responding to treatment may require surgical assessment, especially if imaging shows structural damage."
                />
                <div className="bg-gradient-to-br from-pink-100 to-purple-50 p-6 rounded-xl shadow">
                  <h3 className="font-bold mb-2">Numbness, Tingling, or Limb Weakness</h3>
                  <p className="text-sm text-gray-700 mb-3">Neurological symptoms such as:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-3">
                    <li>• Weak grip strength</li>
                    <li>• Leg instability</li>
                    <li>• Radiating pain down arms or legs</li>
                  </ul>
                  <p className="text-sm text-gray-700">suggest nerve involvement. If progressive, surgical decompression may be necessary.</p>
                </div>
                <GradientCard
                  title="Loss of Bladder or Bowel Control"
                  text="Sudden loss of bladder or bowel control is a medical emergency and may indicate severe nerve compression (such as cauda equina syndrome). Immediate surgical intervention is often required."
                />
              </div>
            </section>

            {/* CAUSES */}
            <section id="causes-of-spine-disorders" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Causes of Spine Disorders
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Understanding the root cause helps determine the appropriate treatment plan.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Age-Related Wear and Tear of Spinal Discs</h3>
                  <p className="text-sm text-gray-700">Disc degeneration naturally occurs with aging. Over time, discs may shrink, bulge, or rupture, leading to pain and nerve compression.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Injury, Accidents, and Poor Posture</h3>
                  <p className="text-sm text-gray-700">Trauma, sports injuries, heavy lifting, or prolonged poor posture can contribute to spinal problems. Mechanical stress accelerates disc and joint deterioration.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Genetic or Structural Spine Abnormalities</h3>
                  <p className="text-sm text-gray-700">Some individuals are born with spinal deformities such as scoliosis. Genetic predisposition can also increase susceptibility to degenerative spine conditions.</p>
                </div>
              </div>
            </section>

            {/* NON-SURGICAL VS SURGICAL */}
            <section id="non-surgical-vs-surgical-spine-treatment" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Non-Surgical vs Surgical Spine Treatment
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Treatment decisions depend on diagnosis, severity, and response to conservative management.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Physiotherapy and Medication Management</h3>
                  <p className="text-sm text-gray-700">Physical therapy focuses on strengthening core muscles and improving flexibility. Anti-inflammatory medications help reduce swelling around nerves.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Injection and Pain Management Therapies</h3>
                  <p className="text-sm text-gray-700">Epidural steroid injections may provide temporary relief by reducing nerve inflammation. These treatments are typically considered before surgery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">When Surgical Spine Treatment Becomes Necessary</h3>
                  <p className="text-sm text-gray-700 mb-2">Surgery is recommended when:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Pain severely limits daily activities</li>
                    <li>• Neurological symptoms worsen</li>
                    <li>• Imaging confirms structural compression</li>
                    <li>• Conservative treatment fails</li>
                  </ul>
                  <p className="text-sm text-gray-700">The goal of surgery is to relieve nerve pressure, restore stability, and improve quality of life.</p>
                </div>
              </div>
            </section>

            {/* COST */}
            <section id="spine-surgery-cost-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Spine Surgery Cost in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Spine surgery cost in India varies depending on procedure type, hospital location, surgical complexity, and implants used.
              </p>

              {/* Cost Table */}
              <h3 className="text-xl font-bold mb-4">Average Spine Surgery Cost Range in India</h3>
              <p className="text-sm text-gray-600 mb-4">Approximate cost ranges (based on healthcare aggregators and hospital listings):</p>
              <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                      <th className="p-4 text-left font-bold">Country</th>
                      <th className="p-4 text-left font-bold">Cost Range (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["India", "USD 4,000 – 12,000"],
                      ["United States (USA)", "USD 50,000 – 120,000+"],
                      ["United Kingdom", "USD 25,000 – 60,000+"],
                      ["Australia", "USD 35,000 – 80,000+"],
                      ["United Arab Emirates (UAE)", "USD 10,000 – 30,000+"],
                    ].map(([country, cost], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-pink-50" : "bg-white"}>
                        <td className="p-4 font-medium">{country}</td>
                        <td className="p-4 text-pink-700 font-semibold">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic mb-6">These figures are approximate and vary by hospital and case complexity.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Factors Affecting Spine Surgery Cost</h3>
                  <p className="text-sm text-gray-700 mb-2">Several elements influence pricing:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Type of surgery</li>
                    <li>• Number of spinal levels involved</li>
                    <li>• Implant materials</li>
                    <li>• Surgeon expertise</li>
                    <li>• ICU requirement</li>
                    <li>• Hospital stay duration</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Cost Variation by Procedure Type</h3>
                  <p className="text-sm text-gray-700">Complex deformity correction surgeries cost more than single-level decompression procedures due to longer operating time and specialized instrumentation.</p>
                </div>
              </div>
            </section>

            {/* DIFFERENT TYPES */}
            <section id="different-types-of-spine-surgery-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Different Types of Spine Surgery in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Spine surgery in India includes a wide range of procedures designed to treat degenerative, traumatic, congenital, and deformity-related spinal disorders. The type of surgery depends on:
              </p>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Location of the problem (cervical, thoracic, lumbar)</li>
                  <li>• Cause (disc herniation, stenosis, fracture, deformity)</li>
                  <li>• Severity of nerve compression</li>
                  <li>• Stability of the spine</li>
                  <li>• Overall patient health</li>
                </ul>
                <p className="text-gray-700 mt-4">Modern spine care in India includes open procedures, minimally invasive approaches, endoscopic techniques, and computer-assisted navigation surgery.</p>
              </div>
            </section>

            {/* OPEN SPINE SURGERY */}
            <section id="open-spine-surgery-techniques" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Open Spine Surgery Techniques
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Open spine surgery is the traditional surgical method involving a larger incision to access the spine. While recovery may take longer compared to minimally invasive methods, open surgery remains essential for:
              </p>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Complex deformity correction</li>
                  <li>• Multi-level fusion procedures</li>
                  <li>• Tumor removal</li>
                  <li>• Severe trauma stabilization</li>
                </ul>
                <p className="text-gray-700 mt-4">Open techniques allow full visualization of the spinal anatomy, which is critical in complicated cases.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Minimally Invasive Spine Procedures</h3>
                  <p className="text-sm text-gray-700 mb-2">Minimally invasive spine surgery (MISS) uses small incisions, specialized tubular retractors, and high-definition imaging guidance. Benefits may include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Smaller incisions</li>
                    <li>• Reduced muscle damage</li>
                    <li>• Less blood loss</li>
                    <li>• Shorter hospital stay</li>
                    <li>• Faster recovery</li>
                  </ul>
                  <p className="text-sm text-gray-700">These techniques are commonly used for discectomy, decompression, and certain fusion procedures.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Advanced Robotic and Navigation-Assisted Surgery</h3>
                  <p className="text-sm text-gray-700 mb-2">Modern spine centers in India increasingly use:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Intraoperative 3D imaging</li>
                    <li>• Computer navigation systems</li>
                    <li>• Robotic-assisted screw placement</li>
                  </ul>
                  <p className="text-sm text-gray-700">These technologies improve surgical precision, especially in complex fusion and deformity correction cases.</p>
                </div>
              </div>
            </section>

            {/* MINIMALLY INVASIVE */}
            <section id="minimally-invasive-spine-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Minimally Invasive Spine Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Minimally invasive spine surgery has transformed spinal treatment by reducing tissue trauma while achieving similar outcomes to open procedures in selected patients.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Benefits of Minimally Invasive Techniques</h3>
                  <p className="text-sm text-gray-700 mb-2">Compared to traditional surgery, minimally invasive procedures may offer:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Less postoperative pain</li>
                    <li>• Reduced hospital stay (often 1–3 days)</li>
                    <li>• Faster return to daily activities</li>
                    <li>• Lower infection rates in selected cases</li>
                  </ul>
                  <p className="text-sm text-gray-700">However, not all patients are candidates. Complex deformities may still require open surgery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Conditions Treated with MISS</h3>
                  <p className="text-sm text-gray-700 mb-2">Minimally invasive spine surgery is commonly used for:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Herniated discs</li>
                    <li>• Spinal stenosis</li>
                    <li>• Degenerative disc disease</li>
                    <li>• Selected cases of spondylolisthesis</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Recovery After Minimally Invasive Spine Surgery</h3>
                  <p className="text-sm text-gray-700">Patients may begin walking within 24 hours. Physical therapy often starts early. Most individuals return to light activities within weeks, depending on the procedure performed.</p>
                </div>
              </div>
            </section>

            {/* SPINAL FUSION */}
            <section id="spinal-fusion-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Spinal Fusion Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Spinal fusion is performed to permanently join two or more vertebrae to eliminate painful motion and restore stability.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Indications for Spinal Fusion</h3>
                  <p className="text-sm text-gray-700 mb-2">Spinal fusion may be recommended for:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Spinal instability</li>
                    <li>• Degenerative disc disease</li>
                    <li>• Spondylolisthesis</li>
                    <li>• Recurrent disc herniation</li>
                    <li>• Severe scoliosis</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Types of Spinal Fusion Procedures</h3>
                  <p className="text-sm text-gray-700 mb-2">Common fusion techniques include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Posterior Lumbar Interbody Fusion (PLIF)</li>
                    <li>• Transforaminal Lumbar Interbody Fusion (TLIF)</li>
                    <li>• Anterior Cervical Discectomy and Fusion (ACDF)</li>
                  </ul>
                  <p className="text-sm text-gray-700">The surgical approach depends on the location and pathology.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Recovery and Rehabilitation After Fusion</h3>
                  <p className="text-sm text-gray-700">Fusion recovery takes longer than decompression procedures because bone healing is required. Complete fusion may take several months. Rehabilitation focuses on strengthening supporting muscles.</p>
                </div>
              </div>
            </section>

            {/* DISC REPLACEMENT */}
            <section id="disc-replacement-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Disc Replacement Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Artificial disc replacement preserves motion while relieving nerve compression.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Artificial Disc Replacement Procedure</h3>
                  <p className="text-sm text-gray-700">The damaged disc is removed and replaced with a prosthetic device designed to maintain spinal movement.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Cervical vs Lumbar Disc Replacement</h3>
                  <p className="text-sm text-gray-700">Disc replacement is more commonly performed in the cervical spine. Lumbar disc replacement is selectively recommended depending on patient suitability.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Advantages Over Traditional Fusion Surgery</h3>
                  <p className="text-sm text-gray-700 mb-2">Compared to fusion, disc replacement may:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Preserve spinal mobility</li>
                    <li>• Reduce stress on adjacent levels</li>
                    <li>• Lower risk of adjacent segment degeneration (in selected cases)</li>
                  </ul>
                  <p className="text-sm text-gray-700">Long-term suitability depends on proper patient selection.</p>
                </div>
              </div>
            </section>

            {/* LAMINECTOMY */}
            <section id="laminectomy-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Laminectomy Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Laminectomy is a decompression procedure performed to relieve pressure on the spinal cord or nerves.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Treatment of Spinal Stenosis</h3>
                  <p className="text-sm text-gray-700">Spinal stenosis occurs when the spinal canal narrows, compressing nerves. Laminectomy removes part of the lamina (posterior vertebral bone) to create space.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">How Laminectomy Relieves Nerve Pressure</h3>
                  <p className="text-sm text-gray-700 mb-2">By removing the compressive structures, laminectomy improves:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Walking tolerance</li>
                    <li>• Leg pain</li>
                    <li>• Numbness</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Post-Operative Recovery Timeline</h3>
                  <p className="text-sm text-gray-700">Hospital stay is usually short. Most patients gradually increase activity over several weeks with guided rehabilitation.</p>
                </div>
              </div>
            </section>

            {/* DISCECTOMY */}
            <section id="discectomy-spine-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Discectomy Spine Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Discectomy involves removal of the herniated portion of a spinal disc.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Microdiscectomy for Herniated Disc</h3>
                  <p className="text-sm text-gray-700">Microdiscectomy uses magnification and smaller incisions. It is commonly performed for lumbar disc herniation causing sciatica.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Open vs Minimally Invasive Discectomy</h3>
                  <p className="text-sm text-gray-700">Minimally invasive approaches use tubular systems and may reduce muscle trauma compared to open surgery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Expected Outcomes After Discectomy</h3>
                  <p className="text-sm text-gray-700">Most patients experience relief of leg pain soon after surgery. Recovery varies based on nerve damage duration.</p>
                </div>
              </div>
            </section>

            {/* SCOLIOSIS */}
            <section id="scoliosis-spine-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Scoliosis Spine Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-4">
                Scoliosis surgery corrects abnormal spinal curvature and stabilizes the spine. Scoliosis is a three-dimensional deformity of the spine characterized by abnormal sideways curvature and vertebral rotation. While mild scoliosis can often be managed through observation or bracing (especially in children and adolescents), severe or progressive curves may require surgical correction to prevent long-term complications.
              </p>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <p className="font-semibold text-gray-800 mb-2">Surgery is generally recommended when:</p>
                <ul className="text-gray-700 space-y-1 mb-4">
                  <li>• The spinal curvature exceeds 40–50 degrees (Cobb angle measurement)</li>
                  <li>• The curve continues to progress despite bracing</li>
                  <li>• The patient experiences pain, imbalance, or functional limitations</li>
                  <li>• Lung or heart function is compromised in severe deformity</li>
                  <li>• Cosmetic deformity significantly affects quality of life</li>
                </ul>
                <p className="font-semibold text-gray-800 mb-2">The primary goals of scoliosis spine surgery are:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Correct spinal alignment</li>
                  <li>• Prevent curve progression</li>
                  <li>• Restore spinal balance</li>
                  <li>• Reduce pain (if present)</li>
                  <li>• Improve posture and symmetry</li>
                </ul>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Surgical Correction of Spinal Curvature</h3>
                  <p className="text-sm text-gray-700 mb-2">Severe curves that progress over time may require surgical realignment. Surgical correction involves carefully realigning the spine to a more natural position. During the procedure:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• The surgeon exposes the affected spinal segments</li>
                    <li>• The curved vertebrae are gradually corrected using specialized instruments</li>
                    <li>• Alignment is restored while protecting the spinal cord</li>
                  </ul>
                  <p className="text-sm text-gray-700 mb-2">Neuromonitoring is typically used throughout surgery to continuously assess spinal cord function and reduce the risk of neurological injury.</p>
                  <p className="text-sm text-gray-700 mb-2">The degree of correction depends on curve flexibility, patient age, severity and location of deformity, and bone quality. In adolescents, correction rates are generally high due to flexible spinal structures. In adults, surgery may focus more on pain relief and stability rather than complete correction.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Instrumentation and Spinal Fusion in Scoliosis</h3>
                  <p className="text-sm text-gray-700 mb-2">Metal rods and screws are used to straighten and stabilize the spine during fusion. Spinal instrumentation is a critical component of scoliosis surgery. Surgeons use:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Pedicle screws</li>
                    <li>• Rods</li>
                    <li>• Hooks or wires (in selected cases)</li>
                  </ul>
                  <p className="text-sm text-gray-700 mb-2">These implants hold the spine in its corrected position while bone fusion occurs. Spinal fusion involves placing bone graft material between vertebrae. Fusion may involve posterior spinal fusion (most common), anterior spinal fusion (selected cases), or combined approaches for complex deformities.</p>
                  <p className="text-sm text-gray-700">Modern instrumentation systems allow stronger correction with improved safety compared to older techniques.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Long-Term Monitoring After Scoliosis Surgery</h3>
                  <p className="text-sm text-gray-700 mb-2">Regular follow-up ensures proper healing and monitoring of spinal balance. Long-term follow-up is essential after scoliosis spine surgery. Monitoring typically includes:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Periodic clinical examinations</li>
                    <li>• X-ray imaging to assess fusion progress</li>
                    <li>• Evaluation of spinal balance and posture</li>
                    <li>• Assessment of implant position</li>
                  </ul>
                  <p className="text-sm text-gray-700">Patients are often followed for several years, especially adolescents, to ensure stable correction and proper skeletal maturity. Most patients resume normal activities gradually. High-impact activities may be restricted for several months depending on fusion progress.</p>
                </div>
              </div>
            </section>

            {/* CERVICAL */}
            <section id="cervical-spine-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Cervical Spine Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-4">
                Cervical spine surgery addresses disorders in the neck region. The cervical spine consists of seven vertebrae (C1–C7) and supports head movement while protecting the spinal cord.
              </p>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Cervical spine disorders can cause:</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Neck pain</li>
                      <li>• Radiating arm pain</li>
                      <li>• Numbness or tingling in hands</li>
                      <li>• Weakness in upper limbs</li>
                      <li>• Balance difficulties</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Common conditions requiring cervical spine surgery include:</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Cervical disc herniation</li>
                      <li>• Cervical spondylosis</li>
                      <li>• Cervical spinal stenosis</li>
                      <li>• Cervical myelopathy</li>
                      <li>• Trauma or instability</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-gray-800 mb-2">The primary goals of cervical spine surgery are:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Decompress spinal cord and nerves</li>
                    <li>• Restore alignment</li>
                    <li>• Stabilize unstable segments</li>
                    <li>• Prevent neurological deterioration</li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Treatment of Cervical Disc Herniation</h3>
                  <p className="text-sm text-gray-700 mb-2">Procedures such as ACDF relieve nerve compression and stabilize the spine. One of the most common procedures is Anterior Cervical Discectomy and Fusion (ACDF). In ACDF:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• The surgeon approaches the spine from the front of the neck</li>
                    <li>• The damaged disc is removed</li>
                    <li>• Nerve compression is relieved</li>
                    <li>• A bone graft or implant is placed</li>
                    <li>• The vertebrae are fused for stability</li>
                  </ul>
                  <p className="text-sm text-gray-700">Another option in selected patients is cervical disc replacement, which preserves motion instead of fusion. Surgical intervention often results in rapid relief of arm pain, though recovery of numbness or weakness may take longer.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Anterior vs Posterior Cervical Approach</h3>
                  <p className="text-sm text-gray-700 mb-2">Anterior approach: Through the front of the neck. Posterior approach: Through the back. Choice depends on pathology location.</p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Anterior approach advantages:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Direct access to disc pathology</li>
                    <li>• Less muscle disruption</li>
                    <li>• Effective for one or two-level disc problems</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Posterior approach advantages:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Suitable for multi-level stenosis</li>
                    <li>• Useful for certain deformities</li>
                    <li>• Avoids structures in the front of the neck</li>
                  </ul>
                  <p className="text-sm text-gray-700">Surgeon expertise and imaging findings determine the most appropriate approach.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Recovery After Neck Spine Surgery</h3>
                  <p className="text-sm text-gray-700 mb-2">Neck surgeries often allow early mobilization. Full recovery varies by procedure complexity. Post-operative recovery includes:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Pain management</li>
                    <li>• Early ambulation</li>
                    <li>• Possible use of a cervical collar (in some cases)</li>
                    <li>• Gradual return to activities</li>
                  </ul>
                  <p className="text-sm text-gray-700">Most patients resume light activities within a few weeks. Full fusion (if performed) may take several months. Physiotherapy helps restore neck strength and mobility.</p>
                </div>
              </div>
            </section>

            {/* LUMBAR */}
            <section id="lumbar-spine-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Lumbar Spine Surgery
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-4">
                Lumbar spine surgery treats lower back conditions affecting walking and mobility. The lumbar spine (L1–L5) supports body weight and enables bending and twisting movements. Disorders in this region are among the most common causes of disability.
              </p>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Common lumbar conditions include:</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Lumbar disc herniation</li>
                      <li>• Lumbar spinal stenosis</li>
                      <li>• Degenerative disc disease</li>
                      <li>• Spondylolisthesis</li>
                      <li>• Lumbar fractures</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 mb-2">Symptoms may include:</p>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Lower back pain</li>
                      <li>• Sciatica (radiating leg pain)</li>
                      <li>• Leg weakness</li>
                      <li>• Difficulty walking</li>
                      <li>• Numbness in lower limbs</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">Lumbar spine surgery aims to relieve nerve compression and restore spinal stability.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Lumbar Decompression Procedures</h3>
                  <p className="text-sm text-gray-700 mb-2">These relieve pressure on lumbar nerve roots. Lumbar decompression surgeries include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Laminectomy</li>
                    <li>• Laminotomy</li>
                    <li>• Microdiscectomy</li>
                    <li>• Foraminotomy</li>
                  </ul>
                  <p className="text-sm text-gray-700">These procedures remove bone or disc material compressing nerve roots. Patients with sciatica often experience significant relief after decompression surgery. Minimally invasive approaches may reduce tissue damage and recovery time.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Lumbar Fusion Surgery</h3>
                  <p className="text-sm text-gray-700 mb-2">Fusion stabilizes unstable lumbar segments. Lumbar fusion is recommended when there is:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Spinal instability</li>
                    <li>• Severe degenerative disc disease</li>
                    <li>• Recurrent disc herniation</li>
                    <li>• Spondylolisthesis</li>
                  </ul>
                  <p className="text-sm text-gray-700 mb-2">Fusion techniques may include PLIF, TLIF, and lateral or anterior approaches. Bone grafts and implants are used to promote permanent fusion between vertebrae. Complete bone healing may take several months.</p>
                  <p className="text-sm text-gray-700">Rehabilitation focuses on restoring core strength and improving flexibility while protecting the fused segment.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Mobility and Rehabilitation After Lumbar Surgery</h3>
                  <p className="text-sm text-gray-700">Gradual physiotherapy improves strength and flexibility. Many patients resume routine activities within weeks to months depending on surgery type.</p>
                </div>
              </div>
            </section>

            {/* SUCCESS RATE */}
            <section id="spine-surgery-success-rate-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Spine Surgery Success Rate in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-4">
                Spine surgery success depends on multiple medical and patient-related factors. In general, procedures performed for well-defined conditions such as herniated discs or spinal stenosis show favorable outcomes when patients are properly selected.
              </p>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <p className="font-semibold text-gray-800 mb-2">Success does not only mean pain relief — it also includes:</p>
                <ul className="text-gray-700 space-y-1 mb-4">
                  <li>• Improvement in neurological symptoms</li>
                  <li>• Restoration of mobility</li>
                  <li>• Enhanced quality of life</li>
                  <li>• Prevention of further spinal damage</li>
                </ul>
                <p className="text-gray-700">The overall outcome largely depends on accurate diagnosis, surgeon expertise, technology used, and post-operative rehabilitation.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Factors Influencing Surgical Outcomes</h3>
                  <p className="text-sm font-semibold text-gray-700 mb-1">1. Accurate Diagnosis</p>
                  <p className="text-sm text-gray-700 mb-2">Correct identification of the pain source is critical. Imaging studies such as MRI and CT scans help confirm nerve compression or structural abnormalities.</p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">2. Duration of Nerve Compression</p>
                  <p className="text-sm text-gray-700 mb-2">Long-standing nerve compression may lead to permanent damage. Early intervention often improves outcomes.</p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">3. Patient's Overall Health</p>
                  <p className="text-sm text-gray-700">Conditions such as diabetes, osteoporosis, smoking habits, and obesity can affect healing and recovery.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Role of Surgeon Experience and Technology</h3>
                  <p className="text-sm text-gray-700 mb-2">Experienced spine surgeons trained in advanced techniques are better equipped to manage complex cases. Modern technology such as:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Intraoperative navigation</li>
                    <li>• High-resolution imaging</li>
                    <li>• Microsurgical tools</li>
                    <li>• Neuromonitoring</li>
                  </ul>
                  <p className="text-sm text-gray-700">improves precision and reduces complications. India has several spine centers equipped with modern infrastructure, which contributes to consistent surgical results.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Importance of Post-Surgery Rehabilitation</h3>
                  <p className="text-sm text-gray-700 mb-2">Rehabilitation is a crucial component of success. Structured physiotherapy:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Restores muscle strength</li>
                    <li>• Improves flexibility</li>
                    <li>• Prevents stiffness</li>
                    <li>• Reduces recurrence risk</li>
                  </ul>
                  <p className="text-sm text-gray-700">Patients who actively participate in rehabilitation often achieve better long-term results.</p>
                </div>
              </div>

              {/* Risks */}
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <h3 className="font-bold text-lg mb-2">Risks and Complications of Spine Surgery</h3>
                <p className="text-sm text-gray-700">Like all surgical procedures, spine surgery carries potential risks. However, with proper evaluation and modern surgical techniques, complications are relatively uncommon in experienced hands.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Common Surgical Risks and Infections</h3>
                  <p className="text-sm text-gray-700 mb-2">General surgical risks include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Bleeding</li>
                    <li>• Infection</li>
                    <li>• Blood clots</li>
                    <li>• Reaction to anesthesia</li>
                  </ul>
                  <p className="text-sm text-gray-700">Hospitals follow strict sterilization protocols to minimize infection risk.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Nerve-Related Complications</h3>
                  <p className="text-sm text-gray-700 mb-2">Because spine surgery involves structures close to nerves, possible nerve-related complications include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Persistent numbness</li>
                    <li>• Temporary weakness</li>
                    <li>• Rarely, permanent nerve injury</li>
                  </ul>
                  <p className="text-sm text-gray-700">Neuromonitoring during surgery helps reduce such risks.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">How Modern Techniques Reduce Risks</h3>
                  <p className="text-sm text-gray-700">Minimally invasive spine surgery reduces muscle damage and blood loss. Advanced imaging ensures accurate implant placement. Robotic guidance and navigation systems enhance precision. Proper patient screening and surgical planning significantly lower complication rates.</p>
                </div>
              </div>
            </section>

            {/* RECOVERY RATE */}
            <section id="spine-surgery-recovery-rate" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Spine Surgery Recovery Rate
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Recovery after spine surgery varies depending on type of surgery, number of spinal levels treated, patient's age and health, and compliance with physiotherapy. Some procedures allow rapid recovery, while fusion surgeries require longer healing time.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Immediate Post-Surgery Recovery Phase</h3>
                  <p className="text-sm text-gray-700 mb-2">During the first 24–72 hours:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Pain is managed with medications</li>
                    <li>• Patients are encouraged to mobilize early</li>
                    <li>• Vital signs and neurological status are monitored</li>
                  </ul>
                  <p className="text-sm text-gray-700">Hospital stay typically ranges from 2 to 5 days depending on the procedure.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Physical Therapy and Rehabilitation Timeline</h3>
                  <p className="text-sm text-gray-700 mb-2">Rehabilitation may include:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Core strengthening exercises</li>
                    <li>• Stretching programs</li>
                    <li>• Posture correction</li>
                    <li>• Gradual return to activities</li>
                  </ul>
                  <p className="text-sm text-gray-700">Full rehabilitation may take several weeks to months.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Return to Work and Daily Activities</h3>
                  <p className="text-sm text-gray-700 mb-2">Return to work depends on job type:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Desk jobs: Often within 2–6 weeks</li>
                    <li>• Physically demanding jobs: May require several months</li>
                  </ul>
                  <p className="text-sm text-gray-700">Doctors provide individualized guidelines to prevent re-injury.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow mb-4">
                <h3 className="font-bold mb-2">Long-Term Results of Spine Surgery</h3>
                <p className="text-sm text-gray-700">Long-term outcomes depend on correct surgical indication and post-operative care.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Pain Relief and Functional Improvement</h3>
                <p className="text-sm text-gray-700 mb-2">Many patients report:</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-2">
                  <li>• Reduced leg or arm pain</li>
                  <li>• Improved walking ability</li>
                  <li>• Better sleep quality</li>
                  <li>• Enhanced overall mobility</li>
                </ul>
                <p className="text-sm text-gray-700">However, complete elimination of back pain may not always be possible, especially in degenerative conditions.</p>
              </div>
            </section>

            {/* MAINTAINING SPINE HEALTH */}
            <section id="maintaining-spine-health-after-surgery" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Maintaining Spine Health After Surgery
              </h2>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <p className="text-gray-700 mb-2">To preserve surgical results:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Maintain healthy weight</li>
                  <li>• Avoid smoking</li>
                  <li>• Follow ergonomic practices</li>
                  <li>• Continue strengthening exercises</li>
                </ul>
                <p className="text-gray-700 mt-4">Lifestyle modifications are essential to protect spinal health.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-2">Preventing Recurrence of Spine Problems</h3>
                <p className="text-sm text-gray-700 mb-2">Preventive strategies include:</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-2">
                  <li>• Regular exercise</li>
                  <li>• Proper lifting techniques</li>
                  <li>• Timely medical follow-up</li>
                  <li>• Managing osteoporosis if present</li>
                </ul>
                <p className="text-sm text-gray-700">Long-term monitoring ensures sustained improvement.</p>
              </div>
            </section>

            {/* BEST DOCTOR */}
            <section id="best-doctor-for-spine-surgery-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Best Doctor for Spine Surgery in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Choosing the right spine surgeon is one of the most important decisions for successful treatment.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Qualifications and Fellowship Training</h3>
                  <p className="text-sm text-gray-700 mb-2">A qualified spine surgeon typically has:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Orthopedic or neurosurgery specialization</li>
                    <li>• Advanced spine fellowship training</li>
                    <li>• Experience in complex and minimally invasive procedures</li>
                  </ul>
                  <p className="text-sm text-gray-700">Board certification and professional affiliations reflect credibility.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Experience in Complex Spine Procedures</h3>
                  <p className="text-sm text-gray-700 mb-2">Surgeon experience is especially important for:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Multi-level fusion surgeries</li>
                    <li>• Scoliosis correction</li>
                    <li>• Revision spine surgeries</li>
                    <li>• Tumor or trauma cases</li>
                  </ul>
                  <p className="text-sm text-gray-700">High surgical volume often correlates with better outcomes.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Questions to Ask Before Choosing a Surgeon</h3>
                  <p className="text-sm text-gray-700 mb-2">Patients should ask:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• What is the exact diagnosis?</li>
                    <li>• Are non-surgical options still viable?</li>
                    <li>• What are the expected benefits and risks?</li>
                    <li>• What is the recovery timeline?</li>
                  </ul>
                  <p className="text-sm text-gray-700">Clear communication builds confidence and improves decision-making.</p>
                </div>
              </div>
            </section>

            {/* SPINE SPECIALIST DOCTOR */}
            <section id="spine-specialist-doctor-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Spine Specialist Doctor India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-8">
                Spine care may involve either an orthopedic spine surgeon or a neurosurgeon, depending on the condition.
              </p>

              {/* Doctor Profiles */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-pink-600 mb-6">Doctor Profile</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-pink-500">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-20 sm:w-24 md:w-24 lg:w-24 flex items-center justify-center bg-pink-200 rounded-full mr-4 overflow-hidden">
                        <Image
                          src="/doctor/dr-sumit.png"
                          alt="Dr. Sumit Goyal"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Sumit Goyal</h4>
                        <p className="text-pink-700 font-semibold mb-2">Director & HOD – Neurosurgery | Group Director – Neurointervention</p>
                        <p className="text-gray-800 text-sm mb-2">MBBS | DNB (Neurosurgery) | FINR (France) |  Neurosciences | Neurosurgery | Neurointervention</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-20 sm:w-24 md:w-24 lg:w-24 flex items-center justify-center bg-purple-200 rounded-full mr-4 overflow-hidden">
                        <Image
                          src="/doctor/Dr_Pramod_Saini.png"
                          alt="Dr. Pramod Saini"
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Pramod Saini</h4>
                        <p className="text-purple-700 font-semibold mb-2">Associate Director – Spine Surgery</p>
                        <p className="text-gray-700 text-sm mb-2">Spine Surgery | Minimally Invasive Spine Specialist</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                    <h3 className="font-bold mb-2">Orthopedic Spine Surgeon vs Neurosurgeon</h3>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li>• Orthopedic spine surgeons focus on bone alignment and structural issues.</li>
                      <li>• Neurosurgeons specialize in nerve and spinal cord-related conditions.</li>
                      <li>• Both are qualified to perform spine surgery if trained in spinal procedures.</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                    <h3 className="font-bold mb-2">Multidisciplinary Spine Care Approach</h3>
                    <p className="text-sm text-gray-700 mb-2">Comprehensive spine care often includes:</p>
                    <ul className="text-sm text-gray-700 space-y-1 mb-2">
                      <li>• Pain management specialists</li>
                      <li>• Physiotherapists</li>
                      <li>• Rehabilitation experts</li>
                      <li>• Radiologists</li>
                    </ul>
                    <p className="text-sm text-gray-700">A multidisciplinary team ensures holistic treatment.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                    <h3 className="font-bold mb-2">Importance of Long-Term Follow-Up</h3>
                    <p className="text-sm text-gray-700 mb-2">Regular follow-up visits help:</p>
                    <ul className="text-sm text-gray-700 space-y-1 mb-2">
                      <li>• Monitor healing</li>
                      <li>• Detect complications early</li>
                      <li>• Adjust rehabilitation plans</li>
                    </ul>
                    <p className="text-sm text-gray-700">Long-term engagement improves overall patient outcomes.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* BEST HOSPITAL */}
            <section id="best-hospital-for-spine-surgery-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Best Hospital for Spine Surgery in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Hospital selection is as important as choosing the surgeon.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Advanced Spine Surgery Infrastructure</h3>
                  <p className="text-sm text-gray-700 mb-2">Leading hospitals offer:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Dedicated spine operation theaters</li>
                    <li>• Advanced imaging systems</li>
                    <li>• ICU support</li>
                    <li>• Neuromonitoring facilities</li>
                  </ul>
                  <p className="text-sm text-gray-700">Infrastructure plays a critical role in patient safety.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">ICU and Rehabilitation Support Services</h3>
                  <p className="text-sm text-gray-700 mb-2">Post-surgery care may require:</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-2">
                    <li>• Intensive care monitoring</li>
                    <li>• Pain management teams</li>
                    <li>• In-house physiotherapy</li>
                  </ul>
                  <p className="text-sm text-gray-700">Comprehensive support improves recovery experience.</p>
                </div>
              </div>
            </section>

            {/* INTERNATIONAL PATIENT CARE */}
            <section id="international-patient-care-facilities" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                International Patient Care Facilities
              </h2>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <p className="text-gray-700 mb-2">Many hospitals in India provide:</p>
                <ul className="text-gray-700 space-y-1 mb-4">
                  <li>• Dedicated international patient departments</li>
                  <li>• Visa assistance</li>
                  <li>• Language translators</li>
                  <li>• Post-discharge follow-up support</li>
                </ul>
                <p className="text-gray-700">This makes India a preferred destination for medical travelers seeking spine surgery.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow mb-6 border-l-4 border-pink-500">
                <h3 className="font-bold mb-3">Why Choose India for Spine Surgery?</h3>
                <p className="text-sm text-gray-700 mb-2">India has become one of the leading global destinations for advanced spine treatment. Patients choose India because of:</p>
                <ul className="text-sm text-gray-700 space-y-1 mb-2">
                  <li>• Experienced spine surgeons with international training</li>
                  <li>• Advanced minimally invasive and robotic spine techniques</li>
                  <li>• Modern hospitals with global accreditation</li>
                  <li>• Coordinated care for domestic and international patients</li>
                  <li>• Comprehensive rehabilitation programs</li>
                </ul>
                <p className="text-sm text-gray-700">Indian spine centers treat patients from Asia, Africa, the Middle East, Europe, and North America.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                <h3 className="font-bold mb-4">Patient Journey for Spine Surgery in India</h3>
                <p className="text-sm text-gray-700 mb-4">Understanding the treatment pathway builds trust and improves conversion.</p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-bold text-pink-700 mb-2">Step 1: Online Medical Consultation</p>
                    <p className="text-sm text-gray-700">Patients share MRI scans, medical history, and symptoms. A spine specialist reviews reports and provides a treatment plan.</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-bold text-pink-700 mb-2">Step 2: Personalized Treatment Plan</p>
                    <p className="text-sm text-gray-700 mb-1">The team recommends either:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Non-surgical management</li>
                      <li>• Minimally invasive procedure</li>
                      <li>• Fusion or deformity correction surgery</li>
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
                      <li>• Long-term spine health advice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* WHEN TO CONSULT */}
            <section id="when-to-consult-a-spine-specialist-immediately" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                When to Consult a Spine Specialist Immediately
              </h2>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <p className="text-gray-700 mb-3">Immediate consultation is advised if a patient experiences:</p>
                <ul className="text-gray-700 space-y-2 mb-4">
                  <li>• Progressive limb weakness</li>
                  <li>• Severe radiating pain</li>
                  <li>• Difficulty walking</li>
                  <li>• Loss of bladder or bowel control</li>
                  <li>• Persistent pain after injury</li>
                </ul>
                <p className="text-gray-700">Early diagnosis often prevents permanent nerve damage.</p>
              </div>

              {/* Lifestyle Tips */}
              <h3 className="text-xl font-bold mb-4">Lifestyle Tips After Spine Surgery</h3>
              <p className="text-sm text-gray-600 mb-4">Long-term spine health depends on post-operative care.</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Maintain Healthy Body Weight</h3>
                  <p className="text-sm text-gray-700">Excess weight increases pressure on the spine.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Practice Correct Posture</h3>
                  <p className="text-sm text-gray-700">Avoid prolonged slouching and improper lifting.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Regular Core Strengthening</h3>
                  <p className="text-sm text-gray-700">Strengthening back and abdominal muscles supports spinal alignment.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Avoid Smoking</h3>
                  <p className="text-sm text-gray-700">Smoking delays bone healing and fusion success.</p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="frequently-asked-questions" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Frequently Asked Questions
              </h2>
              <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
                <div className="space-y-6">
                  {[
                    {
                      q: "What is the success rate of spine surgery in India?",
                      a: "Success depends on the procedure and condition treated. Surgeries such as discectomy and decompression generally show favorable outcomes when patients are properly selected and rehabilitation is followed.",
                    },
                    {
                      q: "Is spine surgery safe?",
                      a: "Spine surgery is generally safe when performed by experienced surgeons in well-equipped hospitals. Like all surgeries, it carries risks, but modern techniques reduce complications.",
                    },
                    {
                      q: "How long does spine surgery recovery take?",
                      a: "Recovery varies by procedure. Minimally invasive surgeries may allow faster recovery, while fusion surgeries require longer healing time due to bone fusion.",
                    },
                    {
                      q: "Can spine surgery completely cure back pain?",
                      a: "Spine surgery primarily treats structural causes of pain and nerve compression. While many patients experience significant relief, complete elimination of back pain is not guaranteed in all cases.",
                    },
                    {
                      q: "How do I choose the best spine surgeon in India?",
                      a: "Look for a board-certified orthopedic or neurosurgeon with fellowship training in spine surgery, experience in minimally invasive techniques, and transparent communication about risks and outcomes.",
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

            <CTA />
          </div>

          {/* SIDEBAR */}
          <div className="lg:col-span-3 order-1">
  <div className="sticky top-25 flex flex-col gap-2 bg-gray-100 rounded-xl shadow">
               <Sidebar />
              <ContactForm />
             
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
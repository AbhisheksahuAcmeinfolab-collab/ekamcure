import Script from "next/script";
import React from "react";
import Link from "next/link";
import CTA from "../../Component/cta";
import Image from "next/image";
import ContactForm from "../../Component/ContactForm";
import Sidebar from "../../Component/Sidebar";

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
    "IVF Treatment in India | Best IVF Centre & Infertility Treatment India",
  description:
    "Get advanced IVF treatment in India at leading fertility centers. Connect with experienced specialists for personalized infertility treatment, high success rates, and affordable care at the best IVF clinic India.",
};

export default function IVFTreatmentInIndia() {
  return (
    <>
      <Script
        id="ivf-treatment-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is IVF treatment in India safe for international patients?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, many fertility hospitals and IVF centers in India follow internationally accepted medical standards and use advanced reproductive technologies for patient care.",
                },
              },
              {
                "@type": "Question",
                name: "What is the success rate of IVF treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "IVF success rates vary depending on factors such as age, fertility condition, embryo quality, and overall reproductive health. Fertility specialists can provide individualized guidance after evaluation.",
                },
              },
              {
                "@type": "Question",
                name: "How long should international patients stay in India for IVF treatment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The duration depends on the treatment plan, but many IVF procedures may require patients to stay for a few weeks for monitoring, egg retrieval, embryo transfer, and recovery.",
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
            backgroundImage: "url('/banner/ivf-banner.png')",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Optional gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            }}
          ></div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              IVF Treatment in India
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
                  "Understanding Infertility and Fertility Treatments",
                  "What Is Infertility",
                  "Common Causes of Infertility",
                  "When Should Patients Seek Fertility Treatment",
                  "Why Choose India for IVF and Fertility Treatments",
                  "Advanced Medical Infrastructure",
                  "Experienced Fertility Specialists",
                  "IVF Treatment Cost in India",
                  "Shorter Waiting Times",
                  "Fertility and IVF Treatments Available in India",
                  "IVF – In Vitro Fertilization",
                  "ICSI – Intracytoplasmic Sperm Injection",
                  "IUI – Intrauterine Insemination",
                  "Ovulation Induction with Timed Intercourse",
                  "IVM – In Vitro Maturation",
                  "Laser Assisted Hatching",
                  "Fertility Preservation",
                  "Advanced Technologies Used in IVF Treatment",
                  "Treatment Process for International Patients",
                  "Choosing the Best IVF Clinic India",
                  "Cost of IVF Treatment in India",
                  "Why Choose Ekam Cure for Infertility Treatment India",
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
                Starting a family is a deeply emotional journey, and for many couples, fertility challenges can make the path to parenthood stressful and uncertain. With advanced IVF treatment in India, international patients now have access to world-class fertility care, experienced specialists, and affordable reproductive treatments in a supportive and compassionate environment. At Ekam Cure, we help patients connect with trusted fertility experts and modern hospitals that provide personalized infertility solutions tailored to individual medical needs.
              </p>
              <p className="text-gray-700 mt-4">
                Women's reproductive health can sometimes be affected by serious medical conditions that require specialized care. For patients seeking advanced oncology services, Ekam Cure also facilitates comprehensive <a href="https://www.ekamcure.com/treatments/breast-cancer-treatment-in-india"><strong>breast cancer treatment in India</strong> </a> through leading cancer hospitals equipped with modern diagnostic and treatment technologies. 
              </p>
              <p className="text-gray-700 mt-4">
                India has become one of the most preferred destinations for fertility care due to its advanced reproductive technologies, highly skilled doctors, and significantly lower treatment costs compared to many Western countries. Whether couples are dealing with male infertility, female infertility, unexplained infertility, recurrent pregnancy loss, or age-related fertility concerns, the country offers comprehensive and evidence-based fertility solutions with modern laboratory support and internationally accepted treatment protocols.
              </p>
              <p className="text-gray-700 mt-4">
                At Ekam Cure, we understand that choosing the right IVF centre in India can be challenging, especially for international patients seeking affordable, high-quality fertility treatment. We proudly assist patients from <strong>Nigeria, Kenya, Ghana, Tanzania, Uganda, Ethiopia, Zambia, Zimbabwe, Rwanda, South Sudan, Sudan, Malawi, Sierra Leone, Liberia, DR Congo, Bangladesh, Nepal, the Maldives, Fiji, Papua New Guinea, the Solomon Islands, and other countries.</strong> Our dedicated medical tourism team manages every step of your journey-from selecting the best IVF specialist and hospital to online doctor consultations, personalized treatment planning, medical visa assistance, airport transfers, accommodation arrangements, language support, and comprehensive post-treatment follow-up-ensuring a smooth, safe, and stress-free IVF experience in India.
              </p>
              <p className="text-gray-700 mt-4">
               Our network of fertility specialists focuses on patient-centered care, transparency, and realistic treatment expectations. We believe every patient deserves compassionate support throughout their fertility journey. From the first consultation to embryo transfer and pregnancy care, our team remains committed to helping couples receive safe, affordable, and advanced infertility care in India.
              </p>
            </div>

            {/* UNDERSTANDING INFERTILITY */}
            <section id="understanding-infertility-and-fertility-treatments" className="mb-16">
              <h2 className="text-3xl font-bold border-b-4 border-pink-500 inline-block pb-2 mb-6">
                Understanding Infertility and Fertility Treatments
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Modern reproductive medicine now offers several effective treatment options that improve the chances of conception. Understanding infertility helps couples make informed decisions about the right treatment path.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div id="what-is-infertility" className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">What Is Infertility?</h3>
                  <p className="text-gray-700 text-sm">Infertility is a medical condition where a couple is unable to achieve pregnancy naturally after trying for a significant period. Both men and women can contribute to fertility challenges, and in many cases, infertility may involve multiple underlying factors. Modern reproductive medicine now offers several effective treatment options that improve the chances of conception.</p>
                </div>
                <div id="common-causes-of-infertility" className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">Common Causes of Infertility</h3>
                  <p className="text-gray-700 text-sm mb-3">Infertility can occur due to a wide range of medical conditions and lifestyle factors. Common causes in women include ovulation disorders, PCOS, blocked fallopian tubes, endometriosis, hormonal imbalance, fibroids, and age-related fertility decline. Male infertility may result from low sperm count, poor sperm motility, abnormal sperm structure, infections, or hormonal issues.</p>
                 
                  <p className="text-sm text-gray-700 mt-3">Stress, obesity, smoking, alcohol consumption, and certain medical conditions may also affect fertility in both men and women. Advanced diagnostic testing helps fertility specialists identify the root cause and recommend the most suitable treatment approach.</p>
                </div>
                <div id="when-should-patients-seek-fertility-treatment" className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-3">When Should Patients Seek Fertility Treatment?</h3>
                  <p className="text-gray-700 text-sm">Couples are generally advised to consult a fertility specialist if pregnancy does not occur after one year of regular unprotected intercourse. Women above the age of 35 may benefit from earlier evaluation after six months of trying to conceive. Patients with irregular periods, recurrent miscarriages, or known reproductive disorders should also seek timely medical advice.</p>
                  <p className="text-gray-700 text-sm">Early diagnosis and expert-guided infertility treatment India programs can significantly improve the chances of successful conception and healthy pregnancy outcomes.</p>
                </div>
              </div>
            </section>

            {/* WHY CHOOSE INDIA */}
            <section id="why-choose-india-for-ivf-and-fertility-treatments" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Why Choose India for IVF and Fertility Treatments?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <Card
                  icon={<Activity />}
                  title="Advanced Medical Infrastructure"
                  text="India is home to many modern fertility hospitals and reproductive medicine centers equipped with advanced embryology laboratories, high-end imaging technologies, and minimally invasive surgical facilities. Many fertility centers follow internationally accepted clinical protocols and maintain high standards of patient care.
The availability of advanced technologies such as ICSI, blastocyst culture, embryo freezing, laser-assisted hatching, genetic screening, and fertility preservation has made India a trusted destination for fertility care.
"
                />
                <Card
                  icon={<Brain />}
                  title="Experienced Fertility Specialists"
                  text="One of the biggest advantages of choosing an IVF centre in India is access to highly experienced fertility doctors, embryologists, and reproductive specialists. Indian fertility experts handle a large number of complex infertility cases and are experienced in treating both domestic and international patients.
Patients receive individualized treatment plans based on age, fertility history, hormonal evaluation, and overall reproductive health. The focus remains on safe, ethical, and evidence-based fertility treatment.
"
                />
               
              </div>
            </section>

            {/* IVF COST */}
            <section id="ivf-treatment-cost-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                IVF Treatment Cost Comparison by Country (Approximate)
              </h2>
             
              <p className="text-sm text-gray-600 mb-4">Approximate average IVF cost per cycle (USD):</p>
              <div className="bg-white rounded-xl shadow overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white">
                      <th className="p-4 text-left font-bold">Country</th>
                      <th className="p-4 text-left font-bold">Average IVF Cost Per Cycle (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["India", "USD 2,500 – 5,500"],
                      ["United States (USA)", "USD 12,000 – 20,000"],
                      ["United Kingdom", "USD 6,500 – 12,000"],
                      ["Australia", "USD 7,000 – 11,000"],
                      ["Canada", "USD 8,000 – 15,000"],
                    ].map(([country, cost], i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-pink-50" : "bg-white"}>
                        <td className="p-4 font-medium">{country}</td>
                        <td className="p-4 text-pink-700 font-semibold">{cost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 italic mb-6">These figures are approximate and may vary by clinic and individual case.</p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Affordable  IVF Treatment Cost in India</h3>
                  <p className="text-sm text-gray-700 mb-2">Compared to countries like the USA, UK, Canada, and Australia, the cost of IVF Treatment Cost in India is significantly lower while maintaining high medical standards. This affordability allows international patients to access advanced fertility procedures without compromising on quality care.</p>
                  <p className="text-sm text-gray-700 mb-2">Lower operational costs, affordable healthcare infrastructure, and competitive pricing make India one of the most cost-effective destinations for fertility treatment and medical tourism.</p>
                 
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Shorter Waiting Times</h3>
                  <p className="text-sm text-gray-700">Many international patients choose India because fertility treatments can begin much faster compared to long waiting periods in several countries. Quick access to consultations, diagnostic testing, and fertility procedures helps couples avoid unnecessary delays in their treatment journey.</p>
                  
                </div>
              </div>
            </section>

            {/* TREATMENTS AVAILABLE */}
            <section id="fertility-and-ivf-treatments-available-in-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Fertility and IVF Treatments Available in India
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Spine surgery in India includes a wide range of procedures. Similarly, India offers comprehensive fertility treatments designed to address diverse infertility causes. The type of treatment depends on:
              </p>
              <div className="bg-white p-6 rounded-xl shadow mb-6">
                <ul className="text-gray-700 space-y-2">
                  <li>• Type and cause of infertility (male, female, unexplained)</li>
                  <li>• Patient's age and reproductive history</li>
                  <li>• Hormonal evaluation results</li>
                  <li>• Previous fertility treatment history</li>
                  <li>• Overall health of both partners</li>
                </ul>
                <p className="text-gray-700 mt-4">Modern fertility care in India includes IVF, ICSI, IUI, fertility preservation, donor programs, genetic testing, and advanced minimally invasive procedures.</p>
              </div>
            </section>

            {/* IVF */}
            <section id="ivf-in-vitro-fertilization" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                IVF – In Vitro Fertilization
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                IVF is one of the most commonly recommended fertility procedures for couples struggling with infertility. During IVF treatment, eggs are collected from the ovaries and fertilized with sperm in a laboratory. The resulting embryos are carefully monitored before being transferred into the uterus.
              </p>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                Modern best IVF clinic India facilities use advanced embryo culture techniques and laboratory monitoring systems to improve fertilization and implantation outcomes.

              </p>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                In addition to advanced reproductive treatments, Ekam provides access to comprehensive healthcare services, including <a href="https://www.ekamcure.com/treatments/heart-valve-surgery-india" target="_blank" rel="noopener noreferrer"><strong> heart valve surgery in India </strong></a>, ensuring international patients receive expert care across multiple medical specialties.
              </p>
             
            </section>

            {/* ICSI */}
            <section id="icsi-intracytoplasmic-sperm-injection" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                ICSI – Intracytoplasmic Sperm Injection
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                ICSI is an advanced version of IVF where a single healthy sperm is injected directly into the egg to support fertilization. This procedure is often recommended for male infertility conditions such as low sperm count or poor sperm motility.
                <br>
                </br>
                ICSI has become a highly effective fertility procedure and is widely available at leading fertility centers across India.

              </p>
              
              
            </section>

            {/* IUI */}
            <section id="iui-intrauterine-insemination" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                IUI – Intrauterine Insemination
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-4">
                IUI is a less invasive fertility procedure that involves placing specially prepared sperm directly into the uterus during ovulation. It is commonly recommended for mild male infertility, unexplained infertility, or ovulation-related issues.<br></br>
IUI is often considered an affordable first-step fertility treatment before moving toward IVF procedures.

              </p>
              
            </section>

            {/* OTHER TREATMENTS */}
            <section id="ovulation-induction-with-timed-intercourse" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Ovulation Induction with Timed Intercourse
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-6">
                This fertility treatment involves medications that stimulate ovulation and improve egg production. Couples are advised regarding the best timing for intercourse to maximize pregnancy chances naturally.<br></br>
This treatment is commonly used for women with irregular ovulation or hormonal imbalance.

              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div id="ivm-in-vitro-maturation" className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">IVM – In Vitro Maturation</h3>
                  <p className="text-sm text-gray-700">IVM is a specialized fertility treatment where immature eggs are collected from the ovaries and matured in the laboratory before fertilization. This procedure may be suitable for women with PCOS or those at risk of ovarian hyperstimulation syndrome.</p>
                </div>
                <div id="laser-assisted-hatching" className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Laser Assisted Hatching (LAH)</h3>
                  <p className="text-sm text-gray-700">Laser-assisted hatching is an advanced laboratory technique used during IVF treatment to help embryos implant successfully into the uterine lining. It may be recommended in cases of repeated IVF failure or advanced maternal age.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
                  <h3 className="font-bold mb-2">Microfluidic Sperm Sorting</h3>
                  <p className="text-sm text-gray-700">Microfluidic sperm sorting is a modern sperm selection technique that helps identify healthier sperm with improved DNA quality. This technology may improve fertilization rates and embryo quality during IVF treatment.</p>
                </div>
              </div>
            </section>

            {/* FERTILITY PRESERVATION */}
            <section id="fertility-preservation" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Fertility Preservation
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-4">
                Fertility preservation services such as egg freezing, sperm freezing, and embryo freezing are increasingly popular among patients who wish to delay parenthood or preserve fertility before cancer treatment or other medical therapies.
              </p>
              
              
                
            </section>
            <section id="fertility-preservation" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
               Laparoscopy and Hysteroscopy
              </h2>
              <p className="bg-white p-6 rounded-xl shadow mb-4">
                Minimally invasive procedures such as laparoscopy and hysteroscopy are used to diagnose and treat conditions affecting fertility, including fibroids, endometriosis, adhesions, polyps, and blocked fallopian tubes.
              </p>
              
              
            </section>

            {/* ADVANCED TECHNOLOGIES */}
            <section id="advanced-technologies-used-in-ivf-treatment" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Advanced Technologies Used in IVF Treatment in India
              </h2>
             
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

  {/* Modern Embryology Laboratories */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Modern Embryology Laboratories
    </h3>

    <p className="text-sm text-gray-700">
      Leading fertility centers in India use advanced embryology laboratories
      equipped with temperature-controlled incubators, embryo monitoring
      systems, and sterile laboratory environments to support embryo
      development.
    </p>
  </div>

  {/* Genetic Screening */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Genetic Screening and Testing
    </h3>

    <p className="text-sm text-gray-700 mb-2">
      Some fertility centers offer preimplantation genetic testing (PGT) to identify certain genetic abnormalities in embryos before transfer. This can help reduce the risk of inherited conditions and improve embryo selection.

    </p>

  </div>

  {/* Cryopreservation */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Cryopreservation Techniques
    </h3>

    <p className="text-sm text-gray-700 mb-2">
      Modern freezing techniques allow embryos, eggs, and sperm to be preserved safely for future fertility treatments. Cryopreservation offers flexibility and additional treatment opportunities for patients.

    </p>

    
  </div>

  {/* Minimally Invasive Surgery */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Minimally Invasive Fertility Surgery
    </h3>

    <p className="text-sm text-gray-700">
     Advanced laparoscopic and hysteroscopic procedures help treat reproductive conditions with smaller incisions, reduced pain, shorter recovery time, and lower risk of complications.

    </p>
  </div>

</div>
            </section>

            {/* TREATMENT PROCESS */}
            <section id="treatment-process-for-international-patients" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Treatment Process for International Patients
              </h2>
              

              <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">

  
  <div className="grid md:grid-cols-3 gap-4 mb-4">

    {/* Step 1 */}
    <div className="bg-pink-50 p-4 rounded-lg">
      <p className="font-bold text-pink-700 mb-2">
        Initial Online Consultation
      </p>

      <p className="text-sm text-gray-700">
        International patients can begin their fertility journey with an online consultation. Fertility specialists review medical reports, fertility history, hormone tests, ultrasound findings, and previous treatment records to recommend the most appropriate treatment plan.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-pink-50 p-4 rounded-lg">
      <p className="font-bold text-pink-700 mb-2">
        Personalized Treatment Planning
      </p>

      <p className="text-sm text-gray-700">
        Each fertility journey is unique. Doctors create individualized treatment plans based on the patient's age, reproductive health, infertility diagnosis, and fertility goals.
      </p>

      <p className="text-sm text-gray-700 mt-2">
        Treatment schedules are carefully designed to ensure convenience for international patients traveling to India.
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-pink-50 p-4 rounded-lg">
      <p className="font-bold text-pink-700 mb-2">
        Visa and Travel Assistance
      </p>

      <p className="text-sm text-gray-700">
        Ekam Cure provides complete support for international medical travelers, including medical visa guidance, travel coordination, accommodation assistance, and airport pickup services.
      </p>

      <p className="text-sm text-gray-700 mt-2">
        Our patient support team helps simplify the medical tourism process and ensures a comfortable experience throughout the stay in India.
      </p>
    </div>

  </div>

  <div className="grid md:grid-cols-2 gap-4">

    {/* Step 4 */}
    <div className="bg-pink-50 p-4 rounded-lg">
      <p className="font-bold text-pink-700 mb-2">
        Hospital Admission and Treatment
      </p>

      <p className="text-sm text-gray-700">
        Upon arrival, patients undergo final evaluations, fertility monitoring, and treatment preparation. Fertility specialists and coordinators guide patients through every stage of the procedure with transparency and compassionate support.
      </p>
    </div>

    {/* Step 5 */}
    <div className="bg-pink-50 p-4 rounded-lg">
      <p className="font-bold text-pink-700 mb-2">
        Recovery and Follow-Up
      </p>

      <p className="text-sm text-gray-700">
        After embryo transfer or fertility procedures, patients receive detailed recovery instructions and follow-up guidance. Many consultations can continue online after patients return to their home countries.
      </p>
    </div>

  </div>
</div>
            </section>

            {/* CHOOSING BEST IVF CLINIC */}
            <section id="choosing-the-best-ivf-clinic-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Choosing the Best IVF Clinic India
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">

  {/* Importance of Experienced Specialists */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Importance of Experienced Specialists
    </h3>

    <p className="text-sm text-gray-700">
      When selecting the best IVF clinic India, patients should consider the experience of fertility specialists, embryologists, and reproductive medicine teams. Experienced doctors play an important role in managing complex fertility conditions and designing personalized treatment plans.
    </p>
  </div>

  {/* Advanced Fertility Technologies */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Advanced Fertility Technologies
    </h3>

    <p className="text-sm text-gray-700">
      A high-quality fertility center should provide access to advanced reproductive technologies, modern laboratories, and comprehensive fertility diagnostics.
    </p>
  </div>

  {/* Ethical and Transparent Care */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Ethical and Transparent Care
    </h3>

    <p className="text-sm text-gray-700">
      Transparency is essential during fertility treatment. Patients should choose fertility centers that provide clear communication regarding treatment plans, procedures, and expected outcomes.
    </p>
  </div>

  {/* International Patient Support Services */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      International Patient Support Services
    </h3>

    <p className="text-sm text-gray-700">
      Dedicated international patient departments help overseas patients coordinate appointments, travel arrangements, accommodation, and language support during treatment in India.
    </p>
  </div>

</div>
            </section>

            {/* COST OF IVF TREATMENT IN INDIA */}
<section id="cost-of-ivf-treatment-in-india" className="mb-16">
  
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
    Cost of IVF Treatment in India
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* Factors Affecting Fertility Treatment Costs */}
    <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
      <h3 className="font-bold mb-2">
        Factors Affecting Fertility Treatment Costs
      </h3>

      <p className="text-sm text-gray-700">
        The cost of IVF treatment in India can vary depending on several factors, including the type of procedure, fertility medications, diagnostic tests, laboratory technologies, hospital infrastructure, and the patient’s medical condition.
      </p>

      <p className="text-sm text-gray-700 mt-2">
        Additional procedures such as ICSI, embryo freezing, genetic testing, or donor programs may influence overall treatment expenses.
      </p>
    </div>

    {/* Why India Offers Affordable Fertility Care */}
    <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
      <h3 className="font-bold mb-2">
        Why India Offers Affordable Fertility Care
      </h3>

      <p className="text-sm text-gray-700">
        India remains one of the most affordable destinations for advanced fertility treatment because of lower healthcare operational costs and efficient medical infrastructure. International patients can often save a significant amount compared to treatment costs in Western countries.

      </p>

     
    </div>

    {/* Additional Expenses International Patients Should Consider */}
    <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
      <h3 className="font-bold mb-2">
        Additional Expenses International Patients Should Consider
      </h3>

      <p className="text-sm text-gray-700">
        Patients traveling for fertility treatment may also need to consider accommodation, transportation, medications, meals, interpreter services, and follow-up consultations during their stay.
      </p>
    </div>

  </div>
</section>

           

            {/* WHY CHOOSE EKAM CURE */}
            <section id="why-choose-ekam-cure-for-infertility-treatment-india" className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Why Choose Ekam Cure for Infertility Treatment India?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">

  {/* Personalized Fertility Support */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Personalized Fertility Support
    </h3>

    <p className="text-sm text-gray-700">
      Ekam Cure understands the emotional and physical challenges associated with infertility. Our team provides compassionate and personalized assistance throughout the treatment journey.
    </p>
  </div>

  {/* Trusted Hospital Coordination */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Trusted Hospital Coordination
    </h3>

    <p className="text-sm text-gray-700">
      We help international patients connect with reputable fertility hospitals and experienced reproductive specialists across India for safe and advanced fertility care.
    </p>
  </div>

</div>

{/* End-to-End Medical Tourism Assistance */}
<div className="bg-white p-6 rounded-xl shadow mb-6 border-l-4 border-pink-500 mt-6">
  
  <h3 className="font-bold mb-3">
    End-to-End Medical Tourism Assistance
  </h3>

  <p className="text-sm text-gray-700">
    Our services include online consultations, medical visa support, travel assistance, accommodation coordination, airport pickup, treatment scheduling, and post-treatment follow-up support.
  </p>

</div>

<div className="grid md:grid-cols-2 gap-6">

  {/* Multilingual and International Patient Support */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Multilingual and International Patient Support
    </h3>

    <p className="text-sm text-gray-700">
      We assist patients from different countries and cultural backgrounds by providing smooth communication and dedicated international patient care services.
    </p>
  </div>

  {/* Focus on Transparency and Trust */}
  <div className="bg-white p-6 rounded-xl shadow border-l-4 border-pink-500">
    <h3 className="font-bold mb-2">
      Focus on Transparency and Trust
    </h3>

    <p className="text-sm text-gray-700">
      We believe in ethical medical tourism support with realistic guidance, transparent communication, and patient-centered care throughout the fertility treatment journey.
    </p>
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
                      q: "Is IVF treatment in India safe for international patients?",
                      a: "Yes, many fertility hospitals and IVF centers in India follow internationally accepted medical standards and use advanced reproductive technologies for patient care.",
                    },
                    {
                      q: "How long should international patients stay in India for IVF treatment?",
                      a: "The duration depends on the treatment plan, but many IVF procedures may require patients to stay for a few weeks for monitoring, egg retrieval, embryo transfer, and recovery.",
                    },
                    {
                      q: "Can Ekam Cure help with medical visas?",
                      a: "Yes, Ekam Cure assists international patients with medical visa guidance, treatment coordination, and travel planning.",
                    },
                    {
                      q: "What is the success rate of IVF treatment?",
                      a: "IVF success rates vary depending on factors such as age, fertility condition, embryo quality, and overall reproductive health. Fertility specialists can provide individualized guidance after evaluation.",
                    },
                    {
                      q: "Is India affordable for fertility treatment?",
                      a: "Yes, India is considered one of the most affordable destinations for advanced fertility care compared to many Western countries.",
                    },
                    {
                      q: "What fertility treatments are available in India?",
                      a: "India offers IVF, ICSI, IUI, fertility preservation, donor programs, genetic testing, laparoscopy, hysteroscopy, and several advanced reproductive procedures.",
                    },
                    {
                      q: "Can international patients consult fertility doctors online before traveling?",
                      a: "Yes, many fertility specialists in India provide online consultations and medical record reviews for international patients before treatment planning.",
                    },
                    {
                      q: "What should patients carry while traveling for IVF treatment?",
                      a: "Patients should carry medical reports, previous fertility treatment records, hormonal test results, identification documents, and prescribed medications.",
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
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
                Conclusion
              </h2>
              <div className="bg-white p-6 rounded-xl shadow">
                <p className="text-gray-700 mb-4">
                  Choosing the right fertility destination is an important step for couples seeking parenthood support. With advanced medical infrastructure, experienced fertility specialists, modern reproductive technologies, and affordable healthcare services, IVF treatment in India has become a preferred choice for international patients worldwide.
                </p>
                <p className="text-gray-700 mb-4">
                  Whether patients are searching for a trusted IVF centre in India, comprehensive infertility treatment India services, or the best IVF clinic India, Ekam Cure helps simplify the medical journey with personalized support and trusted healthcare coordination.
                </p>
                <p className="text-gray-700">
                  Our mission is to help international patients receive compassionate, safe, and affordable fertility care while making their treatment journey in India smooth and stress-free. Contact Ekam Cure today to learn more about fertility treatment options in India and receive personalized guidance for your parenthood journey.
                </p>
              </div>
            </section>

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

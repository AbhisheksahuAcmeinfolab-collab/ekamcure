import Script from "next/script";
import React from 'react';
import { Calendar, Heart, Shield, Hospital, Users, Award, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: "Breast Cancer Treatment in India | Cost & Specialists Guide",
  description:
    "Comprehensive guide on breast cancer treatment in India, including cost, specialists, hospitals, diagnosis, and advanced treatment options.",
};



export default function BreastCancerTreatment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
<div className="relative bg-gradient-to-r from-[#053161] to-[#6796cc] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Breast Cancer Treatment in India
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed">
              Breast cancer is one of the most commonly diagnosed cancers among women worldwide, including in India. With improvements in medical infrastructure, early detection methods, and specialized oncology care, India today offers comprehensive breast cancer treatment options.
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-pink-500">
          <div className="flex items-center mb-6">
            <CheckCircle className="text-pink-600 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-gray-800">In this page</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Overview of Breast Cancer Treatment in India',
              'What is Breast Cancer',
              'Early Signs and Symptoms of Breast Cancer in Women',
              'Causes and Risk Factors of Breast Cancer',
              'Stages of Breast Cancer',
              'Breast Cancer Diagnosis Tests',
              'Best Breast Cancer Treatment Options',
              'Breast Cancer Surgery in India',
              'Breast Cancer Treatment Cost in India',
              'Breast Cancer Treatment Cost Comparison (Country-Wise)',
              'Why Breast Cancer Treatment in India is Affordable',
              'Best Breast Cancer Hospitals in India',
              'Leading Super-Specialty Hospitals for Cancer & Breast Cancer Treatment in India',
              'Breast Cancer Specialists in India',
              'Breast Cancer Treatment Success Rate in India',
              'Advanced and Latest Breast Cancer Treatment in India',
              'Breast Cancer Treatment in Major Indian Cities',
              'Book Appointment with Breast Cancer Specialist in India',
              'Frequently Asked Questions (FAQs)',
              'Conclusion'
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="text-gray-700 hover:text-pink-600 hover:bg-pink-50 p-3 rounded-lg transition-all duration-200 flex items-start group"
              >
                <span className="text-pink-500 mr-2 group-hover:scale-110 transition-transform">›</span>
                <span className="text-sm">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview Section */}
        <section id="overview-of-breast-cancer-treatment-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Overview of Breast Cancer Treatment in India
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Breast cancer treatment in India follows globally accepted medical protocols and is delivered through specialized cancer hospitals and oncology centers. Treatment planning usually involves a team of specialists, including surgical oncologists, medical oncologists, and radiation oncologists. This coordinated approach ensures that patients receive personalized care, focusing not only on disease control but also on recovery, emotional support, and long-term follow-up.
            </p>
          </div>
        </section>

        {/* What is Breast Cancer Section */}
        <section id="what-is-breast-cancer" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            What is Breast Cancer
          </h2>
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Breast cancer occurs when abnormal cells in breast tissue begin to grow uncontrollably. These cells may form a lump or mass and, if untreated, can spread to nearby tissues or other parts of the body. Breast cancer can affect both women and men, although it is significantly more common in women. Early identification plays a critical role in improving treatment outcomes.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-pink-600 mb-4">Definition and Meaning of Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Breast cancer refers to the uncontrolled growth of cells originating in different parts of the breast, such as milk ducts or lobules. Normally, cell growth is regulated by the body, but cancer develops when this control mechanism fails. Over time, these abnormal cells may invade surrounding tissues, making timely medical evaluation essential.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-pink-600 mb-4">How Breast Cancer Develops in the Body</h3>
                <p className="text-gray-700 leading-relaxed">
                  Breast cancer usually begins with changes at the cellular level. Genetic mutations may cause normal breast cells to multiply faster than usual. These abnormal cells can gradually form tumors. In some cases, cancer cells may enter the lymphatic system or bloodstream, allowing the disease to spread beyond the breast if not treated early.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-pink-600 mb-4">Types of Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  There are several types of breast cancer, depending on where the abnormal cells originate. Common forms include ductal carcinoma, which begins in the milk ducts, and lobular carcinoma, which starts in the milk-producing glands. Other less common types may behave differently and require specific treatment approaches determined by specialists.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Early Signs and Symptoms */}
        <section id="early-signs-and-symptoms-of-breast-cancer-in-women" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Early Signs and Symptoms of Breast Cancer in Women
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Recognizing early symptoms is one of the most important steps toward timely diagnosis. Many women notice changes in their breast during routine activities or self-examination. While not every change indicates cancer, persistent or unusual symptoms should always be evaluated by a healthcare professional.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Early Signs of Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Early signs may include a painless lump in the breast or underarm, changes in breast shape or size, or unusual skin texture. Some women may notice redness, dimpling, or thickening of the breast skin. These early indicators often appear subtle and should not be ignored.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Common Symptoms of Breast Cancer in Women</h3>
                <p className="text-gray-700 leading-relaxed">
                  As the condition progresses, symptoms may include persistent breast pain, nipple discharge that is not related to breastfeeding, or changes in nipple position. In some cases, the nipple may turn inward or the surrounding skin may appear irritated. These symptoms can vary depending on the type and stage of breast cancer.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-lg p-6 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">When to See a Doctor</h3>
                <p className="text-gray-700 leading-relaxed">
                  Any new or persistent breast change should be discussed with a doctor, even if it does not cause pain. Early medical evaluation allows proper testing and helps rule out serious conditions. Consulting a specialist at the right time can significantly improve clarity, treatment planning, and peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Causes and Risk Factors */}
        <section id="causes-and-risk-factors-of-breast-cancer" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Causes and Risk Factors of Breast Cancer
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Breast cancer does not usually develop due to a single cause. In most cases, it results from a combination of biological, hormonal, genetic, and lifestyle-related factors. Understanding these risk elements helps individuals become more aware and proactive about regular screening and medical check-ups.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-600 mb-3 flex items-center">
                  <Shield className="mr-3" size={24} />
                  Genetic and Hormonal Factors
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Certain genetic changes can increase the likelihood of breast cancer. A family history of the disease may raise risk, especially when close relatives have been affected. Hormonal exposure over time, including early menstruation or late menopause, may also influence breast tissue changes that contribute to cancer development.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-600 mb-3 flex items-center">
                  <Heart className="mr-3" size={24} />
                  Lifestyle and Environmental Factors
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Lifestyle habits can play a role in overall breast health. Limited physical activity, long-term alcohol consumption, and excess body weight after menopause are commonly associated with increased risk. Environmental exposure to radiation or certain chemicals may also contribute, making preventive awareness important.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-600 mb-3 flex items-center">
                  <Calendar className="mr-3" size={24} />
                  Age and Family History
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The risk of breast cancer generally increases with age. Women above midlife are more commonly diagnosed, although younger individuals can also be affected. A family history of breast or ovarian cancer may indicate inherited risk, which doctors evaluate carefully during diagnosis and treatment planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stages of Breast Cancer */}
        <section id="stages-of-breast-cancer" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Stages of Breast Cancer
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Breast cancer is classified into stages to describe how far the disease has progressed. Staging helps doctors determine treatment strategies and understand the extent of tumor growth or spread. Each stage requires a different medical approach and level of care.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  0-1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stage 0 and Stage 1 Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Early-stage breast cancer is usually confined to the breast tissue. Stage 0 refers to non-invasive cancer, while Stage 1 involves small tumors that have not spread significantly. At this stage, treatment is often highly structured and focused on preventing progression.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="bg-yellow-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  2-3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stage 2 and Stage 3 Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  These stages indicate larger tumors or limited spread to nearby lymph nodes. Treatment usually involves a combination of therapies designed to control the disease locally and reduce the risk of recurrence. Multidisciplinary planning becomes especially important at these stages.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Stage 4 (Metastatic) Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stage 4 breast cancer occurs when cancer cells spread to distant organs such as bones, lungs, or liver. Although it is considered advanced, treatment focuses on disease management, symptom control, and maintaining quality of life through long-term medical care.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis Tests */}
        <section id="breast-cancer-diagnosis-tests" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Breast Cancer Diagnosis Tests
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Accurate diagnosis is essential for selecting the most appropriate treatment plan. Doctors use a combination of physical examinations, imaging studies, and laboratory tests to confirm the presence of breast cancer and understand its characteristics.
            </p>

            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Clinical Breast Examination</h3>
                <p className="text-gray-700 leading-relaxed">
                  A clinical breast examination is often the first step, where a doctor checks for lumps, thickening, or visible changes. This examination helps determine whether further diagnostic testing is required.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Mammography and Imaging Tests</h3>
                <p className="text-gray-700 leading-relaxed">
                  Imaging techniques such as mammography, ultrasound, or advanced scans allow doctors to view internal breast tissue. These tests help identify abnormal areas that may not be felt physically and guide further evaluation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-600 mb-3">Biopsy and Pathology Testing</h3>
                <p className="text-gray-700 leading-relaxed">
                  A biopsy involves collecting a small tissue sample from the suspicious area. This sample is examined under a microscope to confirm whether cancer cells are present. Biopsy results also help doctors understand cancer type and plan targeted treatment accordingly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Treatment Options */}
        <section id="best-breast-cancer-treatment-options" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Best Breast Cancer Treatment Options
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Breast cancer treatment is planned based on several factors, including cancer stage, type, overall health, and patient preferences. Doctors usually combine different therapies to achieve effective disease control while preserving quality of life. Treatment decisions are always personalized rather than based on a single standard approach.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Surgery for Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Surgery is often the primary treatment for many patients. The goal is to remove cancerous tissue while protecting surrounding healthy areas when possible. Surgical planning depends on tumor size, location, and whether cancer has spread to nearby lymph nodes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Chemotherapy for Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Chemotherapy uses medicines to destroy cancer cells or slow their growth. It may be given before surgery to shrink tumors or after surgery to reduce the risk of recurrence. Treatment is delivered in cycles under medical supervision to manage side effects safely.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Radiation Therapy for Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Radiation therapy uses high-energy rays to target remaining cancer cells after surgery. It is a localized treatment that focuses on specific areas of the breast or chest wall. Radiation plays an important role in lowering the chance of cancer returning in the treated region.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-3">Immunotherapy for Breast Cancer Treatment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Immunotherapy is an advanced cancer treatment that helps the body's immune system recognize and destroy cancer cells. It is not used for all breast cancer types, but it has shown strong results in specific cases.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-indigo-500 md:col-span-2 lg:col-span-2">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">Targeted Therapy and Hormone Therapy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Targeted therapy works by focusing on specific characteristics of cancer cells, limiting damage to normal cells. Hormone therapy is used when cancer growth is influenced by hormones. These therapies are selected only after detailed laboratory testing confirms suitability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breast Cancer Surgery */}
        <section id="breast-cancer-surgery-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Breast Cancer Surgery in India
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Breast cancer surgery in India is performed at specialized cancer centers by trained surgical oncologists. The type of surgery depends on disease stage, tumor behavior, and patient-related factors. Doctors carefully explain all options before finalizing the surgical plan.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 rounded-full p-3 mr-4">
                    <Hospital className="text-pink-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Lumpectomy Surgery</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A lumpectomy involves removing the tumor along with a small margin of surrounding tissue. This option is often considered when cancer is detected early. Breast shape is largely preserved, and radiation therapy is usually recommended afterward.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-4">
                    <Hospital className="text-purple-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Mastectomy Surgery</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Mastectomy involves removal of the entire breast and may be advised in cases of larger tumors or multiple cancer sites. In selected patients, reconstruction options may be discussed to support physical recovery and emotional well-being.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Award className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Robotic and Advanced Surgical Techniques</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Some hospitals offer advanced surgical approaches that focus on precision and controlled tissue removal. These methods aim to reduce trauma and support faster recovery when clinically appropriate. Final suitability is always determined by the treating surgeon.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Heart className="text-green-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Recovery After Breast Cancer Surgery</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Recovery varies depending on the type of surgery and individual health. Patients typically require follow-up visits, wound care guidance, and gradual return to daily activities. Emotional support and rehabilitation may also form part of the recovery process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced and Modern Treatments */}
        <section id="advanced-and-latest-breast-cancer-treatment-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Advanced and Modern Breast Cancer Treatments
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Modern breast cancer care increasingly focuses on personalized medicine. Treatment plans are designed after understanding tumor biology rather than using a single routine method for every patient.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-600 mb-3">Personalized Treatment Planning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Doctors analyze cancer characteristics through laboratory testing to choose therapies that are most likely to be effective. This approach helps avoid unnecessary treatments and supports more focused care.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Immunotherapy and Newer Approaches</h3>
                <p className="text-gray-700 leading-relaxed">
                  In selected cases, immunotherapy may be considered to help the immune system recognize and fight cancer cells. These treatments are introduced carefully based on clinical suitability and medical guidance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Multidisciplinary Cancer Care</h3>
                <p className="text-gray-700 leading-relaxed">
                  Advanced breast cancer treatment often involves coordination between surgeons, oncologists, radiologists, and support teams. This collaborative approach ensures continuity of care from diagnosis through recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Cost Section */}
        <section id="breast-cancer-treatment-cost-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Breast Cancer Treatment Cost in India
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The cost of breast cancer treatment in India can vary depending on multiple medical and non-medical factors. Since treatment plans are personalized, expenses differ from one patient to another. Doctors usually estimate costs only after reviewing diagnostic reports, cancer stage, and the required combination of therapies.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-3">Average Breast Cancer Treatment Cost in India</h3>
                <p className="text-gray-700 leading-relaxed">
                  There is no fixed price for breast cancer treatment. The total cost depends on whether treatment involves surgery, chemotherapy, radiation therapy, targeted therapy, or a combination of these. Early-stage cases may require fewer procedures, while advanced stages often need long-term treatment planning and follow-up care.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Cost of Surgery, Chemotherapy, and Radiation Therapy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each treatment method has its own cost structure. Surgery expenses depend on the type of procedure performed and hospital facilities. Chemotherapy costs vary based on drug protocols and number of treatment cycles. Radiation therapy costs are influenced by the technology used and treatment duration.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Factors Affecting Breast Cancer Treatment Cost</h3>
                <p className="text-gray-700 leading-relaxed">
                  Several factors influence overall expenses, including hospital type, location, length of stay, diagnostic tests, and supportive care needs. Additional costs may arise from medications, rehabilitation services, or follow-up consultations. Doctors usually explain these aspects clearly before starting treatment.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md border-t-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Breast Cancer Treatment Packages in India</h3>
                <p className="text-gray-700 leading-relaxed">
                  Many hospitals offer treatment packages that combine diagnostics, surgery, and post-treatment care. These packages help patients understand expected expenses in advance and support structured planning. Final package details depend on individual medical requirements rather than standardized pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Comparison Table */}
        <section id="breast-cancer-treatment-cost-comparison-country-wise-" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Breast Cancer Treatment Cost Comparison (Country-Wise)
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Country</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Approx. Cost (USD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { country: 'India', cost: '$4,800 – $14,500+', highlight: true },
                    { country: 'United States', cost: '$40,000 – $100,000+' },
                    { country: 'United Kingdom', cost: '$20,000 – $40,000' },
                    { country: 'Germany', cost: '$30,000 – $60,000' },
                    { country: 'Australia', cost: '$20,000 – $50,000' },
                    { country: 'Singapore', cost: '$15,000 – $25,000' },
                    { country: 'Turkey', cost: '$7,000 – $12,000' }
                  ].map((row, index) => (
                    <tr key={index} className={row.highlight ? 'bg-pink-50 font-semibold' : 'hover:bg-gray-50'}>
                      <td className="px-6 py-4 text-gray-900">{row.country}</td>
                      <td className="px-6 py-4 text-gray-700">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600 italic">
              The final cost depends on cancer stage, treatment combination, hospital type, and duration of care. Currency values are approximate and may vary with exchange rates.
            </div>
          </div>
        </section>

        {/* Why Affordable Section */}
        <section id="why-breast-cancer-treatment-in-india-is-affordable" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Why Breast Cancer Treatment in India Is Considered Affordable
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              India is often chosen for cancer care due to its balance of medical expertise and cost efficiency. Treatment affordability does not indicate reduced quality but reflects differences in healthcare systems and operational costs.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-blue-600 mb-3">Comparison with International Treatment Costs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Breast cancer treatment in India is generally more accessible compared to many developed countries. Lower hospital infrastructure costs and localized medical services contribute to this difference, while treatment protocols continue to follow internationally accepted standards.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-purple-600 mb-3">Availability of Advanced Medical Facilities</h3>
                <p className="text-gray-700 leading-relaxed">
                  Many Indian cancer centers are equipped with modern diagnostic tools and treatment technologies. These facilities support comprehensive care without significantly increasing patient expenses, making advanced treatment more accessible.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-pink-600 mb-3">Support Systems and Patient Assistance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hospitals often provide counseling, care coordination, and financial guidance to help patients manage treatment planning. Some patients may also explore institutional or organizational assistance programs based on eligibility and medical advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Hospitals Section */}
        <section id="best-breast-cancer-hospitals-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Best Breast Cancer Hospitals in India
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Choosing the right hospital is an important step in breast cancer treatment. A well-equipped cancer center provides not only medical treatment but also coordinated care, emotional support, and long-term follow-up. Patients are advised to evaluate hospitals based on expertise, infrastructure, and multidisciplinary care availability rather than reputation alone.
            </p>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Factors to Consider When Choosing a Breast Cancer Hospital</h3>
                <p className="text-gray-700 leading-relaxed">
                  Key factors include availability of specialized oncologists, modern diagnostic facilities, and structured treatment planning. Hospitals with multidisciplinary tumor boards often provide more coordinated decision-making. Patient support services, nursing care, and transparency in communication also play an important role.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Facilities Available at Leading Cancer Centers</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive cancer hospitals usually offer imaging services, pathology labs, surgical units, chemotherapy day-care facilities, and radiation therapy departments under one roof. This integrated approach helps reduce delays and ensures continuity throughout the treatment journey.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Importance of Multidisciplinary Cancer Care</h3>
                <p className="text-gray-700 leading-relaxed">
                  Breast cancer treatment often requires collaboration between surgeons, medical oncologists, radiation specialists, radiologists, and counselors. A multidisciplinary approach allows experts to review each case collectively, helping develop balanced treatment plans tailored to individual patient needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leading Hospitals List */}
        <section id="leading-super-specialty-hospitals-for-cancer-breast-cancer-treatment-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Leading Super-Specialty Hospitals for Cancer & Breast Cancer Treatment in India
          </h2>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-sm text-gray-600 italic mb-8">
              These cost ranges are approximate averages and can vary significantly by city, hospital accreditation, doctor expertise, diagnostics (PET/CT, MRI), type of surgery, number of chemotherapy cycles, and use of newer treatments (targeted or immunotherapy).
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Max Healthcare',
                  description: 'Max Healthcare offers comprehensive cancer and breast cancer services including surgical oncology, radiation therapy, chemotherapy, and supportive care.',
                  cost: '$7,200 – $14,500+ for full breast cancer treatment depending on stage and therapies.',
                  color: 'pink'
                },
                {
                  name: 'Yatharth Super Speciality Hospital',
                  description: 'Yatharth delivers integrated cancer care with personalized treatment plans and modern diagnostics.',
                  cost: '$4,800 – $12,000+ for breast cancer management.',
                  color: 'purple'
                },
                {
                  name: 'Fortis Hospital / Fortis Cancer Institute',
                  description: 'Fortis provides structured oncology services with multidisciplinary teams and advanced treatment protocols.',
                  cost: '$6,000 – $13,000+ for complete breast cancer care.',
                  color: 'blue'
                },
                {
                  name: 'Action Cancer Hospital',
                  description: 'Action Cancer Hospital focuses specifically on cancer treatment with supportive care throughout therapy.',
                  cost: '$4,800 – $12,000+ for breast cancer treatment services.',
                  color: 'green'
                },
                {
                  name: 'Apollo Hospitals',
                  description: 'Apollo is a major private healthcare provider offering comprehensive oncology, including advanced surgical techniques and multidisciplinary cancer care.',
                  cost: '$7,200 – $14,500+ for breast cancer treatment.',
                  color: 'indigo'
                },
                {
                  name: 'Asian Heart Institute',
                  description: 'Asian Heart Institute mainly specializes in cardiac care but also provides oncology support through associated teams and partnerships. Breast cancer treatment options follow typical private hospital cost structures.',
                  cost: '$6,000 – $12,000+ for breast cancer care.',
                  color: 'red'
                },
                {
                  name: 'Yashoda Hospitals',
                  description: 'Yashoda Hospitals offers multi-specialty cancer and breast cancer services, including diagnostics, surgery, chemotherapy, and radiation.',
                  cost: '$4,800 – $12,000+ for breast cancer treatment.',
                  color: 'pink'
                },
                {
                  name: 'Batra Hospital & Medical Research Centre',
                  description: 'Batra Hospital provides comprehensive healthcare with oncology services for cancer and breast cancer patients.',
                  cost: '$4,800 – $12,000+ depending on treatment complexity.',
                  color: 'purple'
                },
                {
                  name: 'PSRI Hospital',
                  description: 'PSRI Hospital (Prakash Shanti­raam Hospital) provides general and cancer care, including breast cancer treatment within private hospital cost ranges.',
                  cost: '$4,800 – $12,000+ for breast cancer management.',
                  color: 'blue'
                }
              ].map((hospital, index) => (
                <div key={index} className={`bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-${hospital.color}-500`}>
                  <h3 className={`text-xl font-bold text-${hospital.color}-600 mb-3`}>{hospital.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{hospital.description}</p>
                  <div className={`bg-${hospital.color}-50 rounded-lg p-3`}>
                    <p className="text-sm font-semibold text-gray-800">Approx. Cost:</p>
                    <p className="text-gray-700">{hospital.cost}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialists Section */}
        <section id="breast-cancer-specialists-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Breast Cancer Specialists in India
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Breast cancer care is managed by different specialists, each responsible for a specific aspect of treatment. Working together, these professionals ensure accurate diagnosis, effective therapy, and comprehensive patient support.
            </p>

            {/* Our Cancer Specialists */}
            <h3 className="text-2xl font-bold text-pink-600 mb-6">Our Cancer Specialists</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-pink-500">
                <div className="flex items-start">
                  <div className="bg-pink-200 rounded-full p-3 mr-4">
                    <Users className="text-pink-700" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr (Prof) Navneet Kaur</h4>
                    <p className="text-pink-700 font-semibold mb-2">Senior Director & Unit Head - Breast Surgical Oncology</p>
                    <p className="text-gray-700 text-sm mb-2">Cancer Care / Oncology, Breast Cancer, Oncology Reconstructive Surgery</p>
                    <p className="text-gray-600 text-sm font-semibold">Experience: 36+ Years</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                <div className="flex items-start">
                  <div className="bg-purple-200 rounded-full p-3 mr-4">
                    <Users className="text-purple-700" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Raghav Kesri</h4>
                    <p className="text-purple-700 font-semibold mb-2">Senior Consultant and HOD Of Medical Oncology</p>
                    <p className="text-gray-700 text-sm mb-2">MBBS, MD, DrNB (Medical Oncology)</p>
                    <p className="text-gray-600 text-sm">Cancer Transplant, Medical Oncology</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <div className="bg-blue-200 rounded-full p-3 mr-4">
                    <Users className="text-blue-700" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. Rajesh Kapoor</h4>
                    <p className="text-blue-700 font-semibold mb-2">Senior Director - GI & Hepato–Pancreatico-Biliary Surgery</p>
                    <p className="text-gray-700 text-sm">Bariatric Surgery / Metabolic, Liver Transplant and Biliary Sciences, Department of General Surgery and Robotics, Gastrointestinal & Hepatobiliary Oncology, Gastrointestinal Surgery, Robotic Surgery</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
                <div className="flex items-start">
                  <div className="bg-green-200 rounded-full p-3 mr-4">
                    <Users className="text-green-700" size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Dr. S. M. Shuaib Zaidi</h4>
                    <p className="text-green-700 font-semibold mb-2">Principal Director & Unit Head – Surgical Oncology</p>
                    <p className="text-gray-700 text-sm mb-2">Surgical Oncology, Cancer Care / Oncology, Thoracic Oncology, Gynecologic Oncology, Head & Neck Oncology, Gastro Intestinal & Hepatopancreatobiliary Surgical Oncology</p>
                    <p className="text-gray-600 text-sm font-semibold">Experience: 27+ Years</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who Treats and Roles */}
            <div className="space-y-6 mt-8">
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 border-l-4 border-pink-500">
                <h3 className="text-xl font-bold text-pink-700 mb-3">Who Treats Breast Cancer</h3>
                <p className="text-gray-700 leading-relaxed">
                  Breast cancer treatment usually involves surgical oncologists, medical oncologists, and radiation oncologists. Additional support may come from radiologists, pathologists, oncology nurses, and rehabilitation experts. Each specialist contributes to different stages of care.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Role of Surgical, Medical, and Radiation Oncologists</h3>
                <p className="text-gray-700 leading-relaxed">
                  Surgical oncologists focus on tumor removal and lymph node assessment. Medical oncologists manage chemotherapy, targeted therapy, and hormone-based treatments. Radiation oncologists plan localized radiation therapy when required. Coordination among these specialists ensures treatment continuity.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Importance of Experience and Specialization</h3>
                <p className="text-gray-700 leading-relaxed">
                  Specialists with focused experience in breast cancer management are better equipped to evaluate treatment options and anticipate complications. Patients are encouraged to seek doctors who regularly treat breast cancer cases and follow evidence-based clinical practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Rate Section */}
        <section id="breast-cancer-treatment-success-rate-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Breast Cancer Treatment Success Rate in India
          </h2>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Treatment outcomes in breast cancer depend on multiple medical and individual factors rather than a single measure. Success is influenced by cancer stage at diagnosis, biological behavior of the tumor, patient health condition, and response to therapy.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-500">
                <h3 className="text-xl font-bold text-green-700 mb-3">Role of Early Detection in Treatment Outcomes</h3>
                <p className="text-gray-700 leading-relaxed">
                  Early-stage breast cancer is generally easier to manage and allows a wider range of treatment options. Timely diagnosis helps doctors intervene before the disease progresses, improving long-term disease control.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Impact of Personalized Treatment Planning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Personalized treatment based on tumor characteristics allows doctors to select therapies more effectively. This approach reduces unnecessary exposure to treatments and supports better tolerance and response.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-700 mb-3">Importance of Follow-Up and Long-Term Care</h3>
                <p className="text-gray-700 leading-relaxed">
                  Regular follow-up visits are essential after completion of treatment. Monitoring helps detect recurrence early, manage side effects, and support physical and emotional recovery over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment in Major Cities */}
        <section id="breast-cancer-treatment-in-major-indian-cities" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Breast Cancer Treatment in Major Indian Cities
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Breast cancer treatment services are available across several major cities in India. These cities host specialized cancer hospitals and oncology centers equipped to manage diagnosis, treatment, and follow-up care. Choosing a city often depends on accessibility, medical infrastructure, and personal preferences.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <MapPin className="text-red-600 mr-3" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Breast Cancer Treatment in Delhi</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Delhi has multiple cancer care centers offering comprehensive breast cancer treatment services. Patients can access multidisciplinary teams, diagnostic facilities, and advanced therapy options within the city and surrounding regions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <MapPin className="text-blue-600 mr-3" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Breast Cancer Treatment in Mumbai</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Mumbai is known for its established healthcare infrastructure and availability of specialized oncology services. Many patients seek treatment here due to experienced specialists and integrated cancer care facilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <MapPin className="text-purple-600 mr-3" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Breast Cancer Treatment in Bangalore</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Bangalore offers modern medical centers focused on personalized cancer treatment. The city provides access to oncology specialists, diagnostic technology, and supportive care services under structured treatment programs.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-3">
                  <MapPin className="text-green-600 mr-3" size={28} />
                  <h3 className="text-xl font-bold text-gray-900">Breast Cancer Treatment in Hyderabad</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Hyderabad has emerging cancer treatment facilities providing coordinated care for breast cancer patients. Hospitals focus on evidence-based treatment planning and patient-centered support systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Book Appointment Section */}
        <section id="book-appointment-with-breast-cancer-specialist-in-india" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Book Appointment with Breast Cancer Specialist in India
          </h2>
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Consulting a specialist is an important step after diagnosis or when symptoms are noticed. Early consultation helps clarify treatment options and allows timely medical planning.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 rounded-full p-3 mr-3">
                    <Calendar className="text-pink-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">How to Book a Consultation</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Appointments can usually be scheduled through hospital websites, patient care coordinators, or referral systems. Medical reports, imaging results, and prior test records help specialists provide accurate guidance during the first consultation.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 rounded-full p-3 mr-3">
                    <Phone className="text-purple-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Online Consultation Options</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Some hospitals offer online or tele-consultation services, allowing patients to discuss reports and treatment pathways remotely. This option can be helpful for initial opinions or follow-up discussions.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-3">
                    <Hospital className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">What to Expect During the First Visit</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  During the first consultation, the specialist reviews medical history, examines reports, and may suggest further tests if needed. Treatment planning is discussed gradually, ensuring the patient understands available options clearly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="frequently-asked-questions-faqs-" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Frequently Asked Questions (FAQs)
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
            <div className="space-y-6">
              {[
                {
                  question: "Is breast cancer treatable if detected early?",
                  answer: "Early detection allows timely medical intervention and structured treatment planning. Doctors can often offer multiple treatment options when the disease is identified at an early stage."
                },
                {
                  question: "How long does breast cancer treatment usually take?",
                  answer: "Treatment duration varies depending on cancer stage, therapy type, and individual response. Some treatments last a few months, while others may involve long-term follow-up care."
                },
                {
                  question: "Can breast cancer treatment be personalized?",
                  answer: "Yes, treatment is commonly personalized based on tumor characteristics, medical condition, and patient needs. Doctors aim to choose therapies that provide the best balance of effectiveness and tolerance."
                },
                {
                  question: "When should someone consult a breast cancer specialist?",
                  answer: "A specialist should be consulted if persistent breast changes, unusual symptoms, or abnormal test results are noticed. Early consultation helps ensure accurate diagnosis and timely care."
                },
                {
                  question: "What is breast cancer and how does it start?",
                  answer: "Breast cancer develops when abnormal cells in breast tissue begin to grow uncontrollably. These changes usually occur due to genetic or hormonal factors that affect normal cell regulation. Over time, these abnormal cells may form a lump or mass and require medical evaluation."
                },
                {
                  question: "What are the early signs of breast cancer in women?",
                  answer: "Early signs may include a new lump in the breast or underarm, changes in breast size or shape, skin dimpling, or nipple-related changes. These symptoms are not always painful, which is why regular awareness and timely medical consultation are important."
                },
                {
                  question: "What are the stages of breast cancer?",
                  answer: "Breast cancer is classified into stages based on tumor size, lymph node involvement, and spread. Early stages are limited to the breast, while advanced stages involve nearby or distant organs. Staging helps doctors plan the most appropriate treatment approach."
                },
                {
                  question: "How is breast cancer diagnosed?",
                  answer: "Diagnosis usually involves a combination of clinical examination, imaging tests such as mammography or ultrasound, and a biopsy. The biopsy confirms whether cancer cells are present and helps doctors understand the type of breast cancer."
                },
                {
                  question: "What are the best breast cancer treatment options in India?",
                  answer: "Treatment options may include surgery, chemotherapy, radiation therapy, hormone therapy, or targeted therapy. The choice depends on cancer stage, tumor characteristics, and the patient's overall health. Treatment planning is always personalized by specialists."
                },
                {
                  question: "How much does breast cancer treatment cost in India?",
                  answer: "The cost of breast cancer treatment in India varies depending on treatment type, hospital facilities, and duration of care. Since each patient's treatment plan is different, doctors usually provide cost estimates only after reviewing medical reports."
                },
                {
                  question: "Who are breast cancer specialists in India?",
                  answer: "Breast cancer is treated by a team of specialists that may include surgical oncologists, medical oncologists, and radiation oncologists. These experts work together to design and manage a coordinated treatment plan for each patient."
                },
                {
                  question: "Can I book an appointment with a breast cancer specialist online in India?",
                  answer: "Many hospitals and cancer centers in India offer online appointment or consultation options. This allows patients to share reports, seek expert guidance, and plan further evaluation conveniently."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-pink-700 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 pb-4 border-b-4 border-pink-500 inline-block">
            Conclusion
          </h2>
          <div className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 rounded-xl shadow-lg p-8 mt-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Breast cancer treatment in India combines medical expertise, structured care, and patient-focused support. From early diagnosis to advanced therapy options, patients have access to comprehensive treatment pathways. Understanding symptoms, seeking timely consultation, and choosing experienced specialists can make a meaningful difference in the treatment journey.
            </p>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
     <div className="bg-gradient-to-r from-[#053161] to-[#6796cc] text-white py-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take the Next Step?</h2>
          <p className="text-xl text-pink-100 mb-8">Book your consultation with our breast cancer specialists today</p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
}
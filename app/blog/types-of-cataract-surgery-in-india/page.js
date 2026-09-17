import Link from "next/link";

export const metadata = {
  title: "Types of Cataract Surgery in India: Safest Surgery & Best Age",
  description:
    "Explore the types of cataract surgery in India, including phaco, MSICS and laser surgery. Learn about safety, the best age and treatment options.",
};

const relatedArticles = [
  { title: "Best Cancer Hospitals in India", href: "/blog/best-cancer-hospitals-in-india" },
  { title: "Best Hospitals for Hip Replacement Surgery in India", href: "/blog/best-hospitals-for-hip-replacement-surgery-in-india" },
  { title: "Hip Replacement Surgery for International Patients", href: "/blog/hip-replacement-surgery-for-international-patients" },
  { title: "Hip Replacement Surgery Success Rate", href: "/blog/hip-replacement-surgery-success-rate" },
  { title: "Hip Replacement Surgery Risks & Complications", href: "/blog/hip-replacement-surgery-risks-complications" },
  { title: "Hormone Therapy for Prostate Cancer in India", href: "/blog/hormone-therapy-for-prostate-cancer-in-india" },
  { title: "Medical Visa for Cancer Treatment in India", href: "/blog/medical-visa-cancer-treatment-india" },
  { title: "Metastatic Prostate Cancer Treatment in India", href: "/blog/metastatic-prostate-cancer-treatment-india" },
  { title: "Prostate Cancer Survival Rate in India", href: "/blog/prostate-cancer-survival-rate-in-india" },
  { title: "Radiation Therapy for Prostate Cancer in India", href: "/blog/radiation-therapy-for-prostate-cancer-in-india" },
  { title: "Top 10 Cancer Hospitals in India", href: "/blog/top-10-cancer-hospitals-in-india" },
  { title: "What Are the Negatives of a Hip Replacement", href: "/blog/what-are-the-negatives-of-a-hip-replacement" },
  { title: "Why Choose India for Prostate Cancer Treatment", href: "/blog/why-choose-india-for-prostate-cancer-treatment" },
];

const moreRelatedLinks = [
  { title: "Hip Replacement Surgery Cost in India for International Patients", href: "/cost-of-treatment/hip-replacement-surgery-cost-india-international-patients" },
  { title: "Hip Replacement Surgery for International Patients", href: "/blog/hip-replacement-surgery-for-international-patients" },
  { title: "Best Hospitals for Hip Replacement Surgery in India", href: "/blog/best-hospitals-for-hip-replacement-surgery-in-india" },
  { title: "Hip Replacement Surgery Success Rate", href: "/blog/hip-replacement-surgery-success-rate" },
  { title: "What Are the Negatives of a Hip Replacement?", href: "/blog/what-are-the-negatives-of-a-hip-replacement" },
  { title: "Hip Replacement Surgery Risks and Complications", href: "/blog/hip-replacement-surgery-risks-complications" },
  { title: "Top 10 Hospitals in India 2026 for International Patients", href: "/top-hospitals/top-10-hospitals-india-for-international-patients" },
  { title: "Medical Visa for Treatment in India: Cost, Requirements & Application Process", href: "/services/medical-visa-for-treatment-in-india" },
];

export default function TypesOfCataractSurgeryInIndiaPage() {
  return (
    <main className="bg-[#F6F9FD] text-[#053161]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#053161] via-[#1B4F9C] to-[#6796CC]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white" />
          <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-white" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm font-medium">
              Ophthalmology • Eye Care Guide
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Types of Cataract Surgery in India: Safest Surgery & Best Age for Cataract Treatment
            </h1>

            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Cataract is one of the most common causes of vision impairment, particularly among older adults. Learn about surgical types, safety, timing, and treatment in India.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-10 items-start">
          
          {/* LEFT CONTAINER */}
          <div className="space-y-8">
            
            {/* IN THIS PAGE NAVIGATION */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-4">
                In This Page
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm font-medium">
                <a href="#introduction" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Overview
                </a>
                <a href="#3-types" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • 3 Types of Cataract Surgery
                </a>
                <a href="#types-in-india" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Types of Cataract Surgery in India
                </a>
                <a href="#safest-surgery" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • What Is the Safest Cataract Surgery?
                </a>
                <a href="#best-age" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • What Is the Best Age?
                </a>
                <a href="#what-happens" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • What Happens During Surgery
                </a>
                <a href="#which-is-best" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Which Cataract Surgery Is Best for You?
                </a>
                <a href="#international-patients" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Cataract Surgery in India for International Patients
                </a>
                <a href="#choose-surgeon" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • How to Choose a Cataract Surgeon in India
                </a>
                <a href="#faqs" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • FAQs
                </a>
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <article className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12">
                
                {/* INTRODUCTION */}
                <section id="introduction" className="mb-12">
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Cataract is one of the most common causes of vision impairment, particularly among older adults. It occurs when the natural lens of the eye becomes cloudy, causing symptoms such as blurred vision, glare, difficulty seeing at night, faded colours and problems with reading or driving. Cataract surgery is the definitive treatment when the cataract begins to interfere with everyday activities.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Modern cataract surgery has evolved considerably, with techniques ranging from conventional phacoemulsification to manual small-incision cataract surgery (MSICS) and femtosecond laser-assisted cataract surgery (FLACS). Each technique has specific applications, benefits and limitations.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    For international patients considering cataract treatment in India, understanding these options can help when discussing treatment with an ophthalmologist.
                  </p>
                </section>

                {/* WHAT ARE THE 3 TYPES */}
                <section id="3-types" className="mb-12">
                  <SectionHeading>What Are the 3 Types of Cataract Surgery?</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    When discussing the main surgical approaches used for cataract removal, three important techniques are:
                  </p>

                  <BulletList
                    items={[
                      "Phacoemulsification cataract surgery",
                      "Manual Small-Incision Cataract Surgery (MSICS/SICS)",
                      "Femtosecond Laser-Assisted Cataract Surgery (FLACS)",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    All three procedures aim to remove the cloudy natural lens and, in most modern cataract operations, replace it with an artificial intraocular lens (IOL).
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6 font-semibold text-[#053161]">
                    Let&apos;s understand each technique in more detail.
                  </p>

                  <SubHeading>1. Phacoemulsification Cataract Surgery</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Phacoemulsification is one of the most widely used modern cataract surgery techniques.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    During the procedure, the surgeon makes a small incision in the eye and uses an ultrasound-powered instrument to break the cloudy lens into smaller pieces. The lens material is then removed, and an artificial intraocular lens is implanted.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Modern phacoemulsification generally uses a small incision, which can contribute to faster recovery compared with older large-incision cataract techniques.
                  </p>

                  <div className="my-6 p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h4 className="text-lg font-bold text-[#053161] mb-3">
                      Advantages of Phacoemulsification
                    </h4>
                    <BulletList
                      items={[
                        "Small surgical incision",
                        "Established surgical technique",
                        "Usually allows relatively quick visual recovery",
                        "Suitable for many routine cataract cases",
                        "Multiple IOL options can be considered",
                        "Widely available in modern eye hospitals",
                      ]}
                    />
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-8">
                    Phacoemulsification remains an important standard technique for cataract surgery and may be an appropriate option for many patients.
                  </p>

                  <SubHeading>2. Manual Small-Incision Cataract Surgery (MSICS)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Manual Small-Incision Cataract Surgery, commonly called MSICS or SICS, is another cataract removal technique, particularly useful in settings where access to expensive phacoemulsification equipment may be limited.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The surgeon creates a self-sealing small incision and manually removes the cataractous lens. An intraocular lens is then implanted.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    MSICS can be particularly useful for certain dense or advanced cataracts and in high-volume or resource-sensitive settings. Evidence indicates that MSICS and phacoemulsification can produce comparable visual outcomes in many settings, although the techniques have different characteristics and recovery profiles.
                  </p>

                  <div className="my-6 p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h4 className="text-lg font-bold text-[#053161] mb-3">
                      Advantages of MSICS
                    </h4>
                    <BulletList
                      items={[
                        "Smaller incision than traditional ECCE",
                        "Does not require the same level of phacoemulsification technology",
                        "Can be cost-effective",
                        "Useful for selected dense cataracts",
                        "Can provide good visual outcomes when appropriately performed",
                      ]}
                    />
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-8">
                    The suitability of MSICS depends on the cataract, eye health, surgeon expertise and available facilities.
                  </p>

                  <SubHeading>3. Femtosecond Laser-Assisted Cataract Surgery (FLACS)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Femtosecond Laser-Assisted Cataract Surgery (FLACS) uses a femtosecond laser to assist the surgeon with selected steps of cataract surgery.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-3 font-semibold text-[#053161]">
                    Depending on the system and treatment plan, the laser can assist with:
                  </p>
                  <BulletList
                    items={[
                      "Corneal incisions",
                      "Anterior capsulotomy",
                      "Cataract fragmentation",
                      "Selected astigmatism-management procedures",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The surgeon still performs the essential lens removal and IOL implantation steps. Therefore, laser cataract surgery should not be understood as a completely automated procedure.
                  </p>

                  <div className="my-6 p-6 rounded-2xl bg-[#F8FAFD] border border-[#E1E8F0]">
                    <h4 className="text-lg font-bold text-[#053161] mb-3">
                      Potential Advantages of FLACS
                    </h4>
                    <BulletList
                      items={[
                        "Computer-assisted precision for selected surgical steps",
                        "More reproducible capsulotomy in some circumstances",
                        "Can reduce the amount of ultrasound energy required for lens fragmentation in selected cases",
                        "May be useful when advanced IOLs or astigmatism management are part of the treatment plan",
                      ]}
                    />
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    However, the availability of laser technology does not automatically mean that FLACS is the best option for every patient. Evidence has not consistently demonstrated superior clinical outcomes compared with well-performed conventional phacoemulsification for routine cataract cases.
                  </p>
                </section>

                {/* TYPES OF CATARACT SURGERY IN INDIA */}
                <section id="types-in-india" className="mb-12">
                  <SectionHeading>Types of Cataract Surgery in India</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Patients looking for cataract surgery in India may encounter several surgical options depending on their diagnosis, cataract density, eye health, hospital facilities and surgeon&apos;s expertise.
                  </p>

                  <CostTable
                    headers={["Cataract Surgery Type", "Main Technology", "Common Use", "Key Consideration"]}
                    rows={[
                      ["Phacoemulsification", "Ultrasound", "Routine cataract surgery", "Widely used modern technique"],
                      ["MSICS / SICS", "Manual small-incision technique", "Selected cataracts, including dense cataracts", "Cost-effective and less technology-dependent"],
                      ["FLACS", "Femtosecond laser + lens-removal technique", "Selected patients and advanced surgical planning", "May provide greater precision for selected steps"],
                      ["ECCE", "Manual extracapsular extraction", "Selected advanced/complex cases", "Larger incision; less common for routine modern cases"],
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-4">
                    Traditional extracapsular cataract extraction (ECCE) remains an option in specific circumstances, but modern small-incision techniques have substantially reduced the need for traditional large-incision surgery.
                  </p>
                </section>

                {/* WHAT IS THE SAFEST CATARACT SURGERY */}
                <section id="safest-surgery" className="mb-12">
                  <SectionHeading>What Is the Safest Cataract Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    There is no single cataract surgery technique that can be called the safest for every patient.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-3 font-semibold text-[#053161]">
                    The safest approach is generally the one that is appropriate for the patient&apos;s:
                  </p>
                  <BulletList
                    items={[
                      "Cataract type and density",
                      "Corneal health",
                      "Retina and optic nerve condition",
                      "Previous eye surgery",
                      "Other eye diseases",
                      "Overall medical condition",
                      "Desired visual outcome",
                      "IOL requirements",
                      "Surgeon expertise and available technology",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Modern cataract surgery is generally considered a safe and effective procedure, but every surgery carries potential risks.
                  </p>

                  <SubHeading>Is Laser Cataract Surgery Safer Than Phacoemulsification?</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Not necessarily.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    FLACS can provide greater precision and repeatability for certain surgical steps, and it may offer advantages in selected clinical situations. However, current evidence does not establish that FLACS is universally safer or provides better outcomes than conventional phacoemulsification for routine cataract cases.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Therefore, patients should not choose a cataract procedure simply because it uses a laser.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Instead, the ophthalmologist should determine which approach offers the most appropriate balance of safety, visual outcomes and practicality for the individual patient.
                  </p>

                  <SubHeading>Is Phacoemulsification Safe?</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Phacoemulsification is an established modern cataract surgery technique and is widely used.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The procedure uses a small incision and ultrasound energy to fragment the cloudy lens before it is removed. An IOL is then implanted to replace the natural lens.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    As with any eye surgery, potential complications can occur. These may include infection, inflammation, retinal problems, changes in eye pressure, posterior capsule opacification or problems involving the IOL.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    The individual risk depends on the patient&apos;s eye health and the complexity of the surgery.
                  </p>

                  <SubHeading>Is MSICS Safe?</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    MSICS can be a safe and effective cataract surgery technique when performed by an experienced surgeon in an appropriate patient.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    It has particular value in settings where reducing equipment requirements and treatment costs is important. Studies summarized by the American Academy of Ophthalmology&apos;s EyeWiki indicate that MSICS and phacoemulsification can produce similar visual outcomes in many patients, although individual results and complication profiles vary.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    For a patient with a very dense cataract, the surgeon may consider MSICS or another technique depending on the clinical situation.
                  </p>
                </section>

                {/* BEST AGE FOR CATARACT SURGERY */}
                <section id="best-age" className="mb-12">
                  <SectionHeading>What Is the Best Age for Cataract Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    There is no fixed age at which everyone should have cataract surgery.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A person does not need to wait until a particular age, such as 60, 65 or 70, before having cataract surgery.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Instead, surgery is generally considered when the cataract begins to interfere significantly with the person&apos;s vision and daily activities.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-3 font-semibold text-[#053161]">
                    For example, surgery may become appropriate when cataracts make it difficult to:
                  </p>
                  <BulletList
                    items={[
                      "Read books or newspapers",
                      "Use a computer or mobile phone",
                      "Drive safely",
                      "Recognise faces",
                      "Watch television",
                      "Work",
                      "Walk safely in unfamiliar environments",
                      "See clearly in low-light conditions",
                    ]}
                  />

                  <SubHeading>Cataract Surgery at 50</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Some people develop visually significant cataracts in their 40s or 50s.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    If the cataract substantially affects vision and daily life, surgery may be appropriate after an eye examination. Age alone should not determine whether surgery is recommended.
                  </p>

                  <SubHeading>Cataract Surgery at 60</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Many age-related cataract patients begin considering surgery around this stage of life, but there is no requirement to wait until 60.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    If vision is significantly affected, cataract surgery may be discussed earlier.
                  </p>

                  <SubHeading>Cataract Surgery at 70 or Older</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Older adults can also undergo cataract surgery if their general health and eye condition make surgery appropriate.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    The decision should be based on visual needs, overall health, eye health and the expected benefits of treatment.
                  </p>

                  <SubHeading>Should You Wait for the Cataract to Become Mature?</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Usually, there is no need to deliberately wait until a cataract becomes very advanced.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Historically, patients were sometimes advised to wait until the cataract became “mature.” Modern cataract surgery allows treatment based primarily on the patient&apos;s visual needs and the impact of cataract on daily life.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Waiting too long may make the cataract harder to manage in some cases, particularly if it becomes very dense.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The appropriate timing should therefore be discussed with an ophthalmologist.
                  </p>
                </section>

                {/* WHAT HAPPENS DURING CATARACT SURGERY */}
                <section id="what-happens" className="mb-12">
                  <SectionHeading>What Happens During Cataract Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Although the exact technique varies, modern cataract surgery generally follows these steps:
                  </p>

                  <div className="space-y-4">
                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 1: Eye Examination</h4>
                      <p className="text-[#425466] leading-7">The ophthalmologist examines the eyes and measures the eye to plan the procedure and calculate the appropriate IOL.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 2: Anaesthesia</h4>
                      <p className="text-[#425466] leading-7">Cataract surgery is commonly performed using local or topical anaesthesia. Patients are usually awake during the procedure.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 3: Cataract Removal</h4>
                      <p className="text-[#425466] leading-7">The surgeon uses the selected technique to remove the cloudy natural lens.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 4: IOL Implantation</h4>
                      <p className="text-[#425466] leading-7">An artificial intraocular lens is implanted inside the eye to replace the natural lens.</p>
                    </div>

                    <div className="p-5 rounded-xl bg-[#F8FAFD] border border-[#E1E8F0]">
                      <h4 className="font-bold text-[#053161] text-base md:text-lg mb-1">Step 5: Postoperative Monitoring</h4>
                      <p className="text-[#425466] leading-7">After surgery, the patient receives postoperative instructions, medications and follow-up arrangements.</p>
                    </div>
                  </div>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-6">
                    In many cases, cataract surgery is performed as a day-care procedure, allowing the patient to return home the same day.
                  </p>
                </section>

                {/* WHICH CATARACT SURGERY IS BEST FOR YOU */}
                <section id="which-is-best" className="mb-12">
                  <SectionHeading>Which Cataract Surgery Is Best for You?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The best cataract surgery is not necessarily the newest or most expensive option.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    An ophthalmologist may consider:
                  </p>

                  <BulletList
                    items={[
                      "For routine cataracts: Phacoemulsification may be an appropriate choice for many patients.",
                      "For selected dense or advanced cataracts: MSICS or another surgical approach may be considered depending on the eye and surgeon's assessment.",
                      "For selected patients seeking laser-assisted treatment: FLACS may assist with specific surgical steps and may be considered when its potential benefits are relevant to the patient's treatment plan.",
                      "For patients with astigmatism: A toric IOL or selected corneal-incision techniques may be considered.",
                      "For patients seeking reduced dependence on glasses: Advanced IOL options such as multifocal, trifocal or EDOF lenses may be discussed if the patient's eyes are suitable.",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-4">
                    The final choice should be made after a detailed ophthalmic examination.
                  </p>
                </section>

                {/* INTERNATIONAL PATIENTS */}
                <section id="international-patients" className="mb-12">
                  <SectionHeading>Cataract Surgery in India for International Patients</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    India has a large network of ophthalmology hospitals and specialists offering different cataract surgery techniques.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    International patients may consider India for cataract treatment because they can access:
                  </p>

                  <BulletList
                    items={[
                      "Experienced ophthalmologists",
                      "Modern eye hospitals",
                      "Phacoemulsification",
                      "Femtosecond laser-assisted cataract surgery at selected centres",
                      "Different IOL options",
                      "Diagnostic eye testing",
                      "Postoperative follow-up",
                      "International patient coordination",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 italic bg-[#F8FAFD] p-4 rounded-xl border border-[#E1E8F0] mt-4">
                    However, patients should choose a hospital and surgeon based on clinical suitability, experience, technology, postoperative care and overall treatment plan, rather than cost alone.
                  </p>
                </section>

                {/* HOW TO CHOOSE A CATARACT SURGEON */}
                <section id="choose-surgeon" className="mb-12">
                  <SectionHeading>How to Choose a Cataract Surgeon in India</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    When selecting a cataract surgeon, consider:
                  </p>

                  <SubHeading>Experience</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Ask about the surgeon&apos;s experience with the recommended cataract procedure.
                  </p>

                  <SubHeading>Technology</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Check whether the hospital has the technology required for your specific treatment.
                  </p>

                  <SubHeading>IOL Options</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Ask which IOLs are available and why a particular lens has been recommended.
                  </p>

                  <SubHeading>Complication Management</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A good cataract centre should have appropriate facilities and expertise to manage potential complications.
                  </p>

                  <SubHeading>Follow-Up Care</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Ask how postoperative monitoring will be arranged, especially if you are travelling internationally.
                  </p>

                  <SubHeading>Complete Treatment Cost</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Request a detailed quotation covering surgery, IOL, investigations, hospital charges and follow-up care.
                  </p>
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="mb-12">
                  <SectionHeading>Frequently Asked Questions</SectionHeading>

                  <div className="space-y-4">
                    <FAQ
                      question="What are the 3 main types of cataract surgery?"
                      answer="Phacoemulsification, femtosecond laser-assisted cataract surgery (FLACS), and manual small-incision cataract surgery (MSICS/SICS) are the three contemporary methods that are frequently addressed. Traditional ECCE may still be used in selected cases."
                    />
                    <FAQ
                      question="What is the safest cataract surgery?"
                      answer="There isn't a particular method that works best for every patient. The safest approach depends on the cataract, eye health, surgeon expertise and available technology. Both conventional phacoemulsification and FLACS can be safe, while MSICS is also an established option in appropriate settings."
                    />
                    <FAQ
                      question="Is laser cataract surgery safer than normal cataract surgery?"
                      answer="FLACS can provide greater precision for selected surgical steps, but evidence does not show that it is universally safer or clinically superior to conventional phacoemulsification for routine cases."
                    />
                    <FAQ
                      question="What is the best age for cataract surgery?"
                      answer="There is no universal best age. Surgery is generally considered when the cataract begins to interfere with vision and daily activities."
                    />
                    <FAQ
                      question="Can cataract surgery be done at 50?"
                      answer="Yes. Cataract surgery can be performed at 50 or younger when a cataract significantly affects vision and the ophthalmologist determines that surgery is appropriate."
                    />
                    <FAQ
                      question="Can cataract surgery be done after 70?"
                      answer="Yes. Age alone does not prevent cataract surgery. The patient's general health, eye health, visual needs and expected benefits should be assessed."
                    />
                    <FAQ
                      question="Is phacoemulsification better than MSICS?"
                      answer="Neither technique is universally better for every patient. Phacoemulsification offers small-incision surgery and is widely used, while MSICS can be particularly useful in resource-sensitive settings and selected dense cataracts. The appropriate technique depends on the individual case."
                    />
                    <FAQ
                      question="Is laser cataract surgery worth the additional cost?"
                      answer="It depends on the individual patient. FLACS can provide additional precision for selected surgical steps, but routine cases have not consistently shown superior clinical outcomes compared with conventional phacoemulsification."
                    />
                    <FAQ
                      question="Does cataract surgery permanently remove cataracts?"
                      answer="The cloudy natural lens is removed during cataract surgery and replaced with an artificial IOL. A cataract does not grow back in the implanted lens, although posterior capsule opacification can occur later and may be treated separately."
                    />
                    <FAQ
                      question="Can international patients undergo cataract surgery in India?"
                      answer="Yes. International patients can seek cataract treatment in India after an ophthalmologist determines that surgery is appropriate. Medical travel coordinators such as Ekam can assist with specialist consultation, hospital coordination, treatment planning and other aspects of the medical journey."
                    />
                  </div>
                </section>

                {/* CONCLUSION / FINAL CTA BOX */}
                <section>
                  <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                      Conclusion
                    </h2>
                
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      Modern cataract surgery offers several treatment approaches, including phacoemulsification, MSICS and femtosecond laser-assisted cataract surgery. The best option depends on the patient&apos;s cataract, eye health, visual requirements and the surgeon&apos;s assessment.
                    </p>
                    
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      There is also no fixed “best age” for cataract surgery. Rather than waiting for a particular birthday or for the cataract to become mature, patients should consider surgery when declining vision begins to affect everyday activities.
                    </p>

                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                      If you are considering cataract surgery in India, an ophthalmologist can assess your eyes, explain the available techniques and recommend the most appropriate procedure and IOL for your individual needs.
                    </p>

                    <h3 className="text-xl md:text-2xl font-bold text-[#053161] mb-3">
                      Get Cataract Treatment in India with Ekam
                    </h3>

                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                      Ekam can help international patients coordinate ophthalmology consultations, identify suitable hospitals, understand treatment options and arrange support during their medical journey in India.
                    </p>
                
                    <div className="mb-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                      >
                        Request a personalised cataract treatment consultation with Ekam today →
                      </Link>
                    </div>
                  </div>
                </section>

              </div>
            </article>

            {/* MORE RELATED LINKS (LEFT BOTTOM) */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-[#053161] mb-5">
                More Related Links
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                {moreRelatedLinks.map((article, index) => (
                  <Link
                    key={index}
                    href={article.href}
                    className="block text-[#425466] hover:text-[#1B4F9C] hover:font-semibold transition-all py-1.5 border-b border-gray-100"
                  >
                    • {article.title}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            
            {/* 1. GET YOUR ASSESSMENT */}
            <div className="rounded-2xl bg-gradient-to-br from-[#053161] to-[#1B4F9C] p-6 text-white shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5 text-2xl">
                👁️
              </div>
              <h3 className="text-xl font-bold mb-3">
                Get Consultation
              </h3>
              <p className="text-white/85 text-sm leading-6 mb-5">
                Get an expert eye assessment and treatment planning guide tailored to your requirements.
              </p>
              <Link
                href="/contact"
                className="block text-center bg-white text-[#053161] rounded-xl px-5 py-3 font-bold hover:bg-[#F8FAFD] transition"
              >
                Get Started →
              </Link>
            </div>

            {/* 2. RELATED ARTICLES */}
            <div className="bg-white rounded-2xl border border-[#E1E8F0] shadow-sm p-6">
              <h3 className="text-xl font-bold text-[#053161] mb-5">
                Related Articles
              </h3>
              <div className="space-y-3 text-sm">
                {relatedArticles.map((article, index) => (
                  <Link
                    key={index}
                    href={article.href}
                    className="block text-[#425466] hover:text-[#1B4F9C] hover:font-semibold transition-all py-1 border-b border-gray-100 last:border-0"
                  >
                    • {article.title}
                  </Link>
                ))}
              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}

/* =========================================================
   REUSABLE HELPER COMPONENTS
========================================================= */

function SectionHeading({ children }) {
  return (
    <h2 className="relative text-2xl md:text-3xl font-bold text-[#053161] mt-10 mb-5 pl-4 border-l-4 border-pink-500">
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-xl md:text-2xl font-bold text-[#053161] mt-8 mb-3">
      {children}
    </h3>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2.5 my-4">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-[#425466] text-base md:text-lg leading-7"
        >
          <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-[#1B4F9C]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CostTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto my-6 border border-[#E1E8F0] rounded-xl shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#053161] text-white text-sm md:text-base">
            {headers.map((header, idx) => (
              <th key={idx} className="p-3.5 md:p-4 font-semibold border-b border-[#E1E8F0]">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E1E8F0] text-sm md:text-base text-[#425466]">
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-[#F8FAFD]"}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="p-3.5 md:p-4 font-medium text-[#053161]">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <div className="rounded-xl border border-[#E1E8F0] bg-[#F8FAFD] overflow-hidden">
      <div className="px-5 py-5 md:px-6">
        <h3 className="text-lg md:text-xl font-bold text-[#053161] mb-3">
          {question}
        </h3>
        <p className="text-[#425466] leading-7">
          {answer}
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";

export const metadata = {
  title: "Laser Cataract Surgery in India | Cost & Treatment Guide",
  description:
    "Learn about laser cataract surgery in India, FLACS procedure, IOL options, recovery, risks, cost and international patient support with Ekam.",
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

export default function LaserCataractSurgeryPage() {
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
              Eye Care • Advanced Cataract Treatment
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Laser Cataract Surgery in India
            </h1>

            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Advanced Cataract Treatment with Modern Laser-Assisted Technology
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
                <a href="#what-is-laser-cataract-surgery" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • What Is Laser Cataract Surgery?
                </a>
                <a href="#who-may-need-cataract-surgery" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Who May Need Cataract Surgery?
                </a>
                <a href="#how-does-it-work" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • How Does It Work?
                </a>
                <a href="#benefits" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Benefits of Laser Surgery
                </a>
                <a href="#laser-vs-conventional" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Laser vs Conventional
                </a>
                <a href="#types-of-iols" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Types of Intraocular Lenses
                </a>
                <a href="#is-it-painful" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Is It Painful?
                </a>
                <a href="#how-long-does-it-take" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • How Long Does It Take?
                </a>
                <a href="#recovery" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Recovery After Surgery
                </a>
                <a href="#risks-and-complications" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Risks & Complications
                </a>
                <a href="#cost-in-india" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Cost in India
                </a>
                <a href="#cost-comparison" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Cost vs Other Countries
                </a>
                <a href="#why-choose-india" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Why Choose India?
                </a>
                <a href="#international-patients" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • International Patients Support
                </a>
                <a href="#good-candidate" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Good Candidate Criteria
                </a>
                <a href="#questions-to-ask" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Questions to Ask
                </a>
                <a href="#why-choose-ekam" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Why Choose Ekam?
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
                    Laser cataract surgery is an advanced approach to cataract treatment that uses femtosecond laser technology to assist the surgeon with important steps of the procedure. It can help create precise corneal incisions, perform the capsulotomy and soften or fragment the cloudy lens before it is removed. The cataract is then replaced with a clear intraocular lens (IOL) selected according to the patient&apos;s visual needs and eye measurements.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 border-l-4 border-[#1B4F9C] pl-4 py-2 bg-[#F8FAFD] rounded-r-lg">
                    At Ekam, international patients can receive assistance in finding experienced ophthalmologists and suitable hospitals in India for cataract evaluation and treatment. From medical consultation and hospital coordination to treatment planning and travel support, our team helps make the healthcare journey more organised and convenient.
                  </p>
                </section>

                {/* WHAT IS LASER CATARACT SURGERY */}
                <section id="what-is-laser-cataract-surgery" className="mb-12">
                  <SectionHeading>What Is Laser Cataract Surgery?</SectionHeading>
                  
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Laser cataract surgery, also called femtosecond laser-assisted cataract surgery (FLACS), is a modern cataract surgery technique in which a femtosecond laser assists the ophthalmic surgeon during selected stages of cataract removal.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    A cataract develops when the natural lens of the eye becomes cloudy, leading to symptoms such as blurred vision, glare, difficulty seeing at night and faded colours. Cataract surgery removes the cloudy lens and replaces it with an artificial intraocular lens.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    With FLACS, the femtosecond laser may be used to:
                  </p>

                  <BulletList
                    items={[
                      "Create precise corneal incisions",
                      "Perform the anterior capsulotomy",
                      "Fragment or soften the cataract",
                      "Assist with astigmatism management in selected cases",
                      "Support accurate positioning and planning for certain advanced IOLs",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    The remaining lens-removal and IOL implantation steps are performed by the cataract surgeon using appropriate surgical techniques.
                  </p>
                </section>

                {/* WHO MAY NEED CATARACT SURGERY */}
                <section id="who-may-need-cataract-surgery" className="mb-12">
                  <SectionHeading>Who May Need Cataract Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Cataract surgery may be recommended when a cataract begins to interfere with everyday activities and quality of life.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Common symptoms of cataracts include:
                  </p>

                  <BulletList
                    items={[
                      "Blurred or cloudy vision",
                      "Difficulty reading",
                      "Poor night vision",
                      "Increased sensitivity to bright lights",
                      "Glare or halos around lights",
                      "Faded or less vivid colours",
                      "Frequent changes in glasses prescription",
                      "Difficulty driving, especially at night",
                      "Double vision in some cases",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    The decision to undergo surgery depends on the severity of the cataract, its effect on daily activities, overall eye health and the recommendation of an ophthalmologist.
                  </p>
                </section>

                {/* HOW DOES IT WORK */}
                <section id="how-does-it-work" className="mb-12">
                  <SectionHeading>How Does Laser Cataract Surgery Work?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Laser cataract surgery involves several carefully planned stages.
                  </p>

                  <SubHeading>1. Comprehensive Eye Evaluation</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Before surgery, the ophthalmologist examines the eyes and performs measurements needed to assess the cataract, cornea, retina and overall eye health. Measurements are also used to determine the appropriate IOL.
                  </p>

                  <SubHeading>2. Surgical Planning</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The surgeon reviews the eye measurements and determines whether femtosecond laser assistance is appropriate. The choice of IOL and desired visual outcome are also discussed.
                  </p>

                  <SubHeading>3. Femtosecond Laser Assistance</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The laser can assist with selected surgical steps, including corneal incisions, capsulotomy and cataract fragmentation. The technology is designed to provide highly precise and reproducible treatment for these steps.
                  </p>

                  <SubHeading>4. Removal of the Cataract</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    After laser assistance, the surgeon removes the fragmented or softened cloudy lens. Cataract removal may still involve phacoemulsification and aspiration.
                  </p>

                  <SubHeading>5. Intraocular Lens Implantation</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A clear artificial intraocular lens is placed inside the eye to replace the natural cloudy lens.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Different IOL options may be available, including monofocal, toric and multifocal or other advanced lenses. The most suitable option depends on the patient&apos;s eye measurements, lifestyle, visual requirements and medical assessment.
                  </p>

                  <SubHeading>6. Postoperative Care</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    After surgery, the patient receives instructions regarding eye drops, eye protection, activity restrictions and follow-up appointments.
                  </p>
                </section>

                {/* BENEFITS OF LASER CATARACT SURGERY */}
                <section id="benefits" className="mb-12">
                  <SectionHeading>Benefits of Laser Cataract Surgery</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Laser-assisted cataract surgery can provide greater automation and precision for certain steps of cataract surgery.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Potential advantages include:
                  </p>

                  <BulletList
                    items={[
                      "Computer-guided laser-assisted surgical steps",
                      "Precise creation of selected corneal incisions",
                      "Accurate capsulotomy",
                      "Controlled cataract fragmentation",
                      "Potential assistance with astigmatism management",
                      "Useful technology for selected advanced IOL procedures",
                      "Reduced dependence on manual techniques for certain surgical steps",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 italic bg-[#F8FAFD] p-4 rounded-xl border border-[#E1E8F0] mt-5">
                    However, laser cataract surgery is not automatically better for every patient. Current evidence does not establish that FLACS consistently provides better visual outcomes or safety than conventional small-incision phacoemulsification for all standard cataract cases. The appropriate technique should therefore be selected after an ophthalmic evaluation.
                  </p>
                </section>

                {/* LASER VS CONVENTIONAL */}
                <section id="laser-vs-conventional" className="mb-12">
                  <SectionHeading>Laser Cataract Surgery vs Conventional Cataract Surgery</SectionHeading>

                  <CostTable
                    headers={["Feature", "Laser Cataract Surgery", "Conventional Cataract Surgery"]}
                    rows={[
                      ["Laser assistance", "Femtosecond laser used for selected steps", "Manual surgical techniques"],
                      ["Cataract removal", "Usually followed by lens removal techniques such as phacoemulsification", "Commonly performed using phacoemulsification"],
                      ["Capsulotomy", "Can be laser-assisted", "Performed manually"],
                      ["Corneal incision", "Can be laser-assisted", "Created manually"],
                      ["Astigmatism management", "May assist in selected cases", "Can also be managed using other techniques"],
                      ["IOL options", "Monofocal, toric and advanced IOLs may be considered", "Monofocal, toric and advanced IOLs may be considered"],
                      ["Suitability", "Selected patients", "Widely used for cataract surgery"],
                      ["Cost", "May be higher depending on technology and hospital", "Generally more economical"],
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    The choice between laser-assisted and conventional cataract surgery should be based on the patient&apos;s eye condition, cataract characteristics, desired visual outcome, available technology and surgeon&apos;s recommendation. Evidence indicates that laser and conventional cataract surgery can provide comparable outcomes in many patients.
                  </p>
                </section>

                {/* TYPES OF INTRAOCULAR LENSES */}
                <section id="types-of-iols" className="mb-12">
                  <SectionHeading>Types of Intraocular Lenses Used in Cataract Surgery</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    The intraocular lens is an important part of cataract surgery because it replaces the cloudy natural lens.
                  </p>

                  <SubHeading>Monofocal IOL</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A monofocal lens generally provides clear vision at one primary distance, commonly distance vision. Glasses may still be required for reading or other near tasks.
                  </p>

                  <SubHeading>Toric IOL</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Toric lenses are designed to address corneal astigmatism in appropriately selected patients.
                  </p>

                  <SubHeading>Multifocal or Trifocal IOL</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    These advanced lenses are designed to provide vision at multiple distances and may reduce dependence on glasses for some patients. They need to be carefully considered and are not appropriate for everyone.
                  </p>

                  <SubHeading>Other Advanced IOL Options</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Depending on the patient&apos;s eye condition and availability, other premium or advanced IOL technologies may be considered.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    Your ophthalmologist will recommend the most appropriate lens based on eye measurements, lifestyle, expectations and ocular health.
                  </p>
                </section>

                {/* IS IT PAINFUL */}
                <section id="is-it-painful" className="mb-12">
                  <SectionHeading>Is Laser Cataract Surgery Painful?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Cataract surgery is generally performed using local anaesthesia, commonly with eye drops and/or an injection to numb the eye. Patients are usually awake during the procedure but should not feel significant pain.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8">
                    You may notice lights, movement or pressure during the operation, but your surgeon and clinical team will monitor you throughout the procedure.
                  </p>
                </section>

                {/* HOW LONG DOES IT TAKE */}
                <section id="how-long-does-it-take" className="mb-12">
                  <SectionHeading>How Long Does Laser Cataract Surgery Take?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The actual surgical procedure is generally relatively short, although the total time at the hospital can be longer because of preoperative preparation, measurements, laser treatment, surgery and postoperative monitoring.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    The exact duration depends on:
                  </p>

                  <BulletList
                    items={[
                      "Cataract complexity",
                      "Type of laser system",
                      "IOL selection",
                      "Patient's eye condition",
                      "Surgical technique",
                      "Hospital protocols",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    Your treating ophthalmologist can provide a more accurate estimate after examining your eyes.
                  </p>
                </section>

                {/* RECOVERY */}
                <section id="recovery" className="mb-12">
                  <SectionHeading>Recovery After Laser Cataract Surgery</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Most patients recover relatively quickly following cataract surgery, although the speed of visual recovery varies from person to person.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    You may experience:
                  </p>

                  <BulletList
                    items={[
                      "Temporary blurred vision",
                      "Mild discomfort",
                      "Light sensitivity",
                      "Watery eyes",
                      "Mild redness",
                      "Fluctuations in vision during the early recovery period",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5 mb-4">
                    Your ophthalmologist may prescribe eye drops to support healing and reduce the risk of inflammation or infection. You should follow all postoperative instructions carefully.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8">
                    During recovery, patients are generally advised to avoid rubbing the operated eye and to follow their surgeon&apos;s instructions regarding driving, exercise, swimming, heavy lifting and other activities.
                  </p>
                </section>

                {/* RISKS AND COMPLICATIONS */}
                <section id="risks-and-complications" className="mb-12">
                  <SectionHeading>Risks and Possible Complications</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Laser cataract surgery is generally considered a safe procedure when performed by an appropriately trained ophthalmic surgeon, but like any surgery, it has potential risks.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Possible complications may include:
                  </p>

                  <BulletList
                    items={[
                      "Infection",
                      "Inflammation",
                      "Bleeding",
                      "Retinal detachment",
                      "Problems involving the position of the IOL",
                      "Persistent or unexpected visual symptoms",
                      "Posterior capsule opacification (PCO)",
                      "Changes in vision requiring additional treatment",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 my-5">
                    Serious complications are uncommon, but the risks vary according to the patient&apos;s eye health and medical circumstances. Your surgeon should explain the expected benefits, limitations and risks before treatment.
                  </p>

                  <div className="p-4 rounded-xl bg-[#FFF7FA] border border-[#FCDDEC] text-[#053161]">
                    <strong>Urgent Note:</strong> Seek urgent medical attention if you experience sudden vision loss, a sudden increase in floaters, flashes of light or a curtain/shadow across your vision after surgery. These symptoms can indicate a retinal problem and require prompt evaluation.
                  </div>
                </section>

                {/* COST IN INDIA */}
                <section id="cost-in-india" className="mb-12">
                  <SectionHeading>Laser Cataract Surgery Cost in India</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The cost of laser cataract surgery in India can vary significantly from patient to patient.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Factors that may influence the total treatment cost include:
                  </p>

                  <BulletList
                    items={[
                      "Hospital and location",
                      "Ophthalmologist's experience",
                      "Type of cataract surgery",
                      "Femtosecond laser technology used",
                      "Type of intraocular lens",
                      "Diagnostic tests",
                      "Anaesthesia and operating-room charges",
                      "Postoperative medicines",
                      "Follow-up consultations",
                      "Treatment of any additional eye conditions",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    For international patients, the overall medical travel budget may also include accommodation, local transportation, flights, visa-related expenses and other travel costs.
                  </p>
                </section>

                {/* COST COMPARISON */}
                <section id="cost-comparison" className="mb-12">
                  <SectionHeading>Laser Cataract Surgery Cost in India vs Other Countries</SectionHeading>

                  <CostTable
                    headers={["Country", "Approx. Cost per Eye (USD)", "Typical Cost Level"]}
                    rows={[
                      ["India", "$800 – $2,500", "Low"],
                      ["Thailand", "$1,500 – $3,000", "Moderate"],
                      ["UAE", "$2,000 – $5,000", "High"],
                      ["Australia", "$3,000 – $4,350", "High"],
                      ["UK", "$3,800 – $6,350", "High"],
                      ["USA", "$4,000 – $6,000+", "Very High"],
                    ]}
                  />

                  <p className="text-[#425466] text-sm leading-6 italic mt-3 mb-5">
                    These are indicative private/self-pay ranges, not guaranteed package prices. Published 2026 comparisons show India generally at a substantially lower price point than the USA, UK, Australia and UAE, although the ranges vary according to lens type and hospital.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8">
                    Ekam can help international patients obtain a personalised treatment estimate after reviewing their medical requirements and preferred treatment options.
                  </p>
                </section>

                {/* WHY CHOOSE INDIA */}
                <section id="why-choose-india" className="mb-12">
                  <SectionHeading>Why Choose India for Laser Cataract Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    India has developed a strong healthcare ecosystem with experienced ophthalmologists, modern hospitals and advanced diagnostic and surgical technologies.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    International patients may consider India because of:
                  </p>

                  <BulletList
                    items={[
                      "Experienced ophthalmic specialists",
                      "Modern eye hospitals and surgical facilities",
                      "Access to advanced cataract surgery technologies",
                      "Multiple IOL options",
                      "Competitive treatment costs compared with several developed countries",
                      "Availability of international patient services",
                      "Comprehensive diagnostic and postoperative care",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    However, patients should compare hospitals and surgeons based on clinical expertise, accreditation, technology, treatment suitability and postoperative support rather than choosing a provider based only on price.
                  </p>
                </section>

                {/* INTERNATIONAL PATIENTS */}
                <section id="international-patients" className="mb-12">
                  <SectionHeading>Laser Cataract Surgery for International Patients</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Travelling to another country for eye surgery requires more than simply selecting a hospital. International patients need coordinated medical and travel support.
                  </p>

                  <SubHeading>Medical Consultation</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    We can help coordinate consultations with suitable ophthalmologists so patients can understand their diagnosis and treatment options.
                  </p>

                  <SubHeading>Hospital Selection</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Based on the patient&apos;s medical requirements, budget and preferences, we can help identify suitable hospitals and specialists.
                  </p>

                  <SubHeading>Treatment Cost Estimate</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients can request an estimated treatment package based on their diagnosis, procedure and selected IOL.
                  </p>

                  <SubHeading>Visa Assistance</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Ekam can assist eligible international patients with information and coordination related to medical travel documentation.
                  </p>

                  <SubHeading>Travel & Accommodation Support</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients can receive assistance with airport transfers, accommodation and local transportation arrangements according to their requirements.
                  </p>

                  <SubHeading>Post-Treatment Support</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Our international patient coordination team can help patients navigate follow-up appointments and other healthcare requirements during their stay.
                  </p>
                </section>

                {/* GOOD CANDIDATE */}
                <section id="good-candidate" className="mb-12">
                  <SectionHeading>Who Is a Good Candidate for Laser Cataract Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    A person may be considered for laser-assisted cataract surgery if:
                  </p>

                  <BulletList
                    items={[
                      "A cataract is affecting their vision",
                      "Vision problems interfere with daily activities",
                      "The ophthalmologist recommends cataract surgery",
                      "The patient's eye health is suitable for the procedure",
                      "The patient may benefit from laser assistance for selected surgical steps",
                      "The desired IOL and visual goals are compatible with the treatment plan",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    Not every cataract patient needs laser-assisted surgery. A detailed eye examination is necessary to determine the most appropriate treatment.
                  </p>
                </section>

                {/* QUESTIONS TO ASK */}
                <section id="questions-to-ask" className="mb-12">
                  <SectionHeading>What Should You Ask Your Cataract Surgeon?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Before choosing laser cataract surgery, consider asking:
                  </p>

                  <BulletList
                    items={[
                      "Is laser-assisted cataract surgery appropriate for my eyes?",
                      "What type of cataract do I have?",
                      "Which IOL is most suitable for me?",
                      "Will I still need glasses after surgery?",
                      "What are the expected benefits and limitations?",
                      "What are the possible risks?",
                      "How long will recovery take?",
                      "How many follow-up visits will I need?",
                      "What is included in the treatment cost?",
                      "Is conventional cataract surgery a suitable alternative for me?",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    These questions can help you make an informed decision with your ophthalmologist.
                  </p>
                </section>

                {/* WHY CHOOSE EKAM */}
                <section id="why-choose-ekam" className="mb-12">
                  <SectionHeading>Why Choose Ekam for Cataract Treatment in India?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Choosing the right hospital and ophthalmologist can be challenging, particularly for patients travelling internationally. Ekam provides personalised assistance throughout the medical travel process.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Our Support Includes:
                  </p>

                  <BulletList
                    items={[
                      "Specialist Coordination: Connect with appropriate ophthalmology specialists based on your medical requirements.",
                      "Hospital Selection: Assistance in identifying suitable hospitals for cataract treatment in India.",
                      "Treatment Planning: Support in understanding the recommended treatment and available options.",
                      "Cost Coordination: Help with obtaining and understanding treatment estimates.",
                      "International Patient Assistance: Support for patients travelling to India from overseas.",
                      "Travel Coordination: Assistance with accommodation, transportation and other practical arrangements.",
                      "Follow-Up Support: Coordination for postoperative consultations and continued medical assistance.",
                    ]}
                  />
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="mb-12">
                  <SectionHeading>Frequently Asked Questions About Laser Cataract Surgery</SectionHeading>

                  <div className="space-y-4">
                    <FAQ
                      question="1. What is laser cataract surgery?"
                      answer="Laser cataract surgery is a cataract procedure in which a femtosecond laser assists the surgeon with selected steps, such as corneal incisions, capsulotomy and cataract fragmentation. The cloudy lens is then removed and replaced with an intraocular lens."
                    />
                    <FAQ
                      question="2. Is laser cataract surgery better than normal cataract surgery?"
                      answer="Not necessarily for every patient. Evidence does not show that femtosecond laser-assisted surgery consistently provides better outcomes than conventional phacoemulsification in all standard cataract cases. The best approach depends on the patient's eye condition and treatment goals."
                    />
                    <FAQ
                      question="3. Is laser cataract surgery safe?"
                      answer="Cataract surgery is generally successful, but every surgical procedure carries risks. Possible complications include infection, inflammation, retinal problems, IOL-related complications and posterior capsule opacification. Your ophthalmologist should discuss individual risks before surgery."
                    />
                    <FAQ
                      question="4. How long does cataract surgery take?"
                      answer="The surgical procedure itself is generally short, but the total hospital visit can take longer because of preparation and postoperative monitoring. Your surgeon can provide a procedure-specific estimate."
                    />
                    <FAQ
                      question="5. Will I need glasses after laser cataract surgery?"
                      answer="It depends on the IOL selected and your individual visual requirements. Some patients may still need glasses, particularly for specific activities such as reading."
                    />
                    <FAQ
                      question="6. What is an IOL?"
                      answer="An intraocular lens, or IOL, is an artificial lens implanted inside the eye to replace the cloudy natural lens removed during cataract surgery."
                    />
                    <FAQ
                      question="7. Can laser cataract surgery correct astigmatism?"
                      answer="Laser-assisted cataract surgery can assist with selected astigmatism-management techniques. In addition, toric IOLs may be appropriate for certain patients with astigmatism. Your ophthalmologist will determine the best option."
                    />
                    <FAQ
                      question="8. How quickly can I return to normal activities?"
                      answer="Recovery varies between patients. Many people resume routine activities relatively quickly, but activities such as driving, swimming, heavy lifting and exercise should only be resumed according to the surgeon's instructions."
                    />
                    <FAQ
                      question="9. Can international patients have laser cataract surgery in India?"
                      answer="Yes, international patients can seek cataract treatment in India. However, treatment suitability must first be established through an ophthalmic evaluation. Ekam can assist with specialist consultation, hospital coordination and medical travel arrangements."
                    />
                    <FAQ
                      question="10. How much does laser cataract surgery cost in India?"
                      answer="The cost depends on the hospital, surgeon, technology, IOL type, diagnostic tests and other treatment requirements. International patients should request an individualised estimate rather than relying on a single standard price."
                    />
                  </div>
                </section>

                {/* FINAL CTA BOX */}
                <section>
                  <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                      Get a Cataract Treatment Plan in India
                    </h2>
                
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      If cataracts are affecting your vision, an ophthalmologist can determine whether cataract surgery is appropriate and whether laser-assisted surgery offers a meaningful advantage for your particular case.
                    </p>
                    
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                      Ekam helps international patients connect with suitable eye specialists and hospitals in India and coordinates the medical travel journey from consultation to follow-up.
                    </p>
                
                    <div className="mb-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                      >
                        Request a Medical Consultation with Ekam Today →
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
                Get Cost Estimate
              </h3>
              <p className="text-white/85 text-sm leading-6 mb-5">
                Get an accurate laser cataract surgery treatment estimate and planning guide tailored to your requirements.
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

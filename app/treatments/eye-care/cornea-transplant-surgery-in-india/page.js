import Link from "next/link";

export const metadata = {
  title: "Cornea Transplant Surgery in India | Cost, Types & Recovery",
  description:
    "Learn about cornea transplant surgery in India, including PKP, DALK, DMEK and DSAEK, costs, recovery, risks and treatment support for international patients.",
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

export default function CorneaTransplantSurgeryPage() {
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
              Eye Care • Treatment Guide
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Cornea Transplant Surgery in India
            </h1>

            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Advanced Corneal Transplant Treatment for International Patients
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
                <a href="#what-is-cornea-transplant" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • What Is a Cornea Transplant?
                </a>
                <a href="#who-may-need" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Who May Need It?
                </a>
                <a href="#types-of-surgery" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Types of Surgery
                </a>
                <a href="#which-type-is-best" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Which Type Is Best?
                </a>
                <a href="#conditions-treated" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Conditions Treated
                </a>
                <a href="#how-is-performed" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • How Is It Performed?
                </a>
                <a href="#recovery" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Recovery
                </a>
                <a href="#what-to-avoid" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • What Should You Avoid?
                </a>
                <a href="#risks-and-complications" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Risks & Complications
                </a>
                <a href="#graft-rejection" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • What Is Graft Rejection?
                </a>
                <a href="#is-it-safe" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Is Surgery Safe?
                </a>
                <a href="#surgery-cost" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Cost in India
                </a>
                <a href="#international-patients" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • For International Patients
                </a>
                <a href="#why-choose-india" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Why Choose India?
                </a>
                <a href="#why-choose-ekam" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • Why Choose Ekam?
                </a>
                <a href="#how-to-prepare" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • How to Prepare
                </a>
                <a href="#faqs" className="text-[#1B4F9C] hover:text-pink-600 transition">
                  • FAQs
                </a>
              </div>
            </div>

            {/* ARTICLE CONTENT */}
            <article className="bg-white rounded-2xl shadow-sm border border-[#E1E8F0] overflow-hidden">
              <div className="p-6 md:p-10 lg:p-12">
                
                {/* OVERVIEW INTRO */}
                <section className="mb-12">
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    A corneal transplant, also called keratoplasty, is an eye surgery in which damaged or diseased corneal tissue is replaced with healthy donor corneal tissue. It may be recommended when corneal disease, scarring, injury or degeneration significantly affects vision and cannot be adequately managed with medicines, contact lenses or other treatments.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Modern corneal transplantation does not always require replacement of the entire cornea. Depending on the affected layer and the patient's condition, an ophthalmic surgeon may recommend a full-thickness corneal transplant or a partial-thickness procedure such as DALK, DSAEK or DMEK.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    For patients travelling from countries such as Mauritius, Fiji, Ghana and the Maldives, India offers access to experienced ophthalmologists, advanced eye-care facilities and different corneal transplant techniques. The appropriate procedure depends on the underlying corneal condition, the extent of damage and the findings from a detailed ophthalmic evaluation.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Ekam helps international patients from Mauritius, Fiji, Ghana, the Maldives and other countries coordinate their corneal transplant journey in India. Our support can include connecting patients with suitable ophthalmologists and hospitals, arranging medical consultations, coordinating treatment information and estimates, and assisting with practical aspects of travelling to India for treatment.
                  </p>
                </section>

                {/* WHAT IS A CORNEA TRANSPLANT */}
                <section id="what-is-cornea-transplant" className="mb-12">
                  <SectionHeading>What Is a Cornea Transplant?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The cornea is the transparent, dome-shaped front surface of the eye. It helps focus incoming light and plays an important role in clear vision.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    When the cornea becomes cloudy, scarred, swollen, irregular or severely damaged, vision can become blurred or distorted.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    A corneal transplant replaces the damaged portion of the cornea with healthy donor tissue.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The transplant may involve:
                  </p>

                  <BulletList
                    items={[
                      "The entire thickness of the cornea",
                      "The front layers of the cornea",
                      "The innermost endothelial layer",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-4">
                    The appropriate technique depends on the location and severity of the corneal disease.
                  </p>
                </section>

                {/* WHO MAY NEED */}
                <section id="who-may-need" className="mb-12">
                  <SectionHeading>Who May Need a Corneal Transplant?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    A corneal transplant may be considered when significant corneal disease causes vision loss or other symptoms and less invasive treatments are no longer sufficient.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Conditions that may require corneal transplantation include:
                  </p>

                  <BulletList
                    items={[
                      "Keratoconus",
                      "Fuchs' endothelial dystrophy",
                      "Corneal dystrophies",
                      "Corneal scarring",
                      "Corneal opacity",
                      "Corneal damage following infection",
                      "Previous eye surgery causing corneal damage",
                      "Corneal swelling or endothelial failure",
                      "Bullous keratopathy",
                      "Certain corneal injuries",
                      "Chemical or mechanical eye injuries",
                      "Failed previous corneal transplant",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-4">
                    The specific surgical approach depends on which part of the cornea is affected.
                  </p>
                </section>

                {/* TYPES OF CORNEA TRANSPLANT SURGERY */}
                <section id="types-of-surgery" className="mb-12">
                  <SectionHeading>Types of Cornea Transplant Surgery</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Corneal transplantation is not a single procedure. Modern surgery can replace specific layers of the cornea when the other layers remain healthy.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    The main types include:
                  </p>

                  <SubHeading>1. Penetrating Keratoplasty (PKP)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Penetrating keratoplasty, or PKP, is a full-thickness corneal transplant.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    During the procedure, the surgeon removes the diseased central portion of the cornea and replaces it with a healthy donor corneal graft. The graft is generally secured with sutures.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    PKP may be considered when multiple layers or the full thickness of the cornea are significantly damaged, including some cases of advanced keratoconus, corneal scarring, dystrophy, infection or traumatic injury.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Recovery after PKP is generally longer than after many partial-thickness procedures, and vision may continue to change for months.
                  </p>

                  <SubHeading>2. Deep Anterior Lamellar Keratoplasty (DALK)</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    DALK replaces the diseased anterior or stromal layers of the cornea while preserving the patient's healthy Descemet membrane and endothelium.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    It may be considered for conditions such as keratoconus and certain anterior corneal diseases when the inner endothelial layer remains healthy.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Because the patient's own endothelium is retained, DALK can offer an important advantage in appropriately selected patients: there is less donor endothelial tissue involved compared with a full-thickness transplant.
                  </p>

                  <SubHeading>3. DSAEK / DSEK</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Descemet's Stripping Automated Endothelial Keratoplasty (DSAEK) is an endothelial keratoplasty procedure.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Instead of replacing the entire cornea, the surgeon replaces the diseased inner endothelial layer along with Descemet's membrane and a thin layer of donor posterior stroma.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    DSAEK may be considered for conditions involving endothelial dysfunction, such as Fuchs' dystrophy or certain forms of corneal edema.
                  </p>

                  <SubHeading>4. DMEK</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Descemet's Membrane Endothelial Keratoplasty (DMEK) is another selective endothelial transplant procedure.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    It replaces the damaged Descemet membrane and endothelial cells with healthy donor tissue while preserving most of the patient's corneal structure.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    DMEK may be used for selected patients with endothelial disorders, including Fuchs' endothelial dystrophy and bullous keratopathy.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    DMEK is technically more delicate than some other forms of corneal transplantation, so patient selection and surgeon experience are important.
                  </p>
                </section>

                {/* WHICH TYPE IS BEST */}
                <section id="which-type-is-best" className="mb-12">
                  <SectionHeading>Cornea Transplant Surgery: Which Type Is Best?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    There is no single best corneal transplant technique for every patient.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    The surgeon selects the procedure based on:
                  </p>

                  <BulletList
                    items={[
                      "Which corneal layer is damaged",
                      "Severity and cause of the disease",
                      "Corneal thickness",
                      "Presence of corneal scarring",
                      "Condition of the corneal endothelium",
                      "Previous eye surgeries",
                      "Other eye conditions",
                      "Previous transplant history",
                      "Overall visual requirements",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    For example, DMEK is designed for endothelial disease and does not treat significant anterior stromal scarring or keratoconus, while PKP may be necessary when the full thickness of the cornea is affected.
                  </p>
                </section>

                {/* WHAT CONDITIONS CAN BE TREATED */}
                <section id="conditions-treated" className="mb-12">
                  <SectionHeading>What Conditions Can Be Treated With a Corneal Transplant?</SectionHeading>

                  <SubHeading>Keratoconus</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Keratoconus causes the cornea to become progressively thinner and more cone-shaped. In advanced cases where vision cannot be adequately corrected with glasses or contact lenses, corneal transplantation may be considered.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Depending on the corneal layers involved, DALK or PKP may be considered.
                  </p>

                  <SubHeading>Fuchs' Endothelial Dystrophy</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Fuchs' dystrophy affects the endothelial cells responsible for maintaining corneal clarity.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Selected patients with significant endothelial dysfunction may benefit from endothelial keratoplasty procedures such as DMEK or DSAEK.
                  </p>

                  <SubHeading>Corneal Scarring</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Severe scarring caused by infection, trauma, chemical injury or other conditions can interfere with the passage of light through the cornea.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    If the scar significantly affects vision and cannot be adequately treated by other methods, corneal transplantation may be considered.
                  </p>

                  <SubHeading>Corneal Infection</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Severe or uncontrolled corneal infection can damage the corneal tissue and lead to permanent scarring or structural damage.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    In selected cases, transplantation may be required after the infection has been appropriately managed.
                  </p>

                  <SubHeading>Bullous Keratopathy</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Bullous keratopathy can occur when the corneal endothelium fails to maintain normal corneal hydration, causing corneal swelling and sometimes painful blisters.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Depending on the patient's condition, endothelial transplantation such as DMEK or DSAEK may be considered.
                  </p>
                </section>

                {/* HOW IS IT PERFORMED */}
                <section id="how-is-performed" className="mb-12">
                  <SectionHeading>How Is Cornea Transplant Surgery Performed?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The exact surgical steps depend on the type of transplant.
                  </p>

                  <SubHeading>Step 1: Comprehensive Eye Examination</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-2">
                    The ophthalmologist evaluates:
                  </p>
                  <BulletList
                    items={[
                      "Corneal structure",
                      "Corneal thickness",
                      "Corneal shape",
                      "Visual acuity",
                      "Eye pressure",
                      "Retina and optic nerve",
                      "Previous surgeries",
                      "Overall eye health",
                    ]}
                  />
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Additional diagnostic testing may be required to determine which corneal layer is affected.
                  </p>

                  <SubHeading>Step 2: Donor Tissue Assessment</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    A suitable donor cornea is obtained through an authorised eye-bank system and undergoes appropriate screening and assessment before transplantation.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Donor tissue requirements vary according to the type of transplant being performed.
                  </p>

                  <SubHeading>Step 3: Anaesthesia</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Corneal transplant surgery may be performed using local or general anaesthesia depending on the procedure, patient factors and surgeon's recommendation.
                  </p>

                  <SubHeading>Step 4: Removal of Diseased Tissue</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    The surgeon removes the damaged corneal tissue according to the selected transplant technique.
                  </p>

                  <SubHeading>Step 5: Donor Tissue Placement</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Healthy donor tissue is carefully positioned in the recipient's eye.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    In PKP, the donor cornea replaces the full-thickness corneal button. In lamellar procedures, only the required corneal layer is transplanted.
                  </p>

                  <SubHeading>Step 6: Securing the Graft</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Depending on the procedure, the graft may be secured using sutures or supported with an air or gas bubble.
                  </p>

                  <SubHeading>Step 7: Postoperative Monitoring</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The patient receives prescribed eye drops and follow-up instructions. Regular examinations are important to monitor healing, graft attachment, eye pressure and signs of rejection or infection.
                  </p>
                </section>

                {/* CORNEA TRANSPLANT RECOVERY */}
                <section id="recovery" className="mb-12">
                  <SectionHeading>Cornea Transplant Recovery</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Recovery depends greatly on the type of transplant.
                  </p>

                  <SubHeading>After PKP</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Full-thickness corneal transplantation generally requires a longer recovery period. Vision may fluctuate while the graft heals and the corneal shape changes.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Complete visual recovery may take many months and, in some cases, a year or longer.
                  </p>

                  <SubHeading>After DALK</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Recovery may be shorter than after PKP, although visual improvement can still take time as the cornea heals and stabilises.
                  </p>

                  <SubHeading>After DMEK or DSAEK</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Because these procedures replace only the diseased inner layers, visual recovery can be faster than after full-thickness transplantation in appropriately selected patients. However, the recovery timeline varies between individuals and depends on the underlying disease and surgical outcome.
                  </p>
                </section>

                {/* WHAT SHOULD YOU AVOID */}
                <section id="what-to-avoid" className="mb-12">
                  <SectionHeading>What Should You Avoid After Cornea Transplant Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Your ophthalmologist will provide personalised instructions, but patients may be advised to:
                  </p>

                  <BulletList
                    items={[
                      "Avoid rubbing or pressing the operated eye",
                      "Use prescribed eye drops exactly as directed",
                      "Protect the eye from accidental injury",
                      "Attend all follow-up appointments",
                      "Avoid strenuous activities until cleared",
                      "Follow instructions regarding swimming and bathing",
                      "Avoid driving until vision is adequate and the surgeon permits it",
                      "Report sudden changes in vision or eye symptoms promptly",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    Patients who undergo certain endothelial procedures may also need to follow specific positioning instructions after surgery to help the graft remain properly positioned.
                  </p>
                </section>

                {/* RISKS AND COMPLICATIONS */}
                <section id="risks-and-complications" className="mb-12">
                  <SectionHeading>Cornea Transplant Risks and Complications</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Corneal transplantation can be successful, but it is still major eye surgery and carries potential risks.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Possible complications include:
                  </p>

                  <BulletList
                    items={[
                      "Graft rejection",
                      "Graft failure",
                      "Infection",
                      "Eye inflammation",
                      "Increased eye pressure or glaucoma",
                      "Graft detachment after endothelial keratoplasty",
                      "Corneal swelling",
                      "Astigmatism",
                      "Wound or suture-related problems",
                      "Recurrence of the original disease in selected conditions",
                      "Need for additional treatment or repeat transplantation",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    Graft rejection occurs when the immune system reacts against donor tissue. Warning symptoms can include redness, sensitivity to light, worsening vision and eye pain. Prompt ophthalmic assessment is important if these symptoms occur.
                  </p>
                </section>

                {/* WHAT IS GRAFT REJECTION */}
                <section id="graft-rejection" className="mb-12">
                  <SectionHeading>What Is Corneal Graft Rejection?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    A corneal graft rejection occurs when the recipient's immune system attacks the transplanted donor tissue.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Not every postoperative change represents rejection, which is why new symptoms should be assessed by an ophthalmologist rather than self-treated.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Potential warning signs include:
                  </p>

                  <BulletList
                    items={[
                      "R – Redness",
                      "S – Sensitivity to light",
                      "V – Vision changes",
                      "P – Pain",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    If these symptoms occur after a corneal transplant, contact your eye specialist promptly.
                  </p>
                </section>

                {/* IS SURGERY SAFE */}
                <section id="is-it-safe" className="mb-12">
                  <SectionHeading>Is Cornea Transplant Surgery Safe?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Corneal transplantation is an established treatment for severe corneal disease, but no surgery is completely risk-free.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    The safety and expected outcome depend on:
                  </p>

                  <BulletList
                    items={[
                      "Type of corneal disease",
                      "Transplant technique",
                      "Overall eye health",
                      "Surgeon experience",
                      "Donor tissue quality",
                      "Previous eye surgery",
                      "Postoperative care",
                      "Patient adherence to medications and follow-up",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    A detailed assessment is therefore necessary before recommending surgery.
                  </p>
                </section>

                {/* SURGERY COST IN INDIA */}
                <section id="surgery-cost" className="mb-12">
                  <SectionHeading>Cornea Transplant Surgery Cost in India</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    The cost of cornea transplant surgery in India varies depending on the type of transplant, hospital, surgeon, diagnostic testing and patient's individual medical requirements.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    An indicative private-hospital range may be approximately:
                  </p>

                  <CostTable
                    headers={["Treatment", "Indicative Cost in India"]}
                    rows={[
                      ["Corneal Transplant / Keratoplasty", "₹50,000 – ₹1,50,000+"],
                      ["DALK", "₹60,000 – ₹1,50,000+"],
                      ["DSAEK / DSEK", "₹70,000 – ₹1,75,000+"],
                      ["DMEK", "₹80,000 – ₹2,00,000+"],
                      ["Complex / Repeat Corneal Transplant", "₹1,00,000 – ₹2,50,000+"],
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 my-5">
                    These figures are indicative rather than fixed package prices. A major Indian hospital currently publishes an average corneal-transplant range of approximately ₹50,000–₹1,50,000, but actual costs can differ according to procedure and patient requirements.
                  </p>

                  <SubHeading>Factors That Affect Corneal Transplant Cost</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The final cost may depend on:
                  </p>
                  <BulletList
                    items={[
                      "Type of transplant",
                      "Hospital and city",
                      "Ophthalmologist's expertise",
                      "Donor tissue requirements",
                      "Preoperative diagnostic tests",
                      "Anaesthesia",
                      "Operating-room charges",
                      "IOL or combined cataract procedure, if required",
                      "Medicines",
                      "Follow-up appointments",
                      "Management of complications",
                      "Need for repeat surgery",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 my-5">
                    For international patients, flights, accommodation, visa-related expenses and local transportation are generally separate unless specifically included in a medical travel package.
                  </p>

                  <SubHeading>Cornea Transplant Surgery Cost in India vs Other Countries</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    India can be considered by international patients because private healthcare costs for many ophthalmic procedures may be lower than comparable treatment in countries such as the USA, UK or Australia.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    However, international patients should compare:
                  </p>
                  <BulletList
                    items={[
                      "Surgical technique",
                      "Surgeon expertise",
                      "Hospital quality",
                      "Donor tissue availability",
                      "Postoperative care",
                      "Follow-up arrangements",
                      "Total medical-travel cost",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    Choosing treatment based solely on the lowest price may not provide the best clinical option.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-3">
                    Ekam can help international patients request an individualised treatment estimate based on their diagnosis and recommended transplant technique.
                  </p>
                </section>

                {/* FOR INTERNATIONAL PATIENTS */}
                <section id="international-patients" className="mb-12">
                  <SectionHeading>Cornea Transplant Surgery for International Patients</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Travelling to India for a corneal transplant requires careful medical and logistical planning.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Ekam can support international patients through different stages of their medical journey.
                  </p>

                  <SubHeading>1. Medical Record Review</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients can share relevant medical reports, previous eye-surgery details and diagnostic information for preliminary coordination with an appropriate ophthalmology team.
                  </p>

                  <SubHeading>2. Specialist Consultation</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Ekam can help coordinate consultation with suitable cornea specialists.
                  </p>

                  <SubHeading>3. Hospital Selection</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Based on the patient's condition and treatment requirements, we can assist in identifying suitable hospitals and eye-care centres in India.
                  </p>

                  <SubHeading>4. Treatment Estimate</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    After clinical evaluation, patients can receive information about the recommended procedure and estimated treatment costs.
                  </p>

                  <SubHeading>5. Medical Travel Support</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Ekam can assist with practical arrangements such as accommodation, transportation and coordination during the patient's stay.
                  </p>

                  <SubHeading>6. Follow-Up Coordination</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                    Corneal transplant patients require postoperative monitoring. International patients should plan sufficient time in India for the surgeon's recommended follow-up schedule.
                  </p>

                  <SubHeading>How Long Should International Patients Stay in India?</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    The required stay depends on the type of corneal transplant and the surgeon's postoperative plan.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients undergoing full-thickness transplantation may require a longer period of monitoring because healing and visual stabilisation can take months.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients undergoing endothelial procedures may experience earlier visual improvement, but follow-up is still essential.
                  </p>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    International patients should not book a return flight solely based on a standard recovery estimate. The treating surgeon should confirm whether the patient's eye is stable enough for travel.
                  </p>
                </section>

                {/* WHY CHOOSE INDIA */}
                <section id="why-choose-india" className="mb-12">
                  <SectionHeading>Why Choose India for Cornea Transplant Surgery?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    India has specialised ophthalmology centres offering a range of corneal procedures, including full-thickness and selective lamellar transplantation.
                  </p>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Potential advantages for international patients include:
                  </p>

                  <BulletList
                    items={[
                      "Experienced ophthalmologists",
                      "Dedicated cornea specialists",
                      "Access to advanced eye-care facilities",
                      "Availability of multiple corneal transplant techniques",
                      "Eye-bank and donor-tissue infrastructure",
                      "Comprehensive diagnostic services",
                      "Postoperative ophthalmic care",
                      "International patient coordination",
                      "Potentially competitive treatment costs",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    The most appropriate hospital should be selected according to the patient's diagnosis and required procedure rather than based only on location or price.
                  </p>
                </section>

                {/* WHY CHOOSE EKAM */}
                <section id="why-choose-ekam" className="mb-12">
                  <SectionHeading>Why Choose Ekam for Cornea Transplant Treatment in India?</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-5">
                    Ekam helps international patients navigate the healthcare process in India.
                  </p>

                  <SubHeading>Specialist Coordination</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    We help patients connect with appropriate ophthalmology and cornea specialists.
                  </p>

                  <SubHeading>Hospital Assistance</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    We assist in identifying hospitals according to the patient's treatment requirements.
                  </p>

                  <SubHeading>Treatment Planning</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Patients receive support in understanding the recommended transplant technique and treatment pathway.
                  </p>

                  <SubHeading>Cost Coordination</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    We help patients obtain and understand treatment estimates.
                  </p>

                  <SubHeading>International Patient Support</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Our team assists international patients with practical aspects of their medical journey.
                  </p>

                  <SubHeading>Travel Assistance</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    Support can include accommodation, local transportation and other travel coordination based on the patient's requirements.
                  </p>

                  <SubHeading>Follow-Up Coordination</SubHeading>
                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                    We help patients coordinate postoperative consultations and follow-up arrangements.
                  </p>
                </section>

                {/* HOW TO PREPARE */}
                <section id="how-to-prepare" className="mb-12">
                  <SectionHeading>How to Prepare for Cornea Transplant Surgery</SectionHeading>

                  <p className="text-[#425466] text-base md:text-lg leading-8 mb-4 font-semibold text-[#053161]">
                    Before travelling or undergoing surgery, patients should discuss:
                  </p>

                  <BulletList
                    items={[
                      "Current medications",
                      "Previous eye surgeries",
                      "Existing eye diseases",
                      "Allergies",
                      "Previous corneal infections",
                      "Contact lens use",
                      "Diabetes or other medical conditions",
                      "Previous corneal transplantation",
                      "Expected visual outcome",
                      "Type of donor transplant recommended",
                      "Recovery timeline",
                      "Follow-up requirements",
                    ]}
                  />

                  <p className="text-[#425466] text-base md:text-lg leading-8 mt-5">
                    International patients should carry copies of relevant medical reports, previous eye-surgery records, medication lists and diagnostic scans where available.
                  </p>
                </section>

                {/* FAQ SECTION */}
                <section id="faqs" className="mb-12">
                  <SectionHeading>Frequently Asked Questions About Cornea Transplant Surgery</SectionHeading>

                  <div className="space-y-4">
                    <FAQ
                      question="1. What is a cornea transplant?"
                      answer="A cornea transplant is surgery that replaces damaged or diseased corneal tissue with healthy donor tissue. Depending on the disease, the surgeon may replace the entire cornea or only specific layers."
                    />
                    <FAQ
                      question="2. What are the main types of corneal transplant?"
                      answer="The main types include penetrating keratoplasty (PKP), deep anterior lamellar keratoplasty (DALK), DSAEK/DSEK and DMEK. The appropriate procedure depends on the affected corneal layer."
                    />
                    <FAQ
                      question="3. Is a cornea transplant painful?"
                      answer="The surgery is performed under anaesthesia, so significant pain during the procedure is not generally expected. Some discomfort, irritation or light sensitivity may occur during recovery."
                    />
                    <FAQ
                      question="4. How long does a cornea transplant take?"
                      answer="The duration varies according to the transplant technique, patient's condition and surgeon's approach. Your ophthalmologist can provide a procedure-specific estimate."
                    />
                    <FAQ
                      question="5. How long does it take to recover from a corneal transplant?"
                      answer="Recovery varies significantly by procedure. Full-thickness PKP generally requires a longer recovery, while some partial-thickness procedures can allow faster visual recovery. Complete visual stabilisation may take months."
                    />
                    <FAQ
                      question="6. Can a corneal transplant restore vision?"
                      answer="A corneal transplant can improve vision when corneal disease is the primary cause of visual impairment. The final visual outcome depends on the underlying condition, transplant type, eye health and other factors."
                    />
                    <FAQ
                      question="7. Is cornea transplant permanent?"
                      answer="A donor corneal graft can function for many years, but graft failure or rejection can occur. Some patients may eventually require additional treatment or repeat transplantation."
                    />
                    <FAQ
                      question="8. What is DMEK corneal transplant?"
                      answer="DMEK is a selective endothelial corneal transplant in which the diseased Descemet membrane and endothelial cells are replaced with donor tissue. It is used for selected endothelial disorders."
                    />
                    <FAQ
                      question="9. Is DMEK better than PKP?"
                      answer="Neither is universally better. DMEK is designed for diseases primarily affecting the corneal endothelium, while PKP replaces the full thickness of the cornea and may be required when multiple corneal layers are severely damaged."
                    />
                    <FAQ
                      question="10. Can keratoconus be treated with a corneal transplant?"
                      answer="Yes. Advanced keratoconus may require corneal transplantation when vision cannot be adequately corrected with other options. Depending on the condition of the corneal layers, DALK or PKP may be considered."
                    />
                    <FAQ
                      question="11. What causes corneal transplant rejection?"
                      answer="Rejection occurs when the immune system recognises donor tissue as foreign and mounts an immune response. Prompt treatment can be important, so new redness, light sensitivity, pain or worsening vision should be assessed urgently."
                    />
                    <FAQ
                      question="12. Can an international patient get a cornea transplant in India?"
                      answer="Yes, international patients can seek corneal transplant evaluation and treatment in India. However, the procedure and timing depend on medical assessment and availability of appropriate donor tissue."
                    />
                    <FAQ
                      question="13. How much does cornea transplant surgery cost in India?"
                      answer="Published Indian hospital estimates can vary. One major hospital currently lists an average range of approximately ₹50,000–₹1,50,000, while complex procedures or advanced endothelial transplants may cost more. A personalised quotation is required for an accurate estimate."
                    />
                    <FAQ
                      question="14. Does a corneal transplant require a donor cornea?"
                      answer="Yes. Corneal transplantation uses donated human corneal tissue that has been appropriately evaluated and prepared for transplantation."
                    />
                    <FAQ
                      question="15. Can cataract surgery and cornea transplant be performed together?"
                      answer="In selected patients, cataract surgery and corneal transplantation may be combined. The decision depends on the condition of the cornea, lens and overall eye health and should be made by the treating ophthalmologist."
                    />
                  </div>
                </section>

                {/* FINAL CTA BOX */}
                <section>
                  <div className="rounded-2xl border border-[#DCE5F0] bg-[#F8FAFD] p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#053161] mb-4">
                      Get a Cornea Transplant Treatment Plan in India
                    </h2>
                
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-4">
                      If corneal disease is affecting your vision, an ophthalmologist can determine whether a corneal transplant is appropriate and which surgical technique best matches the affected layer of your cornea.
                    </p>
                    
                    <p className="text-[#425466] text-base md:text-lg leading-8 mb-6">
                      Ekam helps international patients coordinate specialist consultations, hospital selection, treatment estimates and medical travel support for corneal transplant treatment in India.
                    </p>
                
                    <div className="mb-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-[#053161] text-white px-7 py-3.5 font-bold hover:bg-[#1B4F9C] transition"
                      >
                        Request a personalised cornea transplant consultation with Ekam today →
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
                Get Treatment Plan
              </h3>
              <p className="text-white/85 text-sm leading-6 mb-5">
                Get expert consultation and medical travel assistance for cornea transplant surgery in India.
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

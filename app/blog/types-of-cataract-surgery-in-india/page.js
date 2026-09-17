import React, { useState } from 'react';
import { 
  Eye, 
  ShieldCheck, 
  Clock, 
  Globe, 
  HelpCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Activity, 
  UserCheck, 
  Sparkles, 
  Award,
  ArrowRight
} from 'lucide-react';

const CataractSurgeryGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "What are the 3 main types of cataract surgery?",
      a: "Phacoemulsification, Femtosecond Laser-Assisted Cataract Surgery (FLACS), and Manual Small-Incision Cataract Surgery (MSICS/SICS) are the three primary contemporary methods. Traditional ECCE may still be utilized in specific complex cases."
    },
    {
      q: "What is the safest cataract surgery?",
      a: "There is no single method that is universally safest for every patient. The ideal approach depends on cataract density, underlying eye health, surgeon expertise, and available technology. Both conventional phacoemulsification and FLACS offer high safety profiles, while MSICS is highly effective in appropriate clinical settings."
    },
    {
      q: "Is laser cataract surgery safer than normal cataract surgery?",
      a: "FLACS provides enhanced precision and repeatability for specific surgical steps, but current evidence does not demonstrate that it is universally safer or delivers superior clinical outcomes compared to well-performed conventional phacoemulsification in routine cases."
    },
    {
      q: "What is the best age for cataract surgery?",
      a: "There is no fixed or ideal age. Surgery is recommended whenever the cataract begins to interfere significantly with your visual clarity, independence, and daily routine."
    },
    {
      q: "Can cataract surgery be done at 50 or after 70?",
      a: "Yes. Cataract surgery can be safely performed at age 50 or younger if visually impaired, as well as past age 70. Age alone is not a limiting factor; decisions are based on overall eye health and medical fitness."
    },
    {
      q: "Is phacoemulsification better than MSICS?",
      a: "Neither technique is inherently superior for all cases. Phacoemulsification utilizes ultrasound energy via a microscopic incision, making it standard for routine cases. MSICS is cost-effective and particularly advantageous for extremely dense or advanced cataracts."
    },
    {
      q: "Does a cataract grow back after surgery?",
      a: "No, once the natural cloudy lens is removed and replaced with an artificial intraocular lens (IOL), the cataract cannot return. Some patients may develop Posterior Capsule Opacification (PCO) later, which is easily corrected with a quick, painless YAG laser procedure."
    },
    {
      q: "Can international patients undergo cataract surgery in India?",
      a: "Yes. India offers world-class ophthalmology care with advanced surgical techniques at competitive costs. Ekam Health Services assists international patients with hospital selection, top specialist consultations, visa logistics, and end-to-end medical travel care."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 via-emerald-800 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <Eye className="w-4 h-4" /> Comprehensive Eye Care Guide
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Types of Cataract Surgery in India: <span className="text-emerald-400">Safest Options & Best Age</span> for Treatment
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            Cataracts are the leading cause of vision impairment globally, making daily tasks like reading, driving, and recognizing faces difficult. Explore modern surgical techniques—from Phacoemulsification to Laser-Assisted Surgery—and discover personalized care options in India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#consultation" className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-200 inline-flex items-center gap-2">
              Get Expert Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#comparison" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200">
              Compare Surgical Types
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Intro Overview */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Activity className="text-emerald-600 w-6 h-6" /> Overview: Modern Cataract Treatment
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            A cataract occurs when the eye’s natural clear lens becomes cloudy over time, causing blurred vision, glare, faded colors, and poor night vision. Cataract surgery is the definitive, highly safe treatment to restore clear visual function by replacing the cloudy lens with an artificial Intraocular Lens (IOL).
          </p>
          <p className="text-slate-600 leading-relaxed">
            Modern ophthalmology in India offers advanced treatment options ranging from conventional ultrasound-based Phacoemulsification to state-of-the-art Femtosecond Laser-Assisted Cataract Surgery (FLACS).
          </p>
        </section>

        {/* 3 Main Types Detailed */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">What Are the 3 Main Types of Cataract Surgery?</h2>
            <p className="text-slate-600 mt-1">Understanding the surgical choices available for optimal vision restoration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phaco */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors">
              <div>
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold mb-4 text-xl">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Phacoemulsification</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  The most widely used modern technique. Uses an ultrasound-powered probe via a microscopic self-sealing incision to fragment and suction out the cloudy lens before inserting the new IOL.
                </p>
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Benefits</span>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Micro-incision; sutureless recovery</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Fast visual rehabilitation</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Suitable for most routine cases</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* MSICS */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors">
              <div>
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold mb-4 text-xl">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">MSICS / SICS</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Manual Small-Incision Cataract Surgery removes the lens manually through a small, self-sealing tunnel incision. Highly effective without relying on complex ultrasound machines.
                </p>
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Benefits</span>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Cost-effective surgical solution</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Ideal for dense or advanced cataracts</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Excellent visual outcomes</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FLACS */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-emerald-500 transition-colors">
              <div>
                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 font-bold mb-4 text-xl">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">FLACS (Laser Surgery)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Femtosecond Laser-Assisted Cataract Surgery automates key steps including corneal incisions, capsulotomy, and lens pre-fragmentation with computer-guided laser precision.
                </p>
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Benefits</span>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> High computer-guided precision</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Reduced ultrasound energy needed</li>
                    <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Great for premium IOL alignment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section id="comparison" className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-8 bg-slate-900 text-white">
            <h2 className="text-2xl font-bold">Types of Cataract Surgery in India</h2>
            <p className="text-slate-300 text-sm mt-1">Comparison of core technology, ideal application, and key considerations.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-sm font-semibold uppercase tracking-wider">
                  <th className="p-4">Surgery Type</th>
                  <th className="p-4">Main Technology</th>
                  <th className="p-4">Common Use</th>
                  <th className="p-4">Key Consideration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-600">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Phacoemulsification</td>
                  <td className="p-4">Ultrasound Probe</td>
                  <td className="p-4">Routine & standard cases</td>
                  <td className="p-4">Widely performed, quick recovery</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">MSICS / SICS</td>
                  <td className="p-4">Manual Small-Incision Tunnel</td>
                  <td className="p-4">Dense / Advanced cataracts</td>
                  <td className="p-4">Cost-effective, non-machine dependent</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">FLACS</td>
                  <td className="p-4">Femtosecond Laser + Phaco</td>
                  <td className="p-4">Precision planning & Astigmatism</td>
                  <td className="p-4">Higher cost; laser assists primary steps</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">ECCE</td>
                  <td className="p-4">Manual Large Extracapsular</td>
                  <td className="p-4">Selected ultra-complex cases</td>
                  <td className="p-4">Requires sutures; less common today</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Safety & Myth Busting */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 sm:p-8 rounded-2xl border border-emerald-100 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-600 text-white rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">What Is the Safest Cataract Surgery?</h2>
          </div>
          <p className="text-slate-700 leading-relaxed">
            There is no single surgical approach that is "safest" for every individual. Safety is determined by matching the correct surgical technique with your specific corneal health, lens density, retinal status, and overall eye anatomy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Is Laser Safer Than Phaco?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Not necessarily. While FLACS provides exceptional repeatability in making laser incisions, clinical studies show that overall safety and visual outcomes in routine cataracts are comparable between skilled Phacoemulsification and FLACS.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2">Should You Wait for a Cataract to "Mature"?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                No! Waiting until a cataract becomes hyper-mature or overly dense makes surgical removal more complex. Modern techniques allow early, safe intervention as soon as daily visual activities are impacted.
              </p>
            </div>
          </div>
        </section>

        {/* Best Age Timeline */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Clock className="text-emerald-600 w-7 h-7" /> What Is the Best Age for Cataract Surgery?
            </h2>
            <p className="text-slate-600 mt-1">Surgical timing depends on functional visual loss, not chronological age.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-emerald-600 font-bold text-lg mb-1">In Your 40s & 50s</div>
              <h3 className="font-bold text-slate-900 mb-2">Early Onset Cataracts</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Early development can occur due to genetics, diabetes, or prior eye trauma. If vision compromises driving or reading, surgery can be safely performed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-emerald-600 font-bold text-lg mb-1">In Your 60s</div>
              <h3 className="font-bold text-slate-900 mb-2">Standard Timing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                The most common decade for cataract intervention. Patients often opt for advanced Multifocal or EDOF IOLs to minimize dependence on reading glasses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="text-emerald-600 font-bold text-lg mb-1">70 Years & Older</div>
              <h3 className="font-bold text-slate-900 mb-2">Senior Care Surgery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Age is not a barrier. As long as general ocular and systemic health permits, cataract surgery dramatically improves safety, mobility, and quality of life.
              </p>
            </div>
          </div>
        </section>

        {/* International Patients / Why India */}
        <section className="bg-slate-900 text-white p-8 rounded-2xl space-y-6">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-emerald-400" />
            <div>
              <h2 className="text-2xl font-bold">Cataract Surgery in India for International Patients</h2>
              <p className="text-slate-400 text-sm">World-class ophthalmic care and affordable treatment packages.</p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            India is a global hub for medical tourism, offering internationally trained ophthalmologists, JCI-accredited eye care centers, and cutting-edge IOL technology (Toric, Multifocal, Trifocal, EDOF) at a fraction of Western costs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700">
              <UserCheck className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="font-semibold text-white text-sm">Expert Surgeons</h4>
              <p className="text-xs text-slate-400 mt-1">High-volume specialist surgeons with global training.</p>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700">
              <Sparkles className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="font-semibold text-white text-sm">Advanced Tech</h4>
              <p className="text-xs text-slate-400 mt-1">Access to FLACS lasers and premium intraocular lenses.</p>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700">
              <Award className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="font-semibold text-white text-sm">Accredited Centers</h4>
              <p className="text-xs text-slate-400 mt-1">State-of-the-art hospitals with strict safety protocols.</p>
            </div>
            <div className="bg-slate-800/80 p-4 rounded-lg border border-slate-700">
              <Globe className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="font-semibold text-white text-sm">Full Coordination</h4>
              <p className="text-xs text-slate-400 mt-1">Ekam manages travel, hospital booking, and recovery assistance.</p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <HelpCircle className="text-emerald-600 w-7 h-7" /> Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-1">Clear answers to common questions about cataract surgery in India.</p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section id="consultation" className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 text-white text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold">Get Cataract Treatment in India with Ekam</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto text-sm sm:text-base">
            Ekam Health Services helps international patients coordinate expert ophthalmology consultations, select top accredited hospitals, and manage end-to-end travel and treatment planning.
          </p>
          <div className="pt-2">
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-200 inline-flex items-center gap-2">
              Request Your Personal Consultation <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CataractSurgeryGuide;

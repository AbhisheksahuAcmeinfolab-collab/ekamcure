"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, Clock, ShieldCheck, FileText, ArrowRight, MessageSquare, 
  Users, HeartHandshake, Building2, Stethoscope, Sparkles, Heart, Activity,
  Dna, Send, UserCheck, Shield, DollarSign, Handshake
} from "lucide-react";

export default function BecomeAPartnerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans overflow-x-hidden">
      
      {/* 🚀 1. Hero Banner */}
      <section className="bg-gradient-to-br from-blue-950 via-[#073b75] to-blue-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-cyan-300 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" /> Free to apply. We reply within 2 business days.
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Become an Ekam Partner: Refer Patients for Treatment in India
              </h1>
              <p className="text-base sm:text-lg text-gray-200 mb-8 leading-relaxed">
                Families in your community already ask you where to go for treatment. With Ekam, you will have the answer. When someone needs surgery or specialist care, they ask a person they trust. With Ekam behind you, you can give them a treatment plan, a clear price, help with the medical visa and a place to stay in India, and you stay their trusted contact throughout.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#apply-form"
                  className="px-7 py-3.5 rounded-full bg-[#00a8ff] hover:bg-sky-500 text-white font-bold text-base shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Become a partner
                </a>
                <a
                  href="https://wa.me/919990205353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-cyan-500/20 to-blue-400/10 rounded-3xl p-8 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 rounded-full bg-cyan-400/20 border border-cyan-300/40 flex items-center justify-center mb-6 text-cyan-300 shadow-xl">
                  <Handshake className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Partner With Us</h3>
                <p className="text-sm text-cyan-100">Guiding families together for world-class healthcare in India.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 💎 2. Trust Badges */}
      <section className="py-12 bg-slate-50 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-400 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#053161] flex items-center justify-center flex-shrink-0 group-hover:bg-[#053161] group-hover:text-white transition-colors duration-300">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#053161] transition-colors">Written payout terms</h3>
                <p className="text-sm text-gray-500">Agreed in writing before your first case</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-400 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#053161] flex items-center justify-center flex-shrink-0 group-hover:bg-[#053161] group-hover:text-white transition-colors duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#053161] transition-colors">Quotes within 48 hours</h3>
                <p className="text-sm text-gray-500">Fast treatment plans and itemised quotes</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-400 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#053161] flex items-center justify-center flex-shrink-0 group-hover:bg-[#053161] group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 group-hover:text-[#053161] transition-colors">You stay the first contact</h3>
                <p className="text-sm text-gray-500">We work through you at every single stage</p>
              </div>
            </div>

          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-base sm:text-lg text-gray-700 italic bg-white py-3 px-6 rounded-full border border-gray-200/60 inline-block shadow-xs">
              &quot;Ekam means <strong>&apos;one&apos;</strong>: one team and one point of contact for every patient and every partner.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* 👥 3. Who Can Partner With Us */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#053161] mb-4">Who can partner with us</h2>
            <p className="text-gray-600">Each partner type has its own process, so you only deal with what matters to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#053161] flex items-center justify-center mb-6 group-hover:bg-[#053161] group-hover:text-white transition-colors duration-300">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#053161] mb-3">Referral agents and facilitators</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">You work with patients in your country. Send us their reports and we return a treatment plan, hospital options and an itemised quote.</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> A fixed fee per completed case, agreed in writing</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Co-branded quotes and brochures</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Case updates on WhatsApp</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#053161] flex items-center justify-center mb-6 group-hover:bg-[#053161] group-hover:text-white transition-colors duration-300">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#053161] mb-3">Community health ambassadors</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">You are the trusted person in a village, church, mosque, temple or diaspora group. Families come to you first.</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Simple onboarding and training</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> We explain reports and costs, so you can guide families with confidence</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> A fixed, transparent support amount per patient</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#053161] flex items-center justify-center mb-6 group-hover:bg-[#053161] group-hover:text-white transition-colors duration-300">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#053161] mb-3">Insurers, medical aid schemes, employers and NGOs</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Offer members treatment in India with costs you can predict and check.</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Cost estimates before treatment, ready for your pre-authorisation process</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Case updates for your case managers</li>
                <li className="flex items-center gap-2.5"><CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> Discharge summaries and itemised invoices in English for every case</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#053161] flex items-center justify-center mb-6 group-hover:bg-[#053161] group-hover:text-white transition-colors duration-300">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#053161] mb-3">Hospitals and doctors</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">Are you a hospital or specialist interested in treating international patients through Ekam? Visit our page for hospitals and doctors.</p>
              </div>
              <div className="mt-4">
                <Link
                  href="/top-hospitals"
                  className="inline-flex items-center gap-2 text-[#053161] font-bold group-hover:text-blue-600 transition-colors"
                >
                  <span>Visit top hospitals page</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🏥 4. Our Partner Hospitals (Image Visual Badges Instead of Icons) */}
      <section className="py-16 bg-blue-50/60 border-y border-gray-200/60">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#053161] mb-3">Our partner hospitals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            We match each patient to the right hospital and specialist from our network of 10+ accredited hospitals in India.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Max Healthcare", code: "Max" },
              { name: "Apollo Hospitals", code: "Apollo" },
              { name: "Fortis Healthcare", code: "Fortis" },
              { name: "Yatharth Hospitals", code: "Yatharth" },
            ].map((hospital, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-500 group cursor-default"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-900 to-[#073b75] text-white flex items-center justify-center font-black text-xl shadow-md border border-blue-800 group-hover:scale-110 transition-transform">
                  {hospital.code}
                </div>
                <span className="font-extrabold text-[#053161] text-base group-hover:text-blue-600 transition-colors">{hospital.name}</span>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">NABH / JCI Accredited</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🩺 5. Treatments Families Ask Us About Most */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#053161] mb-4">Treatments families ask us about most</h2>
            <p className="text-gray-600">You can send us any case. These are the ones we are asked about every day:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { name: "Heart Surgery & Valve Surgery", icon: Heart },
              { name: "Kidney Transplant", icon: Activity },
              { name: "Knee Replacement", icon: Activity },
              { name: "Hip Replacement", icon: Activity },
              { name: "Spine Surgery", icon: Dna },
              { name: "IVF Treatment", icon: Sparkles },
              { name: "Cancer Treatment", icon: Stethoscope },
              { name: "Organ Transplants", icon: ShieldCheck },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 text-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-xl hover:border-blue-400 group cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100/60 text-[#053161] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#053161] group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base group-hover:text-[#053161] transition-colors">{item.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#053161] text-white font-bold hover:bg-blue-900 shadow-md transition-all duration-300 hover:scale-105"
            >
              <span>See all treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ⭐ 6. Our Commitments to Partners */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold mb-4 text-white">Our commitments to partners</h2>
            <p className="text-gray-400">Complete transparency and dedicated support for every step.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Payout terms in writing", desc: "You see your fee and when it is paid before you send your first case." },
              { title: "A quote within 48 hours", desc: "Send the reports and receive a treatment plan, hospital options and itemised costs." },
              { title: "Clear billing", desc: "Every estimate shows what is included, so families know the cost before they travel." },
              { title: "You stay the first contact", desc: "We work through you and keep you informed at every stage." },
              { title: "One named contact person", desc: "One person for questions and escalations, reachable on WhatsApp." },
              { title: "Visa to airport pickup", desc: "Medical visa invitation letters, accommodation, airport transfers & interpreter." },
              { title: "Accredited hospitals", desc: "We work only with NABH or JCI accredited hospitals, matched to each case." },
              { title: "Patient privacy", desc: "Medical reports are shared only with hospitals quoting on the case, with consent." },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 group"
              >
                <div className="w-8 h-1 rounded-full bg-cyan-500 mb-4 group-hover:w-16 transition-all duration-300"></div>
                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 Comparison Table */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#053161] mb-4">Referring with Ekam, step by step</h2>
          </div>
          <div className="overflow-x-auto shadow-xl rounded-3xl border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#053161] text-white">
                  <th className="p-5 font-bold text-base">The task</th>
                  <th className="p-5 font-bold text-base">On your own</th>
                  <th className="p-5 font-bold text-base bg-blue-900">With Ekam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-gray-900">Reading reports and choosing a hospital</td>
                  <td className="p-5 text-gray-600">Hours of research</td>
                  <td className="p-5 text-blue-950 font-bold bg-blue-50/60">Matched by our team to the right specialist</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-gray-900">Getting a cost estimate</td>
                  <td className="p-5 text-gray-600">Emails and waiting</td>
                  <td className="p-5 text-blue-950 font-bold bg-blue-50/60">Itemised quote within 48 hours</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-gray-900">Medical visa and travel</td>
                  <td className="p-5 text-gray-600">Forms and uncertainty</td>
                  <td className="p-5 text-blue-950 font-bold bg-blue-50/60">Visa invitation letter and travel planning</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-gray-900">Stay and airport pickup</td>
                  <td className="p-5 text-gray-600">Arranged by the family</td>
                  <td className="p-5 text-blue-950 font-bold bg-blue-50/60">Arranged by our team in India</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-5 font-bold text-gray-900">Keeping everyone updated</td>
                  <td className="p-5 text-gray-600">Constant calls</td>
                  <td className="p-5 text-blue-950 font-bold bg-blue-50/60">Regular updates on WhatsApp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 📈 7. Grow With Us */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-y border-gray-200/60">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#053161] mb-4">Grow with us</h2>
            <p className="text-gray-600">The more families you guide, the more support you get from us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 group">
              <div className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">Level 1</div>
              <h3 className="text-2xl font-extrabold text-[#053161] mb-6">Member</h3>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Partner agreement and onboarding</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Cost sheets and process guides</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> WhatsApp support</li>
              </ul>
            </div>

            <div className="bg-gradient-to-b from-white to-blue-50/30 p-8 rounded-3xl border-2 border-[#053161] shadow-xl relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
              <div className="absolute -top-3.5 right-6 bg-[#053161] text-white text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">Most Popular</div>
              <div className="inline-block text-xs font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider mb-3">Level 2</div>
              <h3 className="text-2xl font-extrabold text-[#053161] mb-6">Trusted partner</h3>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Priority quotes</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Co-branded materials</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Early access to new programmes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 group">
              <div className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider mb-3">Level 3</div>
              <h3 className="text-2xl font-extrabold text-[#053161] mb-6">Senior partner</h3>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> A named account manager</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> Invitations to regional events</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" /> A say in how we serve your country</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🧭 8. From First Message to First Payout in 5 Steps */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#053161] mb-4">From first message to first payout in 5 steps</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            {[
              { step: "1", title: "Apply", desc: "Fill in the short form below or message us on WhatsApp.", icon: Send },
              { step: "2", title: "Get verified", desc: "We call you, check your background and sign a simple agreement.", icon: UserCheck },
              { step: "3", title: "Send a case", desc: "Share patient reports with consent. We reply with a plan and quote.", icon: FileText },
              { step: "4", title: "We manage", desc: "Visa, travel, hospital and stay, with updates at each stage.", icon: Shield },
              { step: "5", title: "Get paid", desc: "Your fee is paid on the schedule in your agreement.", icon: DollarSign },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-6 rounded-3xl border border-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:border-blue-400 group cursor-default flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#053161] text-white flex items-center justify-center font-extrabold text-lg mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-md">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#053161] text-base mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📹 Founder Note & YouTube Video */}
      <section className="py-20 bg-slate-50 border-t border-gray-200/60">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">A note from our founder</span>
              <h2 className="text-3xl font-extrabold text-[#053161] mt-2 mb-6">Udai Singh, Founder, Ekam Health Services</h2>
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-[#053161] pl-5 mb-6 leading-relaxed">
                &quot;When we started Ekam, we wanted every patient to feel they had one trusted team beside them. Our partners are the heart of that promise, and we want to grow with you.&quot;
              </blockquote>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/24yTN_Du0lY"
                title="Udai Singh - Ekam Partner Welcome"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ❓ FAQ Section */}
      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#053161] mb-4">Frequently asked questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How and when am I paid?", a: "You receive a fixed fee for each completed treatment, paid within 60 Days of the patient's discharge. The amount and schedule are written in your partner agreement before you send your first case." },
              { q: "Does the patient pay more because they came through me?", a: "No. The patient pays the same package price as they would if they came to us directly." },
              { q: "Can I work from outside India?", a: "Yes. Most of our partners refer patients from their own country. Everything after the referral is handled by our team in India." },
              { q: "Do I need a medical background?", a: "No. Honesty, trust in your community and putting patients first matter most. Medical or social-sector experience helps." },
              { q: "Which countries can partners join from?", a: "Any country. We especially welcome partners in Zimbabwe, Botswana, Fiji, Mauritius and across Africa and the Pacific." },
              { q: "How fast will I hear back after applying?", a: "Within 2 business days. For anything urgent, message us on WhatsApp." },
              { q: "Can my organisation join with several team members?", a: "Yes. Tell us about your team in the application and we will set everyone up together." },
              { q: "Who talks to the patient?", a: "You stay the first contact. Our coordinator joins whenever you want help with plans, costs or travel." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs transition-all duration-200 hover:border-blue-400">
                <h3 className="font-bold text-base sm:text-lg text-[#053161] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📝 Application Form with WhatsApp Action */}
      <section id="apply-form" className="py-20 bg-gradient-to-br from-blue-950 via-[#073b75] to-blue-900 text-white relative">
        <div className="max-w-[800px] mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Apply to become a partner</h2>
            <p className="text-gray-200">Fill out the short form below and we will connect with you within 2 business days.</p>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              const name = form.fullName.value;
              const country = form.country.value;
              const phone = form.whatsapp.value;
              const email = form.email.value;
              const partnerType = form.partnerType.value;
              const org = form.organisation.value;
              const msg = form.message.value;

              const whatsappMessage = `Hello Ekam Team,\n\nI want to apply to become an Ekam Partner.\n\n*Name:* ${name}\n*Country:* ${country}\n*WhatsApp:* ${phone}\n*Email:* ${email}\n*Partner Type:* ${partnerType}\n*Organisation:* ${org || "N/A"}\n*Message:* ${msg || "N/A"}`;
              
              const encodedUrl = `https://wa.me/919990205353?text=${encodeURIComponent(whatsappMessage)}`;
              window.open(encodedUrl, "_blank");
              
              alert("Application submitted! Opening WhatsApp to send your application details.");
              form.reset();
            }}
            className="bg-white text-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6 border border-white/25"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                <input
                  type="text"
                  name="country"
                  required
                  placeholder="e.g. Zimbabwe, Fiji, Kenya..."
                  className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp number *</label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="+1234567890"
                  className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Partner type *</label>
              <select
                name="partnerType"
                required
                className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none transition-all"
              >
                <option value="">Select partner type</option>
                <option value="Agent or facilitator">Agent or facilitator</option>
                <option value="Community ambassador">Community ambassador</option>
                <option value="Insurer, medical aid, employer or NGO">Insurer, medical aid, employer or NGO</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organisation (optional)</label>
                <input
                  type="text"
                  name="organisation"
                  placeholder="Your company or group name"
                  className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message (optional)</label>
                <input
                  type="text"
                  name="message"
                  placeholder="Tell us a bit about your work"
                  className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                required
                id="consent"
                className="mt-1 w-4 h-4 text-[#053161] rounded border-gray-300 focus:ring-[#053161]"
              />
              <label htmlFor="consent" className="text-xs text-gray-600 leading-relaxed">
                I agree to be contacted by Ekam about the partner programme. *
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#0d6efd] hover:bg-blue-700 text-white font-bold text-base shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
            >
              Submit application
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

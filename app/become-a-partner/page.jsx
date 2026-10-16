"app/become-a-partner/page.jsx";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Clock, ShieldCheck, FileText, ArrowRight, MessageSquare, Award, Users, HeartHandshake, Building2, Stethoscope, Sparkles } from "lucide-react";

export default function BecomeAPartnerPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* 🚀 Hero Section */}
      <section className="bg-gradient-to-r from-blue-950 via-[#073b75] to-blue-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-800/60 border border-blue-700/50 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" /> Free to apply. We reply within 2 business days.
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
              Become an Ekam Partner: Refer Patients for Treatment in India
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Families in your community already ask you where to go for treatment. With Ekam, you will have the answer. When someone needs surgery or specialist care, they ask a person they trust. With Ekam behind you, you can give them a treatment plan, a clear price, help with the medical visa and a place to stay in India, and you stay their trusted contact throughout.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#apply-form"
                className="px-7 py-3.5 rounded-full bg-[#00a8ff] hover:bg-sky-600 text-white font-bold text-base shadow-lg transition-transform hover:scale-105"
              >
                Become a partner
              </a>
              <a
                href="https://wa.me/919990205353"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-base shadow-lg transition-transform hover:scale-105 flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 💎 Trust Badges & Introduction */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#053161] flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Written payout terms</h3>
                <p className="text-sm text-gray-500">Agreed in writing before your first case</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#053161] flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Quotes within 48 hours</h3>
                <p className="text-sm text-gray-500">Fast treatment plans and itemised quotes</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#053161] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">You stay the first contact</h3>
                <p className="text-sm text-gray-500">We work through you at every single stage</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "Ekam means &quot;one&quot;: one team and one point of contact for every patient and every partner."
            </p>
          </div>
        </div>
      </section>

      {/* 👥 Who Can Partner With Us */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#053161] mb-4">Who can partner with us</h2>
            <p className="text-gray-600">Each partner type has its own process, so you only deal with what matters to you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Referral agents */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#053161] flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#053161] mb-3">Referral agents and facilitators</h3>
              <p className="text-gray-600 mb-4">You work with patients in your country. Send us their reports and we return a treatment plan, hospital options and an itemised quote.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> A fixed fee per completed case, agreed in writing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Co-branded quotes and brochures</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Case updates on WhatsApp</li>
              </ul>
            </div>

            {/* Community health ambassadors */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#053161] flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#053161] mb-3">Community health ambassadors</h3>
              <p className="text-gray-600 mb-4">You are the trusted person in a village, church, mosque, temple or diaspora group. Families come to you first.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Simple onboarding and training</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> We explain reports and costs, so you can guide families with confidence</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> A fixed, transparent support amount per patient</li>
              </ul>
            </div>

            {/* Insurers, medical aid */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#053161] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#053161] mb-3">Insurers, medical aid schemes, employers and NGOs</h3>
              <p className="text-gray-600 mb-4">Offer members treatment in India with costs you can predict and check.</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Cost estimates before treatment, ready for your pre-authorisation process</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Case updates for your case managers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Discharge summaries and itemised invoices in English for every case</li>
              </ul>
            </div>

            {/* Hospitals and doctors */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#053161] flex items-center justify-center mb-6">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#053161] mb-3">Hospitals and doctors</h3>
                <p className="text-gray-600 mb-4">Are you a hospital or specialist interested in treating international patients through Ekam? Visit our page for hospitals and doctors.</p>
              </div>
              <div className="mt-6">
                <Link
                  href="/top-hospitals"
                  className="inline-flex items-center gap-2 text-[#053161] font-bold hover:underline"
                >
                  <span>Visit top hospitals page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏥 Our Partner Hospitals */}
      <section className="py-16 bg-blue-50/50 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12 text-center">
          <h2 className="text-2xl font-bold text-[#053161] mb-4">Our partner hospitals</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We match each patient to the right hospital and specialist from our network of 10+ accredited hospitals in India.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <span className="px-6 py-3 bg-white rounded-xl shadow-sm font-bold text-[#053161] border border-gray-200">Max Healthcare</span>
            <span className="px-6 py-3 bg-white rounded-xl shadow-sm font-bold text-[#053161] border border-gray-200">Apollo Hospitals</span>
            <span className="px-6 py-3 bg-white rounded-xl shadow-sm font-bold text-[#053161] border border-gray-200">Fortis Healthcare</span>
            <span className="px-6 py-3 bg-white rounded-xl shadow-sm font-bold text-[#053161] border border-gray-200">Yatharth Hospitals</span>
          </div>
        </div>
      </section>

      {/* 🩺 Treatments Families Ask About */}
      <section className="py-20">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#053161] mb-4">Treatments families ask us about most</h2>
            <p className="text-gray-600">You can send us any case. These are the ones we are asked about every day:</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            <div className="bg-gray-50 p-5 rounded-2xl text-center font-semibold text-gray-800 border border-gray-100">Heart surgery & valve surgery</div>
            <div className="bg-gray-50 p-5 rounded-2xl text-center font-semibold text-gray-800 border border-gray-100">Kidney transplant</div>
            <div className="bg-gray-50 p-5 rounded-2xl text-center font-semibold text-gray-800 border border-gray-100">Knee replacement</div>
            <div className="bg-gray-50 p-5 rounded-2xl text-center font-semibold text-gray-800 border border-gray-100">Hip replacement</div>
            <div className="bg-gray-50 p-5 rounded-2xl text-center font-semibold text-gray-800 border border-gray-100">Spine surgery</div>
            <div className="bg-gray-50 p-5 rounded-2xl text-center font-semibold text-gray-800 border border-gray-100">IVF Treatment</div>
            <div className="bg-gray-50 p-5 rounded-2xl text-center font-semibold text-gray-800 border border-gray-100" colSpan="2">Cancer treatment</div>
          </div>
          <div className="text-center">
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#053161] text-white font-semibold hover:bg-blue-900 transition"
            >
              <span>See all treatments</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ⭐ Our Commitments to Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#053161] mb-4">Our commitments to partners</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#053161] mb-2">Payout terms in writing</h3>
              <p className="text-sm text-gray-600">You see your fee and when it is paid before you send your first case.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#053161] mb-2">A quote within 48 hours</h3>
              <p className="text-sm text-gray-600">Send the reports and receive a treatment plan, hospital options and itemised costs.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#053161] mb-2">Clear billing</h3>
              <p className="text-sm text-gray-600">Every estimate shows what is included, so families know the cost before they travel.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#053161] mb-2">You stay the first contact</h3>
              <p className="text-sm text-gray-600">We work through you and keep you informed at every stage.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#053161] mb-2">One named contact person</h3>
              <p className="text-sm text-gray-600">One person for questions and escalations, reachable on WhatsApp.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#053161] mb-2">Visa to airport pickup</h3>
              <p className="text-sm text-gray-600">Medical visa invitation letters, accommodation, airport transfers, hospital coordination & interpreter.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#053161] mb-2">Accredited hospitals</h3>
              <p className="text-sm text-gray-600">We work only with NABH or JCI accredited hospitals, matched to each case.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#053161] mb-2">Patient privacy</h3>
              <p className="text-sm text-gray-600">Medical reports are shared only with hospitals quoting on the case, with patient consent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 Referring with Ekam, Step by Step */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#053161] mb-4">Referring with Ekam, step by step</h2>
          </div>
          <div className="overflow-x-auto shadow-sm rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#053161] text-white">
                  <th className="p-4 font-bold">The task</th>
                  <th className="p-4 font-bold">On your own</th>
                  <th className="p-4 font-bold bg-blue-900">With Ekam</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Reading reports and choosing a hospital</td>
                  <td className="p-4 text-gray-600">Hours of research</td>
                  <td className="p-4 text-blue-900 font-medium bg-blue-50/50">Matched by our team to the right specialist</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Getting a cost estimate</td>
                  <td className="p-4 text-gray-600">Emails and waiting</td>
                  <td className="p-4 text-blue-900 font-medium bg-blue-50/50">Itemised quote within 48 hours</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Medical visa and travel</td>
                  <td className="p-4 text-gray-600">Forms and uncertainty</td>
                  <td className="p-4 text-blue-900 font-medium bg-blue-50/50">Visa invitation letter and travel planning</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Stay and airport pickup</td>
                  <td className="p-4 text-gray-600">Arranged by the family</td>
                  <td className="p-4 text-blue-900 font-medium bg-blue-50/50">Arranged by our team in India</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-gray-900">Keeping everyone updated</td>
                  <td className="p-4 text-gray-600">Constant calls</td>
                  <td className="p-4 text-blue-900 font-medium bg-blue-50/50">Regular updates on WhatsApp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 📈 Grow With Us */}
      <section className="py-20 bg-blue-50/50 border-y border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#053161] mb-4">Grow with us</h2>
            <p className="text-gray-600">The more families you guide, the more support you get from us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Level 1</div>
              <h3 className="text-2xl font-bold text-[#053161] mb-4">Member</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Partner agreement and onboarding</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Cost sheets and process guides</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> WhatsApp support</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border-2 border-[#053161] shadow-md relative">
              <div className="absolute -top-3 right-6 bg-[#053161] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Popular</div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Level 2</div>
              <h3 className="text-2xl font-bold text-[#053161] mb-4">Trusted partner</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Priority quotes</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Co-branded materials</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Early access to new programmes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Level 3</div>
              <h3 className="text-2xl font-bold text-[#053161] mb-4">Senior partner</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> A named account manager</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> Invitations to regional events</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-600" /> A say in how we serve your country</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 🧭 5 Steps */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#053161] mb-4">From first message to first payout in 5 steps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#053161] text-white flex items-center justify-center font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-[#053161] mb-2">Apply</h3>
              <p className="text-xs text-gray-600">Fill in the short form below or message us on WhatsApp.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#053161] text-white flex items-center justify-center font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-[#053161] mb-2">Get verified</h3>
              <p className="text-xs text-gray-600">We call you, check your background and sign a simple agreement.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#053161] text-white flex items-center justify-center font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-[#053161] mb-2">Send a case</h3>
              <p className="text-xs text-gray-600">Share patient reports with consent. We reply with a plan and quote.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#053161] text-white flex items-center justify-center font-bold mx-auto mb-4">4</div>
              <h3 className="font-bold text-[#053161] mb-2">We manage</h3>
              <p className="text-xs text-gray-600">Visa, travel, hospital and stay, with updates at each stage.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <div className="w-10 h-10 rounded-full bg-[#053161] text-white flex items-center justify-center font-bold mx-auto mb-4">5</div>
              <h3 className="font-bold text-[#053161] mb-2">Get paid</h3>
              <p className="text-xs text-gray-600">Your fee is paid on the schedule in your agreement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📹 Founder Note & YouTube Video */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">A note from our founder</span>
              <h2 className="text-3xl font-bold text-[#053161] mt-2 mb-6">Udai Singh, Founder, Ekam Health Services</h2>
              <blockquote className="text-lg text-gray-700 italic border-l-4 border-[#053161] pl-4 mb-6 leading-relaxed">
                &quot;When we started Ekam, we wanted every patient to feel they had one trusted team beside them. Our partners are the heart of that promise, and we want to grow with you.&quot;
              </blockquote>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-video bg-black">
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

      {/* ❓ Frequently Asked Questions */}
      <section className="py-20">
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#053161] mb-4">Frequently asked questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#053161] mb-2">How and when am I paid?</h3>
              <p className="text-gray-600 text-sm">You receive a fixed fee for each completed treatment, paid within 60 Days of the patient&apos;s discharge. The amount and schedule are written in your partner agreement before you send your first case.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#053161] mb-2">Does the patient pay more because they came through me?</h3>
              <p className="text-gray-600 text-sm">No. The patient pays the same package price as they would if they came to us directly.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#053161] mb-2">Can I work from outside India?</h3>
              <p className="text-gray-600 text-sm">Yes. Most of our partners refer patients from their own country. Everything after the referral is handled by our team in India.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#053161] mb-2">Do I need a medical background?</h3>
              <p className="text-gray-600 text-sm">No. Honesty, trust in your community and putting patients first matter most. Medical or social-sector experience helps.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#053161] mb-2">Which countries can partners join from?</h3>
              <p className="text-gray-600 text-sm">Any country. We especially welcome partners in Zimbabwe, Botswana, Fiji, Mauritius and across Africa and the Pacific.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#053161] mb-2">How fast will I hear back after applying?</h3>
              <p className="text-gray-600 text-sm">Within 2 business days. For anything urgent, message us on WhatsApp.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#053161] mb-2">Can my organisation join with several team members?</h3>
              <p className="text-gray-600 text-sm">Yes. Tell us about your team in the application and we will set everyone up together.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-lg text-[#053161] mb-2">Who talks to the patient?</h3>
              <p className="text-gray-600 text-sm">You stay the first contact. Our coordinator joins whenever you want help with plans, costs or travel.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📝 Apply to Become a Partner Form Section */}
      <section id="apply-form" className="py-20 bg-gradient-to-br from-blue-950 via-[#073b75] to-blue-900 text-white relative">
        <div className="max-w-[800px] mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apply to become a partner</h2>
            <p className="text-gray-200">Fill out the short form below and we will get back to you within 2 business days.</p>
          </div>

          <form className="bg-white text-gray-800 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zimbabwe, Fiji, Kenya..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+1234567890"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Partner type *</label>
              <select
                required
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none"
              >
                <option value="">Select partner type</option>
                <option value="agent">Agent or facilitator</option>
                <option value="ambassador">Community ambassador</option>
                <option value="insurer">Insurer, medical aid, employer or NGO</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organisation (optional)</label>
                <input
                  type="text"
                  placeholder="Your company or group name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message (optional)</label>
                <input
                  type="text"
                  placeholder="Tell us a bit about your community or work"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#053161] focus:outline-none"
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
              className="w-full py-4 rounded-xl bg-[#0d6efd] hover:bg-blue-700 text-white font-bold text-base shadow-lg transition"
            >
              Submit application
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}

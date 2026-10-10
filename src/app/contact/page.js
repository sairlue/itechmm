import { Suspense } from "react";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Contact Us | iTech MM Solutions",
  description:
    "Get in touch with iTech MM Solutions (Intas MN Technology). Submit a project inquiry, request a technical consultation, or discuss custom software development.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Get in Touch
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-sky-400">Our Technical Team</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base sm:text-lg">
            Whether you have a specific software project or need architectural advice, we are ready to assist.
          </p>
        </div>
      </section>

      {/* Main Content: Info Cards & Contact Form */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-100/70 px-3 py-1 rounded-md">
                  Direct Inquiries
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                  Let&apos;s Discuss Your Project
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Fill out the form and our technical lead will review your specifications and contact you within 24 hours.
                </p>
              </div>

              {/* Contact detail cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Email Address</h4>
                    <p className="text-xs text-slate-500 mt-0.5">For business inquiries and RFP documents</p>
                    <a
                      href="mailto:contact@itechmm.com"
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700 mt-1 inline-block"
                    >
                      contact@itechmm.com
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Phone & Telegram</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Direct phone and mobile support</p>
                    <a
                      href="tel:+959123456789"
                      className="text-sm font-semibold text-sky-600 hover:text-sky-700 mt-1 inline-block"
                    >
                      +95 9 123 456 789
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Office Location</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Yangon, Myanmar</p>
                    <span className="text-xs text-slate-700 font-medium block mt-1">
                      In-person consultations available by prior appointment.
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Working Hours</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Monday - Saturday: 9:00 AM - 6:00 PM (MMT)</p>
                    <span className="text-xs text-emerald-600 font-medium block mt-1">
                      Support engineers on-call 24/7 for critical enterprise SLAs.
                    </span>
                  </div>
                </div>
              </div>

              {/* Security & Confidentiality assurance */}
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-800 block">Confidentiality Guarantee:</strong>
                  All project briefs, client data, and specifications are treated under strict non-disclosure.
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-10 shadow-lg relative">
                <Suspense
                  fallback={
                    <div className="py-20 text-center text-slate-400">
                      Loading contact interface...
                    </div>
                  }
                >
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

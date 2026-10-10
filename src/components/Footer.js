"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, Phone, MapPin, Clock, ArrowRight, Globe, Share2, MessageSquare, Terminal } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;
  const pathname = usePathname();

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/80 border border-sky-800/50 px-3 py-1 rounded-full mb-2">
              Ready to innovate?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let&apos;s build your next digital solution together.
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              From enterprise software to modern web & mobile applications, iTech MM Solutions turns your vision into reality.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-slate-800/80 hover:bg-slate-700 text-white font-medium px-5 py-3 rounded-xl border border-slate-700 transition-colors"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/95 rounded-xl p-2.5 inline-block shadow-sm">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/logo.png"
                  alt="iTech MM Solutions Logo"
                  fill
                  sizes="176px"
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              <strong className="text-white">iTech MM Solutions</strong>  delivers high-impact digital engineering, custom software development, cloud infrastructure, and AI automation for businesses across Myanmar and beyond.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors cursor-pointer" title="Global Network">
                <Globe className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors cursor-pointer" title="Direct Channel">
                <MessageSquare className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors cursor-pointer" title="Technology Hub">
                <Terminal className="w-4 h-4" />
              </span>
              <span className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors cursor-pointer" title="Connect">
                <Share2 className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#web" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services#software" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Custom Software & APIs
                </Link>
              </li>
              <li>
                <Link href="/services#cloud" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Cloud & Server Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-slate-400 hover:text-sky-400 transition-colors">
                  AI & Process Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Yangon, Myanmar (Main Office)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:contact@itechmm.com" className="hover:text-white transition-colors">
                  contact@itechmm.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="tel:+959123456789" className="hover:text-white transition-colors">
                  +95 9 123 456 789
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & notes */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} iTech MM Solutions . All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Overview</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

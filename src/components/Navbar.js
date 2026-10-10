"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top micro-bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>contact@itechmm.com</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-sky-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>+95 9 123 456 789</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Transforming ideas into digital solutions</span>
            <span className="h-3 w-px bg-slate-700"></span>
            <span className="inline-flex items-center gap-1 text-sky-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for new projects
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 border-b border-slate-200/80 py-3"
            : "bg-white border-b border-slate-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative h-11 w-44 sm:h-12 sm:w-48 transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/logo.png"
                  alt="iTech MM Solutions"
                  fill
                  sizes="(max-width: 768px) 176px, 192px"
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-sky-600 bg-sky-50"
                        : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm shadow-sky-600/20 hover:shadow-md hover:shadow-sky-600/30 transition-all duration-200 active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:text-sky-600 hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 shadow-xl transition-all">
            <div className="flex flex-col space-y-1.5">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium text-base transition-all ${
                      isActive
                        ? "bg-sky-50 text-sky-600 font-semibold border-l-4 border-sky-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-sky-600"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-sky-600"></span>}
                  </Link>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-sky-600/20 text-center"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-slate-500 pt-2">
                Need urgent support? Email us at{" "}
                <a href="mailto:contact@itechmm.com" className="text-sky-600 font-medium hover:underline">
                  contact@itechmm.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

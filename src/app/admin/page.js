"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  Mail,
  Database,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function AdminDashboardOverview() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.authenticated) {
          setUser(data.user);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-8">
      {/* Top Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Dashboard Overview
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Welcome back, <strong className="text-sky-400">{user?.fullName || "Administrator"}</strong>.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-950/80 border border-amber-800 text-amber-400">
            <Database className="w-3.5 h-3.5" />
            <span>MySQL: Standby (Schema Ready)</span>
          </span>
        </div>
      </div>

      {/* Database Setup Notice */}
      <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-800/60 text-slate-200 text-xs sm:text-sm space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold">
          <AlertTriangle className="w-4 h-4 shrink-0" />
          <span>Phase 2 Database Notice (MySQL Standby)</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          The application is currently running with the local in-memory fallback session. To connect your live MySQL instance, copy the environment variables from <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-300">.env.example</code> into a <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-300">.env.local</code> file and run <code className="bg-slate-900 px-1.5 py-0.5 rounded text-amber-300">database/schema.sql</code> on your MySQL server.
        </p>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Services</span>
            <Briefcase className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">6</div>
          <p className="text-xs text-slate-500 mt-1">6 Active / Published</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Inquiries</span>
            <Mail className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">Active</div>
          <p className="text-xs text-slate-500 mt-1">Listening on /api/contact</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Auth Status</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-white capitalize">{user?.role || "superadmin"}</div>
          <p className="text-xs text-slate-500 mt-1">JWT Protected Session</p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Frontend App</span>
            <LayoutDashboard className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">4 Pages</div>
          <p className="text-xs text-slate-500 mt-1">Home, About, Services, Contact</p>
        </div>
      </div>

      {/* Quick Action Navigation Grid */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4">Management Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Company Profile</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Manage official name, tagline, mission, vision, phone numbers, and Yangon office address.
              </p>
            </div>
            <span className="text-xs font-semibold text-sky-400 flex items-center gap-1.5">
              <span>Configured in database/schema.sql</span>
              <CheckCircle2 className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Services Catalog</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Web Development, Mobile Apps, Custom ERP, Cloud DevOps, AI Automations, and Consulting.
              </p>
            </div>
            <Link
              href="/services"
              target="_blank"
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
            >
              <span>View live public cards</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-sky-500/50 transition-colors flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-950 text-sky-400 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Contact Inquiries</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6">
                Incoming inquiries from clients submitted through the Contact Us page and Next.js Route Handler.
              </p>
            </div>
            <Link
              href="/contact"
              target="_blank"
              className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
            >
              <span>Test contact form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

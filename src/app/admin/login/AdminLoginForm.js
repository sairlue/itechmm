"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, User, AlertCircle, ArrowRight, Loader2, ShieldCheck, Check } from "lucide-react";

export default function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTarget = searchParams.get("from") || "/admin";

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedDemo, setCopiedDemo] = useState(false);

  const fillDemo = () => {
    setIdentifier("admin");
    setPassword("AdminPassword123!");
    setCopiedDemo(true);
    setTimeout(() => setCopiedDemo(false), 2000);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!identifier || !password) {
      setError("Please provide your username or email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Login failed. Please check credentials.");
      }

      router.push(redirectTarget);
      router.refresh();
    } catch (err) {
      setError(err.message || "An error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 backdrop-blur-xl">
      {/* Brand Header */}
      <div className="text-center space-y-3 mb-8">
        <Link href="/" className="inline-block bg-white/95 rounded-xl p-2.5 shadow-sm hover:scale-105 transition-transform">
          <div className="relative h-9 w-40">
            <Image
              src="/images/logo.png"
              alt="iTech MM Solutions"
              fill
              sizes="160px"
              className="object-contain"
              priority
            />
          </div>
        </Link>
        <h2 className="text-xl font-bold text-white tracking-tight">Admin Portal</h2>
        <p className="text-xs text-slate-400">
          Enter credentials to manage company profile, services, and inquiries.
        </p>
      </div>

      {/* Error alert */}
      {error && (
        <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Login Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
            Username or Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="admin or admin@itechmm.com"
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-4 h-4" />
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full pl-10 pr-3.5 py-2.5 rounded-xl text-sm bg-slate-800/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all duration-200 disabled:opacity-60 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying Credentials...</span>
            </>
          ) : (
            <>
              <span>Sign In to Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Quick Demo helper for Phase 1 / test access */}
      <div className="mt-6 pt-5 border-t border-slate-800 text-center">
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-3 text-xs text-slate-400 text-left space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              Development Demo Login:
            </span>
            <button
              type="button"
              onClick={fillDemo}
              className="text-sky-400 hover:text-sky-300 font-semibold text-[11px] flex items-center gap-1 cursor-pointer"
            >
              {copiedDemo ? <Check className="w-3 h-3 text-emerald-400" /> : null}
              {copiedDemo ? "Filled!" : "Auto-fill"}
            </button>
          </div>
          <div className="font-mono text-[11px] text-slate-300 bg-slate-900/80 p-2 rounded border border-slate-800 flex justify-between">
            <span>User: <strong>admin</strong></span>
            <span>Pass: <strong>AdminPassword123!</strong></span>
          </div>
        </div>

        <div className="mt-4">
          <Link href="/" className="text-xs text-slate-400 hover:text-sky-400 transition-colors">
            ← Back to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}

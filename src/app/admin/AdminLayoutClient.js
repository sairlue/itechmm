"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Briefcase,
  Mail,
  User,
  LogOut,
  Menu,
  X,
  ExternalLink,
  Shield,
  Database,
  ChevronRight,
} from "lucide-react";

const SIDEBAR_ITEMS = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Company Info", href: "/admin/company", icon: Building2 },
  { name: "Services CRUD", href: "/admin/services", icon: Briefcase },
  { name: "Contact Inquiries", href: "/admin/inquiries", icon: Mail },
  { name: "Admin Profile", href: "/admin/profile", icon: User },
];

export default function AdminLayoutClient({ user, children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // If on login route, just render children without sidebar
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    if (!confirm("Are you sure you want to log out?")) return;
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch (e) {
      console.error(e);
    } finally {
      setLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row">
      {/* Mobile Header Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-slate-950 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="relative h-8 w-32 bg-white rounded p-1">
            <Image
              src="/images/logo.png"
              alt="iTech MM Logo"
              fill
              sizes="128px"
              className="object-contain"
            />
          </div>
          <span className="text-xs font-mono bg-sky-950 text-sky-400 px-2 py-0.5 rounded border border-sky-800">
            Admin
          </span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-slate-950 border-r border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div>
          {/* Brand Logo in Sidebar */}
          <div className="p-5 border-b border-slate-800 hidden md:flex items-center justify-between">
            <div className="bg-white rounded-lg p-2">
              <div className="relative h-8 w-36">
                <Image
                  src="/images/logo.png"
                  alt="iTech MM Logo"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Current User Pill */}
          <div className="p-4 mx-3 my-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 font-bold text-sm">
              {user?.fullName?.charAt(0) || "A"}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">{user?.fullName || "Administrator"}</p>
              <p className="text-[11px] text-sky-400 font-mono truncate">{user?.role || "superadmin"}</p>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="px-3 space-y-1">
            {SIDEBAR_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              const IconComp = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                      : "text-slate-400 hover:text-white hover:bg-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className="w-4 h-4" />
                    <span>{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 opacity-80" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-slate-800 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-sky-400 hover:bg-slate-900 transition-colors"
          >
            <div className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              <span>View Public Site</span>
            </div>
          </Link>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-rose-400 hover:bg-rose-950/30 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>{loggingOut ? "Signing out..." : "Logout"}</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content View */}
      <main className="flex-1 min-w-0 bg-slate-900 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  LayoutDashboard, FileText, Image, Briefcase, Users,
  MessageSquare, Truck, LogOut, ChevronRight, Menu, X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { adminLogout } from "@/lib/adminApi";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Blogs", href: "/admin/blogs", icon: FileText },
  { label: "Gallery", href: "/admin/gallery", icon: Image },
  { label: "Careers", href: "/admin/careers", icon: Briefcase },
  { label: "Applications", href: "/admin/applications", icon: Users },
  { label: "Contact Inquiries", href: "/admin/contacts", icon: MessageSquare },
  { label: "Pickup Requests", href: "/admin/pickups", icon: Truck },
];

export default function AdminShell({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    setIsLoggedIn(!!token);
  }, [pathname]);

  // Not logged in - show page without sidebar (login form renders inline)
  if (!isLoggedIn) {
    return <>{children}</>;
  }

  const isActive = (href) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-secondary-950 text-white transform transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <Link
            href="/admin"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 px-5 py-5 border-b border-white/10 transition-colors hover:bg-white/5"
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <img src="/images/advait-mark.png" alt="" className="w-7 h-7 object-contain" />
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-white leading-tight">Advait Green</p>
              <p className="text-[10px] text-primary-400 font-medium">Admin Panel</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {sidebarLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? "bg-primary-500/20 text-primary-300 border border-primary-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <link.icon size={18} />
                <span className="flex-1">{link.label}</span>
                {isActive(link.href) && <ChevronRight size={14} className="text-primary-400" />}
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className="px-3 py-4 border-t border-white/10">
            <button
              onClick={adminLogout}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all w-full cursor-pointer"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-600"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Brand mark — the sidebar logo is off-screen on mobile */}
          <Link href="/admin" className="lg:hidden flex items-center gap-2">
            <img src="/images/advait-mark.png" alt="Advait Green" className="w-7 h-7 object-contain" />
            <span className="font-heading font-bold text-sm" style={{ color: "var(--color-primary-950)" }}>
              Advait Green
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500">
            <span className="hidden sm:inline">Admin</span>
            <ChevronRight size={14} />
            <span className="font-medium text-slate-800 capitalize">
              {pathname === "/admin" ? "Dashboard" : pathname.split("/admin/")[1]?.split("/")[0] || "Dashboard"}
            </span>
          </div>
          <div className="flex items-center gap-2" />
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

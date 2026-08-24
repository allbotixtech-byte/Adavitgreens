"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, Image, Briefcase, Users, MessageSquare, Truck, Bell, ArrowRight, Recycle, Mail, Lock } from "lucide-react";
import { adminLogin, getDashboardStats } from "@/lib/adminApi";

function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await adminLogin(email, password);
      onSuccess();
    } catch (err) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-950 via-[#071b12] to-secondary-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-button">
            <Recycle size={28} className="text-white" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-white mb-1">Advait Green Admin</h1>
          <p className="text-slate-400 text-sm">Sign in to manage your website</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 space-y-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@advaitgreen.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3.5 rounded-xl font-semibold hover:from-primary-400 hover:to-primary-500 transition-all shadow-button disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? "Signing in..." : "Sign In"}
            <ArrowRight size={16} />
          </button>
        </form>

        <p className="text-center text-xs text-slate-600 mt-6">
          ADVAIT GREEN RECYCLING PRIVATE LIMITED
        </p>
      </div>
    </div>
  );
}

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardStats()
      .then(setStats)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="flex items-center justify-center h-64 text-slate-400">Loading dashboard...</div>;

  const cards = [
    { label: "Blog Posts", value: stats?.blogs || 0, icon: FileText, href: "/admin/blogs", color: "bg-blue-500" },
    { label: "Gallery Images", value: stats?.gallery || 0, icon: Image, href: "/admin/gallery", color: "bg-purple-500" },
    { label: "Open Positions", value: stats?.careers || 0, icon: Briefcase, href: "/admin/careers", color: "bg-amber-500" },
    { label: "Applications", value: stats?.applications || 0, icon: Users, href: "/admin/applications", color: "bg-emerald-500" },
    { label: "Contact Inquiries", value: stats?.contacts || 0, icon: MessageSquare, href: "/admin/contacts", color: "bg-cyan-500", badge: stats?.unreadContacts },
    { label: "Pickup Requests", value: stats?.pickups || 0, icon: Truck, href: "/admin/pickups", color: "bg-orange-500", badge: stats?.unreadPickups },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-secondary-950">Dashboard</h1>
          <p className="text-sm text-slate-500">Welcome back to Advait Green Admin</p>
        </div>
        {stats?.totalUnread > 0 && (
          <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-xl text-sm font-medium border border-amber-200">
            <Bell size={16} />
            <span>{stats.totalUnread} unread</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-primary-300 hover:shadow-card transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-11 h-11 ${card.color} rounded-xl flex items-center justify-center text-white`}>
                <card.icon size={20} />
              </div>
              {card.badge > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{card.badge} new</span>
              )}
            </div>
            <p className="font-heading text-3xl font-bold text-secondary-950 mb-1">{card.value}</p>
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-500">{card.label}</p>
              <ArrowRight size={14} className="text-slate-300 group-hover:text-primary-500 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    setIsLoggedIn(!!token);
  }, []);

  if (isLoggedIn === null) return null;

  if (!isLoggedIn) {
    return <LoginForm onSuccess={() => setIsLoggedIn(true)} />;
  }

  return <Dashboard />;
}

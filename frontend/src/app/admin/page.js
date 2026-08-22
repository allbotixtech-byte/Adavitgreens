"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, Image, Briefcase, Users, MessageSquare, Truck, Bell, ArrowRight } from "lucide-react";
import { getDashboardStats } from "@/lib/adminApi";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) { router.push("/admin/login"); return; }

    getDashboardStats()
      .then(setStats)
      .catch(() => router.push("/admin/login"))
      .finally(() => setLoading(false));
  }, [router]);

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

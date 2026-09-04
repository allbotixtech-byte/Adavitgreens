"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileText, Image, Briefcase, Users, MessageSquare, Truck, Bell, ArrowRight, ArrowLeft, Mail, Lock, Eye, EyeOff, AlertCircle, Loader2, ShieldCheck, Plus, RefreshCw, CalendarDays, Inbox, ExternalLink } from "lucide-react";
import { adminLogin, getDashboardStats } from "@/lib/adminApi";

/**
 * Inline styles rather than Tailwind classes for the inputs: globals.css sets
 * unlayered `input[type=...]` rules, which outrank @layer utilities and would
 * otherwise override background, colour, radius AND padding — the last of
 * which collapses the left inset that makes room for the field icons.
 */
const inputStyle = {
  width: "100%",
  fontSize: "0.9375rem",
  color: "#ffffff",
  backgroundColor: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "12px",
  padding: "0.85rem 2.75rem 0.85rem 2.9rem",
  outline: "none",
  transition: "border-color 160ms ease, box-shadow 160ms ease, background-color 160ms ease",
};

function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const focusOn = (e) => {
    e.target.style.borderColor = "var(--color-accent-500)";
    e.target.style.boxShadow = "0 0 0 3px rgba(57,217,0,0.15)";
    e.target.style.backgroundColor = "rgba(255,255,255,0.09)";
  };
  const focusOff = (e) => {
    e.target.style.borderColor = "rgba(255,255,255,0.12)";
    e.target.style.boxShadow = "none";
    e.target.style.backgroundColor = "rgba(255,255,255,0.06)";
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden"
      style={{ backgroundColor: "var(--color-primary-950)" }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Brand glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-14%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "760px",
          height: "760px",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle, rgba(57,217,0,0.13) 0%, rgba(8,127,165,0.09) 42%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      <div className="relative w-full max-w-[420px]">
        {/* Back to site */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs mb-6 transition-colors"
          style={{ color: "var(--color-secondary-400)" }}
        >
          <ArrowLeft size={13} /> Back to website
        </Link>

        <div className="text-center mb-7">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
            style={{
              backgroundColor: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <img src="/images/advait-mark.webp" alt="" className="w-10 h-10 object-contain" />
          </div>
          <h1 className="font-heading text-[26px] font-bold text-white mb-1.5 tracking-tight">
            Admin Console
          </h1>
          <p className="text-sm" style={{ color: "var(--color-secondary-400)" }}>
            Sign in to manage the Advait Green website
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl p-7 sm:p-8 space-y-5"
          style={{
            backgroundColor: "rgba(255,255,255,0.045)",
            border: "1px solid rgba(255,255,255,0.10)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.35)",
          }}
        >
          {error && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm"
              style={{
                backgroundColor: "rgba(239,68,68,0.10)",
                border: "1px solid rgba(239,68,68,0.30)",
                color: "#fca5a5",
              }}
            >
              <AlertCircle size={16} className="shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <div>
            <label
              htmlFor="admin-email"
              className="block text-[11px] font-semibold uppercase tracking-[0.09em] mb-2"
              style={{ color: "var(--color-secondary-300)" }}
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "var(--color-secondary-500)" }}
              />
              <input
                id="admin-email"
                type="email"
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={focusOn}
                onBlur={focusOff}
                required
                placeholder="admin@advaitgreen.com"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="admin-password"
              className="block text-[11px] font-semibold uppercase tracking-[0.09em] mb-2"
              style={{ color: "var(--color-secondary-300)" }}
            >
              Password
            </label>
            <div className="relative">
              <Lock
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: "var(--color-secondary-500)" }}
              />
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={focusOn}
                onBlur={focusOff}
                required
                placeholder="Enter your password"
                style={inputStyle}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md transition-colors cursor-pointer"
                style={{ color: "var(--color-secondary-500)" }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:hover:translate-y-0"
            style={{
              backgroundColor: loading ? "var(--color-accent-700)" : "var(--color-accent-600)",
              color: "#ffffff",
              opacity: loading ? 0.75 : 1,
              boxShadow: "0 8px 22px rgba(22,168,0,0.25)",
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Signing in…
              </>
            ) : (
              <>
                Sign In <ArrowRight size={16} />
              </>
            )}
          </button>

          <div
            className="flex items-center justify-center gap-1.5 pt-1 text-[11px]"
            style={{ color: "var(--color-secondary-500)" }}
          >
            <ShieldCheck size={12} />
            Authorised access only. Activity is logged.
          </div>
        </form>

        <p
          className="text-center text-[10px] font-mono uppercase tracking-[0.09em] mt-6"
          style={{ color: "var(--color-secondary-700)" }}
        >
          Advait Green Recycling Private Limited
        </p>
      </div>
    </div>
  );
}

/** Card accents drawn from the brand palette rather than arbitrary Tailwind hues. */
const STAT_CARDS = [
  { key: "blogs", label: "Blog Posts", icon: FileText, href: "/admin/blogs", accent: "var(--color-primary-700)", tint: "var(--color-primary-50)" },
  { key: "gallery", label: "Gallery Images", icon: Image, href: "/admin/gallery", accent: "var(--color-primary-500)", tint: "var(--color-primary-50)" },
  { key: "careers", label: "Open Positions", icon: Briefcase, href: "/admin/careers", accent: "var(--color-signal-600)", tint: "var(--color-signal-50)" },
  { key: "applications", label: "Applications", icon: Users, href: "/admin/applications", accent: "var(--color-accent-600)", tint: "var(--color-accent-50)" },
  { key: "contacts", label: "Contact Inquiries", icon: MessageSquare, href: "/admin/contacts", accent: "var(--color-primary-600)", tint: "var(--color-primary-50)", badgeKey: "unreadContacts" },
  { key: "pickups", label: "Pickup Requests", icon: Truck, href: "/admin/pickups", accent: "var(--color-accent-700)", tint: "var(--color-accent-50)", badgeKey: "unreadPickups" },
];

const QUICK_ACTIONS = [
  { label: "New Blog Post", href: "/admin/blogs/new", icon: FileText },
  { label: "Post a Job", href: "/admin/careers/new", icon: Briefcase },
  { label: "Manage Gallery", href: "/admin/gallery", icon: Image },
];

function StatSkeleton() {
  return (
    <div
      className="rounded-2xl p-6 border animate-pulse"
      style={{ borderColor: "var(--color-secondary-200)", backgroundColor: "#ffffff" }}
    >
      <div className="w-11 h-11 rounded-xl mb-4" style={{ backgroundColor: "var(--color-secondary-100)" }} />
      <div className="h-8 w-16 rounded mb-2" style={{ backgroundColor: "var(--color-secondary-100)" }} />
      <div className="h-3.5 w-28 rounded" style={{ backgroundColor: "var(--color-secondary-100)" }} />
    </div>
  );
}

function Dashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const load = () => {
    setLoading(true);
    setError("");
    getDashboardStats()
      .then(setStats)
      // Previously swallowed: a failed request rendered as zeros, which reads
      // as "no data" rather than "could not load".
      .catch((err) => setError(err?.message || "Could not load dashboard data."))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
            Dashboard
          </h1>
          <p className="flex items-center gap-1.5 text-sm mt-1" style={{ color: "var(--color-secondary-500)" }}>
            <CalendarDays size={14} />
            {today}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          {stats?.totalUnread > 0 && (
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border"
              style={{
                backgroundColor: "var(--color-signal-50)",
                borderColor: "var(--color-signal-100)",
                color: "var(--color-signal-700)",
              }}
            >
              <Bell size={15} />
              <span>{stats.totalUnread} unread</span>
            </div>
          )}
          <button
            onClick={load}
            disabled={loading}
            aria-label="Refresh dashboard"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium border transition-colors cursor-pointer disabled:opacity-50"
            style={{ borderColor: "var(--color-secondary-200)", color: "var(--color-secondary-700)", backgroundColor: "#ffffff" }}
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
            <span className="hidden sm:inline">Refresh</span>
          </button>
          <Link
            href="/"
            target="_blank"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium border transition-colors"
            style={{ borderColor: "var(--color-secondary-200)", color: "var(--color-secondary-700)", backgroundColor: "#ffffff" }}
          >
            View Site <ExternalLink size={13} />
          </Link>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl px-4 py-3.5 text-sm border"
          style={{ backgroundColor: "#FEF2F2", borderColor: "#FECACA", color: "#B91C1C" }}
        >
          <AlertCircle size={17} className="shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold mb-0.5">Could not load dashboard</p>
            <p style={{ color: "#DC2626" }}>{error}</p>
          </div>
          <button
            onClick={load}
            className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer"
            style={{ borderColor: "#FECACA", color: "#B91C1C" }}
          >
            Retry
          </button>
        </div>
      )}

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <StatSkeleton key={i} />)
          : STAT_CARDS.map((card) => {
              const badge = card.badgeKey ? stats?.[card.badgeKey] : 0;
              return (
                <Link
                  key={card.key}
                  href={card.href}
                  className="group relative rounded-2xl p-6 border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  style={{ borderColor: "var(--color-secondary-200)", backgroundColor: "#ffffff" }}
                >
                  <span
                    className="absolute top-0 left-0 h-[3px] w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: card.accent }}
                    aria-hidden="true"
                  />
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: card.tint }}
                    >
                      <card.icon size={20} strokeWidth={1.8} style={{ color: card.accent }} />
                    </div>
                    {badge > 0 && (
                      <span
                        className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#DC2626", color: "#ffffff" }}
                      >
                        {badge} new
                      </span>
                    )}
                  </div>
                  <p
                    className="font-heading text-3xl font-bold mb-1 tabular-nums"
                    style={{ color: "var(--color-primary-950)" }}
                  >
                    {stats?.[card.key] ?? 0}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm" style={{ color: "var(--color-secondary-500)" }}>
                      {card.label}
                    </p>
                    <ArrowRight
                      size={15}
                      className="transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: "var(--color-secondary-300)" }}
                    />
                  </div>
                </Link>
              );
            })}
      </div>

      {/* Quick actions */}
      <div>
        <h2
          className="font-mono text-[11px] uppercase tracking-[0.09em] mb-3"
          style={{ color: "var(--color-secondary-500)" }}
        >
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {QUICK_ACTIONS.map((a) => (
            <Link
              key={a.label}
              href={a.href}
              className="group flex items-center gap-3 rounded-xl border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
              style={{ borderColor: "var(--color-secondary-200)", backgroundColor: "#ffffff" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--color-primary-50)" }}
              >
                <a.icon size={17} strokeWidth={1.8} style={{ color: "var(--color-primary-700)" }} />
              </div>
              <span className="text-sm font-semibold" style={{ color: "var(--color-primary-950)" }}>
                {a.label}
              </span>
              <Plus
                size={15}
                className="ml-auto transition-transform duration-300 group-hover:rotate-90"
                style={{ color: "var(--color-secondary-400)" }}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Empty state — loaded fine but nothing in the system yet */}
      {!loading && !error && stats && STAT_CARDS.every((c) => !stats[c.key]) && (
        <div
          className="flex flex-col items-center text-center rounded-2xl border border-dashed p-10"
          style={{ borderColor: "var(--color-secondary-300)", backgroundColor: "#ffffff" }}
        >
          <Inbox size={28} strokeWidth={1.5} style={{ color: "var(--color-secondary-400)" }} />
          <p className="font-heading text-base font-semibold mt-3" style={{ color: "var(--color-primary-950)" }}>
            Nothing here yet
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--color-secondary-500)" }}>
            Publish your first blog post or job opening to get started.
          </p>
        </div>
      )}
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

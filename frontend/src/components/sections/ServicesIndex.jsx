"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck, FileCheck, CheckCircle, Leaf } from "lucide-react";
import { services } from "@/data/services";

const trustBadges = [
  { label: "CPCB Registered Recycler", icon: ShieldCheck },
  { label: "GPCB Authorisation", icon: FileCheck },
  { label: "ISO 9001:2015", icon: CheckCircle },
  { label: "ISO 14001:2015", icon: Leaf },
  { label: "ISO 45001:2018", icon: ShieldCheck },
];

export default function ServicesIndex() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        <img src="/images/E-West-Managment-4.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span style={{ color: "var(--color-accent-400)" }}>Services</span>
            </nav>

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] text-white/70 mb-3 sm:mb-4"
            >
              What We Do
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] sm:leading-[1.06] tracking-tight mb-4 sm:mb-5"
            >
              Seven Services.{" "}
              <span style={{ color: "var(--color-accent-400)" }}>One Accountable Partner.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-[52ch] mb-6 sm:mb-8"
            >
              From e-waste and plastics to biomedical, solid waste and pollution control equipment - every stream handled under valid authorisation, with the documentation your audit file needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/schedule-pickup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
              >
                Schedule a Free Pickup <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Talk to Our Team
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white border-b border-secondary-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
          <p
            className="text-center font-mono text-[11px] uppercase tracking-[0.09em] mb-5"
            style={{ color: "var(--color-secondary-700)" }}
          >
            Authorised &amp; Certified
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <badge.icon size={16} strokeWidth={1.7} style={{ color: "var(--color-accent-600)" }} />
                <span className="text-xs font-medium" style={{ color: "var(--color-secondary-700)" }}>
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE LIST ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
              Our Services
            </p>
            <h2
              className="font-heading text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold tracking-tight"
              style={{ color: "var(--color-primary-950)" }}
            >
              Every Waste Stream You Are Accountable For
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: [0.2, 0, 0, 1] }}
              >
                <Link
                  href={svc.href}
                  className="group flex flex-col h-full bg-white rounded-xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{ borderColor: "var(--color-secondary-200)" }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(0,26,43,0.55) 0%, transparent 55%)" }}
                    />
                    <div
                      className="absolute top-4 left-4 w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "rgba(255,255,255,0.16)", backdropFilter: "blur(8px)" }}
                    >
                      <svc.icon size={22} strokeWidth={1.7} className="text-white" />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3
                      className="font-heading text-lg font-semibold tracking-tight leading-snug mb-3"
                      style={{ color: "var(--color-primary-950)" }}
                    >
                      {svc.title}
                    </h3>
                    <div className="w-8 h-[3px] rounded-full mb-4" style={{ backgroundColor: "var(--color-accent-400)" }} />
                    <p className="text-[13px] leading-relaxed mb-6" style={{ color: "var(--color-secondary-600)" }}>
                      {svc.summary}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: "var(--color-primary-700)" }}
                    >
                      Know More
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-primary-900 py-14 lg:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 max-w-[640px] mx-auto">
            Not Sure Which Service You Actually Need?
          </h2>
          <p className="text-secondary-300 text-sm sm:text-base max-w-[560px] mx-auto mb-8 leading-relaxed">
            Describe what you have and where it is. We will tell you which stream it falls under, what the law requires of you, and what we would charge to handle it.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Talk to Our Team <ArrowRight size={15} />
            </Link>
            <Link
              href="/schedule-pickup"
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/8 text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Schedule a Free Pickup
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import WhyAdvaitGreen from "@/components/sections/WhyAdvaitGreen";
import { getService } from "@/data/services";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";
import BenefitsMarquee from "@/components/sections/BenefitsMarquee";

/**
 * Shared layout for service detail pages.
 *
 * Mirrors the section rhythm of the bespoke e-waste and plastic-waste pages:
 * hero → overview → what we handle → process → benefits → stats → compliance → CTA.
 * Content comes from the `detail` object on a service in src/data/services.js.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

/**
 * Takes a `slug` rather than the service object itself: the catalogue holds
 * icon components, which cannot cross the server/client boundary as props.
 * Looking the service up here keeps each route file a server component that
 * can still export `metadata`.
 */
export default function ServiceDetailPage({ slug }) {
  const service = getService(slug);
  const d = service?.detail;

  // Optional rotating hero. Services that define `heroSlides` cross-fade
  // through them; the rest keep their single `heroImage`.
  const slides = d?.heroSlides ?? [];
  const hasSlides = slides.length > 0;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (slides.length < 2) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  if (!d) return null;

  const activeSlide = hasSlides ? slides[current] : null;

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        {hasSlides ? (
          <AnimatePresence mode="sync">
            <motion.img
              key={activeSlide.image}
              src={activeSlide.image}
              alt=""
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        ) : (
          <img src={d.heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <Link href="/services" className="text-white/60 hover:text-white transition-colors">Services</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span className="text-white/90">{service.title}</span>
            </nav>

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] text-accent-400 mb-3 sm:mb-4"
            >
              {d.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] sm:leading-[1.08] tracking-tight mb-4 sm:mb-5"
            >
              {d.heroTitle}{" "}
              <span style={{ color: "var(--color-accent-400)" }}>{d.heroHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[52ch] mb-6 sm:mb-8"
            >
              {d.heroDesc}
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

            {/* Slide indicators - only when the hero rotates */}
            {slides.length > 1 && (
              <div className="flex items-center gap-3 mt-10">
                <div className="flex gap-2">
                  {slides.map((s, i) => (
                    <button
                      key={s.image}
                      onClick={() => {
                        setCurrent(i);
                        clearInterval(timerRef.current);
                        timerRef.current = setInterval(() => {
                          setCurrent((prev) => (prev + 1) % slides.length);
                        }, 6000);
                      }}
                      aria-label={`Show slide ${i + 1}${s.caption ? `: ${s.caption}` : ""}`}
                      aria-current={i === current}
                      className={`h-[3px] rounded-full transition-all duration-500 ${
                        i === current ? "w-10 bg-accent-400" : "w-5 bg-white/25 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
                {activeSlide?.caption && (
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={activeSlide.caption}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.09em] text-white/55"
                    >
                      {activeSlide.caption}
                    </motion.span>
                  </AnimatePresence>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
                {d.overview.eyebrow}
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-5" style={{ color: "var(--color-primary-950)" }}>
                {d.overview.title}
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
                {d.overview.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img src={d.overview.image} alt={service.title} className="w-full h-full object-cover" />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(0,26,43,0.8), transparent)" }}
              >
                <p className="font-mono text-xs text-white/70 uppercase tracking-wider">{d.overview.badgeLabel}</p>
                <p className="text-sm text-white mt-1">{d.overview.badgeSub}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE HANDLE ── */}
      <HorizontalShowcase eyebrow={d.handlesEyebrow} title={d.handlesTitle} items={d.handles} />

      {/* ── PROCESS ── */}
      <ProcessTimeline subtitle={d.processSubtitle} title={d.processTitle} steps={d.process} />

      {/* ── BENEFITS ── */}
      <BenefitsMarquee
        eyebrow={d.benefitsEyebrow}
        title={d.benefitsTitle}
        items={d.benefits}
      />

      {/* ── WHY ADVAIT GREEN ── */}
      <WhyAdvaitGreen
        title={d.whyTitle}
        highlight={d.whyHighlight}
        desc={d.whyDesc}
        stats={d.stats}
      />

      {/* ── COMPLIANCE ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5"
                style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}
              >
                <ShieldCheck size={14} style={{ color: "var(--color-primary-700)" }} />
                <span className="font-mono text-xs uppercase tracking-[0.09em]" style={{ color: "var(--color-primary-700)" }}>
                  {d.compliance.badge}
                </span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--color-primary-950)" }}>
                {d.compliance.title}{" "}
                <span style={{ color: "var(--color-accent-600)" }}>{d.compliance.highlight}</span>
              </h2>

              {d.compliance.paragraphs.map((p, i) => (
                <p key={i} className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--color-secondary-600)" }}>
                  {p}
                </p>
              ))}

              <Link
                href={d.compliance.cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 mt-2"
                style={{ backgroundColor: "var(--color-primary-700)" }}
              >
                {d.compliance.cta.label} <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4"
            >
              {d.compliance.items.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4 rounded-xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ borderColor: "var(--color-secondary-200)", backgroundColor: "var(--color-secondary-50)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}
                  >
                    <item.icon size={20} strokeWidth={1.6} style={{ color: "var(--color-primary-700)" }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1" style={{ color: "var(--color-primary-950)" }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-500)" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            {d.ctaTitle}
          </h2>
          <p className="text-secondary-300 text-sm sm:text-base max-w-[560px] mx-auto mb-8 leading-relaxed">
            {d.ctaDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/schedule-pickup"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Schedule a Free Pickup <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/8 text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

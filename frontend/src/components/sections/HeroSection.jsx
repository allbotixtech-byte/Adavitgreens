"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function HeroSection({
  eyebrow,
  heading,
  description,
  primaryCTA,
  secondaryCTA,
  supportingLine,
  centered = true,
}) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "white",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Background radial ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] bg-accent-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[140px] pointer-events-none" />

      {/* Decorative subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div
        className={`container-custom relative z-10 pt-36 pb-24 md:pt-40 md:pb-28 w-full flex flex-col ${
          centered
            ? "items-center text-center mx-auto max-w-4xl"
            : "items-start text-left max-w-4xl"
        }`}
      >
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`mb-6 flex ${
              centered ? "justify-center w-full" : "justify-start"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-accent-300 text-xs font-semibold uppercase tracking-[0.16em] shadow-glow backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              <span dangerouslySetInnerHTML={{ __html: eyebrow }} />
            </div>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight drop-shadow-lg"
        >
          {heading}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-3xl mx-auto font-normal drop-shadow-sm"
          >
            {description}
          </motion.p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`flex flex-col sm:flex-row flex-wrap gap-4 w-full ${
              centered ? "justify-center items-center" : "items-start"
            }`}
          >
            {primaryCTA && (
              <Link href={primaryCTA.href} className="btn-accent">
                <span>{primaryCTA.label}</span>
                <ArrowRight size={18} />
              </Link>
            )}
            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="btn-outline-light">
                <span>{secondaryCTA.label}</span>
              </Link>
            )}
          </motion.div>
        )}

        {supportingLine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-12 flex items-center justify-center gap-2 text-xs md:text-sm text-white/70 font-medium tracking-wide"
          >
            <ShieldCheck size={16} className="text-accent-400" />
            <span>{supportingLine}</span>
          </motion.div>
        )}
      </div>

      {/* Bottom gradient fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAF7] to-transparent pointer-events-none" />
    </section>
  );
}
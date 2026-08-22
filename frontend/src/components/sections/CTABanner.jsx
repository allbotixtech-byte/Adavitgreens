"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Recycle } from "lucide-react";

export default function CTABanner({
  heading = "Ready to Recycle Responsibly?",
  description = "Schedule a pickup for your obsolete electronics, IT assets or recyclable materials. Join our mission towards zero-waste operations.",
  primaryCTA = { label: "Schedule a Pickup", href: "/schedule-pickup" },
  secondaryCTA = { label: "Talk to Our Team", href: "/contact" },
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-800 via-primary-900 to-secondary-950 text-white border-t border-primary-700/40">
      {/* Ambient lighting */}
      <div className="absolute top-0 right-10 w-80 h-80 bg-primary-400/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-400/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container-custom text-center max-w-3xl mx-auto flex flex-col items-center justify-center"
        >
          <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 shadow-glow">
            <Recycle size={28} className="text-primary-300" />
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-white mb-4 leading-tight tracking-tight text-center">
            {heading}
          </h2>

          <p className="text-primary-100/90 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto font-normal text-center">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center w-full">
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center gap-2.5 bg-white text-primary-900 px-8 py-4 rounded-xl text-base font-bold hover:bg-primary-50 transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              <span>{primaryCTA.label}</span>
              <ArrowRight size={18} />
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/20 transition-all duration-200"
              >
                <span>{secondaryCTA.label}</span>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

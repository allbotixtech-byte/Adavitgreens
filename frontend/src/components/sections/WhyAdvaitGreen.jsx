"use client";

import { motion } from "framer-motion";

/**
 * "Why Advait Green for …" — the About page's Capability layout: a sticky
 * display heading on the left, a hairline-divided list on the right.
 *
 * The Infrastructure section it mirrors is an accordion, but these entries are
 * stat/label pairs with nothing to reveal, so the rows read as a spec sheet
 * rather than expanding. Replaces the previous infinite-scroll card marquee,
 * whose animation never ran — it relied on a <style jsx> block, and styled-jsx
 * emits no CSS without an App Router style registry.
 */
export default function WhyAdvaitGreen({ title, highlight, desc, stats }) {
  return (
    <section className="py-14 sm:py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.15fr] gap-10 lg:gap-16 items-start">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-4" style={{ color: "var(--color-accent-500)" }}>
              Why Us
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
              className="font-heading text-[30px] sm:text-4xl lg:text-[3.2rem] font-semibold tracking-tight leading-[1.06] mb-5"
              style={{ color: "var(--color-primary-950)" }}
            >
              {title}{" "}
              <span style={{ color: "var(--color-accent-600)" }}>{highlight}</span>
            </motion.h2>
            <p className="text-[15px] sm:text-base leading-relaxed max-w-[46ch]" style={{ color: "var(--color-secondary-600)" }}>
              {desc}
            </p>
          </div>

          {/* Right: divided stat rows */}
          <div>
            {stats.map((row, i) => (
              <motion.div
                key={`${row.label}-${i}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.05, ease: [0.2, 0, 0, 1] }}
                className="group flex items-baseline gap-5 sm:gap-8 py-4 sm:py-5 transition-colors duration-300"
                style={{
                  borderTop: "1px solid var(--color-secondary-200)",
                  borderBottom: i === stats.length - 1 ? "1px solid var(--color-secondary-200)" : "none",
                }}
              >
                <span
                  className="font-heading text-xl sm:text-2xl lg:text-[1.75rem] font-bold tracking-tight shrink-0 tabular-nums transition-colors duration-300 group-hover:text-[color:var(--color-accent-600)]"
                  style={{ color: "var(--color-primary-700)", minWidth: "7.5rem" }}
                >
                  {row.stat}
                </span>
                <span
                  className="text-sm sm:text-[15px] leading-snug"
                  style={{ color: "var(--color-secondary-700)" }}
                >
                  {row.label}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto h-px w-0 self-center transition-all duration-300 group-hover:w-10 shrink-0"
                  style={{ backgroundColor: "var(--color-accent-500)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

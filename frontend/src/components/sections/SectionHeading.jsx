"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  centered = true,
  light = false,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 w-full flex flex-col ${
        centered
          ? "items-center text-center max-w-3xl mx-auto"
          : "items-start text-left max-w-2xl"
      }`}
    >
      {eyebrow && (
        <div className={`mb-4 flex ${centered ? "justify-center w-full" : "justify-start"}`}>
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.14em] ${
              light
                ? "bg-primary-950/70 border border-primary-500/40 text-primary-300 shadow-glow"
                : "bg-primary-50 border border-primary-200/80 text-primary-700 shadow-xs"
            }`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${light ? "bg-primary-400" : "bg-primary-500"}`} />
            <span>{eyebrow}</span>
          </div>
        </div>
      )}
      <h2
        className={`font-heading text-2xl sm:text-3xl md:text-[2.5rem] font-bold leading-[1.2] mb-4 tracking-tight ${
          centered ? "text-center" : "text-left"
        } ${light ? "text-white" : "text-secondary-950"}`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`text-base md:text-[1.05rem] leading-relaxed max-w-2xl ${
            centered ? "mx-auto text-center" : "text-left"
          } ${light ? "text-industrial-300" : "text-secondary-600"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

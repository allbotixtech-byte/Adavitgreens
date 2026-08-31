"use client";

import { motion } from "framer-motion";

export default function ProcessTimeline({ subtitle, title, steps }) {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
            {subtitle}
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
            {title}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary-500)" }} />
            <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
          </div>
        </div>

        {/* Desktop: Alternating left-right with center line */}
        <div className="hidden lg:block max-w-4xl mx-auto relative">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ backgroundColor: "var(--color-primary-200)" }}
          />

          <div className="space-y-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex items-center" style={{ minHeight: "140px" }}>
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.1 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: "var(--color-primary-700)",
                        boxShadow: "0 0 0 4px var(--color-secondary-50), 0 0 0 6px var(--color-primary-200)",
                      }}
                    >
                      <Icon size={22} strokeWidth={1.8} className="text-white" />
                    </motion.div>
                  </div>

                  <div className="w-[calc(50%-44px)] pr-6">
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white rounded-xl border p-6 ml-auto max-w-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        style={{ borderColor: "var(--color-secondary-200)" }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-[22px] font-bold leading-none" style={{ color: "var(--color-primary-200)" }}>
                            {step.num}
                          </span>
                          <h3 className="font-heading text-base font-semibold" style={{ color: "var(--color-primary-950)" }}>
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  <div className="w-[88px] shrink-0" />

                  <div className="w-[calc(50%-44px)] pl-6">
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white rounded-xl border p-6 mr-auto max-w-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                        style={{ borderColor: "var(--color-secondary-200)" }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-[22px] font-bold leading-none" style={{ color: "var(--color-primary-200)" }}>
                            {step.num}
                          </span>
                          <h3 className="font-heading text-base font-semibold" style={{ color: "var(--color-primary-950)" }}>
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Stacked cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="bg-white rounded-xl border p-5 flex items-start gap-4"
                style={{ borderColor: "var(--color-secondary-200)" }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary-700)" }}
                >
                  <Icon size={20} strokeWidth={1.8} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold" style={{ color: "var(--color-accent-600)" }}>{step.num}</span>
                    <h3 className="font-heading text-sm font-semibold" style={{ color: "var(--color-primary-950)" }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

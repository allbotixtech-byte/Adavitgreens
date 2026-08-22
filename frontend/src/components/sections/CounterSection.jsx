"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";

function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function CounterSection({ counters, heading, description }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary-950 via-[#081e13] to-secondary-950 text-white border-y border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          {heading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/80 border border-primary-500/40 text-primary-300 text-xs font-semibold uppercase tracking-[0.14em] shadow-glow mb-4">
                <TrendingUp size={13} className="text-primary-400" />
                <span>Measurable Environmental Impact</span>
              </div>
              <h2 className="font-heading text-3xl md:text-[2.6rem] font-bold text-white mb-4 tracking-tight">
                {heading}
              </h2>
              {description && (
                <p className="text-industrial-300/90 text-base md:text-lg leading-relaxed font-normal">
                  {description}
                </p>
              )}
            </motion.div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-5">
            {counters.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-industrial-900/60 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-center hover:border-primary-500/40 transition-all duration-300 hover:shadow-glow group"
              >
                <div className="font-heading text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-200 to-primary-400 mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
                  <Counter end={item.value} suffix={item.suffix} />
                </div>
                <p className="text-industrial-300 text-xs sm:text-sm font-medium tracking-wide">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

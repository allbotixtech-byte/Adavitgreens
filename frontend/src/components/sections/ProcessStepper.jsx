"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProcessStepper({ steps }) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-primary-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Step Number Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-heading font-bold text-base shadow-button group-hover:scale-105 transition-transform duration-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="text-xs font-semibold text-primary-600/80 uppercase tracking-widest">
                  Step {index + 1}
                </span>
              </div>

              <h4 className="font-heading font-bold text-secondary-950 mb-2 text-base group-hover:text-primary-700 transition-colors">
                {step.title}
              </h4>
              <p className="text-sm text-secondary-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>

            {/* Subtle bottom indicator */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
              <span>Phase {index < 4 ? "01: Collection" : "02: Processing"}</span>
              <ArrowRight size={13} className="text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

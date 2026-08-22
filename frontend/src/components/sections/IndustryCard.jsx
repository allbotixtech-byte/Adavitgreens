"use client";

import { motion } from "framer-motion";

export default function IndustryCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white rounded-2xl p-7 border border-slate-200/80 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary-300 flex flex-col items-center"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100/70 rounded-2xl flex items-center justify-center mb-5 border border-primary-200/60 group-hover:from-primary-500 group-hover:to-primary-600 group-hover:border-primary-500 group-hover:shadow-button transition-all duration-300">
        <Icon
          size={28}
          className="text-primary-700 group-hover:text-white transition-colors duration-300"
          strokeWidth={1.8}
        />
      </div>
      <h3 className="font-heading font-bold text-secondary-950 mb-2.5 text-base group-hover:text-primary-700 transition-colors">
        {title}
      </h3>
      <p className="text-secondary-600 text-sm leading-relaxed font-normal">
        {description}
      </p>
    </motion.div>
  );
}

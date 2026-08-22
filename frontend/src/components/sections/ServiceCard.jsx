"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ icon: Icon, title, description, href, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        href={href}
        className="group flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/80 h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover hover:border-primary-300"
      >
        {/* Subtle top accent gradient line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

        <div>
          {/* Icon box */}
          <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100/60 rounded-2xl flex items-center justify-center mb-6 border border-primary-200/50 group-hover:from-primary-500 group-hover:to-primary-600 group-hover:border-primary-500 group-hover:shadow-button transition-all duration-300">
            <Icon
              size={26}
              className="text-primary-700 group-hover:text-white transition-colors duration-300"
              strokeWidth={1.8}
            />
          </div>

          <h3 className="font-heading text-lg font-bold text-secondary-950 mb-3 group-hover:text-primary-700 transition-colors">
            {title}
          </h3>

          <p className="text-secondary-600 text-sm leading-relaxed mb-6 font-normal">
            {description}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-primary-700 group-hover:text-primary-600 transition-colors">
          <span>Learn More</span>
          <div className="w-7 h-7 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

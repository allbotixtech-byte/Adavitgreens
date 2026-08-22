"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 w-full ${
        isOpen
          ? "border-primary-300 bg-primary-50/40 shadow-sm"
          : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-xs"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex items-start justify-between w-full px-6 py-5 text-left gap-4 cursor-pointer"
      >
        <span
          className={`font-heading font-semibold text-base leading-snug transition-colors ${
            isOpen ? "text-primary-800" : "text-secondary-900"
          }`}
        >
          {question}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
            isOpen
              ? "bg-primary-600 text-white shadow-button rotate-0"
              : "bg-slate-100 text-secondary-500 hover:bg-slate-200"
          }`}
        >
          {isOpen ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1 text-secondary-600 text-sm leading-[1.8] border-t border-primary-100/60 font-normal">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full space-y-3.5 max-w-3xl mx-auto flex flex-col justify-center">
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
}

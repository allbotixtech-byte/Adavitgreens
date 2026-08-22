"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/sections/SectionHeading";
import { fullFAQ } from "@/data/faq";

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = fullFAQ.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <HeroSection
        eyebrow="KNOWLEDGE BASE"
        heading="Frequently Asked Questions"
        description="Clear answers regarding collection logistics, certified data destruction, statutory EPR compliance, and our Gujarat facility operations."
        minHeight="min-h-[60vh]"
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Search Box */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search topics (e.g. EPR, hard drives, pickup, GST)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-slate-200 shadow-xs focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 text-sm outline-none"
              />
            </div>
          </div>

          <div className="w-full max-w-3xl mx-auto">
            {filteredItems.length > 0 ? (
              <FAQAccordion items={filteredItems} />
            ) : (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
                <p className="text-slate-600 text-sm">No questions found matching &ldquo;{searchTerm}&rdquo;.</p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-3 text-primary-600 font-semibold text-xs hover:underline cursor-pointer"
                >
                  Clear Search Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Still Have Specific Questions?"
        description="Our team of environmental and recycling specialists is available to review your exact requirements."
        primaryCTA={{ label: "Contact Our Specialists", href: "/contact" }}
      />
    </>
  );
}

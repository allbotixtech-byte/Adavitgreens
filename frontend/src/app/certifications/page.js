"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, ShieldCheck, Award, Building, Copy, Check } from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

const complianceStandards = [
  { title: "CPCB Authorized Processing Protocol", desc: "Central Pollution Control Board aligned electronic waste dismantling and processing standards." },
  { title: "Gujarat SPCB Operational Compliance", desc: "Authorized facility functioning under Gujarat Pollution Control Board statutory parameters." },
  { title: "E-Waste Management Rules (2022) Alignment", desc: "Full statutory compliance for Extended Producer Responsibility target accounting." },
  { title: "EPR Portal Registration & Returns", desc: "Active data logging for transparent downstream material traceability and audit." },
  { title: "ISO 9001: Quality Management Standards", desc: "Rigorous quality control across collection, inventory indexing, and sorting." },
  { title: "ISO 14001: Environmental Management", desc: "Proactive reduction of facility carbon footprint, energy conservation, and zero-effluent output." },
  { title: "ISO 45001: Occupational Health & Safety", desc: "Protective equipment, mechanized handling, and comprehensive workforce health safety." },
  { title: "Authorized Data Destruction Certification", desc: "Issuance of serial-verified certificates for cryptographic wipe and physical shredding." },
];

export default function CertificationsPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyGST = () => {
    navigator.clipboard.writeText("24ABECA2823M1ZQ");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <HeroSection
        eyebrow="REGULATORY ASSURANCE"
        heading="Responsible Recycling. Compliant & Certified Operations."
        description="Environmental accountability demands strict documentation, verified legal credentials, and complete adherence to national e-waste guidelines."
      />

      {/* Verified GST Certificate Showcase (Centered Single Card) */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Official Legal Entity"
            heading="Verified Tax & Operating Credentials"
            description="Our formal business registrations assure institutional clients of lawful, compliant, and auditable recycling operations."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-industrial-200/80 shadow-card"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-industrial-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-700 border border-primary-200/60 shrink-0">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-secondary-950">
                    Goods & Services Tax (GST)
                  </h3>
                  <span className="text-xs text-primary-700 font-semibold uppercase">Government of India Registered</span>
                </div>
              </div>
              <button
                onClick={handleCopyGST}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-industrial-50 hover:bg-industrial-100 text-xs font-semibold text-secondary-700 border border-industrial-200 transition-colors cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? "GSTIN Copied!" : "Copy GSTIN"}</span>
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5 py-6 text-sm">
              <div className="p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                <span className="text-xs text-industrial-400 uppercase tracking-wide block mb-1">Legal Company Name</span>
                <span className="font-semibold text-secondary-950 text-xs sm:text-sm">ADVAIT GREEN RECYCLING PRIVATE LIMITED</span>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200/60">
                <span className="text-xs text-emerald-700 uppercase tracking-wide block mb-1 font-semibold">GSTIN Identifier</span>
                <span className="font-mono font-bold text-secondary-950 text-base">24ABECA2823M1ZQ</span>
              </div>
              <div className="p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                <span className="text-xs text-industrial-400 uppercase tracking-wide block mb-1">Constitution</span>
                <span className="font-semibold text-secondary-950">Private Limited Company</span>
              </div>
              <div className="p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                <span className="text-xs text-industrial-400 uppercase tracking-wide block mb-1">Effective Date</span>
                <span className="font-semibold text-secondary-950">27 March 2026</span>
              </div>
              <div className="sm:col-span-2 p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                <span className="text-xs text-industrial-400 uppercase tracking-wide block mb-1">Facility Address</span>
                <span className="font-semibold text-secondary-950 text-xs sm:text-sm">
                  NO 2016 (New Survey No. 2103)/B/2, Vamaj Road, Vamaj, Mahesana, Gujarat – 382728
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary-50/80 border border-primary-200/60 flex items-center justify-center gap-2.5 text-center">
              <ShieldCheck size={18} className="text-primary-700 shrink-0" />
              <p className="text-xs text-primary-900 leading-snug">
                Official invoices, manifests, and destruction certificates carry this verified state registration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Framework Grid */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Authorizations & Standards"
            heading="Environmental & Operating Framework"
            description="Our operational benchmarks conform to statutory Indian environmental guidelines and industrial quality standards."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {complianceStandards.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-industrial-200/80 shadow-xs hover:border-primary-300 hover:shadow-card transition-all flex flex-col justify-between text-left"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-700 mb-4 border border-primary-200/50">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="font-heading font-bold text-secondary-950 text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-secondary-600 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

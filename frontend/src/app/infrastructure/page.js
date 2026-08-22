"use client";

import { motion } from "framer-motion";
import { Package, Layers, Wrench, Gem, Warehouse, Truck, ShieldCheck, Gauge, CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

const facilities = [
  {
    icon: Package,
    title: "01. Intake & Receiving Zone",
    desc: "Calibrated electronic weighbridge, unboxing dock, serial barcode scanning, and initial consignment condition audit.",
    capacity: "Daily Intake Logging",
  },
  {
    icon: Layers,
    title: "02. Segregation & Sorting Hub",
    desc: "High-throughput sorting lines categorizing electronics into CRT, LCD, printed circuit boards, lithium batteries, and casing plastics.",
    capacity: "Multi-stream Sorting",
  },
  {
    icon: Wrench,
    title: "03. Dismantling & De-manufacturing",
    desc: "Manual and pneumatic de-manufacturing benches ensuring clean separation of components without hazardous dust emission.",
    capacity: "Component Disassembly",
  },
  {
    icon: Gem,
    title: "04. Material Recovery Division",
    desc: "Mechanical granulation and density separation for non-ferrous metals (copper, aluminum) and engineering-grade polymers.",
    capacity: "Secondary Commodity Yield",
  },
  {
    icon: Warehouse,
    title: "05. Secure Warehousing",
    desc: "Organized storage bays for segregated commodities, segregated hazardous fractions, and ready-to-dispatch recycled output.",
    capacity: "Weatherproof Storage",
  },
  {
    icon: Truck,
    title: "06. Dispatch & Downstream Transit",
    desc: "Dedicated loading docks and GPS-enabled vehicle fleet connecting secondary smelters and approved plastic recyclers.",
    capacity: "PAN-India Dispatch",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      <HeroSection
        eyebrow="FACILITY & CAPACITY"
        heading="Infrastructure Built for Responsible Resource Recovery"
        description="Located in Mahesana, Gujarat, our facility is engineered with dedicated operational zones ensuring maximum material yield, worker safety, and environmental protection."
        primaryCTA={{ label: "Schedule a Facility Inspection", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
      />

      {/* Facility Highlights Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Operational Zones"
            heading="Specialized Facility Sections"
            description="A systematic layout that channels materials safely from arrival to secondary raw material output."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {facilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-industrial-200/80 shadow-xs hover:border-primary-300 hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center border border-primary-200/60 text-primary-700 shadow-xs">
                      <item.icon size={26} />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-industrial-50 text-secondary-600 border border-industrial-200">
                      {item.capacity}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-secondary-950 text-lg mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed font-normal mb-4">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Environmental Controls */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="eyebrow mb-3">Facility Safety Standards</span>
              <h2 className="font-heading text-3xl font-bold text-secondary-950 mb-4">
                Engineered for Zero Environmental Contamination
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6 font-normal">
                Our plant is designed with sealed impervious flooring, modern dust extraction hoods, emergency eyewash stations, and continuous air quality monitoring to protect both personnel and the local ecosystem.
              </p>
              <div className="space-y-3">
                {[
                  "Impermeable concrete flooring with chemical-resistant coating",
                  "Dedicated fire suppression and battery isolation containment bays",
                  "Closed-circuit dust collectors preventing hazardous particulate release",
                  "100% mechanized handling equipment reducing manual strain",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-secondary-800">
                    <CheckCircle2 size={18} className="text-primary-600 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-secondary-950 via-[#071911] to-secondary-950 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-400 mb-6 border border-primary-400/30">
                <ShieldCheck size={26} />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-3">Principal Plant Address</h3>
              <p className="text-industrial-300 text-sm leading-relaxed mb-6">
                NO 2016 (New Survey No. 2103)/B/2, Vamaj Road, Vamaj, Mahesana, Gujarat – 382728
              </p>
              <div className="pt-4 border-t border-white/10 text-xs text-primary-300 font-mono space-y-1">
                <p>Authorized E-Waste Recycler</p>
                <p>Gujarat Pollution Control Board Registered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

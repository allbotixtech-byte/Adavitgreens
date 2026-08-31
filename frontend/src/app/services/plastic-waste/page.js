"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Recycle, Package, Factory, Droplets, Truck,
  ShieldCheck, FileCheck, Leaf, FlaskConical, Scale, Eye,
  TrendingUp, Boxes, SlidersHorizontal, Award, ClipboardCheck,
  Sparkles, Layers, CircleDot, Container, Fuel, Thermometer,
  ArrowDown, MapPin, Phone, Clock, Lightbulb, Globe,
  AlertTriangle, Building2, BarChart3, Zap,
} from "lucide-react";
import ProcessTimeline from "@/components/sections/ProcessTimeline";

/* ── DATA ── */

const wasteItems = [
  {
    icon: Package,
    label: "Post-Consumer Packaging",
    desc: "Bottles, containers, pouches, carry bags and food packaging collected from households, commercial establishments and municipal channels. Sorted by polymer type before processing.",
    image: "/images/Post-Consumer-Packaging.jpg",
  },
  {
    icon: Factory,
    label: "Post-Industrial Waste",
    desc: "Manufacturing offcuts, rejects, runners, sprues and edge trims from injection moulding, blow moulding and extrusion plants. Clean, single-polymer streams ideal for direct granulation.",
    image: "/images/Post-Industrial-Waste.jpg",
  },
  {
    icon: Layers,
    label: "Multi-Layered Packaging",
    desc: "Chip packets, tetra-style cartons and laminated pouches that combine plastic with aluminium or paper. Channelled to authorised co-processing partners for energy or material recovery.",
    image: "/images/Multi-Layered-Packaging.jpg",
  },
  {
    icon: Container,
    label: "Rigid Plastics",
    desc: "HDPE drums, PP crates, PET bottles, LDPE containers and PVC pipes. Cleaned, shredded and granulated into production-grade pellets with batch-wise quality testing.",
    image: "/images/Rigid-Plastics.jpg",
  },
  {
    icon: Recycle,
    label: "Flexible Films & Wraps",
    desc: "Stretch wrap, shrink film, agricultural mulch film and packaging liners. Washed, dried and agglomerated into dense granules suitable for re-extrusion into new film or moulded products.",
    image: "/images/Flexible-Films-Wraps.jpg",
  },
  {
    icon: Leaf,
    label: "Agricultural Plastic",
    desc: "Mulch films, drip irrigation pipes, greenhouse covers and fertiliser bags. Often contaminated with soil and chemicals — our wash line removes contaminants before recycling.",
    image: "/images/Agricultural-Plastic.jpg",
  },
];

const processSteps = [
  {
    icon: Truck,
    num: "01",
    title: "Collection",
    desc: "Pre-consumer and post-consumer plastic waste collected from industries, institutions and local bodies per MOEF & CPCB guidelines.",
  },
  {
    icon: Eye,
    num: "02",
    title: "Sorting",
    desc: "Manual and semi-automated sorting by polymer type (HDPE, PP, PET, LDPE, PVC) — contaminated and non-recyclable fractions are separated.",
  },
  {
    icon: SlidersHorizontal,
    num: "03",
    title: "Size Reduction",
    desc: "Shredding reduces the volume-to-weight ratio for efficient washing and processing. Output: uniform plastic flakes ready for the wash line.",
  },
  {
    icon: Droplets,
    num: "04",
    title: "Washing & Drying",
    desc: "Hot and cold wash cycles remove labels, adhesives, dirt and food residue. Centrifugal dryers bring moisture content below processing thresholds.",
  },
  {
    icon: Thermometer,
    num: "05",
    title: "Granulation",
    desc: "Clean flakes are melted, filtered and extruded into uniform pellets. Each batch is tested for MFI, density and contamination levels before dispatch.",
  },
  {
    icon: Sparkles,
    num: "06",
    title: "Quality Output",
    desc: "Production-grade recycled granules supplied to manufacturers — closing the loop from waste stream back to production line.",
  },
];

const granuleTypes = [
  { name: "LDPE Granules", color: "var(--color-accent-600)" },
  { name: "LLDPE Granules", color: "var(--color-primary-700)" },
  { name: "PP Granules", color: "var(--color-accent-500)" },
  { name: "HDPE Granules", color: "var(--color-primary-600)" },
  { name: "PET Flakes", color: "var(--color-accent-700)" },
];

const statCards = [
  { stat: "500 MT", label: "Monthly Recycling Capacity", dark: true },
  { stat: "95%", label: "Recycled Plastic Finds New Life", dark: false },
  { stat: "70%", label: "More Jobs Than Landfilling", dark: true },
  { stat: "5,774", label: "KwH Energy Saved Per Tonne", dark: false },
  { stat: "2,600L+", label: "Oil Saved Per Tonne", dark: true },
  { stat: "23m³", label: "Landfill Space Saved Per Tonne", dark: false },
  { stat: "100%", label: "Regulatory Compliance", dark: true },
  { stat: "Pan-India", label: "Collection Network", dark: false },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

/* ── COMPONENTS ── */

function WhatWeHandleTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const active = wasteItems[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
            Accepted Categories
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
            What We Handle
          </h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {wasteItems.map((item, i) => (
              <button
                key={item.label}
                onClick={() => setActiveTab(i)}
                className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border whitespace-nowrap"
                style={{
                  backgroundColor: activeTab === i ? "var(--color-primary-700)" : "transparent",
                  color: activeTab === i ? "#ffffff" : "var(--color-secondary-700)",
                  borderColor: activeTab === i ? "var(--color-primary-700)" : "var(--color-secondary-200)",
                  boxShadow: activeTab === i ? "0 4px 12px rgba(0,26,43,0.15)" : "none",
                }}
              >
                <item.icon size={16} strokeWidth={1.8} />
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">{item.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          >
            <p
              className="text-center text-[15px] sm:text-base leading-relaxed max-w-3xl mx-auto mb-8"
              style={{ color: "var(--color-secondary-600)" }}
            >
              {active.desc}
            </p>

            <div className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto" style={{ aspectRatio: "16/7" }}>
              <img
                src={active.image}
                alt={active.label}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,26,43,0.5) 0%, transparent 40%)" }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                  >
                    <active.icon size={20} strokeWidth={1.8} className="text-white" />
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-semibold text-white">
                    {active.label}
                  </h3>
                </div>
                <span
                  className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)", color: "#ffffff" }}
                >
                  <ShieldCheck size={12} /> GPCB Authorised
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ── MAIN PAGE ── */

export default function PlasticWastePage() {
  return (
    <>
      {/* ── HERO (VIDEO) ── */}
      <section className="relative h-screen min-h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/video/plastic-west-hero-bg.mp4"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,26,43,0.85) 0%, rgba(0,26,43,0.5) 50%, rgba(0,26,43,0.3) 100%)",
            }}
          />
        </div>

        <div className="relative h-full flex items-center">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full">
            <div className="max-w-[620px]">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-xs uppercase tracking-[0.12em] text-accent-400 mb-4"
              >
                Plastic Waste Management
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.15] mb-5"
              >
                Closing the Loop{" "}
                <span style={{ color: "var(--color-accent-400)" }}>on Plastic.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-white/75 leading-relaxed max-w-[540px]"
              >
                From post-consumer waste to production-ready granules — we turn plastic scrap into valuable secondary raw material, keeping it out of landfills and oceans.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3 mt-8"
              >
                <Link
                  href="/schedule-pickup"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                  style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
                >
                  Schedule Pickup <ArrowRight size={15} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                  style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
                The Challenge
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-5" style={{ color: "var(--color-primary-950)" }}>
                India's Plastic Crisis Needs a Circular Solution
              </h2>
              <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
                <p>
                  India generates over 3.5 million tonnes of plastic waste annually. Much of it ends up in landfills, waterways and oceans — taking hundreds of years to degrade while leaching microplastics into the food chain.
                </p>
                <p>
                  Under the Plastic Waste Management Rules, 2016 (amended 2021), producers, importers and brand owners carry Extended Producer Responsibility for the plastic packaging they introduce into the market. Advait Green Recycling helps businesses meet these obligations while ensuring plastic waste is genuinely recycled, not just diverted to informal channels.
                </p>
                <p>
                  Our GPCB-authorised facility processes plastic waste through sorting, washing, shredding and granulation — producing clean, graded pellets that go back to manufacturers, completing the circular loop.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/images/India'sPlasticCrisisNeedsaCircularSolution.jpg"
                alt="Plastic waste recycling facility"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(0,26,43,0.8), transparent)" }}
              >
                <p className="font-mono text-xs text-white/70 uppercase tracking-wider">GPCB Authorised</p>
                <p className="text-sm text-white mt-1">500 MT/month processing capacity</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE HANDLE ── */}
      <WhatWeHandleTabs />

      {/* ── RECYCLING PROCESS ── */}
      <ProcessTimeline
        subtitle="How It Works"
        title="Plastic Waste Recycling Process"
        steps={processSteps}
      />

      {/* ── OUTPUT PRODUCTS ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
                Our Output
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--color-primary-950)" }}>
                Recycled Granules &{" "}
                <span style={{ color: "var(--color-accent-600)" }}>Products</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--color-secondary-600)" }}>
                95% of our recycled plastic finds new life in a wide array of new products and packaging — reducing raw material consumption and diverting waste from landfills. Every batch is quality-tested for melt flow index, density and contamination.
              </p>

              <div className="space-y-3">
                {granuleTypes.map((g, i) => (
                  <motion.div
                    key={g.name}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-center gap-4 p-3 rounded-lg border"
                    style={{ borderColor: "var(--color-secondary-100)" }}
                  >
                    <div
                      className="w-8 h-8 rounded-full shrink-0"
                      style={{ backgroundColor: g.color, opacity: 0.85 }}
                    />
                    <span className="text-sm font-semibold" style={{ color: "var(--color-primary-950)" }}>
                      {g.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { stat: "95%", label: "Recycled plastic finds new life", icon: Recycle },
                { stat: "500 MT", label: "Monthly processing capacity", icon: Factory },
                { stat: "Batch-wise", label: "Quality testing of every output", icon: FlaskConical },
                { stat: "Zero", label: "Effluent discharge — ETP treated", icon: Droplets },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl p-5 border text-center"
                  style={{ borderColor: "var(--color-secondary-100)", backgroundColor: "var(--color-secondary-50)" }}
                >
                  <item.icon size={24} strokeWidth={1.5} className="mx-auto mb-3" style={{ color: "var(--color-primary-700)" }} />
                  <p className="font-heading text-xl font-bold mb-1" style={{ color: "var(--color-primary-950)" }}>{item.stat}</p>
                  <p className="text-xs leading-snug" style={{ color: "var(--color-secondary-500)" }}>{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
              Why It Matters
            </p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight"
              style={{ color: "var(--color-primary-950)" }}
            >
              Benefits of Plastic Waste Recycling
            </motion.h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Leaf, title: "Less Greenhouse Gases", desc: "Recycling plastic produces significantly fewer emissions than manufacturing virgin plastic from petroleum — reducing your carbon footprint measurably." },
              { icon: Globe, title: "Conservation of Resources", desc: "Every tonne of recycled plastic saves approximately 2,600 litres of oil, 5,774 KwH of energy and 23 cubic metres of landfill space." },
              { icon: BarChart3, title: "Better Waste Management", desc: "Structured recycling diverts plastic from informal channels, open burning and waterways — preventing soil and water contamination." },
              { icon: TrendingUp, title: "70% More Employment", desc: "Plastic recycling generates 70% more jobs compared to landfilling or incineration — supporting livelihoods across the collection and processing chain." },
              { icon: Award, title: "EPR Compliance", desc: "Our facility generates EPR certificates for brand owners and producers — meeting quarterly targets under Plastic Waste Management Rules." },
              { icon: Recycle, title: "Circular Economy", desc: "Clean, graded granules go back to manufacturers as production-ready material — closing the loop from waste stream to production line." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--color-secondary-200)" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}
                >
                  <item.icon size={22} strokeWidth={1.6} style={{ color: "var(--color-primary-700)" }} />
                </div>
                <h4 className="text-sm font-semibold mb-2" style={{ color: "var(--color-primary-950)" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ADVAIT GREEN — INFINITE SCROLL STATS ── */}
      <section className="py-16 lg:py-24 overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--color-primary-950)" }}>
              Why Advait Green for{" "}
              <span style={{ color: "var(--color-accent-600)" }}>Plastic Waste Recycling</span>
            </h2>
            <p className="text-[15px] sm:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--color-secondary-600)" }}>
              GPCB authorised plastic waste recycler with 500 MT/month capacity — trusted by brands, municipalities and manufacturers across India.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex animate-scroll-left">
            {[...statCards, ...statCards].map((card, i) => (
              <div
                key={`${card.label}-${i}`}
                className="shrink-0 w-[200px] sm:w-[230px] aspect-square mx-2 sm:mx-3 rounded-xl flex flex-col items-center justify-center text-center border"
                style={{
                  backgroundColor: card.dark ? "var(--color-primary-900)" : "#ffffff",
                  borderColor: card.dark ? "var(--color-primary-800)" : "var(--color-secondary-200)",
                }}
              >
                <span
                  className="font-heading text-4xl sm:text-5xl font-bold tracking-tight mb-3"
                  style={{ color: card.dark ? "#ffffff" : "var(--color-primary-800)" }}
                >
                  {card.stat}
                </span>
                <div
                  className="w-8 h-[3px] rounded-full mb-3"
                  style={{ backgroundColor: "var(--color-accent-500)" }}
                />
                <p
                  className="text-sm font-semibold leading-snug px-3"
                  style={{ color: card.dark ? "var(--color-secondary-300)" : "var(--color-secondary-700)" }}
                >
                  {card.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll-left {
            animation: scrollLeft 7s linear infinite;
          }
          .animate-scroll-left:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* ── EPR COMPLIANCE ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}>
                <FileCheck size={14} style={{ color: "var(--color-primary-700)" }} />
                <span className="font-mono text-xs uppercase tracking-[0.09em]" style={{ color: "var(--color-primary-700)" }}>Regulatory</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-4" style={{ color: "var(--color-primary-950)" }}>
                EPR Compliance for{" "}
                <span style={{ color: "var(--color-accent-600)" }}>Brand Owners</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--color-secondary-600)" }}>
                Under the Plastic Waste Management Rules, producers, importers and brand owners must fulfil Extended Producer Responsibility targets for the plastic packaging they place on the market. Non-compliance attracts penalties and can disrupt business operations.
              </p>
              <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--color-secondary-600)" }}>
                Advait Green generates EPR certificates against verified recycling volumes from our own facility — ensuring your quarterly targets are met with auditable documentation, not paper credits.
              </p>

              <Link
                href="/services/epr"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--color-primary-700)" }}
              >
                Learn More About EPR Services <ArrowRight size={15} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="space-y-4"
            >
              {[
                { icon: ClipboardCheck, title: "CPCB Portal Registration", desc: "We assist with onboarding and annual target computation on the CPCB EPR portal." },
                { icon: Scale, title: "Target Fulfilment Planning", desc: "Collection network setup and processing aligned to your quarterly EPR targets." },
                { icon: FileCheck, title: "EPR Certificate Generation", desc: "Certificates issued against verified recycling volumes from our authorised facility." },
                { icon: ShieldCheck, title: "Audit-Ready Documentation", desc: "Quarterly filings, annual returns and manifest documentation for regulatory audits." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4 bg-white rounded-xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ borderColor: "var(--color-secondary-200)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}
                  >
                    <item.icon size={20} strokeWidth={1.6} style={{ color: "var(--color-primary-700)" }} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1" style={{ color: "var(--color-primary-950)" }}>{item.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-500)" }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="bg-primary-900 py-14 lg:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 max-w-[600px] mx-auto">
            Have Waste Sitting in Storage? Let's Move It Responsibly.
          </h2>
          <p className="text-secondary-300 text-sm sm:text-base max-w-[520px] mx-auto mb-8 leading-relaxed">
            Tell us what you have and where it is. We'll come back within one working day with a collection plan and an indicative valuation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/schedule-pickup"
              className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Schedule a Free Pickup <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/8 text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

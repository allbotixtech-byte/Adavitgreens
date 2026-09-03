"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowDown, Cpu, Monitor, Server, Smartphone, Cable, Printer, CircuitBoard, Radio, ShieldCheck, Truck, Eye, ChevronRight, PackageCheck, Wrench, RotateCcw, Scale, Search, Magnet, Zap, FlaskConical, Container, Flame, TrendingUp, Boxes, SlidersHorizontal, Globe, AlertTriangle, Lightbulb, Building2, Lock, MapPin, Phone, Clock,
} from "lucide-react";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import WhyAdvaitGreen from "@/components/sections/WhyAdvaitGreen";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";

const heroSlides = [
  {
    image: "/images/E-West-Managment-1.jpg",
    title: "Recover the Metal.",
    highlight: "Spare the Mountain.",
    desc: "Every discarded laptop, server and handset holds recoverable gold, copper and rare earths. We extract them responsibly - so the earth doesn't have to be dug up again.",
  },
  {
    image: "/images/E-West-Managment-2.jpg",
    title: "From Circuit Boards",
    highlight: "to Clean Commodities.",
    desc: "Our mechanised lines shred, separate and recover copper, aluminium, steel and precious metals from printed circuit boards - returning clean secondary raw material to industry.",
  },
  {
    image: "/images/E-West-Managment-3.jpg",
    title: "Authorised. Auditable.",
    highlight: "Liability Transferred.",
    desc: "CPCB and GPCB authorised processing means your e-waste liability actually transfers - backed by Certificates of Recycling and full chain-of-custody documentation.",
  },
  {
    image: "/images/E-West-Managment-4.jpg",
    title: "Manual Precision Meets",
    highlight: "Mechanical Scale.",
    desc: "Skilled de-manufacturing teams disassemble each device by hand before mechanical shredding and separation extract every recoverable fraction - ferrous, non-ferrous, plastics, glass and hazardous components.",
  },
  {
    image: "/images/E-West-Managment-5.jpg",
    title: "Zero Waste.",
    highlight: "Maximum Recovery.",
    desc: "Our target is complete diversion from landfill. Every processed consignment yields clean metal, reusable plastic, and documented evidence for your EPR and ESG reporting.",
  },
];

const wasteItems = [
  {
    icon: Monitor,
    label: "Computers & Workstations",
    desc: "Desktops, laptops, workstations and thin clients - including all internal components such as motherboards, RAM, processors, hard drives and power supplies. We handle individual units as well as bulk IT refresh disposals.",
    image: "/images/computer-workstation.jpg",
  },
  {
    icon: Server,
    label: "Servers & Networking",
    desc: "Rack-mount servers, blade servers, routers, switches, modems, PBX systems and telecom exchange equipment. From data centre decommissions to branch-office cleanouts, every piece is inventoried and processed.",
    image: "/images/server-networking.jpg",
  },
  {
    icon: Cpu,
    label: "UPS & Power Systems",
    desc: "Uninterruptible power supplies, voltage regulators, power distribution units and battery backup systems. Batteries are safely separated and channelled to authorised recyclers; electronics enter our shredding line.",
    image: "/images/ups-power-station.jpg",
  },
  {
    icon: Printer,
    label: "Monitors & Peripherals",
    desc: "CRT and flat-panel monitors, printers, scanners, copiers, projectors, keyboards, mice and other peripherals. CRT monitors receive special treatment due to leaded glass and phosphor coatings.",
    image: "/images/Monitors-Peripherals.jpg",
  },
  {
    icon: Cable,
    label: "Cables & Connectors",
    desc: "Power cables, data cables, wiring harness, connectors and cable assemblies. Copper and aluminium are recovered through mechanical stripping and granulation for return to the secondary metal market.",
    image: "/images/Cables-Connectors.jpg",
  },
  {
    icon: CircuitBoard,
    label: "Circuit Boards (PCBs)",
    desc: "Populated and bare printed circuit boards from any source - computers, telecom, industrial controls, consumer electronics. PCBs contain the highest concentration of precious metals and are processed for gold, silver, palladium and copper recovery.",
    image: "/images/Circuit-Boards-PCBs.jpg",
  },
  {
    icon: Smartphone,
    label: "Consumer Electronics",
    desc: "Televisions, audio systems, home appliances, smartphones, tablets and gaming consoles. Items are dismantled, hazardous components (batteries, capacitors, mercury lamps) are separated, and recyclable fractions enter the recovery stream.",
    image: "/images/Consumer-Electronics.jpg",
  },
  {
    icon: Radio,
    label: "Industrial Equipment",
    desc: "PLC controllers, SCADA systems, sensors, relays, instrumentation panels and factory automation components. Industrial e-waste often contains specialised alloys and rare earth elements that we channel to authorised downstream processors.",
    image: "/images/Industrial-Equipment.jpg",
  },
];

const statCards = [
  { stat: "500+", label: "Corporates Served", dark: true },
  { stat: "24x7", label: "Toll-Free Support", dark: false },
  { stat: "100%", label: "Compliant Processing", dark: true },
  { stat: "10+", label: "Years of Recycling Excellence", dark: false },
  { stat: "15+", label: "Quality Checks Per Batch", dark: true },
  { stat: "50K+", label: "Tonnes Processed Annually", dark: false },
  { stat: "99%", label: "Material Recovery Rate", dark: true },
  { stat: "Pan-India", label: "Collection Network", dark: false },
];

const processSteps = [
  {
    icon: Cpu,
    title: "E-Waste",
    desc: "End-of-life electronics received from corporates, institutions and collection drives.",
  },
  {
    icon: Truck,
    title: "Collection",
    desc: "Sealed, GPS-tracked pickup in closed vehicles with manifest documentation.",
  },
  {
    icon: PackageCheck,
    title: "To Plant",
    desc: "Gate-entry weighment, inspection and logging at our Mahesana facility.",
  },
  {
    icon: Wrench,
    title: "Segregation",
    desc: "Manual dismantling into ferrous, non-ferrous, plastics, glass, PCBs and hazardous fractions.",
  },
  {
    icon: RotateCcw,
    title: "Recovery",
    desc: "Shredding, magnetic and eddy-current separation to extract clean secondary raw materials.",
  },
];

const galleryImages = [
  { src: "/images/E-West-Managment-1.jpg", alt: "E-waste collection and sorting" },
  { src: "/images/E-West-Managment-2.jpg", alt: "Circuit board recovery process" },
  { src: "/images/E-West-Managment-3.jpg", alt: "Metal separation and recovery" },
  { src: "/images/E-West-Managment-4.jpg", alt: "Dismantling and de-manufacturing" },
  { src: "/images/E-West-Managment-5.jpg", alt: "Processed materials ready for reuse" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

const journeySteps = [
  {
    icon: AlertTriangle,
    num: "01",
    title: "The Problem",
    desc: "India generates over 1.7 million tonnes of e-waste annually, yet less than a third reaches formal recycling - the rest poisons communities and ecosystems through soil and groundwater contamination.",
  },
  {
    icon: Globe,
    num: "02",
    title: "Global Reality",
    desc: "5–7 million tonnes of e-waste are generated globally each year. Developed nations often export electronic waste to countries like India, fuelling an informal recycling industry that endangers workers.",
  },
  {
    icon: MapPin,
    num: "03",
    title: "Indian Scenario",
    desc: "India's IT sector is growing at over 25% annually, driving rapid hardware obsolescence. Metro cities contribute 65% of total e-waste, yet formal recycling infrastructure remains limited.",
  },
  {
    icon: Lightbulb,
    num: "04",
    title: "The Opportunity",
    desc: "One tonne of circuit boards yields more gold than 17 tonnes of mined ore. Systematic recovery of metals, plastics and rare earths reduces mining pressure and returns value to industry.",
  },
  {
    icon: Building2,
    num: "05",
    title: "For Organisations",
    desc: "Establish a formal e-waste policy. Partner with authorised recyclers like Advait Green for compliant disposal. Conduct regular audits and employee awareness programmes.",
  },
  {
    icon: Smartphone,
    num: "06",
    title: "For Individuals",
    desc: "Follow Reduce, Reuse, Recycle. Buy electronics based on need. Never hand devices to informal scrap dealers - use authorised recycling channels for safe, legal disposal.",
  },
];


export default function EWastePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <>
      {/* ── HERO CAROUSEL ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        {/* Background images */}
        <AnimatePresence mode="sync">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt=""
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <Link href="/services" className="text-white/60 hover:text-white transition-colors">Services</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span className="text-white/90">E-Waste Recycling</span>
            </nav>

            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs uppercase tracking-[0.09em] text-accent-400 mb-4"
            >
              E-Waste Recycling & Management
            </motion.p>

            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.08] tracking-tight mb-5"
              >
                {slide.title}{" "}
                <span className="text-accent-400">{slide.highlight}</span>
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-white/80 text-base lg:text-lg leading-relaxed max-w-[52ch] mb-8"
              >
                {slide.desc}
              </motion.p>
            </AnimatePresence>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/schedule-pickup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
              >
                Schedule a Free Pickup <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Talk to Our Team
              </Link>
            </div>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-12">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentSlide(i);
                    clearInterval(intervalRef.current);
                    intervalRef.current = setInterval(() => {
                      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
                    }, 6000);
                  }}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === currentSlide ? "w-10 bg-accent-400" : "w-5 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
                The Challenge
              </p>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-5"
                style={{ color: "var(--color-primary-950)" }}
              >
                India's E-Waste Problem Needs a Formal Solution
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="space-y-4 text-[15px] leading-relaxed"
                style={{ color: "var(--color-secondary-600)" }}
              >
                <p>
                  India generates over 1.7 million tonnes of electronic waste annually, yet less than a third reaches a formal recycling channel. The rest ends up in landfills, informal dismantling yards, or acid-leaching operations that poison groundwater and soil.
                </p>
                <p>
                  Advait Green Recycling bridges that gap. As a GPCB-authorised recycler, we process end-of-life electronics through our mechanised facility at Mahesana, Gujarat - recovering valuable metals and materials while ensuring hazardous fractions never reach the environment.
                </p>
                <p>
                  Our processing line includes manual de-manufacturing bays, a primary shredder, magnetic and eddy-current separators, and density-based sorting systems. Recoverable metals - copper, aluminium, steel, gold, silver and palladium - are extracted and returned to the secondary raw material market.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/images/E-West-Managment-2.jpg"
                alt="E-waste recycling facility"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(0,26,43,0.85), transparent)" }}
              >
                <p className="font-mono text-xs text-white/70 uppercase tracking-wider">GPCB Authorised Facility</p>
                <p className="text-sm text-white mt-1">Vamaj, Mahesana - Gujarat</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── UNDERSTANDING E-WASTE (E-Know) - Horizontal Journey ── */}
      <ProcessTimeline
        subtitle="E-Know"
        title="Understanding E-Waste"
        steps={journeySteps}
      />

      {/* ── WHAT WE HANDLE ── */}
      <HorizontalShowcase
        eyebrow="Accepted Categories"
        title="What We Handle"
        items={wasteItems}
      />

      {/* ── E-WASTE RECYCLING PROCESS (Horizontal Visual Flow) ── */}
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
              How It Works
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
              E-Waste Recycling Process
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary-500)" }} />
              <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
            </div>
          </div>

          {/* Horizontal flow - desktop */}
          <div className="hidden lg:flex items-start justify-between gap-0 relative">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center relative"
                style={{ flex: "1 1 0", maxWidth: "200px" }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 relative"
                  style={{ backgroundColor: "var(--color-primary-50)", border: "2px solid var(--color-primary-200)" }}
                >
                  <step.icon size={36} strokeWidth={1.4} style={{ color: "var(--color-primary-700)" }} />
                </div>
                <h4 className="font-heading text-base font-semibold mb-1.5" style={{ color: "var(--color-primary-950)" }}>
                  {step.title}
                </h4>
                <p className="text-xs leading-relaxed px-1" style={{ color: "var(--color-secondary-500)" }}>
                  {step.desc}
                </p>

                {i < processSteps.length - 1 && (
                  <div className="absolute top-10 left-[calc(50%+48px)] flex items-center" style={{ width: "calc(100% - 96px)" }}>
                    <div className="flex-1 h-0" style={{ borderTop: "2px dashed var(--color-secondary-300)" }} />
                    <ArrowRight size={18} className="shrink-0 -ml-1" style={{ color: "var(--color-accent-500)" }} />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Output materials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col items-start gap-2 pl-3 pt-2"
              style={{ minWidth: "140px" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wider mb-1" style={{ color: "var(--color-secondary-500)" }}>Output</p>
              {["Aluminium", "Copper", "Plastic", "Iron", "Gold & Silver"].map((mat) => (
                <div key={mat} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
                  <span className="text-sm font-medium" style={{ color: "var(--color-primary-700)" }}>{mat}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile/Tablet - vertical cards */}
          <div className="lg:hidden grid sm:grid-cols-2 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-lg border"
                style={{ borderColor: "var(--color-secondary-100)", backgroundColor: "var(--color-secondary-25)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary-50)" }}
                >
                  <step.icon size={24} strokeWidth={1.5} style={{ color: "var(--color-primary-700)" }} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-[10px] font-bold" style={{ color: "var(--color-accent-600)" }}>0{i + 1}</span>
                    <h4 className="font-heading text-[15px] font-semibold" style={{ color: "var(--color-primary-950)" }}>{step.title}</h4>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS FLOW DIAGRAM ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-secondary-200) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
              Detailed Flow
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
              Process Flow Diagram
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary-500)" }} />
              <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
            </div>
          </div>

          {/* ── DESKTOP FLOW ── */}
          <div className="hidden lg:block">
            {/* Row 1: Main processing line */}
            <div className="flex items-center justify-center gap-0 mb-3">
              {[
                { icon: Cpu, label: "E-Waste", sub: "Reception & Logging", delay: 0, type: "process" },
                { icon: Scale, label: "Weighing", sub: "& Inspection", delay: 0.1, type: "process" },
                { icon: Wrench, label: "Manual", sub: "Dismantling", delay: 0.2, type: "process" },
                { icon: SlidersHorizontal, label: "Primary", sub: "Shredder", delay: 0.3, type: "separation" },
                { icon: Magnet, label: "Magnetic", sub: "Separation", delay: 0.4, type: "separation" },
              ].map((node, i, arr) => (
                <div key={node.label} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: node.delay, ease: [0.2, 0, 0, 1] }}
                    className="flow-node group relative flex flex-col items-center text-center"
                    style={{ width: "150px" }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative"
                      style={{
                        background: node.type === "separation"
                          ? "linear-gradient(135deg, var(--color-accent-700), var(--color-accent-500))"
                          : "linear-gradient(135deg, var(--color-primary-700), var(--color-primary-500))",
                        boxShadow: node.type === "separation"
                          ? "0 4px 20px rgba(57,217,0,0.2)"
                          : "0 4px 20px rgba(8,127,165,0.2)",
                      }}
                    >
                      <node.icon size={28} strokeWidth={1.6} className="text-white" />
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)",
                        }}
                      />
                    </div>
                    <p className="text-[13px] font-semibold leading-tight" style={{ color: "var(--color-primary-950)" }}>{node.label}</p>
                    <p className="text-[11px] leading-tight" style={{ color: "var(--color-secondary-500)" }}>{node.sub}</p>
                  </motion.div>

                  {i < arr.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: node.delay + 0.15 }}
                      className="flex items-center mx-1"
                      style={{ originX: 0 }}
                    >
                      <div className="w-8 h-0 flow-connector-light" />
                      <ArrowRight size={14} className="-ml-0.5 flow-arrow-pulse" style={{ color: "var(--color-accent-600)" }} />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Turn connector - down from Magnetic Separation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex justify-center mr-[-450px]"
            >
              <div className="flex flex-col items-center">
                <div className="w-0 h-6" style={{ borderLeft: "2px dashed var(--color-secondary-300)" }} />
                <ArrowDown size={14} className="-mt-0.5 flow-arrow-pulse" style={{ color: "var(--color-accent-600)" }} />
              </div>
            </motion.div>

            {/* Row 2: Second line (right to left) */}
            <div className="flex items-center justify-center gap-0 mt-1 mb-3">
              <div style={{ width: "150px" }} />
              <div className="mx-1" style={{ width: "46px" }} />
              {[
                { icon: Search, label: "Quality", sub: "Testing", delay: 0.8, type: "process" },
                { icon: FlaskConical, label: "Density", sub: "Sorting", delay: 0.7, type: "separation" },
                { icon: Zap, label: "Eddy Current", sub: "Separation", delay: 0.6, type: "separation" },
              ].map((node, i, arr) => (
                <div key={node.label} className="flex items-center">
                  {i > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0 }}
                      whileInView={{ opacity: 1, scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: node.delay + 0.1 }}
                      className="flex items-center mx-1 rotate-180"
                      style={{ originX: 1 }}
                    >
                      <div className="w-8 h-0 flow-connector-light" />
                      <ArrowRight size={14} className="-ml-0.5 flow-arrow-pulse" style={{ color: "var(--color-accent-600)" }} />
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: node.delay, ease: [0.2, 0, 0, 1] }}
                    className="flow-node group relative flex flex-col items-center text-center"
                    style={{ width: "150px" }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2.5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative"
                      style={{
                        background: node.type === "separation"
                          ? "linear-gradient(135deg, var(--color-accent-700), var(--color-accent-500))"
                          : "linear-gradient(135deg, var(--color-primary-700), var(--color-primary-500))",
                        boxShadow: node.type === "separation"
                          ? "0 4px 20px rgba(57,217,0,0.2)"
                          : "0 4px 20px rgba(8,127,165,0.2)",
                      }}
                    >
                      <node.icon size={28} strokeWidth={1.6} className="text-white" />
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "radial-gradient(circle at center, rgba(255,255,255,0.15), transparent 70%)" }}
                      />
                    </div>
                    <p className="text-[13px] font-semibold leading-tight" style={{ color: "var(--color-primary-950)" }}>{node.label}</p>
                    <p className="text-[11px] leading-tight" style={{ color: "var(--color-secondary-500)" }}>{node.sub}</p>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Output divider */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="flex justify-center mt-2 mb-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-0 h-8" style={{ borderLeft: "2px dashed var(--color-secondary-300)" }} />
                <span className="text-[10px] font-mono uppercase tracking-wider" style={{ color: "var(--color-secondary-400)" }}>Material Outputs</span>
                <div className="flex-1 h-0" style={{ borderTop: "1px solid var(--color-secondary-200)", minWidth: "200px" }} />
              </div>
            </motion.div>

            {/* Output material cards */}
            <div className="grid grid-cols-6 gap-4 mt-2">
              {[
                { icon: Magnet, label: "Fe Metals", sub: "Iron, Steel", color: "signal", delay: 1.0 },
                { icon: CircuitBoard, label: "Non-Fe Metals", sub: "Cu, Al, Ni, etc.", color: "signal", delay: 1.1 },
                { icon: FlaskConical, label: "Leachate", sub: "Collection & Treatment", color: "primary", delay: 1.2 },
                { icon: Container, label: "Storage Drums", sub: "Segregated Materials", color: "signal", delay: 1.3 },
                { icon: Flame, label: "TSDF Disposal", sub: "or Incineration", color: "red", delay: 1.4 },
                { icon: TrendingUp, label: "Secondary Raw Material", sub: "Back to Market", color: "accent", delay: 1.5 },
              ].map((out) => {
                const colors = {
                  signal: { bg: "var(--color-signal-50)", border: "var(--color-signal-300)", icon: "var(--color-signal-600)", text: "var(--color-signal-700)", sub: "var(--color-signal-600)" },
                  primary: { bg: "var(--color-primary-50)", border: "var(--color-primary-300)", icon: "var(--color-primary-600)", text: "var(--color-primary-700)", sub: "var(--color-primary-500)" },
                  red: { bg: "#FEF2F2", border: "#FCA5A5", icon: "#DC2626", text: "#B91C1C", sub: "#DC2626" },
                  accent: { bg: "var(--color-accent-50)", border: "var(--color-accent-400)", icon: "var(--color-accent-600)", text: "var(--color-accent-700)", sub: "var(--color-accent-600)" },
                };
                const c = colors[out.color];
                return (
                  <motion.div
                    key={out.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: out.delay }}
                    className="group bg-white rounded-xl p-4 text-center border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ borderColor: c.border, borderStyle: out.color === "accent" ? "solid" : "dashed" }}
                  >
                    <div className="flex justify-center mb-2.5">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: c.bg }}
                      >
                        <out.icon size={20} strokeWidth={1.8} style={{ color: c.icon }} />
                      </div>
                    </div>
                    <p className="text-xs font-bold leading-tight" style={{ color: c.text }}>{out.label}</p>
                    <p className="text-[10px] mt-0.5" style={{ color: c.sub, opacity: 0.7 }}>{out.sub}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-8 mt-10 pt-6" style={{ borderTop: "1px solid var(--color-secondary-200)" }}>
              {[
                { color: "linear-gradient(135deg, var(--color-primary-700), var(--color-primary-500))", label: "Processing Stage" },
                { color: "linear-gradient(135deg, var(--color-accent-700), var(--color-accent-500))", label: "Separation Stage" },
                { color: "var(--color-signal-300)", label: "Material Output", dashed: true },
                { color: "#FCA5A5", label: "Hazardous Disposal", dashed: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <div
                    className="w-4 h-4 rounded"
                    style={{
                      background: item.dashed ? "transparent" : item.color,
                      border: item.dashed ? `2px dashed ${item.color}` : "none",
                    }}
                  />
                  <span className="text-[11px]" style={{ color: "var(--color-secondary-500)" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── MOBILE/TABLET FLOW ── */}
          <div className="lg:hidden space-y-0">
            {[
              { icon: Cpu, label: "E-Waste Reception & Logging", type: "process" },
              { icon: Scale, label: "Weighing & Inspection", type: "process" },
              { icon: Wrench, label: "Manual Dismantling", type: "process" },
              { icon: SlidersHorizontal, label: "Primary Shredder", type: "separation" },
              { icon: Magnet, label: "Magnetic Separation", type: "separation" },
              { icon: Zap, label: "Eddy Current Separation", type: "separation" },
              { icon: FlaskConical, label: "Density Sorting", type: "separation" },
              { icon: Search, label: "Quality Testing", type: "process" },
            ].map((item, i, arr) => (
              <div key={item.label}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white border"
                  style={{
                    borderColor: item.type === "separation" ? "var(--color-accent-200)" : "var(--color-primary-200)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: item.type === "separation"
                        ? "linear-gradient(135deg, var(--color-accent-700), var(--color-accent-500))"
                        : "linear-gradient(135deg, var(--color-primary-700), var(--color-primary-500))",
                    }}
                  >
                    <item.icon size={20} strokeWidth={1.6} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-bold" style={{ color: "var(--color-accent-600)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold" style={{ color: "var(--color-primary-950)" }}>{item.label}</span>
                  </div>
                </motion.div>
                {i < arr.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown size={14} style={{ color: "var(--color-accent-400)" }} className="opacity-50" />
                  </div>
                )}
              </div>
            ))}

            <div className="pt-6">
              <p className="font-mono text-[10px] uppercase tracking-wider mb-3 text-center" style={{ color: "var(--color-secondary-400)" }}>Material Outputs</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Magnet, label: "Fe Metals", sub: "Iron, Steel", color: "signal" },
                  { icon: CircuitBoard, label: "Non-Fe Metals", sub: "Cu, Al, Ni", color: "signal" },
                  { icon: FlaskConical, label: "Leachate", sub: "Collection", color: "primary" },
                  { icon: Container, label: "Storage Drums", sub: "Segregated", color: "signal" },
                  { icon: Flame, label: "TSDF Disposal", sub: "Incineration", color: "red" },
                  { icon: TrendingUp, label: "Raw Material", sub: "to Market", color: "accent" },
                ].map((out) => {
                  const c = {
                    signal: { bg: "var(--color-signal-50)", border: "var(--color-signal-300)", icon: "var(--color-signal-600)", text: "var(--color-signal-700)" },
                    primary: { bg: "var(--color-primary-50)", border: "var(--color-primary-300)", icon: "var(--color-primary-600)", text: "var(--color-primary-700)" },
                    red: { bg: "#FEF2F2", border: "#FCA5A5", icon: "#DC2626", text: "#B91C1C" },
                    accent: { bg: "var(--color-accent-50)", border: "var(--color-accent-400)", icon: "var(--color-accent-600)", text: "var(--color-accent-700)" },
                  }[out.color];
                  return (
                    <motion.div
                      key={out.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2.5 p-3 rounded-lg bg-white border"
                      style={{ borderColor: c.border, borderStyle: "dashed" }}
                    >
                      <out.icon size={16} style={{ color: c.icon }} className="shrink-0" />
                      <div>
                        <p className="text-xs font-bold leading-tight" style={{ color: c.text }}>{out.label}</p>
                        <p className="text-[10px]" style={{ color: c.icon, opacity: 0.7 }}>{out.sub}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes arrowPulse {
            0%, 100% { opacity: 0.5; transform: translateX(0); }
            50% { opacity: 1; transform: translateX(3px); }
          }
          .flow-arrow-pulse {
            animation: arrowPulse 1.8s ease-in-out infinite;
          }
          .flow-connector-light {
            height: 2px;
            background-image: repeating-linear-gradient(
              90deg,
              transparent,
              transparent 4px,
              var(--color-secondary-300) 4px,
              var(--color-secondary-300) 8px
            );
            animation: connectorFlowLight 1.5s linear infinite;
          }
          @keyframes connectorFlowLight {
            0% { background-position: 0 0; }
            100% { background-position: 16px 0; }
          }
          .flow-node:hover ~ .flow-arrow-pulse {
            animation-play-state: paused;
          }
          @media (prefers-reduced-motion: reduce) {
            .flow-arrow-pulse { animation: none; opacity: 1; }
            .flow-connector-light { animation: none; }
          }
        `}</style>
      </section>

      {/* ── COLLECTION & LOGISTICS ── */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
                Pickup & Transport
              </p>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-5"
                style={{ color: "var(--color-primary-950)" }}
              >
                E-Waste Collection & Logistics
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={1}
                className="space-y-4 text-[15px] leading-relaxed"
                style={{ color: "var(--color-secondary-600)" }}
              >
                <p>
                  E-waste is collected from your premises in sealed, GPS-tracked vehicles under a valid transport manifest. Weighment is recorded at pickup and verified again at our facility gate - ensuring full accountability from the moment material leaves your hands.
                </p>
                <p>
                  We operate our own fleet of collection vehicles and maintain partnerships with authorised logistics providers to cover locations across Gujarat and beyond. Whether you're a corporate office disposing of 500 laptops or a household clearing out old electronics, we handle the logistics end to end.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Truck, label: "GPS-Tracked Fleet", sub: "Sealed transport with manifest" },
                  { icon: MapPin, label: "Pan-India Reach", sub: "Direct + partner logistics" },
                  { icon: Clock, label: "Scheduled Pickups", sub: "At your convenience" },
                  { icon: Phone, label: "Dedicated Support", sub: "Toll-free helpline" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3 p-3 rounded-lg border"
                    style={{ borderColor: "var(--color-secondary-100)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--color-primary-50)" }}
                    >
                      <item.icon size={18} strokeWidth={1.8} style={{ color: "var(--color-primary-700)" }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--color-primary-950)" }}>{item.label}</p>
                      <p className="text-xs" style={{ color: "var(--color-secondary-500)" }}>{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src="/images/E-Waste-Collection-Logistics.jpg"
                alt="E-waste collection and transport"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ background: "linear-gradient(to top, rgba(0,26,43,0.85), transparent)" }}
              >
                <p className="font-mono text-xs text-white/70 uppercase tracking-wider">Secure Collection</p>
                <p className="text-sm text-white mt-1">Sealed, manifest-based transport across India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── HAZARDOUS SUBSTANCES ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
              Safety First
            </p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4"
              style={{ color: "var(--color-primary-950)" }}
            >
              Treatment of Hazardous Substances
            </motion.h2>
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
              Electronic waste contains substances that are toxic to humans and the environment. We carefully separate and dispose of every hazardous fraction per CPCB guidelines - never dumped in landfills.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: "Lead", symbol: "Pb", risk: "Nervous system disorders", source: "Solder, CRT monitors, batteries" },
              { name: "Mercury", symbol: "Hg", risk: "Neuro & groundwater contamination", source: "Flat-screen displays, switches" },
              { name: "Cadmium", symbol: "Cd", risk: "Carcinogenic on exposure", source: "Batteries, circuit boards, coatings" },
              { name: "PVC", symbol: "PVC", risk: "Releases chlorinated dioxins", source: "Wire & cable insulation" },
              { name: "BFR", symbol: "BFR", risk: "Endocrine disruptors", source: "Plastic casings, circuit boards" },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative rounded-xl p-5 bg-white border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ borderColor: "var(--color-secondary-200)" }}
              >
                <span
                  className="absolute -right-2 -top-3 font-heading font-bold text-[72px] leading-none select-none pointer-events-none"
                  style={{ color: "var(--color-secondary-100)" }}
                >
                  {item.symbol}
                </span>

                <div className="relative">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 font-heading text-sm font-bold"
                    style={{ backgroundColor: "var(--color-primary-50)", color: "var(--color-primary-700)", border: "1px solid var(--color-primary-200)" }}
                  >
                    {item.symbol}
                  </div>
                  <h4 className="text-base font-semibold mb-1.5" style={{ color: "var(--color-primary-950)" }}>{item.name}</h4>
                  <p className="text-xs font-medium mb-2" style={{ color: "var(--color-secondary-700)" }}>{item.risk}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-500)" }}>
                    Found in: {item.source}
                  </p>
                </div>

                <div
                  className="mt-4 pt-3 flex items-center gap-1.5 text-xs font-medium"
                  style={{ borderTop: "1px solid var(--color-secondary-100)", color: "var(--color-accent-600)" }}
                >
                  <ShieldCheck size={12} />
                  Safely separated & disposed
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs mt-8"
            style={{ color: "var(--color-secondary-500)" }}
          >
            All hazardous fractions are channelled to CPCB-authorised downstream processors with full documentation
          </motion.p>
        </div>
      </section>

      {/* ── DATA SECURITY & DESTRUCTION ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5" style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}>
                <Lock size={14} style={{ color: "var(--color-primary-700)" }} />
                <span className="font-mono text-xs uppercase tracking-[0.09em]" style={{ color: "var(--color-primary-700)" }}>Confidentiality</span>
              </div>

              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4" style={{ color: "var(--color-primary-950)" }}>
                Data Security &{" "}
                <span style={{ color: "var(--color-accent-600)" }}>Destruction</span>
              </h2>
              <p className="text-[15px] leading-relaxed mb-4" style={{ color: "var(--color-secondary-600)" }}>
                When electronic equipment is retired, the data it carries doesn't disappear with a factory reset. Hard drives, SSDs, tapes and mobile devices retain recoverable information that can expose organisations to data breaches, regulatory penalties and reputational damage.
              </p>
              <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--color-secondary-600)" }}>
                Advait Green takes complete responsibility for destroying all embedded data. Every device is logged by serial number, and you receive a Certificate of Data Destruction listing each unit processed.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--color-primary-700)" }}
              >
                Talk to Us About Data Destruction <ArrowRight size={15} />
              </Link>
            </motion.div>

            {/* Right - Methods grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Boxes,
                  title: "Physical Shredding",
                  desc: "Devices reduced to irrecoverable fragments through industrial-grade shredders",
                  accent: "var(--color-primary-700)",
                },
                {
                  icon: Magnet,
                  title: "Degaussing",
                  desc: "Magnetic media rendered permanently unreadable via high-intensity electromagnetic field",
                  accent: "var(--color-accent-600)",
                },
                {
                  icon: SlidersHorizontal,
                  title: "NIST 800-88 Wiping",
                  desc: "Multi-pass overwrite with verification - compliant with global data destruction standards",
                  accent: "var(--color-primary-700)",
                },
                {
                  icon: Eye,
                  title: "Witnessed Destruction",
                  desc: "On-site or CCTV-monitored destruction room with restricted access for high-security needs",
                  accent: "var(--color-accent-600)",
                },
              ].map((method, i) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl p-5 border transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{ borderColor: "var(--color-secondary-100)", backgroundColor: "var(--color-secondary-50)" }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `color-mix(in srgb, ${method.accent} 10%, transparent)` }}
                  >
                    <method.icon size={22} strokeWidth={1.6} style={{ color: method.accent }} />
                  </div>
                  <h4 className="text-sm font-semibold mb-1.5" style={{ color: "var(--color-primary-950)" }}>
                    {method.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-500)" }}>
                    {method.desc}
                  </p>
                </motion.div>
              ))}

              {/* Compliance badge spanning full width */}
              <div
                className="col-span-2 flex items-center gap-4 rounded-xl px-5 py-4 border"
                style={{ backgroundColor: "var(--color-primary-50)", borderColor: "var(--color-primary-200)" }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "var(--color-primary-700)" }}>
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-primary-950)" }}>
                    Compliant with IT Act, RBI, SEBI & HIPAA
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-secondary-500)" }}>
                    Serial-level tracking · Certificate of Data Destruction · Chain-of-custody documentation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY ADVAIT GREEN ── */}
      <WhyAdvaitGreen
        title="Why Advait Green for"
        highlight="E-Waste Recycling"
        desc="CPCB and GPCB authorised processing at our own facility — with asset-level reporting and certificates issued for every consignment."
        stats={statCards}
      />

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

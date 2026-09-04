"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Eye, Search, Lock, BarChart3, Target, Recycle, Users, TreePine, GraduationCap, Wrench, Cpu, Zap, Factory, Truck, CheckCircle, ChevronRight, FileCheck, Headset, MapPin, Building2, Scale, Quote,
} from "lucide-react";
import { services } from "@/data/services";
import HorizontalShowcase from "@/components/sections/HorizontalShowcase";

const values = [
  { icon: ShieldCheck, title: "Legitimacy First", desc: "We only do what our authorisations permit us to do. No exceptions, whatever the tonnage." },
  { icon: Eye, title: "Traceability", desc: "Every kilogram that enters our gate can be accounted for on its way out." },
  { icon: Lock, title: "Safety", desc: "PPE, training and handling protocols are not overheads; they are the licence to operate." },
  { icon: Search, title: "Transparency", desc: "Our clients see the recovery logic behind our pricing." },
  { icon: BarChart3, title: "Continuous Recovery", desc: "Every process line is reviewed against one question: what are we still losing?" },
];


const infrastructure = [
  {
    icon: Cpu,
    title: "E-Waste Line",
    desc: "Skilled hands take each device apart before anything is shredded, so hazardous components and high-value boards are removed while they are still intact.",
    items: ["Manual de-manufacturing bays", "Primary shredder", "Magnetic & eddy-current separation", "Density-based sorting", "PCB segregation & storage"],
  },
  {
    icon: Recycle,
    title: "Plastic Line",
    desc: "Sorting, washing and granulation in one continuous run, with every batch tested before it leaves the gate as production-grade material.",
    items: ["Sorting conveyor", "Washing & drying unit", "Granulator & agglomerator", "Batch-wise quality testing"],
  },
  {
    icon: Zap,
    title: "Battery & Solar",
    desc: "Kept physically apart from every other stream. Cells are discharged and dismantled in a dedicated area before channelling to authorised downstream processors.",
    items: ["Dedicated segregated storage", "Discharge & dismantling area", "Authorised downstream channelling"],
  },
  {
    icon: Factory,
    title: "Support Infrastructure",
    desc: "The equipment that makes the paperwork true — weighed at the gate, filmed in transit, and recorded from arrival to certificate.",
    items: ["Electronic weighbridge", "CCTV-covered material movement", "Hazardous storage zones", "Data destruction room", "GPS-tracked collection vehicles"],
  },
];


const csr = [
  { icon: GraduationCap, title: "Awareness Drives", desc: "At schools, colleges and residential societies on household e-waste segregation." },
  { icon: Users, title: "Collection Camps", desc: "With corporate partners, RWAs and municipal bodies." },
  { icon: Wrench, title: "Skill Training", desc: "For informal sector workers transitioning into formal recycling roles." },
  { icon: TreePine, title: "Facility Greening", desc: "Tree plantation and environmental restoration at our facility." },
];

/**
 * Background media for the Vision & Mission band. Set to null to remove it.
 * The supplied artwork is light, so the band is styled light: dark type on a
 * soft white veil rather than white type on a dark one.
 */
const visionMissionBg = "/images/backgorund-img.webp";

const visionPoints = [
  "A resource economy where reaching end-of-life is a stage in a material's journey — never the end of it.",
  "Formal, authorised recycling at a scale that makes informal handling the exception in India, not the norm.",
  "Compliance that proves itself — every tonne traceable from the weighbridge to the certificate.",
];

const missionPoints = [
  "Give every waste generator a formal, fully documented and commercially fair channel for what they retire.",
  "Recover the maximum from each consignment and send the minimum to landfill — measured, never estimated.",
  "Make compliance straightforward for producers and importers, and create safe, skilled work in the process.",
];

/** Service catalogue mapped onto the horizontal showcase's item shape. */
const serviceShowcase = services.map((svc) => ({
  icon: svc.icon,
  label: svc.title,
  desc: svc.summary,
  image: svc.image,
  href: svc.href,
}));



/** Quick facts shown beneath the "Who We Are" narrative. */
const whoWeAreFacts = [
  { icon: MapPin, label: "Vamaj, Mahesana", sub: "Gujarat, India" },
  { icon: ShieldCheck, label: "GPCB Authorised", sub: "E-waste & plastic waste" },
  { icon: Building2, label: "Private Limited", sub: "Incorporated 2019" },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Authorised, Not Just Available",
    desc: "Every stream we accept is covered by a valid CPCB or GPCB authorisation. If we are not permitted to handle something, we say so and point you to someone who is.",
  },
  {
    icon: Factory,
    title: "We Process It Ourselves",
    desc: "Material is recycled at our own facility, not brokered onward. That is why the certificates we issue can be traced back to a weighbridge slip and a processing batch.",
  },
  {
    icon: FileCheck,
    title: "Documentation as Standard",
    desc: "Manifests, certificates of recycling and data destruction, and quarterly filings are part of the service - not an extra you have to chase after the truck leaves.",
  },
  {
    icon: Scale,
    title: "Recovery-Based Pricing",
    desc: "Valuations are built from what we actually recover, and we show you the logic. No flat scrap rate that quietly keeps the upside on our side of the table.",
  },
  {
    icon: Headset,
    title: "One Point of Contact",
    desc: "A named account manager across every stream you hand us - e-waste, plastics, biomedical or solid waste - instead of four vendors and four escalation paths.",
  },
  {
    icon: Truck,
    title: "Pan-India Collection",
    desc: "GPS-tracked reverse logistics reaching single sites and distributed branch networks alike, with sealed transport and signed handover at every pickup.",
  },
];

const glanceStats = [
  { value: "2019", label: "Incorporated in Gujarat", icon: Building2 },
  { value: "8", label: "Waste Streams Handled", icon: Recycle },
  { value: "XXX+", label: "Organisations Served", icon: Users },
  { value: "Pan-India", label: "Collection Coverage", icon: MapPin },
];



/**
 * Rotating hero. Replaces the previous single stock photo, which showed a road
 * map and camera and had nothing to do with recycling.
 */
const heroSlides = [
  {
    image: "/images/E-West-Managment-2.webp",
    caption: "Skilled Manual De-Manufacturing",
  },
  {
    image: "/images/E-West-Managment-5.webp",
    caption: "Material Handling at Scale",
  },
  {
    image: "/images/E-West-Managment-1.webp",
    caption: "Recovering What Others Discard",
  },
];

/**
 * Infrastructure accordion. Opens on hover on pointer devices and on tap/click
 * everywhere else, so it still works on touch where hover does not exist.
 */
function InfrastructureAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {infrastructure.map((infra, i) => {
        const open = active === i;
        return (
          <div
            key={infra.title}
            onMouseEnter={() => setActive(i)}
            style={{ borderTop: "1px solid var(--color-secondary-200)" }}
            className={i === infrastructure.length - 1 ? "border-b" : ""}
          >
            <button
              type="button"
              onClick={() => setActive(open ? -1 : i)}
              aria-expanded={open}
              className="w-full flex items-center gap-4 py-5 sm:py-6 text-left cursor-pointer"
            >
              <ChevronRight
                size={18}
                className="shrink-0 transition-transform duration-300"
                style={{
                  color: open ? "var(--color-accent-600)" : "var(--color-secondary-400)",
                  transform: open ? "rotate(90deg)" : "rotate(0deg)",
                }}
                aria-hidden="true"
              />
              <span
                className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight transition-colors duration-300"
                style={{ color: open ? "var(--color-primary-950)" : "var(--color-secondary-700)" }}
              >
                {infra.title}
              </span>
              <infra.icon
                size={20}
                strokeWidth={1.6}
                className="ml-auto shrink-0 transition-opacity duration-300"
                style={{ color: "var(--color-primary-500)", opacity: open ? 1 : 0.35 }}
                aria-hidden="true"
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.34, ease: [0.2, 0, 0, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pl-[34px] pr-2 pb-6">
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-secondary-600)" }}>
                      {infra.desc}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {infra.items.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-xs"
                          style={{ borderColor: "var(--color-secondary-200)", color: "var(--color-secondary-700)" }}
                        >
                          <CheckCircle size={12} style={{ color: "var(--color-primary-500)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** Translucent card used by the Vision & Mission band. */
function GlassCard({ text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.45, delay: index * 0.09, ease: [0.2, 0, 0, 1] }}
      className="rounded-xl p-5 sm:p-6 flex items-center transition-all duration-300 hover:-translate-y-1"
      style={{
        backgroundColor: "rgba(255,255,255,0.72)",
        border: "1px solid var(--color-secondary-200)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow: "0 2px 6px rgba(1,63,93,0.05), 0 12px 30px rgba(1,63,93,0.06)",
        minHeight: "170px",
      }}
    >
      <p className="text-[13px] sm:text-sm leading-relaxed text-center w-full" style={{ color: "var(--color-secondary-700)" }}>
        {text}
      </p>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

export default function AboutPage() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const activeSlide = heroSlides[current];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        {/* Background — cross-fading slides */}
        <AnimatePresence mode="sync">
          <motion.img
            key={activeSlide.image}
            src={activeSlide.image}
            alt=""
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span style={{ color: "var(--color-accent-400)" }}>About Us</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] text-white/70 mb-3 sm:mb-4"
            >
              About Advait Green
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] sm:leading-[1.06] tracking-tight mb-4 sm:mb-5"
            >
              Built on a Simple Belief: Nothing Is Waste Until It Is Wasted.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-[52ch] mb-6 sm:mb-8"
            >
              An authorised recycling company built for India's next decade of electronic, plastic and battery waste.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/schedule-pickup"
                className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff" }}
              >
                Schedule a Free Pickup <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Slide indicators */}
            <div className="flex items-center gap-3 mt-10">
              <div className="flex gap-2">
                {heroSlides.map((slide, i) => (
                  <button
                    key={slide.image}
                    onClick={() => {
                      setCurrent(i);
                      clearInterval(timerRef.current);
                      timerRef.current = setInterval(() => {
                        setCurrent((prev) => (prev + 1) % heroSlides.length);
                      }, 6000);
                    }}
                    aria-label={`Show slide ${i + 1}: ${slide.caption}`}
                    aria-current={i === current}
                    className={`h-[3px] rounded-full transition-all duration-500 ${
                      i === current ? "w-10 bg-accent-400" : "w-5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeSlide.caption}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.09em] text-white/55"
                >
                  {activeSlide.caption}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 items-start lg:items-center">

            {/* ── Left: the narrative ── */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.09em] mb-4" style={{ color: "var(--color-accent-500)" }}>
                Who We Are
              </p>

              <motion.h2
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="font-heading text-[28px] sm:text-4xl lg:text-[3rem] font-semibold tracking-tight leading-[1.12] mb-4"
                style={{ color: "var(--color-primary-950)" }}
              >
                A Recycling Company Built for India's Next Decade of Waste
              </motion.h2>

              <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="font-heading text-base sm:text-lg font-bold mb-6"
                style={{ color: "var(--color-primary-700)" }}
              >
                CPCB &amp; GPCB Authorised Recycler From Mahesana, Gujarat
              </motion.p>

              <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
                className="text-[15px] sm:text-base leading-relaxed mb-5"
                style={{ color: "var(--color-secondary-700)" }}
              >
                Advait Green Recycling Private Limited was established with a clear intent — to build formal, traceable recycling capacity in a sector still dominated by informal handling.
              </motion.p>

              <motion.p
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
                className="text-[15px] sm:text-base leading-relaxed mb-6"
                style={{ color: "var(--color-secondary-700)" }}
              >
                Today we operate an integrated facility at Vamaj, Mahesana (Gujarat), authorised by the Gujarat Pollution Control Board to handle electronic waste and plastic waste. We serve organisations across India, from single-site SMEs to multi-location enterprises with quarterly decommissioning cycles.
              </motion.p>

              {/* The name's meaning — the brand's core idea */}
              <motion.blockquote
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={4}
                className="relative rounded-xl p-5 sm:p-6 overflow-hidden"
                style={{ backgroundColor: "var(--color-primary-700)" }}
              >
                <Quote
                  size={64}
                  strokeWidth={1}
                  className="absolute -top-1 -right-1 pointer-events-none"
                  style={{ color: "rgba(255,255,255,0.07)" }}
                  aria-hidden="true"
                />
                <p className="relative font-heading text-lg sm:text-xl leading-snug font-semibold" style={{ color: "#ffffff" }}>
                  Anyone can make waste disappear.{" "}
                  <span style={{ color: "var(--color-accent-400)" }}>
                    The work is proving where it went.
                  </span>
                </p>
              </motion.blockquote>
            </div>

            {/* ── Right: brand mark ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
              className="relative flex flex-col items-center justify-center px-6 py-10 lg:py-14"
              style={{ minHeight: "280px" }}
            >
              <img
                src="/images/ADVAIT_Logo.webp"
                alt="Advait Green Recycling Private Limited"
                className="relative w-[78%] max-w-[520px] object-contain"
              />

              <span
                className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-center"
                style={{ color: "var(--color-secondary-400)" }}
              >
                Incorporated 2019 · Vamaj, Mahesana
              </span>
            </motion.div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 lg:mt-14">
            {whoWeAreFacts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-xl border p-4"
                style={{ borderColor: "var(--color-secondary-200)", backgroundColor: "var(--color-secondary-50)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}
                >
                  <f.icon size={19} strokeWidth={1.7} style={{ color: "var(--color-primary-600)" }} />
                </div>
                <div>
                  <p className="text-[13px] font-semibold leading-tight" style={{ color: "var(--color-primary-950)" }}>{f.label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "var(--color-secondary-500)" }}>{f.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AT A GLANCE ── */}
      <section className="py-10 sm:py-12" style={{ backgroundColor: "var(--color-primary-900)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-[1100px] mx-auto">
            {glanceStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="text-center"
              >
                <stat.icon size={22} strokeWidth={1.6} className="mx-auto mb-3" style={{ color: "var(--color-accent-400)" }} />
                <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-1.5" style={{ color: "#ffffff" }}>
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm leading-snug" style={{ color: "var(--color-primary-200)" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ADVAIT GREEN ── */}
      <section className="py-14 sm:py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* Floating white panel — matches the homepage "Why Choose Us" band */}
          <div
            className="rounded-[24px] sm:rounded-[32px] bg-white px-5 sm:px-10 lg:px-16 py-12 sm:py-14 lg:py-20"
            style={{ boxShadow: "0 2px 6px rgba(1,63,93,0.05), 0 20px 50px rgba(1,63,93,0.07)" }}
          >
            <div className="text-center max-w-[860px] mx-auto mb-12 lg:mb-16">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-mono text-xs uppercase tracking-[0.09em] mb-4"
                style={{ color: "var(--color-accent-500)" }}
              >
                Why Advait Green
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 }}
                className="font-heading text-[26px] sm:text-4xl lg:text-[2.9rem] font-semibold tracking-tight leading-[1.14]"
                style={{ color: "var(--color-primary-950)" }}
              >
                What Actually{" "}
                <span style={{ color: "var(--color-accent-600)" }}>Separates Us</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="text-sm sm:text-base leading-relaxed mt-5"
                style={{ color: "var(--color-secondary-600)" }}
              >
                None of these are positioning statements. Each one shows up somewhere a client can check it — on a certificate, in a weighbridge record, or from the person whose name is on the manifest.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-11 lg:gap-y-14 max-w-[1080px] mx-auto">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.08, ease: [0.2, 0, 0, 1] }}
                  className="group flex flex-col items-center text-center"
                >
                  <div
                    className="w-[68px] h-[68px] sm:w-[74px] sm:h-[74px] rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md"
                    style={{
                      backgroundColor: "var(--color-primary-50)",
                      border: "1px solid var(--color-primary-100)",
                    }}
                  >
                    <item.icon
                      size={30}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ color: "var(--color-primary-600)" }}
                    />
                  </div>

                  <h4
                    className="font-heading text-[17px] font-bold tracking-tight mb-2.5"
                    style={{ color: "var(--color-primary-950)" }}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="text-sm leading-relaxed max-w-[300px]"
                    style={{ color: "var(--color-secondary-600)" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
        {/* Background media slot — renders only when visionMissionBg is set */}
        {visionMissionBg && (
          <img
            src={visionMissionBg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Light veil — keeps type legible over the busier corners of the artwork */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ backgroundColor: "rgba(255,255,255,0.42)" }} />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 space-y-12 lg:space-y-20">

          {/* ── Vision: heading left, cards right ── */}
          <div className="grid lg:grid-cols-[0.85fr_2fr] gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
            >
              <div
                className="relative w-[76px] h-[76px] sm:w-[86px] sm:h-[86px] rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, var(--color-primary-50) 100%)",
                  border: "1px solid var(--color-primary-200)",
                  boxShadow: "0 2px 6px rgba(1,63,93,0.06), 0 14px 34px rgba(1,63,93,0.10)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)" }}
                />
                <Eye size={38} strokeWidth={1.5} style={{ color: "var(--color-primary-600)" }} />
              </div>
              <h3 className="font-heading text-[38px] sm:text-5xl lg:text-[4.1rem] font-semibold tracking-tight leading-[1.02]" style={{ color: "var(--color-primary-950)" }}>
                Our Vision
              </h3>
              <p className="font-heading text-lg sm:text-xl mt-4" style={{ color: "var(--color-accent-600)" }}>
                A Circular Economy, Made Practical
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
              {visionPoints.map((text, i) => (
                <GlassCard key={i} index={i} text={text} />
              ))}
            </div>
          </div>

          {/* ── Mission: cards left, heading right ── */}
          <div className="grid lg:grid-cols-[2fr_0.85fr] gap-8 lg:gap-12 items-center">
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-5 order-2 lg:order-1">
              {missionPoints.map((text, i) => (
                <GlassCard key={i} index={i} text={text} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
              className="order-1 lg:order-2 lg:text-right"
            >
              <div
                className="relative w-[76px] h-[76px] sm:w-[86px] sm:h-[86px] rounded-2xl flex items-center justify-center mb-6 lg:ml-auto"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, var(--color-accent-50) 100%)",
                  border: "1px solid var(--color-accent-200)",
                  boxShadow: "0 2px 6px rgba(22,168,0,0.07), 0 14px 34px rgba(22,168,0,0.12)",
                }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)" }}
                />
                <Target size={38} strokeWidth={1.5} style={{ color: "var(--color-accent-600)" }} />
              </div>
              <h3 className="font-heading text-[38px] sm:text-5xl lg:text-[4.1rem] font-semibold tracking-tight leading-[1.02]" style={{ color: "var(--color-primary-950)" }}>
                Our Mission
              </h3>
              <p className="font-heading text-lg sm:text-xl mt-4" style={{ color: "var(--color-accent-600)" }}>
                Documented Recovery, Every Consignment
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "var(--color-primary-950)" }}>
        {/* Faint grid texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative">
          {/* Heading — left aligned, display scale */}
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-10 lg:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs uppercase tracking-[0.09em] mb-4"
              style={{ color: "var(--color-accent-400)" }}
            >
              What Guides Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.06, ease: [0.2, 0, 0, 1] }}
              className="font-heading text-[34px] sm:text-5xl lg:text-[4rem] font-semibold tracking-tight leading-[1.04] text-white max-w-[16ch]"
            >
              Our Core Values
            </motion.h2>
          </div>

          {/* Card rail — duplicated once and translated -50%, so it loops seamlessly */}
          <div className="relative">
            <div className="overflow-hidden marquee-rail">
              <div className="flex gap-4 sm:gap-5 w-max marquee-x pb-2">
                {[...values, ...values].map((val, i) => (
                  <article
                    key={`${val.title}-${i}`}
                    aria-hidden={i >= values.length}
                    className="group relative shrink-0 rounded-2xl p-7 sm:p-8 flex flex-col overflow-hidden transition-colors duration-300 hover:border-white/30 w-[270px] sm:w-[320px] lg:w-[340px]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.14)",
                      minHeight: "380px",
                    }}
                  >
                    {/* Soft fill that warms the card on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(420px circle at 50% 0%, rgba(57,217,0,0.10), transparent 70%)",
                      }}
                    />
                    <val.icon
                      size={40}
                      strokeWidth={1.1}
                      className="relative transition-transform duration-300 group-hover:-translate-y-1"
                      style={{ color: "var(--color-accent-400)" }}
                    />

                    <h3 className="relative font-heading text-xl sm:text-2xl font-semibold text-white mt-8 mb-4 leading-tight">
                      {val.title}
                    </h3>

                    <p className="relative text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.62)" }}>
                      {val.desc}
                    </p>

                    <span
                      aria-hidden="true"
                      className="relative mt-auto mb-0 block h-px w-10 transition-all duration-300 group-hover:w-20"
                      style={{ backgroundColor: "var(--color-accent-500)" }}
                    />
                  </article>
                ))}
              </div>
            </div>

            {/* Edge fades on both sides */}
            <div
              aria-hidden="true"
              className="hidden sm:block absolute inset-y-0 left-0 w-16 lg:w-28 pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--color-primary-950), transparent)" }}
            />
            <div
              aria-hidden="true"
              className="hidden sm:block absolute inset-y-0 right-0 w-16 lg:w-28 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--color-primary-950), transparent)" }}
            />
          </div>

          <p
            className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-5 font-mono text-[11px] uppercase tracking-[0.09em]"
            style={{ color: "rgba(255,255,255,0.32)" }}
          >
            Hover to pause
          </p>

        </div>
      </section>

      {/* ── INFRASTRUCTURE ── */}
      <section className="py-14 sm:py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-10 lg:gap-16 items-start">

            {/* Left: heading */}
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.09em] mb-4" style={{ color: "var(--color-accent-500)" }}>
                Capability
              </p>
              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.2, 0, 0, 1] }}
                className="font-heading text-[32px] sm:text-4xl lg:text-[3.2rem] font-semibold tracking-tight leading-[1.06] mb-5"
                style={{ color: "var(--color-primary-950)" }}
              >
                Infrastructure &amp; Facility
              </motion.h2>
              <p className="text-[15px] sm:text-base leading-relaxed max-w-[42ch]" style={{ color: "var(--color-secondary-600)" }}>
                Engineered for recovery, not just disposal — different fractions need different treatment to retain their value.
              </p>
            </div>

            {/* Right: hover-to-open accordion */}
            <InfrastructureAccordion />
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <HorizontalShowcase
        eyebrow="What We Do"
        title="Seven Streams, One Authorisation Trail"
        items={serviceShowcase}
      />

      {/* ── CSR ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>Giving Back</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
              CSR & Community
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-[1000px] mx-auto">
            {csr.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: "var(--color-primary-700)" }}>
                  <item.icon size={24} strokeWidth={1.5} className="sm:!w-7 sm:!h-7" style={{ color: "#ffffff" }} />
                </div>
                <h4 className="font-heading text-sm font-bold mb-1.5" style={{ color: "var(--color-primary-700)" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 sm:py-14 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "var(--color-primary-950)" }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-4 max-w-[600px] mx-auto" style={{ color: "#ffffff" }}>
            Ready to Recycle Responsibly?
          </h2>
          <p className="text-sm sm:text-base max-w-[520px] mx-auto mb-8 leading-relaxed" style={{ color: "var(--color-secondary-400)" }}>
            Tell us what you have and where it is. We'll come back within one working day with a collection plan and an indicative valuation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/schedule-pickup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
              style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
            >
              Schedule a Free Pickup <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

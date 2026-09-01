"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Cpu, Leaf, ShieldCheck, TrendingUp, Truck, FileCheck,
  Zap, Factory, Building2, GraduationCap, Landmark, ShoppingCart,
  Stethoscope, Smartphone, Recycle, CheckCircle,
  ClipboardCheck, PackageCheck, Wrench, RotateCcw, Award,
} from "lucide-react";
import { services } from "@/data/services";

const heroSlides = [
  {
    eyebrow: "E-Waste Recycling",
    title: "Recover the Metal.",
    highlight: "Spare the Mountain.",
    desc: "Every discarded laptop, server and handset holds recoverable gold, copper and rare earths. We extract them responsibly — so the earth doesn't have to be dug up again.",
    cta: { label: "Explore E-Waste Recycling", href: "/services/e-waste" },
  },
  {
    eyebrow: "Plastic Waste",
    title: "Plastic Was Never Meant",
    highlight: "to Be a One-Way Journey.",
    desc: "We collect, sort, granulate and return plastic waste to the production line — closing the loop for brands serious about their EPR obligations.",
    cta: { label: "Explore Plastic Recycling", href: "/services/plastic-waste" },
  },
  {
    eyebrow: "Compliance / EPR",
    title: "Compliance, Documented.",
    highlight: "Impact, Verified.",
    desc: "From EPR registration to certificate generation, we handle the paperwork behind your sustainability promise — audit-ready, every quarter.",
    cta: { label: "EPR Services", href: "/services/epr" },
  },
];

const trustBadges = [
  { label: "CPCB Registered Recycler", icon: ShieldCheck },
  { label: "GPCB Authorisation", icon: FileCheck },
  { label: "ISO 9001:2015", icon: CheckCircle },
  { label: "ISO 14001:2015", icon: Leaf },
  { label: "ISO 45001:2018", icon: ShieldCheck },
];

const valueCards = [
  {
    icon: Recycle,
    title: "What Is Waste Management?",
    desc: "Waste management is the discipline of collecting, transporting, treating and recovering material that has reached the end of its first useful life — safely, legally, and with the maximum possible value returned to the economy.",
  },
  {
    icon: Leaf,
    title: "Why Recycling Matters",
    desc: "Recycling one tonne of circuit boards recovers more gold than 17 tonnes of mined ore. Recovery isn't charity for the planet — it is the cheaper, cleaner, and increasingly the only legal way to source secondary raw material.",
  },
  {
    icon: TrendingUp,
    title: "The Business Case",
    desc: "Beyond compliance, recycling reduces landfill liability, protects brand reputation, unlocks scrap value from written-off assets, and delivers the documented evidence your ESG and CSR reporting now demands.",
  },
];



const impactStats = [
  { label: "E-waste processed annually", value: "XXX", unit: "MT" },
  { label: "Plastic waste recycled monthly", value: "XXX", unit: "MT/Mo" },
  { label: "Metal & material recovered daily", value: "X,XXX", unit: "kg" },
  { label: "Waste diverted from landfill", value: "XX", unit: "%" },
  { label: "Corporate clients served", value: "XXX", unit: "+" },
  { label: "CO2e emissions avoided", value: "X,XXX", unit: "T" },
];

const processSteps = [
  { num: "01", title: "Assess", icon: ClipboardCheck, desc: "We audit your waste stream, categorise it under the applicable rules, and quote against actual recoverable value." },
  { num: "02", title: "Collect", icon: PackageCheck, desc: "Sealed, GPS-tracked transport under a valid manifest. Weighment recorded at pickup and at gate entry." },
  { num: "03", title: "Sort & Dismantle", icon: Wrench, desc: "Manual de-manufacturing followed by mechanical segregation into ferrous, non-ferrous, plastics, glass, PCB and hazardous fractions." },
  { num: "04", title: "Recover", icon: RotateCcw, desc: "Shredding, density separation and metal recovery lines return clean secondary raw material to industry." },
  { num: "05", title: "Certify", icon: Award, desc: "You receive a Certificate of Recycling, a Certificate of Data Destruction where applicable, and quarterly EPR filing support." },
];

const whyChoose = [
  { icon: ShieldCheck, title: "Fully Authorised", desc: "Every consignment moves and is treated under valid CPCB/SPCB authorisation, so your liability actually transfers." },
  { icon: Leaf, title: "Zero Landfill", desc: "Our target is complete diversion of processed material from landfill — nothing we process ends up in the ground." },
  { icon: FileCheck, title: "Audit-Ready Docs", desc: "Manifests, weighbridge slips, destruction certificates and Form-wise records, issued as standard." },
  { icon: ShieldCheck, title: "Data Security", desc: "Chain-of-custody sealing and witnessed destruction available for regulated industries." },
  { icon: TrendingUp, title: "Transparent Valuation", desc: "You see the recovery basis behind every buyback number we quote — no hidden margins." },
  { icon: Recycle, title: "Single Partner", desc: "E-waste, plastic, battery and compliance handled by one accountable team — one contract, one point of contact." },
];

const sectors = [
  { icon: Cpu, label: "IT & ITES", image: "/images/IT-ITES.png" },
  { icon: Building2, label: "Banking & Financial Services", image: "/images/banking.png" },
  { icon: Factory, label: "Manufacturing & Automotive", image: "/images/manufactring-automotive.png" },
  { icon: Stethoscope, label: "Pharmaceuticals & Healthcare", image: "/images/pharma-healthcare.png" },
  { icon: Smartphone, label: "Telecom & Data Centres", image: "/images/telecom-data.png" },
  { icon: GraduationCap, label: "Educational Institutions", image: "/images/educational-institute.png" },
  { icon: Landmark, label: "Government & PSUs", image: "/images/goverment-psu.png" },
  { icon: ShoppingCart, label: "Retail & E-Commerce", image: "/images/retail-e-commrace.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

function ServiceCard({ svc, index }) {
  const [flipped, setFlipped] = useState(false);
  const isDark = index % 2 === 1;

  const handleTap = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
      className={`svc-flip${flipped ? " flipped" : ""}${svc.wide ? " lg:col-span-2" : ""}`}
      onClick={handleTap}
      style={{ perspective: "1000px", cursor: "pointer" }}
    >
      <Link href={svc.href} className="block" style={{ textDecoration: "none" }}>
        <div className="svc-flip-inner relative" style={{ height: "300px" }}>
          {/* ── Front Face ── */}
          <div
            className="svc-flip-front absolute inset-0 rounded-xl p-7 lg:p-8 flex flex-col justify-between"
            style={{ backgroundColor: isDark ? "var(--color-primary-700)" : "#E4EBE6" }}
          >
            <div>
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "var(--color-primary-100)" }}
              >
                <svc.icon size={24} strokeWidth={1.8} style={{ color: isDark ? "var(--color-primary-100)" : "var(--color-primary-700)" }} />
              </div>
              <h3
                className="font-heading text-lg font-semibold tracking-tight leading-snug mb-3"
                style={{ color: isDark ? "#ffffff" : "var(--color-primary-950)" }}
              >
                {svc.title}
              </h3>
              <div className="w-8 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-400)" }} />
            </div>
            <div className="mt-auto pt-6">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: isDark ? "var(--color-primary-100)" : "var(--color-primary-700)" }}
              >
                Know More <ArrowRight size={16} />
              </span>
            </div>
          </div>

          {/* ── Back Face ── */}
          <div
            className="svc-flip-back rounded-xl"
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
            }}
          >
            {svc.image ? (
              <img
                src={svc.image}
                alt={svc.title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div
                className="flex items-center justify-center"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: isDark ? "var(--color-primary-900)" : "var(--color-primary-100)",
                }}
              >
                <svc.icon size={40} strokeWidth={1.4} style={{ color: isDark ? "var(--color-primary-100)" : "var(--color-primary-700)" }} />
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SectorCard({ sector, index }) {
  const [flipped, setFlipped] = useState(false);
  const isDark = index % 2 === 1;

  const handleTap = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.2, 0, 0, 1] }}
      className={`svc-flip${flipped ? " flipped" : ""}`}
      onClick={handleTap}
      style={{ perspective: "1000px", cursor: "pointer" }}
    >
      <div className="svc-flip-inner relative" style={{ height: "220px" }}>
        {/* Front */}
        <div
          className="svc-flip-front absolute inset-0 rounded-xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between"
          style={{ backgroundColor: isDark ? "var(--color-primary-700)" : "#E4EBE6" }}
        >
          <div>
            <div
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center mb-3 sm:mb-4"
              style={{ backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "var(--color-primary-100)" }}
            >
              <sector.icon size={22} strokeWidth={1.8} style={{ color: isDark ? "var(--color-primary-100)" : "var(--color-primary-700)" }} />
            </div>
            <h3
              className="font-heading text-sm sm:text-[15px] font-semibold tracking-tight leading-snug mb-2 sm:mb-2.5"
              style={{ color: isDark ? "#ffffff" : "var(--color-primary-950)" }}
            >
              {sector.label}
            </h3>
            <div className="w-7 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-400)" }} />
          </div>
        </div>

        {/* Back */}
        <div
          className="svc-flip-back rounded-xl"
          style={{ position: "absolute", inset: 0, overflow: "hidden" }}
        >
          {sector.image ? (
            <img
              src={sector.image}
              alt={sector.label}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div
              className="flex items-center justify-center"
              style={{ width: "100%", height: "100%", backgroundColor: isDark ? "var(--color-primary-900)" : "var(--color-primary-100)" }}
            >
              <sector.icon size={40} strokeWidth={1.4} style={{ color: isDark ? "var(--color-primary-100)" : "var(--color-primary-700)" }} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
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
      {/* ── HERO ── */}
      <section className="relative h-screen bg-primary-950 overflow-hidden flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/Home_Hero_bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 py-20 lg:py-0 w-full">
          <div className="max-w-[640px]">
            <motion.p
              key={`eyebrow-${currentSlide}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-xs uppercase tracking-[0.09em] text-white/70 mb-4"
            >
              {slide.eyebrow}
            </motion.p>
            <motion.h1
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.06] tracking-tight mb-5"
            >
              {slide.title}{" "}
              <span style={{ color: "var(--color-accent-400)" }}>{slide.highlight}</span>
            </motion.h1>
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-base lg:text-lg leading-relaxed max-w-[52ch] mb-8"
            >
              {slide.desc}
            </motion.p>
            <motion.div
              key={`cta-${currentSlide}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href={slide.cta.href}
                className="inline-flex items-center gap-2 bg-accent-600 hover:bg-accent-700 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff" }}
              >
                {slide.cta.label} <ArrowRight size={15} />
              </Link>
              <Link
                href="/schedule-pickup"
                className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Schedule a Free Pickup
              </Link>
            </motion.div>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-12">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentSlide(i);
                  clearInterval(intervalRef.current);
                }}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  i === currentSlide ? "w-10 bg-accent-400" : "w-5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white border-b border-secondary-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.09em] mb-5" style={{ color: "var(--color-secondary-700)" }}>
            Authorised & Certified
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--color-primary-50)" }}>
                  <badge.icon size={18} style={{ color: "var(--color-primary-500)" }} />
                </div>
                <span className="text-sm font-medium" style={{ color: "var(--color-secondary-800)" }}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="bg-secondary-50 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-[740px] mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-[0.09em] text-accent-500 mb-3">Who We Are</p>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-950 tracking-tight mb-5"
            >
              A Recycling Company Built for India's Next Decade of Waste
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
              className="text-secondary-600 leading-relaxed mb-6"
            >
              India generates over 1.7 million tonnes of electronic waste every year, and less than a third reaches a formal recycling channel. Advait Green Recycling exists to change that ratio. We are a GPCB authorised recycler processing electronic waste, plastic waste, battery waste and industrial scrap through mechanical and chemical recovery lines.
            </motion.p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
            >
              About Advait Green <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUE CARDS ── */}
      <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
        {/* Subtle ambient background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute rounded-full opacity-[0.04]"
            style={{
              width: "600px", height: "600px",
              background: "radial-gradient(circle, var(--color-primary-500) 0%, transparent 70%)",
              top: "-10%", left: "-8%",
              animation: "ambientDrift 25s ease-in-out infinite",
            }}
          />
          <div
            className="absolute rounded-full opacity-[0.03]"
            style={{
              width: "500px", height: "500px",
              background: "radial-gradient(circle, var(--color-primary-500) 0%, transparent 70%)",
              bottom: "-15%", right: "-5%",
              animation: "ambientDrift 30s ease-in-out infinite reverse",
            }}
          />
          <div
            className="absolute rounded-full opacity-[0.02]"
            style={{
              width: "350px", height: "350px",
              background: "radial-gradient(circle, var(--color-accent-500) 0%, transparent 70%)",
              top: "30%", right: "20%",
              animation: "ambientDrift 22s ease-in-out infinite 5s",
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {valueCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.14,
                  ease: [0.2, 0, 0, 1],
                }}
                className="value-card group relative bg-secondary-50 border border-secondary-100 rounded-lg p-7 lg:p-8 transition-all duration-[350ms] ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-secondary-200 overflow-hidden"
              >
                {/* Hover radial glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] pointer-events-none"
                  style={{
                    background: "radial-gradient(circle at 30% 20%, rgba(14,116,144,0.05) 0%, transparent 60%)",
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: i === 0 ? -90 : i === 1 ? -30 : 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.14 + 0.15,
                    ease: [0.2, 0, 0, 1],
                  }}
                  className="relative w-10 h-10 rounded-md flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: "var(--color-primary-50)" }}
                >
                  <card.icon size={20} style={{ color: "var(--color-primary-700)" }} />
                </motion.div>

                <h3 className="relative font-heading text-lg font-semibold mb-2.5 tracking-tight" style={{ color: "var(--color-primary-950)" }}>
                  {card.title}
                </h3>
                <p className="relative text-sm leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes ambientDrift {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(15px, -20px) scale(1.05); }
            66% { transform: translate(-10px, 12px) scale(0.97); }
          }
          @media (prefers-reduced-motion: reduce) {
            .value-card { transition: none !important; }
            .value-card:hover { transform: none !important; }
          }
        `}</style>
      </section>

      {/* ── SERVICES (Flip Cards) ── */}
      <section className="py-16 lg:py-24 relative overflow-hidden" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        {/* Globe background image */}
        <div
          className="hidden lg:block pointer-events-none select-none"
          style={{
            position: "absolute",
            top: 0,
            left: "60%",
            transform: "translateX(-50%)",
            width: "100%",
            maxWidth: "1300px",
            height: "100%",
            zIndex: 0,
          }}
        >
          <img
            src="/images/transparent-bg.png"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "10px",
              right: "30px",
              width: "600px",
              height: "600px",
              objectFit: "contain",
              opacity: 0.12,
            }}
          />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6" style={{ zIndex: 1 }}>
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>What We Do</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.75rem] font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
              Our Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((svc, i) => (
              <ServiceCard key={svc.slug} svc={svc} index={i} />
            ))}
          </div>
        </div>

        <style jsx global>{`
          .svc-flip-inner {
            transition: transform 700ms cubic-bezier(0.4, 0, 0.2, 1);
            transform-style: preserve-3d;
          }
          .svc-flip:hover .svc-flip-inner,
          .svc-flip.flipped .svc-flip-inner {
            transform: rotateY(180deg);
          }
          .svc-flip-front,
          .svc-flip-back {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          .svc-flip-back {
            transform: rotateY(180deg);
          }
          @media (prefers-reduced-motion: reduce) {
            .svc-flip-inner { transition: none !important; }
          }
        `}</style>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="bg-primary-950 py-16 lg:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.09em] text-accent-400 mb-3">Our Impact</p>
            <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Numbers That Matter
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="text-center"
              >
                <p className="font-mono text-3xl lg:text-4xl font-bold text-white tabular-nums tracking-tight">
                  {stat.value}
                  <span className="text-lg text-secondary-400 ml-1 font-medium">{stat.unit}</span>
                </p>
                <p className="text-sm text-secondary-400 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS (Workflow) ── */}
      <section className="bg-white py-16 lg:py-28 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>How It Works</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
              Our Process
            </h2>
          </div>

          {/* ── Desktop (lg+) ── */}
          <div className="hidden lg:block">
            <div className="relative mx-auto" style={{ maxWidth: "960px" }}>
              {/* Steps grid */}
              <div className="grid grid-cols-5">
                {processSteps.map((step, i) => {
                  const isTop = i % 2 === 0;
                  const arcRotations = [-100, -10, -160, 40, -120];
                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="flex flex-col items-center text-center px-2"
                    >
                      {/* Top text area */}
                      <div className="flex flex-col justify-end px-1" style={{ height: "120px", paddingBottom: "18px" }}>
                        {isTop && (
                          <>
                            <h4 className="font-heading text-[15px] font-bold leading-tight mb-1.5" style={{ color: "var(--color-primary-950)" }}>
                              {step.title}
                            </h4>
                            <p className="text-[11.5px] leading-[1.6]" style={{ color: "var(--color-secondary-600)" }}>
                              {step.desc}
                            </p>
                          </>
                        )}
                      </div>

                      {/* Circle with accent arc */}
                      <div className="relative" style={{ width: "105px", height: "105px" }}>
                        <svg viewBox="0 0 105 105" className="w-full h-full">
                          <circle cx="52.5" cy="55" r="46" fill="rgba(4,30,38,0.05)" />
                          <circle cx="52.5" cy="52.5" r="46" fill="#ffffff" />
                          <circle cx="52.5" cy="52.5" r="46" fill="none" stroke="var(--color-secondary-100)" strokeWidth="2.5" />
                          <circle
                            cx="52.5" cy="52.5" r="46" fill="none"
                            stroke="var(--color-accent-400)" strokeWidth="4.5"
                            strokeDasharray="82 207" strokeLinecap="round"
                            style={{ transform: `rotate(${arcRotations[i]}deg)`, transformOrigin: "52.5px 52.5px" }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: "-2.5px" }}>
                          <step.icon size={34} strokeWidth={1.5} style={{ color: "var(--color-primary-700)" }} />
                        </div>
                      </div>

                      {/* Bottom text area */}
                      <div className="flex flex-col justify-start px-1" style={{ height: "120px", paddingTop: "18px" }}>
                        {!isTop && (
                          <>
                            <h4 className="font-heading text-[15px] font-bold leading-tight mb-1.5" style={{ color: "var(--color-primary-950)" }}>
                              {step.title}
                            </h4>
                            <p className="text-[11.5px] leading-[1.6]" style={{ color: "var(--color-secondary-600)" }}>
                              {step.desc}
                            </p>
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Connecting arcs SVG overlay */}
              <svg
                className="absolute left-0 w-full pointer-events-none"
                style={{ top: "120px", height: "105px" }}
                viewBox="0 0 960 105"
                fill="none"
              >
                {[0, 1, 2, 3].map((idx) => {
                  const cx = [96, 288, 480, 672, 864];
                  const r = 50;
                  const x1 = cx[idx] + r;
                  const x2 = cx[idx + 1] - r;
                  const y = 52.5;
                  const isUp = idx % 2 === 0;
                  const cpY = isUp ? -5 : 110;
                  return (
                    <g key={idx}>
                      <path
                        d={`M ${x1} ${y} C ${x1 + 20} ${cpY}, ${x2 - 20} ${cpY}, ${x2} ${y}`}
                        stroke="var(--color-primary-700)" strokeWidth="2" strokeDasharray="6 4" opacity="0.35"
                      />
                      <circle cx={x1 + 2} cy={y} r="3.5" fill="var(--color-accent-400)" />
                      <circle cx={x2 - 2} cy={y} r="3.5" fill="var(--color-accent-400)" />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* ── Mobile / Tablet (< lg) ── */}
          <div className="lg:hidden max-w-[420px] mx-auto space-y-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="relative shrink-0" style={{ width: "64px", height: "64px" }}>
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <circle cx="32" cy="33" r="28" fill="rgba(4,30,38,0.05)" />
                    <circle cx="32" cy="32" r="28" fill="#fff" />
                    <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-secondary-100)" strokeWidth="2" />
                    <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-accent-400)" strokeWidth="3"
                      strokeDasharray="50 126" strokeLinecap="round"
                      style={{ transform: "rotate(-90deg)", transformOrigin: "32px 32px" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: "-1px" }}>
                    <step.icon size={24} strokeWidth={1.6} style={{ color: "var(--color-primary-700)" }} />
                  </div>
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold mb-0.5" style={{ color: "var(--color-primary-950)" }}>
                    {step.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>Why Advait Green</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
              Why Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-[1000px] mx-auto">
            {whyChoose.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div
                  className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-5"
                  style={{ backgroundColor: "var(--color-primary-700)" }}
                >
                  <item.icon size={34} strokeWidth={1.5} style={{ color: "#ffffff" }} />
                </div>
                {/* Title */}
                <h4
                  className="font-heading text-base font-bold tracking-tight mb-2"
                  style={{ color: "var(--color-primary-700)" }}
                >
                  {item.title}
                </h4>
                {/* Description */}
                <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: "var(--color-secondary-600)" }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTORS ── */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>Industries</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.75rem] font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
              Sectors We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-2 lg:gap-5">
            {sectors.map((sector, i) => (
              <SectorCard key={sector.label} sector={sector} index={i} />
            ))}
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

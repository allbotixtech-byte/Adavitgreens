"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Eye, Search, Lock, BarChart3,
  Target, Recycle, Users, TreePine, GraduationCap, Wrench,
  Cpu, Zap, Factory, Truck, CheckCircle, ChevronRight,
} from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Legitimacy First", desc: "We only do what our authorisations permit us to do. No exceptions, whatever the tonnage." },
  { icon: Eye, title: "Traceability", desc: "Every kilogram that enters our gate can be accounted for on its way out." },
  { icon: Lock, title: "Safety", desc: "PPE, training and handling protocols are not overheads; they are the licence to operate." },
  { icon: Search, title: "Transparency", desc: "Our clients see the recovery logic behind our pricing." },
  { icon: BarChart3, title: "Continuous Recovery", desc: "Every process line is reviewed against one question: what are we still losing?" },
];

const timeline = [
  { year: "2019", event: "Advait Green Recycling incorporated at Mahesana, Gujarat." },
  { year: "2020", event: "GPCB authorisation received for e-waste collection, dismantling and recycling." },
  { year: "2021", event: "First processing facility commissioned at Vamaj, Mahesana." },
  { year: "2022", event: "Plastic waste recycling line added; PWM authorisation obtained." },
  { year: "2023", event: "CPCB EPR registration; EPR advisory vertical launched." },
  { year: "2024", event: "ISO 9001, 14001 and 45001 certifications achieved." },
  { year: "2025", event: "Battery and solar module waste handling capability commissioned." },
  { year: "2026", event: "GST registered. Continued expansion of processing capacity and client base." },
];

const infrastructure = [
  { icon: Cpu, title: "E-Waste Line", items: ["Manual de-manufacturing bays", "Primary shredder", "Magnetic & eddy-current separation", "Density-based sorting", "PCB segregation & storage"] },
  { icon: Recycle, title: "Plastic Line", items: ["Sorting conveyor", "Washing & drying unit", "Granulator & agglomerator", "Batch-wise quality testing"] },
  { icon: Zap, title: "Battery & Solar", items: ["Dedicated segregated storage", "Discharge & dismantling area", "Authorised downstream channelling"] },
  { icon: Factory, title: "Support Infrastructure", items: ["Electronic weighbridge", "CCTV-covered material movement", "Hazardous storage zones", "Data destruction room", "GPS-tracked collection vehicles"] },
];

const certifications = [
  { name: "CPCB EPR Registration", icon: ShieldCheck },
  { name: "GPCB Consent to Operate", icon: ShieldCheck },
  { name: "E-Waste Management Authorisation", icon: CheckCircle },
  { name: "Plastic Waste Management Authorisation", icon: CheckCircle },
  { name: "ISO 9001:2015", icon: CheckCircle },
  { name: "ISO 14001:2015", icon: CheckCircle },
  { name: "ISO 45001:2018", icon: CheckCircle },
  { name: "GST: 24ABECA2823M1ZQ", icon: ShieldCheck },
];

const csr = [
  { icon: GraduationCap, title: "Awareness Drives", desc: "At schools, colleges and residential societies on household e-waste segregation." },
  { icon: Users, title: "Collection Camps", desc: "With corporate partners, RWAs and municipal bodies." },
  { icon: Wrench, title: "Skill Training", desc: "For informal sector workers transitioning into formal recycling roles." },
  { icon: TreePine, title: "Facility Greening", desc: "Tree plantation and environmental restoration at our facility." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        {/* Background Image */}
        <img
          src="/images/about_hero_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span style={{ color: "#CC7C4A" }}>About Us</span>
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
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#F4F6F3" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-[800px] mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "#B4682F" }}>Who We Are</p>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-6"
              style={{ color: "#08201A" }}
            >
              A Recycling Company Built for India's Next Decade of Waste
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-base leading-relaxed mb-5" style={{ color: "#47524B" }}
            >
              Advait Green Recycling Private Limited was established with a clear intent — to build formal, traceable recycling capacity in a sector still dominated by informal handling.
            </motion.p>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="text-base leading-relaxed mb-5" style={{ color: "#47524B" }}
            >
              The name <em>Advait</em> means "not two" — the idea that industry and environment are not opposing interests. A recycling business that isn't commercially sound will not survive to protect anything; a recycling business that isn't environmentally rigorous doesn't deserve to.
            </motion.p>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
              className="text-base leading-relaxed" style={{ color: "#47524B" }}
            >
              Today we operate an integrated facility at Vamaj, Mahesana (Gujarat), authorised by the Gujarat Pollution Control Board to handle electronic waste and plastic waste. We serve organisations across India, from single-site SMEs to multi-location enterprises with quarterly decommissioning cycles.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 max-w-[1000px] mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-xl p-6 sm:p-8 lg:p-10"
              style={{ backgroundColor: "#184E3E" }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <Eye size={24} style={{ color: "#D6E9E0" }} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: "#ffffff" }}>Our Vision</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#ADD2C2" }}>
                A resource economy where end-of-life is simply a stage in a material's life — not the end of it.
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="rounded-xl p-6 sm:p-8 lg:p-10"
              style={{ backgroundColor: "#E4EBE6" }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ backgroundColor: "#D6E9E0" }}>
                <Target size={24} style={{ color: "#184E3E" }} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4" style={{ color: "#08201A" }}>Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Provide waste generators with a formal, fully documented and commercially fair recycling channel.",
                  "Maximise material recovery and minimise residue to landfill on every consignment.",
                  "Make regulatory compliance straightforward for producers, importers and brand owners.",
                  "Create safe, skilled and dignified employment in the recycling sector.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: "#47524B" }}>
                    <CheckCircle size={16} className="shrink-0 mt-0.5" style={{ color: "#184E3E" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#F4F6F3" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "#B4682F" }}>What Guides Us</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "#08201A" }}>
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-[1100px] mx-auto">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full flex items-center justify-center mb-3 sm:mb-4"
                  style={{ backgroundColor: "#184E3E" }}
                >
                  <val.icon size={24} strokeWidth={1.5} className="sm:!w-7 sm:!h-7" style={{ color: "#ffffff" }} />
                </div>
                <h4 className="font-heading text-sm font-bold mb-1.5" style={{ color: "#184E3E" }}>{val.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#5C6961" }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "#B4682F" }}>Milestones</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "#08201A" }}>
              Our Journey
            </h2>
          </div>
          <div className="max-w-[700px] mx-auto relative">
            <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px" style={{ backgroundColor: "#D6E9E0" }} />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 sm:gap-5 mb-6 sm:mb-8 last:mb-0 relative"
              >
                <div
                  className="shrink-0 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-full flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold relative z-10"
                  style={{ backgroundColor: "#184E3E", color: "#ffffff" }}
                >
                  {item.year.slice(2)}
                </div>
                <div className="pt-2.5">
                  <span className="font-heading text-sm font-bold" style={{ color: "#08201A" }}>{item.year}</span>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "#5C6961" }}>{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INFRASTRUCTURE ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#F4F6F3" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "#B4682F" }}>Capability</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "#08201A" }}>
              Infrastructure & Facility
            </h2>
            <p className="text-sm mt-3 max-w-[500px] mx-auto" style={{ color: "#5C6961" }}>
              Engineered for recovery, not just disposal — different fractions need different treatment to retain their value.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-[1000px] mx-auto">
            {infrastructure.map((infra, i) => {
              const isDark = i % 2 === 1;
              return (
                <motion.div
                  key={infra.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl p-7"
                  style={{ backgroundColor: isDark ? "#184E3E" : "#E4EBE6" }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: isDark ? "rgba(255,255,255,0.12)" : "#D6E9E0" }}
                  >
                    <infra.icon size={22} strokeWidth={1.8} style={{ color: isDark ? "#D6E9E0" : "#184E3E" }} />
                  </div>
                  <h3 className="font-heading text-base font-semibold mb-3" style={{ color: isDark ? "#ffffff" : "#08201A" }}>
                    {infra.title}
                  </h3>
                  <div className="w-7 h-[3px] rounded-full mb-4" style={{ backgroundColor: "#CC7C4A" }} />
                  <ul className="space-y-2">
                    {infra.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: isDark ? "#ADD2C2" : "#47524B" }}>
                        <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: isDark ? "#CC7C4A" : "#184E3E" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "#B4682F" }}>Trust & Compliance</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "#08201A" }}>
              Certifications & Authorisations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-[1000px] mx-auto">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-xl p-4 sm:p-5 flex sm:flex-col items-center sm:text-center gap-3 sm:gap-0"
                style={{ backgroundColor: "#EDF5F1", border: "1px solid #D6E9E0" }}
              >
                <div className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center sm:mb-3" style={{ backgroundColor: "#D6E9E0" }}>
                  <cert.icon size={18} style={{ color: "#184E3E" }} />
                </div>
                <p className="text-xs font-semibold leading-snug" style={{ color: "#08201A" }}>{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PEOPLE ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#F4F6F3" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "#B4682F" }}>Our Team</p>
            <motion.h2
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-6"
              style={{ color: "#08201A" }}
            >
              The People Behind Every Tonne
            </motion.h2>
            <motion.p
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-base leading-relaxed" style={{ color: "#47524B" }}
            >
              Behind every tonne processed is a team of dismantlers, line operators, drivers, compliance officers and coordinators. We invest in them because manual de-manufacturing is skilled work, and skilled work deserves training, protective equipment, health checks and a career path.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── CSR ── */}
      <section className="py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "#B4682F" }}>Giving Back</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "#08201A" }}>
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
                <div className="w-[56px] h-[56px] sm:w-[70px] sm:h-[70px] rounded-full flex items-center justify-center mb-3 sm:mb-4" style={{ backgroundColor: "#184E3E" }}>
                  <item.icon size={24} strokeWidth={1.5} className="sm:!w-7 sm:!h-7" style={{ color: "#ffffff" }} />
                </div>
                <h4 className="font-heading text-sm font-bold mb-1.5" style={{ color: "#184E3E" }}>{item.title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: "#5C6961" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-12 sm:py-14 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "#08201A" }}>
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
          <p className="text-sm sm:text-base max-w-[520px] mx-auto mb-8 leading-relaxed" style={{ color: "#9AA69D" }}>
            Tell us what you have and where it is. We'll come back within one working day with a collection plan and an indicative valuation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/schedule-pickup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
              style={{ backgroundColor: "#995427", color: "#fff" }}
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

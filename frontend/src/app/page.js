"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Leaf,
  BarChart3,
  Eye,
  Recycle,
  Building2,
  Cpu,
  Server,
  Lock,
  FileCheck2,
  Sparkles,
  Quote,
  Star,
  Factory,
  Globe2,
  FileText,
  Copy,
  Check,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";
import ProcessStepper from "@/components/sections/ProcessStepper";
import CounterSection from "@/components/sections/CounterSection";
import IndustryCard from "@/components/sections/IndustryCard";
import FAQAccordion from "@/components/sections/FAQAccordion";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { homeFAQ } from "@/data/faq";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopyGST = () => {
    navigator.clipboard.writeText("24ABECA2823M1ZQ");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* SECTION 1: HERO */}
      <HeroSection
        eyebrow="RESPONSIBLE RECYCLING &bull; RESOURCE RECOVERY &bull; CIRCULAR ECONOMY"
        heading="Turning Waste Into Resources. Building a Greener Future."
        description="At ADVAIT GREEN RECYCLING PRIVATE LIMITED, we provide responsible recycling and waste-management solutions designed to recover valuable resources, reduce environmental impact and help businesses manage their end-of-life materials responsibly."
        primaryCTA={{ label: "Schedule a Pickup", href: "/schedule-pickup" }}
        secondaryCTA={{ label: "Explore Our Services", href: "/services" }}
        supportingLine="Responsible handling. Maximum resource recovery. Transparent traceability."
      />

      {/* SECTION 2: INTRODUCTION (NATURAL 2-COLUMN STORY & SHOWCASE) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="mb-4">
                <span className="eyebrow">A Smarter Approach to Recycling</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary-950 mb-6 leading-tight tracking-tight">
                Waste is not the end of a product&apos;s life. It is the beginning of a new resource cycle.
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-4 font-normal">
                Every year, businesses and consumers generate large volumes of discarded electronics, electrical equipment, IT assets and other recyclable materials.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4 font-normal">
                The challenge is not simply collecting waste. The real opportunity lies in managing it responsibly, recovering valuable resources, protecting sensitive information and ensuring that recyclable materials return to the productive economy.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8 font-normal">
                ADVAIT GREEN RECYCLING PRIVATE LIMITED brings these requirements together through structured collection, certified processing, maximum recovery and complete auditable reporting.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-600 transition-colors group"
              >
                <span>Learn More About Our Facility & Mission</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Circular Economy Visual Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-primary-900 via-secondary-950 to-primary-950 text-white overflow-hidden shadow-2xl border border-primary-500/20">
                <div className="absolute -top-10 -right-10 w-60 h-60 bg-primary-500/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-primary-500/20 border border-primary-400/40 flex items-center justify-center">
                        <Recycle size={26} className="text-primary-400" />
                      </div>
                      <div>
                        <p className="font-heading font-bold text-lg text-white">Closed-Loop Recovery</p>
                        <p className="text-xs text-primary-300">Sustainable Material Flow</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-semibold border border-primary-500/30">
                      Zero Landfill Aim
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-xs text-industrial-400 uppercase tracking-wider mb-1">Recovery Rate</p>
                      <p className="font-heading text-2xl font-bold text-primary-300">95%+</p>
                      <p className="text-[11px] text-industrial-300 mt-1">Material diverted to recycling streams</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-xs text-industrial-400 uppercase tracking-wider mb-1">Compliance</p>
                      <p className="font-heading text-2xl font-bold text-primary-300">100%</p>
                      <p className="text-[11px] text-industrial-300 mt-1">Authorized handling and tracking</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-primary-950/60 border border-primary-500/30 flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-primary-400 shrink-0" />
                    <p className="text-xs text-primary-100 leading-snug">
                      Authorized by State Pollution Control Board for responsible handling and recovery.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES (CENTERED HEADING + FULL-WIDTH GRID) */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="What We Do"
            heading="End-to-End Recycling Solutions"
            description="We help organizations manage recyclable materials through a structured process designed around responsible handling, resource recovery, sustainability and transparency."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                href={`/services/${service.slug}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY RECYCLING MATTERS (NATURAL 2-COLUMN) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-secondary-950 via-industrial-900 to-secondary-950 text-white border border-industrial-800 shadow-xl">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/20 border border-primary-400/40 flex items-center justify-center mb-6">
                  <Leaf size={28} className="text-primary-400" />
                </div>
                <h3 className="text-white font-heading text-2xl font-bold mb-4">
                  The Sustainable Path Forward
                </h3>
                <p className="text-industrial-300 text-sm leading-relaxed mb-6 font-normal">
                  Our structured process transforms end-of-life electronic waste into valuable secondary resources:
                </p>
                <div className="space-y-3">
                  {[
                    { step: "01. Collection & Transport", desc: "Safe nationwide logistics from client facility" },
                    { step: "02. Sorting & Segregation", desc: "Categorization into distinct material fractions" },
                    { step: "03. Dismantling & Processing", desc: "Component-level separation and data sanitization" },
                    { step: "04. Resource Recovery", desc: "Extracting metals, polymers, and circuit components" },
                    { step: "05. Reintroduction", desc: "Returning raw materials to the circular manufacturing cycle" },
                  ].map((s, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-primary-400 mt-1.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-primary-200">{s.step}</p>
                        <p className="text-xs text-industrial-400">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp}>
              <div className="mb-4">
                <span className="eyebrow">The E-Waste Challenge</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary-950 mb-6 leading-tight tracking-tight">
                The World Is Producing More Waste. We Need Better Recovery.
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-4 font-normal">
                Rapid technological development has transformed how we work and live. Shorter device lifecycles and rapid hardware refreshes generate growing volumes of discarded electronics.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4 font-normal">
                When waste is handled improperly, valuable precious metals and engineering plastics are lost forever in landfills, and environmental risks multiply.
              </p>
              <p className="text-secondary-900 font-semibold mb-6">
                By choosing certified recycling, organizations protect data, comply with statutory EPR obligations, and lead the transition to a circular economy.
              </p>
              <Link
                href="/process"
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-600 transition-colors group"
              >
                <span>Explore Our 8-Step Processing Roadmap</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR APPROACH (CENTERED HEADING + 4-COLUMN GRID) */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Approach"
            heading="From Waste to Resource"
            description="At ADVAIT GREEN RECYCLING PRIVATE LIMITED, our approach focuses on maximizing responsible recovery while minimizing unnecessary disposal."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: "Responsible Collection",
                desc: "We organize safe, insured and structured movement of materials from your site to our processing plant.",
              },
              {
                icon: BarChart3,
                title: "Efficient Processing",
                desc: "Materials are inspected, categorized and dismantled according to strict technical safety requirements.",
              },
              {
                icon: Recycle,
                title: "Resource Recovery",
                desc: "Recoverable fractions (metals, copper, engineering plastics) are separated for re-use.",
              },
              {
                icon: Eye,
                title: "Transparent Reporting",
                desc: "Complete documentation, destruction certificates and green recycling audit reports are provided.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-industrial-200/80 text-center hover:border-primary-300 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-primary-200/60">
                    <item.icon size={26} className="text-primary-700" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary-950 mb-2.5 text-base">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: PROCESS (CENTERED HEADING + STEPPER) */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Process"
            heading="How Our Recycling Process Works"
            description="Every consignment follows a transparent, auditable 8-step journey from collection to recovery."
          />
          <ProcessStepper
            steps={[
              { title: "Request", description: "Submit a pickup or recycling inquiry with details on inventory and location." },
              { title: "Assessment", description: "Our team reviews material types, estimated weights, and compliance logistics." },
              { title: "Collection", description: "Materials are picked up securely via certified logistics partners." },
              { title: "Segregation", description: "Consignments are inspected, weighed, logged, and categorized by component." },
              { title: "Processing", description: "Equipment is systematically disassembled with high occupational safety." },
              { title: "Recovery", description: "Ferrous, non-ferrous metals and plastics are separated for secondary smelting." },
              { title: "Disposal", description: "Hazardous residues are neutralized via authorized disposal channels." },
              { title: "Documentation", description: "Green Recycling Certificates and destruction reports are issued." },
            ]}
          />
        </div>
      </section>

      {/* SECTION 7: IMPACT COUNTERS */}
      <CounterSection
        heading="Our Impact in Numbers"
        description="Every kilogram responsibly recovered represents virgin resources saved, carbon emissions diverted, and a step towards circular manufacturing."
        counters={[
          { value: 50, suffix: "+", label: "Enterprises Served" },
          { value: 100, suffix: "+ MT", label: "Material Recovered" },
          { value: 10, suffix: "+", label: "Logistics Hubs" },
          { value: 1, suffix: "+", label: "Years in Gujarat" },
          { value: 95, suffix: "%", label: "Recovery Efficiency" },
        ]}
      />

      {/* SECTION 8: INDUSTRIES */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Industries We Serve"
            heading="Recycling Solutions for Every Sector"
            description="From corporate IT parks to heavy manufacturing facilities, we customize waste management around your operational protocols."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: DATA DESTRUCTION (NATURAL 2-COLUMN) */}
      <section className="section-padding bg-gradient-to-br from-secondary-950 via-[#071911] to-secondary-950 text-white border-y border-white/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-950/80 border border-primary-500/40 text-primary-300 text-xs font-semibold uppercase tracking-[0.14em] shadow-glow mb-4">
                <Lock size={12} className="text-primary-400" />
                <span>Enterprise Data Security</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
                Your Data Should Never Become Someone Else&apos;s Data.
              </h2>
              <p className="text-industrial-300 leading-relaxed mb-4 font-normal">
                Retiring enterprise IT hardware is as much a cybersecurity requirement as a recycling challenge. Storage drives, magnetic media, servers, and employee workstations carry proprietary corporate records.
              </p>
              <p className="text-industrial-300 leading-relaxed mb-8 font-normal">
                ADVAIT GREEN RECYCLING PRIVATE LIMITED provides degaussing, physical shredding, and cryptographic wipe workflows accompanied by tamper-proof Certificates of Destruction.
              </p>
              <Link
                href="/services/data-destruction"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:from-primary-400 hover:to-primary-500 transition-all shadow-button"
              >
                <span>Discuss Secure Data Destruction</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex justify-center"
            >
              <div className="w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-br from-secondary-900 to-primary-950/80 rounded-full flex flex-col items-center justify-center border-2 border-primary-500/30 shadow-glow relative">
                <Shield size={90} className="text-primary-400 mb-3" strokeWidth={1.5} />
                <p className="font-heading font-bold text-white text-base">Certified Destruction</p>
                <p className="text-xs text-primary-300 font-mono mt-1">100% Non-Recoverable</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 10: EPR (NATURAL 2-COLUMN) */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8 border border-primary-200/80 shadow-card">
                <h4 className="font-heading font-bold text-secondary-950 text-xl mb-5 flex items-center gap-2">
                  <FileCheck2 size={22} className="text-primary-600" />
                  <span>Our EPR Support Includes:</span>
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3.5">
                  {[
                    "Collection Target Fulfillment",
                    "PAN-India Reverse Logistics",
                    "Material Aggregation & Weighing",
                    "CPCB / SPCB Portal Support",
                    "Traceable Recycling Documentation",
                    "Quarterly & Annual Compliance Returns",
                    "End-to-End Audit Trail",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-secondary-800">
                      <CheckCircle2 size={16} className="text-primary-600 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <div className="mb-4">
                <span className="eyebrow">Extended Producer Responsibility</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary-950 mb-6 leading-tight tracking-tight">
                Make Your EPR Compliance Seamless & Transparent.
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-4 font-normal">
                E-Waste Management Rules mandate that producers, brand owners, and importers fulfill designated collection targets annually.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-8 font-normal">
                We partner with brands to aggregate qualifying e-waste volumes, channel them through authorized recycling processes, and provide all necessary regulatory documentation.
              </p>
              <Link
                href="/services/epr"
                className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-600 transition-colors group"
              >
                <span>Talk to Our EPR Specialists</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 11: CIRCULAR ECONOMY (CENTERED HEADING + CENTERED COMPARISON CARDS) */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Circular Economy"
            heading="Keeping Resources in the Productive Loop"
            description="Moving away from the linear take-make-dispose model toward closed-loop material recovery that protects the environment."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-3xl p-8 border border-red-200/80 shadow-xs text-center flex flex-col justify-between">
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold uppercase tracking-wider mb-4">
                  Linear Model
                </span>
                <h3 className="font-heading font-bold text-secondary-950 text-lg mb-3">
                  Take &rarr; Make &rarr; Use &rarr; Dispose
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed font-normal">
                  Extracts finite virgin ores, manufactures products, and dumps them in landfills when discarded.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-primary-300 shadow-card text-center flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/10 rounded-full blur-xl pointer-events-none" />
              <div>
                <span className="inline-block px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-200">
                  Advait Closed-Loop Model
                </span>
                <h3 className="font-heading font-bold text-secondary-950 text-lg mb-3">
                  Use &rarr; Collect &rarr; Recover &rarr; Remake
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed font-normal">
                  Extracts refined secondary commodities back into production, minimizing carbon emissions and landfill burden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: SUSTAINABILITY (CENTERED HEADING + CENTERED 3 PILLARS) */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Sustainability"
            heading="Recycling With Purpose & Measurable Impact"
            description="Our recycling processes deliver tangible environmental protection, resource security, and auditable ESG compliance."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Environmental Value",
                desc: "Preventing hazardous heavy metals and toxins from leaching into soil and groundwater.",
                badge: "Eco Protection",
              },
              {
                title: "Resource Value",
                desc: "Recovering high-purity copper, aluminum, and engineering polymers to offset virgin mining.",
                badge: "Resource Security",
              },
              {
                title: "Corporate Value",
                desc: "Helping enterprise clients achieve ESG targets and meet statutory sustainability benchmarks.",
                badge: "ESG Leadership",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-industrial-200/80 shadow-xs hover:border-primary-300 hover:shadow-card transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold uppercase tracking-wider mb-4">
                    {item.badge}
                  </span>
                  <h3 className="font-heading font-bold text-secondary-950 text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 13: CERTIFICATIONS & GST (CENTERED HEADING + CENTERED VERIFIED GST CARD) */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Compliance & Legitimacy"
            heading="Authorized, Registered & State Verified"
            description="Responsible recycling requires legal standing, verified registrations, and rigorous process documentation."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-industrial-200/80 shadow-card"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-industrial-100">
              <div>
                <span className="text-xs text-primary-700 font-semibold uppercase tracking-wider block">Official Registration</span>
                <h4 className="font-heading font-bold text-xl text-secondary-950">
                  ADVAIT GREEN RECYCLING PRIVATE LIMITED
                </h4>
              </div>
              <button
                onClick={handleCopyGST}
                className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer hover:bg-emerald-100 transition-colors"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? "GSTIN Copied" : "Copy GSTIN"}</span>
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5 py-5 text-sm">
              <div className="p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                <span className="text-xs text-industrial-400 block mb-0.5 uppercase tracking-wide">GSTIN</span>
                <span className="font-mono font-bold text-secondary-900 text-base">24ABECA2823M1ZQ</span>
              </div>
              <div className="p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                <span className="text-xs text-industrial-400 block mb-0.5 uppercase tracking-wide">Company Constitution</span>
                <span className="font-semibold text-secondary-900">Private Limited Company</span>
              </div>
              <div className="p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                <span className="text-xs text-industrial-400 block mb-0.5 uppercase tracking-wide">Registration Status</span>
                <span className="font-semibold text-secondary-900">Effective from 27 March 2026</span>
              </div>
              <div className="p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                <span className="text-xs text-industrial-400 block mb-0.5 uppercase tracking-wide">Principal Facility</span>
                <span className="font-semibold text-secondary-900">Vamaj Road, Mahesana, Gujarat</span>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-center gap-2 text-xs text-primary-700 font-medium text-center">
              <CheckCircle2 size={15} />
              <span>Compliant with applicable environmental and waste-management guidelines.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 14: INFRASTRUCTURE (CENTERED HEADING + CENTERED 5-CARD GRID) */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Facility Architecture"
            heading="Built for Scale, Precision & Safety"
            description="Our plant on Vamaj Road, Mahesana is engineered with dedicated operational zones to handle large-scale enterprise consignments safely."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { title: "Material Receiving", desc: "Secure weighbridge & intake documentation" },
              { title: "Segregation Area", desc: "High-throughput sorting by material type" },
              { title: "Dismantling Line", desc: "Precision breakdown of electronics" },
              { title: "Material Recovery", desc: "Specialized separation of copper & plastics" },
              { title: "Storage & Dispatch", desc: "Safe warehousing for secondary commodities" },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 border border-industrial-200/80 shadow-xs hover:border-primary-300 transition-all text-center flex flex-col items-center justify-between"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-3 text-white font-heading font-bold text-sm shadow-button">
                  {index + 1}
                </div>
                <h4 className="font-heading font-semibold text-secondary-950 text-sm mb-1">
                  {area.title}
                </h4>
                <p className="text-xs text-secondary-500 leading-relaxed font-normal">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 15: WHY CHOOSE ADVAIT (CENTERED HEADING + CENTERED 6-CARD GRID) */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Advait Green"
            heading="Why Leading Organizations Choose Us"
            description="We combine technical recycling capability with business transparency, audited destruction records, and statutory compliance."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Responsible Handling", desc: "Strict adherence to safety standards and environmental regulations." },
              { num: "02", title: "End-to-End Execution", desc: "From corporate site pickup to final raw material recovery." },
              { num: "03", title: "Maximized Resource Value", desc: "Advanced segregation extracts maximum value for circular remaking." },
              { num: "04", title: "Guaranteed Data Security", desc: "Certified destruction protocols prevent hardware data exposure." },
              { num: "05", title: "Auditable Documentation", desc: "Full traceability with Green Certificates and regulatory filings." },
              { num: "06", title: "Dedicated Team", desc: "Experienced account managers supporting your corporate ESG targets." },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-industrial-200/80 shadow-xs hover:border-primary-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-2xl font-bold text-primary-600 block mb-2">
                    {item.num}
                  </span>
                  <h3 className="font-heading font-bold text-secondary-950 mb-2 text-base">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 16: TRUSTED CLIENT SECTORS (CENTERED HEADING + CENTERED GRID) */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <SectionHeading
            eyebrow="Client Trust"
            heading="Trusted Across Enterprise Sectors"
            description="We support leading organizations across IT, Manufacturing, BFSI, Healthcare and Telecom."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Building2, label: "IT & Software Parks" },
              { icon: Factory, label: "Manufacturing" },
              { icon: Server, label: "Data Centers" },
              { icon: Cpu, label: "Electronics Brands" },
              { icon: Globe2, label: "Telecom Networks" },
              { icon: Shield, label: "BFSI & Healthcare" },
            ].map((sector, i) => (
              <div key={i} className="p-5 rounded-2xl bg-industrial-50 border border-industrial-200/60 flex flex-col items-center justify-center hover:bg-primary-50/50 hover:border-primary-200 transition-colors">
                <sector.icon size={28} className="text-primary-600 mb-2.5" />
                <span className="text-xs font-semibold text-secondary-800 text-center">{sector.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 17: PARTNER TESTIMONIALS (CENTERED HEADING + CENTERED 3-CARD GRID) */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Partner Feedback"
            heading="What Organizations Say"
            description="Delivering prompt pickups, verified destruction certificates, and seamless EPR documentation."
          />
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote: "Advait Green managed our entire data center hardware refresh with meticulous serial tracking and provided destruction certificates within 48 hours.",
                author: "IT Infrastructure Head",
                company: "Regional Technology Enterprise, Ahmedabad",
              },
              {
                quote: "Their structured EPR collection fulfillment and transparent documentation simplified our annual SPCB compliance submission tremendously.",
                author: "Compliance Officer",
                company: "Consumer Electronics Brand",
              },
              {
                quote: "Professional logistics, punctual pickup teams, and full adherence to environmental handling standards. Highly recommended for corporate e-waste.",
                author: "Facility Operations Manager",
                company: "Industrial Manufacturing Group, Gujarat",
              },
            ].map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-industrial-200/80 shadow-xs flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-secondary-700 text-sm leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-industrial-100">
                  <p className="font-heading font-bold text-secondary-950 text-sm">{t.author}</p>
                  <p className="text-xs text-primary-700 font-medium">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 18: LATEST INSIGHTS (CENTERED HEADING + CENTERED 3-CARD GRID) */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Insights & Knowledge"
            heading="Perspectives on Recycling & Circular Economy"
            description="Stay informed on e-waste management regulations, data disposal protocols, and circular supply chains."
          />
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {[
              {
                title: "Understanding E-Waste Management Rules 2022 & EPR Targets",
                tag: "EPR Compliance",
                desc: "A practical guide for electronics manufacturers and importers on fulfilling statutory recycling quotas in India.",
              },
              {
                title: "Data Destruction vs. Physical Sanitization: Protecting Corporate Assets",
                tag: "Data Security",
                desc: "Why simple formatting fails and how certified degaussing and shredding protect enterprise confidentiality.",
              },
              {
                title: "The Economics of Resource Recovery in Commercial IT Hardware",
                tag: "Circular Economy",
                desc: "How structured ITAD programs transform decommissioned servers and laptops into valuable secondary materials.",
              },
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-industrial-200/80 shadow-xs hover:border-primary-300 hover:shadow-card transition-all flex flex-col justify-between text-left">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-3">
                    {post.tag}
                  </span>
                  <h3 className="font-heading font-bold text-secondary-950 text-base mb-2.5 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-secondary-600 leading-relaxed font-normal">
                    {post.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-industrial-100 flex items-center justify-between text-xs font-semibold text-primary-700">
                  <span>Read Insight</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-primary-700 font-semibold hover:text-primary-600 transition-colors"
            >
              <span>Browse All Educational Insights</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 19: FAQ (CENTERED HEADING + CENTERED ACCORDION) */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            heading="Clear Answers for Your Operations"
            description="Find fast answers regarding collection logistics, certified data destruction, statutory EPR compliance, and our Gujarat facility operations."
          />
          <div className="w-full max-w-3xl mx-auto">
            <FAQAccordion items={homeFAQ} />
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="inline-flex items-center gap-1.5 text-primary-700 text-sm font-semibold hover:text-primary-600 transition-colors"
              >
                <span>View All 20+ Frequently Asked Questions</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 20: CTA */}
      <CTABanner />
    </>
  );
}

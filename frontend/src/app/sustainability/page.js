"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, RefreshCw, ArrowDownCircle, Sprout, ShieldCheck, CheckCircle2, Globe2 } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const framework = [
  { icon: ArrowDownCircle, title: "01. Reduce", desc: "Assisting organizations in reducing unnecessary asset discard by identifying upgradeable components." },
  { icon: RefreshCw, title: "02. Recover", desc: "Extracting high-purity copper, aluminum, precious metals, and engineering polymers from circuit assemblies." },
  { icon: Recycle, title: "03. Reuse", desc: "Extending the operational lifecycle of functional hardware through refurbishment and secondary deployment." },
  { icon: Leaf, title: "04. Recycle", desc: "Transforming non-functional parts into secondary raw materials for green manufacturing." },
  { icon: Sprout, title: "05. Restore", desc: "Preventing soil and groundwater toxicity, reducing industrial carbon footprint, and nurturing local ecology." },
];

const goals = [
  { title: "Virgin Resource Conservation", desc: "Recovering metals that displace energy-intensive primary bauxite and copper mining.", metric: "1 MT e-waste = ~1.4 MT CO2 saved" },
  { title: "Zero Landfill Objective", desc: "Ensuring 95%+ of incoming material weight is redirected towards certified circular manufacturing.", metric: "95%+ Diversion Target" },
  { title: "Enterprise ESG Enablement", desc: "Equipping corporate partners with verifiable carbon avoidance metrics and green audit certificates.", metric: "100% Traceability" },
  { title: "Community Health & Safety", desc: "Eliminating unregulated backyard burning by establishing organized, licensed recovery channels in Gujarat.", metric: "Zero Hazardous Leakage" },
];

export default function SustainabilityPage() {
  return (
    <>
      <HeroSection
        eyebrow="SUSTAINABILITY COMMITMENT"
        heading="Creating Environmental Impact Beyond Compliance"
        description="Sustainability is not simply what we recycle—it is what we prevent from being lost, what we recover for future generations, and how we protect our planet."
        primaryCTA={{ label: "Schedule a Pickup", href: "/schedule-pickup" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
      />

      {/* 5R Circular Framework */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Methodology"
            heading="The 5R Circular Sustainability Framework"
            description="Our operational model adheres to the internationally recognized waste hierarchy."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {framework.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-industrial-200/80 shadow-xs hover:border-primary-300 hover:shadow-card-hover transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-primary-200/60 text-primary-700 shadow-xs">
                    <item.icon size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-secondary-950 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Measurable Targets"
            heading="Our Long-Term Sustainability Goals"
            description="Clear environmental and social targets governing our recycling roadmap."
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                {...fadeUp}
                className="bg-white rounded-3xl p-8 border border-industrial-200/80 shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold border border-primary-200/60">
                      {goal.metric}
                    </span>
                    <Globe2 size={20} className="text-primary-600" />
                  </div>
                  <h3 className="font-heading font-bold text-secondary-950 text-xl mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-secondary-600 text-sm leading-relaxed font-normal">
                    {goal.desc}
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

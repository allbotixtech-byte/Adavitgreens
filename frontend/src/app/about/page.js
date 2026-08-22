"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Shield, Lightbulb, Handshake, MapPin, Building, ShieldCheck, CheckCircle2 } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import CTABanner from "@/components/sections/CTABanner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const values = [
  { icon: Heart, title: "Responsibility", desc: "We take full accountability for all materials entrusted to our care, from intake to final recovery." },
  { icon: Eye, title: "Integrity & Transparency", desc: "Clear reporting, honest auditable metrics, and complete traceability throughout the recycling chain." },
  { icon: Target, title: "Resource Maximization", desc: "Prioritizing recovery over landfill disposal through modern segregation and processing technologies." },
  { icon: Shield, title: "Safety & Compliance", desc: "Strict adherence to State Pollution Control Board guidelines and workplace occupational health standards." },
  { icon: Lightbulb, title: "Innovation", desc: "Continuously refining material dismantling methods to recover higher purity secondary commodities." },
  { icon: Handshake, title: "Partnership", desc: "Working alongside enterprises, institutions, and communities to achieve lasting circular sustainability." },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        eyebrow="ABOUT US"
        heading="Building a Responsible Future Through Resource Recovery"
        description="ADVAIT GREEN RECYCLING PRIVATE LIMITED is a Gujarat-based recycling enterprise dedicated to transforming obsolete electronics and industrial by-products into productive secondary resources."
        primaryCTA={{ label: "Schedule a Facility Visit", href: "/contact" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
      />

      {/* Our Story & Corporate Profile */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="mb-4">
                <span className="eyebrow">Our Origins</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary-950 mb-6 leading-tight tracking-tight">
                Our Journey Begins With a Simple Belief: Waste Should Never Mean Disposal.
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-4 font-normal">
                Every discarded computer, smartphone, server, or electrical circuit contains precious commodities—copper, gold, aluminum, and engineering plastics—that can be recovered to reduce reliance on mining virgin earth.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-4 font-normal">
                Headquartered with our principal processing facility on Vamaj Road in Mahesana, Gujarat, ADVAIT GREEN RECYCLING PRIVATE LIMITED was established to bridge the gap between enterprise waste generators and certified circular recovery channels.
              </p>
              <p className="text-secondary-600 leading-relaxed mb-6 font-normal">
                We empower companies across India to meet their statutory Extended Producer Responsibility (EPR) mandates and ESG milestones with complete confidence.
              </p>
            </motion.div>

            {/* Corporate Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-industrial-200/80 shadow-card"
            >
              <h3 className="font-heading font-bold text-xl text-secondary-950 mb-6 flex items-center gap-2.5">
                <Building className="text-primary-600" size={22} />
                <span>Corporate Credentials</span>
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                  <ShieldCheck className="text-primary-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="text-xs text-industrial-400 block uppercase">Legal Entity</span>
                    <span className="font-semibold text-secondary-900">ADVAIT GREEN RECYCLING PRIVATE LIMITED</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                  <MapPin className="text-primary-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="text-xs text-industrial-400 block uppercase">Facility Location</span>
                    <span className="font-semibold text-secondary-900">Vamaj Road, Vamaj, Mahesana, Gujarat – 382728</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-industrial-50 border border-industrial-100">
                  <CheckCircle2 className="text-primary-600 shrink-0 mt-0.5" size={18} />
                  <div>
                    <span className="text-xs text-industrial-400 block uppercase">GST Registration</span>
                    <span className="font-mono font-bold text-secondary-900">24ABECA2823M1ZQ</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Purpose"
            heading="Mission & Strategic Vision"
            description="Guiding our everyday facility operations, safety standards, and technological investments."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              {...fadeUp}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-primary-200/80 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mb-6 border border-primary-200/60">
                  <Target size={28} className="text-primary-700" />
                </div>
                <span className="text-xs font-semibold text-primary-700 uppercase tracking-widest block mb-2">Our Mission</span>
                <h3 className="font-heading text-2xl font-bold text-secondary-950 mb-4">
                  Responsible & Technology-Driven Recovery
                </h3>
                <p className="text-secondary-600 leading-relaxed font-normal">
                  To provide transparent, certified, and environmentally safe recycling workflows that maximize resource yield, eliminate toxic landfill disposal, and support Indian enterprises on their zero-waste transition.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-secondary-950 via-[#071911] to-secondary-950 text-white rounded-3xl p-8 sm:p-10 border border-white/10 shadow-card flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 bg-primary-500/20 rounded-2xl flex items-center justify-center mb-6 border border-primary-400/40">
                  <Eye size={28} className="text-primary-400" />
                </div>
                <span className="text-xs font-semibold text-primary-300 uppercase tracking-widest block mb-2">Our Vision</span>
                <h3 className="font-heading text-2xl font-bold text-white mb-4">
                  A Resilient Circular Indian Economy
                </h3>
                <p className="text-industrial-300 leading-relaxed font-normal">
                  To establish India&apos;s most reliable and technologically proficient recycling infrastructure where materials cycle indefinitely, waste is treated as a strategic resource, and environmental preservation is guaranteed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Core Principles"
            heading="Our Guiding Values"
            description="The operational standards that define how we treat materials, communicate with clients, and respect the environment."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-7 border border-industrial-200/80 shadow-xs hover:border-primary-300 hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl flex items-center justify-center mb-4 border border-primary-200/50">
                  <value.icon size={22} className="text-primary-700" />
                </div>
                <h3 className="font-heading font-bold text-secondary-950 mb-2 text-base">
                  {value.title}
                </h3>
                <p className="text-secondary-600 text-sm leading-relaxed font-normal">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

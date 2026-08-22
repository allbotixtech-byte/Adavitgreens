"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Layers, Sparkles } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import ProcessStepper from "@/components/sections/ProcessStepper";
import CTABanner from "@/components/sections/CTABanner";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

export default function ServicePageTemplate({ service }) {
  return (
    <>
      <HeroSection
        eyebrow={service.title.toUpperCase()}
        heading={service.hero.heading}
        description={service.hero.description}
        primaryCTA={{ label: service.hero.cta, href: "/schedule-pickup" }}
        secondaryCTA={{ label: "Talk to Our Team", href: "/contact" }}
        minHeight="min-h-[70vh]"
      />

      {/* Challenge / Context Section (Centered) */}
      {service.challenge && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading
                eyebrow="The Challenge"
                heading={service.challenge.heading}
                description={service.challenge.content}
              />
              <div className="inline-flex items-center justify-center gap-2 p-4 rounded-2xl bg-primary-50 border border-primary-200/80 text-primary-800 text-sm font-semibold shadow-xs">
                <CheckCircle2 size={18} className="text-primary-600 shrink-0" />
                <span>Advait Green provides structured, compliant solutions to resolve this challenge.</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What We Handle (Centered Multi-Column Grid) */}
      {service.items && service.items.length > 0 && (
        <section className="section-padding section-alt">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Coverage & Scope"
              heading="Materials & Devices We Handle"
              description="Our comprehensive handling workflows cover a wide range of electronic, electrical, and enterprise IT equipment."
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {service.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3.5 border border-slate-200/80 shadow-xs hover:border-primary-300 hover:shadow-sm transition-all"
                >
                  <CheckCircle2 size={18} className="text-primary-600 shrink-0" />
                  <span className="text-secondary-800 text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Workflow */}
      {service.process && service.process.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Step-by-Step"
              heading={`Our ${service.title} Process`}
              description="A structured, auditable workflow ensuring material traceability and maximum resource recovery."
            />
            <ProcessStepper steps={service.process} />
          </div>
        </section>
      )}

      {/* Benefits Grid (Centered 3 Columns) */}
      {service.benefits && service.benefits.length > 0 && (
        <section className="section-padding section-alt">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Advantages"
              heading={`Why Choose Our ${service.title}?`}
              description="Designed to help organizations meet statutory compliance, maintain data security, and optimize material value recovery."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-primary-300 hover:shadow-card transition-all flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4 border border-primary-200/60 text-primary-600 font-bold">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="font-heading font-semibold text-secondary-950 text-base mb-2">
                      {benefit}
                    </h4>
                    <p className="text-xs text-secondary-500 leading-relaxed font-normal">
                      Ensuring strict adherence to environmental regulations and operational excellence.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who Can Benefit (Centered Grid) */}
      {(service.whoCanBenefit || service.suitableFor) && (
        <section className="section-padding">
          <div className="container-custom">
            <SectionHeading
              eyebrow="Target Audience"
              heading={service.whoCanBenefit ? "Who Can Benefit?" : "Suitable For"}
              description="Tailored recycling and asset retirement programs for various institutional scales."
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {(service.whoCanBenefit || service.suitableFor).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="flex items-center gap-3 bg-gradient-to-r from-primary-50/80 to-white rounded-xl px-5 py-4 border border-primary-200/60 shadow-xs"
                >
                  <ArrowRight size={16} className="text-primary-600 shrink-0" />
                  <span className="text-secondary-800 text-sm font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        heading={`Ready for ${service.title}?`}
        description={`Schedule a pickup or talk to our team about your custom ${service.title.toLowerCase()} requirements.`}
      />
    </>
  );
}

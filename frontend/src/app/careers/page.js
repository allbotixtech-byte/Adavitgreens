"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Heart, BookOpen, Users, Leaf, Mail } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import { getCareers } from "@/lib/api";

const whyJoin = [
  { icon: Heart, title: "Purpose-Driven Mission", desc: "Work directly on tangible environmental solutions that recover real industrial resources and combat climate change." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Gain deep expertise across circular economy models, environmental compliance, and advanced recycling technology." },
  { icon: Users, title: "Collaborative Culture", desc: "Join an agile, supportive team rooted in safety, accountability, and mutual respect." },
  { icon: Leaf, title: "Green Career Growth", desc: "Build a lasting career in one of India's fastest expanding sustainability and clean-tech sectors." },
];

const samplePositions = [
  {
    _id: "ops-sup-01",
    title: "E-Waste Operations & Sorting Supervisor",
    department: "Plant Operations",
    location: "Mahesana, Gujarat",
    type: "Full-Time",
    experience: "2-4 Years",
    desc: "Oversee daily intake weighing, material segregation lines, and occupational health safety protocols at our Mahesana facility.",
  },
  {
    _id: "log-coord-02",
    title: "Reverse Logistics & Fleet Coordinator",
    department: "Supply Chain",
    location: "Ahmedabad / Mahesana",
    type: "Full-Time",
    experience: "1-3 Years",
    desc: "Coordinate enterprise pickup schedules, manifest generation, and transit compliance with our logistics fleet.",
  },
  {
    _id: "epr-exec-03",
    title: "Environmental Compliance & EPR Executive",
    department: "Regulatory Affairs",
    location: "Mahesana, Gujarat",
    type: "Full-Time",
    experience: "2-5 Years",
    desc: "Maintain CPCB/SPCB portal filings, audit manifests, and support brand partners in statutory EPR quota submissions.",
  },
  {
    _id: "bd-lead-04",
    title: "Enterprise Client Solutions Manager",
    department: "Business Development",
    location: "Gujarat Region",
    type: "Full-Time",
    experience: "3-6 Years",
    desc: "Build partnerships with corporate IT enterprises, data centers, and OEMs for certified ITAD and recycling contracts.",
  },
];

export default function CareersPage() {
  const [careers, setCareers] = useState(samplePositions);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCareers() {
      try {
        const data = await getCareers();
        if (data && (data.careers?.length > 0 || data.length > 0)) {
          setCareers(data.careers || data);
        }
      } catch {
        // use sample positions
      } finally {
        setLoading(false);
      }
    }
    fetchCareers();
  }, []);

  return (
    <>
      <HeroSection
        eyebrow="JOIN OUR TEAM"
        heading="Build Your Career With a Greener Purpose"
        description="At ADVAIT GREEN RECYCLING PRIVATE LIMITED, our green mission is powered by dedicated people. Discover rewarding career paths in sustainability, recycling operations, and circular supply chains."
        minHeight="min-h-[65vh]"
      />

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Culture & Growth"
            heading="Why Build Your Future With Advait Green"
            description="We foster an environment where technical innovation and environmental values thrive together."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyJoin.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:border-primary-300 hover:shadow-card transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-primary-200/60 text-primary-700 shadow-xs">
                    <item.icon size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-secondary-950 text-base mb-2">
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

      {/* Open Positions */}
      <section className="section-padding section-alt">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Current Openings"
            heading="Explore Available Opportunities"
            description="Find your next role at our Mahesana facility or regional operations offices."
          />
          <div className="space-y-4 max-w-4xl mx-auto">
            {careers.map((career, index) => (
              <motion.div
                key={career._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className="group block bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-primary-300 hover:shadow-card transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {career.department && (
                          <span className="px-3 py-0.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold">
                            {career.department}
                          </span>
                        )}
                        {career.type && (
                          <span className="px-3 py-0.5 rounded-full bg-slate-100 text-secondary-600 text-xs font-medium">
                            {career.type}
                          </span>
                        )}
                      </div>
                      <h3 className="font-heading font-bold text-lg text-secondary-950 group-hover:text-primary-700 transition-colors">
                        {career.title}
                      </h3>
                      {career.desc && (
                        <p className="text-secondary-600 text-xs sm:text-sm mt-1.5 line-clamp-2">
                          {career.desc}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-secondary-500 font-medium">
                        {career.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={13} className="text-primary-600" /> {career.location}
                          </span>
                        )}
                        {career.experience && (
                          <span className="flex items-center gap-1">
                            <Clock size={13} className="text-primary-600" /> Exp: {career.experience}
                          </span>
                        )}
                      </div>
                    </div>

                    <a
                      href={`mailto:careers@advaitgreen.com?subject=Job Application: ${career.title}`}
                      className="inline-flex items-center justify-center gap-2 btn-primary text-xs py-2.5 px-5 shrink-0"
                    >
                      <span>Apply</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Application Card */}
          <div className="max-w-4xl mx-auto mt-10 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary-900 to-secondary-950 text-white text-center shadow-card border border-primary-500/30">
            <h4 className="font-heading font-bold text-xl mb-2">Don&apos;t See a Matching Role?</h4>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              We are constantly seeking passionate environmental engineers, logistics managers, and operations specialists. Send your CV directly to our HR team.
            </p>
            <a
              href="mailto:careers@advaitgreen.com"
              className="inline-flex items-center gap-2 bg-white text-primary-900 px-6 py-3 rounded-xl text-sm font-bold hover:bg-primary-50 transition-all shadow-md"
            >
              <Mail size={16} />
              <span>Email Resume to careers@advaitgreen.com</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  MapPin,
  Briefcase,
  Clock,
  Search,
  X,
  Upload,
  CheckCircle,
  Leaf,
  Shield,
  Users,
  TrendingUp,
  Heart,
  ChevronDown,
} from "lucide-react";

const perks = [
  {
    icon: Leaf,
    title: "Purpose-Driven Work",
    desc: "Every day your work directly reduces landfill burden and recovers valuable resources for the circular economy.",
  },
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    desc: "We are scaling fast across India. Early joiners get front-row seats to shape teams, processes, and strategy.",
  },
  {
    icon: Shield,
    title: "Safety First Culture",
    desc: "ISO-certified facility with rigorous safety protocols, regular training, and health check-ups for every team member.",
  },
  {
    icon: Users,
    title: "Collaborative Team",
    desc: "A close-knit team where engineers, compliance experts, and field operators work shoulder-to-shoulder.",
  },
  {
    icon: Heart,
    title: "Employee Wellbeing",
    desc: "Health insurance, provident fund, paid leaves, and festival bonuses. We take care of our people.",
  },
  {
    icon: Briefcase,
    title: "Hands-On Impact",
    desc: "No red-tape culture. Propose an idea on Monday, pilot it on Wednesday, and see results by Friday.",
  },
];

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeDept, setActiveDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applyJob, setApplyJob] = useState(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    coverLetter: "",
    resume: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/careers")
      .then((r) => r.json())
      .then((data) => {
        setJobs(data.careers || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const departments = ["All", ...new Set(jobs.map((j) => j.department).filter(Boolean))];

  const filtered = jobs.filter((j) => {
    const matchDept = activeDept === "All" || j.department === activeDept;
    const matchSearch =
      !searchQuery ||
      j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (j.department || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchDept && matchSearch;
  });

  const handleApply = async (e) => {
    e.preventDefault();
    if (!applyJob) return;
    setSubmitting(true);

    const fd = new FormData();
    fd.append("name", formState.name);
    fd.append("email", formState.email);
    fd.append("phone", formState.phone);
    fd.append("experience", formState.experience);
    fd.append("coverLetter", formState.coverLetter);
    if (formState.resume) fd.append("resume", formState.resume);

    try {
      const res = await fetch(`/api/careers/${applyJob.id}/apply`, {
        method: "POST",
        body: fd,
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // silent
    } finally {
      setSubmitting(false);
    }
  };

  const openApply = (job) => {
    setApplyJob(job);
    setShowApplyModal(true);
    setSubmitted(false);
    setFormState({ name: "", email: "", phone: "", experience: "", coverLetter: "", resume: null });
  };

  const closeApply = () => {
    setShowApplyModal(false);
    setApplyJob(null);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        <img
          src="/images/career_hero_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight size={12} className="text-white/30" />
              <span style={{ color: "var(--color-accent-400)" }}>Careers</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] text-white/70 mb-3 sm:mb-4"
            >
              Join Our Team
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] sm:leading-[1.06] tracking-tight mb-4 sm:mb-5"
            >
              Build Your Career in Sustainable Recycling
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-[52ch] mb-6 sm:mb-8"
            >
              We are a CPCB-authorized recycler on a mission to make responsible
              e-waste and plastic waste management accessible across India. Join
              us and do work that matters.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#openings"
                className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff" }}
              >
                View Open Positions <ArrowRight size={15} />
              </a>
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

      {/* ── WHY JOIN US ── */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] mb-2"
              style={{ color: "var(--color-accent-400)" }}
            >
              Why Advait Green
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight"
              style={{ color: "var(--color-primary-950)" }}
            >
              More Than a Job. A Mission.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 12px 32px rgba(10,77,96,0.12)",
                  transition: { duration: 0.25 },
                }}
                className="rounded-xl p-5 sm:p-6 cursor-default"
                style={{
                  backgroundColor: "var(--color-secondary-50)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: i * 0.1 + 0.2,
                  }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "var(--color-primary-700)" }}
                >
                  <perk.icon size={22} style={{ color: "var(--color-primary-100)" }} />
                </motion.div>
                <h3
                  className="font-heading text-base sm:text-lg font-semibold mb-2"
                  style={{ color: "var(--color-primary-950)" }}
                >
                  {perk.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-secondary-600)" }}
                >
                  {perk.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section
        id="openings"
        className="py-12 sm:py-16 lg:py-20"
        style={{ backgroundColor: "var(--color-secondary-50)", scrollMarginTop: "100px" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10">
            <p
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] mb-2"
              style={{ color: "var(--color-accent-400)" }}
            >
              Open Positions
            </p>
            <h2
              className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight"
              style={{ color: "var(--color-primary-950)" }}
            >
              Current Openings
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: activeDept === dept ? "var(--color-primary-700)" : "#E4EBE6",
                    color: activeDept === dept ? "#ffffff" : "var(--color-secondary-700)",
                  }}
                >
                  {dept}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-[260px] shrink-0">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "var(--color-secondary-400)" }}
              />
              <input
                type="text"
                placeholder="Search roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm border-none outline-none"
                style={{ backgroundColor: "#E4EBE6", color: "var(--color-secondary-900)" }}
              />
            </div>
          </div>

          {/* Job Listings */}
          {loading ? (
            <div className="text-center py-16">
              <div
                className="w-8 h-8 border-2 rounded-full animate-spin mx-auto"
                style={{ borderColor: "var(--color-primary-100)", borderTopColor: "var(--color-primary-700)" }}
              />
              <p className="mt-4 text-sm" style={{ color: "var(--color-secondary-400)" }}>
                Loading openings...
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16">
              <Briefcase size={40} className="mx-auto mb-4" style={{ color: "var(--color-primary-100)" }} />
              <p
                className="font-heading text-lg font-semibold mb-2"
                style={{ color: "var(--color-primary-950)" }}
              >
                No openings found
              </p>
              <p className="text-sm mb-6" style={{ color: "var(--color-secondary-400)" }}>
                {searchQuery
                  ? "Try a different search term."
                  : "We don't have openings in this department right now. Check back soon!"}
              </p>
              <a
                href="mailto:careers@advaitgreen.com"
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--color-primary-700)" }}
              >
                Send a Speculative Application <ArrowRight size={14} />
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  <div
                    className="rounded-xl overflow-hidden transition-all duration-300"
                    style={{
                      backgroundColor: "#ffffff",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                  >
                    {/* Job Header — always visible */}
                    <button
                      onClick={() =>
                        setSelectedJob(selectedJob === job.id ? null : job.id)
                      }
                      className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-5 sm:p-6 text-left cursor-pointer"
                    >
                      <div className="flex-1 min-w-0">
                        <h3
                          className="font-heading text-base sm:text-lg font-semibold mb-1.5"
                          style={{ color: "var(--color-primary-950)" }}
                        >
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs" style={{ color: "var(--color-secondary-500)" }}>
                          {job.department && (
                            <span className="flex items-center gap-1">
                              <Briefcase size={12} style={{ color: "var(--color-primary-700)" }} />
                              {job.department}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <MapPin size={12} style={{ color: "var(--color-primary-700)" }} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} style={{ color: "var(--color-primary-700)" }} />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <span
                          className="hidden sm:inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full"
                          style={{ backgroundColor: "var(--color-primary-50)", color: "var(--color-primary-700)" }}
                        >
                          Posted {formatDate(job.createdAt)}
                        </span>
                        <ChevronDown
                          size={18}
                          className="transition-transform duration-200"
                          style={{
                            color: "var(--color-primary-700)",
                            transform: selectedJob === job.id ? "rotate(180deg)" : "rotate(0)",
                          }}
                        />
                      </div>
                    </button>

                    {/* Job Details — expandable */}
                    <div
                      className="overflow-hidden transition-all duration-300"
                      style={{
                        maxHeight: selectedJob === job.id ? "600px" : "0",
                        opacity: selectedJob === job.id ? 1 : 0,
                      }}
                    >
                      <div
                        className="px-5 sm:px-6 pb-5 sm:pb-6"
                        style={{ borderTop: "1px solid #EDF1EE" }}
                      >
                        <div className="pt-4 sm:pt-5">
                          <p
                            className="text-sm leading-relaxed mb-5"
                            style={{ color: "var(--color-secondary-600)" }}
                          >
                            {job.description}
                          </p>

                          {job.requirements && job.requirements.length > 0 && (
                            <>
                              <h4
                                className="text-sm font-semibold mb-2.5"
                                style={{ color: "var(--color-primary-950)" }}
                              >
                                Requirements
                              </h4>
                              <ul className="space-y-1.5 mb-5">
                                {job.requirements.map((req, ri) => (
                                  <li
                                    key={ri}
                                    className="flex items-start gap-2 text-sm"
                                    style={{ color: "var(--color-secondary-600)" }}
                                  >
                                    <CheckCircle
                                      size={14}
                                      className="shrink-0 mt-0.5"
                                      style={{ color: "var(--color-primary-700)" }}
                                    />
                                    {req}
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}

                          <button
                            onClick={() => openApply(job)}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                            style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
                          >
                            Apply Now <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SPECULATIVE APPLICATION CTA ── */}
      <section style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 pb-12 lg:pb-16">
          <div
            className="relative rounded-xl sm:rounded-2xl overflow-hidden px-5 py-7 sm:px-10 sm:py-12 text-center"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-900) 0%, var(--color-primary-700) 100%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                transform: "translate(50%, -50%)",
              }}
            />
            <div className="relative flex flex-col items-center gap-3 sm:gap-4">
              <h3
                className="font-heading text-lg sm:text-xl md:text-2xl font-bold"
                style={{ color: "#ffffff", lineHeight: 1.3 }}
              >
                Don&apos;t See the Right Role?
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base max-w-[520px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                We&apos;re always looking for talented people who share our passion for
                responsible recycling. Send us your CV and we&apos;ll reach out when a
                matching role opens up.
              </p>
              <a
                href="mailto:careers@advaitgreen.com"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors mt-1"
                style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
              >
                Email Your CV <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPLICATION MODAL ── */}
      {showApplyModal && applyJob && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={closeApply}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-[540px] max-h-[90vh] overflow-y-auto rounded-xl sm:rounded-2xl p-5 sm:p-7"
            style={{ backgroundColor: "#ffffff" }}
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "var(--color-primary-50)" }}
                >
                  <CheckCircle size={28} style={{ color: "var(--color-primary-700)" }} />
                </div>
                <h3
                  className="font-heading text-xl font-bold mb-2"
                  style={{ color: "var(--color-primary-950)" }}
                >
                  Application Submitted!
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--color-secondary-600)" }}>
                  Thank you for applying for{" "}
                  <strong>{applyJob.title}</strong>. We&apos;ll review your
                  application and get back to you soon.
                </p>
                <button
                  onClick={closeApply}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold cursor-pointer"
                  style={{ backgroundColor: "var(--color-primary-700)", color: "#fff" }}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-5 sm:mb-6">
                  <div>
                    <h3
                      className="font-heading text-lg sm:text-xl font-bold"
                      style={{ color: "var(--color-primary-950)" }}
                    >
                      Apply for {applyJob.title}
                    </h3>
                    <p className="text-xs mt-1" style={{ color: "var(--color-secondary-500)" }}>
                      {applyJob.department} &middot; {applyJob.location}
                    </p>
                  </div>
                  <button
                    onClick={closeApply}
                    className="p-1 rounded-lg cursor-pointer"
                    style={{ color: "var(--color-secondary-400)" }}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Application Form */}
                <form onSubmit={handleApply} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-secondary-700)" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg text-sm border-none outline-none"
                        style={{ backgroundColor: "var(--color-secondary-50)", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-secondary-700)" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg text-sm border-none outline-none"
                        style={{ backgroundColor: "var(--color-secondary-50)", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-secondary-700)" }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg text-sm border-none outline-none"
                        style={{ backgroundColor: "var(--color-secondary-50)", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-secondary-700)" }}>
                        Years of Experience
                      </label>
                      <input
                        type="text"
                        value={formState.experience}
                        onChange={(e) => setFormState({ ...formState, experience: e.target.value })}
                        placeholder="e.g. 3 years"
                        className="w-full px-3 py-2.5 rounded-lg text-sm border-none outline-none"
                        style={{ backgroundColor: "var(--color-secondary-50)", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-secondary-700)" }}>
                      Resume / CV *
                    </label>
                    <label
                      className="flex items-center justify-center gap-2 w-full px-4 py-4 rounded-lg text-sm cursor-pointer transition-colors"
                      style={{
                        backgroundColor: "var(--color-secondary-50)",
                        border: "1px dashed var(--color-primary-100)",
                        color: formState.resume ? "var(--color-primary-700)" : "var(--color-secondary-400)",
                      }}
                    >
                      <Upload size={16} />
                      {formState.resume
                        ? formState.resume.name
                        : "Click to upload (PDF, DOC — max 5 MB)"}
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) =>
                          setFormState({ ...formState, resume: e.target.files[0] || null })
                        }
                      />
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--color-secondary-700)" }}>
                      Cover Letter (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formState.coverLetter}
                      onChange={(e) => setFormState({ ...formState, coverLetter: e.target.value })}
                      placeholder="Tell us why you'd be a great fit..."
                      className="w-full px-3 py-2.5 rounded-lg text-sm border-none outline-none resize-none"
                      style={{ backgroundColor: "var(--color-secondary-50)", color: "var(--color-secondary-900)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-lg text-sm font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: submitting ? "var(--color-secondary-500)" : "var(--color-primary-700)",
                      color: "#fff",
                    }}
                  >
                    {submitting ? "Submitting..." : "Submit Application"}
                    {!submitting && <ArrowRight size={14} />}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </>
  );
}

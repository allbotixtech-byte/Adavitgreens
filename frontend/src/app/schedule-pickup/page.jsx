"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Truck, CalendarDays, MapPin, Package, Phone, Mail, CheckCircle2,
  ClipboardCheck, ShieldCheck, ArrowRight, ChevronRight, Loader2,
  AlertCircle, Clock, Building2, Cpu, Recycle, Zap, Boxes, FileCheck,
  Headset, Scale,
} from "lucide-react";
import { companyInfo } from "@/data/navigation";

/* ── DATA ── */

const materialTypes = [
  "E-Waste (IT & electronics)",
  "Plastic Waste",
  "Battery / Solar Modules",
  "Bio Medical Waste",
  "Solid / Mixed Waste",
  "Mixed consignment",
  "Not sure — please advise",
];

const timeSlots = [
  "Morning (9 AM – 12 PM)",
  "Afternoon (12 PM – 4 PM)",
  "Evening (4 PM – 7 PM)",
  "Any time on the day",
];

const steps = [
  { icon: ClipboardCheck, title: "You Submit", desc: "Tell us what you have, roughly how much, and where it is sitting." },
  { icon: Headset, title: "We Confirm", desc: "Our team calls back within one working day with a slot and an indicative valuation." },
  { icon: Truck, title: "We Collect", desc: "Sealed, GPS-tracked transport arrives on the agreed date. You sign the handover manifest." },
  { icon: FileCheck, title: "You Get Documents", desc: "Certificate of Recycling and, where applicable, Certificate of Data Destruction." },
];

const accepted = [
  { icon: Cpu, label: "IT & Electronics" },
  { icon: Recycle, label: "Plastic Waste" },
  { icon: Zap, label: "Batteries & Solar" },
  { icon: Boxes, label: "Industrial Scrap" },
];

const assurances = [
  { icon: ShieldCheck, text: "CPCB & GPCB authorised processing" },
  { icon: FileCheck, text: "Certificate issued for every consignment" },
  { icon: Scale, text: "Transparent, recovery-based valuation" },
  { icon: Truck, text: "No minimum quantity for pickup" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

/* Inline styles: globals.css sets unlayered input rules that outrank Tailwind
   utilities, so field styling has to be applied inline to take effect. */
const fieldStyle = {
  width: "100%",
  fontSize: "0.875rem",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  backgroundColor: "var(--color-secondary-50)",
  border: "1px solid #E4EBE6",
  color: "var(--color-secondary-900)",
  outline: "none",
  transition: "border-color 140ms ease, box-shadow 140ms ease",
};

function Field({ label, required, children, className = "" }) {
  return (
    <div className={className}>
      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>
        {label} {required && <span style={{ color: "var(--color-accent-600)" }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function SectionLabel({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2.5 mb-4">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}
      >
        <Icon size={16} strokeWidth={1.8} style={{ color: "var(--color-primary-700)" }} />
      </div>
      <h3 className="font-heading text-sm font-semibold" style={{ color: "var(--color-primary-950)" }}>
        {children}
      </h3>
    </div>
  );
}

/* ── PAGE ── */

export default function SchedulePickupPage() {
  const [form, setForm] = useState({
    name: "", organization: "", email: "", phone: "",
    address: "", city: "", pincode: "",
    preferredDate: "", preferredTime: "",
    materialType: "", quantity: "", remarks: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const focusOn = (e) => {
    e.target.style.borderColor = "var(--color-accent-500)";
    e.target.style.boxShadow = "0 0 0 3px rgba(57,217,0,0.13)";
  };
  const focusOff = (e) => {
    e.target.style.borderColor = "#E4EBE6";
    e.target.style.boxShadow = "none";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/schedule-pickup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Something went wrong. Please try again, or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  // Pickups can't be booked for a past date.
  const todayISO = new Date().toISOString().split("T")[0];

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        <img
          src="/images/E-West-Managment-4.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-5 sm:mb-7">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span style={{ color: "var(--color-accent-400)" }}>Schedule a Pickup</span>
            </nav>

            <motion.p
              initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] text-accent-400 mb-3 sm:mb-4"
            >
              Free Collection · Pan-India
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] tracking-tight mb-4"
            >
              Schedule a Free Pickup.{" "}
              <span style={{ color: "var(--color-accent-400)" }}>We'll Do the Rest.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[52ch] mb-7 sm:mb-8"
            >
              Tell us what you have and where it is. We come back within one working day with a collection slot and an indicative valuation — no minimum quantity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="flex flex-wrap gap-x-5 gap-y-2.5"
            >
              {assurances.slice(0, 3).map((a) => (
                <span key={a.text} className="inline-flex items-center gap-2 text-xs text-white/75">
                  <a.icon size={14} style={{ color: "var(--color-accent-400)" }} />
                  {a.text}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="py-14 sm:py-16 lg:py-24" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1.55fr_1fr] gap-6 lg:gap-8 items-start">

            {/* ── FORM ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl border bg-white p-5 sm:p-8 lg:p-10"
              style={{ borderColor: "var(--color-secondary-200)" }}
            >
              {submitted ? (
                <div className="text-center py-10 sm:py-16">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ backgroundColor: "var(--color-accent-50)", border: "1px solid var(--color-accent-200)" }}
                  >
                    <CheckCircle2 size={30} strokeWidth={1.7} style={{ color: "var(--color-accent-600)" }} />
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-semibold mb-3" style={{ color: "var(--color-primary-950)" }}>
                    Pickup Request Received
                  </h2>
                  <p className="text-sm leading-relaxed max-w-[46ch] mx-auto mb-7" style={{ color: "var(--color-secondary-600)" }}>
                    Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}. Our collection team will call you within one working day to confirm the slot and share an indicative valuation.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                      style={{ backgroundColor: "var(--color-accent-600)" }}
                    >
                      Back to Home <ArrowRight size={15} />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border transition-colors"
                      style={{ borderColor: "var(--color-secondary-200)", color: "var(--color-secondary-700)" }}
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.09em] mb-2" style={{ color: "var(--color-accent-500)" }}>
                      Pickup Request
                    </p>
                    <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
                      Tell Us What to Collect
                    </h2>
                  </div>

                  {error && (
                    <div
                      role="alert"
                      className="flex items-start gap-2.5 rounded-lg px-4 py-3 text-sm"
                      style={{ backgroundColor: "#FEF2F2", border: "1px solid #FECACA", color: "#B91C1C" }}
                    >
                      <AlertCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Your details */}
                  <div>
                    <SectionLabel icon={Building2}>Your Details</SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Full Name" required>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} placeholder="Your name" style={fieldStyle} />
                      </Field>
                      <Field label="Organisation">
                        <input type="text" name="organization" value={form.organization} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} placeholder="Company / institution" style={fieldStyle} />
                      </Field>
                      <Field label="Email Address" required>
                        <input type="email" name="email" required value={form.email} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} placeholder="you@company.com" style={fieldStyle} />
                      </Field>
                      <Field label="Mobile Number" required>
                        <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} placeholder="+91 XXXXX XXXXX" style={fieldStyle} />
                      </Field>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <SectionLabel icon={MapPin}>Pickup Location</SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Address" className="sm:col-span-2">
                        <input type="text" name="address" value={form.address} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} placeholder="Building, street, area" style={fieldStyle} />
                      </Field>
                      <Field label="City">
                        <input type="text" name="city" value={form.city} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} placeholder="City" style={fieldStyle} />
                      </Field>
                      <Field label="PIN Code">
                        <input type="text" name="pincode" inputMode="numeric" pattern="[0-9]{6}" maxLength={6}
                          value={form.pincode} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} placeholder="6-digit PIN" style={fieldStyle} />
                      </Field>
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <SectionLabel icon={CalendarDays}>Preferred Schedule</SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Preferred Date">
                        <input type="date" name="preferredDate" min={todayISO} value={form.preferredDate}
                          onChange={handleChange} onFocus={focusOn} onBlur={focusOff} style={fieldStyle} />
                      </Field>
                      <Field label="Preferred Time">
                        <select name="preferredTime" value={form.preferredTime} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} style={fieldStyle}>
                          <option value="">Select a slot</option>
                          {timeSlots.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </Field>
                    </div>
                  </div>

                  {/* Material */}
                  <div>
                    <SectionLabel icon={Package}>What Are We Collecting?</SectionLabel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Material Type">
                        <select name="materialType" value={form.materialType} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} style={fieldStyle}>
                          <option value="">Select material</option>
                          {materialTypes.map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </Field>
                      <Field label="Approximate Quantity">
                        <input type="text" name="quantity" value={form.quantity} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff} placeholder="e.g. 40 desktops, ~500 kg" style={fieldStyle} />
                      </Field>
                      <Field label="Anything Else We Should Know?" className="sm:col-span-2">
                        <textarea name="remarks" rows={4} value={form.remarks} onChange={handleChange}
                          onFocus={focusOn} onBlur={focusOff}
                          placeholder="Access restrictions, lift availability, data-bearing devices, preferred contact time…"
                          style={{ ...fieldStyle, resize: "vertical" }} />
                      </Field>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 cursor-pointer disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:hover:translate-y-0"
                      style={{
                        backgroundColor: "var(--color-accent-600)",
                        opacity: submitting ? 0.75 : 1,
                        boxShadow: "0 8px 22px rgba(22,168,0,0.22)",
                      }}
                    >
                      {submitting ? (<><Loader2 size={16} className="animate-spin" /> Submitting…</>)
                                  : (<>Request Pickup <ArrowRight size={16} /></>)}
                    </button>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-500)" }}>
                      No obligation. We confirm the slot before any vehicle is dispatched.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>

            {/* ── SIDEBAR ── */}
            <motion.aside
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="space-y-5 lg:sticky lg:top-24"
            >
              {/* What happens next */}
              <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "var(--color-secondary-200)" }}>
                <h3 className="font-heading text-base font-semibold mb-5" style={{ color: "var(--color-primary-950)" }}>
                  What Happens Next
                </h3>
                <ol className="space-y-4">
                  {steps.map((s, i) => (
                    <li key={s.title} className="flex gap-3.5">
                      <div className="flex flex-col items-center shrink-0">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold"
                          style={{ backgroundColor: "var(--color-primary-700)", color: "#ffffff" }}
                        >
                          {i + 1}
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-px flex-1 mt-1.5" style={{ backgroundColor: "var(--color-secondary-200)" }} />
                        )}
                      </div>
                      <div className="pb-1">
                        <p className="text-sm font-semibold mb-0.5" style={{ color: "var(--color-primary-950)" }}>{s.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Accepted materials */}
              <div className="rounded-2xl border bg-white p-6" style={{ borderColor: "var(--color-secondary-200)" }}>
                <h3 className="font-heading text-base font-semibold mb-4" style={{ color: "var(--color-primary-950)" }}>
                  What We Collect
                </h3>
                <div className="flex flex-wrap gap-2">
                  {accepted.map((a) => (
                    <span
                      key={a.label}
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium"
                      style={{ borderColor: "var(--color-secondary-200)", color: "var(--color-secondary-700)" }}
                    >
                      <a.icon size={14} strokeWidth={1.8} style={{ color: "var(--color-primary-700)" }} />
                      {a.label}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold mt-4 transition-colors"
                  style={{ color: "var(--color-primary-700)" }}
                >
                  See all services <ChevronRight size={13} />
                </Link>
              </div>

              {/* Talk to a person */}
              <div className="rounded-2xl p-6" style={{ backgroundColor: "var(--color-primary-700)" }}>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                >
                  <Headset size={20} strokeWidth={1.7} style={{ color: "var(--color-accent-400)" }} />
                </div>
                <h3 className="font-heading text-base font-semibold text-white mb-1.5">Prefer to Talk?</h3>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--color-primary-200)" }}>
                  Large consignment, plant closure or a decommission with a deadline? Call us and we will scope it.
                </p>
                <a
                  href={`tel:${companyInfo.tollFree.replace(/\s/g, "")}`}
                  className="flex items-center gap-2.5 text-sm font-semibold text-white mb-2.5"
                >
                  <Phone size={15} style={{ color: "var(--color-accent-400)" }} />
                  {companyInfo.tollFree}
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2.5 text-sm break-all"
                  style={{ color: "var(--color-primary-200)" }}
                >
                  <Mail size={15} style={{ color: "var(--color-accent-400)" }} />
                  {companyInfo.email}
                </a>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* ── ASSURANCES ── */}
      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
            {assurances.map((a, i) => (
              <motion.div
                key={a.text}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 rounded-xl border p-5"
                style={{ borderColor: "var(--color-secondary-200)", backgroundColor: "var(--color-secondary-50)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--color-primary-50)", border: "1px solid var(--color-primary-200)" }}
                >
                  <a.icon size={17} strokeWidth={1.8} style={{ color: "var(--color-primary-700)" }} />
                </div>
                <p className="text-[13px] font-medium leading-snug pt-1.5" style={{ color: "var(--color-secondary-700)" }}>
                  {a.text}
                </p>
              </motion.div>
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
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-4 max-w-[620px] mx-auto">
            Not Sure Which Category Your Waste Falls Under?
          </h2>
          <p className="text-secondary-300 text-sm sm:text-base max-w-[520px] mx-auto mb-8 leading-relaxed">
            Describe it in the form above, or talk to our team — we will tell you what the law requires of you and how we would handle it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/8 text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
          >
            Contact Our Team <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

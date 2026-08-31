"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { companyInfo } from "@/data/navigation";

const enquiryOptions = [
  "E-Waste Recycling",
  "Plastic Waste Management",
  "EPR Compliance",
  "Data Destruction",
  "Battery / Solar Recycling",
  "Reverse Logistics",
  "Facility Visit",
  "Careers",
  "Other",
];

const quantityOptions = [
  "Under 100 kg",
  "100 kg – 1 MT",
  "1 – 10 MT",
  "Above 10 MT",
  "Not sure",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.2, 0, 0, 1] },
  }),
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    service: "",
    quantity: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        <img
          src="/images/contact-us.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span style={{ color: "var(--color-accent-400)" }}>Contact Us</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] text-white/70 mb-3 sm:mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] sm:leading-[1.06] tracking-tight mb-4 sm:mb-5"
            >
              Let's Talk About Your Waste
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-[52ch] mb-6 sm:mb-8"
            >
              Tell us what you have. We'll tell you exactly what happens to it — and come back within one working day.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff" }}
              >
                Send an Enquiry <ArrowRight size={15} />
              </a>
              <Link
                href="/schedule-pickup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Schedule a Free Pickup
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT CARDS ── */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {/* Call */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-xl p-6 sm:p-7"
              style={{ backgroundColor: "var(--color-primary-700)" }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <Phone size={20} style={{ color: "var(--color-primary-100)" }} />
              </div>
              <h3 className="font-heading text-base font-semibold mb-3" style={{ color: "#ffffff" }}>Call Us</h3>
              <div className="space-y-2 text-sm" style={{ color: "var(--color-primary-200)" }}>
                <p><span className="text-xs" style={{ color: "var(--color-secondary-400)" }}>Toll Free:</span><br />{companyInfo.tollFree}</p>
                <p><span className="text-xs" style={{ color: "var(--color-secondary-400)" }}>E-Waste:</span><br />{companyInfo.phoneEWaste}</p>
                <p><span className="text-xs" style={{ color: "var(--color-secondary-400)" }}>Plastic:</span><br />{companyInfo.phonePlastic}</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="rounded-xl p-6 sm:p-7"
              style={{ backgroundColor: "#E4EBE6" }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-primary-100)" }}>
                <Mail size={20} style={{ color: "var(--color-primary-700)" }} />
              </div>
              <h3 className="font-heading text-base font-semibold mb-3" style={{ color: "var(--color-primary-950)" }}>Email Us</h3>
              <div className="space-y-2 text-sm" style={{ color: "var(--color-secondary-700)" }}>
                <p><span className="text-xs" style={{ color: "var(--color-secondary-400)" }}>General:</span><br />{companyInfo.email}</p>
                <p><span className="text-xs" style={{ color: "var(--color-secondary-400)" }}>Sales & Quotes:</span><br />sales@advaitgreen.com</p>
                <p><span className="text-xs" style={{ color: "var(--color-secondary-400)" }}>EPR:</span><br />epr@advaitgreen.com</p>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="rounded-xl p-6 sm:p-7"
              style={{ backgroundColor: "var(--color-primary-700)" }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                <MessageCircle size={20} style={{ color: "var(--color-primary-100)" }} />
              </div>
              <h3 className="font-heading text-base font-semibold mb-3" style={{ color: "#ffffff" }}>WhatsApp</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-primary-200)" }}>
                {companyInfo.phoneEWaste}
              </p>
              <p className="text-xs mt-2 leading-relaxed" style={{ color: "var(--color-secondary-400)" }}>
                Send a photo of your waste for a quick indicative quote.
              </p>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
              className="rounded-xl p-6 sm:p-7"
              style={{ backgroundColor: "#E4EBE6" }}
            >
              <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-primary-100)" }}>
                <Clock size={20} style={{ color: "var(--color-primary-700)" }} />
              </div>
              <h3 className="font-heading text-base font-semibold mb-3" style={{ color: "var(--color-primary-950)" }}>Working Hours</h3>
              <div className="space-y-2 text-sm" style={{ color: "var(--color-secondary-700)" }}>
                <p><span className="font-semibold" style={{ color: "var(--color-primary-950)" }}>Mon – Sat:</span><br />9:00 AM – 6:30 PM</p>
                <p><span className="font-semibold" style={{ color: "var(--color-primary-950)" }}>Sunday:</span><br />Closed</p>
              </div>
              <p className="text-xs mt-3 leading-relaxed" style={{ color: "var(--color-secondary-400)" }}>
                Bulk collection scheduling available outside these hours on request.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ENQUIRY FORM + LOCATIONS ── */}
      <section id="enquiry-form" className="py-12 sm:py-16 lg:py-24 scroll-mt-[120px]" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-14">
            {/* Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="rounded-2xl p-6 sm:p-8 lg:p-10"
              style={{ backgroundColor: "#ffffff" }}
            >
              <h2 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight mb-2" style={{ color: "var(--color-primary-950)" }}>
                Send Us an Enquiry
              </h2>
              <p className="text-sm mb-8" style={{ color: "var(--color-secondary-400)" }}>
                We respond to every enquiry within one working day.
              </p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "var(--color-primary-50)" }}>
                    <CheckCircle size={32} style={{ color: "var(--color-primary-700)" }} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2" style={{ color: "var(--color-primary-950)" }}>Thank You!</h3>
                  <p className="text-sm" style={{ color: "var(--color-secondary-600)" }}>Your enquiry has been submitted. We'll get back to you within one working day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                        style={{ backgroundColor: "var(--color-secondary-50)", border: "1px solid #E4EBE6", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                        style={{ backgroundColor: "var(--color-secondary-50)", border: "1px solid #E4EBE6", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>Mobile Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                        style={{ backgroundColor: "var(--color-secondary-50)", border: "1px solid #E4EBE6", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>Organisation Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                        style={{ backgroundColor: "var(--color-secondary-50)", border: "1px solid #E4EBE6", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>City / Location *</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Your city"
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors"
                        style={{ backgroundColor: "var(--color-secondary-50)", border: "1px solid #E4EBE6", color: "var(--color-secondary-900)" }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>Enquiring About *</label>
                      <select
                        name="service"
                        required
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors appearance-none cursor-pointer"
                        style={{ backgroundColor: "var(--color-secondary-50)", border: "1px solid #E4EBE6", color: form.service ? "var(--color-secondary-900)" : "var(--color-secondary-400)" }}
                      >
                        <option value="" disabled>Select a service</option>
                        {enquiryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>Approximate Quantity</label>
                    <select
                      name="quantity"
                      value={form.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors appearance-none cursor-pointer"
                      style={{ backgroundColor: "var(--color-secondary-50)", border: "1px solid #E4EBE6", color: form.quantity ? "var(--color-secondary-900)" : "var(--color-secondary-400)" }}
                    >
                      <option value="" disabled>Select quantity range</option>
                      {quantityOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--color-secondary-700)" }}>Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your waste stream, volume, or any specific requirements..."
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-colors resize-none"
                      style={{ backgroundColor: "var(--color-secondary-50)", border: "1px solid #E4EBE6", color: "var(--color-secondary-900)" }}
                    />
                  </div>

                  {error && (
                    <p className="text-sm font-medium" style={{ color: "#cc3333" }}>{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer disabled:opacity-60"
                    style={{ backgroundColor: "var(--color-primary-700)", color: "#ffffff" }}
                  >
                    {submitting ? (
                      <><Loader2 size={16} className="animate-spin" /> Submitting...</>
                    ) : (
                      <><Send size={15} /> Submit Enquiry</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar — Locations */}
            <div className="space-y-5 lg:sticky lg:top-[120px] lg:self-start">
              {/* Corporate Office */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="rounded-xl p-6 sm:p-7"
                style={{ backgroundColor: "var(--color-primary-700)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(255,255,255,0.12)" }}>
                  <MapPin size={18} style={{ color: "var(--color-primary-100)" }} />
                </div>
                <h3 className="font-heading text-base font-semibold mb-1" style={{ color: "#ffffff" }}>Corporate Office</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-primary-200)" }}>
                  {companyInfo.address.corporate}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address.corporate)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: "var(--color-accent-400)" }}
                >
                  Get Directions <ArrowRight size={12} />
                </a>
              </motion.div>

              {/* Recycling Facility */}
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
                className="rounded-xl p-6 sm:p-7"
                style={{ backgroundColor: "#E4EBE6" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "var(--color-primary-100)" }}>
                  <MapPin size={18} style={{ color: "var(--color-primary-700)" }} />
                </div>
                <h3 className="font-heading text-base font-semibold mb-1" style={{ color: "var(--color-primary-950)" }}>Recycling Facility</h3>
                <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--color-secondary-700)" }}>
                  {companyInfo.address.facility}
                </p>
                <p className="text-xs mb-4" style={{ color: "var(--color-secondary-400)" }}>
                  Facility visits by prior appointment only.
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyInfo.address.facility)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold"
                  style={{ color: "var(--color-accent-600)" }}
                >
                  Get Directions <ArrowRight size={12} />
                </a>
              </motion.div>

              {/* Quick CTA */}
              <div
                className="rounded-xl p-6 sm:p-7 text-center"
                style={{ backgroundColor: "#ffffff", border: "1px solid var(--color-primary-100)" }}
              >
                <h4 className="font-heading text-sm font-semibold mb-1" style={{ color: "var(--color-primary-950)" }}>
                  Need a Free Waste Assessment?
                </h4>
                <p className="text-xs mb-4 leading-relaxed" style={{ color: "var(--color-secondary-400)" }}>
                  No charge for assessment or collection scheduling.
                </p>
                <Link
                  href="/schedule-pickup"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
                >
                  Schedule Pickup <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-10 sm:mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>Find Us</p>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight" style={{ color: "var(--color-primary-950)" }}>
              Our Location
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid #E4EBE6" }}>
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(companyInfo.address.corporate)}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Advait Green Recycling Location"
              className="w-full h-[300px] sm:h-[400px]"
            />
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
          <p className="text-sm sm:text-base max-w-[480px] mx-auto mb-8 leading-relaxed" style={{ color: "var(--color-secondary-400)" }}>
            Tell us what you have and where it is. We'll come back within one working day with a collection plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/schedule-pickup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
              style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
            >
              Schedule a Free Pickup <ArrowRight size={15} />
            </Link>
            <a
              href="#enquiry-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

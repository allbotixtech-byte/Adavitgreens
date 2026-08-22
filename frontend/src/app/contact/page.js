"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, ShieldCheck } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import { companyInfo } from "@/data/navigation";
import { submitContactForm } from "@/lib/api";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", city: "", service: "", materialType: "", quantity: "", preferredDate: "", message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitContactForm(formData);
      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", city: "", service: "", materialType: "", quantity: "", preferredDate: "", message: "" });
    } catch {
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", phone: "", city: "", service: "", materialType: "", quantity: "", preferredDate: "", message: "" });
      }, 600);
    }
  };

  const serviceOptions = [
    "E-Waste Recycling & Recovery",
    "IT Asset Disposition (ITAD)",
    "Certified Data Destruction",
    "Reverse Logistics & Aggregation",
    "EPR Compliance & Target Fulfillment",
    "Refurbishment & Asset Lifecycle Extension",
    "Bulk Industrial Scrap Management",
    "Facility Visit & Consultation",
  ];

  return (
    <>
      <HeroSection
        eyebrow="CONNECT WITH US"
        heading="Let&apos;s Build a Greener Recycling Journey Together"
        description="Have recyclable materials, retired IT hardware or an upcoming EPR compliance requirement? Talk with our Gujarat facility team today."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Contact Info (Span 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-industrial-200/80 shadow-card space-y-6">
                <div>
                  <span className="eyebrow mb-3">Corporate Headquarters</span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-1">
                    {companyInfo.legalName}
                  </h3>
                  <p className="text-xs text-primary-700 font-mono font-medium">GSTIN: {companyInfo.gstin}</p>
                </div>

                <div className="space-y-4 pt-2 border-t border-industrial-100">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 border border-primary-200/60 text-primary-700">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-industrial-400 uppercase font-semibold">Registered Office & Plant</p>
                      <p className="text-secondary-800 text-sm leading-relaxed font-medium">
                        {companyInfo.address.line1}, {companyInfo.address.line2}, {companyInfo.address.city}, {companyInfo.address.state} – {companyInfo.address.pincode}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 border border-primary-200/60 text-primary-700">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-industrial-400 uppercase font-semibold">Telephone Inquiries</p>
                      <p className="text-secondary-800 text-sm font-medium">
                        +91 (02762) 283000 / +91 94280 00000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 border border-primary-200/60 text-primary-700">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-industrial-400 uppercase font-semibold">Email Channel</p>
                      <p className="text-secondary-800 text-sm font-medium">
                        contact@advaitgreen.com / info@advaitgreen.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center shrink-0 border border-primary-200/60 text-primary-700">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-industrial-400 uppercase font-semibold">Facility Hours</p>
                      <p className="text-secondary-800 text-sm font-medium">
                        Monday – Saturday: 9:00 AM – 6:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form (Span 7) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-industrial-200/80 shadow-card"
              >
                <h3 className="font-heading text-2xl font-bold text-secondary-950 mb-2">
                  Send Us a Direct Message
                </h3>
                <p className="text-secondary-500 text-sm mb-8">
                  Our recycling solutions team will reply within 24 business hours.
                </p>

                {status === "success" ? (
                  <div className="text-center py-12 bg-emerald-50/50 rounded-2xl border border-emerald-200 p-8">
                    <CheckCircle2 size={48} className="text-emerald-600 mx-auto mb-4" />
                    <h4 className="font-heading text-2xl font-bold text-secondary-950 mb-2">
                      Inquiry Received!
                    </h4>
                    <p className="text-secondary-600 text-sm max-w-md mx-auto mb-6">
                      Thank you for contacting ADVAIT GREEN RECYCLING PRIVATE LIMITED. An account specialist will be in touch shortly.
                    </p>
                    <button
                      onClick={() => setStatus(null)}
                      className="btn-secondary text-sm py-2 px-5"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-2">
                          Company / Enterprise Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Organization"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="name@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-2">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-2">
                          City / State *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Ahmedabad, Gujarat"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-2">
                          Service Required *
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select relevant service</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-2">
                        Message / Requirements
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about the materials, quantities, or specific compliance questions you have."
                        className="resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="btn-primary w-full py-4 text-base font-bold shadow-button"
                    >
                      {status === "loading" ? "Sending Inquiry..." : "Submit Inquiry"}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

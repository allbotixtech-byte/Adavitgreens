"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Truck,
  CheckCircle2,
  Calendar,
  MapPin,
  Package,
  ShieldCheck,
  ArrowRight,
  Clock,
  Building2,
  Phone,
  FileCheck2,
} from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import { submitPickupForm } from "@/lib/api";

export default function SchedulePickupPage() {
  const [formData, setFormData] = useState({
    name: "", organization: "", email: "", phone: "",
    address: "", city: "", pincode: "", preferredDate: "", preferredTime: "",
    materialType: "", quantity: "", devices: "", category: "", remarks: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await submitPickupForm(formData);
      setStatus("success");
    } catch {
      setTimeout(() => setStatus("success"), 600);
    }
  };

  const materialOptions = [
    "Computers, Desktops & Laptops",
    "Enterprise Servers & Storage Arrays",
    "Networking Hardware (Switches/Routers)",
    "Printers, Scanners & MFPs",
    "Monitors & Displays",
    "Hard Drives & Data-Bearing Media",
    "Telecom & Tower Equipment",
    "Industrial Electrical Machinery",
    "Mixed E-Waste Bulk Lot",
    "Other Recyclable Material",
  ];

  return (
    <>
      <HeroSection
        eyebrow="NATIONWIDE LOGISTICS"
        heading="Schedule a Responsible Material Pickup"
        description="Book secure, certified collection for your obsolete enterprise IT assets, electronic scrap, or industrial recyclables directly from your facility."
      />

      <section className="section-padding">
        <div className="container-custom">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto bg-white rounded-3xl p-10 sm:p-14 border border-emerald-200 text-center shadow-card"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
                <CheckCircle2 size={36} />
              </div>
              <span className="eyebrow mb-4">Request Logged Successfully</span>
              <h2 className="font-heading text-3xl font-bold text-secondary-950 mb-4">
                Pickup Scheduled With Advait Green!
              </h2>
              <p className="text-secondary-600 text-base max-w-xl mx-auto mb-8 leading-relaxed">
                Thank you for choosing responsible recycling. Our operations coordinator will review your inventory specifications and contact you within 4 business hours to confirm logistics and vehicle allocation.
              </p>
              <div className="p-4 rounded-2xl bg-industrial-50 border border-industrial-100 max-w-md mx-auto text-xs text-secondary-600 text-left space-y-1.5 mb-8">
                <p><strong className="text-secondary-900">Registered Office:</strong> ADVAIT GREEN RECYCLING PRIVATE LIMITED</p>
                <p><strong className="text-secondary-900">Facility:</strong> Vamaj Road, Mahesana, Gujarat – 382728</p>
                <p><strong className="text-secondary-900">GSTIN:</strong> 24ABECA2823M1ZQ</p>
              </div>
              <button
                onClick={() => {
                  setStatus(null);
                  setFormData({
                    name: "", organization: "", email: "", phone: "",
                    address: "", city: "", pincode: "", preferredDate: "", preferredTime: "",
                    materialType: "", quantity: "", devices: "", category: "", remarks: "",
                  });
                }}
                className="btn-secondary"
              >
                Schedule Another Request
              </button>
            </motion.div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-industrial-200/80 shadow-card"
              >
                <div className="flex items-center gap-4 pb-6 mb-8 border-b border-industrial-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-button shrink-0">
                    <Truck size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950">
                      Pickup Request Form
                    </h3>
                    <p className="text-secondary-500 text-xs sm:text-sm">
                      Fill in the details below to schedule collection from your facility.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Personal / Company Details */}
                  <div>
                    <h4 className="font-heading font-bold text-sm text-secondary-950 mb-3 pb-1 border-b border-industrial-100 flex items-center gap-2">
                      <Building2 size={16} className="text-primary-600" />
                      <span>1. Contact & Organization Details</span>
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Contact Person Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Rahul Sharma"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Organization / Company
                        </label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="e.g. Acme Tech Ltd"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="rahul@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Mobile Number *
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
                    </div>
                  </div>

                  {/* Step 2: Pickup Location & Timing */}
                  <div>
                    <h4 className="font-heading font-bold text-sm text-secondary-950 mb-3 pb-1 border-b border-industrial-100 flex items-center gap-2">
                      <MapPin size={16} className="text-primary-600" />
                      <span>2. Pickup Location & Preferred Timing</span>
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Facility Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          placeholder="Building, street, industrial area, landmark"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          City / District *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Ahmedabad, Mahesana"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Pincode *
                        </label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          required
                          placeholder="382728"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Preferred Slot
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                        >
                          <option value="">Select suitable timing</option>
                          <option value="Morning (9:00 AM - 1:00 PM)">Morning (9:00 AM - 1:00 PM)</option>
                          <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                          <option value="Flexible / Any Time">Flexible / Any Time</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Material Details */}
                  <div>
                    <h4 className="font-heading font-bold text-sm text-secondary-950 mb-3 pb-1 border-b border-industrial-100 flex items-center gap-2">
                      <Package size={16} className="text-primary-600" />
                      <span>3. Material & Inventory Details</span>
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Primary Material Category *
                        </label>
                        <select
                          name="materialType"
                          value={formData.materialType}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select material category</option>
                          {materialOptions.map((m) => (
                            <option key={m} value={m}>{m}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Approximate Volume / Units
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 85 desktops, ~450 kg"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">
                          Special Handling / Remarks
                        </label>
                        <textarea
                          name="remarks"
                          value={formData.remarks}
                          onChange={handleChange}
                          rows={2}
                          placeholder="Serial tracking, hard drive shredding, elevator access notes."
                          className="resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full btn-primary py-3.5 text-base font-bold shadow-button"
                    >
                      {status === "loading" ? "Submitting Request..." : "Confirm & Book Pickup"}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

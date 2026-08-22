"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { createCareer } from "@/lib/adminApi";

export default function NewCareerPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", department: "", location: "Mahesana, Gujarat", type: "Full-time", description: "", requirements: "", isActive: true });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = { ...form, requirements: form.requirements.split("\n").filter(Boolean) };
      await createCareer(data);
      router.push("/admin/careers");
    } catch {} finally { setLoading(false); }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/careers" className="p-2 rounded-lg hover:bg-slate-100 text-slate-400"><ArrowLeft size={20} /></Link>
        <h1 className="font-heading text-2xl font-bold text-secondary-950">New Position</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-200 space-y-5">
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Job Title *</label>
          <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="E-Waste Operations Supervisor" />
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Department</label>
            <input type="text" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} placeholder="Operations" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Location</label>
            <input type="text" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Type</label>
            <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Description (HTML)</label>
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={6} placeholder="Full job description" className="resize-y" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase mb-1.5">Requirements (one per line)</label>
          <textarea value={form.requirements} onChange={(e) => setForm({ ...form, requirements: e.target.value })} rows={4} placeholder="2+ years experience&#10;Knowledge of e-waste handling&#10;..." className="resize-y" />
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" id="active" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} className="w-4 h-4 accent-primary-500" />
          <label htmlFor="active" className="text-sm text-slate-700 font-medium cursor-pointer">Active (visible on website)</label>
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          <button type="submit" disabled={loading} className="btn-primary text-sm py-3 px-6">{loading ? "Creating..." : "Create Position"} <Save size={16} /></button>
          <Link href="/admin/careers" className="btn-secondary text-sm py-3 px-6">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

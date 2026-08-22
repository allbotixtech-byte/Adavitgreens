"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, MapPin, Briefcase } from "lucide-react";
import { getAdminCareers, deleteCareer } from "@/lib/adminApi";

export default function AdminCareersPage() {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCareers = async () => {
    try {
      const data = await getAdminCareers();
      setCareers(data.careers || []);
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => { fetchCareers(); }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this position?")) return;
    try {
      await deleteCareer(id);
      setCareers(careers.filter((c) => c._id !== id));
    } catch {}
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-secondary-950">Career Positions</h1>
        <Link href="/admin/careers/new" className="btn-primary text-sm py-2.5 px-5">
          <Plus size={16} /> New Position
        </Link>
      </div>

      {loading ? (
        <p className="text-slate-400 text-center py-12">Loading...</p>
      ) : careers.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-400 mb-4">No positions created yet</p>
          <Link href="/admin/careers/new" className="btn-primary text-sm py-2 px-5"><Plus size={16} /> Create Position</Link>
        </div>
      ) : (
        <div className="space-y-3">
          {careers.map((career) => (
            <div key={career._id} className="bg-white rounded-xl p-5 border border-slate-200 flex items-center justify-between gap-4 hover:border-primary-300 transition-colors">
              <div>
                <h3 className="font-heading font-bold text-secondary-950">{career.title}</h3>
                <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                  {career.department && <span className="flex items-center gap-1"><Briefcase size={12} /> {career.department}</span>}
                  {career.location && <span className="flex items-center gap-1"><MapPin size={12} /> {career.location}</span>}
                  <span className={`px-2 py-0.5 rounded-full ${career.isActive ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"}`}>
                    {career.isActive ? "Active" : "Closed"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Link href={`/admin/careers/edit/${career._id}`} className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-amber-500"><Edit size={16} /></Link>
                <button onClick={() => handleDelete(career._id)} className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 cursor-pointer"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

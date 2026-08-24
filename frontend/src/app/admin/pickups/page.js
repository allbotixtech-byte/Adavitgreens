"use client";

import { useState, useEffect } from "react";
import { Truck, Mail, Phone, MapPin, Trash2, CheckCircle, Calendar, Package } from "lucide-react";
import { getPickupSubmissions, markPickupRead, deletePickup } from "@/lib/adminApi";
import { formatDate } from "@/lib/utils";

export default function AdminPickupsPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await getPickupSubmissions();
      setSubmissions(data.pickups || []);
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleRead = async (id) => {
    await markPickupRead(id);
    setSubmissions(submissions.map((s) => s.id === id ? { ...s, isRead: true } : s));
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this request?")) return;
    await deletePickup(id);
    setSubmissions(submissions.filter((s) => s.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-secondary-950">Pickup Requests</h1>
        <span className="text-sm text-slate-500">{submissions.filter((s) => !s.isRead).length} unread</span>
      </div>

      {loading ? (
        <p className="text-slate-400 text-center py-12">Loading...</p>
      ) : submissions.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-400">No pickup requests yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {submissions.map((sub) => (
            <div key={sub.id} className={`bg-white rounded-xl p-5 border transition-colors ${sub.isRead ? "border-slate-200" : "border-orange-300 bg-orange-50/20"}`}>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-secondary-950">{sub.name}</h3>
                    {sub.organization && <span className="text-xs text-slate-500">({sub.organization})</span>}
                    {!sub.isRead && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Phone size={12} /> {sub.phone}</span>
                    <span className="flex items-center gap-1"><Mail size={12} /> {sub.email}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {sub.city}, {sub.pincode}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(sub.createdAt)}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {sub.materialType && <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-xs font-medium"><Package size={10} /> {sub.materialType}</span>}
                    {sub.quantity && <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">Qty: {sub.quantity}</span>}
                    {sub.preferredDate && <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs">{sub.preferredDate} {sub.preferredTime || ""}</span>}
                  </div>
                  {sub.address && <p className="text-xs text-slate-600 mt-1">{sub.address}</p>}
                  {sub.remarks && <p className="text-xs text-slate-500 mt-1 bg-slate-50 rounded-lg px-3 py-2">{sub.remarks}</p>}
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  {!sub.isRead && (
                    <button onClick={() => handleRead(sub.id)} className="p-2 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-500 cursor-pointer"><CheckCircle size={16} /></button>
                  )}
                  <button onClick={() => handleDelete(sub.id)} className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 cursor-pointer"><Trash2 size={16} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

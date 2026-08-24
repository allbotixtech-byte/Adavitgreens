"use client";

import { useState, useEffect } from "react";
import { Download, Mail, Phone, Briefcase, Calendar } from "lucide-react";
import { getApplications } from "@/lib/adminApi";
import { formatDate } from "@/lib/utils";

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplications()
      .then((data) => setApplications(data.applications || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="font-heading text-2xl font-bold text-secondary-950">Job Applications</h1>

      {loading ? (
        <p className="text-slate-400 text-center py-12">Loading...</p>
      ) : applications.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-400">No applications received yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {applications.map((app) => (
            <div key={app.id} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-primary-300 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-heading font-bold text-secondary-950">{app.name}</h3>
                    {app.careerTitle && (
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-700 text-xs font-medium flex items-center gap-1">
                        <Briefcase size={10} /> {app.careerTitle}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Mail size={12} /> {app.email}</span>
                    <span className="flex items-center gap-1"><Phone size={12} /> {app.phone}</span>
                    {app.experience && <span>Exp: {app.experience}</span>}
                    <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(app.createdAt)}</span>
                  </div>
                  {app.coverLetter && <p className="text-xs text-slate-500 line-clamp-2 mt-1">{app.coverLetter}</p>}
                </div>
                {app.resumeUrl && (
                  <a href={app.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs py-2 px-4 shrink-0">
                    <Download size={14} /> Resume
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

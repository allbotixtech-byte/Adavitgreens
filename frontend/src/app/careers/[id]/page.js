"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Briefcase, MapPin, Clock, CheckCircle, Send } from "lucide-react";
import { getCareerById, submitApplication } from "@/lib/api";

export default function CareerDetailPage() {
  const { id } = useParams();
  const [career, setCareer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "", coverLetter: "" });
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    async function fetchCareer() {
      try {
        const data = await getCareerById(id);
        setCareer(data.career || data);
      } catch {
        setCareer(null);
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchCareer();
  }, [id]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, val]) => fd.append(key, val));
      if (resume) fd.append("resume", resume);
      await submitApplication(id, fd);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center pt-40 pb-20"><p className="text-secondary-400">Loading...</p></div>;
  if (!career) return <div className="min-h-screen flex flex-col items-center justify-center pt-40 pb-20"><h2 className="font-heading text-2xl font-bold text-secondary-900 mb-4">Position Not Found</h2><Link href="/careers" className="text-primary-600 font-semibold">Back to Careers</Link></div>;

  return (
    <div className="pt-36 pb-24 md:pt-44 md:pb-28">
      <div className="container-custom max-w-3xl mx-auto">
        <Link href="/careers" className="inline-flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:gap-3 transition-all text-sm">
          <ArrowLeft size={18} /> Back to Careers
        </Link>

        <h1 className="font-heading text-3xl md:text-4xl font-bold text-secondary-950 mb-4">{career.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-secondary-500 mb-8 pb-6 border-b border-industrial-100">
          {career.department && <span className="flex items-center gap-1.5"><Briefcase size={15} className="text-primary-600" /> {career.department}</span>}
          {career.location && <span className="flex items-center gap-1.5"><MapPin size={15} className="text-primary-600" /> {career.location}</span>}
          {career.type && <span className="flex items-center gap-1.5"><Clock size={15} className="text-primary-600" /> {career.type}</span>}
        </div>

        {career.description && (
          <div className="prose max-w-none text-secondary-600 mb-8 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: career.description }} />
        )}

        {career.requirements && career.requirements.length > 0 && (
          <div className="mb-10">
            <h3 className="font-heading text-xl font-bold text-secondary-950 mb-4">Requirements & Qualifications</h3>
            <ul className="space-y-3">
              {career.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle size={18} className="text-primary-600 mt-0.5 shrink-0" />
                  <span className="text-secondary-700 text-sm leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Application Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-industrial-200/80 shadow-card">
          <h3 className="font-heading text-xl font-bold text-secondary-950 mb-6 pb-2 border-b border-industrial-100">
            Apply for this Position
          </h3>
          {status === "success" ? (
            <div className="text-center py-8">
              <CheckCircle size={48} className="text-emerald-600 mx-auto mb-4" />
              <h4 className="font-heading text-xl font-bold text-secondary-950 mb-2">Application Submitted!</h4>
              <p className="text-secondary-600 text-sm">We will review your application and contact you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Rahul Sharma" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="rahul@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">Relevant Experience</label>
                  <input type="text" name="experience" value={formData.experience} onChange={handleChange} placeholder="e.g. 3 years" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">Resume / CV (PDF or DOC) *</label>
                <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} required className="text-xs text-secondary-600 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100 cursor-pointer" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-secondary-700 uppercase tracking-wider mb-1.5">Cover Letter / Note</label>
                <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} rows={4} placeholder="Tell us briefly why you'd be a great fit for Advait Green." className="resize-none" />
              </div>
              <button type="submit" disabled={status === "loading"} className="btn-primary py-3.5 px-8 text-sm font-bold shadow-button">
                {status === "loading" ? "Submitting Application..." : "Submit Application"} <Send size={16} />
              </button>
              {status === "error" && <p className="text-red-600 text-xs mt-2">Something went wrong. Please try again or email careers@advaitgreen.com directly.</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

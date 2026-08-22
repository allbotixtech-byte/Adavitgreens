"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { createBlog } from "@/lib/adminApi";

const categories = ["E-Waste", "Circular Economy", "EPR", "Data Security", "Sustainability", "Recycling Technology", "Responsible Business"];

export default function NewBlogPage() {
  const router = useRouter();
  const [form, setForm] = useState({ title: "", category: "", excerpt: "", content: "", author: "Advait Green Team", tags: "", isPublished: false });
  const [thumbnail, setThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (thumbnail) fd.append("thumbnail", thumbnail);
      await createBlog(fd);
      router.push("/admin/blogs");
    } catch (err) {
      setError(err.message);
    } finally { setLoading(false); }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blogs" className="p-2 rounded-lg hover:bg-slate-100 text-slate-400"><ArrowLeft size={20} /></Link>
        <h1 className="font-heading text-2xl font-bold text-secondary-950">New Blog Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-200 space-y-5">
        {error && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-200">{error}</div>}

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Title *</label>
          <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="Blog post title" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Category *</label>
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required>
              <option value="">Select category</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Author</label>
            <input type="text" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Thumbnail Image</label>
          <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-primary-50 file:text-primary-700 file:font-semibold file:text-xs hover:file:bg-primary-100 cursor-pointer" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Excerpt</label>
          <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} placeholder="Short summary for listing cards" className="resize-none" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Content * (HTML supported)</label>
          <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={12} required placeholder="Write your blog content here. HTML tags are supported." className="resize-y font-mono text-xs" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Tags (comma separated)</label>
          <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="e-waste, recycling, circular-economy" />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="published" checked={form.isPublished} onChange={(e) => setForm({ ...form, isPublished: e.target.checked })} className="w-4 h-4 accent-primary-500" />
          <label htmlFor="published" className="text-sm text-slate-700 font-medium cursor-pointer">Publish immediately</label>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          <button type="submit" disabled={loading} className="btn-primary text-sm py-3 px-6">
            {loading ? "Creating..." : "Create Post"} <Save size={16} />
          </button>
          <Link href="/admin/blogs" className="btn-secondary text-sm py-3 px-6">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

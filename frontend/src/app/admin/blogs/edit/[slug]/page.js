"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { getAdminBlogBySlug, updateBlog } from "@/lib/adminApi";

const categories = ["E-Waste", "Circular Economy", "EPR", "Data Security", "Sustainability", "Recycling Technology", "Responsible Business"];

export default function EditBlogPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [form, setForm] = useState({ title: "", category: "", excerpt: "", content: "", author: "", tags: "", isPublished: false });
  const [thumbnail, setThumbnail] = useState(null);
  const [currentThumb, setCurrentThumb] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const data = await getAdminBlogBySlug(slug);
        const blog = data.blog || data;
        setForm({ title: blog.title, category: blog.category || "", excerpt: blog.excerpt || "", content: blog.content || "", author: blog.author || "", tags: blog.tags?.join(", ") || "", isPublished: blog.isPublished });
        setCurrentThumb(blog.thumbnail || "");
      } catch {} finally { setLoading(false); }
    }
    if (slug) load();
  }, [slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (thumbnail) fd.append("thumbnail", thumbnail);
      await updateBlog(slug, fd);
      router.push("/admin/blogs");
    } catch (err) {
      setError(err.message);
    } finally { setSaving(false); }
  };

  if (loading) return <p className="text-slate-400 text-center py-12">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blogs" className="p-2 rounded-lg hover:bg-slate-100 text-slate-400"><ArrowLeft size={20} /></Link>
        <h1 className="font-heading text-2xl font-bold text-secondary-950">Edit Blog Post</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-200 space-y-5">
        {error && <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-xl border border-red-200">{error}</div>}

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Title *</label>
          <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Category</label>
            <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
              <option value="">Select</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Author</label>
            <input type="text" value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Thumbnail</label>
          {currentThumb && !thumbnail && <img src={currentThumb} alt="" className="w-32 h-20 object-cover rounded-lg mb-2 border" />}
          <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-primary-50 file:text-primary-700 file:font-semibold file:text-xs cursor-pointer" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Excerpt</label>
          <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} className="resize-none" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Content (HTML)</label>
          <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} rows={12} required className="resize-y font-mono text-xs" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">Tags</label>
          <input type="text" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
        </div>

        <div className="flex items-center gap-3">
          <input type="checkbox" id="pub" checked={form.isPublished} onChange={(e) => setForm({ ...form, isPublished: e.target.checked })} className="w-4 h-4 accent-primary-500" />
          <label htmlFor="pub" className="text-sm text-slate-700 font-medium cursor-pointer">Published</label>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
          <button type="submit" disabled={saving} className="btn-primary text-sm py-3 px-6">{saving ? "Saving..." : "Save Changes"} <Save size={16} /></button>
          <Link href="/admin/blogs" className="btn-secondary text-sm py-3 px-6">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

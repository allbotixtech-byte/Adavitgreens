"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, Calendar } from "lucide-react";
import { getAdminBlogs, deleteBlog } from "@/lib/adminApi";
import { formatDate } from "@/lib/utils";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const data = await getAdminBlogs();
      setBlogs(data.blogs || []);
    } catch {} finally { setLoading(false); }
  };

  useEffect(() => { fetchBlogs(); }, []);

  const handleDelete = async (slug) => {
    if (!confirm("Delete this blog post?")) return;
    try {
      await deleteBlog(slug);
      setBlogs(blogs.filter((b) => b.slug !== slug));
    } catch {}
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-2xl font-bold text-secondary-950">Blog Posts</h1>
        <Link href="/admin/blogs/new" className="btn-primary text-sm py-2.5 px-5">
          <Plus size={16} /> New Post
        </Link>
      </div>

      {loading ? (
        <p className="text-slate-400 text-center py-12">Loading...</p>
      ) : blogs.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-400 mb-4">No blog posts yet</p>
          <Link href="/admin/blogs/new" className="btn-primary text-sm py-2 px-5"><Plus size={16} /> Create First Post</Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Title</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Status</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-600">Date</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {blogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-medium text-secondary-900 line-clamp-1">{blog.title}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">{blog.category || "-"}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${blog.isPublished ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>
                        {blog.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {formatDate(blog.createdAt)}</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <Link href={`/insights/${blog.slug}`} target="_blank" className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-blue-500"><Eye size={16} /></Link>
                        <Link href={`/admin/blogs/edit/${blog.slug}`} className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-amber-500"><Edit size={16} /></Link>
                        <button onClick={() => handleDelete(blog.slug)} className="p-2 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 cursor-pointer"><Trash2 size={16} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

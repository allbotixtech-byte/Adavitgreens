"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { getBlogBySlug } from "@/lib/api";
import { formatDate } from "@/lib/utils";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const data = await getBlogBySlug(slug);
        setBlog(data.blog || data);
      } catch {
        setBlog(null);
      } finally {
        setLoading(false);
      }
    }
    if (slug) fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-40 pb-20">
        <p className="text-secondary-400">Loading insight...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-40 pb-20">
        <h2 className="font-heading text-2xl font-bold text-secondary-900 mb-4">Article Not Found</h2>
        <Link href="/insights" className="text-primary-600 font-semibold">Back to Insights</Link>
      </div>
    );
  }

  return (
    <article className="pt-36 pb-24 md:pt-44 md:pb-28">
      <div className="container-custom max-w-3xl mx-auto">
        <Link href="/insights" className="inline-flex items-center gap-2 text-primary-600 font-semibold mb-8 hover:gap-3 transition-all text-sm">
          <ArrowLeft size={18} /> Back to Insights
        </Link>

        {blog.category && (
          <div className="flex items-center gap-2 mb-3">
            <span className="eyebrow">{blog.category}</span>
          </div>
        )}

        <h1 className="font-heading text-3xl md:text-5xl font-bold text-secondary-950 mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 text-xs sm:text-sm text-secondary-500 mb-8 pb-6 border-b border-industrial-100">
          {blog.publishedAt && (
            <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary-600" /> {formatDate(blog.publishedAt)}</span>
          )}
          {blog.author && (
            <span className="flex items-center gap-1.5"><User size={14} className="text-primary-600" /> {blog.author}</span>
          )}
        </div>

        {blog.thumbnail && (
          <img src={blog.thumbnail} alt={blog.title} className="w-full rounded-3xl mb-8 aspect-video object-cover shadow-card border border-industrial-200/80" />
        )}

        <div className="prose prose-lg max-w-none text-secondary-600 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </article>
  );
}

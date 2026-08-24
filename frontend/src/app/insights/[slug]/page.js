"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Clock,
  Calendar,
  User,
  Tag,
  Share2,
} from "lucide-react";

function estimateReadTime(content) {
  if (!content) return 3;
  const text = content.replace(/<[^>]*>/g, "");
  return Math.max(2, Math.ceil(text.split(/\s+/).length / 220));
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function extractHeadings(html) {
  if (!html) return [];
  const regex = /<h2[^>]*>(.*?)<\/h2>/gi;
  const headings = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = match[1].replace(/<[^>]*>/g, "");
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    headings.push({ text, id });
  }
  return headings;
}

function addIdsToHeadings(html) {
  if (!html) return "";
  return html.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attrs, text) => {
    const plainText = text.replace(/<[^>]*>/g, "");
    const id = plainText
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return `<h2${attrs} id="${id}">${text}</h2>`;
  });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blogs/${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then((data) => {
        setBlog(data);
        setLoading(false);
        return fetch("/api/blogs");
      })
      .then((r) => r.json())
      .then((data) => {
        const others = (data.blogs || []).filter((b) => b.slug !== slug);
        setRelatedBlogs(others.slice(0, 3));
      })
      .catch(() => {
        setNotFound(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#F4F6F3" }}
      >
        <div
          className="w-8 h-8 border-2 rounded-full animate-spin"
          style={{ borderColor: "#D6E9E0", borderTopColor: "#184E3E" }}
        />
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "#F4F6F3" }}
      >
        <h1
          className="font-heading text-2xl font-semibold mb-3"
          style={{ color: "#08201A" }}
        >
          Article Not Found
        </h1>
        <p className="text-sm mb-6" style={{ color: "#9AA69D" }}>
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "#995427" }}
        >
          <ArrowLeft size={15} /> Back to All Articles
        </Link>
      </div>
    );
  }

  const headings = extractHeadings(blog.content);
  const processedContent = addIdsToHeadings(blog.content);
  const readTime = estimateReadTime(blog.content);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-12 lg:pt-44 lg:pb-16"
        style={{ backgroundColor: "#08201A" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs mb-8 flex-wrap">
            <Link
              href="/"
              style={{ color: "#9AA69D" }}
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={12} style={{ color: "#5C6961" }} />
            <Link
              href="/insights"
              style={{ color: "#9AA69D" }}
              className="hover:text-white transition-colors"
            >
              Blog
            </Link>
            <ChevronRight size={12} style={{ color: "#5C6961" }} />
            <span
              className="truncate max-w-[200px]"
              style={{ color: "#CC7C4A" }}
            >
              {blog.title}
            </span>
          </nav>

          {/* Category + Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
              style={{ backgroundColor: "#184E3E", color: "#ffffff" }}
            >
              {blog.category}
            </span>
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: "#9AA69D" }}
            >
              <Calendar size={12} />
              {formatDate(blog.publishedAt)}
            </span>
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: "#9AA69D" }}
            >
              <Clock size={12} />
              {readTime} min read
            </span>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight leading-[1.15] max-w-[760px]"
            style={{ color: "#ffffff" }}
          >
            {blog.title}
          </motion.h1>

          {/* Author */}
          <div className="flex items-center gap-3 mt-6">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#184E3E" }}
            >
              <User size={16} style={{ color: "#D6E9E0" }} />
            </div>
            <div>
              <p className="text-sm font-medium" style={{ color: "#ffffff" }}>
                {blog.author}
              </p>
              <p className="text-xs" style={{ color: "#78857A" }}>
                Advait Green Recycling
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED IMAGE ── */}
      {blog.thumbnail && (
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 -mt-1">
          <div
            className="relative h-[300px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden"
            style={{ backgroundColor: "#E4EBE6" }}
          >
            <Image
              src={blog.thumbnail}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* ── CONTENT + SIDEBAR ── */}
      <section
        className="py-12 lg:py-16"
        style={{ backgroundColor: "#F4F6F3" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 lg:gap-14">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="min-w-0"
            >
              <div
                className="blog-content prose-custom"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div
                  className="mt-10 pt-8 flex flex-wrap items-center gap-2"
                  style={{ borderTop: "1px solid #D6E9E0" }}
                >
                  <Tag size={14} style={{ color: "#9AA69D" }} />
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "#E4EBE6",
                        color: "#47524B",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Back link */}
              <div className="mt-8">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                  style={{ color: "#995427" }}
                >
                  <ArrowLeft size={15} /> Back to All Articles
                </Link>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-[120px] lg:self-start">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  <h4
                    className="font-mono text-[11px] uppercase tracking-[0.09em] font-medium mb-4"
                    style={{ color: "#184E3E" }}
                  >
                    In This Article
                  </h4>
                  <nav className="space-y-2">
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className="block text-sm leading-relaxed transition-colors hover:translate-x-0.5"
                        style={{ color: "#5C6961" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#184E3E")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#5C6961")
                        }
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* CTA Widget */}
              <div
                className="rounded-xl p-6"
                style={{ backgroundColor: "#184E3E" }}
              >
                <h4
                  className="font-heading text-base font-semibold mb-2"
                  style={{ color: "#ffffff" }}
                >
                  Need a Recycling Partner?
                </h4>
                <p
                  className="text-xs leading-relaxed mb-5"
                  style={{ color: "#ADD2C2" }}
                >
                  Get a free waste assessment and collection plan within one
                  working day.
                </p>
                <Link
                  href="/schedule-pickup"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-colors w-full justify-center"
                  style={{ backgroundColor: "#995427", color: "#fff" }}
                >
                  Schedule Pickup <ArrowRight size={14} />
                </Link>
              </div>

              {/* Newsletter */}
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #D6E9E0",
                }}
              >
                <h4
                  className="font-heading text-sm font-semibold mb-1"
                  style={{ color: "#08201A" }}
                >
                  Subscribe
                </h4>
                <p
                  className="text-xs mb-4 leading-relaxed"
                  style={{ color: "#9AA69D" }}
                >
                  Monthly regulatory updates and recycling insights. No sales
                  mail.
                </p>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2.5 rounded text-sm mb-3 border-none outline-none"
                  style={{
                    backgroundColor: "#F4F6F3",
                    color: "#232925",
                  }}
                />
                <button
                  className="w-full py-2.5 rounded text-sm font-semibold cursor-pointer"
                  style={{
                    backgroundColor: "#08201A",
                    color: "#ffffff",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      {relatedBlogs.length > 0 && (
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#ffffff" }}>
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <h2
              className="font-heading text-xl sm:text-2xl font-semibold tracking-tight mb-8"
              style={{ color: "#08201A" }}
            >
              More Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((rb) => (
                <Link key={rb.id} href={`/insights/${rb.slug}`}>
                  <article
                    className="rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group"
                    style={{
                      backgroundColor: "#F4F6F3",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 8px 24px rgba(0,0,0,0.08)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.boxShadow =
                        "0 1px 3px rgba(0,0,0,0.04)")
                    }
                  >
                    <div
                      className="relative h-[180px] overflow-hidden"
                      style={{ backgroundColor: "#E4EBE6" }}
                    >
                      {rb.thumbnail ? (
                        <Image
                          src={rb.thumbnail}
                          alt={rb.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: "#D6E9E0" }}
                          >
                            <Tag size={20} style={{ color: "#184E3E" }} />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: "#184E3E",
                            color: "#ffffff",
                          }}
                        >
                          {rb.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div
                        className="flex items-center gap-2 text-xs mb-2"
                        style={{ color: "#9AA69D" }}
                      >
                        <Calendar size={11} />
                        {formatDate(rb.publishedAt)}
                      </div>
                      <h3
                        className="font-heading text-sm font-semibold leading-snug mb-2 line-clamp-2"
                        style={{ color: "#08201A" }}
                      >
                        {rb.title}
                      </h3>
                      <span
                        className="inline-flex items-center gap-1 text-xs font-semibold mt-auto"
                        style={{ color: "#995427" }}
                      >
                        Read More <ArrowRight size={12} />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section
        className="py-14 lg:py-20 relative overflow-hidden"
        style={{ backgroundColor: "#08201A" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <h2
            className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-4 max-w-[600px] mx-auto"
            style={{ color: "#ffffff" }}
          >
            Have Equipment to Decommission?
          </h2>
          <p
            className="text-sm sm:text-base max-w-[480px] mx-auto mb-8 leading-relaxed"
            style={{ color: "#9AA69D" }}
          >
            Tell us what you have and where it is. We'll come back within one
            working day with a collection plan.
          </p>
          <Link
            href="/schedule-pickup"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
            style={{ backgroundColor: "#995427", color: "#fff" }}
          >
            Schedule a Free Pickup <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

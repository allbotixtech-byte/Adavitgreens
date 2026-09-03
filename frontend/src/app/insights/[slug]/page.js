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
  ChevronDown,
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

function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden transition-all duration-200"
          style={{ border: "1px solid var(--color-primary-100)" }}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3 text-left cursor-pointer"
            style={{ backgroundColor: openIndex === i ? "#F0F5F2" : "#ffffff" }}
          >
            <span
              className="text-sm font-semibold pr-4"
              style={{ color: "var(--color-primary-950)" }}
            >
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className="shrink-0 transition-transform duration-200"
              style={{
                color: "var(--color-primary-700)",
                transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </button>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === i ? "500px" : "0",
              opacity: openIndex === i ? 1 : 0,
            }}
          >
            <div
              className="px-4 pb-4 text-sm leading-relaxed"
              style={{ color: "var(--color-secondary-600)" }}
            >
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
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
        style={{ backgroundColor: "var(--color-secondary-50)" }}
      >
        <div
          className="w-8 h-8 border-2 rounded-full animate-spin"
          style={{ borderColor: "var(--color-primary-100)", borderTopColor: "var(--color-primary-700)" }}
        />
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ backgroundColor: "var(--color-secondary-50)" }}
      >
        <h1
          className="font-heading text-2xl font-semibold mb-3"
          style={{ color: "var(--color-primary-950)" }}
        >
          Article Not Found
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--color-secondary-400)" }}>
          The article you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-semibold"
          style={{ color: "var(--color-accent-600)" }}
        >
          <ArrowLeft size={15} /> Back to All Articles
        </Link>
      </div>
    );
  }

  const headings = extractHeadings(blog.content);
  const processedContent = addIdsToHeadings(blog.content);
  const readTime = estimateReadTime(blog.content);

  const faqItems = blog.faqs || [];

  return (
    <>
      {/* ── HEADER SECTION ── */}
      <section style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 sm:pt-10">
          {/* Breadcrumb */}
          <nav
            className="inline-flex items-center gap-1 text-[11px] sm:text-[13px] mb-6 sm:mb-10 flex-wrap px-2.5 sm:px-3 py-1.5 rounded-b-lg"
            style={{ backgroundColor: "#E4EBE6" }}
          >
            <Link
              href="/"
              className="transition-colors"
              style={{ color: "var(--color-primary-700)" }}
            >
              Home
            </Link>
            <span style={{ color: "var(--color-secondary-400)" }}>/</span>
            <Link
              href="/insights"
              className="transition-colors"
              style={{ color: "var(--color-primary-700)" }}
            >
              Blog
            </Link>
            <span style={{ color: "var(--color-secondary-400)" }}>/</span>
            <span
              className="font-medium truncate max-w-[140px] sm:max-w-[220px]"
              style={{ color: "var(--color-primary-950)" }}
            >
              {blog.title}
            </span>
          </nav>

          {/* Centered Title + Meta + Image */}
          <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-4 sm:gap-6 mb-6 sm:mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight px-1"
              style={{ color: "var(--color-primary-950)", lineHeight: 1.2 }}
            >
              {blog.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-0 text-xs sm:text-sm"
              style={{ color: "var(--color-secondary-500)" }}
            >
              <span>
                By{" "}
                <span style={{ color: "var(--color-primary-950)", fontWeight: 500 }}>
                  {blog.author}
                </span>
              </span>
              <span className="hidden sm:inline mx-1.5">|</span>
              <span>{formatDate(blog.publishedAt)}</span>
              <span className="hidden sm:inline mx-1.5">|</span>
              <span className="sm:ml-0">{readTime} min read</span>
            </motion.div>

            {/* Featured Image */}
            {blog.thumbnail && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.12 }}
                className="w-full rounded-lg sm:rounded-xl overflow-hidden"
                style={{ maxHeight: "500px" }}
              >
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  width={900}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ── TOC + CONTENT ── */}
      <section style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pb-12 lg:pb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* TOC Sidebar - LEFT on desktop, TOP on mobile */}
            {headings.length > 0 && (
              <aside className="w-full lg:w-[30%] shrink-0">
                <div
                  className="rounded-xl p-4 sm:p-0 lg:sticky lg:top-[120px]"
                  style={{ backgroundColor: "rgba(228,235,230,0.5)" }}
                >
                  <div className="lg:bg-transparent lg:p-0">
                    <h4
                      className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4"
                      style={{ color: "var(--color-primary-700)" }}
                    >
                      Table of Contents
                    </h4>
                    <nav className="max-h-[200px] sm:max-h-none lg:max-h-[50vh] overflow-y-auto lg:overflow-y-auto space-y-2.5 sm:space-y-3 pr-2">
                      {headings.map((h) => (
                        <a
                          key={h.id}
                          href={`#${h.id}`}
                          className="flex items-start gap-2 text-[13px] sm:text-sm font-semibold leading-relaxed transition-colors group"
                          style={{ color: "var(--color-secondary-700)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--color-primary-700)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--color-secondary-700)")
                          }
                        >
                          <svg
                            width="8"
                            height="16"
                            viewBox="0 0 8 16"
                            fill="none"
                            className="shrink-0 mt-0.5"
                          >
                            <path
                              d="M1 1L7 8L1 15"
                              stroke="var(--color-primary-700)"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="line-clamp-2">{h.text}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>
            )}

            {/* Main Content - RIGHT on desktop */}
            <motion.article
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="min-w-0 flex-1"
            >
              <div
                className="blog-content prose-custom"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />

              {/* FAQ Section */}
              {faqItems.length > 0 && (
                <div className="mt-10 sm:mt-14">
                  <h2
                    className="font-heading text-xl sm:text-2xl font-bold mb-4"
                    style={{ color: "var(--color-primary-700)" }}
                  >
                    FAQs
                  </h2>
                  <FaqAccordion items={faqItems} />
                </div>
              )}

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div
                  className="mt-10 pt-8 flex flex-wrap items-center gap-2"
                  style={{ borderTop: "1px solid var(--color-primary-100)" }}
                >
                  <Tag size={14} style={{ color: "var(--color-secondary-400)" }} />
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: "#E4EBE6",
                        color: "var(--color-secondary-700)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Back link */}
              <div className="mt-10 text-center">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold underline transition-colors"
                  style={{ color: "var(--color-primary-700)" }}
                >
                  <ArrowLeft size={15} /> Back to All Blogs
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 pb-10 sm:pb-12 lg:pb-16">
          <div
            className="relative rounded-xl sm:rounded-2xl overflow-hidden px-5 py-7 sm:px-10 sm:py-12 text-center"
            style={{
              background: "linear-gradient(135deg, var(--color-primary-900) 0%, var(--color-primary-700) 100%)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] rounded-full"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                transform: "translate(50%, -50%)",
              }}
            />

            <div className="relative flex flex-col items-center gap-3 sm:gap-4">
              <h3
                className="font-heading text-lg sm:text-xl md:text-2xl font-bold"
                style={{ color: "#ffffff", lineHeight: 1.3 }}
              >
                Have Equipment to Decommission?
              </h3>
              <p
                className="text-xs sm:text-sm md:text-base max-w-[520px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Tell us what you have and where it is. We&apos;ll come back within one
                working day with a collection plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 mt-1 sm:mt-2 w-full sm:w-auto">
                <Link
                  href="/schedule-pickup"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
                  style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
                >
                  Schedule a Free Pickup <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-colors"
                  style={{
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  Contact Sales
                </Link>
              </div>
              <p
                className="text-[10px] sm:text-xs mt-1 sm:mt-2"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                CPCB Authorized | ISO 14001 Certified | Pan-India Collection
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

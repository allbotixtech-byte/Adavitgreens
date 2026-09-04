"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Clock,
  Search,
  Mail,
  User,
  X,
  Newspaper,
} from "lucide-react";

const categories = [
  "All",
  "E-Waste",
  "Plastic Waste",
  "EPR & Compliance",
  "Data Security",
  "Battery & Solar",
  "Circular Economy",
  "Sustainability for Business",
  "Company News",
];

function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function InsightsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/api/blogs")
      .then((r) => r.json())
      .then((data) => {
        setBlogs(data.blogs || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = blogs.filter((b) => {
    const matchCat =
      activeCategory === "All" || b.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.excerpt || "").toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] bg-primary-950 overflow-hidden flex items-end sm:items-center pb-16 sm:pb-0">
        <img
          src="/images/blog_hero_bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span style={{ color: "var(--color-accent-400)" }}>Blog</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] text-white/70 mb-3 sm:mb-4"
            >
              Our Blog
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1] sm:leading-[1.06] tracking-tight mb-4 sm:mb-5"
            >
              Insights from the Recycling Floor
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white text-sm sm:text-base lg:text-lg leading-relaxed max-w-[52ch] mb-6 sm:mb-8"
            >
              Regulatory updates, practical guides and honest commentary on waste
              management in India.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/schedule-pickup"
                className="inline-flex items-center justify-center gap-2 bg-accent-600 hover:bg-accent-700 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff" }}
              >
                Schedule a Free Pickup <ArrowRight size={15} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded text-sm font-semibold transition-colors"
                style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FILTERS ── */}
      <section
        className="sticky top-[64px] sm:top-[72px] lg:top-[116px] z-30"
        style={{ backgroundColor: "#ffffff", borderBottom: "1px solid var(--color-secondary-200)" }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const on = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={on}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer border"
                    style={{
                      backgroundColor: on ? "var(--color-primary-700)" : "transparent",
                      borderColor: on ? "var(--color-primary-700)" : "var(--color-secondary-200)",
                      color: on ? "#ffffff" : "var(--color-secondary-700)",
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search — inline styles: globals.css sets unlayered input rules
                that outrank Tailwind utilities. */}
            <div className="relative w-full lg:w-[280px] shrink-0">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none z-10"
                style={{ color: "var(--color-secondary-400)" }}
              />
              <input
                type="text"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search articles"
                style={{
                  width: "100%",
                  fontSize: "0.875rem",
                  padding: "0.6rem 2.4rem 0.6rem 2.5rem",
                  borderRadius: "9999px",
                  backgroundColor: "var(--color-secondary-50)",
                  border: "1px solid var(--color-secondary-200)",
                  color: "var(--color-secondary-900)",
                  outline: "none",
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ color: "var(--color-secondary-400)" }}
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="py-10 lg:py-16" style={{ backgroundColor: "var(--color-secondary-50)" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {!loading && filtered.length > 0 && (
            <p className="font-mono text-[11px] uppercase tracking-[0.09em] mb-6" style={{ color: "var(--color-secondary-500)" }}>
              {filtered.length} {filtered.length === 1 ? "article" : "articles"}
              {activeCategory !== "All" && ` in ${activeCategory}`}
            </p>
          )}

          {loading ? (
            /* Skeletons keep the grid from collapsing while data loads */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden animate-pulse"
                  style={{ backgroundColor: "#ffffff", border: "1px solid var(--color-secondary-200)" }}
                >
                  <div className="h-[200px]" style={{ backgroundColor: "var(--color-secondary-100)" }} />
                  <div className="p-5">
                    <div className="h-4 w-3/4 rounded mb-3" style={{ backgroundColor: "var(--color-secondary-100)" }} />
                    <div className="h-3 w-full rounded mb-2" style={{ backgroundColor: "var(--color-secondary-100)" }} />
                    <div className="h-3 w-5/6 rounded" style={{ backgroundColor: "var(--color-secondary-100)" }} />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="flex flex-col items-center text-center rounded-2xl border border-dashed py-16 px-6"
              style={{ borderColor: "var(--color-secondary-300)", backgroundColor: "#ffffff" }}
            >
              <Search size={26} strokeWidth={1.5} style={{ color: "var(--color-secondary-400)" }} />
              <p className="font-heading text-lg font-semibold mt-4 mb-1.5" style={{ color: "var(--color-primary-950)" }}>
                No articles found
              </p>
              <p className="text-sm mb-6" style={{ color: "var(--color-secondary-500)" }}>
                {searchQuery
                  ? `Nothing matches “${searchQuery}”.`
                  : "Check back later for new content."}
              </p>
              {(searchQuery || activeCategory !== "All") && (
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white cursor-pointer transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--color-primary-700)" }}
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map((blog, i) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.07, ease: [0.2, 0, 0, 1] }}
                >
                  <Link href={`/insights/${blog.slug}`} className="block h-full">
                    <article
                      className="group rounded-2xl overflow-hidden flex flex-col h-full border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                      style={{ backgroundColor: "#ffffff", borderColor: "var(--color-secondary-200)" }}
                    >
                      {/* Cover */}
                      <div
                        className="relative overflow-hidden h-[190px] sm:h-[200px] shrink-0"
                        style={{ backgroundColor: "var(--color-primary-900)" }}
                      >
                        {blog.thumbnail ? (
                          <Image
                            src={blog.thumbnail}
                            alt={blog.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Newspaper size={34} strokeWidth={1.2} style={{ color: "rgba(255,255,255,0.28)" }} />
                          </div>
                        )}

                        {/* Category badge */}
                        {blog.category && (
                          <span
                            className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.06em]"
                            style={{
                              backgroundColor: "rgba(255,255,255,0.92)",
                              backdropFilter: "blur(8px)",
                              color: "var(--color-primary-800)",
                            }}
                          >
                            {blog.category}
                          </span>
                        )}
                      </div>

                      {/* Body */}
                      <div className="p-5 sm:p-6 flex flex-col flex-1">
                        <h3
                          className="font-heading text-base sm:text-[17px] font-bold leading-snug line-clamp-2 mb-3"
                          style={{ color: "var(--color-primary-950)" }}
                        >
                          {blog.title}
                        </h3>

                        <div className="w-9 h-[3px] rounded-full mb-3.5" style={{ backgroundColor: "var(--color-accent-500)" }} />

                        <p
                          className="text-[13px] leading-relaxed line-clamp-3 mb-5 flex-1"
                          style={{ color: "var(--color-secondary-600)" }}
                        >
                          {blog.excerpt}
                        </p>

                        <div
                          className="flex items-center justify-between gap-3 pt-3.5"
                          style={{ borderTop: "1px solid var(--color-secondary-100)" }}
                        >
                          <div className="flex items-center gap-3 text-[11px] min-w-0" style={{ color: "var(--color-secondary-500)" }}>
                            <span className="flex items-center gap-1.5 shrink-0">
                              <Clock size={12} style={{ color: "var(--color-primary-500)" }} />
                              {formatDate(blog.publishedAt)}
                            </span>
                            {blog.author && (
                              <span className="flex items-center gap-1.5 min-w-0">
                                <User size={12} className="shrink-0" style={{ color: "var(--color-primary-500)" }} />
                                <span className="truncate">{blog.author}</span>
                              </span>
                            )}
                          </div>
                          <span
                            className="inline-flex items-center gap-1.5 text-xs font-semibold shrink-0"
                            style={{ color: "var(--color-primary-700)" }}
                          >
                            Read
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER CTA ── */}
      <section
        className="py-14 lg:py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-primary-950)" }}
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
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <Mail size={24} style={{ color: "var(--color-accent-400)" }} />
          </div>
          <h2
            className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            style={{ color: "#ffffff" }}
          >
            Stay Updated
          </h2>
          <p
            className="text-sm sm:text-base max-w-[480px] mx-auto mb-8 leading-relaxed"
            style={{ color: "var(--color-secondary-400)" }}
          >
            Monthly regulatory updates and recycling insights. No sales mail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[440px] mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              className="w-full sm:flex-1"
              style={{
                fontSize: "0.875rem",
                padding: "0.75rem 1rem",
                borderRadius: "8px",
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.12)",
                outline: "none",
              }}
            />
            <button
              className="w-full sm:w-auto px-6 py-3 rounded text-sm font-semibold transition-colors cursor-pointer"
              style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

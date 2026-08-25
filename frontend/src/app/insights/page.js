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
          src="/images/blog_hero_bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-0">
          <div className="max-w-[640px]">
            <nav className="flex items-center gap-2 text-xs mb-6 sm:mb-8">
              <Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} className="text-white/30" />
              <span style={{ color: "#CC7C4A" }}>Blog</span>
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
      <section style={{ backgroundColor: "#F4F6F3" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor:
                      activeCategory === cat ? "#184E3E" : "#E4EBE6",
                    color: activeCategory === cat ? "#ffffff" : "#47524B",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full lg:w-[280px] shrink-0">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2"
                style={{ color: "#9AA69D" }}
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg text-sm border-none outline-none"
                style={{
                  backgroundColor: "#E4EBE6",
                  color: "#232925",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG GRID ── */}
      <section className="py-12 lg:py-16" style={{ backgroundColor: "#F4F6F3" }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          {loading ? (
            <div className="text-center py-20">
              <div
                className="w-8 h-8 border-2 rounded-full animate-spin mx-auto"
                style={{
                  borderColor: "#D6E9E0",
                  borderTopColor: "#184E3E",
                }}
              />
              <p className="mt-4 text-sm" style={{ color: "#9AA69D" }}>
                Loading articles...
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p
                className="font-heading text-xl font-semibold mb-2"
                style={{ color: "#08201A" }}
              >
                No articles found
              </p>
              <p className="text-sm" style={{ color: "#9AA69D" }}>
                {searchQuery
                  ? "Try a different search term."
                  : "Check back later for new content."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
                {filtered.map((blog, i) => (
                  <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Link href={`/insights/${blog.slug}`}>
                      <article
                        className="rounded-2xl overflow-hidden group transition-all duration-300 flex flex-col h-full"
                        style={{
                          backgroundColor: "#ffffff",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.boxShadow =
                            "0 10px 30px rgba(0,0,0,0.1)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.boxShadow =
                            "0 1px 4px rgba(0,0,0,0.06)")
                        }
                      >
                        {/* ── Image Banner ── */}
                        <div
                          className="relative overflow-hidden h-[220px] sm:h-[280px] lg:h-[340px]"
                          style={{
                            background: "linear-gradient(135deg, #184E3E 0%, #2A7A5E 50%, #184E3E 100%)",
                          }}
                        >
                          {blog.thumbnail ? (
                            <Image
                              src={blog.thumbnail}
                              alt={blog.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E23] via-[#184E3E] to-[#2A7A5E] flex items-center justify-center">
                              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                                  <line x1="4" y1="22" x2="4" y2="15" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* ── White Content Area ── */}
                        <div className="p-5 sm:p-6 flex flex-col flex-1">
                          {/* Title (repeated) */}
                          <h4
                            className="font-heading text-base sm:text-lg font-bold leading-snug line-clamp-2 mb-2"
                            style={{ color: "#08201A" }}
                          >
                            {blog.title}
                          </h4>

                          {/* Accent divider */}
                          <div
                            className="w-8 h-[3px] rounded-full mb-3"
                            style={{ backgroundColor: "#184E3E" }}
                          />

                          {/* Excerpt */}
                          <p
                            className="text-sm leading-relaxed line-clamp-3 mb-4 flex-1"
                            style={{ color: "#5C6961" }}
                          >
                            {blog.excerpt}
                          </p>

                          {/* Bottom: Date + Author | Learn More */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 pt-3" style={{ borderTop: "1px solid #EDF1EE" }}>
                            <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs" style={{ color: "#9AA69D" }}>
                              <span className="flex items-center gap-1.5">
                                <Clock size={12} className="shrink-0" style={{ color: "#184E3E" }} />
                                {formatDate(blog.publishedAt)}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <User size={12} className="shrink-0" style={{ color: "#184E3E" }} />
                                <span className="truncate max-w-[120px] sm:max-w-none">{blog.author}</span>
                              </span>
                            </div>
                            <span
                              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold italic"
                              style={{ color: "#08201A" }}
                            >
                              Learn More
                              <ArrowRight
                                size={15}
                                className="transition-transform group-hover:translate-x-1"
                              />
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
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <Mail size={24} style={{ color: "#CC7C4A" }} />
          </div>
          <h2
            className="font-heading text-2xl sm:text-3xl font-semibold tracking-tight mb-3"
            style={{ color: "#ffffff" }}
          >
            Stay Updated
          </h2>
          <p
            className="text-sm sm:text-base max-w-[480px] mx-auto mb-8 leading-relaxed"
            style={{ color: "#9AA69D" }}
          >
            Monthly regulatory updates and recycling insights. No sales mail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[440px] mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:flex-1 px-4 py-3 rounded text-sm border-none outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#ffffff",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
            <button
              className="w-full sm:w-auto px-6 py-3 rounded text-sm font-semibold transition-colors cursor-pointer"
              style={{ backgroundColor: "#995427", color: "#fff" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

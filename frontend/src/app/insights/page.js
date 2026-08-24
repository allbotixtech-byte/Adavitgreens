"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowRight,
  Clock,
  Calendar,
  Search,
  Tag,
  Mail,
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

function estimateReadTime(content) {
  if (!content) return 3;
  const text = content.replace(/<[^>]*>/g, "");
  return Math.max(2, Math.ceil(text.split(/\s+/).length / 220));
}

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

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-16 lg:pt-44 lg:pb-20"
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
          <nav className="flex items-center gap-2 text-xs mb-8">
            <Link
              href="/"
              style={{ color: "#9AA69D" }}
              className="hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={12} style={{ color: "#5C6961" }} />
            <span style={{ color: "#CC7C4A" }}>Blog</span>
          </nav>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] max-w-[700px]"
            style={{ color: "#ffffff" }}
          >
            Insights from the Recycling Floor
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg max-w-[560px]"
            style={{ color: "#9AA69D" }}
          >
            Regulatory updates, practical guides and honest commentary on waste
            management in India.
          </motion.p>
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
                  className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
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
            <>
              {/* Featured Post */}
              {featured && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10"
                >
                  <Link href={`/insights/${featured.slug}`}>
                    <div
                      className="rounded-2xl overflow-hidden grid lg:grid-cols-2 transition-shadow duration-300"
                      style={{
                        backgroundColor: "#ffffff",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                      }}
                    >
                      {/* Featured Image */}
                      <div
                        className="relative h-[240px] lg:h-auto min-h-[300px]"
                        style={{ backgroundColor: "#E4EBE6" }}
                      >
                        {featured.thumbnail ? (
                          <Image
                            src={featured.thumbnail}
                            alt={featured.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div
                              className="w-20 h-20 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: "#D6E9E0" }}
                            >
                              <Tag size={32} style={{ color: "#184E3E" }} />
                            </div>
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span
                            className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: "#184E3E",
                              color: "#ffffff",
                            }}
                          >
                            Featured
                          </span>
                        </div>
                      </div>
                      {/* Featured Content */}
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className="px-3 py-1 rounded-full text-[11px] font-semibold"
                            style={{
                              backgroundColor: "#EDF5F1",
                              color: "#184E3E",
                            }}
                          >
                            {featured.category}
                          </span>
                          <span
                            className="flex items-center gap-1 text-xs"
                            style={{ color: "#9AA69D" }}
                          >
                            <Calendar size={12} />
                            {formatDate(featured.publishedAt)}
                          </span>
                          <span
                            className="flex items-center gap-1 text-xs"
                            style={{ color: "#9AA69D" }}
                          >
                            <Clock size={12} />
                            {estimateReadTime(featured.content)} min read
                          </span>
                        </div>
                        <h2
                          className="font-heading text-xl sm:text-2xl lg:text-[28px] font-semibold leading-snug mb-4"
                          style={{ color: "#08201A" }}
                        >
                          {featured.title}
                        </h2>
                        <p
                          className="text-sm leading-relaxed mb-6 line-clamp-3"
                          style={{ color: "#5C6961" }}
                        >
                          {featured.excerpt}
                        </p>
                        <span
                          className="inline-flex items-center gap-2 text-sm font-semibold"
                          style={{ color: "#995427" }}
                        >
                          Read Article <ArrowRight size={15} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Grid Cards */}
              {rest.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((blog, i) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                    >
                      <Link href={`/insights/${blog.slug}`}>
                        <article
                          className="rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group"
                          style={{
                            backgroundColor: "#ffffff",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.boxShadow =
                              "0 8px 24px rgba(0,0,0,0.1)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.boxShadow =
                              "0 1px 3px rgba(0,0,0,0.06)")
                          }
                        >
                          {/* Card Image */}
                          <div
                            className="relative h-[200px] overflow-hidden"
                            style={{ backgroundColor: "#E4EBE6" }}
                          >
                            {blog.thumbnail ? (
                              <Image
                                src={blog.thumbnail}
                                alt={blog.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            ) : (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                  className="w-14 h-14 rounded-full flex items-center justify-center"
                                  style={{ backgroundColor: "#D6E9E0" }}
                                >
                                  <Tag
                                    size={24}
                                    style={{ color: "#184E3E" }}
                                  />
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
                                {blog.category}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-5 flex flex-col flex-1">
                            <div
                              className="flex items-center gap-3 text-xs mb-3"
                              style={{ color: "#9AA69D" }}
                            >
                              <span className="flex items-center gap-1">
                                <Calendar size={11} />
                                {formatDate(blog.publishedAt)}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={11} />
                                {estimateReadTime(blog.content)} min
                              </span>
                            </div>
                            <h3
                              className="font-heading text-base font-semibold leading-snug mb-2.5 line-clamp-2"
                              style={{ color: "#08201A" }}
                            >
                              {blog.title}
                            </h3>
                            <p
                              className="text-sm leading-relaxed line-clamp-2 mb-4 flex-1"
                              style={{ color: "#5C6961" }}
                            >
                              {blog.excerpt}
                            </p>
                            <span
                              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                              style={{ color: "#995427" }}
                            >
                              Read More{" "}
                              <ArrowRight
                                size={14}
                                className="transition-transform group-hover:translate-x-1"
                              />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
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

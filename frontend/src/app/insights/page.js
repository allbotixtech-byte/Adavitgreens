"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Tag, BookOpen, Clock } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import BlogCard from "@/components/sections/BlogCard";
import SectionHeading from "@/components/sections/SectionHeading";
import { getBlogs } from "@/lib/api";

const sampleArticles = [
  {
    _id: "art-01",
    slug: "e-waste-management-rules-2022-epr-guide",
    title: "Understanding E-Waste Management Rules 2022 & Annual EPR Targets in India",
    category: "EPR Compliance",
    publishedAt: "2026-03-15",
    excerpt: "A comprehensive operational breakdown for electronics manufacturers, importers, and brand owners navigating statutory collection quotas and SPCB portal filings.",
    readTime: "6 min read",
  },
  {
    _id: "art-02",
    slug: "secure-data-destruction-enterprise-best-practices",
    title: "Secure ITAD & Data Destruction: Why Cryptographic Erasure & Degaussing Matter",
    category: "Data Security",
    publishedAt: "2026-03-10",
    excerpt: "Enterprise data risks do not disappear with factory resets. Learn the compliance standards behind serial-verified physical shredding and degaussing for retired drives.",
    readTime: "5 min read",
  },
  {
    _id: "art-03",
    slug: "circular-economy-closed-loop-metals-recovery",
    title: "Recovering High-Purity Copper and Rare Elements From Decommissioned Hardware",
    category: "Circular Economy",
    publishedAt: "2026-02-28",
    excerpt: "How modern mechanical granulation and density separation unlock valuable secondary commodities, saving thousands of kilowatt-hours compared to virgin mining.",
    readTime: "7 min read",
  },
  {
    _id: "art-04",
    slug: "corporate-esg-reporting-metrics-for-e-waste",
    title: "Integrating Responsible E-Waste Disposition Into Corporate ESG & Scope 3 Reporting",
    category: "Sustainability",
    publishedAt: "2026-02-18",
    excerpt: "Quantifying your company's carbon avoidance and landfill diversion through certified Green Recycling Certificates and verifiable audit trails.",
    readTime: "5 min read",
  },
  {
    _id: "art-05",
    slug: "reverse-logistics-supply-chain-electronics-scrap",
    title: "Optimizing Reverse Logistics Networks for Industrial & Commercial Scrap Aggregation",
    category: "Recycling Technology",
    publishedAt: "2026-02-05",
    excerpt: "Overcoming freight hurdles, weighbridge calibration, and consignment insurance when consolidating discarded electronics across pan-India branch networks.",
    readTime: "6 min read",
  },
  {
    _id: "art-06",
    slug: "refurbishment-vs-recycling-lifecycle-extension",
    title: "Refurbishment vs Recycling: Maximizing Residual Asset Value for Corporate IT",
    category: "Responsible Business",
    publishedAt: "2026-01-22",
    excerpt: "How extending the operational lifecycle of enterprise laptops and monitors delivers both financial recovery and superior environmental benchmarks.",
    readTime: "4 min read",
  },
];

const categories = ["All", "EPR Compliance", "Data Security", "Circular Economy", "Sustainability", "Recycling Technology", "Responsible Business"];

export default function InsightsPage() {
  const [blogs, setBlogs] = useState(sampleArticles);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const params = activeCategory !== "All" ? { category: activeCategory } : {};
        const data = await getBlogs(params);
        if (data && (data.blogs?.length > 0 || data.length > 0)) {
          setBlogs(data.blogs || data);
        }
      } catch {
        // use sampleArticles
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [activeCategory]);

  const filteredBlogs = activeCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category === activeCategory);

  return (
    <>
      <HeroSection
        eyebrow="EDUCATIONAL INSIGHTS"
        heading="Knowledge That Drives the Circular Economy Forward"
        description="Explore practical insights, statutory regulatory guides, and best practices in e-waste recycling, IT asset disposition, and corporate sustainability."
        minHeight="min-h-[60vh]"
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-button"
                    : "bg-slate-100 text-secondary-700 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={blog._id || index} blog={blog} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { formatDate, truncate } from "@/lib/utils";

export default function BlogCard({ blog, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/insights/${blog.slug}`}
        className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-primary-300 hover:shadow-card-hover transition-all duration-300 h-full"
      >
        <div>
          {/* Thumbnail */}
          <div className="relative h-52 bg-slate-100 overflow-hidden">
            {blog.thumbnail ? (
              <img
                src={blog.thumbnail}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-950 flex items-center justify-center p-6 text-center">
                <span className="text-primary-300/80 text-lg font-heading font-semibold">
                  {blog.title}
                </span>
              </div>
            )}
            {blog.category && (
              <span className="absolute top-3.5 left-3.5 bg-primary-600/90 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                <Tag size={10} />
                {blog.category}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {blog.publishedAt && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mb-2.5">
                <Calendar size={13} className="text-primary-600" />
                <span>{formatDate(blog.publishedAt)}</span>
              </div>
            )}
            <h3 className="font-heading font-bold text-lg text-secondary-950 mb-2.5 group-hover:text-primary-700 transition-colors line-clamp-2 leading-snug">
              {blog.title}
            </h3>
            <p className="text-sm text-secondary-600 leading-relaxed mb-4 line-clamp-3 font-normal">
              {truncate(blog.excerpt, 130)}
            </p>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-primary-700 group-hover:text-primary-600 transition-colors">
          <span>Read Full Article</span>
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}

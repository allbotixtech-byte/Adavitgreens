"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/sections/HeroSection";
import GalleryGrid from "@/components/sections/GalleryGrid";
import SectionHeading from "@/components/sections/SectionHeading";
import { getGalleryImages } from "@/lib/api";

const sampleImages = [
  {
    _id: "gal-01",
    imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
    title: "Electronic Component Sorting & Inspection",
    category: "Operations",
  },
  {
    _id: "gal-02",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    title: "Precision De-manufacturing Bench",
    category: "Facility",
  },
  {
    _id: "gal-03",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    title: "Safety-Equipped Facility Engineers",
    category: "Team",
  },
  {
    _id: "gal-04",
    imageUrl: "https://images.unsplash.com/photo-1618042164219-62c820f10723?auto=format&fit=crop&w=800&q=80",
    title: "Recovered High-Purity Copper & Metals",
    category: "Sustainability",
  },
  {
    _id: "gal-05",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    title: "Secure Material Inbound & Warehousing",
    category: "Facility",
  },
  {
    _id: "gal-06",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    title: "Printed Circuit Board Classification",
    category: "Operations",
  },
];

const categories = ["All", "Facility", "Operations", "Team", "Sustainability"];

export default function GalleryPage() {
  const [images, setImages] = useState(sampleImages);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        const params = activeCategory !== "All" ? { category: activeCategory } : {};
        const data = await getGalleryImages(params);
        if (data && (data.images?.length > 0 || data.length > 0)) {
          setImages(data.images || data);
        }
      } catch {
        // use sampleImages
      } finally {
        setLoading(false);
      }
    }
    fetchImages();
  }, [activeCategory]);

  const filteredImages = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <HeroSection
        eyebrow="VISUAL SHOWCASE"
        heading="Inside Our Gujarat Recycling Facility"
        description="Explore our Mahesana processing infrastructure, material segregation lines, occupational safety protocols, and resource recovery divisions."
      />

      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-button"
                    : "bg-industrial-100 text-secondary-700 hover:bg-industrial-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <GalleryGrid images={filteredImages} />
        </div>
      </section>
    </>
  );
}

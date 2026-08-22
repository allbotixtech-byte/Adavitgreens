"use client";

import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import IndustryCard from "@/components/sections/IndustryCard";
import CTABanner from "@/components/sections/CTABanner";
import { industries } from "@/data/industries";

export default function IndustriesPage() {
  return (
    <>
      <HeroSection
        eyebrow="TAILORED SECTOR SOLUTIONS"
        heading="Recycling Solutions Engineered Around Your Industry"
        description="Every industry generates unique material streams and operates under distinct compliance mandates. We structure tailored recycling workflows to match your operational standards."
        primaryCTA={{ label: "Talk to Our Team", href: "/contact" }}
        secondaryCTA={{ label: "Schedule a Pickup", href: "/schedule-pickup" }}
        minHeight="min-h-[70vh]"
      />
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Sector Coverage"
            heading="Industries We Partner With"
            description="Providing compliant recycling, data destruction, and EPR support for diverse enterprise verticals."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard
                key={index}
                icon={industry.icon}
                title={industry.title}
                description={industry.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}

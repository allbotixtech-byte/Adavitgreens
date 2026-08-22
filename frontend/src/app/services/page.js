"use client";

import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import ServiceCard from "@/components/sections/ServiceCard";
import CTABanner from "@/components/sections/CTABanner";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="COMPREHENSIVE SOLUTIONS"
        heading="End-to-End Enterprise Recycling & Recovery"
        description="From certified e-waste dismantling to cryptographic data destruction and EPR compliance, we provide responsible resource management for forward-thinking organizations."
        primaryCTA={{ label: "Schedule a Pickup", href: "/schedule-pickup" }}
        secondaryCTA={{ label: "Talk to Our Team", href: "/contact" }}
      />

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Specialized Capabilities"
            heading="Explore Our Core Services"
            description="Every service is structured around maximum material recovery, verifiable compliance, and transparent documentation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                href={`/services/${service.slug}`}
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

"use client";

import HeroSection from "@/components/sections/HeroSection";
import SectionHeading from "@/components/sections/SectionHeading";
import ProcessStepper from "@/components/sections/ProcessStepper";
import CTABanner from "@/components/sections/CTABanner";

const steps = [
  { title: "01. Initial Connect", description: "Submit your material specifications, volume estimates, and facility pickup location." },
  { title: "02. Material Assessment", description: "Our compliance team analyzes inventory categories, data sanitization needs, and logistics." },
  { title: "03. Secure Collection", description: "Insured transit vehicles with trained handling teams coordinate loading from your site." },
  { title: "04. Facility Receiving", description: "Shipments are weighed at our weighbridge, unboxed, and assigned a unique manifest ID." },
  { title: "05. Segregation & Sorting", description: "Materials are separated into printed circuit boards, screens, casing, wiring, and batteries." },
  { title: "06. Processing & Dismantling", description: "Safe manual and mechanized de-manufacturing breaks hardware down to pure commodities." },
  { title: "07. Resource Recovery", description: "Precious and industrial metals are consolidated and sent for secondary smelter refining." },
  { title: "08. Green Certification", description: "Official Green Recycling Certificates and Certificates of Destruction are issued for your audit." },
];

export default function ProcessPage() {
  return (
    <>
      <HeroSection
        eyebrow="AUDITABLE WORKFLOW"
        heading="A Transparent Journey From Waste to Resource Recovery"
        description="Responsible recycling requires a disciplined chain of custody. Every consignment at Advait Green is logged, categorized, processed, and reported with complete traceability."
        primaryCTA={{ label: "Schedule a Pickup", href: "/schedule-pickup" }}
        secondaryCTA={{ label: "View Our Services", href: "/services" }}
      />
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Step-by-Step Architecture"
            heading="Our 8-Step Recycling & Recovery Roadmap"
            description="From initial pickup coordination to final downstream raw material reintroduction."
          />
          <ProcessStepper steps={steps} />
        </div>
      </section>
      <CTABanner />
    </>
  );
}

"use client";

import HeroSection from "@/components/sections/HeroSection";
import { Scale, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <>
      <HeroSection
        eyebrow="TERMS OF ENGAGEMENT"
        heading="Terms & Conditions"
        description="Operational terms and conditions governing recycling, logistics, and IT asset disposition services provided by ADVAIT GREEN RECYCLING PRIVATE LIMITED."
      />
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-industrial-200/80 shadow-card space-y-8 text-secondary-600">
            <div className="p-4 rounded-2xl bg-industrial-50 border border-industrial-100 flex items-center justify-between text-xs text-secondary-500">
              <span><strong>Effective Date:</strong> March 2026</span>
              <span><strong>Jurisdiction:</strong> Gujarat, India</span>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3 flex items-center gap-2">
                <Scale size={20} className="text-primary-600" />
                <span>1. Acceptance of Terms</span>
              </h2>
              <p className="leading-relaxed text-sm">
                By accessing this portal or booking recycling / ITAD pickup services, you accept and agree to be bound by the terms, service scopes, and statutory guidelines outlined herein.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3 flex items-center gap-2">
                <FileText size={20} className="text-primary-600" />
                <span>2. Scope of Services & Title Transfer</span>
              </h2>
              <p className="leading-relaxed text-sm">
                ADVAIT GREEN RECYCLING PRIVATE LIMITED provides collection, de-manufacturing, recovery, and certified data destruction. Title and environmental responsibility for scrap materials transfer to Advait Green upon issuance of the official physical weighbridge manifest.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3">
                3. Client Representations & Hazardous Exclusions
              </h2>
              <p className="leading-relaxed text-sm">
                The client warrants that all consigned inventory is lawfully owned and free from undisclosed biohazards, radioactive matter, or prohibited contraband.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3">
                4. Data Sanitization & Certificates
              </h2>
              <p className="leading-relaxed text-sm">
                Where data destruction is requested, Advait Green will sanitize or physically destroy media as agreed and issue a serial-indexed Certificate of Destruction.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3">
                5. Governing Law & Jurisdiction
              </h2>
              <p className="leading-relaxed text-sm">
                These terms shall be governed by the laws of India. Any legal disputes arising out of service engagements shall be subject to the exclusive jurisdiction of the competent courts in Mahesana / Ahmedabad, Gujarat.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import HeroSection from "@/components/sections/HeroSection";
import { ShieldCheck, FileText, Lock } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeroSection
        eyebrow="LEGAL & PRIVACY"
        heading="Privacy Policy"
        description="How ADVAIT GREEN RECYCLING PRIVATE LIMITED collects, protects, and handles personal and enterprise data."
        minHeight="min-h-[50vh]"
      />
      <section className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-card space-y-8 text-secondary-600">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs text-secondary-500">
              <span><strong>Effective Date:</strong> March 2026</span>
              <span><strong>Entity:</strong> ADVAIT GREEN RECYCLING PRIVATE LIMITED</span>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3 flex items-center gap-2">
                <FileText size={20} className="text-primary-600" />
                <span>1. Information We Collect</span>
              </h2>
              <p className="leading-relaxed text-sm">
                When you access our platform, request a facility pickup, or submit an inquiry, we collect contact information (name, company name, corporate email address, telephone numbers) and facility inventory manifests (material type, hardware serials, estimated volume).
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3 flex items-center gap-2">
                <Lock size={20} className="text-primary-600" />
                <span>2. Utilization of Information</span>
              </h2>
              <p className="leading-relaxed text-sm">
                We use collected information solely to coordinate logistics transit, execute certified ITAD / data destruction protocols, generate statutory Green Recycling Certificates, and respond to your official corporate queries.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3 flex items-center gap-2">
                <ShieldCheck size={20} className="text-primary-600" />
                <span>3. Data Protection & Confidentiality</span>
              </h2>
              <p className="leading-relaxed text-sm">
                We enforce strict physical, technical, and operational safeguards across all records. We do not sell, rent, or monetize client or individual contact data. Data is disclosed only to regulatory authorities (such as GPCB / CPCB) where mandated by Indian waste management compliance rules.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3">
                4. Cookies & Web Analytics
              </h2>
              <p className="leading-relaxed text-sm">
                Our site uses essential security and analytics cookies to optimize performance and navigation. You may disable cookies in your browser settings at any time.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-950 mb-3">
                5. Contacting the Compliance Officer
              </h2>
              <p className="leading-relaxed text-sm">
                For questions regarding this policy or data privacy, write to: <strong className="text-secondary-900">contact@advaitgreen.com</strong> or visit our registered facility at Vamaj Road, Mahesana, Gujarat – 382728.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

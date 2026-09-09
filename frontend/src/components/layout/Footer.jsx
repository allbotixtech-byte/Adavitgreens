"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { companyInfo, footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#FAF9F6", borderTop: "1px solid var(--color-secondary-200)" }}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-14 lg:py-16">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/ADVAIT_Logo.webp"
                alt="Advait Green Recycling"
                width={320}
                height={180}
                className="h-[58px] w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: "var(--color-secondary-600)" }}>
              {companyInfo.legalName} is an authorised recycler committed to responsible resource recovery from electronic, plastic and battery waste.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {Object.entries(companyInfo.social).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md flex items-center justify-center transition-colors text-[11px] font-mono uppercase"
                  style={{ backgroundColor: "var(--color-secondary-100)", color: "var(--color-secondary-600)" }}
                >
                  {name[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.09em] mb-4" style={{ color: "var(--color-primary-950)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary-700"
                    style={{ color: "var(--color-secondary-600)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.09em] mb-4" style={{ color: "var(--color-primary-950)" }}>
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-primary-700"
                    style={{ color: "var(--color-secondary-600)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.09em] mb-4" style={{ color: "var(--color-primary-950)" }}>
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent-600)" }} />
                <div>
                  <p className="font-mono text-xs" style={{ color: "var(--color-primary-950)" }}>Toll Free: {companyInfo.tollFree}</p>
                  <p className="font-mono text-xs mt-0.5" style={{ color: "var(--color-secondary-500)" }}>E-Waste: {companyInfo.phoneEWaste}</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5" style={{ color: "var(--color-secondary-600)" }}>
                <Mail size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent-600)" }} />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent-600)" }} />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.09em]" style={{ color: "var(--color-secondary-500)" }}>Registered Office</p>
                  <span className="text-xs leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>{companyInfo.address.corporate}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: "1px solid var(--color-secondary-200)", color: "var(--color-secondary-500)" }}>
          <p>&copy; {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-primary-700 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary-700 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

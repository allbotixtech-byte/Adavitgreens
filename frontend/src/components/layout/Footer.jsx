"use client";

import Link from "next/link";
import { Recycle, Phone, Mail, MapPin, Globe } from "lucide-react";
import { companyInfo, footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-secondary-950 text-secondary-400">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-14 lg:py-16">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary-700 rounded-md flex items-center justify-center">
                <Recycle size={18} className="text-white" />
              </div>
              <div className="leading-tight">
                <p className="font-heading font-semibold text-sm text-white tracking-tight">
                  Advait Green
                </p>
                <p className="text-[9px] text-primary-400 font-medium tracking-wider uppercase">
                  Recycling
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-secondary-400 max-w-[280px]">
              {companyInfo.legalName} is an authorised recycler committed to responsible resource recovery from electronic, plastic and battery waste.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {Object.entries(companyInfo.social).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-secondary-500 hover:text-white hover:bg-white/10 transition-colors text-[11px] font-mono uppercase"
                >
                  {name[0].toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-[11px] font-medium text-white uppercase tracking-[0.09em] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-[11px] font-medium text-white uppercase tracking-[0.09em] mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[11px] font-medium text-white uppercase tracking-[0.09em] mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-accent-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-white">Toll Free: {companyInfo.tollFree}</p>
                  <p className="font-mono text-xs text-secondary-500 mt-0.5">E-Waste: {companyInfo.phoneEWaste}</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-accent-400 mt-0.5 shrink-0" />
                <span>{companyInfo.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent-400 mt-0.5 shrink-0" />
                <span className="text-xs leading-relaxed">{companyInfo.address.corporate}</span>
              </li>
              {/* <li className="flex items-start gap-2.5">
                <Globe size={14} className="text-accent-400 mt-0.5 shrink-0" />
                <span className="font-mono text-xs">GSTIN: {companyInfo.gstin}</span>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-600">
          <p>&copy; {new Date().getFullYear()} {companyInfo.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-secondary-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-secondary-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

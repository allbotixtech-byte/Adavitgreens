import Link from "next/link";
import {
  Recycle,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { footerLinks, companyInfo } from "@/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-secondary-950 via-[#0a101d] to-[#060a12] text-industrial-300 relative overflow-hidden border-t border-industrial-800/80">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Container */}
      <div className="container-custom pt-16 pb-12 md:pt-20 md:pb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Company Info & Verification (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-button transition-transform duration-300 group-hover:scale-105">
                <Recycle size={22} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="leading-tight">
                <span className="font-heading text-lg font-bold text-white block leading-snug tracking-tight">
                  Advait Green
                </span>
                <span className="text-[10px] text-primary-400 font-semibold tracking-[0.14em] uppercase block leading-none">
                  Recycling Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-industrial-400 text-sm leading-relaxed max-w-sm">
              ADVAIT GREEN RECYCLING PRIVATE LIMITED is dedicated to responsible recycling, IT asset disposition, and circular economy solutions across India.
            </p>

            {/* Verified GST Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-industrial-900/90 border border-industrial-800/90 shadow-inner text-xs">
              <ShieldCheck size={16} className="text-primary-400 shrink-0" />
              <div className="font-mono text-industrial-300">
                <span className="text-industrial-500 text-[10px] block leading-none uppercase">Verified GSTIN</span>
                <span className="font-medium text-white">{companyInfo.gstin}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-primary-400/90 pt-1">
              <CheckCircle2 size={14} className="text-primary-400" />
              <span>Gujarat State Authorized Recycler</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-semibold text-sm mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-industrial-400 hover:text-primary-400 transition-all duration-200 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-industrial-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-semibold text-sm mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              Our Solutions
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm text-industrial-400 hover:text-primary-400 transition-all duration-200 group"
                  >
                    <ArrowRight
                      size={12}
                      className="text-industrial-600 group-hover:text-primary-400 group-hover:translate-x-0.5 transition-all"
                    />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-semibold text-sm mb-5 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-400" />
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-industrial-900 flex items-center justify-center shrink-0 mt-0.5 border border-industrial-800">
                  <MapPin size={15} className="text-primary-400" />
                </div>
                <span className="text-industrial-400 leading-relaxed text-xs">
                  {companyInfo.address.line1}, {companyInfo.address.line2},{" "}
                  {companyInfo.address.city}, {companyInfo.address.state} –{" "}
                  {companyInfo.address.pincode}
                </span>
              </li>
              <li>
                <a
                  href="tel:+912762283000"
                  className="flex items-center gap-3 text-industrial-400 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-industrial-900 flex items-center justify-center shrink-0 border border-industrial-800 group-hover:border-primary-500/50">
                    <Phone size={15} className="text-primary-400" />
                  </div>
                  <span className="text-xs">+91 (02762) 283000 / 94280 00000</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@advaitgreen.com"
                  className="flex items-center gap-3 text-industrial-400 hover:text-primary-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-industrial-900 flex items-center justify-center shrink-0 border border-industrial-800 group-hover:border-primary-500/50">
                    <Mail size={15} className="text-primary-400" />
                  </div>
                  <span className="text-xs">contact@advaitgreen.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs text-industrial-400">
                <div className="w-8 h-8 rounded-lg bg-industrial-900 flex items-center justify-center shrink-0 border border-industrial-800">
                  <Clock size={15} className="text-primary-400" />
                </div>
                <span>Mon – Sat: 9:00 AM – 6:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-industrial-800/80 bg-[#040810]/70 py-6">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-industrial-500 text-center sm:text-left">
            &copy; {currentYear} {companyInfo.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-industrial-500">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

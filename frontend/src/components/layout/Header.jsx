"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail, Recycle, ArrowRight, ShieldCheck } from "lucide-react";
import { navLinks, companyInfo } from "@/data/navigation";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-industrial-200/80"
          : "bg-white/95 backdrop-blur-sm border-b border-industrial-100 shadow-xs"
      }`}
    >
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-secondary-950 via-primary-950 to-secondary-950 text-white border-b border-white/10">
        <div className="container-custom flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-primary-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span>Gujarat Facility Operational</span>
            </div>
            <span className="text-white/20">|</span>
            <a
              href="tel:+912762283000"
              className="flex items-center gap-1.5 text-industrial-300 hover:text-primary-300 transition-colors"
            >
              <Phone size={12} className="text-primary-400" />
              <span>+91 (02762) 283000</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:contact@advaitgreen.com"
              className="flex items-center gap-1.5 text-industrial-300 hover:text-primary-300 transition-colors"
            >
              <Mail size={12} className="text-primary-400" />
              <span>contact@advaitgreen.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-industrial-300 text-[11px]">
            <span className="flex items-center gap-1 text-primary-300/90 font-medium">
              <ShieldCheck size={13} className="text-primary-400" />
              GST: {companyInfo.gstin}
            </span>
            <span className="text-white/20">&bull;</span>
            <span>Responsible Resource Recovery</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container-custom flex items-center justify-between h-[68px] lg:h-[76px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-button transition-transform duration-300 group-hover:scale-105">
            <Recycle size={22} className="text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <span className="font-heading text-[1.15rem] font-bold text-secondary-950 block leading-snug tracking-tight group-hover:text-primary-700 transition-colors">
              Advait Green
            </span>
            <span className="text-[10px] text-primary-700 font-semibold tracking-[0.14em] uppercase block leading-none">
              Recycling Pvt. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-1" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.children ? (
                <>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === link.label ? null : link.label)
                    }
                    className={`flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      pathname.startsWith(link.href)
                        ? "text-primary-700 bg-primary-50 font-semibold shadow-xs"
                        : "text-secondary-700 hover:text-primary-700 hover:bg-industrial-50"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 text-secondary-400 ${
                        activeDropdown === link.label ? "rotate-180 text-primary-600" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-industrial-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-industrial-400 px-3 py-1.5 border-b border-industrial-100 mb-1">
                        Our Core Solutions
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center justify-between px-3 py-2 rounded-xl text-[13px] transition-all duration-150 ${
                            pathname === child.href
                              ? "text-primary-700 bg-primary-50 font-semibold"
                              : "text-secondary-700 hover:text-primary-700 hover:bg-primary-50/60 hover:pl-4"
                          }`}
                        >
                          <span>{child.label}</span>
                          <ArrowRight size={13} className="text-primary-400 opacity-0 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className={`px-3 py-2 text-[13.5px] font-medium rounded-lg transition-all duration-200 block ${
                    pathname === link.href
                      ? "text-primary-700 bg-primary-50 font-semibold shadow-xs"
                      : "text-secondary-700 hover:text-primary-700 hover:bg-industrial-50"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/schedule-pickup"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:from-primary-500 hover:to-primary-600 transition-all shadow-button hover:shadow-button-hover active:scale-[0.98]"
          >
            <span>Schedule a Pickup</span>
            <ArrowRight size={15} />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-industrial-100 hover:bg-industrial-200 text-secondary-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Sheet */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 top-[68px] bg-secondary-950/40 backdrop-blur-sm z-40">
          <div className="bg-white h-full max-h-[calc(100vh-68px)] overflow-y-auto p-6 shadow-2xl space-y-2 border-t border-industrial-100">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.label ? null : link.label)
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-secondary-800 font-medium rounded-xl hover:bg-industrial-50 transition-colors"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180 text-primary-600" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <div className="ml-4 space-y-1 border-l-2 border-primary-200 pl-3 my-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-2 text-sm rounded-lg ${
                              pathname === child.href
                                ? "text-primary-700 bg-primary-50 font-semibold"
                                : "text-secondary-600 hover:bg-industrial-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 font-medium rounded-xl transition-colors ${
                      pathname === link.href
                        ? "text-primary-700 bg-primary-50 font-semibold"
                        : "text-secondary-800 hover:bg-industrial-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 pb-8 space-y-3">
              <Link
                href="/schedule-pickup"
                className="flex items-center justify-center gap-2 w-full text-center bg-primary-600 text-white py-3.5 rounded-xl font-semibold hover:bg-primary-500 transition-colors shadow-button"
              >
                <span>Schedule a Pickup</span>
                <ArrowRight size={16} />
              </Link>
              <div className="p-4 bg-industrial-50 rounded-xl border border-industrial-100 text-xs text-secondary-600 space-y-1.5">
                <p className="font-semibold text-secondary-900">Registered Office & Facility:</p>
                <p>Vamaj Road, Mahesana, Gujarat – 382728</p>
                <p className="text-primary-700 font-mono font-medium">GSTIN: {companyInfo.gstin}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

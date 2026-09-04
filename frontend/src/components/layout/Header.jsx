"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { navLinks, companyInfo } from "@/data/navigation";
import { hasFullHero } from "@/lib/layout";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const dropdownTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleDropdownEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isTransparent = hasFullHero(pathname) && !scrolled && !mobileOpen;

  // Colors based on state
  const navColor = isTransparent ? "#ffffff" : "#1a1a1a";
  const navColorMuted = isTransparent ? "rgba(255,255,255,0.8)" : "#333";
  const logoFilter = isTransparent ? "brightness(0) invert(1)" : "none";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isTransparent ? "transparent" : "#FAF9F6",
        boxShadow: isTransparent ? "none" : "0 1px 0 rgba(0,0,0,0.06)",
      }}
    >
      {/* Helpline Strip */}
      <div
        className="hidden lg:block text-xs transition-all duration-300"
        style={{
          backgroundColor: isTransparent ? "rgba(255,255,255,0.06)" : "var(--color-primary-950)",
          color: isTransparent ? "rgba(255,255,255,0.7)" : "var(--color-primary-100)",
          borderBottom: isTransparent ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[36px]">
          <div className="flex items-center gap-6 font-mono text-[11px] tracking-wide">
            <span className="flex items-center gap-1.5">
              <Phone size={11} style={{ color: isTransparent ? "var(--color-accent-300)" : "var(--color-accent-400)" }} />
              Toll Free: {companyInfo.tollFree}
            </span>
            <span style={{ color: isTransparent ? "rgba(255,255,255,0.2)" : "var(--color-primary-700)" }}>|</span>
            <span>E-Waste: {companyInfo.phoneEWaste}</span>
            <span style={{ color: isTransparent ? "rgba(255,255,255,0.2)" : "var(--color-primary-700)" }}>|</span>
            <span>Plastic: {companyInfo.phonePlastic}</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{companyInfo.email}</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-[64px] sm:h-[72px] lg:h-[80px]">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/images/ADVAIT_Logo.webp"
            alt="Advait Green Recycling"
            width={120}
            height={40}
            className="h-[32px] sm:h-[38px] lg:h-[46px] w-auto transition-all duration-300 object-contain"
            style={{ filter: logoFilter }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && handleDropdownEnter(link.label)}
              onMouseLeave={() => link.children && handleDropdownLeave()}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium rounded-md transition-all duration-200"
                style={{ color: isActive(link.href) ? navColor : navColorMuted }}
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {isActive(link.href) && (
                <div
                  className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full"
                  style={{ backgroundColor: "var(--color-accent-400)" }}
                />
              )}

              {link.children && activeDropdown === link.label && (
                <div className="absolute top-full left-0 pt-1.5 z-50">
                  <div className="bg-white border border-secondary-200 rounded-lg shadow-lg py-1.5 min-w-[320px] animate-in">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                        style={{ color: isActive(child.href) ? "var(--color-primary-700)" : "var(--color-secondary-700)" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all duration-200"
            style={{
              color: isTransparent ? "#fff" : "#1a1a1a",
              border: isTransparent ? "1px solid rgba(255,255,255,0.3)" : "1px solid var(--color-secondary-300)",
            }}
          >
            Contact Us
          </Link>
          <Link
            href="/schedule-pickup"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-sm font-semibold transition-colors"
            style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
          >
            E-Waste Pick Up
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-md"
          style={{ color: isTransparent ? "#fff" : "var(--color-secondary-700)" }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden" style={{ borderTop: "1px solid var(--color-secondary-100)", backgroundColor: "#FAF9F6" }}>
          <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-64px)] overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                      className="flex items-center justify-between w-full px-3 py-2.5 rounded-md text-sm font-medium"
                      style={{ color: isActive(link.href) ? "var(--color-primary-700)" : "#333" }}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-200"
                        style={{ transform: mobileDropdown === link.label ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    {mobileDropdown === link.label && (
                      <div className="ml-4 mt-0.5 space-y-0.5 pl-3" style={{ borderLeft: "2px solid var(--color-secondary-100)" }}>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm rounded-md"
                            style={{ color: isActive(child.href) ? "var(--color-primary-700)" : "var(--color-secondary-500)" }}
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
                    className="block px-3 py-2.5 rounded-md text-sm font-medium"
                    style={{ color: isActive(link.href) ? "var(--color-primary-700)" : "#333" }}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-3 space-y-2" style={{ borderTop: "1px solid var(--color-secondary-100)" }}>
              <Link
                href="/schedule-pickup"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-semibold w-full"
                style={{ backgroundColor: "var(--color-accent-600)", color: "#fff" }}
              >
                E-Waste Pick Up
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded text-sm font-semibold w-full"
                style={{ border: "1px solid var(--color-secondary-300)", color: "#333" }}
              >
                Contact Us
              </Link>
              <div className="flex items-center gap-2 mt-2 px-3 text-xs" style={{ color: "var(--color-secondary-500)" }}>
                <Phone size={12} style={{ color: "var(--color-accent-600)" }} />
                <span>Toll Free: {companyInfo.tollFree}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

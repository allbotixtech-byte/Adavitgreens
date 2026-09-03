"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/**
 * Scroll-pinned horizontal showcase.
 *
 * The section is made tall enough to absorb the track's overflow width; while
 * it is on screen the inner viewport sticks and the track translates left, so
 * vertical scrolling reads as horizontal movement. Active on every breakpoint.
 *
 * Uses svh rather than vh: on mobile browsers the collapsing URL bar makes vh
 * taller than the visible area, which would clip the card and progress rail.
 *
 * Falls back to a native swipe rail only when the visitor prefers reduced
 * motion — pinning re-purposes scrolling, which that setting asks us not to do.
 */
export default function HorizontalShowcase({
  eyebrow,
  title,
  items,
  badge = "GPCB Authorised",
}) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [distance, setDistance] = useState(0);
  const pinned = !reduceMotion;

  // Measure the track's horizontal overflow. Re-runs on resize and on
  // orientation change so the scroll length always matches the real width.
  useEffect(() => {
    if (!pinned) {
      setDistance(0);
      return;
    }
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    // Fonts/images settling can change the track width after first paint.
    const raf = requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [pinned, items.length]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  const Heading = (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center mb-5 sm:mb-7 lg:mb-10 shrink-0">
      <p
        className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.09em] mb-2 sm:mb-3"
        style={{ color: "var(--color-accent-500)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-heading text-xl sm:text-2xl lg:text-[2.5rem] font-semibold tracking-tight"
        style={{ color: "var(--color-primary-950)" }}
      >
        {title}
      </h2>
    </div>
  );

  const Card = ({ item, index }) => {
    // Items may carry an href (the About page's service showcase does); when
    // they do, the whole card becomes a link to that page.
    const Wrapper = item.href ? Link : "article";
    const wrapperProps = item.href ? { href: item.href } : {};

    return (
    <Wrapper
      {...wrapperProps}
      className="group relative block shrink-0 rounded-2xl overflow-hidden
                 w-[84vw] sm:w-[70vw] lg:w-[62vw] xl:w-[54vw]
                 h-[58svh] sm:h-[60svh] lg:h-[min(64vh,520px)]"
    >
      <img
        src={item.image}
        alt={item.label}
        className="absolute inset-0 w-full h-full object-cover"
        loading={index === 0 ? "eager" : "lazy"}
      />

      {/* Legibility wash — bottom-up on phones (panel sits low), left-to-right above */}
      <div
        className="absolute inset-0
                   bg-gradient-to-t from-[rgba(0,26,43,0.88)] via-[rgba(0,26,43,0.35)] to-[rgba(0,26,43,0.05)]
                   sm:bg-gradient-to-r sm:from-[rgba(0,26,43,0.60)] sm:via-[rgba(0,26,43,0.28)] sm:to-[rgba(0,26,43,0.08)]"
      />

      {/* Panel: pinned to the bottom on phones, centred on the left from sm up */}
      <div
        className="absolute inset-x-0 bottom-0 p-3.5
                   sm:inset-y-0 sm:right-auto sm:bottom-auto sm:left-0 sm:flex sm:items-center sm:p-7 lg:p-9"
      >
        <div
          className="rounded-xl sm:rounded-2xl p-4 sm:p-7 lg:p-8 w-full sm:w-[min(58vw,320px)] lg:w-[min(40vw,360px)]"
          style={{
            backgroundColor: "rgba(255,255,255,0.93)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.55)",
            boxShadow: "0 18px 44px rgba(0,26,43,0.18)",
          }}
        >
          <div className="flex items-center gap-3 sm:block">
            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center shrink-0 sm:mb-4"
              style={{
                backgroundColor: "var(--color-primary-50)",
                border: "1px solid var(--color-primary-200)",
              }}
            >
              <item.icon
                size={18}
                strokeWidth={1.7}
                className="sm:!w-[22px] sm:!h-[22px]"
                style={{ color: "var(--color-primary-700)" }}
              />
            </div>
            <h3
              className="font-heading text-[15px] sm:text-lg lg:text-xl font-semibold leading-snug sm:mb-3"
              style={{ color: "var(--color-primary-950)" }}
            >
              {item.label}
            </h3>
          </div>

          <div
            className="hidden sm:block w-10 h-[3px] rounded-full mb-4"
            style={{ backgroundColor: "var(--color-accent-500)" }}
          />
          <p
            className="text-[12px] sm:text-[13px] lg:text-sm leading-relaxed mt-2.5 sm:mt-0 line-clamp-4 sm:line-clamp-none"
            style={{ color: "var(--color-secondary-700)" }}
          >
            {item.desc}
          </p>
        </div>
      </div>

      {/* Counter + authorisation chip */}
      <div className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 flex items-center gap-2">
        <span
          className="font-mono text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.20)", backdropFilter: "blur(8px)", color: "#ffffff" }}
        >
          {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <span
          className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium"
          style={{ backgroundColor: "rgba(255,255,255,0.20)", backdropFilter: "blur(8px)", color: "#ffffff" }}
        >
          <ShieldCheck size={12} /> {badge}
        </span>
      </div>
    </Wrapper>
    );
  };

  /* ── Reduced motion: plain swipe rail, no scroll re-purposing ── */
  if (!pinned) {
    return (
      <section ref={sectionRef} className="py-14 sm:py-16 lg:py-24 bg-white overflow-hidden">
        {Heading}
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-6 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollPaddingLeft: "1rem" }}
        >
          {items.map((item, i) => (
            <div key={item.label} className="snap-start">
              <Card item={item} index={i} />
            </div>
          ))}
        </div>
        <p
          className="text-center font-mono text-[11px] uppercase tracking-[0.09em] mt-2"
          style={{ color: "var(--color-secondary-400)" }}
        >
          Swipe to explore
        </p>
      </section>
    );
  }

  /* ── Pinned horizontal scroll (all breakpoints) ── */
  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden py-10 sm:py-14 lg:py-16">
        {Heading}

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 sm:gap-6 px-[8vw] sm:px-[6vw] lg:px-[5vw] will-change-transform"
        >
          {items.map((item, i) => (
            <Card key={item.label} item={item} index={i} />
          ))}
        </motion.div>

        {/* Progress rail */}
        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-6 mt-5 sm:mt-7 lg:mt-8 shrink-0">
          <div
            className="h-[3px] rounded-full overflow-hidden"
            style={{ backgroundColor: "var(--color-secondary-200)" }}
          >
            <motion.div
              className="h-full rounded-full origin-left"
              style={{ backgroundColor: "var(--color-accent-500)", scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

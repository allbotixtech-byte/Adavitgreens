"use client";

/**
 * "Why It Matters" rail — the Core Values layout (left-aligned display heading,
 * infinitely looping card rail) over the light particle-network artwork.
 *
 * Cards are frosted-light rather than outlined-dark, because the background
 * image is near-white; the dark treatment used on About would be unreadable
 * here. Items are duplicated once and the track translates -50%, so the loop
 * is seamless. Motion/pause/reduced-motion come from .marquee-x in globals.css.
 */
export default function BenefitsMarquee({ eyebrow, title, items }) {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      <img
        src="/images/backgorund-img.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Light veil so type stays legible over the busier corners */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(255,255,255,0.55)" }}
      />

      <div className="relative">
        {/* Heading — left aligned, display scale */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 mb-10 lg:mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.09em] mb-4" style={{ color: "var(--color-accent-600)" }}>
            {eyebrow}
          </p>
          <h2
            className="font-heading text-[30px] sm:text-4xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.05] max-w-[20ch]"
            style={{ color: "var(--color-primary-950)" }}
          >
            {title}
          </h2>
        </div>

        {/* Looping rail */}
        <div className="relative">
          <div className="overflow-hidden marquee-rail">
            <div className="flex gap-4 sm:gap-5 w-max marquee-x pb-2" style={{ "--marquee-duration": "52s" }}>
              {[...items, ...items].map((item, i) => (
                <article
                  key={`${item.title}-${i}`}
                  aria-hidden={i >= items.length}
                  className="group relative shrink-0 rounded-2xl p-7 sm:p-8 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 w-[270px] sm:w-[320px] lg:w-[340px]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.82)",
                    border: "1px solid var(--color-secondary-200)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow: "0 2px 6px rgba(1,63,93,0.05), 0 14px 34px rgba(1,63,93,0.07)",
                    minHeight: "340px",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      backgroundColor: "var(--color-primary-50)",
                      border: "1px solid var(--color-primary-100)",
                    }}
                  >
                    <item.icon size={24} strokeWidth={1.5} style={{ color: "var(--color-primary-600)" }} />
                  </div>

                  <h3
                    className="font-heading text-lg sm:text-xl font-semibold mt-6 mb-3 leading-tight"
                    style={{ color: "var(--color-primary-950)" }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
                    {item.desc}
                  </p>

                  <span
                    aria-hidden="true"
                    className="mt-auto block h-px w-10 transition-all duration-300 group-hover:w-20"
                    style={{ backgroundColor: "var(--color-accent-500)" }}
                  />
                </article>
              ))}
            </div>
          </div>

          {/* Edge fades */}
          <div
            aria-hidden="true"
            className="hidden sm:block absolute inset-y-0 left-0 w-16 lg:w-28 pointer-events-none"
            style={{ background: "linear-gradient(to right, #ffffff, transparent)" }}
          />
          <div
            aria-hidden="true"
            className="hidden sm:block absolute inset-y-0 right-0 w-16 lg:w-28 pointer-events-none"
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
          />
        </div>

        <p
          className="max-w-[1400px] mx-auto px-4 sm:px-6 mt-5 font-mono text-[11px] uppercase tracking-[0.09em]"
          style={{ color: "var(--color-secondary-500)" }}
        >
          Hover to pause
        </p>
      </div>
    </section>
  );
}

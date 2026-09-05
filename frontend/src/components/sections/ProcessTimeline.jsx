"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

/**
 * Serpentine process flow.
 *
 * Desktop draws a single continuous ribbon that snakes through the steps -
 * left-to-right on the first row, right-to-left on the next, and so on - with
 * the step nodes sitting on the track. The ribbon is an SVG path built from the
 * measured centre of each node, so it stays aligned at any width and with any
 * amount of copy in the cards.
 *
 * Below `lg` the same steps collapse to a vertical rail.
 *
 * Props:
 *   subtitle  - small mono eyebrow above the heading
 *   title     - section heading
 *   steps     - [{ icon, num, title, desc }]
 *   variant   - "muted" (default, secondary-50 band) | "light" (white)
 *   footer    - optional node rendered under the flow (e.g. output materials)
 */

// useLayoutEffect warns during SSR; client components still render on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const PER_ROW = 3;   // nodes per row on desktop
const EDGE = 30;     // distance from the wrapper edge to the U-turn
const RADIUS = 34;   // U-turn corner radius

// Where the ribbon runs out after the final node: to the section edge when the
// last row is full, otherwise just a short tail past the node.
function endPoint(pts, width) {
  const last = pts[pts.length - 1];
  const runsRight = Math.floor((pts.length - 1) / PER_ROW) % 2 === 0;
  if (pts.length % PER_ROW === 0) return runsRight ? width - EDGE : EDGE;
  return runsRight ? Math.min(width - EDGE, last.x + 120) : Math.max(EDGE, last.x - 120);
}

function buildPath(pts, width) {
  if (!pts.length) return "";

  let d = `M ${EDGE} ${pts[0].y} L ${pts[0].x} ${pts[0].y}`;  // row 0 always runs left → right

  for (let i = 1; i < pts.length; i++) {
    const a = pts[i - 1];
    const b = pts[i];

    // Same row - straight run.
    if (i % PER_ROW !== 0) {
      d += ` L ${b.x} ${b.y}`;
      continue;
    }

    // Row change - U-turn on the side the previous row ended on.
    const turnRight = Math.floor((i - 1) / PER_ROW) % 2 === 0;
    const turnX = turnRight ? width - EDGE : EDGE;
    const r = Math.max(8, Math.min(RADIUS, Math.abs(b.y - a.y) / 2, Math.abs(turnX - a.x)));
    const sweep = turnRight ? 1 : 0;
    const inset = turnRight ? -r : r;

    d += ` L ${turnX + inset} ${a.y}`;
    d += ` A ${r} ${r} 0 0 ${sweep} ${turnX} ${a.y + r}`;
    d += ` L ${turnX} ${b.y - r}`;
    d += ` A ${r} ${r} 0 0 ${sweep} ${turnX + inset} ${b.y}`;
    d += ` L ${b.x} ${b.y}`;
  }

  d += ` L ${endPoint(pts, width)} ${pts[pts.length - 1].y}`;
  return d;
}

export default function ProcessTimeline({ subtitle, title, steps = [], variant = "muted", footer }) {
  const muted = variant !== "light";
  const wrapRef = useRef(null);
  const nodeRefs = useRef([]);
  const [geom, setGeom] = useState(null);

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const wr = wrap.getBoundingClientRect();
    if (wr.width < 1) return; // hidden at this breakpoint

    const pts = [];
    for (let i = 0; i < steps.length; i++) {
      const el = nodeRefs.current[i];
      if (!el) return;
      const r = el.getBoundingClientRect();
      pts.push({ x: r.left - wr.left + r.width / 2, y: r.top - wr.top + r.height / 2 });
    }
    setGeom({ w: wr.width, h: wr.height, pts });
  }, [steps.length]);

  useIsoLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener("resize", measure);
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  if (!steps.length) return null;

  // Rows, laid out in reading order per row: even rows run left → right,
  // odd rows run right → left so the ribbon never doubles back.
  const rows = [];
  for (let i = 0; i < steps.length; i += PER_ROW) {
    const slice = steps.slice(i, i + PER_ROW).map((s, j) => ({ step: s, index: i + j }));
    const reversed = (i / PER_ROW) % 2 === 1;
    const cells = reversed ? [...slice].reverse() : slice;
    while (cells.length < PER_ROW) {
      if (reversed) cells.unshift(null);
      else cells.push(null);
    }
    rows.push(cells);
  }

  const path = geom ? buildPath(geom.pts, geom.w) : "";
  const gradId = `flow-${(title || "process").replace(/\W+/g, "-").toLowerCase()}`;

  // Direction chevrons between neighbouring nodes on the same row.
  const chevrons = geom
    ? geom.pts.slice(1).map((b, i) => {
        const a = geom.pts[i];
        if ((i + 1) % PER_ROW === 0) return null;
        return { x: (a.x + b.x) / 2, y: a.y, flip: b.x < a.x };
      }).filter(Boolean)
    : [];

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden"
      style={{ backgroundColor: muted ? "var(--color-secondary-50)" : "#fff" }}
    >
      {muted && (
        <div
          className="absolute inset-0 opacity-[0.5] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-secondary-200) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* ── Heading ── */}
        <div className="text-center mb-14 lg:mb-20">
          {subtitle && (
            <p className="font-mono text-xs uppercase tracking-[0.09em] mb-3" style={{ color: "var(--color-accent-500)" }}>
              {subtitle}
            </p>
          )}
          <h2
            className="font-heading text-2xl sm:text-3xl lg:text-[2.5rem] font-semibold tracking-tight"
            style={{ color: "var(--color-primary-950)" }}
          >
            {title}
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--color-primary-500)" }} />
            <div className="w-12 h-[3px] rounded-full" style={{ backgroundColor: "var(--color-accent-500)" }} />
          </div>
        </div>

        {/* ── Desktop: snaking ribbon ── */}
        <div ref={wrapRef} className="hidden lg:block relative max-w-[1180px] mx-auto">
          {/* Ribbon */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={geom ? `0 0 ${geom.w} ${geom.h}` : undefined}
            width={geom?.w || 0}
            height={geom?.h || 0}
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-accent-600)" />
                <stop offset="55%" stopColor="var(--color-primary-500)" />
                <stop offset="100%" stopColor="var(--color-primary-700)" />
              </linearGradient>
            </defs>

            {path && (
              <>
                {/* Casing behind the ribbon adds a little depth */}
                <path
                  d={path}
                  fill="none"
                  stroke="var(--color-secondary-200)"
                  strokeWidth="22"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.45"
                />
                <motion.path
                  d={path}
                  fill="none"
                  stroke={`url(#${gradId})`}
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
                />
                {chevrons.map((c, i) => (
                  <motion.path
                    key={i}
                    d="M -5 -6 L 4 0 L -5 6"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.85"
                    transform={`translate(${c.x} ${c.y}) rotate(${c.flip ? 180 : 0})`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.85 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                  />
                ))}
              </>
            )}
          </svg>

          {/* Start / end caps sitting on the ribbon */}
          {geom && (
            <>
              <span
                className="absolute z-10 rounded-full"
                style={{
                  left: EDGE,
                  top: geom.pts[0].y,
                  transform: "translate(-50%, -50%)",
                  width: 18,
                  height: 18,
                  backgroundColor: "#fff",
                  border: "4px solid var(--color-accent-600)",
                }}
              />
              <span
                className="absolute z-10 rounded-full flex items-center justify-center"
                style={{
                  left: endPoint(geom.pts, geom.w),
                  top: geom.pts[geom.pts.length - 1].y,
                  transform: "translate(-50%, -50%)",
                  width: 34,
                  height: 34,
                  backgroundColor: "var(--color-primary-700)",
                  boxShadow: "0 0 0 4px rgba(255,255,255,0.9)",
                }}
              >
                <Check size={17} strokeWidth={2.6} className="text-white" />
              </span>
            </>
          )}

          {/* Step cells */}
          <div className="relative px-[92px]">
            {rows.map((cells, r) => (
              <div key={r} className="grid grid-cols-3 gap-x-8" style={{ paddingBottom: r < rows.length - 1 ? 88 : 0 }}>
                {cells.map((cell, c) =>
                  cell ? (
                    <motion.div
                      key={cell.step.num || cell.index}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: (cell.index % PER_ROW) * 0.1 }}
                      className="group flex flex-col items-center text-center"
                    >
                      <div
                        ref={(el) => { nodeRefs.current[cell.index] = el; }}
                        className="relative w-[84px] h-[84px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1"
                        style={{
                          backgroundColor: "#fff",
                          border: "2px solid var(--color-primary-100)",
                          boxShadow: "0 6px 22px -12px rgba(1,63,93,0.45)",
                        }}
                      >
                        <cell.step.icon size={34} strokeWidth={1.5} style={{ color: "var(--color-primary-700)" }} />
                        <span
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[11px] font-bold px-2.5 py-[3px] rounded-full text-white"
                          style={{
                            background: "linear-gradient(135deg, var(--color-accent-600), var(--color-accent-700))",
                            boxShadow: "0 0 0 3px #fff",
                          }}
                        >
                          {cell.step.num || String(cell.index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h3
                        className="font-heading font-semibold mt-6 mb-1 min-h-[44px]"
                        style={{ color: "var(--color-primary-950)", fontSize: "17px", lineHeight: 1.35 }}
                      >
                        {cell.step.title}
                      </h3>
                      <p
                        className="text-[13.5px] leading-relaxed max-w-[300px]"
                        style={{ color: "var(--color-secondary-600)" }}
                      >
                        {cell.step.desc}
                      </p>
                    </motion.div>
                  ) : (
                    <div key={`empty-${r}-${c}`} />
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile / tablet: vertical rail ── */}
        <div className="lg:hidden relative pl-[62px]">
          <div
            className="absolute left-[26px] top-4 bottom-4 w-[4px] rounded-full"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-accent-600), var(--color-primary-500) 55%, var(--color-primary-700))",
            }}
          />
          <div className="space-y-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num || i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="relative rounded-xl border p-5"
                style={{ borderColor: "var(--color-secondary-200)", backgroundColor: "#fff" }}
              >
                <div
                  className="absolute -left-[62px] top-5 w-[52px] h-[52px] rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: "#fff",
                    border: "2px solid var(--color-primary-100)",
                    boxShadow: "0 4px 14px -8px rgba(1,63,93,0.5)",
                  }}
                >
                  <step.icon size={22} strokeWidth={1.6} style={{ color: "var(--color-primary-700)" }} />
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="font-mono text-[10px] font-bold px-2 py-[2px] rounded-full text-white"
                    style={{ background: "linear-gradient(135deg, var(--color-accent-600), var(--color-accent-700))" }}
                  >
                    {step.num || String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading font-semibold" style={{ color: "var(--color-primary-950)", fontSize: "15px", lineHeight: 1.4 }}>
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary-600)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {footer && <div className="mt-14 lg:mt-20">{footer}</div>}
      </div>
    </section>
  );
}

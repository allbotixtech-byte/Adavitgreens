/**
 * theme.config.js
 * ADVAIT GREEN RECYCLING PRIVATE LIMITED - Design Token System
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH. Three layers, in strict order:
 *
 *   1. palette   - raw values. Never reference these directly in a component.
 *   2. semantic  - role-based tokens (light + dark). This is what UI code uses.
 *   3. components- recipes composed from semantic tokens.
 *
 * Helpers at the bottom (`resolve`, `toCSSVariables`, `tailwindPreset`) make the
 * dotted token strings actually resolvable at build time - the previous config
 * used strings like "primary.600" that nothing ever turned into a colour.
 *
 * DESIGN DIRECTION
 * The palette is taken from the material fractions this business actually
 * recovers, not from generic "eco" colour. Solder-mask green (primary),
 * recovered copper (accent), shredded ferrous graphite (dark surfaces),
 * aluminium (neutrals), regulatory amber (signal only). Green and copper are
 * the two colours of a stripped circuit board - the accent earns its place
 * instead of being an arbitrary sand tone.
 *
 * Radii are tight and shadows are quiet: this is an industrial facility with a
 * weighbridge, not a wellness brand.
 */

// ═══════════════════════════════════════════════════════════════════════════
// 1. PALETTE - raw values
// ═══════════════════════════════════════════════════════════════════════════

const palette = {
  /**
   * PRIMARY - deep teal. Used for headings, navbar and structural surfaces.
   */
  pcb: {
    50: '#E8F4F9',
    100: '#C8E5F2',
    200: '#94CEE5',
    300: '#5AB3D4',
    400: '#2D99C2',
    500: '#087FA5',
    600: '#065F85',
    700: '#013F5D',
    800: '#01334D',
    900: '#01283E',
    950: '#001A2B',
  },

  /**
   * ACCENT - green. Used sparingly: CTAs, data emphasis, the fraction bar.
   * Never as a background wash.
   */
  copper: {
    50: '#EDFCE5',
    100: '#D5F8C5',
    200: '#AEF192',
    300: '#7DE559',
    400: '#53D62B',
    500: '#39D900',
    600: '#16A800',
    700: '#128A00',
    800: '#0F6D00',
    900: '#0B5200',
    950: '#073500',
  },

  /**
   * NEUTRALS - cool grey tuned to sit with the teal primary instead of fighting
   * it. 50 is the page background; 950 is graphite, used for dark sections
   * and footer.
   */
  aluminium: {
    0: '#FFFFFF',
    25: '#FAFCFC',
    50: '#F4F7F8',
    100: '#E8EDF0',
    200: '#D4DCE0',
    300: '#B8C4CA',
    400: '#8E9EA6',
    500: '#6A7C85',
    600: '#516169',
    700: '#3D4A51',
    800: '#2C363B',
    900: '#1E2529',
    950: '#12191C',
  },

  /**
   * SIGNAL - regulatory amber. Reserved for compliance notices, hazard
   * categories, validity warnings and the EPR deadline strip. If it appears
   * decoratively it stops working as a signal.
   */
  signal: {
    50: '#FDF6E7',
    100: '#FAEAC4',
    300: '#F3C766',
    500: '#E0A126',
    600: '#BB8118',
    700: '#8E6011',
    900: '#4E350A',
  },

  /** Utility */
  transparent: 'transparent',
  current: 'currentColor',
  white: '#FFFFFF',
  black: '#000000',
};

// ═══════════════════════════════════════════════════════════════════════════
// 2. SEMANTIC TOKENS - what components consume
// ═══════════════════════════════════════════════════════════════════════════
// Every colour decision in the UI resolves through here. Swapping a brand
// colour means editing the palette above, not hunting through components.

const semantic = {
  light: {
    // Surfaces - four levels, in ascending prominence
    surface: {
      canvas: palette.aluminium[50], // page background
      base: palette.aluminium[0], // cards, panels
      sunken: palette.aluminium[100], // wells, table stripes, code
      raised: palette.aluminium[0], // elevated cards (pair with shadow)
      inverse: palette.aluminium[950], // graphite sections, footer
      brand: palette.pcb[900], // full-bleed brand sections
      brandSubtle: palette.pcb[50],
      accentSubtle: palette.copper[50],
      signalSubtle: palette.signal[50],
      scrim: 'rgba(20, 24, 26, 0.66)', // modal / image overlay
      scrimSoft: 'rgba(20, 24, 26, 0.28)',
    },

    // Text - contrast ratios against surface.canvas noted
    text: {
      primary: palette.aluminium[900], // 13.4:1
      secondary: palette.aluminium[700], // 8.1:1
      tertiary: palette.aluminium[600], // 5.9:1
      disabled: palette.aluminium[400], // 2.8:1 - non-essential only
      brand: palette.pcb[700], // 8.0:1
      accent: palette.copper[600], // 6.1:1  (500 is 4.4 - don't use for body)
      onBrand: palette.aluminium[0],
      onInverse: palette.aluminium[0],
      onInverseMuted: palette.aluminium[300], // 8.9:1 on graphite
      onAccent: palette.aluminium[0],
    },

    border: {
      subtle: palette.aluminium[100],
      default: palette.aluminium[200],
      strong: palette.aluminium[300],
      brand: palette.pcb[600],
      accent: palette.copper[400],
      inverse: 'rgba(255, 255, 255, 0.14)',
      focus: palette.pcb[500],
    },

    interactive: {
      brandRest: palette.pcb[700],
      brandHover: palette.pcb[800],
      brandActive: palette.pcb[900],
      accentRest: palette.copper[600],
      accentHover: palette.copper[700],
      accentActive: palette.copper[800],
      neutralRest: palette.aluminium[0],
      neutralHover: palette.aluminium[100],
      ghostHover: 'rgba(31, 98, 77, 0.08)',
      ghostHoverInverse: 'rgba(255, 255, 255, 0.10)',
    },

    status: {
      success: palette.pcb[600],
      successSurface: palette.pcb[50],
      successBorder: palette.pcb[200],
      warning: palette.signal[700],
      warningSurface: palette.signal[50],
      warningBorder: palette.signal[300],
      danger: '#A93226',
      dangerSurface: '#FBEDEB',
      dangerBorder: '#EEC2BC',
      info: '#2F6F8F',
      infoSurface: '#ECF4F8',
      infoBorder: '#BFD9E6',
    },

    /**
     * DATA - for tonnage counters, recovery percentages and the fraction bar.
     * Ordered by the actual material split of a processed consignment, so a
     * chart built from these reads correctly without per-chart colour config.
     */
    data: {
      ferrous: palette.aluminium[600],
      nonFerrous: palette.copper[500],
      plastics: palette.pcb[400],
      glass: '#7FA8B8',
      pcbFraction: palette.pcb[700],
      residue: palette.aluminium[400],
    },
  },

  dark: {
    surface: {
      canvas: palette.aluminium[950],
      base: '#1B211D',
      sunken: '#101413',
      raised: '#232A26',
      inverse: palette.aluminium[50],
      brand: palette.pcb[950],
      brandSubtle: 'rgba(46, 122, 97, 0.12)',
      accentSubtle: 'rgba(180, 104, 47, 0.14)',
      signalSubtle: 'rgba(224, 161, 38, 0.12)',
      scrim: 'rgba(8, 32, 26, 0.74)',
      scrimSoft: 'rgba(8, 32, 26, 0.35)',
    },
    text: {
      primary: palette.aluminium[50],
      secondary: palette.aluminium[300],
      tertiary: palette.aluminium[400],
      disabled: palette.aluminium[600],
      brand: palette.pcb[300],
      accent: palette.copper[300],
      onBrand: palette.aluminium[0],
      onInverse: palette.aluminium[900],
      onInverseMuted: palette.aluminium[600],
      onAccent: palette.aluminium[0],
    },
    border: {
      subtle: 'rgba(255, 255, 255, 0.07)',
      default: 'rgba(255, 255, 255, 0.13)',
      strong: 'rgba(255, 255, 255, 0.22)',
      brand: palette.pcb[500],
      accent: palette.copper[400],
      inverse: palette.aluminium[200],
      focus: palette.pcb[300],
    },
    interactive: {
      brandRest: palette.pcb[500],
      brandHover: palette.pcb[400],
      brandActive: palette.pcb[300],
      accentRest: palette.copper[500],
      accentHover: palette.copper[400],
      accentActive: palette.copper[300],
      neutralRest: '#232A26',
      neutralHover: '#2C3430',
      ghostHover: 'rgba(255, 255, 255, 0.08)',
      ghostHoverInverse: 'rgba(0, 0, 0, 0.16)',
    },
    status: {
      success: palette.pcb[300],
      successSurface: 'rgba(46, 122, 97, 0.14)',
      successBorder: 'rgba(126, 182, 160, 0.32)',
      warning: palette.signal[300],
      warningSurface: 'rgba(224, 161, 38, 0.13)',
      warningBorder: 'rgba(243, 199, 102, 0.30)',
      danger: '#E88178',
      dangerSurface: 'rgba(169, 50, 38, 0.16)',
      dangerBorder: 'rgba(232, 129, 120, 0.30)',
      info: '#8FC0D8',
      infoSurface: 'rgba(47, 111, 143, 0.16)',
      infoBorder: 'rgba(143, 192, 216, 0.30)',
    },
    data: {
      ferrous: palette.aluminium[400],
      nonFerrous: palette.copper[400],
      plastics: palette.pcb[300],
      glass: '#9CC0CE',
      pcbFraction: palette.pcb[400],
      residue: palette.aluminium[600],
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 3. TYPOGRAPHY
// ═══════════════════════════════════════════════════════════════════════════
// Three roles, three faces. Poppins and Lora were doing neither job well -
// Poppins is the most-used template face on the web and Lora reads editorial,
// not industrial.

const typography = {
  families: {
    /** Display - Bricolage Grotesque. Headings run at a light weight with tight
     *  tracking; the optical-size and width axes keep hero type from going brittle. */
    display: {
      stack: '"Bricolage Grotesque", ui-sans-serif, system-ui, sans-serif',
      variable: true,
      axes: { wght: [400, 700], wdth: [75, 100], opsz: [12, 96] },
      google: 'Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..700',
    },
    /** Body - Geist. Neutral, high x-height, reads cleanly at small sizes. */
    body: {
      stack: '"Geist", ui-sans-serif, system-ui, sans-serif',
      variable: true,
      axes: { wght: [400, 700] },
      google: 'Geist:wght@400;500;600;700',
    },
    /** Data - Geist Mono. Tonnage, authorisation numbers, manifest IDs,
     *  certificate references. A recycler's credibility is its documentation;
     *  giving numbers their own face makes that legible at a glance. */
    data: {
      stack: '"Geist Mono", ui-monospace, "SF Mono", Menlo, monospace',
      variable: true,
      axes: { wght: [400, 700] },
      google: 'Geist+Mono:wght@400;500;700',
    },
    /** Serif - Instrument Serif italic. Reserved for the emphasised word inside
     *  a heading (`<em>`), set in the accent colour. Never for body copy. */
    serif: {
      stack: '"Instrument Serif", ui-serif, Georgia, serif',
      google: 'Instrument+Serif:ital@0;1',
    },
  },

  /** One Google Fonts request for all four. The app itself loads these through
   *  next/font in app/layout.js; this href is the fallback for static exports. */
  googleFontsHref:
    'https://fonts.googleapis.com/css2' +
    '?family=Bricolage+Grotesque:opsz,wdth,wght@12..96,75..100,400..700' +
    '&family=Geist:wght@400;500;600;700' +
    '&family=Geist+Mono:wght@400;500;700' +
    '&family=Instrument+Serif:ital@0;1' +
    '&display=swap',

  /**
   * Fluid scale on a consistent ratio (1.2 at 380px → 1.28 at 1440px).
   * One scale only - the old config had `typography` and `fontSize` defining
   * overlapping, conflicting sizes.
   */
  scale: {
    display: {
      family: 'display',
      size: 'clamp(2.75rem, 1.6rem + 4.9vw, 5.5rem)',
      lineHeight: '0.98',
      letterSpacing: '-0.035em',
      weight: 600,
      width: 112, // wdth axis - expanded for hero only
      wrap: 'balance',
    },
    h1: {
      family: 'display',
      size: 'clamp(2.25rem, 1.5rem + 3.2vw, 3.75rem)',
      lineHeight: '1.06',
      letterSpacing: '-0.028em',
      weight: 600,
      width: 105,
      wrap: 'balance',
    },
    h2: {
      family: 'display',
      size: 'clamp(1.75rem, 1.25rem + 2.1vw, 2.75rem)',
      lineHeight: '1.14',
      letterSpacing: '-0.022em',
      weight: 600,
      wrap: 'balance',
    },
    h3: {
      family: 'display',
      size: 'clamp(1.375rem, 1.15rem + 0.95vw, 1.875rem)',
      lineHeight: '1.24',
      letterSpacing: '-0.014em',
      weight: 600,
      wrap: 'balance',
    },
    h4: {
      family: 'display',
      size: '1.1875rem',
      lineHeight: '1.36',
      letterSpacing: '-0.008em',
      weight: 600,
    },
    lead: {
      family: 'body',
      size: 'clamp(1.0625rem, 1rem + 0.32vw, 1.25rem)',
      lineHeight: '1.62',
      letterSpacing: '-0.004em',
      weight: 400,
      maxWidth: '58ch',
      wrap: 'pretty',
    },
    body: {
      family: 'body',
      size: '1rem',
      lineHeight: '1.68',
      weight: 400,
      maxWidth: '72ch',
      wrap: 'pretty',
    },
    bodySm: {
      family: 'body',
      size: '0.875rem',
      lineHeight: '1.6',
      weight: 400,
    },
    caption: {
      family: 'body',
      size: '0.8125rem',
      lineHeight: '1.5',
      weight: 400,
    },
    /** Eyebrow - mono, not uppercase-tracked sans. Reads as a plant label. */
    eyebrow: {
      family: 'data',
      size: '0.75rem',
      lineHeight: '1.3',
      letterSpacing: '0.09em',
      weight: 500,
      textTransform: 'uppercase',
    },
    /** Counters: "602.25 MT / month". Tabular so digits don't jitter on count-up. */
    dataXl: {
      family: 'data',
      size: 'clamp(2.25rem, 1.6rem + 2.7vw, 3.5rem)',
      lineHeight: '1',
      letterSpacing: '-0.03em',
      weight: 700,
      fontVariantNumeric: 'tabular-nums',
    },
    dataLg: {
      family: 'data',
      size: '1.5rem',
      lineHeight: '1.15',
      letterSpacing: '-0.02em',
      weight: 500,
      fontVariantNumeric: 'tabular-nums',
    },
    /** Authorisation numbers, CIN, manifest refs. */
    dataSm: {
      family: 'data',
      size: '0.8125rem',
      lineHeight: '1.45',
      letterSpacing: '0.01em',
      weight: 400,
      fontVariantNumeric: 'tabular-nums',
    },
    button: {
      family: 'body',
      size: '0.9375rem',
      lineHeight: '1',
      letterSpacing: '0.002em',
      weight: 600,
    },
    nav: {
      family: 'body',
      size: '0.9375rem',
      lineHeight: '1',
      weight: 500,
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 4. SPACE - 4px base. (The previous config had no spacing scale at all.)
// ═══════════════════════════════════════════════════════════════════════════

const space = {
  0: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  40: '10rem',
};

// ═══════════════════════════════════════════════════════════════════════════
// 5. LAYOUT
// ═══════════════════════════════════════════════════════════════════════════

const layout = {
  container: {
    wide: '1400px',
    default: '1200px',
    text: '68ch',
    narrow: '46rem',
    gutter: 'clamp(1.25rem, 4vw, 3rem)',
  },

  /** Section rhythm - three densities instead of one fixed value. */
  section: {
    tight: 'clamp(3rem, 6vw, 4.5rem)',
    default: 'clamp(4.5rem, 9vw, 7.5rem)',
    loose: 'clamp(6rem, 12vw, 10rem)',
  },

  grid: {
    columns: 12,
    gap: 'clamp(1.25rem, 2.5vw, 2rem)',
    gapTight: '1rem',
    gapLoose: '3rem',
  },

  header: {
    height: '76px',
    heightCompact: '62px', // after scroll
    announcementHeight: '38px',
  },

  /**
   * Radii - deliberately tight. The old set (up to 2.25rem) is what made the
   * design read as a soft wellness brand rather than an industrial operator.
   */
  radius: {
    none: '0',
    xs: '2px',
    sm: '4px',
    md: '6px',
    lg: '10px',
    xl: '14px',
    pill: '999px',
    circle: '50%',
  },

  borderWidth: {
    hairline: '1px',
    thick: '2px',
    rule: '3px', // fraction bar / heading underline
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 6. ELEVATION - two-layer (ambient + direct), tinted with the primary hue
// ═══════════════════════════════════════════════════════════════════════════

const elevation = {
  none: 'none',
  xs: '0 1px 2px rgba(1, 63, 93, 0.05)',
  sm: '0 1px 2px rgba(1, 63, 93, 0.05), 0 2px 6px rgba(1, 63, 93, 0.05)',
  md: '0 1px 3px rgba(1, 63, 93, 0.06), 0 6px 16px rgba(1, 63, 93, 0.07)',
  lg: '0 2px 6px rgba(1, 63, 93, 0.06), 0 14px 32px rgba(1, 63, 93, 0.09)',
  xl: '0 4px 10px rgba(1, 63, 93, 0.07), 0 26px 56px rgba(1, 63, 93, 0.12)',
  /** Inset hairline - carries card definition so shadows can stay quiet. */
  hairline: 'inset 0 0 0 1px rgba(1, 63, 93, 0.07)',
  hairlineInverse: 'inset 0 0 0 1px rgba(255, 255, 255, 0.10)',
  header: '0 1px 0 rgba(1, 63, 93, 0.07)',
  headerScrolled: '0 1px 0 rgba(1, 63, 93, 0.09), 0 8px 24px rgba(1, 63, 93, 0.06)',
  focusRing: '0 0 0 3px rgba(46, 122, 97, 0.32)',
  focusRingAccent: '0 0 0 3px rgba(180, 104, 47, 0.32)',
  focusRingInverse: '0 0 0 3px rgba(255, 255, 255, 0.45)',
};

// ═══════════════════════════════════════════════════════════════════════════
// 7. MOTION
// ═══════════════════════════════════════════════════════════════════════════

const motion = {
  duration: {
    instant: '80ms',
    fast: '140ms',
    normal: '220ms',
    slow: '380ms',
    deliberate: '620ms', // count-up, fraction bar fill
  },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    entrance: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
    exit: 'cubic-bezier(0.3, 0, 0.8, 0.15)',
    mechanical: 'cubic-bezier(0.65, 0, 0.35, 1)', // conveyor / stepper motion
  },
  transition: {
    colors: 'color 140ms cubic-bezier(0.2,0,0,1), background-color 140ms cubic-bezier(0.2,0,0,1), border-color 140ms cubic-bezier(0.2,0,0,1)',
    transform: 'transform 220ms cubic-bezier(0.05,0.7,0.1,1)',
    all: 'all 220ms cubic-bezier(0.2,0,0,1)',
  },
  /** Restrained on purpose: one lift value, no scale-on-hover on cards. */
  hover: {
    lift: 'translateY(-3px)',
    liftStrong: 'translateY(-6px)',
    nudge: 'translateX(3px)', // "Read more →" arrows
  },
  /** Honour prefers-reduced-motion - the old config had no provision for it. */
  reducedMotion: {
    duration: '1ms',
    transform: 'none',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 8. SIGNATURE - the one element this site is remembered by
// ═══════════════════════════════════════════════════════════════════════════
/**
 * FRACTION BAR. A 3px multi-segment rule whose widths are the actual material
 * recovery split of a processed consignment. It replaces the generic dotted
 * dividers both reference sites use, and it encodes something true: this is
 * what a tonne becomes. Used as a section divider, a heading underline, and
 * full-bleed under the header.
 *
 * Feed real recovery percentages from the plant. Widths must total 100.
 */
const signature = {
  fractionBar: {
    height: '3px',
    heightProminent: '6px',
    segments: [
      { key: 'ferrous', label: 'Ferrous', width: 38, token: 'data.ferrous' },
      { key: 'nonFerrous', label: 'Non-ferrous', width: 14, token: 'data.nonFerrous' },
      { key: 'plastics', label: 'Plastics', width: 27, token: 'data.plastics' },
      { key: 'pcbFraction', label: 'PCB', width: 9, token: 'data.pcbFraction' },
      { key: 'glass', label: 'Glass', width: 7, token: 'data.glass' },
      { key: 'residue', label: 'Residue', width: 5, token: 'data.residue' },
    ],
    animation: {
      property: 'width',
      duration: '620ms',
      easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
      stagger: '70ms',
    },
  },

  /** Eyebrow rule - short copper tick before mono eyebrow labels. */
  eyebrowRule: {
    width: '18px',
    height: '2px',
    color: 'text.accent',
    gap: space[3],
  },

  /** Weighbridge grid - 1px background grid on dark sections, at 6% opacity. */
  grid: {
    size: '56px',
    lineLight: 'rgba(1, 63, 93, 0.045)',
    lineDark: 'rgba(255, 255, 255, 0.05)',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 9. COMPONENT RECIPES - composed only from semantic tokens
// ═══════════════════════════════════════════════════════════════════════════

const components = {
  button: {
    base: {
      typography: 'button',
      radius: layout.radius.sm,
      borderWidth: layout.borderWidth.hairline,
      transition: motion.transition.colors,
      focusRing: elevation.focusRing,
      gap: space[2],
      whiteSpace: 'nowrap',
    },
    sizes: {
      sm: { paddingX: space[4], paddingY: space[2], minHeight: '36px', fontSize: '0.875rem' },
      md: { paddingX: space[5], paddingY: space[3], minHeight: '44px', fontSize: '0.9375rem' },
      lg: { paddingX: space[6], paddingY: space[4], minHeight: '52px', fontSize: '1rem' },
    },
    variants: {
      /** Default CTA. Brand green, not copper - copper is reserved for the
       *  single highest-intent action per view. */
      primary: {
        bg: 'interactive.brandRest',
        hoverBg: 'interactive.brandHover',
        activeBg: 'interactive.brandActive',
        text: 'text.onBrand',
        border: 'transparent',
        shadow: elevation.none,
        hoverShadow: elevation.sm,
      },
      /** Reserved: "Schedule a free pickup". One per page. */
      accent: {
        bg: 'interactive.accentRest',
        hoverBg: 'interactive.accentHover',
        activeBg: 'interactive.accentActive',
        text: 'text.onAccent',
        border: 'transparent',
        shadow: elevation.none,
        hoverShadow: elevation.sm,
        focusRing: elevation.focusRingAccent,
      },
      secondary: {
        bg: 'surface.base',
        hoverBg: 'interactive.neutralHover',
        text: 'text.brand',
        border: 'border.default',
        hoverBorder: 'border.strong',
        shadow: elevation.none,
      },
      ghost: {
        bg: 'transparent',
        hoverBg: 'interactive.ghostHover',
        text: 'text.brand',
        border: 'transparent',
      },
      onDark: {
        bg: 'transparent',
        hoverBg: 'interactive.ghostHoverInverse',
        text: 'text.onInverse',
        border: 'border.inverse',
        focusRing: elevation.focusRingInverse,
      },
      link: {
        bg: 'transparent',
        text: 'text.accent',
        hoverText: 'interactive.accentHover',
        border: 'none',
        paddingX: '0',
        paddingY: '0',
        underlineOffset: '4px',
      },
    },
  },

  card: {
    base: {
      radius: layout.radius.lg,
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      transition: `${motion.transition.transform}, box-shadow 220ms ${motion.easing.standard}`,
    },
    variants: {
      /** Definition comes from the hairline, not a heavy shadow. */
      default: {
        bg: 'surface.base',
        border: 'border.subtle',
        shadow: elevation.xs,
      },
      interactive: {
        bg: 'surface.base',
        border: 'border.subtle',
        shadow: elevation.xs,
        hoverShadow: elevation.lg,
        hoverBorder: 'border.default',
        hoverTransform: motion.hover.lift,
      },
      flat: {
        bg: 'surface.sunken',
        border: 'transparent',
        shadow: elevation.none,
      },
      outlined: {
        bg: 'transparent',
        border: 'border.default',
        shadow: elevation.none,
      },
      /** Certifications, authorisation numbers, compliance callouts. */
      credential: {
        bg: 'surface.base',
        border: 'border.default',
        shadow: elevation.none,
        radius: layout.radius.sm,
        accentEdge: { side: 'left', width: '3px', color: 'text.accent' },
        typography: 'dataSm',
      },
      inverse: {
        bg: 'surface.inverse',
        border: 'border.inverse',
        shadow: elevation.none,
        text: 'text.onInverse',
      },
      brand: {
        bg: 'surface.brand',
        border: 'transparent',
        shadow: elevation.none,
        text: 'text.onBrand',
      },
    },
  },

  badge: {
    base: {
      radius: layout.radius.xs,
      paddingX: space[2],
      paddingY: space[1],
      typography: 'eyebrow',
      borderWidth: layout.borderWidth.hairline,
    },
    variants: {
      brand: { bg: 'surface.brandSubtle', text: 'text.brand', border: 'transparent' },
      accent: { bg: 'surface.accentSubtle', text: 'text.accent', border: 'transparent' },
      /** Authorisation validity, EPR deadlines. */
      compliance: { bg: 'status.warningSurface', text: 'status.warning', border: 'status.warningBorder' },
      neutral: { bg: 'surface.sunken', text: 'text.secondary', border: 'transparent' },
      inverse: { bg: 'rgba(255,255,255,0.10)', text: 'text.onInverse', border: 'border.inverse' },
    },
  },

  input: {
    base: {
      bg: 'surface.base',
      text: 'text.primary',
      placeholder: 'text.tertiary',
      border: 'border.default',
      hoverBorder: 'border.strong',
      focusBorder: 'border.focus',
      focusRing: elevation.focusRing,
      radius: layout.radius.sm,
      paddingX: space[4],
      paddingY: space[3],
      minHeight: '46px',
      fontSize: '1rem', // 16px - prevents iOS zoom-on-focus
      transition: motion.transition.colors,
    },
    label: { typography: 'bodySm', color: 'text.secondary', weight: 500, marginBottom: space[2] },
    hint: { typography: 'caption', color: 'text.tertiary', marginTop: space[2] },
    error: { border: 'status.danger', color: 'status.danger', ring: '0 0 0 3px rgba(169,50,38,0.20)' },
    textarea: { minHeight: '132px' },
    /** Quantity / weight fields - mono + tabular. */
    numeric: { fontFamily: 'data', fontVariantNumeric: 'tabular-nums' },
  },

  header: {
    height: layout.header.height,
    bg: 'surface.canvas',
    bgScrolled: 'rgba(244, 246, 243, 0.86)',
    backdropFilter: 'saturate(150%) blur(12px)',
    borderBottom: 'border.subtle',
    shadow: elevation.header,
    shadowScrolled: elevation.headerScrolled,
    logo: { height: '38px', maxWidth: '176px' },
    nav: {
      typography: 'nav',
      rest: 'text.secondary',
      hover: 'text.primary',
      active: 'text.brand',
      /** Copper underline on active - the only place copper appears in nav. */
      activeIndicator: { height: '2px', color: 'text.accent', offset: '-6px' },
      itemGap: space[6],
    },
    /** Helpline strip above the nav - both reference sites bury the number. */
    utilityBar: {
      height: layout.header.announcementHeight,
      bg: 'surface.inverse',
      text: 'text.onInverseMuted',
      accent: 'text.accent',
      typography: 'dataSm',
    },
    cta: 'accent',
  },

  hero: {
    minHeight: 'min(86vh, 780px)',
    minHeightMobile: '620px',
    bg: 'surface.brand',
    /** A near-flat brand ground with one soft copper bloom - the previous
     *  three-stop teal gradient made every hero look like a stock ESG banner. */
    backgroundImage:
      'radial-gradient(120% 90% at 88% 8%, rgba(180,104,47,0.20) 0%, rgba(180,104,47,0) 58%), linear-gradient(180deg, #0E2F26 0%, #08201A 100%)',
    mediaScrim: 'linear-gradient(90deg, rgba(8,32,26,0.90) 0%, rgba(8,32,26,0.62) 46%, rgba(8,32,26,0.20) 100%)',
    gridOverlay: signature.grid.lineDark,
    eyebrow: { typography: 'eyebrow', color: 'text.accent' },
    title: { typography: 'display', color: 'text.onBrand' },
    body: { typography: 'lead', color: 'text.onInverseMuted', maxWidth: '52ch' },
    primaryCta: 'accent',
    secondaryCta: 'onDark',
    /** Counter strip sitting on the hero's lower edge. */
    statStrip: {
      bg: 'rgba(255,255,255,0.05)',
      border: 'border.inverse',
      value: { typography: 'dataLg', color: 'text.onInverse' },
      label: { typography: 'caption', color: 'text.onInverseMuted' },
    },
  },

  section: {
    paddingY: layout.section.default,
    variants: {
      canvas: { bg: 'surface.canvas', text: 'text.primary' },
      base: { bg: 'surface.base', text: 'text.primary' },
      sunken: { bg: 'surface.sunken', text: 'text.primary' },
      brand: { bg: 'surface.brand', text: 'text.onBrand', gridOverlay: true },
      graphite: { bg: 'surface.inverse', text: 'text.onInverse', gridOverlay: true },
      accentSubtle: { bg: 'surface.accentSubtle', text: 'text.primary' },
    },
    header: {
      eyebrow: { typography: 'eyebrow', color: 'text.accent', marginBottom: space[3] },
      title: { typography: 'h2', color: 'inherit' },
      lead: { typography: 'lead', color: 'text.secondary', marginTop: space[4] },
      maxWidth: '62ch',
      marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
    },
  },

  footer: {
    bg: 'surface.inverse',
    text: 'text.onInverseMuted',
    heading: { typography: 'eyebrow', color: 'text.onInverse' },
    link: { rest: 'text.onInverseMuted', hover: 'text.onInverse', transition: motion.transition.colors },
    border: 'border.inverse',
    /** Helpline numbers and authorisation refs set in mono. */
    contact: { typography: 'dataSm', color: 'text.onInverse' },
    accent: 'text.accent',
    paddingY: 'clamp(3.5rem, 7vw, 5.5rem)',
    bottomBar: { borderTop: 'border.inverse', paddingY: space[6], typography: 'caption' },
  },

  /** Impact counters - the numbers a compliance buyer scans for first. */
  statistic: {
    value: { typography: 'dataXl', color: 'text.primary' },
    valueAccent: { typography: 'dataXl', color: 'text.accent' },
    unit: { typography: 'dataLg', color: 'text.tertiary', marginLeft: space[1] },
    label: { typography: 'bodySm', color: 'text.secondary', marginTop: space[3] },
    footnote: { typography: 'caption', color: 'text.tertiary' },
    divider: 'border.subtle',
    countUp: { duration: motion.duration.deliberate, easing: motion.easing.mechanical },
  },

  /** Process stepper. Numbering is legitimate here - the stages are sequential
   *  and the order carries real information (media removal must precede
   *  dismantling). Don't reuse this pattern for non-sequential lists. */
  stepper: {
    marker: {
      typography: 'dataSm',
      color: 'text.accent',
      size: '2rem',
      border: 'border.accent',
      radius: layout.radius.none,
    },
    connector: { color: 'border.default', width: '1px', style: 'dashed' },
    title: { typography: 'h4', color: 'text.primary' },
    body: { typography: 'body', color: 'text.secondary' },
  },

  table: {
    headerBg: 'surface.sunken',
    headerText: 'text.secondary',
    headerTypography: 'eyebrow',
    cellPaddingX: space[4],
    cellPaddingY: space[3],
    border: 'border.subtle',
    stripeBg: 'surface.canvas',
    hoverBg: 'surface.sunken',
    numericFont: 'data',
    numericAlign: 'right',
  },

  modal: {
    bg: 'surface.base',
    radius: layout.radius.lg,
    shadow: elevation.xl,
    maxWidth: '560px',
    padding: 'clamp(1.5rem, 4vw, 2.5rem)',
    scrim: 'surface.scrim',
    scrimBlur: 'blur(3px)',
  },

  divider: {
    default: 'border.subtle',
    strong: 'border.default',
    inverse: 'border.inverse',
    /** Prefer the fraction bar over a plain rule between major sections. */
    signature: 'fractionBar',
  },
};

// ═══════════════════════════════════════════════════════════════════════════
// 10. SYSTEM
// ═══════════════════════════════════════════════════════════════════════════

const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

const zIndex = {
  base: 0,
  raised: 10,
  sticky: 200,
  header: 300,
  dropdown: 400,
  scrim: 500,
  modal: 600,
  toast: 700,
  tooltip: 800,
  skipLink: 900,
};

/**
 * Accessibility floor. These are commitments, not aspirations - check them in
 * CI if you can.
 */
const a11y = {
  minContrast: { bodyText: 4.5, largeText: 3.0, uiComponent: 3.0 },
  focusVisibleOnly: true,
  targetMinSize: '44px',
  skipLinkTarget: '#main',
  reducedMotionQuery: '(prefers-reduced-motion: reduce)',
  /** Known-bad pairs - do not use. */
  forbidden: [
    'copper.500 as text on aluminium.50 (4.4:1 - use copper.600)',
    'aluminium.400 as body text on any light surface',
    'signal.500 as text on white (2.5:1 - use signal.700)',
  ],
};

const brand = {
  name: 'Advait Green Recycling',
  legalName: 'ADVAIT GREEN RECYCLING PRIVATE LIMITED',
  /** Positioning line: what the business does, in its own vocabulary. */
  tagline: 'Recovered, documented, accounted for.',
  descriptor: 'Authorised e-waste, plastic and battery recycling',
  /** Alternates, if the above is too spare for the client:
   *  'Nothing is waste until it is wasted.'
   *  'Every kilogram accounted for.' */
};

// ═══════════════════════════════════════════════════════════════════════════
// 11. HELPERS - these make the dotted token strings above actually resolve
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Resolve a dotted semantic path to a real value.
 *   resolve('text.accent')          → '#995427'
 *   resolve('surface.brand', 'dark')→ '#08201A'
 * Falls through raw CSS values (hex, rgba, 'transparent') untouched.
 */
function resolve(path, mode = 'light') {
  if (typeof path !== 'string') return path;
  if (/^(#|rgb|hsl|var\(|transparent$|currentColor$|none$|inherit$)/.test(path)) return path;

  const scope = semantic[mode] || semantic.light;
  const value = path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), scope);
  if (value != null) return value;

  // Fall back to the raw palette, e.g. 'copper.500'
  const raw = path.split('.').reduce((acc, key) => (acc == null ? acc : acc[key]), palette);
  return raw != null ? raw : path;
}

/** Flatten an object into `--prefix-a-b: value` pairs. */
function flatten(obj, prefix, out = {}) {
  Object.entries(obj).forEach(([key, value]) => {
    const name = `${prefix}-${String(key).replace(/\./g, '_')}`;
    if (value && typeof value === 'object' && !Array.isArray(value)) flatten(value, name, out);
    else out[name] = value;
  });
  return out;
}

/**
 * Emit CSS custom properties for a mode. Drop the light set on :root and the
 * dark set on [data-theme="dark"] - one call, no duplication between JS and CSS.
 */
function toCSSVariables(mode = 'light') {
  return {
    ...flatten(semantic[mode], '--c'),
    ...flatten(space, '--space'),
    ...flatten(layout.radius, '--radius'),
    ...flatten(elevation, '--shadow'),
    ...flatten(motion.duration, '--dur'),
    ...flatten(motion.easing, '--ease'),
    '--font-display': typography.families.display.stack,
    '--font-body': typography.families.body.stack,
    '--font-data': typography.families.data.stack,
    '--container': layout.container.default,
    '--gutter': layout.container.gutter,
    '--header-h': layout.header.height,
  };
}

/** Serialise to a pasteable CSS block. */
function toCSSString() {
  const block = (selector, vars) =>
    `${selector} {\n${Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`;
  return [
    block(':root', toCSSVariables('light')),
    block('[data-theme="dark"]', flatten(semantic.dark, '--c')),
    `@media ${a11y.reducedMotionQuery} {\n  *, *::before, *::after {\n    animation-duration: ${motion.reducedMotion.duration} !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: ${motion.reducedMotion.duration} !important;\n    scroll-behavior: auto !important;\n  }\n}`,
  ].join('\n\n');
}

/** Drop-in Tailwind preset so Tailwind and JS never drift apart. */
const tailwindPreset = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        pcb: palette.pcb,
        copper: palette.copper,
        aluminium: palette.aluminium,
        signal: palette.signal,
        surface: {
          canvas: 'var(--c-surface-canvas)',
          base: 'var(--c-surface-base)',
          sunken: 'var(--c-surface-sunken)',
          inverse: 'var(--c-surface-inverse)',
          brand: 'var(--c-surface-brand)',
        },
        content: {
          DEFAULT: 'var(--c-text-primary)',
          secondary: 'var(--c-text-secondary)',
          tertiary: 'var(--c-text-tertiary)',
          brand: 'var(--c-text-brand)',
          accent: 'var(--c-text-accent)',
          inverse: 'var(--c-text-onInverse)',
        },
        line: {
          subtle: 'var(--c-border-subtle)',
          DEFAULT: 'var(--c-border-default)',
          strong: 'var(--c-border-strong)',
        },
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Instrument Sans', 'system-ui', 'sans-serif'],
        data: ['JetBrains Mono', 'monospace'],
      },
      spacing: space,
      borderRadius: layout.radius,
      boxShadow: elevation,
      maxWidth: { container: layout.container.default, wide: layout.container.wide, text: layout.container.text },
      screens: breakpoints,
      zIndex,
      transitionTimingFunction: motion.easing,
      transitionDuration: {
        fast: motion.duration.fast,
        normal: motion.duration.normal,
        slow: motion.duration.slow,
      },
    },
  },
};

// ═══════════════════════════════════════════════════════════════════════════

const theme = {
  brand,
  palette,
  semantic,
  typography,
  space,
  layout,
  elevation,
  motion,
  signature,
  components,
  breakpoints,
  zIndex,
  a11y,
  // helpers
  resolve,
  toCSSVariables,
  toCSSString,
  tailwindPreset,
};

module.exports = theme;
module.exports.default = theme;
module.exports.resolve = resolve;
module.exports.toCSSVariables = toCSSVariables;
module.exports.toCSSString = toCSSString;
module.exports.tailwindPreset = tailwindPreset;
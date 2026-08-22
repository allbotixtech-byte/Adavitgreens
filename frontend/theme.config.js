// theme.config.js
// SINGLE SOURCE OF TRUTH FOR THE ENTIRE ADVAIT GREEN RECYCLING WEBSITE

const theme = {
  // ============================================================
  // BRAND
  // ============================================================

  brand: {
    name: "Advait Green Recycling",
    legalName: "ADVAIT GREEN RECYCLING PRIVATE LIMITED",
    tagline: "Turning Waste Into Resources. Building a Greener Future.",
    shortTagline: "Responsible Waste Management. Sustainable Future.",
  },

  // ============================================================
  // FONTS
  // ============================================================

  fonts: {
    heading: {
      family: "Lora",
      google: "Lora:wght@400;500;600;700",
      fallback: "Georgia, serif",
    },

    body: {
      family: "Poppins",
      google: "Poppins:wght@300;400;500;600;700",
      fallback: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    },
  },

  // ============================================================
  // COLORS
  // ============================================================

  colors: {
    // ----------------------------------------------------------
    // PRIMARY — DEEP TEAL
    // ----------------------------------------------------------

    primary: {
      50: "#EFF8F8",
      100: "#DCEEEE",
      200: "#B9DCDD",
      300: "#8EC6C8",
      400: "#5FA9AC",
      500: "#2F8588",
      600: "#246F72",
      700: "#1B5C5F",
      800: "#12494B",
      900: "#083F41",
      950: "#062E30",
    },

    // ----------------------------------------------------------
    // SECONDARY — SAGE
    // ----------------------------------------------------------

    secondary: {
      50: "#F5F8F4",
      100: "#EAF1E9",
      200: "#D6E3D5",
      300: "#B9CDB8",
      400: "#9AB49A",
      500: "#7A9E7E",
      600: "#648667",
      700: "#506E53",
      800: "#3D573F",
      900: "#2E432F",
      950: "#1C2D1F",
    },

    // ----------------------------------------------------------
    // ACCENT — SAND / EARTH
    // ----------------------------------------------------------

    accent: {
      50: "#FCF9F1",
      100: "#F7F0DD",
      200: "#EFE1BC",
      300: "#E5CEA0",
      400: "#DCC083",
      500: "#D6A85F",
      600: "#C39348",
      700: "#A7783A",
      800: "#875F32",
      900: "#704F2C",
      950: "#4A331E",
    },

    // ----------------------------------------------------------
    // ECO — SUPPORTING GREEN
    // ----------------------------------------------------------

    eco: {
      50: "#F1F8F3",
      100: "#DDEEE1",
      200: "#BCDDC3",
      300: "#91C69B",
      400: "#66AB73",
      500: "#438E52",
      600: "#347542",
      700: "#285D35",
      800: "#214B2C",
      900: "#193B23",
    },

    // ----------------------------------------------------------
    // NEUTRALS
    // ----------------------------------------------------------

    neutral: {
      white: "#FFFFFF",
      black: "#000000",

      background: "#FAFAF7",
      backgroundAlt: "#F1F5F0",
      backgroundDark: "#062E30",

      surface: "#FFFFFF",
      surfaceSoft: "#F7F9F6",
      surfaceMuted: "#EAF0EB",

      text: "#202827",
      textSecondary: "#465352",
      textLight: "#687574",
      textMuted: "#98A5A3",

      textOnDark: "#FFFFFF",
      textOnDarkMuted: "#C5D3D1",

      border: "#DDE4E1",
      borderLight: "#E9EEEB",
      borderDark: "#294847",
    },

    // ----------------------------------------------------------
    // INDUSTRIAL
    // ----------------------------------------------------------

    industrial: {
      50: "#F6F7F7",
      100: "#EBEEED",
      200: "#D9DEDC",
      300: "#C0C8C5",
      400: "#9AA5A1",
      500: "#75817D",
      600: "#5D6865",
      700: "#48514F",
      800: "#343C3A",
      900: "#242B29",
      950: "#151B19",
    },

    // ----------------------------------------------------------
    // STATUS
    // ----------------------------------------------------------

    status: {
      success: "#438E52",
      successLight: "#EAF6EC",

      error: "#C84A4A",
      errorLight: "#FCECEC",

      warning: "#C38A35",
      warningLight: "#FFF5E3",

      info: "#397D9B",
      infoLight: "#EAF4F8",
    },

    // ----------------------------------------------------------
    // SPECIAL GRADIENTS
    // ----------------------------------------------------------

    special: {
      heroGradient:
        "linear-gradient(135deg, #062E30 0%, #083F41 48%, #1B5C5F 100%)",

      tealGradient:
        "linear-gradient(135deg, #083F41 0%, #246F72 100%)",

      sageGradient:
        "linear-gradient(135deg, #506E53 0%, #7A9E7E 100%)",

      earthGradient:
        "linear-gradient(135deg, #A7783A 0%, #D6A85F 100%)",

      softGradient:
        "linear-gradient(135deg, #F1F5F0 0%, #FAFAF7 100%)",

      overlay: "rgba(6, 46, 48, 0.58)",
      overlayLight: "rgba(6, 46, 48, 0.25)",
    },
  },

  // ============================================================
  // TYPOGRAPHY
  // ============================================================

  typography: {
    heroTitle: {
      fontSize: "clamp(2.75rem, 6vw, 5.25rem)",
      lineHeight: "1.05",
      letterSpacing: "-0.035em",
      fontWeight: 600,
    },

    h1: {
      fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
      lineHeight: "1.08",
      letterSpacing: "-0.03em",
      fontWeight: 600,
    },

    h2: {
      fontSize: "clamp(2rem, 4vw, 3.25rem)",
      lineHeight: "1.15",
      letterSpacing: "-0.025em",
      fontWeight: 600,
    },

    h3: {
      fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
      lineHeight: "1.25",
      letterSpacing: "-0.015em",
      fontWeight: 600,
    },

    h4: {
      fontSize: "1.35rem",
      lineHeight: "1.35",
      fontWeight: 600,
    },

    bodyLarge: {
      fontSize: "1.125rem",
      lineHeight: "1.8",
      fontWeight: 400,
    },

    body: {
      fontSize: "1rem",
      lineHeight: "1.75",
      fontWeight: 400,
    },

    bodySmall: {
      fontSize: "0.875rem",
      lineHeight: "1.6",
      fontWeight: 400,
    },

    label: {
      fontSize: "0.75rem",
      lineHeight: "1.4",
      letterSpacing: "0.12em",
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },

  // ============================================================
  // FONT SIZES
  // ============================================================

  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
  },

  // ============================================================
  // LAYOUT
  // ============================================================

  layout: {
    maxWidth: "1320px",
    contentWidth: "1180px",
    narrowWidth: "820px",

    headerHeight: "84px",

    sectionPaddingY: "6rem",
    sectionPaddingYMobile: "4rem",

    sectionPaddingX: "1.5rem",
    sectionPaddingXMobile: "1.25rem",

    gridGap: "2rem",
    cardGap: "1.5rem",

    borderRadius: {
      xs: "0.25rem",
      sm: "0.375rem",
      md: "0.625rem",
      lg: "0.875rem",
      xl: "1.25rem",
      "2xl": "1.75rem",
      "3xl": "2.25rem",
      full: "9999px",
    },
  },

  // ============================================================
  // SHADOWS
  // ============================================================

  shadows: {
    none: "none",

    xs: "0 1px 2px rgba(6, 46, 48, 0.04)",

    sm: "0 2px 8px rgba(6, 46, 48, 0.06)",

    md: "0 6px 18px rgba(6, 46, 48, 0.08)",

    lg: "0 12px 32px rgba(6, 46, 48, 0.10)",

    xl: "0 20px 50px rgba(6, 46, 48, 0.14)",

    card: "0 8px 28px rgba(6, 46, 48, 0.07)",

    cardHover: "0 18px 45px rgba(6, 46, 48, 0.13)",

    button: "0 8px 20px rgba(47, 133, 136, 0.25)",

    buttonHover: "0 12px 28px rgba(47, 133, 136, 0.32)",

    header: "0 2px 18px rgba(6, 46, 48, 0.06)",
  },

  // ============================================================
  // BUTTONS
  // ============================================================

  buttons: {
    primary: {
      bg: "primary.600",
      text: "neutral.white",
      hoverBg: "primary.700",
      activeBg: "primary.800",

      shadow: "button",
      hoverShadow: "buttonHover",

      border: "transparent",
      borderRadius: "md",

      paddingX: "1.75rem",
      paddingY: "0.875rem",

      fontSize: "0.9375rem",
      fontWeight: 600,

      transition: "normal",
    },

    secondary: {
      bg: "neutral.white",
      text: "primary.700",

      hoverBg: "primary.50",

      border: "primary.500",
      hoverBorder: "primary.600",

      borderRadius: "md",

      paddingX: "1.75rem",
      paddingY: "0.875rem",

      fontSize: "0.9375rem",
      fontWeight: 600,

      transition: "normal",
    },

    accent: {
      bg: "accent.500",
      text: "neutral.white",

      hoverBg: "accent.600",

      border: "transparent",
      borderRadius: "md",

      paddingX: "1.75rem",
      paddingY: "0.875rem",

      fontSize: "0.9375rem",
      fontWeight: 600,

      transition: "normal",
    },

    dark: {
      bg: "primary.950",
      text: "neutral.white",

      hoverBg: "primary.900",

      border: "transparent",
      borderRadius: "md",

      paddingX: "1.75rem",
      paddingY: "0.875rem",

      fontSize: "0.9375rem",
      fontWeight: 600,

      transition: "normal",
    },

    outlineLight: {
      bg: "transparent",
      text: "neutral.white",

      hoverBg: "rgba(255,255,255,0.10)",

      border: "rgba(255,255,255,0.55)",

      borderRadius: "md",

      paddingX: "1.75rem",
      paddingY: "0.875rem",

      fontSize: "0.9375rem",
      fontWeight: 600,

      transition: "normal",
    },

    link: {
      bg: "transparent",
      text: "primary.600",
      hoverText: "primary.800",

      border: "none",

      paddingX: "0",
      paddingY: "0",

      fontSize: "0.9375rem",
      fontWeight: 600,

      transition: "fast",
    },
  },

  // ============================================================
  // CARDS
  // ============================================================

  cards: {
    default: {
      background: "neutral.surface",
      border: "neutral.borderLight",
      borderRadius: "xl",
      shadow: "card",
      padding: "2rem",
    },

    service: {
      background: "neutral.surface",
      border: "neutral.borderLight",
      borderRadius: "xl",
      shadow: "card",
      hoverShadow: "cardHover",
      padding: "2rem",
    },

    featured: {
      background: "primary.900",
      border: "primary.800",
      borderRadius: "xl",
      shadow: "xl",
      padding: "2.5rem",
    },

    soft: {
      background: "neutral.surfaceSoft",
      border: "neutral.borderLight",
      borderRadius: "xl",
      shadow: "none",
      padding: "2rem",
    },

    earth: {
      background: "accent.50",
      border: "accent.200",
      borderRadius: "xl",
      shadow: "none",
      padding: "2rem",
    },
  },

  // ============================================================
  // BADGES
  // ============================================================

  badges: {
    primary: {
      background: "primary.50",
      text: "primary.700",
      border: "primary.200",
    },

    sage: {
      background: "secondary.100",
      text: "secondary.700",
      border: "secondary.200",
    },

    eco: {
      background: "eco.50",
      text: "eco.700",
      border: "eco.200",
    },

    warm: {
      background: "accent.50",
      text: "accent.700",
      border: "accent.200",
    },

    dark: {
      background: "primary.800",
      text: "neutral.white",
      border: "primary.700",
    },
  },

  // ============================================================
  // ICONS
  // ============================================================

  icons: {
    default: "primary.600",
    light: "primary.400",
    dark: "primary.800",
    sage: "secondary.600",
    eco: "eco.600",
    muted: "industrial.500",
    white: "neutral.white",
    accent: "accent.600",

    container: {
      size: "3.5rem",
      borderRadius: "lg",
      background: "primary.50",
    },

    containerSage: {
      size: "3.5rem",
      borderRadius: "lg",
      background: "secondary.100",
    },

    containerAccent: {
      size: "3.5rem",
      borderRadius: "lg",
      background: "accent.100",
    },

    containerLarge: {
      size: "4.5rem",
      borderRadius: "xl",
      background: "primary.100",
    },
  },

  // ============================================================
  // SECTIONS
  // ============================================================

  sections: {
    default: {
      background: "neutral.background",
      text: "neutral.text",
    },

    alternate: {
      background: "neutral.backgroundAlt",
      text: "neutral.text",
    },

    dark: {
      background: "primary.950",
      text: "neutral.textOnDark",
    },

    teal: {
      background: "primary.900",
      text: "neutral.textOnDark",
    },

    sage: {
      background: "secondary.50",
      text: "neutral.text",
    },

    warm: {
      background: "accent.50",
      text: "neutral.text",
    },

    eco: {
      background: "eco.50",
      text: "neutral.text",
    },
  },

  // ============================================================
  // HEADER
  // ============================================================

  header: {
    height: "84px",

    background: "rgba(250,250,247,0.94)",

    backdropFilter: "blur(14px)",

    borderBottom: "1px solid rgba(221,228,225,0.85)",

    shadow: "header",

    logo: {
      height: "42px",
      maxWidth: "190px",
    },

    nav: {
      text: "industrial.700",
      hoverText: "primary.600",
      activeText: "primary.700",

      fontSize: "0.875rem",
      fontWeight: 500,
    },

    cta: {
      background: "primary.600",
      text: "neutral.white",
      hoverBackground: "primary.700",
    },
  },

  // ============================================================
  // HERO
  // ============================================================

  hero: {
    minHeight: "680px",

    background: "special.heroGradient",

    overlay: "special.overlay",

    titleColor: "neutral.white",

    descriptionColor: "neutral.textOnDarkMuted",

    badge: {
      background: "rgba(214,168,95,0.14)",
      text: "accent.300",
      border: "rgba(214,168,95,0.35)",
    },

    primaryButton: {
      background: "accent.500",
      text: "primary.950",
      hoverBackground: "accent.400",
    },

    secondaryButton: {
      background: "transparent",
      text: "neutral.white",
      border: "rgba(255,255,255,0.55)",
      hoverBackground: "rgba(255,255,255,0.10)",
    },
  },

  // ============================================================
  // FORMS
  // ============================================================

  forms: {
    input: {
      background: "neutral.white",
      border: "neutral.border",

      text: "neutral.text",
      placeholder: "neutral.textMuted",

      focusBorder: "primary.500",
      focusRing: "rgba(47,133,136,0.15)",

      borderRadius: "md",

      paddingX: "1rem",
      paddingY: "0.8rem",

      fontSize: "0.9375rem",
    },

    label: {
      color: "industrial.700",
      fontSize: "0.875rem",
      fontWeight: 500,
    },

    textarea: {
      minHeight: "140px",
    },
  },

  // ============================================================
  // LINKS
  // ============================================================

  links: {
    default: {
      color: "primary.600",
      hoverColor: "primary.800",
    },

    subtle: {
      color: "industrial.600",
      hoverColor: "primary.600",
    },

    dark: {
      color: "neutral.textOnDark",
      hoverColor: "accent.300",
    },
  },

  // ============================================================
  // DIVIDERS
  // ============================================================

  dividers: {
    default: "neutral.borderLight",
    dark: "neutral.borderDark",
    teal: "primary.200",
    sage: "secondary.200",
    accent: "accent.200",
  },

  // ============================================================
  // TRANSITIONS
  // ============================================================

  transitions: {
    instant: "100ms ease",
    fast: "150ms ease",
    normal: "250ms ease",
    medium: "350ms ease",
    slow: "500ms ease",

    transform: "350ms cubic-bezier(0.22, 1, 0.36, 1)",
  },

  // ============================================================
  // ANIMATIONS
  // ============================================================

  animations: {
    hoverLift: {
      transform: "translateY(-6px)",
      transition: "350ms cubic-bezier(0.22, 1, 0.36, 1)",
    },

    hoverScale: {
      transform: "scale(1.02)",
      transition: "350ms cubic-bezier(0.22, 1, 0.36, 1)",
    },

    fadeUp: {
      animation: "fadeUp 0.7s ease forwards",
    },

    fadeIn: {
      animation: "fadeIn 0.6s ease forwards",
    },
  },

  // ============================================================
  // FOOTER
  // ============================================================

  footer: {
    background: "primary.950",

    text: "neutral.textOnDark",

    mutedText: "neutral.textOnDarkMuted",

    heading: "neutral.white",

    border: "rgba(255,255,255,0.10)",

    link: {
      color: "#C5D3D1",
      hoverColor: "#D6A85F",
    },

    accent: {
      color: "accent.500",
    },
  },

  // ============================================================
  // RESPONSIVE BREAKPOINTS
  // ============================================================

  breakpoints: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // ============================================================
  // Z-INDEX
  // ============================================================

  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    header: 300,
    overlay: 400,
    modal: 500,
    toast: 600,
    tooltip: 700,
  },
};

module.exports = theme;
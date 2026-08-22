// theme.config.js — SINGLE FILE TO CONTROL ENTIRE WEBSITE THEME

const theme = {
  // ============================================
  // BRAND
  // ============================================
  brand: {
    name: "Advait Green Recycling",
    legalName: "ADVAIT GREEN RECYCLING PRIVATE LIMITED",
    tagline: "Turning Waste Into Resources. Building a Greener Future.",
  },

  // ============================================
  // FONTS (from bytestechnolab.com)
  // ============================================
  fonts: {
    heading: {
      family: "Lora",
      google: "Lora:wght@400;500;600;700",
      fallback: "Georgia, serif",
    },
    body: {
      family: "Poppins",
      google: "Poppins:wght@300;400;500;600;700",
      fallback: "system-ui, sans-serif",
    },
  },

  // ============================================
  // COLORS
  // ============================================
  colors: {
    primary: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#16a34a",   // Main brand green
      600: "#15803d",
      700: "#166534",
      800: "#14532d",
      900: "#052e16",
    },
    secondary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
    },
    accent: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
    },
    neutral: {
      white: "#ffffff",
      black: "#000000",
      background: "#ffffff",
      backgroundAlt: "#f8fafc",
      text: "#1e293b",
      textLight: "#64748b",
      textMuted: "#94a3b8",
      border: "#e2e8f0",
    },
    status: {
      success: "#16a34a",
      error: "#dc2626",
      warning: "#f59e0b",
      info: "#3b82f6",
    },
  },

  // ============================================
  // FONT SIZES
  // ============================================
  fontSize: {
    xs: "0.75rem",      // 12px
    sm: "0.875rem",     // 14px
    base: "1rem",       // 16px
    lg: "1.125rem",     // 18px
    xl: "1.25rem",      // 20px
    "2xl": "1.5rem",    // 24px
    "3xl": "1.875rem",  // 30px
    "4xl": "2.25rem",   // 36px
    "5xl": "3rem",      // 48px
    "6xl": "3.75rem",   // 60px
    "7xl": "4.5rem",    // 72px
  },

  // ============================================
  // SPACING / LAYOUT
  // ============================================
  layout: {
    maxWidth: "1280px",
    headerHeight: "80px",
    sectionPaddingY: "5rem",     // 80px
    sectionPaddingX: "1.5rem",   // 24px
    borderRadius: {
      sm: "0.375rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      full: "9999px",
    },
  },

  // ============================================
  // SHADOWS
  // ============================================
  shadows: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.07)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
    card: "0 4px 20px rgba(0, 0, 0, 0.08)",
    button: "0 4px 14px rgba(22, 163, 74, 0.4)",
  },

  // ============================================
  // TRANSITIONS
  // ============================================
  transitions: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "500ms ease",
  },

  // ============================================
  // BUTTONS
  // ============================================
  buttons: {
    primary: {
      bg: "primary.500",
      text: "neutral.white",
      hoverBg: "primary.600",
      shadow: "button",
      borderRadius: "md",
      paddingX: "2rem",
      paddingY: "0.75rem",
    },
    secondary: {
      bg: "neutral.white",
      text: "primary.500",
      border: "primary.500",
      hoverBg: "primary.50",
      borderRadius: "md",
      paddingX: "2rem",
      paddingY: "0.75rem",
    },
  },
};

module.exports = theme;

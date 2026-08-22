#!/usr/bin/env node

/**
 * sync-theme.js
 *
 * Reads theme.config.js and updates the @theme inline block in globals.css
 * Run: node scripts/sync-theme.js
 *
 * This ensures theme.config.js is the TRUE single source of truth.
 * Change colors in theme.config.js → run this script → entire website updates.
 */

const fs = require("fs");
const path = require("path");

const theme = require("../theme.config.js");
const cssPath = path.join(__dirname, "../src/app/globals.css");

function buildThemeBlock(theme) {
  let lines = [];

  lines.push("@theme inline {");
  lines.push("  /* ---- Fonts ---- */");
  lines.push(`  --font-heading: "${theme.fonts.heading.family}", ${theme.fonts.heading.fallback};`);
  lines.push(`  --font-body: "${theme.fonts.body.family}", ${theme.fonts.body.fallback};`);
  lines.push("");

  // Color palettes
  const colorGroups = [
    { key: "primary", label: `Primary (${theme.brand?.name || "Brand"})` },
    { key: "secondary", label: "Secondary (Sage)" },
    { key: "accent", label: "Accent (Sand / Earth)" },
    { key: "eco", label: "Eco (Supporting Green)" },
    { key: "industrial", label: "Industrial (Neutrals)" },
  ];

  for (const group of colorGroups) {
    const colors = theme.colors[group.key];
    if (!colors) continue;

    lines.push(`  /* ---- ${group.label} ---- */`);
    for (const [shade, value] of Object.entries(colors)) {
      lines.push(`  --color-${group.key}-${shade}: ${value};`);
    }
    lines.push("");
  }

  // Shadows
  if (theme.shadows) {
    lines.push("  /* ---- Shadows ---- */");
    for (const [name, value] of Object.entries(theme.shadows)) {
      if (name === "none") continue;
      const cssName = name.replace(/([A-Z])/g, "-$1").toLowerCase();
      lines.push(`  --shadow-${cssName}: ${value};`);
    }
    lines.push("");
  }

  // Animations
  lines.push("  /* ---- Custom Animations ---- */");
  lines.push("  --animate-fade-in: fade-in 0.3s ease-out;");
  lines.push("  --animate-slide-in-from-top: slide-in-from-top 0.3s ease-out;");

  lines.push("}");

  return lines.join("\n");
}

// Read existing CSS
let css = fs.readFileSync(cssPath, "utf-8");

// Find and replace @theme inline block
const themeBlockRegex = /@theme inline \{[\s\S]*?\n\}/;
const newBlock = buildThemeBlock(theme);

if (themeBlockRegex.test(css)) {
  css = css.replace(themeBlockRegex, newBlock);
  console.log("Updated @theme inline block in globals.css");
} else {
  // Insert after @import "tailwindcss";
  css = css.replace(
    '@import "tailwindcss";',
    `@import "tailwindcss";\n\n${newBlock}`
  );
  console.log("Inserted @theme inline block into globals.css");
}

// Also update hardcoded values that reference theme colors
// Body background
const bgMatch = theme.colors.neutral?.background;
if (bgMatch) {
  css = css.replace(
    /background-color:\s*#FAFAF7;/,
    `background-color: ${bgMatch};`
  );
}

// Focus ring shadow color for inputs
const primaryRgb = hexToRgba(theme.colors.primary?.[500], 0.15);
if (primaryRgb) {
  css = css.replace(
    /box-shadow: 0 0 0 3px rgba\(\d+,\s*\d+,\s*\d+,\s*[\d.]+\);/g,
    `box-shadow: 0 0 0 3px ${primaryRgb};`
  );
}

fs.writeFileSync(cssPath, css, "utf-8");

console.log("Theme synced successfully!");
console.log(`  Primary: ${theme.colors.primary[500]}`);
console.log(`  Secondary: ${theme.colors.secondary[500]}`);
console.log(`  Accent: ${theme.colors.accent[500]}`);
console.log(`  Eco: ${theme.colors.eco?.[500] || "N/A"}`);

function hexToRgba(hex, alpha) {
  if (!hex) return null;
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

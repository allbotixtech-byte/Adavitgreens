#!/usr/bin/env node

/**
 * sync-theme.js
 *
 * Reads theme.config.js and updates the @theme inline block in globals.css
 * Run: node scripts/sync-theme.js
 *
 * Maps: pcb → primary, aluminium → secondary, copper → accent, signal → signal
 */

const fs = require("fs");
const path = require("path");

const theme = require("../theme.config.js");
const cssPath = path.join(__dirname, "../src/app/globals.css");

function buildThemeBlock() {
  let lines = [];

  lines.push("@theme inline {");
  lines.push("  /* ---- Fonts ---- */");
  lines.push(`  --font-heading: ${theme.typography.families.display.stack};`);
  lines.push(`  --font-body: ${theme.typography.families.body.stack};`);
  lines.push(`  --font-data: ${theme.typography.families.data.stack};`);
  lines.push("");

  const colorMap = [
    { source: "pcb", target: "primary", label: "Primary (Deep Teal)" },
    { source: "aluminium", target: "secondary", label: "Secondary (Neutral)" },
    { source: "copper", target: "accent", label: "Accent (Green)" },
    { source: "signal", target: "signal", label: "Signal (Regulatory Amber)" },
  ];

  for (const group of colorMap) {
    const colors = theme.palette[group.source];
    if (!colors) continue;

    lines.push(`  /* ---- ${group.label} ---- */`);
    for (const [shade, value] of Object.entries(colors)) {
      lines.push(`  --color-${group.target}-${shade}: ${value};`);
    }
    lines.push("");
  }

  // Shadows from elevation
  lines.push("  /* ---- Shadows ---- */");
  const shadowMap = {
    xs: theme.elevation.xs,
    sm: theme.elevation.sm,
    md: theme.elevation.md,
    lg: theme.elevation.lg,
    xl: theme.elevation.xl,
    card: theme.elevation.sm,
    "card-hover": theme.elevation.lg,
    button: theme.elevation.sm,
    "button-hover": theme.elevation.md,
    header: theme.elevation.header,
  };
  for (const [name, value] of Object.entries(shadowMap)) {
    lines.push(`  --shadow-${name}: ${value};`);
  }
  lines.push("");

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
const newBlock = buildThemeBlock();

if (themeBlockRegex.test(css)) {
  css = css.replace(themeBlockRegex, newBlock);
  console.log("Updated @theme inline block in globals.css");
} else {
  css = css.replace(
    '@import "tailwindcss";',
    `@import "tailwindcss";\n\n${newBlock}`
  );
  console.log("Inserted @theme inline block into globals.css");
}

fs.writeFileSync(cssPath, css, "utf-8");

console.log("Theme synced successfully!");
console.log(`  Primary (pcb):     ${theme.palette.pcb[500]}`);
console.log(`  Secondary (alum):  ${theme.palette.aluminium[500]}`);
console.log(`  Accent (copper):   ${theme.palette.copper[500]}`);
console.log(`  Signal:            ${theme.palette.signal[500]}`);

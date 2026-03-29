#!/usr/bin/env node
/**
 * Design System Extractor
 * Usage: node extract.js <url> [--output ./output]
 *
 * Extracts design tokens (colors, typography, spacing, shadows, borders)
 * and generates CSS custom properties, Tailwind config, W3C JSON tokens,
 * and Markdown documentation from any production website.
 *
 * Requires: npm install playwright tinycolor2
 * First run: npx playwright install chromium
 */

import { chromium } from "playwright";
import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

// ─── CLI args ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const url = args[0];
const outputFlag = args.indexOf("--output");
const outputDir = outputFlag !== -1 ? args[outputFlag + 1] : "./output";

if (!url) {
  console.error("Usage: node extract.js <url> [--output ./output]");
  process.exit(1);
}

const siteName = new URL(url).hostname.replace(/\./g, "-");
const outPath = join(outputDir, siteName);
mkdirSync(outPath, { recursive: true });

console.log(`\n🔍 Extracting design system from: ${url}`);
console.log(`📁 Output directory: ${outPath}\n`);

// ─── Browser extraction ───────────────────────────────────────────────────
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(1500); // let animations settle

const extracted = await page.evaluate(() => {
  const round2 = (n) => Math.round(n * 100) / 100;

  // ── Collect all stylesheets text ───────────────────────────────────────
  const styleTexts = [];
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        styleTexts.push(rule.cssText);
      }
    } catch (_) {
      // cross-origin sheets – skip
    }
  }
  const allCSS = styleTexts.join("\n");

  // ── CSS custom properties (--variables) ───────────────────────────────
  const cssVarRegex = /(--[\w-]+)\s*:\s*([^;]+);/g;
  const cssVars = {};
  let m;
  while ((m = cssVarRegex.exec(allCSS)) !== null) {
    cssVars[m[1].trim()] = m[2].trim();
  }

  // Also scan :root inline
  const rootStyle = getComputedStyle(document.documentElement);
  // Can't enumerate computed custom props easily – rely on parsed CSS above

  // ── Color extraction ───────────────────────────────────────────────────
  const colorSet = new Set();
  const colorRegex =
    /#([0-9a-fA-F]{3,8})\b|rgba?\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+(?:\s*,\s*[\d.]+)?\s*\)|hsla?\([^)]+\)/g;
  let cm;
  while ((cm = colorRegex.exec(allCSS)) !== null) {
    colorSet.add(cm[0].toLowerCase());
  }

  // ── Typography ─────────────────────────────────────────────────────────
  const fontFamilies = new Set();
  const fontSizes = new Set();
  const fontWeights = new Set();
  const lineHeights = new Set();
  const letterSpacings = new Set();

  const elements = document.querySelectorAll("*");
  for (const el of elements) {
    const cs = getComputedStyle(el);
    if (cs.fontFamily) fontFamilies.add(cs.fontFamily.split(",")[0].trim().replace(/['"]/g, ""));
    if (cs.fontSize) fontSizes.add(round2(parseFloat(cs.fontSize)));
    if (cs.fontWeight) fontWeights.add(cs.fontWeight);
    if (cs.lineHeight && cs.lineHeight !== "normal") {
      const lh = parseFloat(cs.lineHeight);
      if (!isNaN(lh)) lineHeights.add(round2(lh / parseFloat(cs.fontSize)));
    }
    if (cs.letterSpacing && cs.letterSpacing !== "normal") letterSpacings.add(cs.letterSpacing);
  }

  // ── Spacing ────────────────────────────────────────────────────────────
  const spacingValues = new Set();
  for (const el of elements) {
    const cs = getComputedStyle(el);
    for (const prop of ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft",
                         "marginTop", "marginRight", "marginBottom", "marginLeft",
                         "gap", "rowGap", "columnGap"]) {
      const val = parseFloat(cs[prop]);
      if (val > 0 && val < 200) spacingValues.add(round2(val));
    }
  }

  // ── Border radius ──────────────────────────────────────────────────────
  const radii = new Set();
  for (const el of elements) {
    const cs = getComputedStyle(el);
    const r = parseFloat(cs.borderRadius);
    if (r > 0) radii.add(round2(r));
  }

  // ── Shadows ────────────────────────────────────────────────────────────
  const shadows = new Set();
  for (const el of elements) {
    const cs = getComputedStyle(el);
    if (cs.boxShadow && cs.boxShadow !== "none") shadows.add(cs.boxShadow);
  }

  // ── Transitions ────────────────────────────────────────────────────────
  const transitions = new Set();
  for (const el of elements) {
    const cs = getComputedStyle(el);
    if (cs.transition && cs.transition !== "all 0s ease 0s") transitions.add(cs.transition);
  }

  // ── Z-index ────────────────────────────────────────────────────────────
  const zIndices = new Set();
  for (const el of elements) {
    const cs = getComputedStyle(el);
    if (cs.zIndex && cs.zIndex !== "auto") {
      const z = parseInt(cs.zIndex);
      if (!isNaN(z) && z !== 0) zIndices.add(z);
    }
  }

  // ── Gradients from CSS ─────────────────────────────────────────────────
  const gradients = new Set();
  const gradRegex = /(?:linear|radial|conic)-gradient\([^)]+\)/g;
  let gm;
  while ((gm = gradRegex.exec(allCSS)) !== null) {
    gradients.add(gm[0]);
  }

  // ── @font-face ─────────────────────────────────────────────────────────
  const fontFaces = [];
  const ffRegex = /@font-face\s*\{([^}]+)\}/g;
  let fm;
  while ((fm = ffRegex.exec(allCSS)) !== null) {
    const block = fm[1];
    const familyMatch = /font-family:\s*['"]?([^;'"]+)['"]?;/.exec(block);
    const srcMatch = /src:\s*([^;]+);/.exec(block);
    if (familyMatch) {
      fontFaces.push({
        family: familyMatch[1].trim(),
        src: srcMatch ? srcMatch[1].trim() : "",
      });
    }
  }

  // ── Breakpoints ────────────────────────────────────────────────────────
  const breakpoints = new Set();
  const bpRegex = /@media[^{]*\(\s*(?:min|max)-width\s*:\s*([\d.]+px)\s*\)/g;
  let bp;
  while ((bp = bpRegex.exec(allCSS)) !== null) {
    breakpoints.add(bp[1]);
  }

  return {
    cssVars,
    colors: [...colorSet],
    typography: {
      fontFamilies: [...fontFamilies].filter(Boolean),
      fontFaces,
      fontSizes: [...fontSizes].sort((a, b) => a - b),
      fontWeights: [...new Set([...fontWeights])].sort(),
      lineHeights: [...new Set([...lineHeights])].sort((a, b) => a - b),
      letterSpacings: [...letterSpacings],
    },
    spacing: [...spacingValues].sort((a, b) => a - b),
    radii: [...radii].sort((a, b) => a - b),
    shadows: [...shadows].slice(0, 20),
    transitions: [...transitions].slice(0, 10),
    zIndices: [...zIndices].sort((a, b) => a - b),
    gradients: [...gradients],
    breakpoints: [...breakpoints].sort(),
  };
});

await browser.close();

// ─── Post-process: deduplicate & cluster colors ───────────────────────────
function toHex(color) {
  // Normalize short hex #abc → #aabbcc
  if (/^#[0-9a-f]{3}$/i.test(color)) {
    return "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3];
  }
  return color;
}

function buildSpacingScale(pxValues) {
  const base = 4;
  const scale = {};
  const sorted = [...new Set(pxValues)].sort((a, b) => a - b);
  sorted.forEach((px) => {
    const key = px % base === 0 ? `${px / base}` : `${px}px`;
    scale[key] = `${px}px`;
  });
  return scale;
}

function buildTypographyScale(pxSizes) {
  const named = [
    [10, "xs"], [12, "sm"], [14, "base"], [16, "md"],
    [18, "lg"], [20, "xl"], [24, "2xl"], [30, "3xl"],
    [36, "4xl"], [48, "5xl"], [60, "6xl"], [72, "7xl"],
  ];
  const scale = {};
  const sorted = [...new Set(pxSizes)].sort((a, b) => a - b);
  sorted.forEach((px) => {
    const close = named.find(([n]) => Math.abs(n - px) < 2);
    const key = close ? close[1] : `${Math.round(px)}px`;
    scale[key] = `${px}px`;
  });
  return scale;
}

const spacingScale = buildSpacingScale(extracted.spacing);
const fontSizeScale = buildTypographyScale(extracted.typography.fontSizes);
const radiiScale = {};
extracted.radii.forEach((r) => { radiiScale[`${r}px`] = `${r}px`; });
if (extracted.radii.length) radiiScale["full"] = "9999px";

// ─── Generate design-tokens.json (W3C DTCG format) ────────────────────────
const tokens = {
  $schema: "https://design-tokens.org/schema.json",
  color: {},
  typography: {
    fontFamily: {},
    fontSize: {},
    fontWeight: {},
    lineHeight: {},
  },
  spacing: {},
  borderRadius: {},
  shadow: {},
  gradient: {},
  breakpoint: {},
  transition: {},
};

extracted.colors.forEach((c, i) => {
  const key = `color-${i + 1}`;
  tokens.color[key] = { $value: c, $type: "color" };
});

extracted.typography.fontFamilies.forEach((f) => {
  const key = f.toLowerCase().replace(/\s+/g, "-");
  tokens.typography.fontFamily[key] = { $value: f, $type: "fontFamily" };
});

Object.entries(fontSizeScale).forEach(([k, v]) => {
  tokens.typography.fontSize[k] = { $value: v, $type: "dimension" };
});

extracted.typography.fontWeights.forEach((w) => {
  tokens.typography.fontWeight[w] = { $value: w, $type: "fontWeight" };
});

Object.entries(spacingScale).forEach(([k, v]) => {
  tokens.spacing[k] = { $value: v, $type: "dimension" };
});

Object.entries(radiiScale).forEach(([k, v]) => {
  tokens.borderRadius[k] = { $value: v, $type: "dimension" };
});

extracted.shadows.slice(0, 8).forEach((s, i) => {
  tokens.shadow[`shadow-${i + 1}`] = { $value: s, $type: "shadow" };
});

extracted.gradients.forEach((g, i) => {
  tokens.gradient[`gradient-${i + 1}`] = { $value: g, $type: "gradient" };
});

extracted.breakpoints.forEach((bp) => {
  const key = bp.replace("px", "");
  tokens.breakpoint[`screen-${key}`] = { $value: bp, $type: "dimension" };
});

if (extracted.cssVars && Object.keys(extracted.cssVars).length > 0) {
  tokens.cssVariables = {};
  Object.entries(extracted.cssVars).forEach(([k, v]) => {
    tokens.cssVariables[k] = { $value: v };
  });
}

writeFileSync(join(outPath, "design-tokens.json"), JSON.stringify(tokens, null, 2));
console.log("✅ design-tokens.json");

// ─── Generate design-tokens.css ───────────────────────────────────────────
const cssLines = [
  `/* Design Tokens — extracted from ${url} */`,
  `/* Generated on ${new Date().toISOString()} */`,
  "",
  ":root {",
  "  /* ── Colors ── */",
];

extracted.colors.forEach((c, i) => {
  cssLines.push(`  --color-${i + 1}: ${c};`);
});

if (extracted.cssVars && Object.keys(extracted.cssVars).length > 0) {
  cssLines.push("");
  cssLines.push("  /* ── Original CSS Variables ── */");
  Object.entries(extracted.cssVars).forEach(([k, v]) => {
    cssLines.push(`  ${k}: ${v};`);
  });
}

cssLines.push("");
cssLines.push("  /* ── Typography ── */");
extracted.typography.fontFamilies.forEach((f) => {
  const key = f.toLowerCase().replace(/\s+/g, "-");
  cssLines.push(`  --font-${key}: '${f}', sans-serif;`);
});

cssLines.push("");
Object.entries(fontSizeScale).forEach(([k, v]) => {
  cssLines.push(`  --text-${k}: ${v};`);
});

cssLines.push("");
cssLines.push("  /* ── Spacing ── */");
Object.entries(spacingScale).forEach(([k, v]) => {
  cssLines.push(`  --space-${k}: ${v};`);
});

cssLines.push("");
cssLines.push("  /* ── Border Radius ── */");
Object.entries(radiiScale).forEach(([k, v]) => {
  cssLines.push(`  --radius-${k}: ${v};`);
});

if (extracted.shadows.length) {
  cssLines.push("");
  cssLines.push("  /* ── Shadows ── */");
  extracted.shadows.slice(0, 6).forEach((s, i) => {
    cssLines.push(`  --shadow-${i + 1}: ${s};`);
  });
}

if (extracted.transitions.length) {
  cssLines.push("");
  cssLines.push("  /* ── Transitions ── */");
  extracted.transitions.slice(0, 4).forEach((t, i) => {
    cssLines.push(`  --transition-${i + 1}: ${t};`);
  });
}

if (extracted.breakpoints.length) {
  cssLines.push("");
  cssLines.push("  /* ── Breakpoints ── */");
  extracted.breakpoints.forEach((bp) => {
    const key = bp.replace("px", "");
    cssLines.push(`  --screen-${key}: ${bp};`);
  });
}

cssLines.push("}");

// Gradient utilities
if (extracted.gradients.length) {
  cssLines.push("");
  cssLines.push("/* ── Gradient Utilities ── */");
  extracted.gradients.forEach((g, i) => {
    cssLines.push(`.gradient-${i + 1} { background: ${g}; }`);
  });
}

// Font face declarations
if (extracted.typography.fontFaces.length) {
  cssLines.push("");
  cssLines.push("/* ── Font Faces ── */");
  extracted.typography.fontFaces.forEach(({ family, src }) => {
    cssLines.push(`@font-face {\n  font-family: '${family}';\n  src: ${src};\n}`);
  });
}

writeFileSync(join(outPath, "design-tokens.css"), cssLines.join("\n"));
console.log("✅ design-tokens.css");

// ─── Generate tailwind.config.js ─────────────────────────────────────────
const twColors = {};
extracted.colors.forEach((c, i) => { twColors[`ds-${i + 1}`] = c; });

const twFontSize = {};
Object.entries(fontSizeScale).forEach(([k, v]) => { twFontSize[k] = v; });

const twSpacing = {};
Object.entries(spacingScale).forEach(([k, v]) => { twSpacing[k] = v; });

const twBorderRadius = {};
Object.entries(radiiScale).forEach(([k, v]) => { twBorderRadius[k] = v; });

const twFontFamily = {};
extracted.typography.fontFamilies.forEach((f) => {
  const key = f.toLowerCase().replace(/\s+/g, "-");
  twFontFamily[key] = [f, "sans-serif"];
});

const twScreens = {};
extracted.breakpoints.forEach((bp) => {
  const px = parseInt(bp);
  if (px === 640) twScreens["sm"] = bp;
  else if (px === 768) twScreens["md"] = bp;
  else if (px === 1024) twScreens["lg"] = bp;
  else if (px === 1280) twScreens["xl"] = bp;
  else twScreens[`screen-${bp.replace("px", "")}`] = bp;
});

const twConfig = `/** @type {import('tailwindcss').Config} */
// Design tokens extracted from ${url}
// Generated on ${new Date().toISOString()}

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: ${JSON.stringify(twColors, null, 6).replace(/^/gm, "      ").trimStart()},
      fontFamily: ${JSON.stringify(twFontFamily, null, 6).replace(/^/gm, "      ").trimStart()},
      fontSize: ${JSON.stringify(twFontSize, null, 6).replace(/^/gm, "      ").trimStart()},
      spacing: ${JSON.stringify(twSpacing, null, 6).replace(/^/gm, "      ").trimStart()},
      borderRadius: ${JSON.stringify(twBorderRadius, null, 6).replace(/^/gm, "      ").trimStart()},
      screens: ${JSON.stringify(twScreens, null, 6).replace(/^/gm, "      ").trimStart()},
    },
  },
  plugins: [],
};
`;

writeFileSync(join(outPath, "tailwind.config.js"), twConfig);
console.log("✅ tailwind.config.js");

// ─── Generate design-system.md ────────────────────────────────────────────
const md = [
  `# Design System`,
  ``,
  `> Extracted from **${url}**  `,
  `> Generated on ${new Date().toISOString()}`,
  ``,
  `---`,
  ``,
  `## Colors`,
  ``,
  `| Token | Value |`,
  `|-------|-------|`,
  ...extracted.colors.map((c, i) => `| \`--color-${i + 1}\` | ${c} |`),
  ``,
  `## Gradients`,
  ``,
  ...extracted.gradients.map((g, i) => [
    `### gradient-${i + 1}`,
    `\`\`\`css`,
    `background: ${g};`,
    `\`\`\``,
  ].join("\n")),
  ``,
  `## Typography`,
  ``,
  `### Font Families`,
  ``,
  `| Name | Usage |`,
  `|------|-------|`,
  ...extracted.typography.fontFamilies.map((f) => `| ${f} | \`var(--font-${f.toLowerCase().replace(/\s+/g, "-")})\` |`),
  ``,
  `### Font Sizes`,
  ``,
  `| Token | Value |`,
  `|-------|-------|`,
  ...Object.entries(fontSizeScale).map(([k, v]) => `| \`--text-${k}\` | ${v} |`),
  ``,
  `### Font Weights`,
  ``,
  extracted.typography.fontWeights.join(", "),
  ``,
  `## Spacing Scale`,
  ``,
  `| Token | Value |`,
  `|-------|-------|`,
  ...Object.entries(spacingScale).map(([k, v]) => `| \`--space-${k}\` | ${v} |`),
  ``,
  `## Border Radius`,
  ``,
  `| Token | Value |`,
  `|-------|-------|`,
  ...Object.entries(radiiScale).map(([k, v]) => `| \`--radius-${k}\` | ${v} |`),
  ``,
  `## Shadows`,
  ``,
  ...extracted.shadows.slice(0, 6).map((s, i) => [
    `### shadow-${i + 1}`,
    `\`\`\`css`,
    `box-shadow: ${s};`,
    `\`\`\``,
  ].join("\n")),
  ``,
  `## Breakpoints`,
  ``,
  `| Name | Value |`,
  `|------|-------|`,
  ...extracted.breakpoints.map((bp) => {
    const px = parseInt(bp);
    const name = px === 640 ? "sm" : px === 768 ? "md" : px === 1024 ? "lg" : px === 1280 ? "xl" : `screen-${bp.replace("px", "")}`;
    return `| ${name} | ${bp} |`;
  }),
  ``,
  `## Transitions`,
  ``,
  ...extracted.transitions.slice(0, 4).map((t) => `- \`${t}\``),
  ``,
  `## Z-Index Scale`,
  ``,
  extracted.zIndices.join(", ") || "_none detected_",
  ``,
  `---`,
  ``,
  `## Usage`,
  ``,
  `### CSS Custom Properties`,
  `\`\`\`html`,
  `<link rel="stylesheet" href="design-tokens.css">`,
  `\`\`\``,
  ``,
  `### Tailwind CSS`,
  `\`\`\`js`,
  `// tailwind.config.js — drop-in replacement or merge with yours`,
  `import dsConfig from './tailwind.config.js'`,
  `\`\`\``,
  ``,
  `### JSON Tokens (Style Dictionary compatible)`,
  `\`\`\`bash`,
  `npx style-dictionary build --config sd.config.json`,
  `\`\`\``,
];

writeFileSync(join(outPath, "design-system.md"), md.join("\n"));
console.log("✅ design-system.md");

console.log(`\n🎉 Done! All files saved to: ${outPath}`);

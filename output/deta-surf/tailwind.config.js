/** @type {import('tailwindcss').Config} */
// Design tokens extracted from https://deta.surf/
// Generated: 2026-03-29 — tool: collect-ds-from-website

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {

      // ── Colors ──────────────────────────────────────────────
      colors: {
        brand: {
          dark:  "#1a2a3a",   // heading gradient start
          mid:   "#3a5a7a",   // heading gradient end
        },
        accent: {
          bright: "#0097fe",  // primary CTA
          blue:   "#0080e5",  // CTA gradient end
        },
        interactive: {
          DEFAULT: "#0396df",
          end:     "#0282e8",
          hover:   "#006ec7",
        },
        border: {
          DEFAULT: "#28476110",
          hover:   "#28476140",
        },
        stroke: {
          light: "#d1d7fe",
        },
        overlay: {
          dark:  "#0000001a",
          light: "#ffffffe6",
        },
      },

      // ── Gradients (as backgroundImage) ──────────────────────
      backgroundImage: {
        "gradient-heading":       "linear-gradient(135deg, #1a2a3a, #3a5a7a)",
        "gradient-heading-muted": "linear-gradient(135deg, #1a2a3a99, #3a5a7a99)",
        "gradient-cta":           "linear-gradient(180deg, #0097fe, #0080e5)",
        "gradient-card-selected": "linear-gradient(180deg, #0396df, #0282e8)",
      },

      // ── Font Families ────────────────────────────────────────
      fontFamily: {
        sans:      ["Switzer", "sans-serif"],   // default
        switzer:   ["Switzer", "sans-serif"],
        gambarino: ["Gambarino", "serif"],
        tanker:    ["Tanker", "sans-serif"],
      },

      // ── Font Sizes ───────────────────────────────────────────
      fontSize: {
        xs:   ["0.75rem",  { lineHeight: "1rem" }],
        sm:   ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem",     { lineHeight: "1.5rem" }],
        md:   ["1.125rem", { lineHeight: "1.75rem" }],
        lg:   ["1.25rem",  { lineHeight: "1.75rem" }],
        xl:   ["1.5rem",   { lineHeight: "2rem" }],
        "2xl":["1.875rem", { lineHeight: "2.25rem" }],
        "3xl":["2.25rem",  { lineHeight: "2.5rem" }],
        "4xl":["3rem",     { lineHeight: "1.2" }],
        "5xl":["3.75rem",  { lineHeight: "1.1" }],
      },

      // ── Font Weights ─────────────────────────────────────────
      fontWeight: {
        regular:  "400",
        medium:   "500",
        semibold: "600",
        bold:     "700",
      },

      // ── Spacing (4px grid) ───────────────────────────────────
      spacing: {
        "0":  "0px",
        "1":  "4px",
        "2":  "8px",
        "3":  "12px",
        "4":  "16px",
        "5":  "20px",
        "6":  "24px",
        "8":  "32px",
        "10": "40px",
        "12": "48px",
        "16": "64px",
        "20": "80px",
        "24": "96px",
      },

      // ── Border Radius ────────────────────────────────────────
      borderRadius: {
        sm:   "4px",
        md:   "8px",
        lg:   "12px",
        xl:   "16px",
        "2xl":"24px",
        full: "9999px",
      },

      // ── Box Shadows ──────────────────────────────────────────
      boxShadow: {
        card:        "0 clamp(3.6px,0.36vw,4.8px) 0 0 #28476110 inset",
        "card-hover":"0 clamp(3.6px,0.36vw,4.8px) 0 0 #28476140 inset",
        "card-active":"0 clamp(3.6px,0.36vw,4.8px) 0 0 #0282e8 inset",
      },

      // ── Screens (breakpoints) ────────────────────────────────
      screens: {
        sm:  "640px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
        "2xl": "1536px",
      },

      // ── Transitions ──────────────────────────────────────────
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast:    "150ms",
        DEFAULT: "200ms",
        slow:    "300ms",
      },

      // ── Z-Index ──────────────────────────────────────────────
      zIndex: {
        base:    "0",
        raised:  "10",
        overlay: "100",
        modal:   "200",
      },
    },
  },
  plugins: [],
};

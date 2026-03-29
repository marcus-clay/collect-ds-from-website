import type { Config } from "tailwindcss";

// Design tokens — deta.surf
// Source: output/deta-surf/design-tokens.json
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#1a2a3a",
          mid:  "#3a5a7a",
        },
        accent: {
          bright: "#0097fe",
          blue:   "#0080e5",
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
      },
      backgroundImage: {
        "gradient-heading":        "linear-gradient(135deg, #1a2a3a, #3a5a7a)",
        "gradient-heading-muted":  "linear-gradient(135deg, #1a2a3a99, #3a5a7a99)",
        "gradient-cta":            "linear-gradient(180deg, #0097fe, #0080e5)",
        "gradient-card-selected":  "linear-gradient(180deg, #0396df, #0282e8)",
      },
      fontFamily: {
        sans:      ["Switzer", "sans-serif"],
        switzer:   ["Switzer", "sans-serif"],
        gambarino: ["Gambarino", "serif"],
        tanker:    ["Tanker", "sans-serif"],
      },
      fontSize: {
        xs:    ["0.75rem",  { lineHeight: "1rem" }],
        sm:    ["0.875rem", { lineHeight: "1.25rem" }],
        base:  ["1rem",     { lineHeight: "1.5rem" }],
        md:    ["1.125rem", { lineHeight: "1.75rem" }],
        lg:    ["1.25rem",  { lineHeight: "1.75rem" }],
        xl:    ["1.5rem",   { lineHeight: "2rem" }],
        "2xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "3xl": ["2.25rem",  { lineHeight: "2.5rem" }],
        "4xl": ["3rem",     { lineHeight: "1.2" }],
        "5xl": ["3.75rem",  { lineHeight: "1.1" }],
      },
      borderRadius: {
        sm:   "4px",
        md:   "8px",
        lg:   "12px",
        xl:   "16px",
        "2xl":"24px",
        full: "9999px",
      },
      boxShadow: {
        card:         "0 -4px 0 0 #28476110 inset",
        "card-hover": "0 -4px 0 0 #28476140 inset",
        "card-active":"0 -4px 0 0 #0282e8 inset",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      screens: {
        sm:  "640px",
        md:  "768px",
        lg:  "1024px",
        xl:  "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

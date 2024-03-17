import { defineConfig, defineKeyframes } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      animations: {
        spin: {
          value: "spin 1s linear infinite",
        },
      },
      colors: {
        gray: { value: "#404040" },
        red: {
          value: "#E35757",
        },
      },
    },

    semanticTokens: {
      colors: {
        primary: { value: "{colors.red}" },
      },
    },

    extend: {
      keyframes: defineKeyframes({
        inlineOutline: {
          "0%": { fill: "primary", stroke: "none", opacity: 0 },
          "25%": { fill: "primary", stroke: "none", opacity: 0.3 },
          "50%": { fill: "primary", stroke: "none", opacity: 0 },
          "51%": { fill: "none", stroke: "primary", opacity: 0 },
          "75%": { fill: "none", stroke: "primary", opacity: 0.3 },
          "100%": { fill: "none", stroke: "primary", opacity: 0 },
        },
        expandIn: {
          "0%": { opacity: 0, width: 0, height: 0 },
          "100%": { opacity: 1, width: 40, height: 40 },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
      breakpoints: {
        "3xl": "1800px",
        "4xl": "2048px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});

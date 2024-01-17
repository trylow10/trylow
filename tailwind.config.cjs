const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        black: "#1B1F23", // GitHub's black
        white: "#FFF",
        gray: {
          100: "#F6F8FA",
          200: "#E1E4E8",
          300: "#C1C7D0",
          400: "#959DA6",
          500: "#6A737D",
          600: "#586069", // GitHub's gray
          700: "#444D56",
          800: "#2F363D",
          900: "#24292E",
        },
        orange: "#238636", // GitHub's orange
      },
      fontFamily: {
        //heading
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        // Base text
        monospace: ["Inconsolata", "monospace"],
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      letterSpacing: {
        wide: ".025em",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h2: {
          letterSpacing: theme("letterSpacing.wide"),
          fontWeight: "bold",
        },
        li: {
          letterSpacing: theme("letterSpacing.wide"),
        },
      });
    }),
  ],
};

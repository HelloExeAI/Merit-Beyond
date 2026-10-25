import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Master Document Design System Palette
        ivory: {
          50: "#FAF5ED",
          100: "#F3E9D8", // Master Warm Ivory
          200: "#EADCC5",
          300: "#DEC8A9",
          DEFAULT: "#F3E9D8",
        },
        charcoal: {
          50: "#4A4139",
          100: "#3D352E",
          200: "#332B25",
          DEFAULT: "#29231D", // Master Primary text, dark sections & footer
          dark: "#1E1914",
        },
        gold: {
          50: "#F9F6F0",
          100: "#EFE6D4",
          200: "#E1D0AF",
          300: "#CEB587",
          DEFAULT: "#B69A6A", // Master Champagne Gold
          500: "#9E8152",
          600: "#846A3F",
        },
        navy: {
          50: "#F0F4F8",
          100: "#D6E0EB",
          200: "#9EB6D0",
          DEFAULT: "#26374B", // Master Executive Navy (Strategy, advisory, analytics)
          800: "#1A2635",
          900: "#101923",
        },
        sage: {
          50: "#F6F8F6",
          100: "#E8EEE9", // Master Soft Sage (Learning & capability development)
          200: "#D4DFD6",
          300: "#B8C8BC",
          DEFAULT: "#E8EEE9",
        },
        // Complementary Accent Tokens
        copper: {
          50: "#FAF0E7",
          100: "#F2D8C0",
          300: "#CF8C53",
          DEFAULT: "#A96525", // Action Buttons and highlights
          600: "#8C511B",
          700: "#6B3D14",
        },
        mahogany: {
          DEFAULT: "#552A19", // Headings & brand contrast
          600: "#442013",
          700: "#34170D",
        },
        softblack: {
          DEFAULT: "#29231D",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "SF Pro",
          "system-ui",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        apple: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "SF Pro",
          "system-ui",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 2px 10px rgba(41, 35, 29, 0.04)",
        card: "0 4px 20px rgba(41, 35, 29, 0.06)",
        elevated: "0 12px 32px rgba(41, 35, 29, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

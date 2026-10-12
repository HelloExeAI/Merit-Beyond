import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: "#FCF8F3",
          100: "#F7EBDD", // Primary background
          200: "#EEDBC4",
          300: "#E3C8A7",
          DEFAULT: "#F7EBDD",
        },
        champagne: {
          50: "#F9F5EC",
          100: "#F1E5D0",
          200: "#E8D5B0",
          300: "#DEC28E",
          400: "#D7B77E", // Accents and borders
          500: "#C5A56C",
          600: "#A8874F",
          DEFAULT: "#D7B77E",
        },
        copper: {
          50: "#FAF0E7",
          100: "#F2D8C0",
          200: "#E2B38A",
          300: "#CF8C53",
          400: "#BE7534",
          500: "#A96525", // Buttons and highlights
          600: "#8C511B",
          700: "#6B3D14",
          DEFAULT: "#A96525",
        },
        mahogany: {
          100: "#D7B5A7",
          200: "#B8806A",
          300: "#8D4D34",
          400: "#6B3520",
          500: "#552A19", // Headings and emphasis
          600: "#442013",
          700: "#34170D",
          DEFAULT: "#552A19",
        },
        softblack: {
          DEFAULT: "#171513", // Body text and navigation
          light: "#2B2724",
          muted: "#4A4540",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(85, 42, 25, 0.05)',
        'elevated': '0 10px 30px -4px rgba(85, 42, 25, 0.08), 0 4px 12px -2px rgba(85, 42, 25, 0.04)',
        'gold-glow': '0 0 25px rgba(215, 183, 126, 0.25)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D7B77E 0%, #E8D5B0 50%, #C5A56C 100%)',
        'subtle-ivory': 'linear-gradient(180deg, #FFFFFF 0%, #F7EBDD 100%)',
      }
    },
  },
  plugins: [],
};
export default config;

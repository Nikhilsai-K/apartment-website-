import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1918", // Deep Charcoal Background
        secondary: "#d4a574", // Elegant Gold Accent
        accent: "#3a3836", // Medium Charcoal
        dark: "#f5f1eb", // Off-White Text
        light: "#2a2826", // Lighter Charcoal for cards
        card: "#2a2826", // Dark Card Background
        overlay: "rgba(0, 0, 0, 0.8)", // Dark overlay for contrast
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-noto-serif-jp)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 1.2s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

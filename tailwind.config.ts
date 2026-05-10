import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: "#f7faed",
          100: "#edf4d5",
          200: "#d9e8aa",
          300: "#bdd476",
          500: "#7da34e",
          700: "#4d7030",
        },
        coral: {
          50: "#fff1ed",
          100: "#ffe0d7",
          500: "#ff735f",
          600: "#ef5845",
        },
        ink: "#1f2922",
        muted: "#6f7b6d",
      },
      boxShadow: {
        soft: "0 14px 34px rgba(69, 88, 52, 0.13)",
        card: "0 8px 20px rgba(53, 73, 39, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

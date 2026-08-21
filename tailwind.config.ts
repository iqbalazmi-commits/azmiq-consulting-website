import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#0c0a08",
          900: "#12100c",
          800: "#1a160f",
          700: "#241e14",
        },
        bronze: {
          200: "#e8d5b5",
          300: "#dcbf92",
          400: "#cfa66d",
          500: "#c08a4a",
          600: "#a06d33",
        },
        teal: {
          400: "#4a9d92",
          500: "#2f7f74",
          600: "#1f5f56",
        },
        forest: {
          600: "#1c3d2c",
          700: "#132c20",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "aurora-gradient":
          "radial-gradient(60% 50% at 20% 20%, rgba(192,138,74,0.18) 0%, rgba(192,138,74,0) 60%), radial-gradient(50% 40% at 80% 30%, rgba(47,127,116,0.15) 0%, rgba(47,127,116,0) 60%), radial-gradient(70% 60% at 50% 100%, rgba(160,109,51,0.12) 0%, rgba(160,109,51,0) 60%)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.6)", opacity: "0.9" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.2s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;

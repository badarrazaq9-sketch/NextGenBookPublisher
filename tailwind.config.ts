import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0D0B10",
          900: "#0D0B10",
          800: "#141118",
          700: "#1A161F",
          600: "#221C29",
          500: "#2C2434",
        },
        gold: {
          50: "#FBF3DC",
          100: "#F7E9C3",
          200: "#F3DFA0",
          300: "#EBD088",
          400: "#E0C16F",
          500: "#D4AF37",
          600: "#B8963B",
          700: "#9C7C2E",
          800: "#7A6124",
          900: "#5C491C",
        },
        cream: "#EDE9DF",
        muted: "#A8A29A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-linear": "linear-gradient(135deg, #F3DFA0 0%, #D4AF37 45%, #9C7C2E 100%)",
        "gold-radial": "radial-gradient(ellipse at center, rgba(212,175,55,0.14) 0%, transparent 65%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#061A2F",
        royal: "#0D2D4D",
        gold: "#C8A45D",
        cream: "#F6F4EE",
        ink: "#111111"
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "sans-serif"
        ],
        arabic: [
          "var(--font-cairo)",
          "sans-serif"
        ]
      },
      boxShadow: {
        premium: "0 20px 60px rgba(6, 26, 47, 0.14)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top, rgba(200,164,93,0.18), transparent 32%), linear-gradient(135deg, rgba(13,45,77,0.98), rgba(6,26,47,1))"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 30s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;

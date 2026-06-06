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
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface2)",
        borderColor: "var(--border)", // Using borderColor to avoid clash with tailwind default border
        border: "var(--border)",
        teal: "var(--teal)",
        "teal-dim": "var(--teal-dim)",
        amber: "var(--amber)",
        textDefault: "var(--text)", // avoid clash with text sizing
        "text-dim": "var(--text-dim)",
        "text-mid": "var(--text-mid)",
        whiteColor: "var(--white)",
      },
      fontFamily: {
        mono: ["var(--font-space-mono)", "Space Mono", "monospace"],
        serif: ["var(--font-dm-serif-display)", "DM Serif Display", "serif"],
        sans: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 212, 170, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;

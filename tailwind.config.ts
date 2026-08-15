import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "studio-black": "#090909",
        charcoal: "#111111",
        dark: "#1A1A1A",
        card: "#1C1C1C",
        border: "#2A2A2A",
        gold: "#D4AF77",
        "gold-light": "#E8C97A",
        "gold-dark": "#B8935A",
        cream: "#F5EDD8",
        mist: "#A89880",
        rust: "#B0512E",
        moss: "#5C6B47",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

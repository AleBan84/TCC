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
        black:   "#080808",
        surface: "#0F0F0F",
        border:  "#1A1A1A",
        muted:   "#3A3A3A",
        sub:     "#666666",
        body:    "#ABABAB",
        white:   "#F2F2EF",
        neon:    "#CCFF00",
      },
      fontFamily: {
        display: ["Barlow Condensed", "Arial Narrow", "sans-serif"],
        body:    ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;

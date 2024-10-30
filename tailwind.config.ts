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
        background: "var(--background)",
        foreground: "var(--foreground)",
        violet: "#7463DA",
        lightBlue: "#DCEAF4",
        orange: "#DE4D4D",
      },
      fontSize: {
        xxl: "4rem",
      },
    },
  },
  plugins: [],
};
export default config;

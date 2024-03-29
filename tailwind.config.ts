/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#999D9E",
      },
      fontFamily: {
        manrope: "'Manrope',sans-serif",
      },
      boxShadow: {
        card: "0px 30px 45px -30px #32325D40",
        nav: "0px 1px 29px 0px #809FF01F",
      },
      animation: {
        rotate: "spin 500ms ease-in-out 150ms",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xx: "1500px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
export default config;

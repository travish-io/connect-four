/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "767px",
      lg: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      success: "#74e274",
      error: "#ff0038",
      gray: "rgba(0, 0, 0, 0.66)",
      "brand-purple-dark": "#5c2dd5",
      "brand-purple": " #7945ff",
      "brand-pink": "#fd6687",
      "brand-yellow": "#FFCE67",
    },
    extend: {},
  },
  plugins: [],
};

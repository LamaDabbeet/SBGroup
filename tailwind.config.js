/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fonts: {
      montserrat: `"Montserrat", sans-serif`,
      cairo: `"Cairo", sans-serif`,
    },
    colors: {
      primary: "#1a446c",
      secondary: "#ffb835",
      cyan: "#2ba5dc",
      yellow: "#f8d733",
      green:"#2e6642",
      red:"#e93333",
      "gray-dark": "#707070",
      gray: " #6b6767",
      silver: "#a0a0a0",
      black: colors.black,
      white: colors.white,
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#6d6d6f",
        main_dark: "#3d3d3f",
        dark: "#2e3845",
        color1: "#ff656d",
        color2: "#fbaa72"
      },
    },
  },
  plugins: [],
};
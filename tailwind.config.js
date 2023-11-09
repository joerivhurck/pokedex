/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#DC0A2D",
        medium : "#666666"
      }
    },
  },
  plugins: [],
}
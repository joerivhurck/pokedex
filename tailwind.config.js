/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#DC0A2D',
        medium: '#666666',
        dark: '#1D1D1D',
        light: '##E0E0E0',
        background: '#EFEFEF'
      },
      fontFamily: {
        // eslint-disable-next-line no-undef
        poppins: ['Poppins'],
      }
    }
  },
  plugins: []
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#DC0A2D',
        medium: '#666666',
        dark: '#1D1D1D',
        light: '#E0E0E0',
        background: '#EFEFEF',
        wire: '#b8b8b8',
        Bug: '#A7B723',
        Dragon: '#7037FF',
        Electric: '#F9CF30',
        Fairy: '#E69EAC',
        Fighting: '#C12239',
        Fire: '#F57D31',
        Flying: '#A891EC',
        Ghost: '#70559B',
        Normal: '#AAA67F',
        Grass: '#74CB48',
        Ground: '#DEC16B',
        Ice: '#9AD6DF',
        Poison: '#A43E9E',
        Psychic: '#FB5584',
        Rock: '#B69E31',
        Steel: '#B7B9D0',
        Water: '#6493EB'
      },
      fontFamily: {
        // eslint-disable-next-line no-undef
        poppins: ['Poppins']
      },
      fontSize: {
        s: '10px'
      }
    }
  },
  plugins: []
}

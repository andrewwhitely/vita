const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-grey': '#171717',
      },
      fontFamily: {
        sans: ['Karla'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

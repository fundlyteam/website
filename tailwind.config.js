/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        brand: ['Lato', 'sans-serif'],
        script: ['Kalam', 'cursive'],
      },
      colors: {
        primary: '#025196',
        accent: '#fdb338'
      },
    },
  },
  plugins: [],
}

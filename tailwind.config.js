/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        brand: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#025196',
        accent: '#fdb338',
        linkedin: "#0a66c2",
        facebook: "#1877F2",
        twitter: "#1DA1F2",
        instagram: "#E4405F"
      },
    },
  },
  plugins: [],
});

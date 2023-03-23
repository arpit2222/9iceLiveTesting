/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      abc:['Special Elite', 'cursive'],
      second:['Philosopher', 'sans-serif']
    },
  },
  plugins: [],
}
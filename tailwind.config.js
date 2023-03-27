/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      ui: ['Inter']
    },
    extend: {
      colors: {
        'green-primary': '#006c52',
        'green-on-primary': '#ffffff'
      },
    },
  },
  plugins: [],
}

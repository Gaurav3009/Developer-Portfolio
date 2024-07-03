/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-primary' : "#111f44",
        'clr-secondary' : "#5adfcb",
        'clr-tertiary' : "#194760"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 10px 70px -20px rgba(0, 0, 0, 50)',
      }
    },
  },
  plugins: [],
}


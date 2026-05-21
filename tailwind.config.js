/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF4500',
          black: '#111111',
        }
      },
    },
  },
  plugins: [],
}

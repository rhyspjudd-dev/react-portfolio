/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['calc(1em + 1vw);'],
      xl: ['calc(1em + 5vw)'],
      '2xl': ['calc(1em + 10vw)']
    },
    extend: {},
  },
  plugins: [],
}


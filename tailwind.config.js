/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '3rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    fontSize: {
      sm: ['16px', '20px'],
      base: ['16px', '24px'],
      lg: ['calc(1em + 1vw);'],
      xl: ['calc(1em + 7vw)'],
      '2xl': ['calc(1em + 10vw)'],
    },
    fontFamily: {
      heading: ['Cabin Sketch', 'cursive', 'Helvetica', 'sans-serif'],
      body: ['Raleway', 'Arial', 'sans-serif'],
    },
    colors: {
      'black': '#000',
      'white': '#fff',
      'gray': '#d3d3d3',
      'alt-white': '#fefefe',
      'alt-section-bg': '#F9F9F9',
    },
  },
  plugins: ["tailwindcss ,autoprefixer"],
}


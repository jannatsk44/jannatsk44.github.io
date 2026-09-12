/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbg: '#171717',
        butonOrange: '#374151',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lufga': ['Lufga', 'sans-serif'],
        'urbanist': ['Urbanist', 'sans-serif'],
      },
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbg: '#171717',
        butonOrange: '#374151',

      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lufga': ['Lufga', 'sans-serif'],

      },
      screens:{
        'xs': {'max':'374px'},
        'sm': {'max':'640px'},
        'md': {'max':'768px'},
        'lg': {'max':'1024px'},
        'xl': {'max':'1280px'},
        '2xl': {'max':'1536px'},
        'mobile': {'max':'480px'},
        'tablet': {'min':'481px', 'max':'768px'},
        'laptop': {'min':'769px', 'max':'1024px'},
        'desktop': {'min':'1025px'},
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbg: '#171717',
        butonOrange: '#FD853A',

      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'lufga': ['Lufga', 'sans-serif'],

      },
      screens:{
        'lgg': {'max':'1700px'},
        'sm': {'max':'700px'},
        'xs': {'max':'374px'},
        'md': {'max':'1100px'},
      },
    },
  },
  plugins: [],
}
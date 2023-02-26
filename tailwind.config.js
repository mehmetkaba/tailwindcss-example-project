/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    container: {
      center: true
    },

    extend: {
      fontFamily: {
        gemunuLibre: ['Gemunu Libre', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        mynerve: ['Mynerve', 'cursive']
      },
      colors: {
        'fbLaci': '#002d72',
        'fbSari': '#ffed00'
      }
    },

  },
  plugins: [],
}

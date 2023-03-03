/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
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
      },
      spacing: {
        '128': '32rem'
      }
    },

  },
  plugins: [],
}

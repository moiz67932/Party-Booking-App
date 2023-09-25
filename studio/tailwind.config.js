/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'filicudi': ['filicudi-solid'],
      },
  },
    extend: {

      rotate: {
        '6': '6deg',
      },
      padding:{
        '26':'6.2rem'
      },
      item: {
        '1' : {order : 1},
      },
      gap: {
        '58' : '58px',
      },
      fontSize:{
        '23xl' : '200px',
      },
      fontWeight:{
        '700' : '700',
      },
      width:{
        '120': '600px',
      }
    },

  }


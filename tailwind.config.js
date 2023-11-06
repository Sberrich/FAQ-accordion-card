/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Textdark: 'hsl(238, 29%, 16%',
        Textred: 'hsl(14, 88%, 65%)',
        Textverydark:'hsl(237, 12%, 33%)',
        textdarkgraybleu: 'hsl(240, 6%, 50%)',
        bgsoftviolet: 'hsl(273, 73%, 66%)',
        bgsoftblue: 'hsl(240, 73%, 65%)',
        divider: 'hsl(240, 5%, 91%)',
      },
      fontFamily:{
        kumbh: ['Kumbh Sans', 'sans-serif']},
    },
  },
  plugins: [],
}


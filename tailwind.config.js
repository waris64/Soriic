/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      display:['responsive'],
      fontFamily:{
        'Roboto':['Roboto Mono, monospace']
      },
      backgroundColor:{
        'card-bg': 'linear-gradient(0deg, rgba(200,217,224,1) 5%, rgba(246,252,252,1) 47%)'
      }
    },
  },
  plugins: [],
}


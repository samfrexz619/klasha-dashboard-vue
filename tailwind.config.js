/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    },
    
    extend: {
      colors: {
        nav: '#FFFBF7',
        pry: '#0A0A0A',
        text: '#8D8D8D',
        modal: 'rgba(0,0,0,0.4)',
      },
      spacing: {
        top: 'calc(100% - 256px)',
        graf: 'calc[100% - 300px]',
        mobile: 'calc[100% - 90px]',
      }
    },
  },
  plugins: [],
}


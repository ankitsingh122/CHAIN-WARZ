/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        custom: '#070123',
      },
      fontFamily: {
        'azonix': ['azonixregular', 'sans-serif'],
      }

      

      
    },
  },
 
}


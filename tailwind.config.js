/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
    },
    container:{
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1340px',
      },
    }
  },
  plugins: [],
  darkMode:'class'
}
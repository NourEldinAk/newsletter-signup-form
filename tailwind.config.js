/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkGrey: "#3A4B5D",  
        primary: "#FF6347",  
        charcoalGrey: "#3B3E43",
        neutralGrey: "#A4A4A4",
      }
    },
  },
  plugins: [],
}

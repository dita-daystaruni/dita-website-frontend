/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}"
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      backgroundImage: {
        'header-photo': "url('./src/assets/unsplash_dsvJgiBJTOs.png')",
      },
      colors: {
        'custom-navy-blue': '#1E1E1E',
      }
},
  },
  plugins: [],
}


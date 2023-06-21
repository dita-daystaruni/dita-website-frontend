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
      colors: {
        'custom-navy-blue': '#1E1E1E',
      }
},
  },
  plugins: [],
}


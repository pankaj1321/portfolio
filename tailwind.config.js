/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b4049e',
        secondary: '#8a0377',
        accent: '#ff0090',
        background: '#151515',
        'background-alt': '#1c1c1c',
        'text-light': '#aaaaaa',
        'border-color': '#333333',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
}

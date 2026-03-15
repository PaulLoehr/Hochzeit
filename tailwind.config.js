/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        navy: {
          light: '#4A5D8A',
          DEFAULT: '#1F3A63',
          dark: '#152842',
        },
        sage: {
          light: '#C4D6B0',
          DEFAULT: '#9CAF88',
          dark: '#7A9B76',
        },
        charcoal: {
          light: '#4A4A4A',
          DEFAULT: '#2C2C2C',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

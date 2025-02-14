/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./src/_includes/**/*.{html,js,njk,md}",
    "./src/_layouts/**/*.{html,js,njk,md}"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F5F0',
        violet: {
          light: '#E6E6FA',
          DEFAULT: '#8B7AA8',
          dark: '#4B3B65'
        }
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
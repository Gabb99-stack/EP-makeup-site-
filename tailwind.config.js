/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'epi-black': '#0A0A0A',
        'epi-ivory': '#F4F4F2',
        'epi-sage': '#A3B5A1',
        'epi-gray': '#C9C9C9'
      },
      borderRadius: {
        'xl2': '1rem'
      },
      boxShadow: {
        'soft': '0 6px 30px rgba(0,0,0,0.35)'
      }
    },
    fontFamily: {
      display: ['var(--font-playfair)'],
      sans: ['var(--font-inter)']
    }
  },
  plugins: []
}

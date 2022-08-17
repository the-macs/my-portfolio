/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0891B2',
        dark: '#0F172A',
        secondary: '#64748B'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}

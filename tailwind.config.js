/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{css,xml,html,vue,svelte,ts,tsx}'
  ],
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {
      colors: {
        primary: '#0C9238',
        secondary: '#58AF31',
        dark: '#2E2D2C',
        darker: '#0D0D0D'
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
}
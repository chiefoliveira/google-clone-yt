module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/line-clamp")],
}

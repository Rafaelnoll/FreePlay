module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#996DFF",
          500: "#8257e6"
        }
      },
      backgroundImage: {
        "header-bg-image": "url('https://www.freetogame.com/assets/images/paladins.png')"
      }
    },
  },
  plugins: [],
}

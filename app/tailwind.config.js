/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { // Utiliser 'colors' au lieu de 'color'
        background: "#191A1F",
        primary: "#674AFB",
        primary70: "#674AFB70",
        secondary: "#FE628B",
        subtitle: "#35383E",
        error: "#FE628B"
      },
      fontSize: {
        h2: "2rem",
        h3: "1.5rem",
        subtitleSize: "0.8rem"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        purple: "rgb(19 23 64)",
        purpleSecond: "rgb(131 88 255)",
        gray: "rgb(125 127 150)",
        green: "rgb(16 185 129)",
        blueNuit: "#0D102D",
        pink: "rgb(237, 218, 225)",
        blue: "#E9F4EC",
      },

      fontFamily: {
        Epilogue: ["Epilogue"],
      },
    },
  },
  plugins: [],
};

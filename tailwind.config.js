/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        elMessiri: ['"El Messiri"', "sans-serif"],
        reg: ['"Source Sans Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
});

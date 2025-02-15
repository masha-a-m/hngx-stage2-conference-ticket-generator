/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'], // Ensure all relevant files are included
  theme: {
    extend: {
      fontFamily: {
        jejumyeongjo: ["JejuMyeongjo", "serif"],
        roadrage: ["Road Rage", "serif"],
        roboto: ["Roboto", "serif"],
    },
  },
},
  plugins: [],
};
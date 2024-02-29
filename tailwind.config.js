/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ["poppins", "sans-serif"],
    },
    extend: {
      colors: {
        Primary: "#0873BB",
        Secondary: "#545454",
      },
    },
  },
  plugins: [],
};

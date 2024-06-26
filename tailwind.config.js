/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "0rem",
        s: "0.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        logo: ["Madimi One", "sans-serif"],
      },
      screens: {
        s: "320px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

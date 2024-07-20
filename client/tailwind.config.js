/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        jet: "#353535",
        seaLight: "#4a878b",
        sea: "#3c6e71",
        seaDark: "#28494b",
        platinum: "#d9d9d9",
        indigo: "#284b63",
      },
    },
  },
  plugins: [],
};

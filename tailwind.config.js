/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d3b66",
        secondary: "#faf0ca",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      DMSans: ["DMSans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "living-room": "url(/img/Livingroom.jpeg)",
      },
    },
  },
  plugins: [],
};

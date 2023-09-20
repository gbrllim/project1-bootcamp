/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: ["line-through"],
    },
  },
  plugins: [require("daisyui")],
};

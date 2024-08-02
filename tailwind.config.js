/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "cl-1": "#003135",
        "cl-2": "#024950",
        "cl-3": "#964374",
        "cl-4": "#0fa4af",
        "cl-5": "#afdde5",
        "cl-6": "#0b7780",
        "cl-7": "#3d7988",
        "cl-8": "#111827",
        "dark-red": "#2c3836", // A very dark red
        "red-custom": "#d32f2f", // A bright red
      },
    },
  },
  plugins: [],
};

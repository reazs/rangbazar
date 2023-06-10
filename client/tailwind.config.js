/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#27374D",
        "secondary-color": "#526d82",
      },
    },
  },
  plugins: [],
};

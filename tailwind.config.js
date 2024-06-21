/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#222222",
        medium: "#5b5b5b",
        light: "#F4F4F4",
      },
    },
    fontFamily: {
      display: ["Montserrat", "ui-sans-serif"],
    },
  },
  plugins: [],
};

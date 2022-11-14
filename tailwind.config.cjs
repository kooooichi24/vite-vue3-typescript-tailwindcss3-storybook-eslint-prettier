/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // brand colors
        brand: "#2B62A3",
        // custom colors
        primary: {
          light: "#328FE9",
          DEFAULT: "#0065C7",
          dark: "#00388B",
        },
        secondary: {
          light: "#9299AC",
          DEFAULT: "#4D566E",
          dark: "#262F4A",
        },
        attention: {
          light: "#E44C4C",
          DEFAULT: "#C50707",
          dark: "#9C0303",
        },
        text: {
          primary: "#141C33",
          secondary: "#4D566E",
          placeholder: "#9299AC",
          disabled: "#B5BACA",
          contrast: "#A6ACBE",
        },
      },
    },
  },
  plugins: [],
};

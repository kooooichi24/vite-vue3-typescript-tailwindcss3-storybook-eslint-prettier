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
          pale: "#D7E8FF",
          thin: "#EAFAFF",
        },
        secondary: {
          light: "#9299AC",
          DEFAULT: "#4D566E",
          dark: "#262F4A",
          pale: "#E5E9F1",
          thin: "#F0F3FA",
        },
        attention: {
          light: "#E44C4C",
          DEFAULT: "#C50707",
          dark: "#9C0303",
          pale: "#FFE2E2",
          thin: "#FFF5F5",
        },
        textColor: {
          primary: "#141C33",
          secondary: "#4D566E",
          placeholder: "#9299AC",
          disabled: "#B5BACA",
          contrast: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

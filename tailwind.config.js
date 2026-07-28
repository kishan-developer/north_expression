
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        linen: "#f2eae7",
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0beb2",
          400: "#d1a394",
          500: "#a36c5e", // Base brown
          600: "#895d52",
          700: "#724d44",
          800: "#5a3e36",
          900: "#4e3527", // Darkest brown
        },
        scandi: {
          base: "#F9F7F3",
          taupe: "#C7BDB3",
          stone: "#A6A6A6",
          charcoal: "#2C2C2C",
          blue: "#7A9E9F",
          brass: "#B4A077",
        },
        craft: {
          cream: "#f5f0e8",
          warmWhite: "#faf8f4",
          linen: "#ede6d9",
          sand: "#c9b99a",
          earth: "#4a3d2e",
          charcoal: "#1e1a14",
          accent: "#b07d4a",
          accentLight: "#d4a96a",
          stone: "#5a5045",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      }
    },
  },
  plugins: [],
};

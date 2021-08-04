module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: [
        "bg-red-500",
        "bg-yellow-500",
        "bg-green-500",
        "bg-red-300",
        "bg-yellow-300",
        "bg-green-300",
      ],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['"Merriweather"', "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

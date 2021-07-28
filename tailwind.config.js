module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["SF Pro Display", "sans-serif"],
    },
    fontSize: {
      sm: ["12px", "14px"],
      base: ["16px", "19px"],
      lg: ["20px", "28px"],
      xl: ["24px", "28px"],
      "2xl": ["34px", "40px"],
    },
    colors: {
      "darkest-gray": "#1F2933",
      "dark-gray": "#323F4B",
      "light-gray": "#DBE0E6",
      gray: "#9AA5B1",
      blue: "#1B3CEA",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

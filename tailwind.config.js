module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["SF Pro Display", "sans-serif"],
    }, fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["34px", "41px"],
    },
    extend: {
      colors: {
        "dark-gray": "#323F4B",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

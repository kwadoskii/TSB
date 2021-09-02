module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        "my-purple": {
          DEFAULT: "rgb(40, 3, 49)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

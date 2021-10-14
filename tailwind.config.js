module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            img: {
              borderRadius: "0.375rem",
              marginLeft: "auto",
              marginRight: "auto",
            },
          },
        },
      },
      colors: {
        "my-purple": {
          DEFAULT: "rgb(40, 3, 49)",
        },
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        post: "4em 1fr",
        small: "2.5em 1fr",
        tiny: "1em 1fr",
        write: "64px 7fr 3fr",
      },
      gridTemplateRows: {
        write: "min-content 1fr min-content",
      },
      height: {
        writeContent: "calc(100vh - 88px - 56px)",
      },

      boxShadow: {
        soft: "-2px -2px 4px 0px #c2c6c9;",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography")],
};

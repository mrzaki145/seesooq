/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "2xl": "1380px",
      },

      colors: {
        primary: {
          900: "#4C0497",
        },
        secondary: {
          900: "#F05A35",
        },
      },

      borderRadius: {
        "3xl": "20px",
        "4xl": "24px",
      },

      boxShadow: {
        card: "0px 0px 5.27px 0px rgba(0, 0, 0, 0.04), 0px 0px 37px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },

  variants: {
    space: ["responsive", "direction"],
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};

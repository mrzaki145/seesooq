/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#4C0497",
        },
        secondary: {
          900: "#F05A35",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};

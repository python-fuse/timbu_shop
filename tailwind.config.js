const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js",
  ],
  theme: {
    extend: {
      colors: {
        link: "#5a2c17",
        primary: "#3b3b3bc0",
        secondary: "#D9D9D9",
        footlink: "#00000099",
      },
    },
  },
  plugins: [nextui()],
};

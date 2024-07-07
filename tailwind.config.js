/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        link: "#5a2c17",
        primary: "#3b3b3bc0",
        secondary: "rgba(183, 184, 188, 1)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "#282c34",
        "main-active": "#1f2428",
      },
      borderColor: {
        main: "#282c34",
        "main-active": "#1f2428",
      },
    },
  },
  plugins: [],
};

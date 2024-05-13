/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#5D50C6",
        pink: "#F85E9F",
        dark: "#222831",
        gray: "rgba(25, 24, 37, 0.5)",
        orange: "#FF5722",
        yellow: "#FACD49"
      },
    },
  },
  plugins: [],
}


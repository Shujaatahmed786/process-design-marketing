/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen:{
        md:{max:"820px"}
      }
    },
  },
  plugins: [],
}


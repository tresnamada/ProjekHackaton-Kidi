/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        'primary': ['Ubuntu', 'sans-serif'],
        'ubuntu-condensed': ['Ubuntu Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ required for App Router
    "./components/**/*.{js,ts,jsx,tsx}", // ✅ for your custom components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

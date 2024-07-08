/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // Customize based on device sizes
      'laptop': '1024px',
      'tablet': '768px',
      'phone': '640px',
    },
    extend: {},
  },
  plugins: [],
}

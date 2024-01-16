/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {screens: { 'sm': { 'max': '640px' } }},
  },
  plugins: [],
}


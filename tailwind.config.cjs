/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        veryDarkGray: '#262B32',
        darkGray: '#3A3E42',
      },
      screens: {
        xs: '600px',
      },
    },
  },
  plugins: [],
};

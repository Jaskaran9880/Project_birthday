/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        pink: {
          light: '#fce7f3',
          DEFAULT: '#f9a8d4',
          deep: '#ec4899',
          rose: '#fb7185',
        },
        purple: { soft: '#c084fc' },
      },
    },
  },
  plugins: [],
}

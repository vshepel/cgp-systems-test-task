/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif'],
    },
    colors: {
      'dark': '#252A32',
      'white': '#FFFFFF',
      'gray-100': '#F5F5FC',
      'gray-300': '#E4E6F1',
      'blue': '#449CF4',
      'blue-100': '#F6F9FE',
      'blue-200': '#97AACD',
      'blue-300': '#2D7BC9',
      'blue-400': '#4368E0',
      'blue-500': '#D9E7FF',
      'cyan': '#68C2E9',
      'cyan-100': '#4B97B8',
    },
    extend: {},
  },
  plugins: [],
}

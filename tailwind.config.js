/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: { extend: {} },
  variants: {
    extend: {},
    fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }
  },
  plugins: []
};

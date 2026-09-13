/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: { extend: {} },
  variants: {
    extend: {},
    fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui'] }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins_light: ['poppins-light', 'sans-serif'],
        poppins_semibold: ['poppins-semibold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

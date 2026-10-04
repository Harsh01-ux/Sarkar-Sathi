/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          500: '#1a6fb5',
          600: '#1558a0',
          700: '#10437e',
        },
        gov: {
          orange: '#e8590c',
          green: '#1a7a4a',
        }
      }
    },
  },
  plugins: [],
}

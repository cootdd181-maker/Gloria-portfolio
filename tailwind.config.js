/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        amber: {
          500: '#f59e0b',
        },
        rose: {
          500: '#f43f5e',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0f172a',
        },
      },
    },
  },
  plugins: [],
}

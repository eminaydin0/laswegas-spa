/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        /* Konak-inspired ink (text / dark surfaces) */
        mist: {
          50: '#f7f7f9',
          100: '#eeeef2',
          200: '#d9d9e3',
          300: '#b8b9c9',
          400: '#8e90a8',
          500: '#6e708a',
          600: '#585978',
          700: '#46475f',
          800: '#323450',
          900: '#2a2b42',
          950: '#1a1b2e',
        },
        /* Konak gold #cd9b1d */
        soft: {
          50: '#fbf8ef',
          100: '#f5edd4',
          200: '#eadc9f',
          300: '#dec56a',
          400: '#d4b03a',
          500: '#cd9b1d',
          600: '#b38618',
          700: '#8f6a14',
          800: '#755612',
          900: '#604710',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Figtree"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px rgba(50, 52, 80, 0.06)',
        nav: '0 8px 28px rgba(50, 52, 80, 0.08)',
        card: '0 2px 8px rgba(50, 52, 80, 0.04), 0 12px 32px rgba(50, 52, 80, 0.05)',
        'card-hover': '0 8px 20px rgba(50, 52, 80, 0.06), 0 20px 40px rgba(50, 52, 80, 0.07)',
      },
    },
  },
  plugins: [],
};

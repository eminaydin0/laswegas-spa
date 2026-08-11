/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mist: {
          50: '#fcfcfb',
          100: '#f6f7f5',
          200: '#eceeea',
          300: '#d9ddd6',
          400: '#b0b8ae',
          500: '#879088',
          600: '#667069',
          700: '#4f5751',
          800: '#3a403c',
          900: '#2a2f2c',
          950: '#181b19',
        },
        soft: {
          50: '#f4f8f6',
          100: '#e3ede8',
          200: '#c6dbd0',
          300: '#9dc0b0',
          400: '#6fa08c',
          500: '#528472',
          600: '#3f695b',
          700: '#34544a',
          800: '#2c443d',
          900: '#263a34',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Figtree"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px rgba(42, 47, 44, 0.05)',
        nav: '0 8px 28px rgba(42, 47, 44, 0.06)',
        card: '0 2px 8px rgba(42, 47, 44, 0.03), 0 12px 32px rgba(42, 47, 44, 0.04)',
        'card-hover': '0 8px 20px rgba(42, 47, 44, 0.05), 0 20px 40px rgba(42, 47, 44, 0.06)',
      },
    },
  },
  plugins: [],
};

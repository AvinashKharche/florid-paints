/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f0ff',
          100: '#d1e1ff',
          200: '#a3c3ff',
          300: '#75a5ff',
          400: '#4787ff',
          500: '#1e3a8a',
          600: '#1a2f73',
          700: '#16245c',
          800: '#121945',
          900: '#0e0e2e',
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        accent: {
          yellow: '#FFC845',
          pink: '#F75C7A',
          blue: '#4FC3F7',
          purple: '#7B61FF',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
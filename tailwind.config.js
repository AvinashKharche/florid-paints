/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        dark: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#1a4d3a', // Main dark green like in image
          600: '#164e3f',
          700: '#134e4a',
          800: '#0f3d2f',
          900: '#0a2e23',
        },
        accent: {
          yellow: '#fbbf24',
          orange: '#f97316',
          pink: '#ec4899',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          red: '#ef4444',
          lime: '#84cc16',
        },
        vibrant: {
          green: '#00ff88',
          emerald: '#10b981',
          lime: '#84cc16',
          yellow: '#eab308',
          orange: '#f97316',
          red: '#ef4444',
          pink: '#ec4899',
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-slow': 'pulse 3s infinite',
        'gradient': 'gradient 6s ease infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'vibrant': '0 0 30px rgba(34, 197, 94, 0.3)',
        'glow': '0 0 20px rgba(34, 197, 94, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'rainbow-stripe': 'linear-gradient(90deg, #ef4444, #f97316, #eab308, #84cc16, #22c55e, #06b6d4, #3b82f6, #8b5cf6, #ec4899)',
        'vibrant-gradient': 'linear-gradient(135deg, #22c55e, #00ff88, #84cc16)',
        'dark-gradient': 'linear-gradient(135deg, #1a4d3a, #164e3f, #134e4a)',
      },
    },
  },
  plugins: [],
};
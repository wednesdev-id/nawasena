/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
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
          950: '#052e16',
        },
        forest: {
          950: '#04160c',
          900: '#072414',
          800: '#0d3820',
          700: '#134e2e',
          600: '#1a643c',
          500: '#247f4f',
          400: '#34a367',
          300: '#5dc289',
          200: '#a3e2bc',
          100: '#dcf2e3',
          50: '#f2faf5',
        },
        earth: {
          amber: '#d97706',
          sand: '#fcfbf7',
          muted: '#8c857b'
        }
      },
      backgroundImage: {
        'topo-pattern': "radial-gradient(#16a34a 0.75px, transparent 0.75px)",
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}

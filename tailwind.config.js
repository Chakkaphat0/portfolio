/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        matrix: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#00FF66',
          600: '#00E055',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          950: '#000000',
        },
        neonGreen: '#00FF66',
      },
      boxShadow: {
        'neon-green': '0 0 25px rgba(0, 255, 102, 0.3), 0 0 10px rgba(0, 255, 102, 0.2)',
        'matrix-card': '0 10px 40px -10px rgba(0, 255, 102, 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'matrix-glow': 'radial-gradient(circle at 50% 20%, rgba(0, 255, 102, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
        'matrix-grid': 'linear-gradient(to right, rgba(0, 255, 102, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 102, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}

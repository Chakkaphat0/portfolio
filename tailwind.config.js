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
      },
      colors: {
        skybrand: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          950: '#082F49',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(14, 165, 233, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(14, 165, 233, 0.15)',
        '3d-blue': '0 20px 50px rgba(3, 105, 161, 0.12), 0 10px 20px rgba(14, 165, 233, 0.1)',
        'card-stack': '0 -10px 40px rgba(8, 47, 73, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-glow': 'radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.12) 0%, rgba(255, 255, 255, 0) 70%)',
        'blue-gradient': 'linear-gradient(135deg, #0F172A 0%, #0369A1 40%, #0284C7 70%, #38BDF8 100%)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F33',
          'navy-dark': '#061522',
          'navy-deep': '#030B12',
          'navy-light': '#122D4A',
          'navy-card': '#0E243B',
          gold: '#D6A84F',
          'gold-light': '#E6C36A',
          'gold-dark': '#B58B35',
          'gold-glow': 'rgba(214, 168, 79, 0.15)',
          gray: '#667085',
          'gray-light': '#F2F4F7',
          'off-white': '#F7F8FA',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 10px rgba(214, 168, 79, 0.15)',
        'gold-md': '0 8px 30px rgba(214, 168, 79, 0.2)',
        'gold-lg': '0 15px 45px rgba(214, 168, 79, 0.25)',
        'navy-card': '0 10px 30px -5px rgba(6, 21, 34, 0.8)',
        'navy-elevated': '0 20px 40px -10px rgba(3, 11, 18, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

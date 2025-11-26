/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'matte-black': '#141414', /* Lightened for accessibility */
        'dark-gray': '#1f1f1f', /* Lightened for accessibility */
        'gold': '#D4AF37',
        'gold-dark': '#B8960F',
        'gold-bright': '#ffd466',
        'gold-amber': '#ffb84d',
        'construction-orange': '#FF6B35',
        'construction-orange-dark': '#E85A2A',
        'construction-orange-light': '#FF8C42',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      letterSpacing: {
        'extra-wide': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}


import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ground: '#0D0C0A',
        surface: '#17150F',
        ink: '#F3EEE3',
        muted: '#9C9686',
        line: '#2A2720',
        gold: '#C89B4A',
        sage: '#5F6B5A',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(-4%, 2%)' },
          '30%': { transform: 'translate(2%, -4%)' },
          '40%': { transform: 'translate(-2%, 5%)' },
          '50%': { transform: 'translate(-4%, 2%)' },
          '60%': { transform: 'translate(3%, 0)' },
          '70%': { transform: 'translate(0, 3%)' },
          '80%': { transform: 'translate(-3%, 0)' },
          '90%': { transform: 'translate(2%, 2%)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 32s linear infinite',
        'marquee-right': 'marquee-right 32s linear infinite',
        grain: 'grain 8s steps(10) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config

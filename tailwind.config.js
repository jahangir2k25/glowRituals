/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF6F1',
        blush: '#F7E4E1',
        rose: {
          DEFAULT: '#E88C93',
          dark: '#C96570',
          light: '#F3B8BD',
        },
        jade: {
          DEFAULT: '#6E8B6E',
          dark: '#4F6B4F',
          light: '#9DB89A',
        },
        gold: {
          DEFAULT: '#C79A3D',
          light: '#E4C687',
        },
        ink: '#2A2622',
        clay: '#8A7F76',
      },
      fontFamily: {
        display: ['"Tiro Bangla"', 'serif'],
        body: ['"Hind Siliguri"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        droplet: '2rem 2rem 2rem 0.25rem',
        'droplet-r': '2rem 2rem 0.25rem 2rem',
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(42, 38, 34, 0.25)',
        card: '0 10px 30px -12px rgba(42, 38, 34, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

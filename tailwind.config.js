/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#661255',
          dark:    '#4a0d3d',
          light:   '#8a1a72',
        },
        accent: {
          DEFAULT: '#c084fc',
          dark:    '#a855f7',
          glow:    '#e9d5ff',
        },
        surface: {
          DEFAULT: '#0f0a0e',
          card:    '#1a1018',
          muted:   '#2d1a28',
          border:  '#3d2438',
        },
        text: {
          DEFAULT: '#f5f0f7',
          muted:   '#b89ab2',
          faint:   '#7a5a74',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand':  'linear-gradient(135deg, #661255 0%, #4a0d3d 100%)',
        'gradient-card':   'linear-gradient(145deg, #1a1018 0%, #2d1a28 100%)',
        'x-pattern': `repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(102,18,85,0.04) 40px, rgba(102,18,85,0.04) 41px), repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(102,18,85,0.04) 40px, rgba(102,18,85,0.04) 41px)`,
      },
      boxShadow: {
        'brand':  '0 0 30px rgba(102,18,85,0.4)',
        'accent': '0 0 20px rgba(192,132,252,0.3)',
        'card':   '0 4px 24px rgba(0,0,0,0.4)',
        'glow':   '0 0 40px rgba(102,18,85,0.6)',
      },
      animation: {
        'fade-up':     'fadeUp 0.6s ease-out forwards',
        'pulse-glow':  'pulseGlow 4s ease-in-out infinite',
        'float':       'floatUp 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'translateX(-50%) scale(1)'    },
          '50%':      { opacity: '1',   transform: 'translateX(-50%) scale(1.05)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)',   opacity: '0.4'  },
          '50%':      { transform: 'translateY(-18px)', opacity: '0.75' },
        },
        heroFadeUp: {
          'from': { opacity: '0', transform: 'translateY(22px)' },
          'to':   { opacity: '1', transform: 'translateY(0)'    },
        },
      },
    },
  },
  plugins: [],
};
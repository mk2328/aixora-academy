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
        // AIXORA Brand Palette
        brand: {
          DEFAULT: '#5a2b4e',   // Primary plum
          dark:    '#521346',   // Darker plum
          light:   '#7a3d6e',   // Lighter plum
        },
        accent: {
          DEFAULT: '#c084fc',   // Soft lavender-purple
          dark:    '#a855f7',   // Deeper purple
          glow:    '#e9d5ff',   // Light glow
        },
        surface: {
          DEFAULT: '#0f0a0e',   // Near-black base
          card:    '#1a1018',   // Card background
          muted:   '#2d1a28',   // Muted dark plum
          border:  '#3d2438',   // Border color
        },
        text: {
          DEFAULT: '#f5f0f7',   // Off-white
          muted:   '#b89ab2',   // Muted text
          faint:   '#7a5a74',   // Very muted
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #5a2b4e 0%, #3d1a34 50%, #1a0d18 100%)',
        'gradient-accent': 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
        'gradient-card': 'linear-gradient(145deg, #1a1018 0%, #2d1a28 100%)',
        'hero-glow': 'radial-gradient(ellipse at 50% 0%, rgba(90,43,78,0.6) 0%, transparent 70%)',
      },
      boxShadow: {
        'brand': '0 0 30px rgba(90,43,78,0.4)',
        'accent': '0 0 20px rgba(192,132,252,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(192,132,252,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(192,132,252,0.5)' },
        },
      },
    },
  },
  plugins: [],
};

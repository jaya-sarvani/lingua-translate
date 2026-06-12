/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          light: '#6366F1',
          dark: '#3730A3',
        },
        secondary: {
          DEFAULT: '#06B6D4',
          light: '#22D3EE',
          dark: '#0891B2',
        },
        accent: {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#047857',
        },
        bgDark: '#0F172A',
        cardDark: '#1E293B',
        textDark: '#F8FAFC',
        textMuted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        glassLight: '0 8px 32px 0 rgba(148, 163, 184, 0.15)',
      }
    },
  },
  plugins: [],
}

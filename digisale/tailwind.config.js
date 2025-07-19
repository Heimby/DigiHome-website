/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DigiSale brand colors
        'digisale': {
          primary: '#C7FF8A',
          dark: '#7BB800',
          accent: '#A1D964',
        },
        // Tech-oriented color palette
        'tech': {
          black: '#0D0D0D',
          dark: '#1A1A1A', 
          gray: '#2A2A2A',
          light: '#F5F5F5',
          blue: '#00D2FF',
          purple: '#8B5BE8',
          green: '#00FF94',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 100%)',
        'gradient-digisale': 'linear-gradient(135deg, #C7FF8A 0%, #7BB800 100%)',
        'gradient-mesh': 'radial-gradient(circle at 25% 25%, #C7FF8A 0%, transparent 70%), radial-gradient(circle at 75% 75%, #00D2FF 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
}
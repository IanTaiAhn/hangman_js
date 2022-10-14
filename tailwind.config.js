/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes: {
        growDiv: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)'},          
        }
      },
      animation: {
        'divGrowRight': 'growDiv .4s linear'
      },
    },
  },
  plugins: [],
}

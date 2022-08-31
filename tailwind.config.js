module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      backgroundColor: {
        'black': '#000000',
        'black-hovered': '#333333',
        'light': '#eff3fe',
        'white-hovered': '#E2E2E2'
      }, 
      screens: {
        'mobile': '300px'
      }, 
      animation: {
        arrow: 'arrow 1s ease-in-out'
      },
      keyframes: {
        arrow: {
          '0%, 100%' : { transform: 'translateX(0)', opacity: '0'},
          '99%' : { transform: 'translateX(-100%)', opacity: '1'}
        }
      }
    },
  },
  plugins: [],
}
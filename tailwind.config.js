const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
      '100': '100vh ,100vw',
    },
    extend: {
      colors: {
        'blue-logo': '#37b0c9',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'bounce-destempo': 'bounceDestempo 1s infinite',
        'bounceTest': 'bounceTest 1s infinite'

      },
      keyframes: {
        bounceTest: {
          '0%,100%': {
            transform: 'translateY(-30%)',
            animationTimingFunction: 'cubic-bezier(0.1, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0.2, 0.2, 1) '
          }
        },
        bounceDestempo: {
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic - bezier(0, 0.2, 0.2, 1) '
          },
          '0%,100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic - bezier(0.8, 0, 1, 1)'
          }
        }
      },
      backgroundImage: theme => ({
        'portal': "url('./src/assets/images/rick-and-morty.png')"
      }),
    },
    visibility: ['hover', 'focus'],

  },
  variants: {
    extend: {
      scale: ['group-hover'],
      transform: ['group-hover'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}

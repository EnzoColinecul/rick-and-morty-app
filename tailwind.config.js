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
      backgroundImage: theme => ({
        'portal' : "url('/src/assets/images/rick-and-morty.png')"
      }),
    },
    visibility: ['hover', 'focus'],

  },
  variants: {
    extend: {},
  },
  plugins: [],
}

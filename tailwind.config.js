module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#f0f0cc',
      secondary: '#f79426'
    },
    backgroundColor: theme => ({
      'primary': '#fff'
    }),
    extend: {
      backgroundImage: theme => ({
        'backwoman': "url('/img/backwoman.svg')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      orange: colors.orange,
      gray: colors.gray,
      white: '#fff',
      blue: colors.lightBlue,
    },
  },
  variants: {},
  plugins: [],
}

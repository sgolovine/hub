const colors = require("tailwindcss/colors")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.js", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

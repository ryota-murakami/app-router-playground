module.exports = {
  arrowParens: 'always',
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require('prettier-plugin-tailwindcss')],

  semi: true,

  singleQuote: true,

  trailingComma: 'all',
}

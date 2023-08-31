/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: {},
  extends: ['ts-prefixer'],
  globals: {},
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
  },
  plugins: [],
  root: true,
  rules: {
    'no-console': 'off',
  },
  settings: {},
}

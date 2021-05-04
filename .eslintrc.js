module.exports = {
  env: {
    browser: true,
    es6: true,
    jasmine: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      arrowFunctions: true,
      impliedStrict: true,
    },
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
}

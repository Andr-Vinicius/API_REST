module.exports = {
  env: {
    browser: false,
    node: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};

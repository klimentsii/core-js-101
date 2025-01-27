module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    browser: true,
    mocha: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
  },
};

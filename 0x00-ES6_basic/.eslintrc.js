module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  plugins: [
    "jest"
  ],
  rules: {
    // Add your ESLint rules here
  }
};

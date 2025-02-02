module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    document: true,
    ENVIRONMENT_CONFIGURATION: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/no-cycle': 'off', // TODO: remove after clean localstorage
    'react/forbid-prop-types': 'off', // TODO: remove after moving to redux
    'react/jsx-props-no-spreading': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  }
};

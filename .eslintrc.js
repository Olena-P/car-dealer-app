module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off', // Next.js does not require React in scope
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: 'airbnb-typescript-prettier',
  settings: {
    'import/extensions': ['.js', '.ts'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
  ignorePatterns: ['dist'],
  rules: {
    'consistent-return': ['off'],
    'import/extensions': ['error', 'always', {
      ts: 'never',
      js: 'never',
    }],
    'import/no-named-as-default': ['off'],
    'import/no-named-as-default-member': ['off'],
    'import/prefer-default-export': ['off'],
    'no-console': ['off', { allow: ['warn', 'error', 'info'] }],
    'no-underscore-dangle': ['off'],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': ['error', {
      'newlines-between': 'always-and-inside-groups',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    }],
  },
};

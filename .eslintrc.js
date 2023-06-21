module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['node_modules', 'android', 'ios', 'coverage', '__tests__'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        'newline-before-return': 'warn',
        'no-cond-assign': ['error', 'always'],
        'no-console': 'warn',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-else-return': 'warn',
        'prefer-const': 'warn',
        'prefer-template': 'warn',
        'react/jsx-curly-brace-presence': [
          'off',
          { props: 'never', children: 'never' },
        ],
      },
    },
  ],
}

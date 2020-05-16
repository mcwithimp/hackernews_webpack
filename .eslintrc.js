module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier'],
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'no-console': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    // 'import/extensions': 'off',
    // '@typescript-eslint/camelcase': 'off',
    // '@typescript-eslint/explicit-function-return-type': 'warn',
    'prettier/prettier': 'error',
    // 'import/prefer-default-export': 'off',
    // 'react/jsx-uses-react': 'error',
    // 'react/jsx-uses-vars': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};

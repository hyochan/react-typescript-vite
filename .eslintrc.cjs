module.exports = {
  root: true,
  extends: ['@dooboo/eslint-config-react', 'prettier'],
  rules: {
    'jest/valid-expect-in-promise': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback',
      },
    ],
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],
  },
  plugins: ['react-refresh'],
};

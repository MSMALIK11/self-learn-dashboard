module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  plugins: ['react-refresh'],
    overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs,jsx,tsx}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  files: ["src/**/*.tsx"],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

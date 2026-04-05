import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-trailing-spaces': 'warn',
      'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],
      'no-regex-spaces': 'warn',
      'react/jsx-closing-bracket-location': ['warn', 'line-aligned'],
      'react/jsx-tag-spacing': [
        'warn',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'object-curly-spacing': ['warn', 'always'],
      'array-bracket-spacing': ['warn', 'never'],
      'no-multi-spaces': ['warn', { ignoreEOLComments: true }],
    },
  },
])

export default eslintConfig

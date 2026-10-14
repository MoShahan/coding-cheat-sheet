import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

/** Ban em/en dashes so copy stays on normal hyphens going forward. */
const noEmDashPlugin = {
  rules: {
    'no-em-dash': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow em dashes and en dashes; use a normal hyphen (-).',
        },
        schema: [],
      },
      create(context) {
        const sourceCode = context.sourceCode
        return {
          Program() {
            const text = sourceCode.getText()
            const pattern = /[—–]/g
            for (const match of text.matchAll(pattern)) {
              const index = match.index ?? 0
              context.report({
                loc: {
                  start: sourceCode.getLocFromIndex(index),
                  end: sourceCode.getLocFromIndex(index + match[0].length),
                },
                message:
                  'Use a normal hyphen (-) instead of an em dash or en dash.',
              })
            }
          },
        }
      },
    },
  },
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      local: noEmDashPlugin,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'local/no-em-dash': 'error',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Side-effect imports (polyfills, CSS reset, etc.)
            ['^\\u0000'],
            // Node builtins
            ['^node:'],
            // External packages
            ['^@?\\w'],
            // Internal absolute aliases (if added later)
            ['^@/'],
            // Parent imports
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            // Sibling / index imports
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            // Style modules last
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
])


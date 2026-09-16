const js = require('@eslint/js')
const globals = require('globals')
const react = require('eslint-plugin-react')
const reactHooks = require('eslint-plugin-react-hooks')
const prettier = require('eslint-config-prettier')

module.exports = [
  { ignores: ['.cache/', 'public/'] },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  reactHooks.configs.flat['recommended-latest'],
  prettier,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { ...globals.browser, ...globals.node },
    },
    settings: { react: { version: 'detect' } },
    rules: {
      // Gatsby passes page/template props straight from GraphQL; there is no
      // prop-types in the tree and React 19 ignores it anyway.
      'react/prop-types': 'off',
    },
  },
  {
    files: [
      'gatsby-node.js',
      'gatsby-config.js',
      'gatsby-ssr.js',
      'plugins/**',
    ],
    languageOptions: { sourceType: 'commonjs', globals: globals.node },
  },
]

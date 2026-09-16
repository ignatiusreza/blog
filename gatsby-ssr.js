/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require('react')

const DEFAULT_THEME = 'dark'

// Runs before the body paints, so the stored theme never flashes through as the
// default one. Keeping it out of React also keeps the markup hydration-safe: the
// server has no way to know the visitor's choice.
const applyStoredTheme = `
!function () {
  try {
    var theme = window.localStorage.getItem('theme')

    if (theme !== 'dark' && theme !== 'light') {
      theme = window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : '${DEFAULT_THEME}'
    }

    document.documentElement.dataset.theme = theme
  } catch (e) {}
}()
`

exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
  setHtmlAttributes({ lang: 'en', 'data-theme': DEFAULT_THEME })

  setPreBodyComponents([
    React.createElement('script', {
      key: 'apply-stored-theme',
      dangerouslySetInnerHTML: { __html: applyStoredTheme },
    }),
  ])
}

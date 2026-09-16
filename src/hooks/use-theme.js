import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'theme'

const listeners = new Set()

const subscribe = listener => {
  listeners.add(listener)

  return () => listeners.delete(listener)
}

const getSnapshot = () => document.documentElement.dataset.theme || null

// The server cannot know the visitor's choice, so anything rendered from the
// theme has to wait for the client — React swaps in the real snapshot right
// after hydration, which keeps the markup on both sides identical.
const getServerSnapshot = () => null

const setTheme = theme => {
  document.documentElement.dataset.theme = theme

  try {
    window.localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable (private mode, blocked cookies); the theme
    // still applies for this page view, it just won't be remembered.
  }

  listeners.forEach(listener => listener())
}

/**
 * Reads and writes the theme that gatsby-ssr.js applies to <html> before paint.
 */
const useTheme = () => [
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot),
  setTheme,
]

export default useTheme

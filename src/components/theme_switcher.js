import Switch from 'react-switch'

import useTheme from '../hooks/use-theme'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useTheme()

  if (!theme) return <div className="switch-placeholder" aria-hidden="true" />

  return (
    <Switch
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="switch"
      checked={theme === 'dark'}
      checkedIcon={<>🌙</>}
      uncheckedIcon={<>🌞</>}
      onColor="#718096"
      offColor="#000"
      aria-label="Toggle dark mode"
    />
  )
}

export default ThemeSwitcher

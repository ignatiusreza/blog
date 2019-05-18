import React, { useContext } from 'react'
import { Link } from 'gatsby'

import SiteContext from './context'
import ThemeSwitcher from './theme_switcher'

const Header = () => {
  const { title } = useContext(SiteContext)

  return (
    <header className="header">
      <h1>
        <Link to="/" className="no-underline">
          {title}
        </Link>
      </h1>

      <ThemeSwitcher />
    </header>
  )
}

export default Header

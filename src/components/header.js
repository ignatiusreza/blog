import { Link } from 'gatsby'

import useSiteMetadata from '../hooks/use-site-metadata'
import ThemeSwitcher from './theme_switcher'

const Header = () => {
  const { title } = useSiteMetadata()

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

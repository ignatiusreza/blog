import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'

import SiteContext from './context'
import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(Cookies.get('theme') || 'dark')
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <SiteContext.Provider value={{ ...site.siteMetadata, theme, setTheme }}>
      <div
        className={`container ${
          theme === 'dark' ? 'container-dark' : 'container-light'
        }`}
      >
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </SiteContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

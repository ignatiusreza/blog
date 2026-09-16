import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <div className="page">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout

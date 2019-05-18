import React from 'react'

const Footer = () => (
  <footer className="footer">
    <span>© {new Date().getFullYear()} Ignatius Reza</span>
    <a href="/articles.atom">RSS</a>
  </footer>
)

export default Footer

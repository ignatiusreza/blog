import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div>
      © {new Date().getFullYear()} Ignatius Reza
      <br />
      Learn something about everything and everything about something.
    </div>
    <a href="/articles.atom">RSS</a>
  </footer>
)

export default Footer

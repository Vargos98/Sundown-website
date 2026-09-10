import { useState } from 'react'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../data/content.js'

export default function Footer() {
  const [sent, setSent] = useState(false)

  return (
    <footer className="footer">
      <div className="footer-wave" />
      <div className="footer-top">
        <nav className="footer-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="footer-news">
          <p>Get industry insights and creative inspiration straight to your inbox.</p>
          {sent ? (
            <p>You’re on the list.</p>
          ) : (
            <form
              className="footer-form"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <input type="email" required placeholder="Email address" />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
      <h1 className="footer-word">Sundown</h1>
      <div className="footer-bottom">
        <p>Copyright © Sundown Studio</p>
        <p>Brooklyn, NY</p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LOGO_SRC, NAV_LINKS } from '../data/content.js'
import MobileMenu from './MobileMenu.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
          <img src={LOGO_SRC} alt="Sundown Studio" />
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className="pill">
              <span>{link.label}</span>
            </NavLink>
          ))}
        </div>
        <button
          className="nav-menu"
          type="button"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}

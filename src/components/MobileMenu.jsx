import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import { NAV_LINKS } from '../data/content.js'

export default function MobileMenu({ open, onClose }) {
  const lenis = useLenis()

  useEffect(() => {
    if (open) lenis?.stop()
    else lenis?.start()
  }, [open, lenis])

  return (
    <div
      className={`mobile-menu${open ? ' open' : ''}`}
      aria-hidden={!open}
      onClick={onClose}
    >
      <div className="mobile-menu-sheet" onClick={(e) => e.stopPropagation()}>
        {NAV_LINKS.map((link) => (
          <Link key={link.path} to={link.path} onClick={onClose}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

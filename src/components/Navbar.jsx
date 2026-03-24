import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../App'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScroll, setShowScroll] = useState(false)
  const { dark, toggle } = useTheme()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setShowScroll(window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    if (!isHome) return
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { label: 'About', action: () => scrollTo('about'), hash: true },
    { label: 'Experience', action: () => scrollTo('experience'), hash: true },
    { label: 'YouTube', action: () => scrollTo('youtube'), hash: true },
    { label: 'Blog', to: '/blog' },
    { label: 'Resume', to: '/resume' },
    { label: 'Contact', action: () => scrollTo('contact'), hash: true },
  ]

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            Reet<span>.</span>
          </Link>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {navItems.map(item => (
              <li key={item.label}>
                {item.to ? (
                  <Link
                    to={item.to}
                    className={location.pathname === item.to ? 'active' : ''}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={isHome ? `#${item.label.toLowerCase()}` : `/#${item.label.toLowerCase()}`}
                    onClick={(e) => {
                      if (isHome) { e.preventDefault(); item.action(); }
                      setMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <button className="theme-toggle" onClick={toggle} aria-label="Toggle dark mode">
              {dark ? '☀️' : '🌙'}
            </button>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>
      <button
        className={`scroll-top${showScroll ? ' show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  )
}

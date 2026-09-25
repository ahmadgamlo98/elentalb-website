import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'News', href: '/#news' },
  { label: 'Careers', href: '/#careers' },
  { label: 'Contact', href: '/#contact' },
]

type HeaderProps = {
  forceScrolled?: boolean
}

export default function Header({ forceScrolled = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const isScrolled = forceScrolled || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${menuOpen ? 'header--menu-open' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo__icon-wrap">
            <img src="/elenta-logo-icon.png" alt="" className="logo__icon" aria-hidden="true" />
          </span>
          <span className="logo__text">Elenta</span>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Main navigation">
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link to={link.href} onClick={closeMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/pharmacovigilance"
            className={`btn btn--primary nav__cta ${location.pathname === '/pharmacovigilance' ? 'nav__cta--active' : ''}`}
            onClick={closeMenu}
          >
            Pharmacovigilance
          </Link>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`nav-backdrop ${menuOpen ? 'nav-backdrop--visible' : ''}`}
        aria-hidden="true"
        onClick={closeMenu}
      />
    </header>
  )
}

import { useState, useEffect, useCallback } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import './Navigation.css'

const MOBILE_NAV_QUERY = '(max-width: 768px)'

function useMatchMedia(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  )
  useEffect(() => {
    const mq = window.matchMedia(query)
    const onChange = () => setMatches(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])
  return matches
}

function Navigation() {
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobileNav = useMatchMedia(MOBILE_NAV_QUERY)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled
      setIsScrolled(window.scrollY > 10)

      // Highlight active section
      const sections = ['features', 'testimonials', 'pricing', 'faq']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isMobileNav) {
      setMenuOpen(false)
    }
  }, [isMobileNav])

  useEffect(() => {
    if (isMobileNav && menuOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isMobileNav, menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const handleClick = (e, href) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 // Navigation height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    if (isMobileNav) {
      setMenuOpen(false)
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div
        className="nav-backdrop"
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">MySalesBot</div>
          <button
            type="button"
            className="nav-menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="nav-primary-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
          <ul
            id="nav-primary-menu"
            className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`}
            inert={isMobileNav && !menuOpen ? true : undefined}
          >
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

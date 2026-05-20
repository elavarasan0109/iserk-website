// src/components/Navbar.jsx
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Prebuild',         to: '/prebuild' },
  { label: 'Accessories',      to: '/accessories' },
  { label: 'About',            to: '/about' },
  { label: 'My Configurations',to: '/configurations' },
  { label: 'Gallery',          to: '/gallery' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (to) =>
    pathname === to || (to === '/accessories' && pathname === '/')

  return (
    <header className="sticky top-0 z-50 bg-brand-black shadow-md">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 select-none">
          {/* Flame icon SVG */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2C14 2 20 8 20 14C20 17.3 17.3 20 14 20C10.7 20 8 17.3 8 14C8 11 10 9 10 9C10 9 10 13 13 13C13 10 12 7 14 2Z" fill="#FF4500"/>
            <path d="M14 20C14 20 11 18 11 15C11 13.3 12.3 12 14 12C15.7 12 17 13.3 17 15C17 17 15.5 19 14 20Z" fill="#FFCC00"/>
          </svg>
          <span
  className="font-display font-800 text-white tracking-widest text-xl uppercase"
  style={{ letterSpacing: '0.18em' }}
>
  ISERK
</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${isActive(link.to) ? ' nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login */}
        <div className="hidden md:block">
          <Link to="/login" className="btn-primary">
            Login
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-dark border-t border-white/10 px-4 py-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`nav-link${isActive(link.to) ? ' nav-link-active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login" className="btn-primary mt-2 w-full justify-center" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </header>
  )
}

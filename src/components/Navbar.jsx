import React, { useState } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ page, onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleClick = (id) => {
    setOpen(false)
    onNavigate(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-panel/90 backdrop-blur-sm border-b border-white/5">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
        <button
          onClick={() => handleClick('home')}
          className="font-display text-lg tracking-wide text-white"
        >
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleClick(l.id)}
                className={`transition-colors hover:text-acid ${
                  page === l.id ? 'text-acid' : 'text-gray-300'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-2xl leading-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-5 text-sm font-medium uppercase tracking-wide">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => handleClick(l.id)}
                className={`block w-full text-left py-2 ${
                  page === l.id ? 'text-acid' : 'text-gray-300'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

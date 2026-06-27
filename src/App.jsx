import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

export default function App() {
  const [page, setPage] = useState('home')

  const handleNavigate = (id) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-ink">
      <Navbar page={page} onNavigate={handleNavigate} />

      {page === 'home' && <Home onNavigate={handleNavigate} />}
      {page === 'about' && <About />}
      {page === 'projects' && <Projects />}
      {page === 'gallery' && <Gallery />}
      {page === 'contact' && <Contact />}
    </div>
  )
}

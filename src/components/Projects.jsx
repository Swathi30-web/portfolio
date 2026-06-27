import React from 'react'
import Footer from './Footer'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <section className="pt-32 pb-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-panel2 rounded-sm px-6 py-4 mb-8">
            <h1 className="font-display text-2xl">Projects</h1>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <article
                key={p.title}
                className={`rounded-sm border ${p.border} bg-panel overflow-hidden flex flex-col`}
              >
                <div className="h-48 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
                  <span className="font-display text-lg text-white/80 text-center px-2">
                    {p.title}
                  </span>
                </div>
                <div className="flex gap-4">
          <img src="/src/assets/react.png" className="w-12 h-12" alt="React" />
          <img src="/src/assets/js.png" className="w-12 h-12" alt="JavaScript" />
          <img src="/src/assets/css.png" className="w-12 h-12" alt="CSS" />
          <img src="/src/assets/figma.png" className="w-12 h-12" alt="Figma" />
        </div>
           
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

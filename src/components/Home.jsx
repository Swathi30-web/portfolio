import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import { SiBehance } from 'react-icons/si'
import Footer from './Footer'
import { projects } from '../data/projects'

export default function Home({ onNavigate }) {
  const preview = projects.slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-5 overflow-hidden">
        {/* ghost background text */}
        <div className="pointer-events-none select-none absolute inset-0 flex flex-col items-center justify-center opacity-[0.05] font-display text-[18vw] leading-none whitespace-nowrap text-white">
          <span>DESIGNER UI</span>
          <span>DEVELOPER</span>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-acid text-xs md:text-sm mb-4">
            Hey there, I'm
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-acid leading-none mb-4">
            RAHUL
          </h1>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            Currently studying Computer Science &amp; Engineering — building
            interfaces and products on the web.
          </p>
          <div className="flex items-center justify-center gap-5 text-2xl text-white">
            <a href="#" aria-label="LinkedIn" className="hover:text-acid transition-colors">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-acid transition-colors">
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="px-5">
        <div className="max-w-5xl mx-auto bg-acid text-ink rounded-sm p-8 md:p-10">
          <h2 className="font-display text-2xl mb-4 text-center md:text-left">About</h2>
          <p className="text-sm md:text-base leading-relaxed max-w-3xl">
            Hi there! I'm Rahul, a Computer Science student with a passion for
            crafting user-centric experiences. I specialize in UI/UX design,
            front-end development, and graphic design, with hands-on experience
            across modern web tooling. I thrive in collaborative, agile
            environments — and beyond code, I enjoy photography, graphic
            design, and music. Let's connect and bring your digital visions to
            life.
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="mt-6 px-4 py-2 bg-ink text-acid text-sm font-semibold rounded-sm hover:bg-black transition-colors"
          >
            More...
          </button>
        </div>
      </section>

      {/* RECENT PROJECTS PREVIEW */}
      <section className="px-5 mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between bg-panel2 px-6 py-4 rounded-sm mb-6">
            <h2 className="font-display text-lg">Recent Projects</h2>
            <button
              onClick={() => onNavigate('projects')}
              className="text-sm text-acid hover:underline"
            >
              See all →
            </button>
          </div>

         <div className="grid md:grid-cols-3 gap-5">
  {preview.map((p) => (
    <article
      key={p.title}
      className={`rounded-sm border ${p.border} bg-panel overflow-hidden hover:shadow-lg transition-all duration-300`}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
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

      {/* CTA BANNER */}
      <section className="px-5 mt-16">
        <div className="max-w-5xl mx-auto bg-acid text-ink rounded-sm p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl mb-2">Get in Touch</h2>
            <p className="text-sm max-w-sm">
              If you are interested in my work or want to provide feedback
              about this website, I am open to exchanging ideas.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-3 text-lg">
              <FaInstagram />
              <FaYoutube />
              <SiBehance />
              <FaLinkedin />
              <FaGithub />
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2 bg-ink text-acid text-sm font-semibold rounded-sm hover:bg-black transition-colors"
            >
              Contact Me →
            </button>
          </div>
        </div>
      </section>

      <div className="mt-16">
        <Footer />
      </div>
    </>
  )
}

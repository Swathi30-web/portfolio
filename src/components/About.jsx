import React from 'react'
import proimg from "../assets/proimg.png";
import {
  SiHtml5,
  SiNodedotjs,
  SiCss,
  SiTailwindcss,
  SiCplusplus,
  SiGit,
  SiReact,
  SiFigma,
  SiMongodb,
  SiQt,
} from 'react-icons/si'
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiBehance } from 'react-icons/si'
import Footer from './Footer'

const skills = [
  { Icon: SiHtml5, color: '#e34f26' },
  { Icon: SiNodedotjs, color: '#3c873a' },
  { Icon: SiCss, color: '#2965f1' },
  { Icon: SiTailwindcss, color: '#38bdf8' },
  { Icon: SiCplusplus, color: '#00599c' },
  { Icon: SiGit, color: '#f05032' },
  { Icon: SiReact, color: '#61dafb' },
  { Icon: SiFigma, color: '#f24e1e' },
  { Icon: SiMongodb, color: '#47a248' },
  { Icon: SiQt, color: '#41cd52' },
]

export default function About() {
  return (
    <>
      <section className="pt-32 pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-panel2 rounded-sm px-6 py-4 mb-8">
            <h1 className="font-display text-2xl">About</h1>
          </div>

          <div className="bg-panel rounded-sm p-6 md:p-8 flex flex-col md:flex-row gap-8">
            {/* photo placeholder — swap src for your own photo in /public */}
            <div className="w-full md:w-56 aspect-[4/5] md:aspect-auto md:h-72 bg-panel2 rounded-sm flex items-center justify-center shrink-0 overflow-hidden">
              <span className="text-gray-600 text-xs text-center px-4">
            
                <br />
     <img src={proimg} alt="Project" />
              </span>
            </div>

            <div>
              <p className="text-sm md:text-base leading-relaxed text-gray-300">
                I'm a Computer Science student. My passion lies in building
                user-friendly solutions that enhance overall user experiences.
                I am currently focused on{' '}
                <span className="text-acid">React Native, Expo, Firebase, and React</span>,
                leveraging these technologies to create responsive and
                functional applications. In addition to app development, I've
                led the design and development of platforms for the
                community, organized and managed events such as hackathons
                and workshops, and mentored others in UI/UX and graphic
                design. I thrive in{' '}
                <span className="text-acid">Agile / Scrum environments</span>{' '}
                and believe collaboration and teamwork are essential to
                delivering successful projects. So, whether you're{' '}
                <span className="text-acid">
                  looking for a dedicated developer, a creative designer, or a
                  collaborative team member
                </span>
                , I'm here to help bring ideas to life. Let's connect and
                create innovative solutions together!
              </p>

              <button className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-acid text-acid text-sm rounded-sm hover:bg-acid hover:text-ink transition-colors">
                ⬇ Download Resume
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-5 mt-6">
            <div className="bg-panel rounded-sm p-6">
              <h3 className="text-sm text-gray-400 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-4 text-3xl">
                {skills.map(({ Icon, color }, i) => (
                  <Icon key={i} style={{ color }} />
                ))}
              </div>
            </div>

            <div className="bg-panel rounded-sm p-6 flex items-center gap-4 text-xl text-white">
              <FaInstagram className="hover:text-acid transition-colors cursor-pointer" />
              <FaYoutube className="hover:text-acid transition-colors cursor-pointer" />
              <SiBehance className="hover:text-acid transition-colors cursor-pointer" />
              <FaLinkedin className="hover:text-acid transition-colors cursor-pointer" />
              <FaGithub className="hover:text-acid transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

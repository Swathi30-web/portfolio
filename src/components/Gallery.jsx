import React from 'react'
import Footer from './Footer'
import dress from '../assets/dress.png'
import dool from '../assets/dool.png'
import games from '../assets/games.png'
import men from '../assets/men.png'
import draw from '../assets/draw.png'
import natural  from '../assets/natural .png'
import phone from '../assets/phone.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3  from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
const tiles = [
  {
    label: 'Brand Concept',
    h: 220,
    image: dress,
  },
  {
    label: 'Poster Study',
    h: 160,
    grad: 'from-purple-500 to-fuchsia-700',
    image:men,
  },
  {
    label: 'Mobile UI',
    h: 200,
    grad: 'from-sky-400 to-blue-700',
    image:phone,
  },
  {
    label: 'Type Exploration',
    h: 150,
    grad: 'from-zinc-500 to-zinc-800',
    image:img3,
  },
  {
    label: '3D Render',
    h: 240,
    grad: 'from-emerald-400 to-teal-700',
    image:dool,
  },
  {
    label: 'Dashboard UI',
    h: 180,
    grad: 'from-rose-400 to-red-700',
    image:draw,
  },
  {
    label: 'Icon Set',
    h: 140,
    grad: 'from-lime-400 to-lime-700',
    image:img1,
  },
  {
    label: 'Editorial Layout',
    h: 210,
    grad: 'from-indigo-400 to-indigo-800',
    image:img4,
  },
  {
    label: 'Logo Mark',
    h: 160,
    grad: 'from-cyan-400 to-cyan-700',
    image:games,
  },
  {
    label: 'App Onboarding',
    h: 230,
    grad: 'from-pink-400 to-pink-700',
    image:natural ,
  },
  {
    label: 'Web Hero',
    h: 170,
    grad: 'from-yellow-400 to-amber-700',
    image:img2,
  },
  {
    label: 'Card UI',
    h: 190,
    grad: 'from-violet-400 to-purple-800',
    image:img5,
  },
]

export default function Gallery() {
  return (
    <>
      <section className="pt-32 pb-16 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-panel2 rounded-sm px-6 py-4 mb-8">
            <h1 className="font-display text-2xl">Gallery</h1>
          </div>

          <div className="[column-count:1] sm:[column-count:2] md:[column-count:3] gap-4 [column-gap:1rem]">
            {tiles.map((t, i) => (
              <div
                key={i}
                style={{ height: t.h }}
                className="mb-4 rounded-sm overflow-hidden relative break-inside-avoid"
              >
                {t.image ? (
                  <img
                    src={t.image}
                    alt={t.label}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${t.grad}`}
                  ></div>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                  <span className="text-white font-display text-sm">
                    {t.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-6">
            Replace the placeholder tiles with your own project images.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
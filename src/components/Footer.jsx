import React from 'react'

function Mark() {
  return (
    <svg
      width="64"
      height="48"
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 2 L26 24 L2 46" stroke="white" strokeWidth="6" strokeLinecap="square" />
      <path d="M16 2 L40 24 L16 46" stroke="white" strokeWidth="6" strokeLinecap="square" />
      <path d="M30 2 L54 24 L30 46" stroke="white" strokeWidth="6" strokeLinecap="square" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-panel2 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
        <Mark />
        <div className="text-right">
          <p className="font-display text-xl md:text-2xl text-gray-400 leading-tight">
            Designing the <span className="text-acid">extraordinary</span>
            <br />
            one <span className="text-acid">pixel</span> at a time.
          </p>
          <p className="text-xs text-gray-500 mt-2">Portfolio v2.3 © 2024 Rahul</p>
        </div>
      </div>
    </footer>
  )
}

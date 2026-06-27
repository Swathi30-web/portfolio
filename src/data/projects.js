import portfolio from "../assets/portfolio.png";
import Weather from "../assets/Weather.png";
import credit from "../assets/credit.png";
import re from "../assets/re.png";
import tool from "../assets/tool.png";
import qr from "../assets/qr.png";
import play from "../assets/play.png";
export const projects = [
   {
    title: 'Portfolio',
    category: 'Frontend',
    description:
      'Personal portfolio site built to showcase skills in web development, designed and coded from scratch in Figma.',
    tags: ['React', 'JS', 'CSS', 'Figma'],
    accent: 'from-lime-500/30 to-transparent',
    border: 'border-acid/40',
    image: portfolio,
  },
  {
    title: 'Weather App',
    category: 'Full Stack',
    description:
      'Full-stack weather app with live forecasts, built on real-time data and an interactive, responsive frontend.',
    tags: ['React', 'JS', 'CSS', 'Figma'],
    accent: 'from-sky-500/30 to-transparent',
    border: 'border-sky-400/30',
    image:Weather,
  },
  {
    title: 'Cred Clone',
    category: 'Frontend',
    description:
      'A responsive rewards-style landing page built with React for modularity and styled to match a premium fintech look.',
    tags: ['React', 'JS', 'CSS', 'Figma'],
    accent: 'from-violet-500/30 to-transparent',
    border: 'border-violet-400/30',
    image:credit,
  },
  {
    title: 'User Authentication System',
    category: 'Full Stack',
    description:
      'A secure login and signup flow with form validation, built with React and a clean, modular component structure.',
    tags: ['React', 'JS', 'CSS', 'Figma'],
    accent: 'from-teal-500/30 to-transparent',
    border: 'border-teal-400/30',
   image:re,
    
  },
  {
    title: 'Todo List',
    category: 'Frontend',
    description:
      'A modular, interactive task manager styled with CSS, built with React for clarity and ease of use.',
    tags: ['React', 'JS', 'CSS', 'Figma'],
    accent: 'from-orange-500/30 to-transparent',
    border: 'border-orange-400/30',
    image:tool,
  },
  {
    title: 'QR Scanner',
    category: 'Frontend',
    description:
      'A frontend QR code scanner and generator built with React, focused on a simple, modular interactive layout.',
    tags: ['React', 'JS', 'CSS', 'Figma'],
    accent: 'from-blue-500/30 to-transparent',
    border: 'border-blue-400/30',
    image:qr,
  },
  {
    title: 'Playlist Generator',
    category: 'Frontend',
    description:
      'A modular, interactive playlist builder styled with CSS, built with React for a clean and engaging interface.',
    tags: ['React', 'JS', 'CSS', 'Figma'],
    accent: 'from-emerald-500/30 to-transparent',
    border: 'border-emerald-400/30',
    image:play,
  },
]

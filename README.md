<<<<<<< HEAD
# Rahul — Portfolio (React + Vite + Tailwind)

A React recreation of the portfolio design, ready to open in VS Code.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Navbar.jsx      nav bar shared on every page
    Footer.jsx       footer shared on every page
    Home.jsx          hero + about teaser + project preview + CTA
    About.jsx        full bio, skills, socials
    Projects.jsx     full project grid
    Gallery.jsx      work/gallery grid
    Contact.jsx       contact form
  data/
    projects.js      project content — edit titles/descriptions/tags here
  App.jsx            page switcher (Home/About/Projects/Gallery/Contact)
  main.jsx            React entry point
  index.css           Tailwind + global styles
```

## Things to personalize

- **Photo**: drop your photo at `public/profile.jpg` and update the
  placeholder block in `src/components/About.jsx` with an `<img>` tag.
- **Gallery images**: the gallery currently uses colored placeholder tiles
  (see `src/components/Gallery.jsx`). Drop your own images into
  `public/gallery/` and swap them in.
- **Resume**: add a PDF to `public/resume.pdf` and link the "Download
  Resume" button in `About.jsx` to it.
- **Social links**: update the `href="#"` placeholders on the social icons
  in `Home.jsx` and `About.jsx` with your real profile URLs.
- **Contact form**: the form currently logs to the console. Wire it up to
  a service like Formspree, EmailJS, or your own API endpoint inside the
  `handleSubmit` function in `src/components/Contact.jsx`.

## Stack

- React 18 + Vite
- Tailwind CSS
- react-icons (social + skill icons)
=======
# portfolio
>>>>>>> 725e0bc816f1c7be5a29c2891222bc31c7612ce0

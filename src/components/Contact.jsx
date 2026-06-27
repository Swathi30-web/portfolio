import React, { useState } from 'react'
import Footer from './Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire this up to an email service (e.g. Formspree, EmailJS, your own API)
    console.log('Contact form submitted:', form)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="pt-32 pb-16 px-5">
        <div className="max-w-4xl mx-auto">
          <div className="bg-panel2 rounded-sm px-6 py-4 mb-8">
            <h1 className="font-display text-2xl">Contact</h1>
          </div>

          <div className="bg-acid text-ink rounded-sm p-8 md:p-10 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-display text-3xl mb-3">Get in Touch</h2>
              <p className="text-sm max-w-xs">
                If you are interested in my work or want to provide feedback
                about this website, I am open to exchanging ideas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-sm font-medium">
                Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-sm px-3 py-2 bg-white text-ink outline-none focus:ring-2 focus:ring-ink"
                />
              </label>

              <label className="text-sm font-medium">
                Email
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-sm px-3 py-2 bg-white text-ink outline-none focus:ring-2 focus:ring-ink"
                />
              </label>

              <label className="text-sm font-medium">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-1 w-full rounded-sm px-3 py-2 bg-white text-ink outline-none focus:ring-2 focus:ring-ink resize-none"
                />
              </label>

              <button
                type="submit"
                className="bg-ink text-acid font-semibold rounded-sm py-2 hover:bg-black transition-colors"
              >
                Send
              </button>

              {sent && (
                <p className="text-sm text-ink/80">
                  Thanks — your message has been logged to the console for
                  now. Connect a form service to actually receive it.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

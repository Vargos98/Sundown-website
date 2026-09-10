import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Contact() {
  const root = useRef(null)
  const [sent, setSent] = useState(false)

  useGSAP(
    () => {
      gsap.from('.page-hero h1, .contact-copy, .contact-form', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
      })
    },
    { scope: root }
  )

  return (
    <main className="page" ref={root}>
      <header className="page-hero">
        <h1>Contact</h1>
        <p>Tell us about the space, story, or moment you want to build.</p>
      </header>
      <section className="contact-layout">
        <div className="contact-copy">
          <h2>Let’s make something people remember.</h2>
          <p>
            Brooklyn, NY
            <br />
            NY · CHI · LA
          </p>
          <p>
            <a href="mailto:hello@sundown-studio.com">hello@sundown-studio.com</a>
          </p>
        </div>
        {sent ? (
          <p className="form-success">Thanks — we’ll be in touch shortly.</p>
        ) : (
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <label>
              Name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" required autoComplete="email" />
            </label>
            <label>
              Company
              <input name="company" autoComplete="organization" />
            </label>
            <label>
              Message
              <textarea name="message" required />
            </label>
            <button className="pill" type="submit">
              <span>Send</span>
            </button>
          </form>
        )}
      </section>
    </main>
  )
}

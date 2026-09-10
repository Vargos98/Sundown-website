import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ABOUT_IMAGE, CAPABILITIES } from '../data/content.js'

export default function Studio() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.page-hero h1, .studio-copy, .studio-visual', {
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
        <h1>Studio</h1>
        <p>
          A Brooklyn-based studio making spaces that inspire — from first sketch
          to opening night.
        </p>
      </header>
      <section className="studio-layout">
        <div className="studio-copy">
          <h2>End-to-end experiences, built with care.</h2>
          <p>
            Sundown is a full-service creative studio focused on the design and
            production of environments for best-in-class brands. We bring ideas
            from concept to execution, specializing in retail spaces,
            experiences, and unique events.
          </p>
          <p>
            We love to create, we love to solve, and we love to collaborate. The
            details make all the difference — and the relationships we build
            along the way matter most.
          </p>
          <ul className="capability-list">
            {CAPABILITIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="studio-visual">
          <img src={ABOUT_IMAGE} alt="Sundown studio" />
        </div>
      </section>
    </main>
  )
}

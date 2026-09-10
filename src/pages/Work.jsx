import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { PROJECTS } from '../data/content.js'

export default function Work() {
  const root = useRef(null)

  useGSAP(
    () => {
      gsap.from('.page-hero h1, .page-hero p', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      })
      gsap.from('.work-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        delay: 0.2,
        ease: 'power3.out',
      })
    },
    { scope: root }
  )

  return (
    <main className="page" ref={root}>
      <header className="page-hero">
        <h1>Work</h1>
        <p>
          Environments, experiences, and content for brands that want to be felt
          in the real world.
        </p>
      </header>
      <section className="work-grid">
        {PROJECTS.map((project) => (
          <figure className="work-card" key={project.slug}>
            <img src={project.image} alt={project.title} />
            <figcaption>
              <h3>{project.title}</h3>
              <span>
                {project.client} · {project.year}
              </span>
            </figcaption>
          </figure>
        ))}
      </section>
    </main>
  )
}

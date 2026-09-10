import { ABOUT_IMAGE } from '../data/content.js'
import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section className="about" ref={ref}>
      <div className="gooey" aria-hidden="true" />
      <h2 data-reveal>
        We are a group of design-driven, goal-focused creators, producers, and
        designers who believe that the details make all the difference.
      </h2>
      <div className="about-aside" data-reveal>
        <img src={ABOUT_IMAGE} alt="Sundown studio work" />
        <p>
          We love to create, we love to solve, we love to collaborate, and we
          love to turn amazing ideas into reality. We’re here to partner with
          you through every step of the process and know that relationships are
          the most important things we build.
        </p>
      </div>
    </section>
  )
}

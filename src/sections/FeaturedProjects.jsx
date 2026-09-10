import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FEATURED_PROJECTS } from '../data/content.js'

export default function FeaturedProjects() {
  const root = useRef(null)
  const imageRef = useRef(null)
  const [active, setActive] = useState(FEATURED_PROJECTS[0])

  useGSAP(
    () => {
      const image = imageRef.current
      const list = root.current.querySelector('.project-list')
      const rows = root.current.querySelectorAll('.project-row')

      gsap.set(image, { autoAlpha: 0, x: 0, y: 0 })

      const xTo = gsap.quickTo(image, 'x', { duration: 0.55, ease: 'power3' })
      const yTo = gsap.quickTo(image, 'y', { duration: 0.55, ease: 'power3' })

      const move = (e) => {
        xTo(e.clientX - image.offsetWidth * 0.2)
        yTo(e.clientY - image.offsetHeight * 0.4)
      }

      const show = () => {
        gsap.to(image, { autoAlpha: 1, duration: 0.25, ease: 'power2.out' })
      }

      const hide = () => {
        gsap.to(image, { autoAlpha: 0, duration: 0.25, ease: 'power2.out' })
      }

      list.addEventListener('mousemove', move)
      list.addEventListener('mouseenter', show)
      list.addEventListener('mouseleave', hide)

      const enterHandlers = []
      const leaveHandlers = []

      rows.forEach((row) => {
        const overlay = row.querySelector('.project-overlay')
        gsap.set(overlay, { yPercent: -100 })
        const onEnter = () => gsap.to(overlay, { yPercent: 0, duration: 0.28, ease: 'power2.out' })
        const onLeave = () =>
          gsap.to(overlay, { yPercent: -100, duration: 0.28, ease: 'power2.inOut' })
        row.addEventListener('mouseenter', onEnter)
        row.addEventListener('mouseleave', onLeave)
        enterHandlers.push([row, onEnter])
        leaveHandlers.push([row, onLeave])
      })

      return () => {
        list.removeEventListener('mousemove', move)
        list.removeEventListener('mouseenter', show)
        list.removeEventListener('mouseleave', hide)
        enterHandlers.forEach(([row, fn]) => row.removeEventListener('mouseenter', fn))
        leaveHandlers.forEach(([row, fn]) => row.removeEventListener('mouseleave', fn))
      }
    },
    { scope: root }
  )

  return (
    <section className="projects" ref={root}>
      <div className="projects-head">
        <p className="eyebrow">Featured projects</p>
        <Link to="/work" className="pill">
          <span>All Projects</span>
        </Link>
      </div>
      <div className="fixed-image" ref={imageRef}>
        <img src={active.image} alt="" />
      </div>
      <div className="project-list">
        {FEATURED_PROJECTS.map((project) => (
          <article
            key={project.slug}
            className="project-row"
            onMouseEnter={() => setActive(project)}
          >
            <div className="project-overlay" />
            <h2>{project.title}</h2>
            <div className="project-meta">
              <div>{project.client}</div>
              <div>{project.category}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

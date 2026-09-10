import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SERVICES } from '../data/content.js'

export default function Services() {
  const root = useRef(null)
  const [active, setActive] = useState(0)

  useGSAP(
    () => {
      gsap.fromTo(
        '.services-media img, .service-copy',
        { opacity: 0.15 },
        { opacity: 1, duration: 0.45, ease: 'power2.out' }
      )
    },
    { dependencies: [active], scope: root }
  )

  const service = SERVICES[active]

  return (
    <section className="services" ref={root}>
      <div className="services-card">
        <div className="services-media">
          <img src={service.image} alt="" />
        </div>
        <div className="services-copy">
          <div className="service-tabs">
            {SERVICES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                className={`service-tab${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-dot" />
                {item.title}
              </button>
            ))}
          </div>
          <p className="service-copy">{service.copy}</p>
        </div>
      </div>
    </section>
  )
}

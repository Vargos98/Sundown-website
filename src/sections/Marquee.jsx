import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MARQUEE_WORDS } from '../data/content.js'

export default function Marquee() {
  const root = useRef(null)

  useGSAP(
    () => {
      const track = root.current.querySelector('.marquee-track')
      gsap.to(track, {
        xPercent: -50,
        duration: 18,
        ease: 'none',
        repeat: -1,
      })
    },
    { scope: root }
  )

  const items = [...MARQUEE_WORDS, ...MARQUEE_WORDS]

  return (
    <section className="marquee" ref={root}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-copy" key={copy}>
            {items.map((word, i) => (
              <div className="marquee-item" key={`${copy}-${word}-${i}`}>
                <h1>{word}</h1>
                <span className="gola" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

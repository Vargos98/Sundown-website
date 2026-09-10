import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { MARQUEE_WORDS } from '../data/content.js'

export default function Loader({ onComplete }) {
  const root = useRef(null)
  const done = useRef(false)

  useGSAP(
    () => {
      const words = root.current.querySelectorAll('h1')
      const tl = gsap.timeline({
        onComplete: () => {
          if (done.current) return
          done.current = true
          onComplete?.()
        },
      })

      words.forEach((word) => {
        tl.fromTo(
          word,
          { opacity: 0 },
          { opacity: 1, duration: 0.12, ease: 'none' }
        ).to(word, { opacity: 0, duration: 0.12, delay: 0.72, ease: 'none' })
      })

      tl.to(root.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power3.inOut',
      })
    },
    { scope: root }
  )

  return (
    <div className="loader" ref={root}>
      {MARQUEE_WORDS.map((word) => (
        <h1 key={word}>{word}</h1>
      ))}
    </div>
  )
}

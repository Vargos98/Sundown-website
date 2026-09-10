import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

export function useReveal() {
  const ref = useRef(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const targets = el.querySelectorAll('[data-reveal]')
      if (!targets.length) return

      gsap.from(targets, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.08,
        immediateRender: true,
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
          toggleActions: 'play none none none',
        },
      })
    },
    { scope: ref }
  )

  return ref
}

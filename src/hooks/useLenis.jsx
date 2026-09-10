import { useEffect, useMemo, useRef } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import { useLocation } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function LenisBridge() {
  const { pathname } = useLocation()
  const lenis = useLenis()
  const pathRef = useRef(pathname)

  useLenis(ScrollTrigger.update)

  useEffect(() => {
    if (pathRef.current !== pathname) {
      pathRef.current = pathname
      lenis?.scrollTo(0, { immediate: true })
    }

    const id = requestAnimationFrame(() => ScrollTrigger.refresh())
    return () => cancelAnimationFrame(id)
  }, [pathname, lenis])

  return null
}

const LENIS_OPTIONS = {
  autoRaf: true,
  lerp: 0.1,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
  overscroll: false,
  anchors: false,
  syncTouch: false,
  autoResize: true,
}

export function SmoothScroll({ children }) {
  const options = useMemo(() => LENIS_OPTIONS, [])

  return (
    <ReactLenis root autoRaf options={options}>
      <LenisBridge />
      {children}
    </ReactLenis>
  )
}

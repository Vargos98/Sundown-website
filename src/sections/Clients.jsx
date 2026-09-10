import { useRef } from 'react'
import { CLIENTS } from '../data/content.js'

export default function Clients() {
  const scroller = useRef(null)
  const drag = useRef({ active: false, startX: 0, scroll: 0 })

  const onPointerDown = (e) => {
    const el = scroller.current
    drag.current = {
      active: true,
      startX: e.pageX,
      scroll: el.scrollLeft,
    }
    el.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e) => {
    if (!drag.current.active) return
    const walk = e.pageX - drag.current.startX
    scroller.current.scrollLeft = drag.current.scroll - walk
  }

  const stop = () => {
    drag.current.active = false
  }

  return (
    <section className="clients">
      <div className="clients-head">
        <p className="eyebrow">Who we work with</p>
      </div>
      <div
        className="clients-scroller"
        ref={scroller}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stop}
        onPointerLeave={stop}
      >
        <div className="clients-track">
          {CLIENTS.map((client) => (
            <article className="client-card" key={client.name}>
              <img src={client.logo} alt={client.name} />
              <p>{client.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

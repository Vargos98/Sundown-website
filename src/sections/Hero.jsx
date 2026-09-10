import { useEffect, useRef, useState } from 'react'
import { HERO_VIDEO, HERO_VIDEO_FALLBACK } from '../data/content.js'

export default function Hero() {
  const videoRef = useRef(null)
  const [src, setSrc] = useState(HERO_VIDEO_FALLBACK)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const play = () => {
      video.muted = true
      video.playsInline = true
      const attempt = video.play()
      if (attempt?.catch) attempt.catch(() => {})
    }

    play()
    video.addEventListener('canplay', play)
    video.addEventListener('loadeddata', play)

    return () => {
      video.removeEventListener('canplay', play)
      video.removeEventListener('loadeddata', play)
    }
  }, [src])

  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-left">
          <h3>
            Sundown is a multi-disciplinary studio focused on creating unique,
            end-to-end experiences and environments.
          </h3>
        </div>
        <div className="hero-right">
          <h1>
            {['SPACES', 'THAT', 'INSPIRE'].map((word) => (
              <span className="hero-mask" key={word}>
                <span className="hero-line">{word}</span>
              </span>
            ))}
          </h1>
        </div>
      </div>
      <div className="hero-shape" aria-hidden="true">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={src}
          onError={() => {
            if (src !== HERO_VIDEO) setSrc(HERO_VIDEO)
          }}
        />
      </div>
    </section>
  )
}

import Hero from '../sections/Hero.jsx'
import Marquee from '../sections/Marquee.jsx'
import About from '../sections/About.jsx'
import FeaturedProjects from '../sections/FeaturedProjects.jsx'
import Services from '../sections/Services.jsx'
import Clients from '../sections/Clients.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <FeaturedProjects />
      <Services />
      <Clients />
    </main>
  )
}

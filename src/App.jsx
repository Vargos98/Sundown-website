import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SmoothScroll } from './hooks/useLenis.jsx'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Studio from './pages/Studio.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  const [booting, setBooting] = useState(true)

  return (
    <SmoothScroll>
      {booting && <Loader onComplete={() => setBooting(false)} />}
      <div className="page-wrap">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="footer-spacer" aria-hidden="true" />
      </div>
      <Footer />
    </SmoothScroll>
  )
}

import { Header } from './components/Header'
import { Carousel } from './components/Carousel'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Collections } from './components/Collections'
import { Reviews } from './components/Reviews'
import { Location } from './components/Location'
import { Footer } from './components/Footer'
import { CookieConsent } from './components/CookieConsent'
import { FloatingActions } from './components/FloatingActions'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <Carousel />
      <Hero />
      <About />
      <Collections />
      <Reviews />
      <Location />
      <Footer />
      <CookieConsent />
      <FloatingActions />
    </>
  )
}

export default App

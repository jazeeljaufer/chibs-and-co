import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Collection from './components/sections/Collection'
import Occasions from './components/sections/Occasions'
import HowItWorks from './components/sections/HowItWorks'
import Testimonials from './components/sections/Testimonials'
import Faq from './components/sections/Faq'
import InstagramCta from './components/sections/InstagramCta'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Collection />
        <Occasions />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <InstagramCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
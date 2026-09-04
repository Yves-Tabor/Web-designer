import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Hitline } from './components/Hitline'
import { Timeline } from './components/Timeline'
import { Studio } from './components/Studio'
import { WorkGrid } from './components/WorkGrid'
import { Footer } from './components/Footer'
import { Grain } from './components/Grain'

function App() {
  return (
    <div className="relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-ground"
      >
        Skip to content
      </a>

      <Grain />
      <Nav />

      <main id="main">
        <Hero />
        <Hitline />
        <Timeline />
        <Studio />
        <WorkGrid />
      </main>

      <Footer />
    </div>
  )
}

export default App

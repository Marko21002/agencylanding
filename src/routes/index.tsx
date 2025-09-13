import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Feature from '../components/Feature'
import Path from '../components/Path'
import Faq from '../components/Faq'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Feature />
      <Path />
      <Faq />
    </div>
  )
}

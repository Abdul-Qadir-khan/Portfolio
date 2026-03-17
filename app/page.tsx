import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"        
import FunStats from "./components/FunStats"        
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials" 
import Experience from "./components/Experience"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />       
      <FunStats />       
      <Projects />
      <Testimonials />   
      <Experience />
      <Contact />
    </main>
  )
}
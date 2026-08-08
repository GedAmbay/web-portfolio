import './index.css'
import Navbar     from './components/Navbar'
import SideNav    from './components/SideNav'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Portfolio  from './components/Portfolio'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <SideNav />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

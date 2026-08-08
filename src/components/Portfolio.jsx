import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const variants = {
    initial: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: (direction) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeIn' },
    }),
  }

  return (
    <section
      id="portfolio"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >


      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* ── Header ── */}
        <Reveal>
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills in web development, workflow automation, and problem-solving.
          </p>
          <div className="section-divider" />
        </Reveal>

        {/* ── Gallery ── */}
        <Reveal delay={0.1}>
          <div className="portfolio-gallery-container">
            <button
              className="portfolio-gallery-nav prev"
              onClick={prevProject}
              aria-label="Previous project"
            >
              <ChevronLeft size={24} />
            </button>

            <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1.25rem', padding: '10px', margin: '-10px' }}>
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{ width: '100%' }}
                >
                  <ProjectCard project={projects[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              className="portfolio-gallery-nav next"
              onClick={nextProject}
              aria-label="Next project"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* ── Indicators ── */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                style={{
                  width: idx === currentIndex ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '9999px',
                  background: idx === currentIndex ? 'var(--color-primary)' : 'rgba(37,99,235,0.2)',
                  transition: 'all 300ms ease',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}


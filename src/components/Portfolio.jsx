import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  return (
    <section
      id="portfolio"
      className="section bg-gradient-mesh"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="bg-blob" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 70%)', bottom: -100, left: -150 }} />

        <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Header ── */}
        <Reveal>
          <p className="section-label">My Work</p>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills in web development, workflow automation, and problem-solving.
          </p>
          <div className="section-divider" />
        </Reveal>

        {/* ── Grid ── */}
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

export default function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      <div className="bg-blob" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', top: -100, right: -150 }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* ── Header ── */}
        <Reveal>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Get to Know Me</h2>
          <div className="section-divider" />
        </Reveal>

        <div className="about-cols">
          {/* ── Bio ── */}
          <Reveal delay={0.05}>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'var(--color-text-body)', marginBottom: '2.5rem', maxWidth: '780px' }}>
              I'm a Computer Science graduate (Central Philippine University, 2022–2026) with a strong
              foundation in software development and problem-solving. My OJT experience as an AI Automation
              &amp; Workflow Intern gave me hands-on exposure to AI-powered automation, workflow optimization,
              and web analytics — skills I now bring to every project I build.
            </p>
          </Reveal>

          {/* ── Education ── */}
          <Reveal delay={0.1}>
            <div style={{ maxWidth: '520px', marginBottom: '2.5rem' }}>
              <div className="glass-card" style={{ padding: '1.375rem', background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.12)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/en/5/53/Central_Philippine_University_Seal.webp" alt="Central Philippine University Logo" style={{ width: '4rem', height: '4rem', marginBottom: '1rem', objectFit: 'contain' }} />
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-dark)', lineHeight: 1.3 }}>
                      BS Computer Science
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600, margin: '0.25rem 0' }}>
                      Central Philippine University
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>2022 – 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}

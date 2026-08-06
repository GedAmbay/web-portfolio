import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Download } from 'lucide-react'

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

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Header ── */}
        <Reveal>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Get to Know Me</h2>
          <div className="section-divider" />
        </Reveal>

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
          <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '1rem' }}>
            Education
          </h3>
          <div style={{ maxWidth: '520px', marginBottom: '2.5rem' }}>
            <div className="glass-card" style={{ padding: '1.375rem', background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.12)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: 'linear-gradient(135deg,#7C3AED,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <GraduationCap size={18} color="#fff" />
                </div>
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

        {/* ── Download CV ── */}
        <Reveal delay={0.15}>
          <a
            id="download-cv-btn"
            href="/Ged_Mico_Ambay_CV.pdf"
            download
            className="btn btn-primary"
            style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}
          >
            <Download size={16} />
            Download CV
          </a>
        </Reveal>

      </div>
    </section>
  )
}

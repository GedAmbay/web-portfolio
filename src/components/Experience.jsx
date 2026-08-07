import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, Trophy } from 'lucide-react'

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

const experiences = [
  {
    id: 'callbox',
    title: 'AI Automation & Workflow Intern',
    company: 'Callbox Inc.',
    period: 'Jan – Apr 2026',
    gradient: 'linear-gradient(135deg,#2563EB,#4F46E5)',
    bullets: [
      <>Designed and implemented automated workflows using <strong>n8n</strong></>,
      <>Integrated <strong>OpenAI</strong> and <strong>Gemini</strong> APIs to build intelligent AI agents</>,
      <>Monitored site performance with <strong>Google Analytics 4</strong> &amp; <strong>Google Search Console</strong></>,
      <>Conducted <strong>SEO</strong> analysis to improve visibility and organic traffic</>,
    ],
  },
  {
    id: 'miru',
    title: 'CCS Tech Support',
    company: 'MIRU Systems Co., Ltd',
    period: 'May 2025',
    gradient: 'linear-gradient(135deg,#059669,#0EA5E9)',
    bullets: [
      <>Supported the <strong>Consolidation and Canvassing System</strong> during the 2025 Philippine National and Local Elections</>,
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      <div className="bg-blob" style={{ width: 450, height: 450, background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', bottom: -80, left: -120 }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* ── Header ── */}
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Work History</h2>
          <div className="section-divider" />
        </Reveal>

        {/* ── Experience cards ── */}
        <Reveal delay={0.08}>
          <div className="experience-grid" style={{ marginBottom: '2rem' }}>
            {experiences.map(({ id, title, company, period, gradient, bullets }) => (
              <div key={id} className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: '2.75rem', height: '2.75rem', borderRadius: '0.75rem', background: gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Briefcase size={17} color="#fff" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-dark)', lineHeight: 1.3 }}>
                      {title}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-primary)', fontWeight: 600, margin: '0.25rem 0' }}>
                      {company}
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)', marginBottom: '0.875rem' }}>
                      {period}
                    </p>
                    <ul style={{ paddingLeft: '1.125rem', fontSize: '0.875rem', color: 'var(--color-text-body)', lineHeight: 1.75, listStyle: 'disc' }}>
                      {bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── Award ── */}
        <Reveal delay={0.15}>
          <div
            style={{
              display: 'flex',
              gap: '1.125rem',
              alignItems: 'flex-start',
              padding: '1.25rem 1.5rem',
              borderRadius: '1.125rem',
              background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.07))',
              border: '1px solid rgba(245,158,11,0.3)',
              maxWidth: '680px',
            }}
          >
            <Trophy size={26} color="#D97706" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
            <div>
              <p style={{ fontWeight: 700, fontSize: '1rem', color: '#92400E' }}>
                Best Food Systems Innovation
              </p>
              <p style={{ fontSize: '0.875rem', color: '#B45309', marginTop: '0.25rem' }}>
                Central Launch 2.0 — Western Visayas Startup Hackathon
              </p>
              <p style={{ fontSize: '0.8125rem', color: '#D97706', marginTop: '0.2rem' }}>
                November 2025 &middot; MapaKaon Project
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

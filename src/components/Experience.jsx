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
    id: 'remotasks',
    title: 'Data Annotator',
    company: 'Remotasks',
    period: 'June 2026',
    gradient: 'linear-gradient(135deg,#7C3AED,#EC4899)',
    bullets: [
      <>Annotated and segmented video/sensor datasets capturing robotic task execution to train and fine-tune robotics AI and computer vision models.</>,
    ],
  },
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
      style={{ position: 'relative', overflow: 'hidden' }}
    >


      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* ── Header ── */}
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Work History</h2>
          <div className="section-divider" />
        </Reveal>

        {/* ── Experience Timeline ── */}
        <Reveal delay={0.08}>
          <div className="experience-timeline" style={{ marginBottom: '2rem' }}>
            <div className="timeline-line"></div>
            {experiences.map(({ id, title, company, period, gradient, bullets }) => (
              <div key={id} className="timeline-item">
                <div className="timeline-node">
                  <div className="timeline-node-inner" style={{ background: gradient }}></div>
                </div>
                <div className="timeline-content" style={{ padding: '0 1.5rem', width: '100%' }}>
                  <p style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'var(--font-display)', color: 'var(--color-text-dark)', lineHeight: 1.2, marginBottom: '0.25rem' }}>
                    {title}
                  </p>
                  <p style={{ fontSize: '1.0625rem', color: 'var(--color-primary)', fontWeight: 600, margin: '0 0 0.25rem 0' }}>
                    {company}
                  </p>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                    {period}
                  </p>
                  <ul style={{ paddingLeft: '1.125rem', fontSize: '1.0625rem', color: 'var(--color-text-body)', lineHeight: 1.75, listStyle: 'disc' }}>
                    {bullets.map((b, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>



      </div>
    </section>
  )
}

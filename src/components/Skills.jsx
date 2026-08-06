import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Layers, Bot, BarChart2, Wrench } from 'lucide-react'

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

const skillGroups = [
  {
    label: 'Programming Languages',
    icon: Code2,
    skills: ['Dart', 'C#', 'JavaScript', 'Python'],
  },
  {
    label: 'Frameworks',
    icon: Layers,
    skills: ['Flutter', 'Next.js', 'React'],
  },
  {
    label: 'AI & Automation',
    icon: Bot,
    skills: ['Workflow Automation', 'AI Agents', 'n8n', 'Antigravity'],
  },
  {
    label: 'Analytics & SEO',
    icon: BarChart2,
    skills: ['Google Analytics 4', 'Google Search Console', 'SEO Optimization'],
  },
  {
    label: 'Tools & Other',
    icon: Wrench,
    skills: ['GitHub', 'Figma', 'Canva', 'Video Editing'],
  },
]

const softSkills = [
  'Open-minded',
  'Critical Thinking',
  'Active Listener',
  'Teamwork',
  'Willingness to Learn',
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-gradient-mesh"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="bg-blob" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)', top: -80, left: -150 }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Header ── */}
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">My Toolkit</h2>
          <p className="section-subtitle">
            Technologies and tools I use to build and automate things.
          </p>
          <div className="section-divider" />
        </Reveal>

        {/* ── Skills grid ── */}
        <Reveal delay={0.08}>
          <div className="skills-grid" style={{ marginBottom: '2.5rem' }}>
            {skillGroups.map(({ label, icon: Icon, skills }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="glass-card"
                style={{ padding: '1.25rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.875rem' }}>
                  <Icon size={14} color="var(--color-primary)" />
                  <span className="skill-category-label">{label}</span>
                </div>
                <div className="tech-badge-list">
                  {skills.map((s) => (
                    <span key={s} className="tech-badge">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        {/* ── Soft skills ── */}
        <Reveal delay={0.15}>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '1rem' }}>
            Soft Skills
          </h3>
          <div className="soft-skills-row">
            {softSkills.map((s) => (
              <span key={s} className="badge">{s}</span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  )
}

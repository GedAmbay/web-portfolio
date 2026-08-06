import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Briefcase, GraduationCap, Trophy, Download,
  Code2, Layers, Bot, BarChart2, Wrench,
} from 'lucide-react'

/* ── Scroll-triggered fade-up helper ── */
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

export default function About() {
  return (
    <section id="about" className="section" style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background decoration */}
      <div className="bg-blob" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)', top: -100, right: -150 }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section header ── */}
        <Reveal>
          <p className="section-label">About Me</p>
          <h2 className="section-title">Get to Know Me</h2>
          <div className="section-divider" />
        </Reveal>

        <div className="about-cols">

          {/* ── Left column: Bio + Experience ── */}
          <div>
            {/* Bio */}
            <Reveal delay={0.05}>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.85, color: 'var(--color-text-body)', marginBottom: '2rem' }}>
                I'm a Computer Science graduate (Central Philippine University, 2022–2026) with a strong
                foundation in software development and problem-solving. My OJT experience as an AI Automation
                &amp; Workflow Intern gave me hands-on exposure to AI-powered automation, workflow optimization,
                and web analytics — skills I now bring to every project I build.
              </p>
            </Reveal>

            {/* Experience cards */}
            <Reveal delay={0.1}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '1rem' }}>
                Experience
              </h3>
              <div className="experience-grid" style={{ marginBottom: '2rem' }}>

                {/* Callbox */}
                <div className="glass-card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem', background: 'linear-gradient(135deg,#2563EB,#4F46E5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Briefcase size={16} color="#fff" />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text-dark)', lineHeight: 1.3 }}>
                        AI Automation &amp; Workflow Intern
                      </p>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, margin: '0.2rem 0' }}>
                        Callbox Inc.
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Jan – Apr 2026</p>
                      <ul style={{ marginTop: '0.75rem', paddingLeft: '1rem', fontSize: '0.8125rem', color: 'var(--color-text-body)', lineHeight: 1.7, listStyle: 'disc' }}>
                        <li>Designed and implemented automated workflows using <strong>n8n</strong></li>
                        <li>Integrated <strong>OpenAI</strong> and <strong>Gemini</strong> APIs to build AI agents</li>
                        <li>Monitored performance with <strong>Google Analytics 4</strong> &amp; <strong>Search Console</strong></li>
                        <li>Conducted SEO analysis to improve visibility and traffic</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* MIRU Systems */}
                <div className="glass-card" style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem', background: 'linear-gradient(135deg,#059669,#0EA5E9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Briefcase size={16} color="#fff" />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text-dark)', lineHeight: 1.3 }}>
                        CCS Tech Support
                      </p>
                      <p style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, margin: '0.2rem 0' }}>
                        MIRU Systems Co., Ltd
                      </p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>May 2025</p>
                      <p style={{ marginTop: '0.75rem', fontSize: '0.8125rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
                        Supported the Consolidation and Canvassing System during the 2025 Philippine National and Local Elections.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>

            {/* Education */}
            <Reveal delay={0.15}>
              <div className="glass-card" style={{ padding: '1.25rem', marginBottom: '2rem', background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.12)' }}>
                <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem', background: 'linear-gradient(135deg,#7C3AED,#EC4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={16} color="#fff" />
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-text-dark)' }}>
                      BS Computer Science
                    </p>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--color-primary)', fontWeight: 600, margin: '0.2rem 0' }}>
                      Central Philippine University
                    </p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>2022 – 2026</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Award */}
            <Reveal delay={0.2}>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  padding: '1.125rem 1.25rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.08))',
                  border: '1px solid rgba(245,158,11,0.3)',
                  marginBottom: '2rem',
                }}
              >
                <Trophy size={24} color="#D97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: '#92400E' }}>
                    Best Food Systems Innovation
                  </p>
                  <p style={{ fontSize: '0.8125rem', color: '#B45309', marginTop: '0.2rem' }}>
                    Central Launch 2.0 — Western Visayas Startup Hackathon
                  </p>
                  <p style={{ fontSize: '0.75rem', color: '#D97706', marginTop: '0.2rem' }}>November 2025 · MapaKaon Project</p>
                </div>
              </div>
            </Reveal>

            {/* Download CV */}
            <Reveal delay={0.25}>
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

          {/* ── Right column: Skills ── */}
          <div>
            <Reveal delay={0.1}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '1.25rem' }}>
                Skills &amp; Tools
              </h3>
              <div className="skills-grid" style={{ marginBottom: '1.75rem' }}>
                {skillGroups.map(({ label, icon: Icon, skills }) => (
                  <div key={label} className="glass-card" style={{ padding: '1.125rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      <Icon size={14} color="var(--color-primary)" />
                      <span className="skill-category-label">{label}</span>
                    </div>
                    <div className="tech-badge-list">
                      {skills.map((s) => (
                        <span key={s} className="tech-badge">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Soft skills */}
            <Reveal delay={0.15}>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--color-text-dark)', marginBottom: '0.875rem' }}>
                Soft Skills
              </h3>
              <div className="soft-skills-row">
                {softSkills.map((s) => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}

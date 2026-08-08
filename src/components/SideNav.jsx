import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'portfolio', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'contact', label: 'CONTACT' },
]

export default function SideNav() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // We find all intersecting entries and pick the one with the largest intersection ratio
        // or just the first one that is intersecting
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { 
        // Trigger when the element crosses the middle of the screen
        rootMargin: '-40% 0px -40% 0px' 
      }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="side-nav">
      {sections.map(({ id, label }) => {
        const isActive = activeSection === id
        return (
          <a
            key={id}
            href={`#${id}`}
            className="side-nav-link"
          >
            <motion.div
              initial={false}
              animate={{
                width: isActive ? '3.5rem' : '1.5rem',
                backgroundColor: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)'
              }}
              style={{
                height: '2px',
                transition: 'background-color 0.3s ease',
              }}
            />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: isActive ? 'var(--color-primary)' : 'var(--color-text-muted)',
                transition: 'color 0.3s ease',
              }}
            >
              {label}
            </span>
          </a>
        )
      })}
    </nav>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import SocialLinks from './SocialLinks'

/* ── Animation variants ── */
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

const photoAnim = {
  hidden: { opacity: 0, x: 50, scale: 0.96 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section
      id="home"
      className="bg-gradient-mesh"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '5rem',
      }}
    >
      {/* ── Decorative blobs ── */}
      <div className="bg-blob" style={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, transparent 70%)', top: -150, left: -250 }} />
      <div className="bg-blob" style={{ width: 450, height: 450, background: 'radial-gradient(circle, rgba(79,70,229,0.09) 0%, transparent 70%)', bottom: -80, right: -120 }} />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '4rem 1.5rem 6rem',
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="hero-grid">

          {/* ── Left: text content ── */}
          <motion.div variants={container} initial="hidden" animate="visible">

            {/* Availability badge */}
            <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
              <span className="available-badge">
                <span className="available-dot" />
                Available for Work
              </span>
            </motion.div>

            {/* Greeting + Name */}
            <motion.p variants={fadeUp} className="hero-greeting">
              Hi, I'm
            </motion.p>
            <motion.h1 variants={fadeUp} className="hero-name">
              Ged Mico Ambay
            </motion.h1>

            {/* Title */}
            <motion.p variants={fadeUp} className="hero-title">
              <strong>Web Developer</strong> &amp; Workflow Automation Specialist
            </motion.p>

            {/* Bio */}
            <motion.p variants={fadeUp} className="hero-bio">
              Computer Science graduate from Central Philippine University with a passion for building
              beautiful web experiences and intelligent automation systems. I turn complex problems
              into clean, user-friendly solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUp}
              style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}
            >
              <a id="hero-hire-btn" href="#contact" className="btn btn-primary">
                Hire Me
              </a>
              <a id="hero-projects-btn" href="#portfolio" className="btn btn-outline">
                See Projects
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={fadeUp}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* ── Right: photo ── */}
          <motion.div
            variants={photoAnim}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {/* Floating wrapper */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
              style={{ position: 'relative', width: '100%', maxWidth: '400px' }}
            >
              {/* Photo frame */}
              <div
                style={{
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  background: 'linear-gradient(160deg, #DBEAFE 0%, #EFF6FF 55%, #E0E7FF 100%)',
                  boxShadow: '0 24px 64px rgba(37,99,235,0.18)',
                  aspectRatio: '3 / 4',
                  display: 'flex',
                  alignItems: 'stretch',
                  border: '1px solid rgba(255,255,255,0.65)',
                }}
              >
                {!imgError ? (
                  <img
                    src="/hero-photo.png"
                    alt="Ged Mico Ambay — Web Developer and Workflow Automation Specialist"
                    onError={() => setImgError(true)}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                  />
                ) : (
                  /* ── Graceful placeholder ── */
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem',
                      padding: '2rem',
                    }}
                  >
                    <div
                      style={{
                        width: '130px',
                        height: '130px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.25rem',
                        fontWeight: 900,
                        color: '#fff',
                        fontFamily: 'var(--font-display)',
                        boxShadow: '0 8px 32px rgba(37,99,235,0.35)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      GMA
                    </div>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', textAlign: 'center' }}>
                      Place <code>hero-photo.png</code><br />in the <code>public/</code> folder
                    </p>
                  </div>
                )}
              </div>

              {/* Floating badge — Projects built */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 1 }}
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '1.75rem',
                  left: '-1.25rem',
                  padding: '0.75rem 1.25rem',
                  minWidth: '110px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.625rem', fontWeight: 900, color: 'var(--color-primary)', lineHeight: 1 }}>
                  5+
                </div>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-text-muted)', fontWeight: 500, marginTop: '0.2rem' }}>
                  Projects Built
                </div>
              </motion.div>

              {/* Floating badge — Award */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 3.8, ease: 'easeInOut', delay: 0.5 }}
                className="glass-card"
                style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '-1rem',
                  padding: '0.75rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  maxWidth: '175px',
                }}
              >
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>🏆</span>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-dark)', lineHeight: 1.25 }}>Award Winner</div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--color-text-muted)', marginTop: '0.1rem' }}>Central Launch 2.0</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{
          width: '24px',
          height: '38px',
          borderRadius: '12px',
          border: '2px solid rgba(37,99,235,0.3)',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '5px',
        }}>
          <div style={{
            width: '4px',
            height: '8px',
            borderRadius: '9999px',
            background: 'var(--color-primary)',
            opacity: 0.7,
          }} />
        </div>
      </motion.div>
    </section>
  )
}

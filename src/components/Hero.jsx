import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X } from 'lucide-react'
import SocialLinks from './SocialLinks'

/* ── Animation variants ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const slideIn = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 } },
}

export default function Hero() {
  const [imgError, setImgError] = useState(false)
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false)

  return (
    <section id="home" className="hero-section">

      {/* ════════════════════════════════════
          DECORATIVE BLOBS (behind everything)
      ════════════════════════════════════ */}

      {/* Blob 1 — large, left edge, peeking behind text */}
      <motion.img
        src="/Blob 1.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="hero-blob hero-blob-left"
      />

      {/* Blob 2 — large, top-right, behind the photo */}
      <motion.img
        src="/Blob 2.png"
        alt=""
        aria-hidden="true"
        draggable={false}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
        className="hero-blob hero-blob-top-right"
      />

      {/* ════════════════════════════════════
          LEFT COLUMN — Text Content
      ════════════════════════════════════ */}
      <div className="hero-left">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="hero-left-inner"
        >
          {/* Greeting */}
          <motion.p variants={fadeUp} className="hero-new-greeting">
            Hi, I'm
          </motion.p>

          {/* Name — gradient */}
          <motion.h1 variants={fadeUp} className="hero-new-name">
            Ged Ambay
          </motion.h1>

          {/* Sub-headline */}
          <motion.p variants={fadeUp} className="hero-new-subtitle">
            WEB DEVELOPER | WORKFLOW AUTOMATION
          </motion.p>

          {/* Bio card */}
          <motion.div variants={fadeUp} className="hero-new-bio-card">
            <p className="hero-new-bio-text">
              Have passion for building beautiful web experiences and intelligent automation
              systems. I turn complex problems into clean, user-friendly solutions.
            </p>
            <p className="hero-new-bio-text" style={{ marginTop: '0.25rem' }}>
              <strong style={{ color: '#374151' }}>Let's build something amazing together!</strong>
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="hero-cta-row">
            <a id="hero-hire-btn" href="#contact" className="hero-new-btn hero-new-btn-primary">
              Hire Me
            </a>
            <a
              id="hero-resume-btn"
              href="/Ged_Mico_Ambay_CV.pdf"
              download
              className="hero-new-btn hero-new-btn-outline"
            >
              <Download size={15} />
              Download CV
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={fadeUp}>
            <SocialLinks variant="hero" />
          </motion.div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════
          RIGHT COLUMN — Portrait Photo
      ════════════════════════════════════ */}
      <motion.div
        variants={slideIn}
        initial="hidden"
        animate="visible"
        className="hero-right"
      >
        {!imgError ? (
          <img
            src="/hero-photo.png"
            alt="Ged Ambay — Web Developer and Workflow Automation Specialist"
            onError={() => setImgError(true)}
            className="hero-portrait"
          />
        ) : (
          <div className="hero-new-photo-placeholder">
            <div className="hero-new-initials">GA</div>
            <p style={{ color: '#9ca3af', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.75rem' }}>
              Place <code>hero-photo.png</code><br />in <code>public/</code>
            </p>
          </div>
        )}
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        aria-hidden="true"
        className="hero-scroll-indicator"
      >
        <div className="hero-scroll-wheel">
          <div className="hero-scroll-dot" />
        </div>
      </motion.div>

      {/* ── Award Modal ── */}
      <AnimatePresence>
        {isAwardModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAwardModalOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(15,15,40,0.45)', backdropFilter: 'blur(10px)',
              padding: '1.5rem',
            }}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.6)', borderRadius: '1.5rem',
                boxShadow: '0 32px 80px rgba(30,27,75,0.18)', padding: '2rem',
                maxWidth: '520px', width: '100%', position: 'relative',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
              }}
            >
              <button
                onClick={() => setIsAwardModalOpen(false)}
                style={{
                  position: 'absolute', top: '1rem', right: '1rem',
                  background: 'rgba(0,0,0,0.06)', border: 'none', borderRadius: '50%',
                  width: '2.5rem', height: '2.5rem', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#374151', transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.12)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.06)'}
              >
                <X size={20} />
              </button>
              <img
                src="/mapakaon-award.jpg"
                alt="Best Food Systems Innovation - MAPAKAON"
                style={{ width: '100%', height: 'auto', borderRadius: '1rem', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}
              />
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '0.5rem' }}>
                  Best Food Systems Innovation
                </h3>
                <p style={{ fontSize: '1rem', color: '#6366f1', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Central Launch 2.0 — Western Visayas Startup Hackathon
                </p>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  November 2025 &middot; MapaKaon Project
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Blob floating keyframes */}
      <style>{`
        @keyframes heroBlobFloat1 {
          0%, 100% { transform: translateY(-50%) rotate(0deg) scale(1); }
          33%       { transform: translateY(-53%) rotate(5deg) scale(1.04); }
          66%       { transform: translateY(-47%) rotate(-3deg) scale(0.97); }
        }
        @keyframes heroBlobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50%       { transform: translate(-12px, 16px) scale(1.06); }
        }
        @keyframes heroBlobFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          50%       { transform: translate(-8px, 10px) scale(1.04) rotate(8deg); }
        }
      `}</style>
    </section>
  )
}

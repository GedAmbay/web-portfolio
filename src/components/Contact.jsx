import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SocialLinks from './SocialLinks'

/* ── Validation schema ── */
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

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

export default function Contact() {
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (data) => {
    setStatus('sending')
    try {
      // Replace YOUR_FORM_ID with your Formspree form ID
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="section"
      style={{ background: '#fff', position: 'relative', overflow: 'hidden' }}
    >
      <div className="bg-blob" style={{ width: 450, height: 450, background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)', top: -80, right: -100 }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>

        {/* ── Header ── */}
        <Reveal>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
          <div className="section-divider" />
        </Reveal>

        <div className="contact-grid">

          {/* ── Left: Contact info ── */}
          <Reveal delay={0.1}>
            <div className="glass-card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-dark)', marginBottom: '0.5rem' }}>
                  Contact Info
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-body)', lineHeight: 1.7 }}>
                  Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {/* Email */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</p>
                    <a
                      href="mailto:ambaygedmico@gmail.com"
                      style={{ fontSize: '0.9rem', color: 'var(--color-text-dark)', fontWeight: 600, textDecoration: 'none', wordBreak: 'break-word' }}
                    >
                      ambaygedmico@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Location</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dark)', fontWeight: 600 }}>
                      Pandan, Antique, Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.875rem' }}>
                  Find me on
                </p>
                <SocialLinks />
              </div>
            </div>
          </Reveal>

          {/* ── Right: Form ── */}
          <Reveal delay={0.15}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-text-dark)', marginBottom: '1.5rem' }}>
                Send a Message
              </h3>

              {/* Success state */}
              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', borderRadius: '0.75rem', background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.3)', marginBottom: '1.5rem' }}>
                  <CheckCircle size={20} color="#059669" />
                  <p style={{ color: '#059669', fontWeight: 600, fontSize: '0.9375rem' }}>
                    Message sent! I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error state */}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', borderRadius: '0.75rem', background: 'rgba(220,38,38,0.07)', border: '1px solid rgba(220,38,38,0.25)', marginBottom: '1.5rem' }}>
                  <AlertCircle size={20} color="#DC2626" />
                  <div>
                    <p style={{ color: '#DC2626', fontWeight: 600, fontSize: '0.9375rem' }}>Something went wrong.</p>
                    <p style={{ color: '#B91C1C', fontSize: '0.8125rem', marginTop: '0.2rem' }}>
                      Try emailing directly: <a href="mailto:ambaygedmico@gmail.com" style={{ textDecoration: 'underline' }}>ambaygedmico@gmail.com</a>
                    </p>
                  </div>
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    {...register('name')}
                  />
                  {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    {...register('email')}
                  />
                  {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    className="form-input form-textarea"
                    placeholder="Tell me about your project or just say hi…"
                    {...register('message')}
                  />
                  {errors.message && <span className="form-error">{errors.message.message}</span>}
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem', padding: '0.875rem 2.25rem' }}
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

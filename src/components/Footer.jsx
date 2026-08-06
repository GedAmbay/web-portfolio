import SocialLinks from './SocialLinks'

const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Portfolio',  href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3.5rem 1.5rem 2rem',
        }}
      >
        {/* ── Top row ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2.5rem',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '0',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '300px' }}>
            <a href="#home" className="footer-logo" aria-label="Back to top">M.</a>
            <p style={{ marginTop: '0.875rem', fontSize: '0.9rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.5)' }}>
              Web Developer &amp; Workflow Automation Specialist based in the Philippines. Building clean,
              user-friendly digital experiences.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation" className="footer-nav" style={{ paddingTop: '0.5rem' }}>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="footer-nav-link">{l.label}</a>
            ))}
          </nav>

          {/* Social */}
          <div style={{ paddingTop: '0.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '0.875rem' }}>
              Connect
            </p>
            <SocialLinks variant="dark" />
          </div>
        </div>

        {/* ── Divider ── */}
        <hr className="footer-divider" />

        {/* ── Bottom row ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)' }}>
            &copy; {year} Ged Mico Ambay. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)' }}>
            Made with ❤️ in the Philippines
          </p>
        </div>
      </div>
    </footer>
  )
}

/* All social icons are inline SVGs — lucide-react doesn't include brand logos */

function LinkedinIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function GithubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function FacebookIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function MailIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

const links = [
  { id: 'social-linkedin', icon: LinkedinIcon, href: 'https://www.linkedin.com/in/ged-mico-ambay-aa8546414/', label: 'LinkedIn' },
  { id: 'social-github', icon: GithubIcon, href: 'https://github.com/GedAmbay', label: 'GitHub' },
  { id: 'social-facebook', icon: FacebookIcon, href: 'https://www.facebook.com/mboy.ambay.79', label: 'Facebook' },
  { id: 'social-instagram', icon: InstagramIcon, href: 'https://www.instagram.com/thelast.gedi/', label: 'Instagram' },
  { id: 'social-email', icon: MailIcon, href: 'mailto:ambaygedmico@gmail.com', label: 'Email' },
]

/**
 * @param {object} props
 * @param {'light' | 'dark'} [props.variant='light'] - 'dark' for footer
 * @param {string}  [props.className]
 */
export default function SocialLinks({ variant = 'light', className = '' }) {
  return (
    <div
      className={className}
      role="list"
      aria-label="Social media links"
      style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
    >
      {links.map(({ id, icon: Icon, href, label }) => (
        <a
          key={id}
          id={id}
          href={href}
          aria-label={label}
          role="listitem"
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className={variant === 'dark' ? 'footer-social-icon' : variant === 'hero' ? 'social-icon-hero' : 'social-icon'}
        >
          <Icon size={variant === 'hero' ? 28 : 18} />
        </a>
      ))}
    </div>
  )
}

import { ExternalLink, UserCheck, Trophy } from 'lucide-react'

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}


/**
 * @param {{ project: import('../data/projects').projects[number] }} props
 */
export default function ProjectCard({ project }) {
  const {
    title, type, description, techStack,
    liveUrl, repoUrl, role, award,
    gradient, emoji, featured,
  } = project

  return (
    <article className="glass-card project-card-horizontal">
      {/* ── Gradient thumbnail ── */}
      <div
        className="project-thumbnail"
        style={{ background: gradient }}
      >
        <span style={{ fontSize: '3rem', position: 'relative', zIndex: 1 }}>{emoji}</span>

        {/* Type tag */}
        <span className="project-type-tag">{type}</span>

        {/* Featured ribbon */}
        {featured && (
          <span
            style={{
              position: 'absolute',
              top: '0.875rem',
              right: '0.875rem',
              zIndex: 1,
              fontSize: '0.6875rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#fff',
              background: 'rgba(255,215,0,0.35)',
              border: '1px solid rgba(255,215,0,0.5)',
              backdropFilter: 'blur(6px)',
              borderRadius: '9999px',
              padding: '0.25rem 0.75rem',
            }}
          >
            ⭐ Featured
          </span>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="project-body" style={{ padding: '1.25rem 1.375rem 1.375rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.75rem' }}>

        {/* Title + role badge */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 800, color: 'var(--color-text-dark)', lineHeight: 1.2 }}>
            {title}
          </h3>
          {role && (
            <span className="project-role-tag">
              <UserCheck size={12} />
              {role}
            </span>
          )}
        </div>

        {/* Award */}
        {award && (
          <div className="project-award-tag">
            <Trophy size={13} style={{ flexShrink: 0, marginTop: '0.1rem', color: '#D97706' }} />
            <span>{award}</span>
          </div>
        )}

        {/* Description */}
        <p style={{ fontSize: '0.875rem', lineHeight: 1.75, color: 'var(--color-text-body)', flex: 1 }}>
          {description}
        </p>

        {/* Tech badges */}
        <div className="tech-badge-list">
          {techStack.map((t) => (
            <span key={t} className="tech-badge">{t}</span>
          ))}
        </div>

        {/* Links */}
        {(liveUrl || repoUrl) && (
          <div style={{ display: 'flex', gap: '0.625rem', marginTop: '0.25rem', flexWrap: 'wrap' }}>
            {liveUrl && (
              <a
                id={`project-${project.id}-live`}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}
              >
                <ExternalLink size={14} />
                Explore Now
              </a>
            )}
            {repoUrl && (
              <a
                id={`project-${project.id}-repo`}
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: '0.5rem 1.125rem', fontSize: '0.8125rem' }}
              >
                <GithubIcon size={14} />
                View Code
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

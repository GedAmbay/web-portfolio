import { ExternalLink } from 'lucide-react'

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

/**
 * @param {{ project: import('../data/projects').projects[number], index?: number }} props
 */
export default function ProjectCard({ project, index = 0 }) {
  const { title, description, techStack, liveUrl, repoUrl } = project
  const isEvenProject = index % 2 !== 0

  return (
    <article className={`project-card-new ${isEvenProject ? 'project-card-reverse' : ''}`}>
      {/* ── Left Side: Mockup Image ── */}
      <div className="project-card-left">
        <img
          src={`/${project.id}.png`}
          alt={`${title} Mockup`}
          className="project-mockup-img"
          onError={(e) => {
            // Hide if the user hasn't uploaded the image yet
            e.target.style.display = 'none'
          }}
        />
      </div>

      {/* ── Right Side: Content ── */}
      <div className="project-card-right">
        <h3 className="project-new-title">{title}</h3>
        
        <p className="project-new-desc">{description}</p>

        {/* Tech badges */}
        <div className="tech-badge-list" style={{ marginBottom: '2rem' }}>
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
                <ExternalLink size={14} />
                WordPress
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

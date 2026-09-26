import React, { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop active"
      id="project-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target.id === 'project-modal') onClose();
      }}
    >
      <div className="modal-dialog">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="modal-body">
          <div className="modal-header-meta">
            <div className="section-tag" style={{ marginBottom: '0.5rem' }}>
              {project.categoryLabel}
            </div>
            <h2 id="modal-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
              {project.title}
            </h2>
            {project.isLive && (
              <p style={{ color: '#34d399', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>
                <i className="fa-solid fa-circle-check"></i> Live Production URL:{' '}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-cyan)', textDecoration: 'underline' }}
                >
                  {project.liveUrl}
                </a>
              </p>
            )}
          </div>

          <p style={{ color: 'var(--text-sub)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            {project.fullDesc}
          </p>

          <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '0.75rem' }}>
            Key Architecture & Features:
          </h4>
          <ul className="modal-features-list">
            {project.features.map((feat, idx) => (
              <li key={idx}>{feat}</li>
            ))}
          </ul>

          <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Technologies Used:
          </h4>
          <div className="project-tags" style={{ marginBottom: '2rem' }}>
            {project.technologies.map((t, idx) => (
              <span key={idx} className="tech-tag" style={{ fontSize: '0.85rem', padding: '0.35rem 0.8rem' }}>
                {t}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.isLive && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <i className="fa-solid fa-globe"></i> Open Live Project
              </a>
            )}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

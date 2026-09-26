import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const filters = [
  { label: 'All Projects', value: 'all' },
  { label: 'MERN Stack', value: 'mern' },
  { label: 'Live in Production', value: 'live' },
  { label: 'PHP & MySQL', value: 'php' }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCounts = useMemo(() => {
    return {
      all: projectsData.length,
      mern: projectsData.filter((p) => p.category.includes('mern')).length,
      live: projectsData.filter((p) => p.category.includes('live')).length,
      php: projectsData.filter((p) => p.category.includes('php')).length
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((p) => p.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fa-solid fa-rocket"></i> Portfolio</span>
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">
            Real-world full-stack web applications, live platforms, and database systems I have engineered.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              className={`filter-btn ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label} ({filterCounts[f.value]})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid" id="projects-container">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/avatar.svg';
                  }}
                />
                {project.isLive && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-badge-live"
                  >
                    <span className="status-dot"></span> Live Demo
                  </a>
                )}
              </div>

              <div className="project-content">
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-cyan)', marginBottom: '0.4rem' }}>
                  {project.categoryLabel}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.shortDesc}</p>

                <div className="project-tags">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag">+{project.technologies.length - 4} more</span>
                  )}
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="btn btn-outline btn-sm"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details <i className="fa-solid fa-arrow-right"></i>
                  </button>

                  {project.isLive ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Visit Site <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      Learn More
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;

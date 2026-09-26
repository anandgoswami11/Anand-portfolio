import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useTilt } from '../hooks/useTilt';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tiltRef = useTilt(8, 1200);

  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[roleIndex];

    let timer;
    if (isDeleting) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setTypedText(currentRole.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, 85);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot"></span> Available for Full-Time & Freelance Roles
            </div>

            <h1 className="hero-title">
              Hi, I'm <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="hero-roles">
              <span>&gt;</span>
              <span id="typed-text">{typedText}</span>
              <span className="typed-cursor">|</span>
            </div>

            <p className="hero-desc">
              {personalInfo.bio.headline}
            </p>

            {/* Core Tech Stack Tags */}
            <div className="hero-tech-tags">
              <span className="tech-tag"><i className="fa-brands fa-react" style={{ color: '#00f2fe' }}></i> React.js</span>
              <span className="tech-tag"><i className="fa-brands fa-node-js" style={{ color: '#22c55e' }}></i> Node.js</span>
              <span className="tech-tag"><i className="fa-solid fa-database" style={{ color: '#10b981' }}></i> MongoDB</span>
              <span className="tech-tag"><i className="fa-brands fa-python" style={{ color: '#f59e0b' }}></i> Python</span>
              <span className="tech-tag"><i className="fa-brands fa-js" style={{ color: '#eab308' }}></i> JavaScript</span>
            </div>

            <div className="hero-cta">
              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(e) => handleSmoothScroll(e, '#projects')}
              >
                <i className="fa-solid fa-laptop-code"></i> View My Work
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                <i className="fa-regular fa-envelope"></i> Get In Touch
              </a>
              <a
                href="https://parthcarrental.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Project
              </a>
            </div>

            <div className="hero-socials">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="social-link"
                title="Send Email"
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a
                href={`tel:${personalInfo.rawPhone}`}
                className="social-link"
                title="Call Me"
                aria-label="Phone"
              >
                <i className="fa-solid fa-phone"></i>
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="GitHub"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>

          {/* Hero Right Column: Big Separate Profile Photo Stage with 3D Tilt */}
          <div className="hero-portrait-stage">
            <div className="portrait-glow-pulse" />

            <div className="portrait-interactive-frame" ref={tiltRef} id="avatar-container">
              {/* Cyber Tech HUD Corner Brackets */}
              <span className="cyber-bracket cyber-bracket-tl"></span>
              <span className="cyber-bracket cyber-bracket-tr"></span>
              <span className="cyber-bracket cyber-bracket-bl"></span>
              <span className="cyber-bracket cyber-bracket-br"></span>

              {/* Big Glowing Squircle Frame */}
              <div className="hero-big-avatar-frame">
                <div className="big-photo-inner">
                  <img
                    id="main-avatar-img"
                    src="/assets/images/profile-stylish.jpg"
                    alt={personalInfo.name}
                    className="big-photo-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/WhatsApp Image 2026-09-21 at 14.48.51.jpeg';
                    }}
                  />
                  <div className="face-photo-sheen"></div>
                </div>
              </div>

              {/* Floating Interactive Badges */}
              <div className="floating-badge badge-hero-top">
                <i className="fa-brands fa-react" style={{ color: '#00f2fe', fontSize: '1.3rem' }}></i>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Specialist
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    MERN Architect
                  </div>
                </div>
              </div>

              <div className="floating-badge badge-hero-bottom">
                <i className="fa-solid fa-code-branch" style={{ color: '#ff0080', fontSize: '1.2rem' }}></i>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Full-Stack
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-main)' }}>
                    5+ Production Apps
                  </div>
                </div>
              </div>

              <div className="floating-badge badge-hero-location">
                <span className="status-dot"></span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  📍 {personalInfo.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

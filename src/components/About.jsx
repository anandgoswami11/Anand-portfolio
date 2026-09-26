import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { useToast } from '../context/ToastContext';
import { useTilt } from '../hooks/useTilt';

const About = () => {
  const { showToast } = useToast();
  const tiltRef = useTilt(5, 1000);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`, 'fa-solid fa-circle-check');
    }).catch(() => {
      showToast(`Failed to copy ${label}`, 'fa-solid fa-triangle-exclamation');
    });
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fa-regular fa-user"></i> About Me</span>
          <h2 className="section-title">Driven by <span className="gradient-text">Code & Innovation</span></h2>
          <p className="section-subtitle">
            A brief look into my background, engineering foundation, and passion for technology.
          </p>
        </div>

        <div className="about-grid">
          {/* About Portrait Showcase Card */}
          <div className="glass-card about-portrait-card" ref={tiltRef}>
            <div className="about-portrait-img-wrap">
              <img
                src="/assets/images/profile-stylish.jpg"
                alt={personalInfo.name}
                className="about-portrait-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/WhatsApp Image 2026-09-21 at 14.48.51.jpeg';
                }}
              />
            </div>
            <div className="about-experience-badge">
              <span className="status-dot"></span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-main)' }}>
                  {personalInfo.educationBadge.degree}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  {personalInfo.educationBadge.college}
                </div>
              </div>
            </div>
          </div>

          {/* About Text & Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card about-card">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                Hello! I'm {personalInfo.name}
              </h3>
              <p className="about-highlight">
                {personalInfo.bio.aboutP1}
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {personalInfo.bio.aboutP2}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => handleCopy(personalInfo.email, 'Email Address')}
                >
                  <i className="fa-regular fa-copy"></i> Copy Email
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => handleCopy(personalInfo.phone, 'Phone Number')}
                >
                  <i className="fa-solid fa-phone"></i> Copy Phone
                </button>
              </div>
            </div>

            <div className="quick-stats-grid">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="glass-card stat-box">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

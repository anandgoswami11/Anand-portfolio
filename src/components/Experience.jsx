import React from 'react';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fa-solid fa-timeline"></i> Journey</span>
          <h2 className="section-title">Experience & <span className="gradient-text">Education</span></h2>
          <p className="section-subtitle">
            My academic trajectory and professional hands-on industry experience.
          </p>
        </div>

        <div className="timeline-wrapper">
          {experienceData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" />
              <div className="glass-card timeline-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{item.role}</h3>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <div className="timeline-company">
                  <i className={item.icon} style={{ color: item.accentColor }}></i>
                  {item.company}
                </div>
                <ul className="timeline-list">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

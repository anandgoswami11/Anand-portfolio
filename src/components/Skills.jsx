import React from 'react';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fa-solid fa-code"></i> Technical Stack</span>
          <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">
            Core programming languages, web frameworks, databases, and developer toolsets in my toolkit.
          </p>
        </div>

        <div className="skills-container">
          {skillsData.map((category, idx) => (
            <div key={idx} className="glass-card skill-category-card">
              <div className="skill-category-header">
                <i className={`${category.icon} category-icon`}></i>
                <div>
                  <h3 className="category-title">{category.category}</h3>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{category.subtext}</p>
                </div>
              </div>
              <div className="skills-pill-grid">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <i className={skill.icon} style={{ color: skill.color }}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

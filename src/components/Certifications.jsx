import React from 'react';
import { certificationsData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag"><i className="fa-solid fa-certificate"></i> Credentials</span>
          <h2 className="section-title">Professional <span className="gradient-text">Certifications</span></h2>
          <p className="section-subtitle">
            Verified programs and credentials validating my technical proficiencies.
          </p>
        </div>

        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="glass-card cert-card">
              <div className="cert-icon-wrapper">
                <i className={cert.icon}></i>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">
                <i className={cert.issuerIcon}></i> {cert.issuer}
              </div>
              <div className="cert-date">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

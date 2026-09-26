import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="logo">
          <span className="logo-tag">&lt;AG /&gt;</span> {personalInfo.name}
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Designed & Engineered with ❤️ using React 18, Vite & Modern MERN Architecture.
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          © {currentYear} {personalInfo.name}. All rights reserved. • {personalInfo.location}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

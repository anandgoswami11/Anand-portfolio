import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a 
          href="#hero" 
          className="logo" 
          onClick={(e) => handleNavClick(e, '#hero')}
          aria-label="Anand Goswami Portfolio Home"
        >
          <span className="logo-tag">&lt;AG /&gt;</span> Anand Goswami
        </a>

        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="#contact"
            className="btn btn-primary btn-sm"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <i className="fa-regular fa-paper-plane"></i> Hire Me
          </a>
          <button
            className="nav-toggle"
            id="nav-toggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

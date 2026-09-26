import React, { useEffect } from 'react';
import { ToastProvider } from './context/ToastContext';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Scroll reveal observer for elements with .reveal class or cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(
      '.glass-card, .section-header, .timeline-item, .hero-content, .hero-portrait-stage'
    );
    elements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ToastProvider>
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ToastProvider>
  );
}

export default App;

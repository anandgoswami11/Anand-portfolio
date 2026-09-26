import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`scroll-top-btn ${isVisible ? 'visible' : ''}`}
      id="scroll-top-btn"
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;

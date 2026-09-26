import { useRef, useEffect } from 'react';

export const useTilt = (maxTilt = 6, perspective = 1000) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const tiltX = (-y / (rect.height / 2)) * maxTilt;
      const tiltY = (x / (rect.width / 2)) * maxTilt;

      element.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;

      // Parallax effect on inner floating badges
      const badges = element.querySelectorAll('.floating-badge');
      badges.forEach((badge, idx) => {
        const factor = (idx + 1) * 3;
        badge.style.transform = `translate(${x / factor}px, ${y / factor}px)`;
      });
    };

    const handleMouseLeave = () => {
      element.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) translateY(0)`;
      const badges = element.querySelectorAll('.floating-badge');
      badges.forEach((badge) => {
        badge.style.transform = '';
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, perspective]);

  return ref;
};

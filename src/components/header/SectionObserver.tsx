import { useEffect, useRef } from 'react';
import { useDarkMode } from '../../hooks/DarkModeContext';

export const SectionObserver = ({ children, darkMode }: any) => {
  const { setIsDark } = useDarkMode();
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsDark(darkMode);
        }
      });
    }, { threshold: [0.9] });

    const section = observerRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [setIsDark, darkMode]);

  return (
    <div ref={ observerRef }>
      { children }
    </div>
  );
};
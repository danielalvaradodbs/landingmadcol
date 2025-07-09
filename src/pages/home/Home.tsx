
// import { Brandings } from './components/brandings/Brandings';
import { Brandings } from './components/brandy/Brandings';
import { Clients } from './components/clients/Clients';
import { Concept } from './components/concept/Concept';
import { Contact } from './components/contact/Contact';
import { Services } from './components/services/Services';
import './home.css';
import { BrandingsHorizontal } from './components/brandings/BrandingsHorizontal';
import { useEffect, useRef, useState } from 'react';
import { FloatingButton } from '../../components/floatingButton/FloatingButton';

export const Home = () => {

  const conceptRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0.9 }
    );

    if (conceptRef.current) {
      observer.observe(conceptRef.current);
    }

    return () => {
      if (conceptRef.current) {
        observer.unobserve(conceptRef.current);
      }
    };
  }, []);
  
  return (
    <>
      <Brandings />
      <div ref={conceptRef}>
        <Concept />
      </div>
      <Services />
      <section style={{ height: '100vh', overflow: 'hidden' }}>
        <BrandingsHorizontal />
      </section>
      <Clients />
      {/* <FullPage/> */}
      <Contact />

      <FloatingButton isVisible={showButton} />
    </>
  )
}


// import { Brandings } from './components/brandings/Brandings';
import { Clients } from './components/clients/Clients';
import { Contact } from './components/contact/Contact';
import { Services } from './components/services/Services';
import './home.css';
import { BrandingsHorizontal } from './components/brandings/BrandingsHorizontal';
import { useEffect, useRef, useState } from 'react';
import { FloatingButton } from '../../components/floatingButton/FloatingButton';
import { BreakSchemes } from './components/break-schemes/BreakSchemes';
import { YourBrand } from './components/your-brand/YourBrand';
import { HowDoIt } from './components/how-do-it/HowDoIt';
import { TrustUs } from './components/trust-us/TrustUs';
import { ClientsMethod } from './components/clientsMethod/ClientsMethod';

export const Home = () => {

  const conceptRef = useRef<HTMLDivElement>(null);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowButton(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0.5 }
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
      {/* <Brandings /> */}
      <BreakSchemes />
      <YourBrand />
      <HowDoIt />
      <div ref={conceptRef}>
        {/* <Concept /> */}
      </div>
      <Services />
      <section style={{ height: '100vh', overflow: 'hidden' }}>
        <BrandingsHorizontal />
      </section>
      <TrustUs />
      <ClientsMethod />
      {/* <Clients /> */}
      {/* <FullPage/> */}
      <Contact />

      <FloatingButton isVisible={showButton} />
    </>
  )
}

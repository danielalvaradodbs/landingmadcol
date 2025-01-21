import { useEffect, useRef, useState } from 'react';
import { logosMadcritter } from '../../../../shared';
import './footer.css';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const sectionRef = useRef(null);
  
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          showSections();
        } else {
          resetSections();
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // const showSections = () => {
  //   const sections = ['escribenos', 'talento', 'stalkeanos', 'siguenos'];
  //   sections.forEach((section, index) => {
  //     setTimeout(() => {
  //       setVisibleSections(prev => [...prev, section]);
  //     }, index * 500);
  //   });
  // };

  const showSections = () => {
    const sections = ['escribenos', 'talento', 'stalkeanos', 'siguenos'];
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections(prev => [...prev, section]);
        console.log(visibleSections);
        if (index === sections.length - 1) {
          setTimeout(() => {
            setIsFooterVisible(true);
          }, 500);
        }
      }, index * 300);
    });
  };

  const resetSections = () => {
    setVisibleSections([]);
    setIsFooterVisible(false);
  };

  return (
    <>
      <section className="pre-footer" ref={sectionRef}>
        
        <div className={`escribenos ${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}`}>
          <div className='container'>
            <div>
              <p className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } ><strong>ESCRÍBENOS</strong></p>
            </div>
            <div>
              <p className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } >Nuestro equipo comercial te ayudará</p>
            </div>
          </div>
          <div className='container'>
            <div>
              <a className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } >rafajordan@madcritter.com</a>
            </div>
            <div>
              <a className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } >+57 318 695 4120</a>
            </div>
          </div>
        </div>

        {/* Línea de escribenos */}
        <section className="line-section">
          <span className={`${visibleSections.includes('escribenos') ? 'line-loading' : 'hidden'}`}></span>
        </section>

        <div className={`talento ${visibleSections.includes('talento') ? 'reveal' : 'hidden'}`}>
          <div className="container">
            <div>
              <p className={ `${visibleSections.includes('talento') ? 'reveal' : 'hidden'}` } ><strong>TALENTO</strong></p>
            </div>
            <div>
              <p className={ `${visibleSections.includes('talento') ? 'reveal' : 'hidden'}` } >Envía tu CV y portafolio</p>
            </div>
          </div>
          <div className='container'>
            <a className={ `${visibleSections.includes('talento') ? 'reveal' : 'hidden'}` } >talento@madcritter.com</a>
          </div>
        </div>

        {/* Línea de talento */}
        <section className="line-section">
          <span className={`${visibleSections.includes('talento') ? 'line-loading' : 'hidden'}`}></span>
        </section>

        <div className={`stalkeanos ${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`}>
          <div className="container">
            <div>
              <p className={`${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`}><strong>STALKEANOS</strong></p>
            </div>
            <div>
              <p className={`${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`}>Portafolio</p>
            </div>
          </div>
          <div className='container stalk'>
            <a className={`${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`} href="">DRIBBBLE</a>
            <a className={` ${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`} href="">BEHANCE</a>
          </div>
        </div>

        {/* Línea de stalkeanos */}
        <section className="line-section">
          <span className={`${visibleSections.includes('stalkeanos') ? 'line-loading' : 'hidden'}`}></span>
        </section>
        <section className="footer">
          <img src={ logosMadcritter.logoBlue.logo } alt="" />
          <div className="texto-footer">
            <ul className="meeting-footer">
              <li>Mad Critter® 2025</li>
              <li><a href="">Meet the team!</a></li>
            </ul>

            <ul className="cities-footer">
              <li>Bogotá, Colombia</li>
              <li>Orlando, USA</li>
              <li>Quito, Ecuador</li>
            </ul>

            <ul className="terms-footer">
              <li><a href="">Términos y Condiciones</a></li>
            </ul>
          </div>
        </section>

        {/* Línea de síguenos */}
        <section className="line-section">
          <span className={`${visibleSections.includes('siguenos') ? 'line-loading' : 'hidden'}`}></span>
        </section>

      </section>

    {isFooterVisible && (

      <section className={`footer ${isFooterVisible ? 'visible' : ''}`}>
        <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          <img className={`${ isFooterVisible ? 'reveal' : '' }`} src={logosMadcritter.logoBlue.logo} alt="" />
        </div>
        <div className="texto-footer">
          <span className={`${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow' : '' }`}>Mad Critter ® 2025   |  <a href="">Meet the team!</a></span>
          <span className={`${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow' : '' }`}>Bogotá, Colombia   |   Orlando, USA   |   Quito, Ecuador</span>
          <div data-animation="to-top" style={{ position: 'relative' }}>
            <a className={`terms-condition ${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow' : '' }`} href="">
              <label>Términos y Condiciones</label>
              <label>Términos y Condiciones</label>
            </a>
          </div>
        </div>
      </section>
    )}

    </>
  );
}

import { useEffect, useRef, useState } from 'react';
import './footer.css';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { logosMadcritter } from '../../shared';
import { Link, useLocation } from 'react-router-dom';


gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {
  const currentPath = useLocation();
  
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

  const showSections = () => {
    const sections = ['escribenos', 'talento', 'stalkeanos', 'siguenos'];
    sections.forEach((section, index) => {
      setTimeout(() => {
        setVisibleSections(prev => [...prev, section]);
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

  const sendToLink = ( link: string ) => {

    console.log(window.location.pathname);
    if(window.location.pathname === '/') {
      window.scrollTo(0,0);
    }
    window.location.href = link;
    // window.location.reload();
  }
  
  return (
    <>
    { ( currentPath.pathname !== '/thanks-contact') && (
      <section className="pre-footer" ref={sectionRef}>
        
        <div className={`escribenos ${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}`}>
          <div className='container first-container'>
            <div>
              <p className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } ><strong>ESCRÍBENOS</strong></p>
            </div>
            <div>
              <p className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } >Nuestro equipo comercial te ayudará</p>
            </div>
          </div>
          <div className='container text' style={{ position: 'relative'}} data-animation="to-top">
            <div className='email'>
              <a href='mailto:rafajordan@madcritter.com' className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } >rafajordan@madcritter.com</a>
              <a href='mailto:rafajordan@madcritter.com' className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } >rafajordan@madcritter.com</a>
            </div>
            <div className='container text' data-animation="to-top">
              <div>
                <a href='https://api.whatsapp.com/send?phone=573186954120' className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } >+57 318 695 4120</a>
                <a href='https://api.whatsapp.com/send?phone=573186954120' className={ `${visibleSections.includes('escribenos') ? 'reveal' : 'hidden'}` } >+57 318 695 4120</a>

              </div>
            </div>
          </div>
        </div>

        {/* Línea de escribenos */}
        <section className="line-section">
          <span className={`${visibleSections.includes('escribenos') ? 'line-loading' : 'hidden'}`}></span>
        </section>

        <div className={`talento ${visibleSections.includes('talento') ? 'reveal' : 'hidden'}`}>
          <div className="container first-container">
            <div>
              <p className={ `${visibleSections.includes('talento') ? 'reveal' : 'hidden'}` } ><strong>TALENTO</strong></p>
            </div>
            <div>
              <p className={ `${visibleSections.includes('talento') ? 'reveal' : 'hidden'}` } >Envía tu CV y portafolio</p>
            </div>
          </div>
          <div className='container text' data-animation="to-top">
            <div>
              <a href='mailto:gestionhumana@madcritter.com' className={ `${visibleSections.includes('talento') ? 'reveal' : 'hidden'}` }>gestionhumana@madcritter.com</a>
              <a href='mailto:gestionhumana@madcritter.com' className={ `${visibleSections.includes('talento') ? 'reveal' : 'hidden'}` }>gestionhumana@madcritter.com</a>
            </div>
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
          <div className='container stalk' data-animation="to-top">
            <div>
              <a 
                className={`${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`}
                href="https://dribbble.com/madcritter1122"target='_blank'>DRIBBBLE</a>
              <a 
                className={`${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`}
                href="https://dribbble.com/madcritter1122"target='_blank'>DRIBBBLE</a>
            </div>
            <div>
              <a 
                className={` ${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`} 
                href="https://www.behance.net/madcritter" 
                target='_blank'>BEHANCE</a>
              <a 
                className={` ${visibleSections.includes('stalkeanos') ? 'reveal' : 'hidden'}`} 
                href="https://www.behance.net/madcritter" 
                target='_blank'>BEHANCE</a>
            </div>
          </div>
        </div>

        {/* Línea de stalkeanos */}
        <section className="line-section">
          <span className={`${visibleSections.includes('stalkeanos') ? 'line-loading' : 'hidden'}`}></span>
        </section>

        <div className={`siguenos ${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`}>
          <div className="container">
            <div>
              <p className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`}><strong>SÍGUENOS</strong></p>
            </div>
            <div>
              <p className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`}>Social Media</p>
            </div>
          </div>
          <div className='container stalk' data-animation="to-top">
            <div>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://www.linkedin.com/company/mad-critter" target='_blank'>LINKEDIN</a>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://www.linkedin.com/company/mad-critter" target='_blank'>LINKEDIN</a>
            </div>
            <div>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://instagram.com/madcritterco" target='_blank'>INSTAGRAM</a>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://instagram.com/madcritterco" target='_blank'>INSTAGRAM</a>
            </div>
            <div>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://facebook.com/Madcritter" target='_blank'>FACEBOOK</a>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://facebook.com/Madcritter" target='_blank'>FACEBOOK</a>
            </div>
            <div>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://www.tiktok.com/@madcritterco" target='_blank'>TIKTOK</a>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://www.tiktok.com/@madcritterco" target='_blank'>TIKTOK</a>
            </div>
            <div>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://www.strava.com/clubs/madcritter" target='_blank'>STRAVA</a>
              <a 
                className={`${visibleSections.includes('siguenos') ? 'reveal' : 'hidden'}`} 
                href="https://www.strava.com/clubs/madcritter" target='_blank'>STRAVA</a>

            </div>
          </div>
        </div>

        <section className="line-section">
          <span className={`${visibleSections.includes('siguenos') ? 'line-loading' : 'hidden'}`}></span>
        </section>

      </section>

    )}
    {isFooterVisible && currentPath.pathname !== '/thanks-contact' && currentPath.pathname !== '/meet-the-team' && (

      <section className={`footer ${isFooterVisible ? 'visible' : ''}`}>
        <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
          <img className={`${ isFooterVisible ? 'reveal' : '' }`} src={logosMadcritter.logoBlue.logo} alt="" />
        </div>
        <div className="texto-footer">
          {/* <span className={`${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow' : '' }`}>Mad Critter ® 2025   |  <a href="/#/meet-the-team">Meet the team!</a></span>
          <span className={`${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow' : '' }`}>Bogotá, Colombia   |   Orlando, USA   |   Quito, Ecuador</span>
          <div data-animation="to-top" style={{ position: 'relative' }}>
            <a className={`terms-condition ${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow' : '' }`} href="/#/terms-conditions">
              <label>Términos y Condiciones</label>
              <label>Términos y Condiciones</label>
            </a>
          </div> */}

          <ul className={`${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow meeting-footer' : '' }`}>
            <li>Mad Critter® 2025</li>
            <li><a onClick={() => sendToLink('#/meet-the-team')}>Meet the team!</a></li>
          </ul>

          <ul className={`${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow cities-footer' : '' }`}>
            <li>Bogotá, Colombia</li>
            <li>Orlando, USA</li>
            <li>Quito, Ecuador</li>
          </ul>

          <ul className="terms-footer">
            <li>
              <div data-animation="to-top">
                <Link className={`terms-condition ${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow' : '' }`} to='https://madcritter.com/BIC/BIC.pdf' target='_blank' >
                  <label>Reporte BIC</label>
                </Link>
                <span className='tablet'>|</span>
                <Link className={`terms-condition ${ isFooterVisible ? 'animate__animated animate__fadeIn animate__slow' : '' }`} to='/terms-conditions' target='_blank' >
                  <label>Términos y Condiciones</label>
                </Link>
              </div>
            </li>
          </ul>

        </div>
      </section>
    )}

    </>
  );
}

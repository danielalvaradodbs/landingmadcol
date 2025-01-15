import { useEffect, useRef, useState } from 'react';
import { logosMadcritter } from '../../../../shared';
import './footer.css';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Footer = () => {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
            console.log('visible');
        },
        {
            root: null,
            threshold: 0.1
        },

    );
    
    setIsVisible(!isVisible);
    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }


    return () => {
        if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        }
    };
  }, []);

  return (
    <>
        <section className="pre-footer" ref={ sectionRef }>

            <div className="escribenos">
              <div className='container'>
                <div>
                  <p className={`${ isVisible ? 'reveal' : ''} `}><strong>ESCRÍBENOS</strong> </p>
                </div>
                <div>
                  <p className={`${ isVisible ? 'reveal' : ''} `}>Nuestro equipo comercial te ayudará</p>
                </div>

              </div>
              <div className='container'>
                <div>
                  <a className={`${ isVisible ? 'reveal' : ''} `}>rafajordan@madcritter.com</a>
                </div>
                <div>
                  <a className={`${ isVisible ? 'reveal' : ''} `}>+57 318 695 4120</a>
                </div>
              </div>
            </div>
            <div className="talento">
              <div className="container">
                <div>
                  <p className={` ${ isVisible ? 'reveal' : ''} `}><strong>TALENTO</strong></p>
                </div>
                <div>
                  <p className={` ${ isVisible ? 'reveal' : ''} `}>Envía tu CV y portafolio</p>

                </div>

              </div>
              <div className='container'>
                <a className={`${ isVisible ? 'reveal' : ''} `}>talento@madcritter.com</a>
              </div>
            </div>
            <div className="stalkeanos">
              <div className="container">
                <div>
                  <p className={`${ isVisible ? 'reveal' : ''} `}><strong>STALKEANOS</strong></p>
                </div>
                <div>
                  <p className={`${ isVisible ? 'reveal' : ''} `}>Portafolio</p>
                </div>
              </div>
              <div className='container stalk'>
                <a className={`${ isVisible ? 'reveal' : ''} `} href="">DRIBBBLE</a>
                <a className={`${ isVisible ? 'reveal' : ''} `} href="">BEHANCE</a>
              </div>
            </div>
            <div className="siguenos">
              <div className="container">
                <div>
                  <p className={`${ isVisible ? 'reveal' : ''} `}><strong>SÍGUENOS</strong></p>
                </div>
                <div>
                  <p className={`${ isVisible ? 'reveal' : ''} `}>Social Media</p>
                </div>
              </div>
              <div className='container stalk'>
                <a className={`${ isVisible ? 'reveal' : ''} `} href="">LINKEDIN</a>
                <a className={`${ isVisible ? 'reveal' : ''} `} href="">INSTAGRAM</a>
                <a className={`${ isVisible ? 'reveal' : ''} `} href="">FACEBOOK</a>
                <a className={`${ isVisible ? 'reveal' : ''} `} href="">TIKTOK</a>
                <a className={`${ isVisible ? 'reveal' : ''} `} href="">STRAVA</a>
              </div>
            </div>
        </section>

           {/* Sección para animar la línea */}
          <section className="line-section">
            <span className="line"></span>
          </section>

        <section className="footer">
          <img src={ logosMadcritter.logoBlue.logo } alt="" />
          <div className="texto-footer">
            <span>Mad Critter ® 2025   |  <a href="">Meet the team!</a></span>
            <span>Bogotá, Colombia   |   Orlando, USA   |   Quito, Ecuador</span>
            <a href="">Términos y Condiciones</a>
          </div>
        </section>
    </>
  )
}

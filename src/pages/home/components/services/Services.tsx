import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './services.css';
import { FiguraAsteriscoR, FlechaUp, R } from '../../../../shared';

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray('.service-section');

    sections.forEach((section: any, index) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=15%',
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="services">
      <section className="service-section first-section">
        <div className="header-sections">
          <div className="marca">
            <h6>01_</h6>
            <h2>Construcción de marca</h2>
          </div>
          <div className="items">
            <ul>
              <li>Auditoría de marca</li>
              <li>Arquitectura de marca</li>
              <li>Naming</li>
              <li>Imagen de marca</li>
              <li>Propósito y personalidad de marca</li>
              <li>Manifesto de marca</li>
              <li>Diseño de personajes</li>
              <li>Cultura de marca</li>
              <li>Orientación en registro de marca</li>
            </ul>
            <img className='animate__animated animate__backInRight' src={ R } alt="" style={{ paddingLeft: '30px' }} />
          </div>
        </div>
        <div className="footer-section">
          <p className='animation-text'>
            Desarrollamos tu marca con autenticidad y enfoque en el usuario.
          </p>

        </div>
      </section>

      <section className="service-section second-section">
        <div className="header-sections">
          <div className="identidad">
            <h6>02_</h6>
            <h2>Identidad de <br /> marca</h2>
          </div>
          <div className="items">
            <ul>
              <li>Manual de identidad visual</li>
              <li>Sistema de diseño</li>
              <li>Empaques</li>
              <li>Key Visual</li>
              <li>Identidad Social</li>
              <li>Guía de comunicaciones</li>
            </ul>
            <img className='animate__animated animate__backInRight' src={ FiguraAsteriscoR } alt="" style={{ paddingLeft: '30px' }} />
          </div>
        </div>
        <div className="footer-section">
          <p className='animation-text' style={{ marginTop: '40px' }}>
            Destaca frente a la competencia con una identidad sólida.
          </p>
          
        </div>
      </section>

      <section className="service-section third-section">
        <div className="header-sections">
          <div className="posicionamiento">
            <h6>03_</h6>
            <h2>Posicionamiento de marca</h2>
          </div>
          <div className="items">
            <ul>
              <li>Estrategia de marca</li>
              <li>Social Storytelling</li>
              <li>Campañas digitales</li>
              <li>Contenido audiovisual</li>
              <li>Social listening</li>
              <li>Web</li>
              <li>Comunicaciones corporativas</li>
              <li>Endomarketing</li>
              <li>Acciones estratégicas</li>
            </ul>
            <img className='animate__animated animate__backInRight' src={ FlechaUp } alt="" style={{ paddingLeft: '30px' }} />

          </div>
        </div>
        <div className="footer-section">
          <p className='animation-text'>
            Implementamos estrategias de posicionamiento interno y externo.
          </p>


        </div>
      </section>

    </div>
  );
};
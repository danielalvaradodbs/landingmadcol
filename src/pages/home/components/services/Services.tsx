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
      const items = section.querySelector('.items');
      const textFooter = section.querySelector('.footer-section');
      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=15%',
          pin: true,
          pinSpacing: false,
          scrub: true,
          onEnter: () => {
            gsap.to(items, { opacity: 0, duration: 0.5 });
            gsap.to(textFooter, { opacity: 0, duration: 0.5 });
          },
          onLeaveBack: () => {
            gsap.to(items, { opacity: 1, duration: 0.5 });
            gsap.to(textFooter, { opacity: 1, duration: 0.5 });
          },
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray('.service-section');

    sections.forEach((section: any) => {
      const items = section.querySelectorAll('.items ul li');
      const textFooter = section.querySelector('.footer-section p');
      const headerTexts = section.querySelectorAll('.header-sections h6, .header-sections h2');

      
      ScrollTrigger.create({
        trigger: section,
        start: "top 95%",
        onEnter: () => {
          items.forEach((li: any) => {
            li.classList.add('reveal');
          });
          textFooter.classList.add('animation-text');
          headerTexts.forEach((header: any) => header.classList.add('reveal'));
        },
        onLeaveBack: () => {
          items.forEach((li: any) => {
            li.classList.remove('reveal');
          });
          textFooter.classList.remove('animation-text');
          headerTexts.forEach((header: any) => header.classList.remove('reveal'));
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
            <div className="number">
              <h6>01_</h6>
            </div>
            <div className="title">
              <h2>Construcción de marca</h2>
            </div>
          </div>
          <div className="items">
            <ul>
              <span><li>Auditoría de marca</li></span>
              <span><li>Arquitectura de marca</li></span>
              <span><li>Naming</li></span>
              <span><li>Imagen de marca</li></span>
              <span><li>Propósito y personalidad de marca</li></span>
              <span><li>Manifesto de marca</li></span>
              <span><li>Diseño de personajes</li></span>
              <span><li>Cultura de marca</li></span>
              <span><li>Orientación en registro de marca</li></span>
             
            </ul>
            <img className='animate__animated animate__backInRight' src={ R } alt="" style={{ paddingLeft: '30px' }} />
          </div>
        </div>
        <div className="footer-section">
          <p className='animation-text'>
            // Desarrollamos tu marca con autenticidad y enfoque en el usuario.
          </p>

        </div>
      </section>

      <section className="service-section second-section">
        <div className="header-sections">
          <div className="identidad">
          <div className="number">
            <h6>02_</h6>
          </div>
          <div className="title">
            <h2>Identidad de <br /> marca</h2>
          </div>

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
            // Destaca frente a la competencia con una identidad sólida.
          </p>
          
        </div>
      </section>

      <section className="service-section third-section">
        <div className="header-sections">
          <div className="posicionamiento">
            <div className="number">
              <h6>03_</h6>
            </div>
            <div className="title">
              <h2>Posicionamiento de marca</h2>
            </div>
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
            // Implementamos estrategias de posicionamiento interno y externo.
          </p>


        </div>
      </section>

    </div>
  );
};
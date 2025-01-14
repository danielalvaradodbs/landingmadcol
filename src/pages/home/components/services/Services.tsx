import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './services.css';
import { FiguraAsteriscoR, FlechaUp, R } from '../../../../shared';

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  useEffect(() => {
    const sections = gsap.utils.toArray('.service-section');
    
    sections.forEach((section: any, _index) => {
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
      const headerTexts = section.querySelectorAll('h6, .header-sections h2');
      const figures = section.querySelectorAll('img')

      
      ScrollTrigger.create({
        trigger: section,
        start: "top 95%",
        onEnter: () => {
          items.forEach((li: any) => { li.classList.remove('reveal')});
          textFooter.classList.remove('animation-text');
          setTimeout(() => {
            items.forEach((li: any) => { li.classList.add('reveal')});
            textFooter.classList.add('animation-text');
          }, 50);
          headerTexts.forEach((header: any) => header.classList.add('reveal'));
          figures.forEach((figures: any) => figures.classList.add('animate__fadeInUp'));
        },
        onLeaveBack: () => {
          items.forEach((li: any) => {
            li.classList.remove('reveal');
          });
          textFooter.classList.remove('animation-text');
          headerTexts.forEach((header: any) => header.classList.remove('reveal'));
          figures.forEach((figures: any) => figures.classList.remove('animate__fadeInUp'));
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const animateText = (items: any) => {
    return items.map((item: any, index: any) => (
      <li className='reveal' style={{ animationDelay: `${index * 70}ms` }} key={ index }>
        { item }
      </li>
    ));
  };

  return (
    <div className="services">
      <section className="service-section first-section">
        <div className="number">
          <h6>01_</h6>
        </div>
        <div className="header-sections">
          <div className="marca">
            <div className="title">
              <h2>Construcción de marca</h2>
            </div>
          </div>
          <div className="items">
            <ul>
            {animateText([
              'Auditoría de marca',
              'Arquitectura de marca',
              'Naming',
              'Imagen de marca',
              'Propósito y personalidad de marca',
              'Manifesto de marca',
              'Diseño de personajes',
              'Cultura de marca',
              'Orientación en registro de marca'
            ])}
              {/* <span><li>Auditoría de marca</li></span>
              <span><li>Arquitectura de marca</li></span>
              <span><li>Naming</li></span>
              <span><li>Imagen de marca</li></span>
              <span><li>Propósito y personalidad de marca</li></span>
              <span><li>Manifesto de marca</li></span>
              <span><li>Diseño de personajes</li></span>
              <span><li>Cultura de marca</li></span>
              <span><li>Orientación en registro de marca</li></span> */}
             
            </ul>
            <img className='animate__animated animate__fadeInUp animate__delay-1s' src={ R } alt="" style={{ paddingLeft: '30px' }} />
          </div>
        </div>
        <div className="footer-section">
          <p className='animation-text'>
          // Desarrollamos tu marca con autenticidad y enfoque en el usuario, logrando relevancia y diferenciación en el mercado.
          </p>

        </div>
      </section>

      <section className="service-section second-section">
        <div className="number">
          <h6>02_</h6>
        </div>
        <div className="header-sections">
          <div className="identidad">
          <div className="title">
            <h2>Identidad de <br /> marca</h2>
          </div>

          </div>
          <div className="items">
            <ul>
            {animateText([
              'Manual de identidad visual',
              'Sistema de diseño',
              'Empaques',
              'Key Visual',
              'Identidad Social',
              'Guía de comunicaciones',
            ])}
              {/* <li>Manual de identidad visual</li>
              <li>Sistema de diseño</li>
              <li>Empaques</li>
              <li>Key Visual</li>
              <li>Identidad Social</li>
              <li>Guía de comunicaciones</li> */}
            </ul>
            <img className='animate__animated animate__fadeInUp animate__delay-1s' src={ FiguraAsteriscoR } alt="" style={{ paddingLeft: '30px' }} />
          </div>
        </div>
        <div className="footer-section">
          <p className='animation-text' style={{ marginTop: '40px' }}>
          // Destaca frente a la competencia con una identidad sólida, generando impresiones memorables y conexiones duraderas con tus clientes.
          </p>
          
        </div>
      </section>

      <section className="service-section third-section">
        <div className="number">
          <h6>03_</h6>
        </div>
        <div className="header-sections">
          <div className="posicionamiento">
            <div className="title">
              <h2>Posicionamiento de marca</h2>
            </div>
          </div>
          <div className="items">
            <ul>
            {animateText([
              'Estrategia de marca',
              'Social Storytelling',
              'Campañas digitales',
              'Contenido audiovisual',
              'Social listening',
              'Web',
              'Comunicaciones corporativas',
              'Endomarketing',
              'Acciones estratégicas',
            ])}
              {/* <li>Estrategia de marca</li>
              <li>Social Storytelling</li>
              <li>Campañas digitales</li>
              <li>Contenido audiovisual</li>
              <li>Social listening</li>
              <li>Web</li>
              <li>Comunicaciones corporativas</li>
              <li>Endomarketing</li>
              <li>Acciones estratégicas</li> */}
            </ul>
            <img className='animate__animated animate__fadeInUp animate__delay-1s' src={ FlechaUp } alt="" style={{ paddingLeft: '30px' }} />

          </div>
        </div>
        <div className="footer-section">
          <p className='animation-text'>
          // Implementamos estrategias de posicionamiento interno y externo, alineando el propósito de tu marca con tus objetivos de negocio.
          </p>


        </div>
      </section>

    </div>
  );
};
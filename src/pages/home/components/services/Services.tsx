import { SectionObserver } from '../../../../components/header/SectionObserver';
import './services.css';

export const Services = () => {
  return (
    
    <>
    <SectionObserver darkMode={ true }>
      <section className="services">
        <section className="first-section">
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
            </div>

          </div>

          <p className='footer-section'>
            // Desarrollamos tu marca con autenticidad y enfoque en el usuario, logrando relevancia y diferenciación en el mercado.
          </p>
        </section>
        <section className='second-section'>

          <div className="header-sections">
            <div className="identidad">
              <h6>02_</h6>
              <h2>Identidad de marca</h2>
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
            </div>
          </div>
          <p className='footer-section'>
            // Destaca frente a la competencia con una identidad sólida, generando impresiones memorables y conexiones duraderas con tus clientes.
          </p>
        </section>
        <section className='third-section'>

          <div className="header-sections">
            <div className="identidad">
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
            </div>
          </div>
          <p className='footer-section'>
            // Implementamos estrategias de posicionamiento interno y externo, alineando el propósito de tu marca con tus objetivos de negocio.
          </p>
        </section>
      </section>
    </SectionObserver>

    </>
  )
}

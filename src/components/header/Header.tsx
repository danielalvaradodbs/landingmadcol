
import { useEffect, useState } from 'react';
import './header.css';

import { logosMadcritter } from '../../shared';
export const Header = () => {

  const [isDark, setIsDark] = useState(false);

  const handleScroll = () => {
    const section = document.querySelector('.brandings');
    const sectionRect = section!.getBoundingClientRect();
    if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
      console.log('hi');
      setIsDark(true);
    } else {
      console.log('false');
      setIsDark(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <div className={ `header ${isDark ? 'dark' : ''}` }>
          <div className="col-6 logo animate__animated animate__fadeInRight">
           <img src={ logosMadcritter.logoMad.logo } alt={ logosMadcritter.logoMad.alt }  />
          </div>

          <div className="col-6 menu-items animate__animated animate__fadeIn" data-animation="to-top">
            <div className='menu-servicios'>
              <a href="">
              <label>Servicios</label>
              <label>Servicios</label>
              </a>
            </div>
              <span></span>
            <div className='menu-nosotros'>
              <a href="">
                <label>Nosotros</label>
                <label>Nosotros</label>
              </a>
            </div>
              <span></span>
            <div className='menu-contactos'>
              <a href="">
                <label>Contactos</label>
                <label>Contactos</label>
              </a>
            </div>
          </div>
          
        </div>
    </>
  )
}

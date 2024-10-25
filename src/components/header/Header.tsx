
import './header.css';

import { logosMadcritter } from '../../shared';
import { useDarkMode } from '../../hooks/DarkModeContext';
import { useEffect } from 'react';

export const Header = () => {

  const { isDark } = useDarkMode();

  useEffect(() => {
    console.log(isDark);
  
    
  }, [])
  

  return (
    <>
        <div className={ `header ${isDark ? 'dark' : ''}` }>
          <div className="col-6 logo animate__animated animate__fadeInUp">
            <a href="#">
              <img src={ logosMadcritter.logoMad.logo } alt={ logosMadcritter.logoMad.alt }  />
            </a>
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

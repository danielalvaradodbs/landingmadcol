
import './header.css';

import { logosMadcritter } from '../../shared';
import { useDarkMode } from '../../hooks/DarkModeContext';
import { useState } from 'react';

export const Header = () => {

  const { isDark } = useDarkMode();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <>
        <div className={ `header ${isDark ? 'dark' : ''}` }>
          <div className="col-6 logo animate__animated animate__fadeInUp animate__slow">
            <a href="#">
              <img src={ logosMadcritter.logoMad.logo } alt={ logosMadcritter.logoMad.alt }  />
            </a>
          </div>

          <div className="col-6 menu-items animate__animated animate__fadeIn animate__slow" data-animation="to-top">
            <div className="menu-logo">
              <a href="#">
                <img style={{ display: 'none' }} src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoMad.alt }  />
                <img style={{ display: 'none' }} src={ logosMadcritter.logoShortBlack.logo } alt={ logosMadcritter.logoMad.alt }  />
              </a>
            </div>
            <span style={{ display: 'none' }}></span>
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
                <label>Contacto</label>
                <label>Contacto</label>
              </a>
            </div>
          </div>

          <div className="menu-toggle animate__animated animate__fadeIn" onClick={ toggleMenu }>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          {menuOpen && (
          <div className="menu-items-mobile animate__animated animate__fadeIn">
            <div className="close"><a onClick={ toggleMenu }>Cerrar</a></div>

            <div className="submenu">
              <div className="logo">
                <img src={ logosMadcritter.logoMad.logo } alt="" />
              </div>
              <div className="items">
                <ul>
                  <li><a href="">Servicios</a></li>
                  <li><a href="">Nosotros</a></li>
                  <li><a href="">Contacto</a></li>
                </ul>

              </div>

            </div>

          </div>
        )}
          
        </div>
    </>
  )
}

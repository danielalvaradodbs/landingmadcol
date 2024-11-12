
import './header.css';

import { logosMadcritter } from '../../shared';
import { useDarkMode } from '../../hooks/DarkModeContext';

export const Header = () => {

  const { isDark } = useDarkMode();
  

  return (
    <>
        <div className={ `header ${isDark ? 'dark' : ''}` }>
          <div className="col-6 logo animate__animated animate__fadeInUp animate__slow">
            <a href="#">
              <img src={ logosMadcritter.logoMad.logo } alt={ logosMadcritter.logoMad.alt }  />
            </a>
          </div>

          <div className="col-6 menu-items animate__animated animate__fadeIn animate__slow" data-animation="to-top">
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
          
        </div>
    </>
  )
}

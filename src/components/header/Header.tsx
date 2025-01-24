
import './header.css';

import { brandings, logosMadcritter } from '../../shared';
import { useDarkMode } from '../../hooks/DarkModeContext';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
export const Header = () => {

  const { isDark } = useDarkMode();
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [blueScreen, setBlueScreen] = useState(false);

  const toggleMenu = () => {
    setBlueScreen(!blueScreen);
    if( !menuOpen ) {
      setTimeout(() => {
        setMenuOpen(!menuOpen);
      }, 1000);
    } else {
      setMenuOpen(!menuOpen);
      setBlueScreen(!blueScreen);
    }

  };

  const currentPath = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setScrollingDown(true);
          setIsCentered(true);
        } else {
          setScrollingDown(false);
          setIsCentered(false);
        }
      });
    });

    const conceptSection = document.querySelector('.brandings');
    // const fullPage = document.querySelector('#fullpage');

    if (conceptSection) {
      observer.observe(conceptSection);
    }

    return () => {
      if (conceptSection) {
        observer.unobserve(conceptSection);
      }
    };
  }, []);

  const sendToSectionId = ( id: string ) => {

    const section = document.querySelector(id);
    if (section) {
        brandings[2].isDark = false;
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if( menuOpen ) {
          toggleMenu();
        }
    }

    setTimeout(() => {
        if (window.fullpage_api) {
            window.fullpage_api.setFitToSection(false);
            brandings[2].isDark = true;

        }
    }, 1000);
  }
      
  

  return (
    <>
    { (currentPath.pathname !== '/meet-the-team' && currentPath.pathname !== '/thanks-contact') && (

        <div className={`header ${isDark ? 'dark' : ''}`}>
        <div 
          className={`col-6 logo animate__animated animate__fadeInUp animate__slow logo-desktop`}>
            <a href="/" >
              <img 
                src={ logosMadcritter.logoMad.logo } alt={ logosMadcritter.logoMad.alt }
                className={`${ scrollingDown ? 'move-logo' : ''}`}
                style={{ display: isDark ? 'inline' : 'none' }}
              />
              <img 
                src={ logosMadcritter.logoBlue.logo } alt={ logosMadcritter.logoMad.alt }
                className={`${ scrollingDown ? 'move-logo' : ''}`}
                style={{ display: !isDark ? 'inline' : 'none' }}
              />
            </a>
            
        </div>

        <div 
          className={`col-6 logo animate__animated animate__fadeInUp animate__slow logo-mobile`}>
            <a href="#" >
              <img 
                src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoMad.alt }
                className={`${ scrollingDown ? 'move-logo' : ''}`}
              />
            </a>
            
        </div>

          <div className={`col-6 menu-items ${ isCentered ? 'logo-centered' : ''} animate__animated animate__fadeIn animate__slow ${ scrollingDown ? 'move-menu' : ''}`} data-animation="to-top">
          <div className="menu-logo">
              <a href='/' style={{ display: isCentered ? 'inline' : 'none', marginLeft: 8, cursor: 'pointer' }}>
                <img 
                  src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoMad.alt }
                  className={`col-6 animate__animated animate__fadeIn`}
                />
                  
              </a>
              <span style={{ display: isCentered ? 'inline' : 'none' }}></span>
            </div>
            <div className='menu-servicios'>
              <a onClick={() => sendToSectionId('#services')}>
              <label>Servicios</label>
              <label>Servicios</label>
              </a>
            </div>
              <span></span>
            <div className='menu-nosotros'>
              <a onClick={() => sendToSectionId('#concept')}>
                <label>Nosotros</label>
                <label>Nosotros</label>
              </a>
            </div>
              <span></span>
            <div className='menu-contactos'>
              <a onClick={() => sendToSectionId('#contact')}>
                <label>Contacto</label>
                <label>Contacto</label>
              </a>
            </div>
          </div>

        <div className="header-mobile">
          <div className={`menu-toggle ${ blueScreen ? 'active' : '' } animate__animated animate__fadeIn`} onClick={ toggleMenu }>
            <span className="bar-1"></span>
            <span className="bar-2"></span>
            <span className="bar-3"></span>
          </div>
          
        </div>
          <div className={ `blue-screen ${ blueScreen ? '' : 'out' }` }></div>

            
            <div className="menu-items-mobile" style={{ display: menuOpen ? 'flex' : 'none' }}>
              {/* <div className="header-mobile">
                <div className="logo">
                    <img src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoShortWhite.alt } />
                 </div>
                 <div className={`menu-toggle ${ blueScreen ? 'active' : '' }`} onClick={ toggleMenu }>
                    <span className="bar-1"></span>
                    <span className="bar-2"></span>
                    <span className="bar-3"></span>
                </div>

              </div> */}
              <div className={`submenu ${ menuOpen ? 'active' : '' }`}>
                <span className={`animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' }`}>Menú</span>
                <span className={`animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' }`} style={{ paddingBottom: '20px', paddingTop: '10px' }}>-</span>
                <div className="items">
                  <ul>
                    <li className={`animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' }`}><a onClick={() => sendToSectionId('#services')}>Servicios</a></li>
                    <li className={`animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' } animate__slow`}><a onClick={() => sendToSectionId('#concept')}>Nosotros</a></li>
                    <li className={`animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' } animate__slower`}><a onClick={() => sendToSectionId('#contact')}>Contacto</a></li>
                  </ul>

                </div>

                <div className={`socials animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' } animate__slow`}>
                  <span><a target='_blank' href="https://www.linkedin.com/company/mad-critter">LINKEDIN</a></span>
                  <span><a target='_blank' href="https://instagram.com/madcritterco">INSTAGRAM</a></span>
                  <span><a target='_blank' href="https://www.tiktok.com/@madcritterco">TIKTOK</a></span>
                </div>

              </div>

            </div>
          
          
        </div>
    )}
    </>
  )
}

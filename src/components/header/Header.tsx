
import './header.css';

import { logosMadcritter } from '../../shared';
import { useDarkMode } from '../../hooks/DarkModeContext';
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
export const Header = () => {

  const { isDark } = useDarkMode();
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const currentPath = useLocation();
  

  // useEffect(() => {
  //   let lastScrollTop = 0;

  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //     if (scrollTop > lastScrollTop) {
  //       // setScrollingDown(true);
  //       // setIsCentered(true);
  //     } else if (scrollTop === 0) {
  //       // setScrollingDown(false);
  //       // setIsCentered(false);
  //     }

  //     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
  

  return (
    <>
    { currentPath.pathname !== '/meet-the-team' && (

        <div className={`header ${isDark ? 'dark' : ''}`}>
        <div 
          className={`col-6 logo animate__animated animate__fadeInUp animate__slow`}>
            <a href="#" >
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

          <div className={`col-6 menu-items ${ isCentered ? 'logo-centered' : ''} animate__animated animate__fadeIn animate__slow ${ scrollingDown ? 'move-menu' : ''}`} data-animation="to-top">
          <div className="menu-logo">
              <a href="#" style={{ display: isCentered ? 'inline' : 'none', marginLeft: 8 }}>
                <img 
                  style={{ display: !isDark ? 'inline' : 'none' }} 
                  src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoMad.alt }
                  className={`col-6 animate__animated animate__fadeIn`}
                />
                  
                <img 
                  style={{ display: isDark ? 'inline' : 'none' }} 
                  src={ logosMadcritter.logoShortBlack.logo } alt={ logosMadcritter.logoMad.alt }  
                  className={`col-6 animate__animated animate__fadeIn`}
                />
              </a>
              <span style={{ display: isCentered ? 'inline' : 'none' }}></span>
            </div>
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
    )}
    </>
  )
}


import './header.css';

import { brandings, logosMadcritter } from '../../shared';
import { useDarkMode } from '../../hooks/DarkModeContext';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from "react-router-dom";
export const Header = () => {

  const { isDark } = useDarkMode();
  const imgTablet: any = useRef(null);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [blueScreen, setBlueScreen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

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


  const handleServicesMouseEnter = () => {
    setIsServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    setIsServicesDropdownOpen(false);
  };


  const currentPath = useLocation();
  let visibleSection = true;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {

        visibleSection = entry.isIntersecting;
        if (!entry.isIntersecting) {
          setScrollingDown(true);
          setIsCentered(true);  

        } else {
          setScrollingDown(false);
          setIsCentered(false);
        }
      });
    }, { threshold: [0.1] });

    const conceptSection = document.querySelector('.brandings');

    if (conceptSection) {
      observer.observe(conceptSection);
    }

    return () => {
      if (conceptSection) {
        observer.unobserve(conceptSection);
      }
    };
  }, []);

  const handleResize = useCallback(() => {
    if(imgTablet.current) {
      if (!visibleSection ) {
  
        if( window.innerWidth < 899  ) {
          imgTablet.current.classList.remove('no-visible');
        }
  
        if( window.innerWidth > 899 ) {
          imgTablet.current.classList.add('no-visible');
        }
  
      } else {
        imgTablet.current.classList.add('no-visible');
      }

    }
  }, []);

  useEffect(() => {

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  }, [handleResize]);
  

  const sendToSectionId = ( id: string ) => {


    if( currentPath.pathname === '/terms-conditions' ) {
      window.location.href = '/#' + id.substring(1);
      console.log(window.location.href);
      const section = document.querySelector(id);
      console.log(section);
      if (section) {
        brandings[2].isDark = false;
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
    }
    if( menuOpen ) {
      toggleMenu();
    }
      return;
    }

    const section = document.querySelector(id);
    if (section) {
        brandings[2].isDark = false;
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if( menuOpen ) {
          toggleMenu();
        }
    } else {
      console.log('no found');
    }

    setTimeout(() => {
        if (window.fullpage_api) {
            window.fullpage_api.setFitToSection(false);
            brandings[2].isDark = true;
        }
    }, 1000);
    
  }

  const sendToLink = (link: string) => {
    window.location.href = link;
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  useEffect(() => {
    if( currentPath.pathname === '/terms-conditions') {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
          setScrollingDown(true);
          setIsCentered(true);
        } else if (currentScrollY === 0) {
          setScrollingDown(false);
          setIsCentered(false);
        }

        setLastScrollY(currentScrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {

      const sections = [
        document.querySelector('.concept.section-concept'),
        document.querySelector('.contacts'),
        document.querySelector('.pre-footer'),
        document.querySelector('.terms-conditions')
      ];

      let isDark = false;
      sections.forEach((section) => {
        if( section ) {
          const sectionRect = section.getBoundingClientRect();
          if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
            isDark = true;
          }
        }
      })
      
      setIsDarkBackground(isDark);
      
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);    
  

  return (
    <>
    { (currentPath.pathname !== '/meet-the-team' && currentPath.pathname !== '/thanks-contact') && (

        <div className={`header ${isDark ? 'dark' : ''}`}>
        <div 
          className={`col-6 logo animate__animated animate__fadeInUp animate__slow logo-desktop tablet`}
          style={{ display: currentPath.pathname !== '/terms-conditions' ? 'inline' : 'none' }}

        >
            <a href="/" style={{ display: !isCentered ? 'inline' : 'none' }} >
              <img
                width={'100%'} 
                src={ logosMadcritter.logoMad.logo } alt={ logosMadcritter.logoMad.alt }
                className={`${ scrollingDown ? 'move-logo isCenterMenu' : ''} `}
                // style={{ display: !isCentered ? 'inline' : 'none' }}

              />

              <img 
                width={'100%'} 
                ref={imgTablet}
                className={`${ !scrollingDown ? 'move-logo' : ''} invertible ${ isDarkBackground ? 'invert' : '' }`}
                src={ logosMadcritter.logoMad.logo } alt={ logosMadcritter.logoMad.alt }
                style={{ display: isCentered ? 'inline' : 'none' }}
              />
            
            </a>
            
        </div>
        <div 
          className={`col-6 logo animate__animated animate__fadeInUp animate__slow logo-desktop`}
          style={{ display: currentPath.pathname === '/terms-conditions' ? 'inline' : 'none'}}
          
          >
            <a href="/" >
             
              <img 
                src={ logosMadcritter.logoBlue.logo } alt={ logosMadcritter.logoMad.alt }
                className={`${ scrollingDown ? 'move-logo' : ''}`}
              />
            
            </a>
            
        </div>

        <div 
          className={`col-6 logo animate__animated animate__fadeInUp animate__slow logo-mobile`}>
            <a onClick={() => sendToLink('/') } style={{ cursor: 'pointer' }}>
              <img 
                src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoMad.alt }
                className={`${ scrollingDown ? 'move-logo' : ''} invertible ${ isDarkBackground ? 'invert' : '' }`}
                style={{ display: currentPath.pathname !== '/terms-conditions' && !isCentered ? 'inline' : 'none' }}
              />
              <img 
                src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoMad.alt }
                className={`${ scrollingDown ? '' : ''} invertible ${ isDarkBackground ? 'invert' : '' }`}
                style={{ display: currentPath.pathname !== '/terms-conditions' && isCentered ? 'inline' : 'none' }}
              />
              <img 
                src={ logosMadcritter.logoShortBlack.logo } alt={ logosMadcritter.logoMad.alt }
                style={{ display: currentPath.pathname === '/terms-conditions' ? 'inline' : 'none' }}
              />
            </a>
            
        </div>

          <div
            className={`col-6 menu-items ${ isCentered ? 'logo-centered' : ''} ${ currentPath.pathname === '/terms-conditions' ? 'termsHeader' : '' } animate__animated animate__fadeIn animate__slow ${ scrollingDown ? 'move-menu' : ''}`} data-animation="to-top"
           
    // background: rgba(16, 24, 32, 0.30);

          >
          <div className="menu-logo">
              <a href='/' style={{ display: isCentered ? 'inline' : 'none', marginLeft: 8, cursor: 'pointer' }}>
                <img 
                  src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoMad.alt }
                  className={`col-6 animate__animated animate__fadeIn`}
                />
                  
              </a>
              <span style={{ display: isCentered ? 'inline' : 'none' }}></span>
          </div>
            <div className='menu-nosotros' onMouseEnter={handleServicesMouseLeave}>
              <a onClick={() => sendToSectionId('#concept')}>
                <label>Nosotros</label>
                <label>Nosotros</label>
              </a>
            </div>
              <span></span>
              <div className='menu-servicios'
                onMouseEnter={handleServicesMouseEnter}
                // onMouseLeave={handleServicesMouseLeave}
              >
              <a onClick={() => sendToSectionId('#services')}>
              <label>Servicios</label>
              <label>Servicios</label>
              </a>
              {isServicesDropdownOpen && (
                <div 
                  className={`dropdown ${ isCentered ? 'logo-centered' : '' }`}
                  onMouseLeave={handleServicesMouseLeave}
                  >
                  {/* Aquí irían los elementos del menú desplegable */}
                  <a onClick={() => sendToSectionId('#first-section')}>Construcción de marca</a>
                  <span></span>
                  <a onClick={() => sendToSectionId('#second-section')}>Identidad de marca</a>
                  <span></span>
                  <a onClick={() => sendToSectionId('#third-section')}>Posicionamiento de marca</a>
                </div>
              )}
            </div>
              <span></span>
            <div className='menu-contactos' onMouseEnter={handleServicesMouseLeave}>
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
              <div 
                className={`col-6 logo animate__animated animate__fadeIn animate__faster logo-tablet`}>

                  <a onClick={ () => sendToLink('/') } className='a-mobile'>
                    <img 
                      src={ logosMadcritter.logoShortWhite.logo } alt={ logosMadcritter.logoMad.alt }
                    />
                  </a>
                  <a href="/" className='a-tablet'>
                    <img
                      width={'180px'} 
                      src={ logosMadcritter.logoMad.logo } alt={ logosMadcritter.logoMad.alt }
                      className={``}
                      style={{}}
                    />
                  </a>
               
              </div>
              <div className={`submenu ${ menuOpen ? 'active' : '' }`}>
                <span className={`animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' }`}>Menú</span>
                <span className={`line-span animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' }`} style={{ paddingBottom: '20px', paddingTop: '10px' }}>-</span>
                <div className="items">
                  <ul>
                    <li className={`animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' }`}><a onClick={() => sendToSectionId('#concept')}>Nosotros</a></li>
                    <li className={`animate__animated ${ menuOpen ? 'animate__fadeInUp' : '' } animate__slow`}><a onClick={() => sendToSectionId('#services')}>Servicios</a></li>
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

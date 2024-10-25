

import { useEffect, useRef, useState } from 'react';
import './branding.css';
import { brandings, IconPlus, ScrollDownIcon } from '../../../../shared';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDarkMode } from '../../../../hooks/DarkModeContext';

gsap.registerPlugin(ScrollTrigger);

export const Brandings = () => {

  const { setIsDark } = useDarkMode();

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

  useEffect(() => {
    
    if (!containerRef.current) return;

    const panels = document.querySelectorAll(".panel");
    const totalPanelsHeight = (panels.length - 1) * 100;

    gsap.to(containerRef.current, {
      yPercent: -totalPanelsHeight,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${panels.length * 100}vh`,
        snap: {
          snapTo: 1 / (panels.length - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: "power1.inOut"
        },
        onUpdate: ( self ) => {
          const index = Math.round(self.progress * (panels.length - 1));
          setIsDark(brandings[index].isDark);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);

  // useEffect(() => {
  //   if (!containerRef.current) return;

  //   const panels = document.querySelectorAll(".panel");
  //   const totalPanelsHeight = panels.length * 100; // Cada panel ocupa el 100% de la altura de la ventana

  //   gsap.to(containerRef.current, {
  //     yPercent: -totalPanelsHeight + 100, // Ajusta para que el último panel quede visible
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       pin: true,
  //       scrub: 1,
  //       end: () => `+=${totalPanelsHeight}vh`, // Finaliza el desplazamiento al final de todos los paneles
  //       onUpdate: (self) => {
  //         const index = Math.round(self.progress * (panels.length - 1));
  //         setIsDark(brandings[index].isDark);
  //       },
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);


  const sendToLink = ( link: string ) => {
    window.open(link, '_blank');
  }

  const handleMouseEnter = (index: number) => {
    setHoveredPanel(index);
  };

  const handleMouseLeave = () => {
    setHoveredPanel(null);
  };

  return (
    <>
      <section className="brandings" ref={containerRef} >
        { brandings.map((item: any, index: any) => (
          <section className="panel" key={ index } style={{ 
            backgroundImage: hoveredPanel === index && item.imageHover ? `url(${ item.imageHover })` : `url(${ item.image })`,
            backgroundColor: '#000',
            backgroundSize: 'cover',
            transition: 'background 0.3s ease-in-out',
            backgroundPosition: 'center',
           }}
          >

           <div className="mask">
            <div className="info">
            <div className="mask">
              <span>{ item.info }</span>
            </div>
            <div className="mask">
              <span>-</span>
            </div>
            <div className="mask title">
              <h4 className='animation-title'>{ item.title }</h4>
            </div>
            <div className="mask description">
              <p dangerouslySetInnerHTML={{ __html: item.description || <></> }}></p>
            </div>
            <div className="mask">
              <button 
                onClick={ () => sendToLink(item.linkButton) }
                className='animated-button'
                onMouseEnter={ () => handleMouseEnter(index) }
                onMouseLeave={ handleMouseLeave }
              >
                <label>Ver proyecto</label>
                <label className="hover-label">Ver proyecto</label>
                <img src={ IconPlus } />
              </button>

            </div>
            </div>

           </div>


            <div className="scroll-down-button">
              <a href="">Scroll down <img src={ ScrollDownIcon } alt="" /></a>
            </div>

          </section>
        ))}
      </section>

    </>
  )
}

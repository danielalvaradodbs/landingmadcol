

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
    const totalPanelsWidth = (panels.length - 1) * 100;

    gsap.to(containerRef.current, {
      xPercent: -totalPanelsWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${panels.length * 100}%`,
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
            backgroundSize: 'cover',
            transition: 'background 0.3s ease-in-out',
            backgroundPosition: 'center',
           }}
          >
            <div className="info animate__animated animate__fadeInTopRight">
              <span>{ item.info }</span>
              <span>-</span>
              <h4>{ item.title }</h4>
              <p dangerouslySetInnerHTML={{ __html: item.description || <></> }}></p>
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

            <div className="scroll-down-button">
              <a href="">Scroll down <img src={ ScrollDownIcon } alt="" /></a>
            </div>

          </section>
        ))}
      </section>

    </>
  )
}

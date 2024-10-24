

import { useEffect, useRef } from 'react';
import './branding.css';
import { brandings } from '../../../../shared';
import IconPlus from '../../../../assets/fi-rs-plus.svg';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Brandings = () => {

  const containerRef = useRef<HTMLDivElement | null>(null);

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
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };

  }, []);

  return (
    <>
      <section className="brandings" ref={containerRef} >
        { brandings.map((item: any, index: any) => (
          <section className="panel" key={ index } style={{ 
            backgroundImage: `url(${ item.image })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }} >
            {/* <img src={item.image} alt={ item.altImage } /> */}
            <div className="info">
              <span>{ item.info }</span>
              <span>-</span>
              <h4>{ item.title }</h4>
              <p dangerouslySetInnerHTML={{ __html: item.description || <></> }}></p>
              <button>Ver proyecto <img src={ IconPlus } alt="" /></button>
            </div>



          </section>
        ))}
      </section>

    </>
  )
}

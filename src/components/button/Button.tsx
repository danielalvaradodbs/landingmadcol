import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './button.css';

import PropTypes from 'prop-types';
// import { IconPlus } from '../../shared';

export const Button = ({ texto, onMouseEnter, onMouseLeave, onClick }: any ) => {

  const buttonRef = useRef(null);
  const flairRef = useRef(null);
  
  useEffect(() => {
    
    const button:any = buttonRef.current;
    const flair = flairRef.current;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e:any) => {
      const { left, top,width, height } = button.getBoundingClientRect();

      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );
  
      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );
  
      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top)
      };
    };

    const handleMouseEnter = (e:any) => {
      const { x, y } = getXY(e);
      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      })
    };  

    const handleMouseLeave = (e:any) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseMove = (e:any) => {
      const { x, y } = getXY(e);

      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2"
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mousemove', handleMouseMove);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mousemove', handleMouseMove);
    }

  }, [])
  
  return (
    <>     
    <button 
      ref={ buttonRef } 
      className="button button--stroke" 
      data-block="button"
      onClick={ onClick }
      onMouseEnter={ onMouseEnter }
      onMouseLeave={ onMouseLeave }
    >
      <label ref={flairRef} className="button__flair"></label>
      <label className="button__label">{ texto }</label>
      <label className="button__label hover-label">{ texto }</label>
      {/* <img src={ IconPlus} /> */}
    </button>
    </>
  )
}

Button.propTypes = {
  texto: PropTypes.string.isRequired, // Haciendo la prop 'texto' obligatoria
  sendToLink: PropTypes.func,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func
};
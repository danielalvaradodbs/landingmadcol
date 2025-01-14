import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './button.css';

import PropTypes from 'prop-types';

export const Button = ({ 
  texto, 
  onMouseEnter, 
  onMouseLeave, 
  onClick, 
  backgroundColor, 
  hoverBorderColor, 
  hoverBackgroundColor, 
  urlIcon,
  width,
  height,
  border
}: any ) => {

  const buttonRef = useRef(null);
  const flairRef = useRef(null);
  const labelRef = useRef(null);
  const labelRefHover = useRef(null);
  
  useEffect(() => {
    
    const button: any = buttonRef.current;
    const flair: any = flairRef.current;
    const label: any = labelRef.current;
    const labelHover: any = labelRefHover.current;


    label.style.setProperty('--url-icon', `url(${urlIcon})`);
    labelHover.style.setProperty('--url-icon', `url(${urlIcon})`);

    button.style.setProperty('width', width);
    button.style.setProperty('height', height);
    button.style.setProperty('border', border);

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

      button.style.setProperty('border-color', hoverBorderColor);
      flair.style.setProperty('--flair-color', hoverBackgroundColor);

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

      button.style.setProperty('border-color', 'rgba(255, 255, 255, 0.20)');
      flair.style.setProperty('--flair-color', 'transparent');


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
      style={{ backgroundColor }}
      data-block="button"
      onClick={ onClick }
      onMouseEnter={ onMouseEnter }
      onMouseLeave={ onMouseLeave }
    >
      <label ref={ flairRef } className="button__flair"></label>
      <label ref={ labelRef } className="button__label">{ texto }</label>
      <label style={{ left: '20%' }} ref={ labelRefHover } className="button__label hover-label">{ texto }</label>
      <img src={ urlIcon } style={{ zIndex: 1 }} />
    </button>
    </>
  )
}

Button.propTypes = {
  texto: PropTypes.string.isRequired,
  sendToLink: PropTypes.func,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  backgroundColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  urlIcon: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  border: PropTypes.string,
};
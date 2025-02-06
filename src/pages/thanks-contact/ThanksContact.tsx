

import { useEffect, useRef, useState } from 'react';
import { BackButtonFigureBlue, BackButtonFigureWhite, FiguraAsterisco, Flecha,  } from '../../shared';
import './thanks-contact.css';
import { Button } from '../../components/button/Button';
export const ThanksContact = () => {  

  const button = useRef(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const buttonCurrent: any = button.current;

    if (buttonCurrent) {
        buttonCurrent.addEventListener('mouseover', () => setIsHover(true));
        buttonCurrent.addEventListener('mouseout', () => setIsHover(false));
    }

    window.scrollTo(0, 0);
  }, []);

  const sendToLink = ( link: string ) => {
    window.location.href = link;
  }

  const handleMouseEnter = () => {
      setIsHover(!isHover);
  };

  const handleMouseLeave = () => {
      setIsHover(!isHover);
  };
  

  return (
    <>
        <section className="thanks-contact">
          <div className="title-thanks">
            <h2> ¡Tenemos <br/>tus datos!</h2>
            <img className='flecha' src={ Flecha }  alt="" style={{ transform: 'rotate(-90deg)' }} />
            <img className='figura' src={ FiguraAsterisco }  alt="" />
          </div>
          <div className="text-thanks">
            <p>
              - <br/>
              En un lapso de tiempo de máximo <strong>48 horas</strong> nuestro equipo comercial se comunicará contigo. <strong>¡Queremos conocerte!</strong>

            </p>
          </div>

          <div className="button-back">

            <Button
              texto='Volver'
              backgroundColor='rgba(255, 255, 255, 0.20)'
              hoverBorderColor='#FF2951'
              hoverBackgroundColor='#FF2951'
              urlIcon={ isHover ? BackButtonFigureWhite : BackButtonFigureBlue  }
              onClick= { () => sendToLink('/') }
              onMouseEnter={ handleMouseEnter }
              onMouseLeave={ handleMouseLeave }
            />
                {/* <a ref={ button } href='/'>
                    <img style={{ display: !isHover ? 'none' : 'inline' }} src={BackButtonFigureWhite} alt="" />
                    <img style={{ display: isHover ? 'none' : 'inline' }} src={BackButtonFigureBlue} alt="" />
                    Volver
                </a> */}
            </div>
        </section>
    </>
  )
}



import { useEffect, useRef, useState } from 'react';
import { BackButtonFigureBlue, BackButtonFigureWhite, FiguraAsterisco, Flecha,  } from '../../shared';
import './thanks-contact.css';
export const ThanksContact = () => {  

  const button = useRef(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const buttonCurrent: any = button.current;

        if (buttonCurrent) {
            buttonCurrent.addEventListener('mouseover', () => setIsHover(true));
            buttonCurrent.addEventListener('mouseout', () => setIsHover(false));
        }
  }, [])
  

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
              En un lapso de tiempo de máximo 48 horas nuestro equipo comercial se comunicará contigo. ¡Queremos conocerte!

            </p>
          </div>

          <div className="button-back">
                <a ref={ button } href='/'>
                    <img style={{ display: !isHover ? 'none' : 'inline' }} src={BackButtonFigureWhite} alt="" />
                    <img style={{ display: isHover ? 'none' : 'inline' }} src={BackButtonFigureBlue} alt="" />
                    Volver
                </a>
            </div>
        </section>
    </>
  )
}

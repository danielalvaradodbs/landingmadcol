import { useEffect, useRef, useState } from 'react';
import './clientsLogos.css';
import { clientsLogos } from '../../../../../../shared';

export const ClientsLogos = () => {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(entry.isIntersecting);
            setTimeout(() => {
              setAnimation(entry.isIntersecting);
    
            }, 1000);
          },
          {
            root: null,
            threshold: 0.1
          },
    
        );
        
        setIsVisible(!isVisible);
        setAnimation(!animation);
        if (sectionRef.current) {
          observer.observe(sectionRef.current);
        }
    
    
        return () => {
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        };
      }, []);
    

  return (
    <>

        <section className="clientLogos" ref={ sectionRef }>
          <div style={{ display: 'flex', gap: 20 }}>
          <div className={`slider-brands ${ animation ? 'animation' : '' }`}>
            {[...clientsLogos, ...clientsLogos].map((item: any, index: any) => (
                <div className="slider" key={ index }>
                    <div className="brand">
                        <img 
                        src={ item.image } 
                        alt={ item.altImage } 
                        style={{ aspectRatio: 3/2, objectFit: 'contain' }} 
                        />
                    </div>
                </div>
            ))}
          </div>
          <div className={`slider-brands ${ animation ? 'animation' : '' }`}>
            {[...clientsLogos, ...clientsLogos].map((item: any, index: any) => (
                    <div className="slider" key={ index }>
                    <div className="brand">
                        <img 
                        src={ item.image } 
                        alt={ item.altImage } 
                        style={{ aspectRatio: 3/2, objectFit: 'contain' }} 
                        />
                    </div>
                    </div>
                
            ))}
          </div>
          {/* <div className={`slider-brands ${ animation ? 'animation' : '' }`}>
          { [...clientsLogos, ...clientsLogos].map((item: any, index: any) => (
                <div className="slider" key={ index }>
                  <div className="country">
                    <span>{item.country}</span>
                  </div>
                  <div className="brand">
                    <img 
                      src={ item.img } 
                      alt={ item.altImg }
                      style={{ aspectRatio: 3/2, objectFit: 'contain' }} 
                      />
                  </div>

                </div>
          ))}
          </div> */}

          </div>
        </section>
    </>
  )
}

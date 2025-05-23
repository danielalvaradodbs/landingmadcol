
import { useEffect, useRef, useState } from 'react';
import { clients } from '../../../../shared';
import './clients.css';
import { useTranslation } from 'react-i18next';

export const Clients = () => {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animation, setAnimation] = useState(false);

  const { t } = useTranslation();

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

        <section className="clients" ref={ sectionRef }>
          <div className="title-clients">
            <h2 className={`${ isVisible ? 'reveal' : '' }`}>{t('clients.title')}</h2>
            {/* <img 
              src={ FiguraClientes } alt=""
              className={`${ isVisible ? 'reveal' : '' }`}
              style={{ position: 'absolute', top:'25%', left: '21%' }}
            /> */}
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
          <div className={`slider-brands ${ animation ? 'animation' : '' }`}>
          { [...clients, ...clients].map((item: any, index: any) => (
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
                  <div className="type">
                    <span>{ t(item.type) }</span>
                  </div>

                </div>
            
          ))}
          </div>
          <div className={`slider-brands ${ animation ? 'animation' : '' }`}>
          { [...clients, ...clients].map((item: any, index: any) => (
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
                  <div className="type">
                    <span>{ item.type }</span>
                  </div>

                </div>
            
          ))}
          </div>

          </div>
        </section>
    </>
  )
}

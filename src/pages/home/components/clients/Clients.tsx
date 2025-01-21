
import { useEffect, useRef, useState } from 'react';
import { clients, FiguraClientes } from '../../../../shared';
import './clients.css';

export const Clients = () => {

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1
      },

    );
    
    setIsVisible(!isVisible);
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
            <h2 className={`${ isVisible ? 'reveal' : '' }`}>Clientes</h2>
            <img 
              src={ FiguraClientes } alt=""
              className={`${ isVisible ? 'reveal' : '' }`}
              style={{ position: 'absolute', top:'25%', left: '21%' }}
            />
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
          <div className="slider-brands">
          { [...clients, ...clients].map((item: any, index: any) => (
                <div className="slider" key={ index }>
                  <div className="country">
                    <span>{item.country}</span>
                  </div>
                  <div className="brand">
                    <img 
                      src={ item.img } 
                      alt={ item.altImg } 
                      width={ 100 } 
                      style={{ aspectRatio: 3/2, objectFit: 'contain' }} 
                      />
                  </div>
                  <div className="type">
                    <span>{ item.type }</span>
                  </div>

                </div>
            
          ))}
          </div>
          <div className="slider-brands">
          { [...clients, ...clients].map((item: any, index: any) => (
                <div className="slider" key={ index }>
                  <div className="country">
                    <span>{item.country}</span>
                  </div>
                  <div className="brand">
                    <img 
                      src={ item.img } 
                      alt={ item.altImg } 
                      width={ 100 } 
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


import Slider from 'react-slick';
import { Button } from '../../../../components/button/Button';
import { FlechaButton } from '../../../../shared';
import './clientsMethod.css';
import { useEffect, useRef, useState } from 'react';
import { clientsMethod } from '../../../../shared/clientsMethod';
import { CardClients } from './components/cardClients/CardClients';
import { ClientsLogos } from './components/clientsLogos/ClientsLogos';
import { useInView } from '../../../../hooks/useInView';

export const ClientsMethod = () => {

    let sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = clientsMethod.length;

    const { ref: sectionRef, isVisible } = useInView({
        threshold: 0.0
    });

    const useSlidesToShow = () => {
    
        const [slides, setSlides] = useState(3);

        const updateSlides = () => {
            if (window.innerWidth <= 555) setSlides(1);
            else if (window.innerWidth <= 768) setSlides(2);
            else if (window.innerWidth <= 1024) setSlides(2);
            else if (window.innerWidth <= 1440) setSlides(2);
            else setSlides(3);
        };

        useEffect(() => {
            updateSlides();
            window.addEventListener("resize", updateSlides);
            return () => window.removeEventListener("resize", updateSlides);
        }, []);

        return slides;
    };
    const slidesToShow = useSlidesToShow();

   const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        // slidesToShow,
        slidesToScroll: 1,
        variableWidth: true,
        beforeChange: (_oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
    };

    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    const isFirst = currentSlide === 0;
    const isLast = currentSlide >= totalSlides - slidesToShow;

  return (
    <>
        <div 
            ref={ sectionRef } 
            className={`clientsMethod ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
        >
            <div className="title">
                <h2>Clientes que ya apuestan <br/> <strong>por nuestra metodología</strong></h2>
            </div>
            <div className="slider-container">
                <Slider ref={ sliderRef } {...settings}>
                    { clientsMethod.map((item: any, index: number) => (
                        <div key={ index }>
                            <CardClients 
                                profileInfo={ item.profileInfo }  
                                // image={ item.image } 
                                description={ item.description } 
                                backgroundColor={ item.backgroundColor }
                                colorFooter={ item.colorFooter }
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className='buttons'>
                <div className={isFirst ? "btn-wrapper disabled" : "btn-wrapper"}>
                    <Button 
                        texto=''
                        backgroundColor={'#101820'}
                        hoverBorderColor={'#101820'}
                        urlIcon={ FlechaButton }
                        onClick={ previous }
                        border={'100px'}
                        width={'40px'}
                        height={'40px'}
                    />
                </div>
                <div className={isLast ? "btn-wrapper disabled" : "btn-wrapper"}>
                    <Button 
                        texto=''
                        backgroundColor={'#101820'}
                        hoverBorderColor={'#101820'}
                        urlIcon={ FlechaButton }
                        onClick={ next }
                        border={'100px'}
                        width={'40px'}
                        height={'40px'}
                    />
                </div>
            </div>
            <ClientsLogos />
        </div>
    </>
  )
}

import { useRef, useState } from 'react';
import { FlechaButton, ideasBrandings } from '../../../../shared';
import { Card } from './components/card/Card';
import Slider from "react-slick";

import './yourBrand.css';
import { Button } from '../../../../components/button/Button';
import { useInView } from '../../../../hooks/useInView';

export const YourBrand = () => {

    let sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const totalSlides = ideasBrandings.length;

    const { ref: sectionRef, isVisible } = useInView({
        threshold: 0.0
    });

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
    const isLast = currentSlide >= totalSlides - 1;

  return (
    <>
        <div 
            ref={ sectionRef } 
            className={`yourBrand ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
        >
            <div className="title">
                <h2>¿Qué podemos <br/><strong>hacer por tu marca?</strong></h2>
            </div>
            <div className="slider-container">
                <Slider ref={ sliderRef } {...settings}>
                    { ideasBrandings.map((item: any, index: number) => (
                        <div key={ index }>
                            <Card  image={ item.image } description={ item.description } />
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
        </div>
    </>
  )
}

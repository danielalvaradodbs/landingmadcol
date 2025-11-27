import { useRef, useState } from 'react';
import { FlechaButton, ideasBrandings } from '../../../../shared';
import { Card } from './components/card/Card';
import Slider from "react-slick";

import './yourBrand.css';
import { Button } from '../../../../components/button/Button';

export const YourBrand = () => {

    let sliderRef = useRef<Slider>(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesToShow = 3;
    const totalSlides = ideasBrandings.length;

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1,
        beforeChange: (_oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    infinite: false,
                }
            }
        ]
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
        <div className="yourBrand">
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

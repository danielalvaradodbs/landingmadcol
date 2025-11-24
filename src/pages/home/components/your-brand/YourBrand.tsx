import { useRef } from 'react';
import { FlechaButton, ideasBrandings } from '../../../../shared';
import { Card } from './components/card/Card';
import Slider from "react-slick";

import './yourBrand.css';
import { Button } from '../../../../components/button/Button';

export const YourBrand = () => {

    let sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };

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
                <Button 
                    texto=''
                    backgroundColor={'#1018201A'}
                    urlIcon={ FlechaButton }
                    onClick={ previous }
                    width={'100px'}
                    height={'40px'}
                />
                <Button 
                    texto=''
                    backgroundColor={'#1018201A'}
                    urlIcon={ FlechaButton }
                    onClick={ next }
                    border={'100px'}
                    width={'100px'}
                    height={'40px'}
                />
                {/* <button className="button" onClick={previous}>Previous </button>
                <button className="button" onClick={next}>Next</button> */}
            </div>
        </div>
    </>
  )
}

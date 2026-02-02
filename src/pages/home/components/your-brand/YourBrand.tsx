import { useRef, useState } from 'react';
import { FlechaButton, ideasBrandings } from '../../../../shared';
import { Card } from './components/card/Card';
import Slider from "react-slick";

import './yourBrand.css';
import { Button } from '../../../../components/button/Button';
import { useInView } from '../../../../hooks/useInView';
import { useTranslation } from 'react-i18next';

export const YourBrand = () => {

    let sliderRef = useRef<Slider>(null);

    const { t } = useTranslation();

    const { ref: sectionRef, isVisible } = useInView({
        threshold: 0.0
    });

    const [isFirst, setIsFirst] = useState(true);
    const [isLast, setIsLast] = useState(false);


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        // slidesToShow,
        slidesToScroll: 1,
        variableWidth: true,
        afterChange: () => {
            requestAnimationFrame(checkEdges);
        },
    };

    const next = () => {
        sliderRef.current?.slickNext();
    };
    const previous = () => {
        sliderRef.current?.slickPrev();
    };

    const checkEdges = () => {
        const list = document.querySelector(
            '.yourBrand .slick-list'
        ) as HTMLElement;

        const cards = document.querySelectorAll(
            '.yourBrand .sliderCard'
        );

        if (!list || cards.length === 0) return;

        const firstCard = cards[0] as HTMLElement;
        const lastCard = cards[cards.length - 1] as HTMLElement;

        const listRect = list.getBoundingClientRect();
        const firstRect = firstCard.getBoundingClientRect();
        const lastRect = lastCard.getBoundingClientRect();

        setIsFirst(firstRect.left >= listRect.left - 1);

        setIsLast(lastRect.right <= listRect.right + 1);
    };

  return (
    <>
        <div 
            ref={ sectionRef } 
            className={`yourBrand ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
        >
            <div className="title">
                <h2 dangerouslySetInnerHTML={{ __html: t('yourBrand.title') }}></h2>
            </div>
            <div className="slider-container">
                <Slider ref={ sliderRef } {...settings}>
                    { ideasBrandings.map((item: any, index: number) => (
                        <div key={ index }>
                            <Card  image={ item.image } description={ t(item.description) } />
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

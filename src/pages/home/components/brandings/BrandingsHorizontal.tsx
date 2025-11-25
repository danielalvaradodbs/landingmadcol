import ReactFullpage from '@fullpage/react-fullpage';
import './brandingsHorizontal.css';
import { brandings, FlechaButton, IconPlus } from '../../../../shared';
import { Button } from '../../../../components/button/Button';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const BrandingsHorizontal = () => {

    const { t } = useTranslation();
    let [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredPanel, setHoveredPanel] = useState<number | null>(null);

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === brandings.length - 1;


    const sendToLink = ( link: string ) => {
        window.open(link, '_blank');
    }

    const handleMouseEnter = (index: number) => {
        setHoveredPanel(index);
    };
    
    const handleMouseLeave = () => {
    setHoveredPanel(null);
    };
    
    const resetAnimations = () => {
        const sectionElements = document.querySelectorAll('.mask, .animationInUp');
    
        sectionElements.forEach((el) => {
            
            el.classList.remove('animationInUp', 'animationOut', 'animationUp', 'mask');
            el.classList.add('animationOut');
            setTimeout(() => {
                el.classList.remove('mask', 'animationOut');
                el.classList.add('animationInUp');
            }, 200);
        });
    };
    
    const handleSlideLeft = (fullpageApi: any) => {
        if (!isFirstSlide) {
            fullpageApi.moveSlideLeft();
        }
    };

    const handleSlideRight = (fullpageApi: any) => {
        if (!isLastSlide) {
            fullpageApi.moveSlideRight();
        }
    };

  return (
    <>
        <ReactFullpage
            // debug
            credits={{ enabled: false }}
            controlArrows={false}
            navigation={ false }
            autoScrolling={false}
            scrollOverflow={ false }
            scrollBar={false}
            slidesNavigation={false}
            css3={ false }
            onSlideLeave={(_section, _origin, destination, _direction) => {
                resetAnimations();
                // setFixedBackgroundSlide(destination.index);
                setTimeout(() => {
                    setCurrentIndex(destination.index);
                }, 500);
            }}
            fitToSection={ false }
            render={( { fullpageApi }) => (
            <ReactFullpage.Wrapper>

                <div className="brandings" id='portfolio'>
                    <div className="horizontalBranding">
                        <div className="title">
                            <h2>Portafolio</h2>
                        </div>
                    </div>
                    <div className="section">
                        { brandings.map((item: any, index: any) => (
                            <div className="slide" key={ index }
                                style={{
                                    backgroundImage: (hoveredPanel === index && item.imageHover) ? `url(${ item.imageHover })` : `url(${ item.image })`,
                                    backgroundSize: 'cover',
                                    // backgroundAttachment: fixedBackgroundSlide === index ? '' : 'fixed',
                                    backgroundPosition: 'center',
                                    transition: 'background 0.3s ease-in-out',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >

                                <div className="mask">
                                <div className="info">
                                    <div className="mask">
                                        <span>{t(brandings[currentIndex]?.info)}</span>
                                    </div>
                                    <div className="mask">
                                        <span>-</span>
                                    </div>
                                    <div className="mask title">
                                        <h4 className='animation-title'>{t(brandings[currentIndex]?.title)}</h4>
                                    </div>
                                    <div className="mask description">
                                        <p dangerouslySetInnerHTML={{ __html: t(brandings[currentIndex]?.description) || <></> }}></p>
                                    </div>
                                    <div className="mask">
                                        <Button 
                                            idButton={ brandings[currentIndex].altImage }
                                            texto={t('verProyecto')}
                                            backgroundColor='transparent'
                                            hoverBorderColor='#7595B6'
                                            hoverBackgroundColor='#7595B6'
                                            urlIcon={ IconPlus }
                                            onClick= { () => sendToLink(brandings[currentIndex].linkButton) } 
                                            onMouseEnter={ () => handleMouseEnter(currentIndex) }
                                            onMouseLeave={ handleMouseLeave }
                                        />

                                    </div>
                                </div>

                                </div>

                               

                            </div>
                        ))}
                    </div>

                     <div className="buttons-controls">
                        <div className={`back ${ isFirstSlide ? 'is-disabled' : '' } `}>
                            <Button
                                texto={''}
                                backgroundColor={'#7595B6'}
                                hoverBorderColor='#fff'
                                hoverBackgroundColor='#fff'
                                urlIcon={ FlechaButton }
                                onMouseLeave={ handleMouseLeave }
                                onClick={() =>  handleSlideLeft(fullpageApi)}
                            />

                        </div>
                        <div className={`front ${ isLastSlide ? 'is-disabled' : '' } `}>
                            <Button
                                texto={''}
                                backgroundColor={'#7595B6'}
                                hoverBorderColor='#fff'
                                hoverBackgroundColor='#fff'
                                urlIcon={ FlechaButton }
                                onClick={() => handleSlideRight(fullpageApi)}
                                onMouseLeave={handleMouseLeave}
                            />

                        </div>
                    </div>
                </div>
            </ReactFullpage.Wrapper>
            )}
        />
    </>
  )
}

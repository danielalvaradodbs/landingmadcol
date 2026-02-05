import ReactFullpage from '@fullpage/react-fullpage';
import './brandingsHorizontal.css';
import { brandings, FlechaBlue, FlechaButton, IconPlus, PlusBlue } from '../../../../shared';
import { Button } from '../../../../components/button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

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

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto',
        });
    }, []);

  return (
    <>
        <ReactFullpage
            // debug
            credits={{ enabled: false }}
            controlArrows={false}
            navigation={ false }
            autoScrolling={false}
            scrollOverflow={ false }
            scrollBar={true}
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
            normalScrollElements='.brandings-wrapper'
            render={( { fullpageApi }) => (
            <ReactFullpage.Wrapper>

                <div className="brandings" id='portfolio'>
                    <div className="horizontalBranding">
                        <div className="title animate__animated animate__fadeInUp">
                            <h2 dangerouslySetInnerHTML={{ __html: t('brandings.title')}}></h2>
                            <span dangerouslySetInnerHTML={{ __html: t('brandings.subTitle') }}></span>
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
                                hoverBorderColor='#101820'
                                hoverBackgroundColor='#101820'
                                urlIcon={ FlechaButton }
                                onMouseLeave={ handleMouseLeave }
                                onClick={() =>  handleSlideLeft(fullpageApi)}
                            />

                        </div>
                        <div className={`front ${ isLastSlide ? 'is-disabled' : '' } `}>
                            <Button
                                texto={''}
                                backgroundColor={'#7595B6'}
                                hoverBorderColor='#101820'
                                hoverBackgroundColor='#101820'
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

        <div className="buttonsPortfolio">
            <Button
                    texto={ t('brandings.buttons.viewAllPortfolio') }
                    urlIcon={ FlechaBlue }
                    hoverBorderColor={'#101820'}
                    hoverBackgroundColor={'#101820'}
                    backgroundColor={'transparent'}
                    onClick={() => sendToLink('https://www.behance.net/madcritter')}
                    // border={'#101820'}
                />
                <Button
                    texto={ t('brandings.buttons.seeMoreProjects') }
                    urlIcon={ PlusBlue }
                    hoverBorderColor={'#101820'}
                    backgroundColor={'#101820'}
                    hoverBackgroundColor={'#fff'}
                    onClick={() => sendToLink('https://dribbble.com/madcritter1122') }
                    // border={'#101820'}
                />
        </div>
    </>
  )
}
